import fs from 'fs';

// Known verified IDs plus candidates to add so every channel has 12-15 creators
const TARGET_POOLS = {
  tech: [
    { id: 'UCBJycsmduvYEL83R_U4JriQ', name: 'Marques Brownlee' },
    { id: 'UC2Xd-TjJByJyK2w1zNwY0zQ', name: 'Fireship' },
    { id: 'UCsBjURrPoezykLs9EqgamOA', name: 'Fireship Classic' },
    { id: 'UCdBK94H6oZT2Q7l0-b0xmMg', name: 'Linus Tech Tips' },
    { id: 'UCddiUEpeqJcYeBxX1IVBKvQ', name: 'The Verge' },
    { id: 'UCMiJRAwDNSNzuYeN2uWa0pA', name: 'Mrwhosetheboss' },
    { id: 'UCVxioixpsXj4JXP5FHdCGBg', name: 'Dave2D' },
    { id: 'UCWFKCr40YwOZQx8FHU_ZqqQ', name: 'JerryRigEverything' },
    { id: 'UC1IQIspOkCeV3WnYm32SBFQ', name: 'Austin Evans' },
    { id: 'UCG7J20LhUeLl6y_Emi7OJrA', name: 'The Studio' },
    { id: 'UCKIKsw5_zcCDyHItVXm-mMA', name: 'Matthew Moniz' },
    { id: 'UCXv-co3EYHF7aOH4A93qAHQ', name: 'Unbox Therapy' },
    { handle: 'SnazzyLabs', name: 'Snazzy Labs' },
    { handle: 'UrAvgConsumer', name: 'UrAvgConsumer' },
    { handle: 'ShortCircuit', name: 'ShortCircuit' }
  ],
  games: [
    { id: 'UCqJ-Xo29CKyLTjn6z2XwYAw', name: "Game Maker's Toolkit" },
    { id: 'UCGiJeCKTVKIxtaYZOidh19g', name: 'videogamedunkey' },
    { id: 'UC-lHJZR3Gqxm24_Vd_AJ5Yw', name: 'IGN' },
    { id: 'UCNvzD7Z-g64bPXxGzaQaa4g', name: 'gameranx' },
    { id: 'UCZ7AeeVbyslLM_8-nVy2B8Q', name: 'Skill Up' },
    { id: 'UCLdBr5f6RcP6l_TAP4GkhDQ', name: 'Digital Foundry' },
    { id: 'UC0fDg4ER86A74I_48lGE88Q', name: 'Noclip' },
    { id: 'UC5CE6nbu1tjSGha-a_cHAFA', name: 'GameSpot' },
    { id: 'UCL7O6Onu0lBcwZ8t-YMgGcw', name: 'Easy Allies' },
    { id: 'UCYt9E2d_GCrPzquW-5MZwmQ', name: 'Modern Vintage Gamer' },
    { id: 'UCHDRlTIaDXGGYduDDNrBmTw', name: 'Arlo' },
    { id: 'UCDTV8DckMvn7mlgtdxTyR-g', name: 'Spawn Wave' },
    { handle: 'videogamedunkey', name: 'Dunkey' },
    { handle: 'GirlfriendReviews', name: 'Girlfriend Reviews' },
    { handle: 'WholesomeGames', name: 'Wholesome Games' }
  ],
  music: [
    { id: 'UC4eYXhJI4-7wSWc8UNRwD4A', name: 'NPR Tiny Desk' },
    { id: 'UC7nrQB0dRxdQpH8-y8glEDw', name: 'NPR Music' },
    { id: 'UCBnriZ0n172RRuSkaxvuzdw', name: 'COLORS' },
    { id: 'UC3I2GFN_F8WudD_2jUZbojA', name: 'KEXP' },
    { id: 'UCG36u-k09zdIPQh5EEdVgTA', name: 'Mahogany Sessions' },
    { id: 'UCCycRfTS7V9WOFfWfkNVCSg', name: 'Cercle' },
    { id: 'UC8sy_jU8fgYKVsMobRiBnWw', name: 'triple j' },
    { handle: 'Audiotree', name: 'Audiotree' },
    { handle: 'BBCRadio1', name: 'BBC Radio 1' },
    { handle: 'BoilerRoom', name: 'Boiler Room' },
    { handle: 'SofarSounds', name: 'Sofar Sounds' },
    { handle: 'TheCurrent', name: 'The Current' },
    { handle: 'PasteMagazine', name: 'Paste Magazine' },
    { handle: 'KCRW', name: 'KCRW' },
    { handle: 'Pitchfork', name: 'Pitchfork' }
  ],
  food: [
    { id: 'UCJHA_jMfCvEnv-3kRjTCQXw', name: 'Binging with Babish' },
    { id: 'UCUAg71CJEvFdOnujmep1Svw', name: 'Joshua Weissman' },
    { id: 'UCIEv3lZ_tNXHzL3ox-_uUGQ', name: 'Gordon Ramsay' },
    { id: 'UCPD_bxCRGq9ow5a3hX39PzQ', name: 'First We Feast' },
    { id: 'UCbpMy0Fg74eXXkvxJrtEn3w', name: 'Bon Appétit' },
    { id: 'UCU7JCOtONwWWKj-xwh1GDBA', name: 'Eater' },
    { id: 'UC4avs5jYd_FvzQ8f0XYziqw', name: 'Babish Eats' },
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
    { id: 'UCHnyfMqiRRG1u-2MsSQLbXA', name: 'Veritasium' },
    { id: 'UCq8ZAAsI89IoJ-fn1gYpO3g', name: 'Kurzgesagt – In a Nutshell' },
    { id: 'UC8VkNBOwvsTlFjoSnNSMmxw', name: 'SmarterEveryDay' },
    { id: 'UC513PdAP2-jWkJunTh5kXRw', name: 'Mark Rober' },
    { id: 'UC6nSFpj9HTCZ5t-N3Rm3-HA', name: 'Vsauce' },
    { id: 'UCUdettijNYvLAm4AixZv4RA', name: 'SciShow' },
    { id: 'UCeiYXex_fwgYDonaTcSIk6w', name: 'MinutePhysics' },
    { id: 'UC1UmujXTizWokDHojdEOdow', name: 'Veritasium Classics' },
    { handle: 'pbsspacetime', name: 'PBS Space Time' },
    { handle: 'MinuteEarth', name: 'MinuteEarth' },
    { handle: 'BeSmart', name: 'Be Smart' },
    { handle: 'NileRed', name: 'NileRed' },
    { handle: 'TheActionLab', name: 'The Action Lab' },
    { handle: 'SabineHossenfelder', name: 'Sabine Hossenfelder' },
    { handle: 'Seeker', name: 'Seeker' }
  ],
  sports: [
    { id: 'UCRijo3ddMTht_IHyNSNXpNQ', name: 'Dude Perfect' },
    { id: 'UC8VddvuHJzIj__Ud0rY2_ww', name: 'Red Bull' },
    { id: 'UCcSrNe5CbXOmsF645RYDe5w', name: 'People Are Awesome' },
    { id: 'UCiio0ydw439X13KyZgMIcHw', name: 'ESPN' },
    { id: 'UC_kdjhHnkUbSImMrezjRyDQ', name: 'Olympics' },
    { id: 'UCJrWyyCRROi8NlQ6Xd9dx5Q', name: 'Dude Perfect Extra' },
    { handle: 'nitrocircus', name: 'Nitro Circus' },
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
    { id: 'UCneNuMawbfqgXCew2EdZMcQ', name: 'Kara and Nate' },
    { id: 'UCTd7KzdwnFE3lm6LCfYDmUQ', name: 'Yes Theory' },
    { id: 'UCi7KXaqqW_h6ifNVnudH0kQ', name: 'Lost LeBlanc' },
    { id: 'UCodVXWu3aFyE1hGmbJrJJLQ', name: 'Drew Binsky' },
    { id: 'UCkFli83zdGzt7s-IsiRijXA', name: 'Wolters World' },
    { id: 'UCxDZs_ltFFvn0FDHT6kmoXA', name: 'Bald and Bankrupt' },
    { handle: 'RickStevesEurope', name: 'Rick Steves' },
    { handle: 'EvaZuBeck', name: 'Eva zu Beck' },
    { handle: 'GabrielTraveler', name: 'Gabriel Traveler' },
    { handle: 'MarkWiens', name: 'Mark Wiens' },
    { handle: 'FearlessAndFar', name: 'Fearless & Far' },
    { handle: 'IndigoTraveller', name: 'Indigo Traveller' },
    { handle: 'ChopstickTravel', name: 'Chopstick Travel' },
    { handle: 'TheFoodRanger', name: 'The Food Ranger' }
  ],
  film: [
    { id: 'UC-hehDTvO4X8d9M7MVtpElg', name: 'Thomas Flight' },
    { id: 'UCDylnpLJWDj2gKWujjwap9w', name: 'StudioBinder' },
    { id: 'UCKy1dAqELo0zrOtPkf0eTMw', name: 'CineFix' },
    { id: 'UCErSSa3CaP_GJxmFpdjG9Jw', name: 'Lessons from the Screenplay' },
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
    { id: 'UCmCnayXABSyVjexptPEQxlA', name: 'Hybrid Calisthenics' },
    { id: 'UCMHkz3SDZADtMaQ43bLGdUQ', name: 'Chris Heria' },
    { id: 'UCe0TLA0EsQbE-MjuHXevj2A', name: 'ATHLEAN-X' },
    { id: 'UCZIIRX8rkNjVpP-oLMHpeDw', name: 'Calisthenicmovement' },
    { id: 'UC68TLK0mAImWqJ6H43U2kEA', name: 'Jeff Nippard' },
    { handle: 'THENX', name: 'THENX' },
    { handle: 'AustinDunham', name: 'Austin Dunham' },
    { handle: 'SeanNalewanyj', name: 'Sean Nalewanyj' },
    { handle: 'FitnessBlender', name: 'FitnessBlender' },
    { handle: 'YogaWithAdriene', name: 'Yoga With Adriene' },
    { handle: 'picturefit', name: 'Picture Fit' },
    { handle: 'NatachaOceane', name: 'Natacha Océane' },
    { handle: 'BuffDudes', name: 'Buff Dudes' },
    { handle: 'MovementbyDavid', name: 'Movement by David' }
  ],
  art: [
    { id: 'UClM2LuQ1q5WEc23462tQzBg', name: 'Proko' },
    { id: 'UC3BCGz72VQcFdoBiZtKfOpg', name: 'Jazza' },
    { id: 'UCoal_hpPIPAnWlG-kWHLheA', name: 'Drawfee Show' },
    { id: 'UCfvIqreCk628yB9mp3e_ABQ', name: 'Proko TV' },
    { handle: 'tenhundred', name: 'Ten Hundred' },
    { handle: 'JamesGurneyFiction', name: 'James Gurney' },
    { handle: 'BaumgartnerRestoration', name: 'Baumgartner Restoration' },
    { handle: 'markcrilley', name: 'Mark Crilley' },
    { handle: 'PeterDraws', name: 'Peter Draws' },
    { handle: 'bayleejae', name: 'Baylee Jae' },
    { handle: 'Struthless', name: 'Struthless' },
    { handle: 'TrentKaniuga', name: 'Trent Kaniuga' },
    { handle: 'MinnieSmall', name: 'Minnie Small' },
    { handle: 'KirstyPartridgeArt', name: 'Kirsty Partridge Art' }
  ],
  design: [
    { id: 'UC_zQ777U6YTyatP3P1wi3xw', name: 'Never Too Small' },
    { id: 'UC0k238zFx-Z8xFH0sxCrPJg', name: 'Architectural Digest' },
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
    { id: 'UCsooa4yRKGN_zEE8iknghZA', name: 'TED-Ed' },
    { id: 'UCAuUUnT6oDeKwE6v1NGQxug', name: 'TED-Ed Lessons' },
    { id: 'UC1_uAIS3r8Vu6JjXWvastJg', name: '3Blue1Brown' },
    { id: 'UCTWKe1zATFV6d0o6oLS9sgw', name: 'Wendover Productions' },
    { id: 'UC176GAQozKKjhz62H8u9vQQ', name: 'Real Engineering' },
    { id: 'UCX6b17PVsYBQ0ip5gyeme-Q', name: 'CrashCourse' },
    { handle: 'PracticalEngineeringChannel', name: 'Practical Engineering' },
    { handle: 'HalfAsInteresting', name: 'Half as Interesting' },
    { handle: 'numberphile', name: 'Numberphile' },
    { handle: 'Computerphile', name: 'Computerphile' },
    { handle: 'TomScottGo', name: 'Tom Scott' },
    { handle: 'standupmaths', name: 'Stand-up Maths' },
    { handle: 'OverSimplified', name: 'OverSimplified' },
    { handle: 'primerlearning', name: 'Primer' }
  ]
};

async function resolveHandle(handle) {
  try {
    const res = await fetch(`https://www.youtube.com/@${handle}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const html = await res.text();
    const m = html.match(/<meta itemprop="identifier" content="(UC[\w-]{22})">/) ||
              html.match(/<meta itemprop="channelId" content="(UC[\w-]{22})">/) ||
              html.match(/"channelId":"(UC[\w-]{22})"/) ||
              html.match(/"externalId":"(UC[\w-]{22})"/) ||
              html.match(/href="https:\/\/www\.youtube\.com\/channel\/(UC[\w-]{22})"/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

async function verifyFeed(channelId) {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      headers: { 'User-Agent': 'Tuned-Broadcaster/1.0' }
    });
    if (!res.ok) return 0;
    const xml = await res.text();
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    return entries.length;
  } catch {
    return 0;
  }
}

async function run() {
  console.log('Resolving and verifying all 12 TV channels (target: 10-15 creators each)...');
  const finalMap = {};

  for (const [cat, creators] of Object.entries(TARGET_POOLS)) {
    console.log(`\nProcessing ${cat}...`);
    finalMap[cat] = [];
    const seenIds = new Set();

    for (const c of creators) {
      if (finalMap[cat].length >= 15) break;

      let id = c.id;
      if (!id && c.handle) {
        id = await resolveHandle(c.handle);
      }

      if (id && !seenIds.has(id)) {
        seenIds.add(id);
        const count = await verifyFeed(id);
        if (count >= 3) {
          finalMap[cat].push({ id, name: c.name });
          console.log(`  ✓ [${c.name}] => ${id} (${count} uploads)`);
        } else {
          console.log(`  ✗ [${c.name}] (${id}) feed returned < 3 videos`);
        }
      } else if (!id) {
        console.log(`  ✗ Could not resolve handle for [${c.name}]`);
      }
    }
    console.log(`=> Category ${cat.toUpperCase()}: ${finalMap[cat].length} verified creators.`);
  }

  fs.writeFileSync('scripts/verified-channels-full.json', JSON.stringify(finalMap, null, 2));
  console.log('\nWrote scripts/verified-channels-full.json!');
}

run();
