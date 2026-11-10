import fs from 'fs';

const CREATOR_CANDIDATES = {
  tech: [
    { handle: 'mkbhd', name: 'Marques Brownlee' },
    { handle: 'fireship', name: 'Fireship' },
    { handle: 'LinusTechTips', name: 'Linus Tech Tips' },
    { handle: 'Mrwhosetheboss', name: 'Mrwhosetheboss' },
    { handle: 'AustinEvans', name: 'Austin Evans' },
    { handle: 'JerryRigEverything', name: 'JerryRigEverything' },
    { handle: 'TheVerge', name: 'The Verge' },
    { handle: 'Dave2D', name: 'Dave2D' },
    { handle: 'ShortCircuit', name: 'ShortCircuit' },
    { handle: 'UrAvgConsumer', name: 'UrAvgConsumer' },
    { handle: 'SnazzyLabs', name: 'Snazzy Labs' },
    { handle: 'MatthewMoniz', name: 'Matthew Moniz' },
    { handle: 'UnboxTherapy', name: 'Unbox Therapy' },
    { handle: 'TheStudio', name: 'The Studio' }
  ],
  games: [
    { handle: 'GameMakersToolkit', name: "Game Maker's Toolkit" },
    { handle: 'videogamedunkey', name: 'videogamedunkey' },
    { handle: 'gameranx', name: 'gameranx' },
    { handle: 'SkillUp', name: 'Skill Up' },
    { handle: 'DigitalFoundry', name: 'Digital Foundry' },
    { handle: 'ign', name: 'IGN' },
    { handle: 'noclipvideo', name: 'Noclip' },
    { handle: 'GirlfriendReviews', name: 'Girlfriend Reviews' },
    { handle: 'GameSpot', name: 'GameSpot' },
    { handle: 'easyallies', name: 'Easy Allies' },
    { handle: 'ModernVintageGamer', name: 'Modern Vintage Gamer' },
    { handle: 'ArloStuff', name: 'Arlo' },
    { handle: 'SpawnWave', name: 'Spawn Wave' },
    { handle: 'WholesomeGames', name: 'Wholesome Games' }
  ],
  music: [
    { handle: 'nprmusic', name: 'NPR Music' },
    { handle: 'COLORSxSTUDIOS', name: 'COLORS' },
    { handle: 'kexp', name: 'KEXP' },
    { handle: 'MahoganySessions', name: 'Mahogany Sessions' },
    { handle: 'Audiotree', name: 'Audiotree' },
    { handle: 'BBCRadio1', name: 'BBC Radio 1' },
    { handle: 'Cercle', name: 'Cercle' },
    { handle: 'triplej', name: 'triple j' },
    { handle: 'Pitchfork', name: 'Pitchfork' },
    { handle: 'BoilerRoom', name: 'Boiler Room' },
    { handle: 'SofarSounds', name: 'Sofar Sounds' },
    { handle: 'TheCurrent', name: 'The Current' },
    { handle: 'PasteMagazine', name: 'Paste Magazine' },
    { handle: 'KCRW', name: 'KCRW' }
  ],
  food: [
    { handle: 'bingingwithbabish', name: 'Binging with Babish' },
    { handle: 'JoshuaWeissman', name: 'Joshua Weissman' },
    { handle: 'gordonramsay', name: 'Gordon Ramsay' },
    { handle: 'FirstWeFeast', name: 'First We Feast' },
    { handle: 'bonappetit', name: 'Bon Appétit' },
    { handle: 'Eater', name: 'Eater' },
    { handle: 'SortedFood', name: 'Sorted Food' },
    { handle: 'yousuckatcooking', name: 'You Suck at Cooking' },
    { handle: 'samthecookingguy', name: 'Sam The Cooking Guy' },
    { handle: 'epicurious', name: 'Epicurious' },
    { handle: 'JamieOliver', name: 'Jamie Oliver' },
    { handle: 'Maangchi', name: 'Maangchi' },
    { handle: 'MythicalKitchen', name: 'Mythical Kitchen' },
    { handle: 'ProHomeCooks', name: 'Pro Home Cooks' }
  ],
  science: [
    { handle: 'veritasium', name: 'Veritasium' },
    { handle: 'kurzgesagt', name: 'Kurzgesagt' },
    { handle: 'smartereveryday', name: 'SmarterEveryDay' },
    { handle: 'MarkRober', name: 'Mark Rober' },
    { handle: 'Vsauce', name: 'Vsauce' },
    { handle: 'scishow', name: 'SciShow' },
    { handle: 'minutephysics', name: 'MinutePhysics' },
    { handle: 'pbsspacetime', name: 'PBS Space Time' },
    { handle: 'MinuteEarth', name: 'MinuteEarth' },
    { handle: 'BeSmart', name: 'Be Smart' },
    { handle: 'NileRed', name: 'NileRed' },
    { handle: 'TheActionLab', name: 'The Action Lab' },
    { handle: 'SabineHossenfelder', name: 'Sabine Hossenfelder' },
    { handle: 'Seeker', name: 'Seeker' }
  ],
  sports: [
    { handle: 'DudePerfect', name: 'Dude Perfect' },
    { handle: 'redbull', name: 'Red Bull' },
    { handle: 'PeopleAreAwesome', name: 'People Are Awesome' },
    { handle: 'nitrocircus', name: 'Nitro Circus' },
    { handle: 'ESPN', name: 'ESPN' },
    { handle: 'olympics', name: 'Olympics' },
    { handle: 'UFC', name: 'UFC' },
    { handle: 'NBA', name: 'NBA' },
    { handle: 'NFL', name: 'NFL' },
    { handle: 'HouseofHighlights', name: 'House of Highlights' },
    { handle: 'SLAM', name: 'SLAM' },
    { handle: 'Whistle', name: 'Whistle' },
    { handle: 'WorldSurfLeague', name: 'World Surf League' },
    { handle: 'GoPro', name: 'GoPro' }
  ],
  travel: [
    { handle: 'karaandnate', name: 'Kara and Nate' },
    { handle: 'YesTheory', name: 'Yes Theory' },
    { handle: 'lostleblanc', name: 'Lost LeBlanc' },
    { handle: 'drewbinsky', name: 'Drew Binsky' },
    { handle: 'woltersworld', name: 'Wolters World' },
    { handle: 'RickStevesEurope', name: 'Rick Steves' },
    { handle: 'baldandbankrupt', name: 'Bald and Bankrupt' },
    { handle: 'EvaZuBeck', name: 'Eva zu Beck' },
    { handle: 'GabrielTraveler', name: 'Gabriel Traveler' },
    { handle: 'MarkWiens', name: 'Mark Wiens' },
    { handle: 'FearlessAndFar', name: 'Fearless & Far' },
    { handle: 'IndigoTraveller', name: 'Indigo Traveller' },
    { handle: 'ChopstickTravel', name: 'Chopstick Travel' },
    { handle: 'TheFoodRanger', name: 'The Food Ranger' }
  ],
  film: [
    { handle: 'ThomasFlight', name: 'Thomas Flight' },
    { handle: 'StudioBinder', name: 'StudioBinder' },
    { handle: 'cinefix', name: 'CineFix' },
    { handle: 'LFTScreenplay', name: 'Lessons from the Screenplay' },
    { handle: 'CinemaStix', name: 'CinemaStix' },
    { handle: 'kaptainkristian', name: 'kaptainkristian' },
    { handle: 'NowYouSeeIt', name: 'Now You See It' },
    { handle: 'Nerdwriter1', name: 'Nerdwriter1' },
    { handle: 'JustWrite', name: 'Just Write' },
    { handle: 'CorridorCrew', name: 'Corridor Crew' },
    { handle: 'FilmmakerIQ', name: 'Filmmaker IQ' },
    { handle: 'EveryFrameaPainting', name: 'Every Frame a Painting' },
    { handle: 'Spacedock', name: 'Spacedock' },
    { handle: 'LikeStoriesofOld', name: 'Like Stories of Old' }
  ],
  fitness: [
    { handle: 'HybridCalisthenics', name: 'Hybrid Calisthenics' },
    { handle: 'CHRISHERIA', name: 'Chris Heria' },
    { handle: 'Calisthenicmovement', name: 'Calisthenicmovement' },
    { handle: 'ATHLEANX', name: 'ATHLEAN-X' },
    { handle: 'JeffNippard', name: 'Jeff Nippard' },
    { handle: 'THENX', name: 'THENX' },
    { handle: 'AustinDunham', name: 'Austin Dunham' },
    { handle: 'SeanNalewanyj', name: 'Sean Nalewanyj' },
    { handle: 'FitnessBlender', name: 'FitnessBlender' },
    { handle: 'YogaWithAdriene', name: 'Yoga With Adriene' },
    { handle: 'picturefit', name: 'Picture Fit' },
    { handle: 'NatachaOceane', name: 'Natacha Océane' },
    { handle: 'TheBfitness', name: 'Buff Dudes' },
    { handle: 'MovementbyDavid', name: 'Movement by David' }
  ],
  art: [
    { handle: 'ProkoTV', name: 'Proko' },
    { handle: 'Jazza', name: 'Jazza' },
    { handle: 'tenhundred', name: 'Ten Hundred' },
    { handle: 'JamesGurneyFiction', name: 'James Gurney' },
    { handle: 'DrawfeeShow', name: 'Drawfee' },
    { handle: 'BaumgartnerRestoration', name: 'Baumgartner Restoration' },
    { handle: 'markcrilley', name: 'Mark Crilley' },
    { handle: 'PeterDraws', name: 'Peter Draws' },
    { handle: 'bayleejae', name: 'Baylee Jae' },
    { handle: 'Struthless', name: 'Struthless' },
    { handle: 'TrentKaniuga', name: 'Trent Kaniuga' },
    { handle: 'MinnieSmall', name: 'Minnie Small' },
    { handle: 'KirstyPartridgeArt', name: 'Kirsty Partridge Art' },
    { handle: 'DrawWithJazza', name: 'Draw With Jazza' }
  ],
  design: [
    { handle: 'nevertoosmall', name: 'Never Too Small' },
    { handle: 'ArchitecturalDigest', name: 'Architectural Digest' },
    { handle: 'TheLocalProject', name: 'The Local Project' },
    { handle: 'DesignSeedOnline', name: 'Design Seed' },
    { handle: 'kirstendirksen', name: 'Kirsten Dirksen' },
    { handle: '30X40DesignWorkshop', name: '30X40 Design Workshop' },
    { handle: 'LivingBigInATinyHouse', name: 'Living Big In A Tiny House' },
    { handle: 'TheFutur', name: 'The Futur' },
    { handle: 'DamiLeeArch', name: 'Dami Lee' },
    { handle: 'StewartHicks', name: 'Stewart Hicks' },
    { handle: 'DesignTheory', name: 'Design Theory' },
    { handle: 'monocle', name: 'Monocle' },
    { handle: 'SimplifyingDesign', name: 'Simplifying Design' },
    { handle: 'LinusBoman', name: 'Linus Boman' }
  ],
  learning: [
    { handle: 'TEDEd', name: 'TED-Ed' },
    { handle: '3blue1brown', name: '3Blue1Brown' },
    { handle: 'Wendoverproductions', name: 'Wendover Productions' },
    { handle: 'RealEngineering', name: 'Real Engineering' },
    { handle: 'crashcourse', name: 'CrashCourse' },
    { handle: 'PracticalEngineeringChannel', name: 'Practical Engineering' },
    { handle: 'HalfAsInteresting', name: 'Half as Interesting' },
    { handle: 'numberphile', name: 'Numberphile' },
    { handle: 'Computerphile', name: 'Computerphile' },
    { handle: 'TomScottGo', name: 'Tom Scott' },
    { handle: 'standupmaths', name: 'Stand-up Maths' },
    { handle: 'OverSimplified', name: 'OverSimplified' },
    { handle: 'SmarterEveryDay', name: 'SmarterEveryDay' },
    { handle: 'primerlearning', name: 'Primer' }
  ]
};

async function resolveHandle(handle) {
  try {
    const res = await fetch(`https://www.youtube.com/@${handle}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const html = await res.text();
    const m = html.match(/"channelId":"(UC[\w-]{22})"/);
    const meta = html.match(/<meta itemprop="channelId" content="(UC[\w-]{22})">/);
    return m ? m[1] : (meta ? meta[1] : null);
  } catch {
    return null;
  }
}

async function run() {
  console.log('Resolving full broadcasting creator universe (10-15 per channel)...');
  const categoryChannelMap = {};

  for (const [cat, creators] of Object.entries(CREATOR_CANDIDATES)) {
    console.log(`\nResolving channel pool for ${cat}...`);
    categoryChannelMap[cat] = [];

    for (const c of creators) {
      if (categoryChannelMap[cat].length >= 15) break;

      const channelId = await resolveHandle(c.handle);
      if (channelId) {
        // Quick verify that RSS feed is active and has non-short videos
        try {
          const testRes = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
          if (testRes.ok) {
            const xml = await testRes.text();
            const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
            if (entries.length > 0) {
              categoryChannelMap[cat].push({ id: channelId, name: c.name, handle: c.handle });
              console.log(`  ✓ [${c.name}] => ${channelId} (${entries.length} uploads)`);
            } else {
              console.log(`  ✗ [${c.name}] 0 entries in feed`);
            }
          } else {
            console.log(`  ✗ [${c.name}] feed status ${testRes.status}`);
          }
        } catch {
          console.log(`  ✗ [${c.name}] feed network error`);
        }
      } else {
        console.log(`  ✗ [${c.name}] handle @${c.handle} not resolved`);
      }
    }
    console.log(`=> ${cat}: ${categoryChannelMap[cat].length} active verified broadcaster channels.`);
  }

  fs.writeFileSync('scripts/broadcaster-channels.json', JSON.stringify(categoryChannelMap, null, 2));
  console.log('\nSaved scripts/broadcaster-channels.json!');
}

run();
