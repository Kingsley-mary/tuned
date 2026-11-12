// Web Audio API synthesizer for Tuned channel bumpers & station IDs.
// Plays a warm vibraphone/marimba 4-note upward arpeggio per channel with stereo delay echo.

export const DEFAULT_JINGLE_NOTES = [523.25, 659.25, 783.99, 880.0] as const; // C5, E5, G5, A5

// Unique 4-note upward arpeggio motif (in Hz) for every built-in channel
const CHANNEL_CHIMES: Record<string, readonly [number, number, number, number]> = {
  tech: [523.25, 659.25, 783.99, 880.0],          // C5, E5, G5, A5 (Crisp Major 6)
  movies: [293.66, 440.0, 587.33, 739.99],        // D4, A4, D5, F#5 (Cinematic D Major)
  cartoons: [698.46, 880.0, 1046.5, 1174.66],     // F5, A5, C6, D6 (Playful F Major 6)
  industry: [392.0, 493.88, 587.33, 739.99],      // G4, B4, D5, F#5 (Bright Gmaj7)
  music: [329.63, 415.3, 493.88, 622.25],         // E4, G#4, B4, D#5 (Lush Emaj7)
  science: [440.0, 554.37, 659.25, 830.61],       // A4, C#5, E5, G#5 (Cosmic Amaj7)
  food: [392.0, 523.25, 587.33, 783.99],          // G4, C5, D5, G5 (Warm hearth fourths)
  games: [523.25, 622.25, 783.99, 932.33],        // C5, Eb5, G5, Bb5 (Arcade Cm7)
  sports: [349.23, 440.0, 523.25, 698.46],        // F4, A4, C5, F5 (Stadium fanfare)
  travel: [587.33, 739.99, 880.0, 987.77],        // D5, F#5, A5, B5 (Sunlit D Major 6)
  film: [220.0, 329.63, 440.0, 523.25],           // A3, E4, A4, C5 (Moody A minor)
  fitness: [659.25, 783.99, 987.77, 1174.66],     // E5, G5, B5, D6 (Upbeat Em7)
  art: [392.0, 440.0, 587.33, 739.99],            // G4, A4, D5, F#5 (Painterly add9)
  design: [493.88, 622.25, 739.99, 830.61],       // B4, D#5, F#5, G#5 (Sleek B Major 6)
  learning: [523.25, 587.33, 783.99, 987.77],     // C5, D5, G5, B5 (Inquisitive Cmaj9)
  documentaries: [196.0, 293.66, 392.0, 493.88],  // G3, D4, G4, B4 (Deep broadcast G)
  architecture: [329.63, 493.88, 659.25, 739.99], // E4, B4, E5, F#5 (Open structural)
  religion: [349.23, 523.25, 698.46, 880.0],      // F4, C5, F5, A5 (Resonant chime)
  cars: [440.0, 554.37, 659.25, 783.99],          // A4, C#5, E5, G5 (Punchy A7)
  business: [587.33, 739.99, 880.0, 1108.73],     // D5, F#5, A5, C#6 (Sharp Dmaj7)
  news: [392.0, 587.33, 783.99, 880.0],           // G4, D5, G5, A5 (Broadcast desk)
  entertainment: [466.16, 587.33, 698.46, 783.99],// Bb4, D5, F5, G5 (Showbiz Bb6)
};

// Deterministic scale bank for custom added YouTube channels
const CUSTOM_CHIME_BANK: readonly [number, number, number, number][] = [
  [523.25, 659.25, 783.99, 987.77], // Cmaj7
  [587.33, 698.46, 880.0, 1046.5],  // Dm7
  [392.0, 493.88, 659.25, 783.99],  // G6
  [440.0, 523.25, 659.25, 783.99],  // Am7
  [349.23, 440.0, 523.25, 659.25],  // Fmaj7
  [466.16, 587.33, 698.46, 880.0],  // Bbmaj7
];

let sharedAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const AudioCtx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) return null;
  if (!sharedAudioCtx) {
    sharedAudioCtx = new AudioCtx();
  }
  if (sharedAudioCtx.state === 'suspended') {
    sharedAudioCtx.resume().catch(() => {});
  }
  return sharedAudioCtx;
}

/**
 * Call inside any user interaction (e.g. turning on the TV) so Chrome/Safari
 * allow station-break chimes cleanly after videos end.
 */
export function unlockBumperAudio(): void {
  try {
    getAudioContext();
  } catch {}
}

export function getChannelChimeNotes(categoryId: string): readonly [number, number, number, number] {
  const preset = CHANNEL_CHIMES[categoryId];
  if (preset) return preset;

  let hash = 0;
  for (let i = 0; i < categoryId.length; i++) {
    hash = (hash * 31 + categoryId.charCodeAt(i)) | 0;
  }
  return CUSTOM_CHIME_BANK[Math.abs(hash) % CUSTOM_CHIME_BANK.length];
}

/**
 * Play a warm vibraphone/marimba 4-note upward arpeggio (spaced 90ms apart)
 * by layering a main sine wave with a softer triangle wave one octave higher,
 * snappy 5ms attack, bouncy 0.6s exponential decay, and a slight stereo delay echo.
 */
export function playJingle(
  notes: readonly number[] = DEFAULT_JINGLE_NOTES,
  options: { volume?: number; muted?: boolean } = {}
): void {
  if (options.muted || typeof window === 'undefined') return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime + 0.01;
    const stepSec = 0.09; // 90ms apart
    const attackSec = 0.005; // 5ms snappy attack
    const decaySec = 0.6; // 0.6s exponential decay
    const masterVolume = Math.max(0.02, Math.min(1, options.volume ?? 0.24));

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(masterVolume, now);
    masterGain.connect(ctx.destination);

    // Dry bus + stereo ping-pong delay echo tail
    const dryGain = ctx.createGain();
    dryGain.gain.setValueAtTime(1.0, now);
    dryGain.connect(masterGain);

    const delayL = ctx.createDelay(1.0);
    delayL.delayTime.setValueAtTime(0.18, now);
    const delayR = ctx.createDelay(1.0);
    delayR.delayTime.setValueAtTime(0.27, now);

    const echoFilter = ctx.createBiquadFilter();
    echoFilter.type = 'lowpass';
    echoFilter.frequency.setValueAtTime(2400, now);

    const echoFeedback = ctx.createGain();
    echoFeedback.gain.setValueAtTime(0.24, now);

    const wetGain = ctx.createGain();
    wetGain.gain.setValueAtTime(0.28, now);

    if (typeof ctx.createStereoPanner === 'function') {
      const panL = ctx.createStereoPanner();
      panL.pan.setValueAtTime(-0.5, now);
      const panR = ctx.createStereoPanner();
      panR.pan.setValueAtTime(0.5, now);

      echoFilter.connect(delayL);
      delayL.connect(panL);
      panL.connect(wetGain);

      delayL.connect(echoFeedback);
      echoFeedback.connect(delayR);
      delayR.connect(panR);
      panR.connect(wetGain);
    } else {
      echoFilter.connect(delayL);
      delayL.connect(wetGain);
    }

    wetGain.connect(masterGain);

    notes.forEach((freq, idx) => {
      const start = now + idx * stepSec;
      const stop = start + attackSec + decaySec + 0.06;

      // Fundamental warm sine wave
      const sineOsc = ctx.createOscillator();
      sineOsc.type = 'sine';
      sineOsc.frequency.setValueAtTime(freq, start);

      const sineEnv = ctx.createGain();
      sineEnv.gain.setValueAtTime(0.0001, start);
      sineEnv.gain.linearRampToValueAtTime(0.42, start + attackSec);
      sineEnv.gain.exponentialRampToValueAtTime(0.0008, start + attackSec + decaySec);

      sineOsc.connect(sineEnv);
      sineEnv.connect(dryGain);
      sineEnv.connect(echoFilter);

      // Softer triangle overtone one octave higher (bright vibraphone/marimba transient)
      const triOsc = ctx.createOscillator();
      triOsc.type = 'triangle';
      triOsc.frequency.setValueAtTime(freq * 2, start);

      const triEnv = ctx.createGain();
      triEnv.gain.setValueAtTime(0.0001, start);
      triEnv.gain.linearRampToValueAtTime(0.14, start + attackSec);
      triEnv.gain.exponentialRampToValueAtTime(0.0008, start + attackSec + decaySec * 0.85);

      triOsc.connect(triEnv);
      triEnv.connect(dryGain);
      triEnv.connect(echoFilter);

      sineOsc.start(start);
      triOsc.start(start);
      sineOsc.stop(stop);
      triOsc.stop(stop);
    });
  } catch (err) {
    console.warn('Web Audio bumper jingle skipped:', err);
  }
}

export function playChannelJingle(
  categoryId: string,
  options: { volume?: number; muted?: boolean } = {}
): void {
  if (options.muted || typeof window === 'undefined') return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = getChannelChimeNotes(categoryId);
  playJingle(notes, options);

  try {
    const now = ctx.currentTime + 0.01;
    const masterVolume = Math.max(0.02, Math.min(1, options.volume ?? 0.24));

    // 1. Cinematic sub-bass swell for Movies, Film, Documentaries
    if (categoryId === 'movies' || categoryId === 'film' || categoryId === 'documentaries') {
      const subOsc = ctx.createOscillator();
      subOsc.type = 'sawtooth';
      subOsc.frequency.setValueAtTime(55, now); // A1 fundamental
      const subFilter = ctx.createBiquadFilter();
      subFilter.type = 'lowpass';
      subFilter.frequency.setValueAtTime(120, now);
      subFilter.frequency.exponentialRampToValueAtTime(340, now + 0.5);
      subFilter.frequency.exponentialRampToValueAtTime(70, now + 2.2);

      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.0001, now);
      subGain.gain.linearRampToValueAtTime(masterVolume * 0.55, now + 0.25);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      subOsc.connect(subFilter);
      subFilter.connect(subGain);
      subGain.connect(ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 2.6);
    }

    // 2. Aerodynamic supersonic whoosh for Cars & Sports
    else if (categoryId === 'cars' || categoryId === 'sports' || categoryId === 'fitness') {
      const bufferSize = Math.floor(ctx.sampleRate * 1.4);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const sweep = ctx.createBiquadFilter();
      sweep.type = 'bandpass';
      sweep.Q.setValueAtTime(3.5, now);
      sweep.frequency.setValueAtTime(240, now);
      sweep.frequency.exponentialRampToValueAtTime(2200, now + 0.45);
      sweep.frequency.exponentialRampToValueAtTime(320, now + 1.3);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.0001, now);
      noiseGain.gain.linearRampToValueAtTime(masterVolume * 0.38, now + 0.2);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.35);

      noise.connect(sweep);
      sweep.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noise.start(now);
      noise.stop(now + 1.4);
    }

    // 3. Cyber resonant analog filter drop for Tech & Industry
    else if (categoryId === 'tech' || categoryId === 'industry') {
      const cyberOsc = ctx.createOscillator();
      cyberOsc.type = 'sawtooth';
      cyberOsc.frequency.setValueAtTime(220, now);
      cyberOsc.frequency.exponentialRampToValueAtTime(110, now + 0.6);

      const cyberFilter = ctx.createBiquadFilter();
      cyberFilter.type = 'lowpass';
      cyberFilter.Q.setValueAtTime(6.0, now);
      cyberFilter.frequency.setValueAtTime(2800, now);
      cyberFilter.frequency.exponentialRampToValueAtTime(450, now + 0.8);

      const cyberGain = ctx.createGain();
      cyberGain.gain.setValueAtTime(0.0001, now);
      cyberGain.gain.linearRampToValueAtTime(masterVolume * 0.35, now + 0.08);
      cyberGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      cyberOsc.connect(cyberFilter);
      cyberFilter.connect(cyberGain);
      cyberGain.connect(ctx.destination);
      cyberOsc.start(now);
      cyberOsc.stop(now + 1.3);
    }

    // 4. Retro 8-bit power arpeggio for Games
    else if (categoryId === 'games') {
      const squareOsc = ctx.createOscillator();
      squareOsc.type = 'square';
      const root = notes[0] * 0.5;
      squareOsc.frequency.setValueAtTime(root, now);
      squareOsc.frequency.setValueAtTime(root * 1.5, now + 0.08);
      squareOsc.frequency.setValueAtTime(root * 2.0, now + 0.16);

      const squareGain = ctx.createGain();
      squareGain.gain.setValueAtTime(0.0001, now);
      squareGain.gain.linearRampToValueAtTime(masterVolume * 0.22, now + 0.02);
      squareGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.85);

      squareOsc.connect(squareGain);
      squareGain.connect(ctx.destination);
      squareOsc.start(now);
      squareOsc.stop(now + 0.9);
    }
  } catch (err) {
    console.warn('Cinematic audio layer skipped:', err);
  }
}
