import { Category, ChannelLineup } from './types';

export const CATEGORIES: Category[] = [
  {
    "id": "tech",
    "name": "Tech",
    "hue": 355,
    "description": "Cutting edge hardware, software & future computing"
  },
  {
    "id": "games",
    "name": "Games",
    "hue": 268,
    "description": "Game design, speedruns, retrospectives & reviews"
  },
  {
    "id": "music",
    "name": "Music",
    "hue": 205,
    "description": "Live sessions, late night mixes & acoustic sets"
  },
  {
    "id": "food",
    "name": "Food",
    "hue": 22,
    "description": "Culinary adventures, comfort food & knife skills"
  },
  {
    "id": "science",
    "name": "Science",
    "hue": 170,
    "description": "Astrophysics, biology, deep ocean & curiosities"
  },
  {
    "id": "sports",
    "name": "Sports",
    "hue": 140,
    "description": "Extreme sports, game analysis & iconic highlights"
  },
  {
    "id": "travel",
    "name": "Travel",
    "hue": 190,
    "description": "Hidden cities, train journeys & remote corners"
  },
  {
    "id": "film",
    "name": "Film",
    "hue": 300,
    "description": "Cinematography, scene breakdown & director deep-dives"
  },
  {
    "id": "fitness",
    "name": "Fitness",
    "hue": 100,
    "description": "Calisthenics, mobility, running & functional power"
  },
  {
    "id": "art",
    "name": "Art",
    "hue": 330,
    "description": "Painting restoration, illustration & creative process"
  },
  {
    "id": "design",
    "name": "Design",
    "hue": 45,
    "description": "Architecture, micro-apartments & typography"
  },
  {
    "id": "learning",
    "name": "Learning",
    "hue": 235,
    "description": "Cognition, mathematics, history & big ideas"
  }
];

export const SEED_LINEUPS: Record<string, ChannelLineup> = {
  "tech": {
    "categoryId": "tech",
    "categoryName": "Tech",
    "hue": 355,
    "builtAt": 1794338232065,
    "videos": [
      {
        "youtubeVideoId": "3t0dUbh14Lc",
        "title": "iPhone 18 Pro After 1 Month — Why I Keep Coming Back",
        "sourceChannelId": "UCUUNkL6Wke6i0P6funa7wdQ",
        "sourceChannelTitle": "AppleInsider",
        "thumbnailUrl": "https://i.ytimg.com/vi/3t0dUbh14Lc/hqdefault.jpg",
        "durationSec": 481
      },
      {
        "youtubeVideoId": "mGvHmBs8OfA",
        "title": "iPhone Duo Livestream: How Many Folds Can Apple’s Phone Take? Day 12",
        "sourceChannelId": "UCOmcA3f_RrH6b9NmcNa4tdg",
        "sourceChannelTitle": "CNET",
        "thumbnailUrl": "https://i.ytimg.com/vi/mGvHmBs8OfA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "GCUHLVD9uZo",
        "title": "This Phone Proves Samsung and Google Need Help",
        "sourceChannelId": "UCgyqtNWZmIxTx3b6OxTSALw",
        "sourceChannelTitle": "Android Authority",
        "thumbnailUrl": "https://i.ytimg.com/vi/GCUHLVD9uZo/hqdefault.jpg",
        "durationSec": 433
      },
      {
        "youtubeVideoId": "rbWqk3x8lGI",
        "title": "How do Starlink speeds compare to 5G?",
        "sourceChannelId": "UC-6OW5aJYBFM33zXQlBKPNA",
        "sourceChannelTitle": "Engadget",
        "thumbnailUrl": "https://i.ytimg.com/vi/rbWqk3x8lGI/hqdefault.jpg",
        "durationSec": 269
      },
      {
        "youtubeVideoId": "_x58r9TBois",
        "title": "Meta VR Glasses: What Vision Pro 2 COULD Have Been!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/_x58r9TBois/hqdefault.jpg",
        "durationSec": 480
      },
      {
        "youtubeVideoId": "clJCDHml2cA",
        "title": "I built a DeepSeek R1 powered VS Code extension…",
        "sourceChannelId": "UC2Xd-TjJByJyK2w1zNwY0zQ",
        "sourceChannelTitle": "Beyond Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/clJCDHml2cA/hqdefault.jpg",
        "durationSec": 422
      },
      {
        "youtubeVideoId": "1FurWDiK9A4",
        "title": "Did Anthropic just save its $1 trillion IPO?",
        "sourceChannelId": "UCsBjURrPoezykLs9EqgamOA",
        "sourceChannelTitle": "Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/1FurWDiK9A4/hqdefault.jpg",
        "durationSec": 333
      },
      {
        "youtubeVideoId": "K_AvLm5TOws",
        "title": "Apple Really Does it Better - MacBook Pro with PROLED XDR",
        "sourceChannelId": "UCdBK94H6oZT2Q7l0-b0xmMg",
        "sourceChannelTitle": "ShortCircuit",
        "thumbnailUrl": "https://i.ytimg.com/vi/K_AvLm5TOws/hqdefault.jpg",
        "durationSec": 1561
      },
      {
        "youtubeVideoId": "afoJu8f9GMA",
        "title": "Torrenters are building epic media collections | The Vergecast",
        "sourceChannelId": "UCddiUEpeqJcYeBxX1IVBKvQ",
        "sourceChannelTitle": "The Verge",
        "thumbnailUrl": "https://i.ytimg.com/vi/afoJu8f9GMA/hqdefault.jpg",
        "durationSec": 2231
      },
      {
        "youtubeVideoId": "HVLUtJWlcJY",
        "title": "I Tested 42 Years of Phones!",
        "sourceChannelId": "UCMiJRAwDNSNzuYeN2uWa0pA",
        "sourceChannelTitle": "Mrwhosetheboss",
        "thumbnailUrl": "https://i.ytimg.com/vi/HVLUtJWlcJY/hqdefault.jpg",
        "durationSec": 2240
      },
      {
        "youtubeVideoId": "k8W0Eb7sKss",
        "title": "ONE PHONE TO RULE THEM ALL",
        "sourceChannelId": "UCWFKCr40YwOZQx8FHU_ZqqQ",
        "sourceChannelTitle": "JerryRigEverything",
        "thumbnailUrl": "https://i.ytimg.com/vi/k8W0Eb7sKss/hqdefault.jpg",
        "durationSec": 776
      },
      {
        "youtubeVideoId": "ARreuKEUQuE",
        "title": "WEIRDEST Costco Tech",
        "sourceChannelId": "UC1IQIspOkCeV3WnYm32SBFQ",
        "sourceChannelTitle": "This Is",
        "thumbnailUrl": "https://i.ytimg.com/vi/ARreuKEUQuE/hqdefault.jpg",
        "durationSec": 720
      },
      {
        "youtubeVideoId": "7soMd19QQo0",
        "title": "48 Hours at the Folding iPhone Event with MKBHD",
        "sourceChannelId": "UCG7J20LhUeLl6y_Emi7OJrA",
        "sourceChannelTitle": "The Studio",
        "thumbnailUrl": "https://i.ytimg.com/vi/7soMd19QQo0/hqdefault.jpg",
        "durationSec": 955
      },
      {
        "youtubeVideoId": "D3y2h-LhCKw",
        "title": "Elon Finally Said It...",
        "sourceChannelId": "UCXv-co3EYHF7aOH4A93qAHQ",
        "sourceChannelTitle": "Lew Later",
        "thumbnailUrl": "https://i.ytimg.com/vi/D3y2h-LhCKw/hqdefault.jpg",
        "durationSec": 2928
      },
      {
        "youtubeVideoId": "kNY9zrl5DYY",
        "title": "Building a Smart Home in 2026!",
        "sourceChannelId": "UC9fSZHEh6XsRpX-xJc6lT3A",
        "sourceChannelTitle": "UrAvgConsumer",
        "thumbnailUrl": "https://i.ytimg.com/vi/kNY9zrl5DYY/hqdefault.jpg",
        "durationSec": 799
      },
      {
        "youtubeVideoId": "qor9EDdmNa0",
        "title": "Apple's incredible Q3, iOS 27.3 features, & more iPhone Duo on the AppleInsider Podcast",
        "sourceChannelId": "UCUUNkL6Wke6i0P6funa7wdQ",
        "sourceChannelTitle": "AppleInsider",
        "thumbnailUrl": "https://i.ytimg.com/vi/qor9EDdmNa0/hqdefault.jpg",
        "durationSec": 4064
      },
      {
        "youtubeVideoId": "RavEFW5vb54",
        "title": "iPhone Duo Livestream: How Many Folds Can Apple’s Phone Take? Day 11",
        "sourceChannelId": "UCOmcA3f_RrH6b9NmcNa4tdg",
        "sourceChannelTitle": "CNET",
        "thumbnailUrl": "https://i.ytimg.com/vi/RavEFW5vb54/hqdefault.jpg",
        "durationSec": 14592
      },
      {
        "youtubeVideoId": "Ig497BH7d0E",
        "title": "Tested in the Wild: Best Survival Tech!",
        "sourceChannelId": "UCgyqtNWZmIxTx3b6OxTSALw",
        "sourceChannelTitle": "Android Authority",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ig497BH7d0E/hqdefault.jpg",
        "durationSec": 1135
      },
      {
        "youtubeVideoId": "xkUiXkGsnPI",
        "title": "Why You Should Never Point A Laser Pointer At A Security Camera",
        "sourceChannelId": "UC-6OW5aJYBFM33zXQlBKPNA",
        "sourceChannelTitle": "Engadget",
        "thumbnailUrl": "https://i.ytimg.com/vi/xkUiXkGsnPI/hqdefault.jpg",
        "durationSec": 244
      },
      {
        "youtubeVideoId": "g6Die8gVFn0",
        "title": "OLED iPad Mini is The Most Apple Product They've Ever Appled",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/g6Die8gVFn0/hqdefault.jpg",
        "durationSec": 779
      },
      {
        "youtubeVideoId": "xWkozeculPo",
        "title": "Is Next.js 15 any good? \"use cache\" API first look",
        "sourceChannelId": "UC2Xd-TjJByJyK2w1zNwY0zQ",
        "sourceChannelTitle": "Beyond Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/xWkozeculPo/hqdefault.jpg",
        "durationSec": 495
      },
      {
        "youtubeVideoId": "pf5tXJZM1Rw",
        "title": "OpenAI spent $1.2 million hacking Linux... and it was a bargain",
        "sourceChannelId": "UCsBjURrPoezykLs9EqgamOA",
        "sourceChannelTitle": "Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/pf5tXJZM1Rw/hqdefault.jpg",
        "durationSec": 390
      },
      {
        "youtubeVideoId": "dSS8c0ehMHQ",
        "title": "Can a Tablet Really Replace Paper?",
        "sourceChannelId": "UCdBK94H6oZT2Q7l0-b0xmMg",
        "sourceChannelTitle": "ShortCircuit",
        "thumbnailUrl": "https://i.ytimg.com/vi/dSS8c0ehMHQ/hqdefault.jpg",
        "durationSec": 753
      },
      {
        "youtubeVideoId": "-U4thshDTL8",
        "title": "Big Tech lost big in the 2026 election | The Vergecast",
        "sourceChannelId": "UCddiUEpeqJcYeBxX1IVBKvQ",
        "sourceChannelTitle": "The Verge",
        "thumbnailUrl": "https://i.ytimg.com/vi/-U4thshDTL8/hqdefault.jpg",
        "durationSec": 5990
      },
      {
        "youtubeVideoId": "Yg2t5w8vj5Q",
        "title": "I Tested the Most Downloaded 3D Printed Tech!",
        "sourceChannelId": "UCMiJRAwDNSNzuYeN2uWa0pA",
        "sourceChannelTitle": "Mrwhosetheboss",
        "thumbnailUrl": "https://i.ytimg.com/vi/Yg2t5w8vj5Q/hqdefault.jpg",
        "durationSec": 1288
      },
      {
        "youtubeVideoId": "5O-vCJW1b8g",
        "title": "Trump Phone Durability Test - Its worse than we thought...",
        "sourceChannelId": "UCWFKCr40YwOZQx8FHU_ZqqQ",
        "sourceChannelTitle": "JerryRigEverything",
        "thumbnailUrl": "https://i.ytimg.com/vi/5O-vCJW1b8g/hqdefault.jpg",
        "durationSec": 577
      },
      {
        "youtubeVideoId": "Aj00weTl3JM",
        "title": "Am I The @$$hole?!",
        "sourceChannelId": "UC1IQIspOkCeV3WnYm32SBFQ",
        "sourceChannelTitle": "This Is",
        "thumbnailUrl": "https://i.ytimg.com/vi/Aj00weTl3JM/hqdefault.jpg",
        "durationSec": 1195
      },
      {
        "youtubeVideoId": "G3z8mL2_oJo",
        "title": "Is This Movie Tech ACTUALLY Possible?",
        "sourceChannelId": "UCG7J20LhUeLl6y_Emi7OJrA",
        "sourceChannelTitle": "The Studio",
        "thumbnailUrl": "https://i.ytimg.com/vi/G3z8mL2_oJo/hqdefault.jpg",
        "durationSec": 1066
      },
      {
        "youtubeVideoId": "zhfFgJRn0cU",
        "title": "Is Twitter Getting Desperate?",
        "sourceChannelId": "UCXv-co3EYHF7aOH4A93qAHQ",
        "sourceChannelTitle": "Lew Later",
        "thumbnailUrl": "https://i.ytimg.com/vi/zhfFgJRn0cU/hqdefault.jpg",
        "durationSec": 5082
      },
      {
        "youtubeVideoId": "rSMgft_byEA",
        "title": "iPhone Duo: My Favorite Accessories So Far!",
        "sourceChannelId": "UC9fSZHEh6XsRpX-xJc6lT3A",
        "sourceChannelTitle": "UrAvgConsumer",
        "thumbnailUrl": "https://i.ytimg.com/vi/rSMgft_byEA/hqdefault.jpg",
        "durationSec": 1012
      },
      {
        "youtubeVideoId": "SEeWJMxPIBk",
        "title": "OhSnap vs. Low-Pro PopSocket — The Ultimate iPhone Comparison!",
        "sourceChannelId": "UCUUNkL6Wke6i0P6funa7wdQ",
        "sourceChannelTitle": "AppleInsider",
        "thumbnailUrl": "https://i.ytimg.com/vi/SEeWJMxPIBk/hqdefault.jpg",
        "durationSec": 655
      },
      {
        "youtubeVideoId": "QIxUyt2up7o",
        "title": "iPhone Camera Night Test: Duo vs. iPhone 18 Pro Max",
        "sourceChannelId": "UCOmcA3f_RrH6b9NmcNa4tdg",
        "sourceChannelTitle": "CNET",
        "thumbnailUrl": "https://i.ytimg.com/vi/QIxUyt2up7o/hqdefault.jpg",
        "durationSec": 438
      },
      {
        "youtubeVideoId": "34wPouxB9sY",
        "title": "I Was Wrong About the Galaxy Z Fold 8",
        "sourceChannelId": "UCgyqtNWZmIxTx3b6OxTSALw",
        "sourceChannelTitle": "Android Authority",
        "thumbnailUrl": "https://i.ytimg.com/vi/34wPouxB9sY/hqdefault.jpg",
        "durationSec": 626
      },
      {
        "youtubeVideoId": "5LUiY0obYOs",
        "title": "Confessing our tech sins: \"I use the same password everywhere\"",
        "sourceChannelId": "UC-6OW5aJYBFM33zXQlBKPNA",
        "sourceChannelTitle": "Engadget",
        "thumbnailUrl": "https://i.ytimg.com/vi/5LUiY0obYOs/hqdefault.jpg",
        "durationSec": 406
      },
      {
        "youtubeVideoId": "2reQut8WNGc",
        "title": "Macbook PROLED XDR Impressions: They Said They Wouldn't!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/2reQut8WNGc/hqdefault.jpg",
        "durationSec": 654
      },
      {
        "youtubeVideoId": "_pWA4rbzvIg",
        "title": "JavaScript performance is weird... Write scientifically faster code with benchmarking",
        "sourceChannelId": "UC2Xd-TjJByJyK2w1zNwY0zQ",
        "sourceChannelTitle": "Beyond Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/_pWA4rbzvIg/hqdefault.jpg",
        "durationSec": 500
      },
      {
        "youtubeVideoId": "iw9SZgyahqg",
        "title": "The one thing holding theoretical CS together just broke... kinda",
        "sourceChannelId": "UCsBjURrPoezykLs9EqgamOA",
        "sourceChannelTitle": "Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/iw9SZgyahqg/hqdefault.jpg",
        "durationSec": 360
      },
      {
        "youtubeVideoId": "8YClr7M-fsI",
        "title": "A great deal from Razer? - Reclusa x Mini 65",
        "sourceChannelId": "UCdBK94H6oZT2Q7l0-b0xmMg",
        "sourceChannelTitle": "ShortCircuit",
        "thumbnailUrl": "https://i.ytimg.com/vi/8YClr7M-fsI/hqdefault.jpg",
        "durationSec": 536
      },
      {
        "youtubeVideoId": "CAYWoVi0rkw",
        "title": "BookTok is the antidote to doomscrolling | The Vergecast",
        "sourceChannelId": "UCddiUEpeqJcYeBxX1IVBKvQ",
        "sourceChannelTitle": "The Verge",
        "thumbnailUrl": "https://i.ytimg.com/vi/CAYWoVi0rkw/hqdefault.jpg",
        "durationSec": 2161
      },
      {
        "youtubeVideoId": "Xrxy_W78SKk",
        "title": "iPhone Duo is Messier Than You Think",
        "sourceChannelId": "UCMiJRAwDNSNzuYeN2uWa0pA",
        "sourceChannelTitle": "Mrwhosetheboss",
        "thumbnailUrl": "https://i.ytimg.com/vi/Xrxy_W78SKk/hqdefault.jpg",
        "durationSec": 1231
      },
      {
        "youtubeVideoId": "_Xe2JAoMwIA",
        "title": "iPhone Duo Teardown – APPLE SHOULD APOLOGIZE",
        "sourceChannelId": "UCWFKCr40YwOZQx8FHU_ZqqQ",
        "sourceChannelTitle": "JerryRigEverything",
        "thumbnailUrl": "https://i.ytimg.com/vi/_Xe2JAoMwIA/hqdefault.jpg",
        "durationSec": 1044
      },
      {
        "youtubeVideoId": "jUj_wMtm8w0",
        "title": "Whoops, we got forgot about this",
        "sourceChannelId": "UC1IQIspOkCeV3WnYm32SBFQ",
        "sourceChannelTitle": "This Is",
        "thumbnailUrl": "https://i.ytimg.com/vi/jUj_wMtm8w0/hqdefault.jpg",
        "durationSec": 1288
      },
      {
        "youtubeVideoId": "ZrAkCJS9H1s",
        "title": "We Flew to Spain for the Solar Eclipse",
        "sourceChannelId": "UCG7J20LhUeLl6y_Emi7OJrA",
        "sourceChannelTitle": "The Studio",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZrAkCJS9H1s/hqdefault.jpg",
        "durationSec": 863
      },
      {
        "youtubeVideoId": "4GhEtEjIIuU",
        "title": "This Footage Shouldn't Even Exist...",
        "sourceChannelId": "UCXv-co3EYHF7aOH4A93qAHQ",
        "sourceChannelTitle": "Lew Later",
        "thumbnailUrl": "https://i.ytimg.com/vi/4GhEtEjIIuU/hqdefault.jpg",
        "durationSec": 4170
      },
      {
        "youtubeVideoId": "XWyAA48n_TU",
        "title": "Don't Choose the Wrong Gaming Headset for GTA 6.",
        "sourceChannelId": "UC9fSZHEh6XsRpX-xJc6lT3A",
        "sourceChannelTitle": "UrAvgConsumer",
        "thumbnailUrl": "https://i.ytimg.com/vi/XWyAA48n_TU/hqdefault.jpg",
        "durationSec": 505
      },
      {
        "youtubeVideoId": "B84L0wWr93U",
        "title": "Testing Live Rewind & Siri Recap on Apple Watch -- Useful, Scary, or Both?",
        "sourceChannelId": "UCUUNkL6Wke6i0P6funa7wdQ",
        "sourceChannelTitle": "AppleInsider",
        "thumbnailUrl": "https://i.ytimg.com/vi/B84L0wWr93U/hqdefault.jpg",
        "durationSec": 574
      },
      {
        "youtubeVideoId": "V5CYMpUAzl0",
        "title": "iPhone Duo Livestream: How Many Folds Can Apple’s Phone Take? Day 15",
        "sourceChannelId": "UCOmcA3f_RrH6b9NmcNa4tdg",
        "sourceChannelTitle": "CNET",
        "thumbnailUrl": "https://i.ytimg.com/vi/V5CYMpUAzl0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "WTNFAWm3QWI",
        "title": "The iPhone Duo has failed",
        "sourceChannelId": "UCgyqtNWZmIxTx3b6OxTSALw",
        "sourceChannelTitle": "Android Authority",
        "thumbnailUrl": "https://i.ytimg.com/vi/WTNFAWm3QWI/hqdefault.jpg",
        "durationSec": 683
      },
      {
        "youtubeVideoId": "2rfk0aa60e0",
        "title": "The worst gadgets I got: A mini disc player and a Sega Saturn",
        "sourceChannelId": "UC-6OW5aJYBFM33zXQlBKPNA",
        "sourceChannelTitle": "Engadget",
        "thumbnailUrl": "https://i.ytimg.com/vi/2rfk0aa60e0/hqdefault.jpg",
        "durationSec": 210
      },
      {
        "youtubeVideoId": "ESABTN4VtrA",
        "title": "iPhone Duo Review: First Generation Fun!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/ESABTN4VtrA/hqdefault.jpg",
        "durationSec": 1744
      }
    ]
  },
  "games": {
    "categoryId": "games",
    "categoryName": "Games",
    "hue": 268,
    "builtAt": 1794338232374,
    "videos": [
      {
        "youtubeVideoId": "8LMau1qXPYE",
        "title": "My game was cloned with AI... what do I do?",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/8LMau1qXPYE/hqdefault.jpg",
        "durationSec": 1228
      },
      {
        "youtubeVideoId": "Byibb4onvGE",
        "title": "Rainbow Six Vegas",
        "sourceChannelId": "UCGiJeCKTVKIxtaYZOidh19g",
        "sourceChannelTitle": "Dunk Tank",
        "thumbnailUrl": "https://i.ytimg.com/vi/Byibb4onvGE/hqdefault.jpg",
        "durationSec": 3394
      },
      {
        "youtubeVideoId": "I7IaqRJMi9w",
        "title": "I Failed",
        "sourceChannelId": "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
        "sourceChannelTitle": "PewDiePie",
        "thumbnailUrl": "https://i.ytimg.com/vi/I7IaqRJMi9w/hqdefault.jpg",
        "durationSec": 605
      },
      {
        "youtubeVideoId": "3Wr72H2pnfM",
        "title": "20 Game Franchises That DIED For Dumbest Reasons",
        "sourceChannelId": "UCNvzD7Z-g64bPXxGzaQaa4g",
        "sourceChannelTitle": "gameranx",
        "thumbnailUrl": "https://i.ytimg.com/vi/3Wr72H2pnfM/hqdefault.jpg",
        "durationSec": 2604
      },
      {
        "youtubeVideoId": "0FIMFMxODIE",
        "title": "Monster Hunter Outlanders (Austin's Review)",
        "sourceChannelId": "UCZ7AeeVbyslLM_8-nVy2B8Q",
        "sourceChannelTitle": "Skill Up",
        "thumbnailUrl": "https://i.ytimg.com/vi/0FIMFMxODIE/hqdefault.jpg",
        "durationSec": 1231
      },
      {
        "youtubeVideoId": "PkaZzWmQQ3M",
        "title": "The Legend Of Zelda: Ocarina Of Time - Essential on Switch 2",
        "sourceChannelId": "UCLdBr5f6RcP6l_TAP4GkhDQ",
        "sourceChannelTitle": "DF Clips",
        "thumbnailUrl": "https://i.ytimg.com/vi/PkaZzWmQQ3M/hqdefault.jpg",
        "durationSec": 1278
      },
      {
        "youtubeVideoId": "ECHvbbpEP_M",
        "title": "Gametime w/Fendler - Winter PGA Custom Courses/Football Yap",
        "sourceChannelId": "UC5CE6nbu1tjSGha-a_cHAFA",
        "sourceChannelTitle": "GameSpot Sports",
        "thumbnailUrl": "https://i.ytimg.com/vi/ECHvbbpEP_M/hqdefault.jpg",
        "durationSec": 12715
      },
      {
        "youtubeVideoId": "KIQnIBi7SjU",
        "title": "Damiani Plays Zelda: Ocarina of Time (2026) (Pt 1) - It's Been 28 Years...",
        "sourceChannelId": "UCL7O6Onu0lBcwZ8t-YMgGcw",
        "sourceChannelTitle": "Easy Allies Plays",
        "thumbnailUrl": "https://i.ytimg.com/vi/KIQnIBi7SjU/hqdefault.jpg",
        "durationSec": 35952
      },
      {
        "youtubeVideoId": "krj0RHn_6SY",
        "title": "HOT New Amiga Game Reshoot Proxima 3 Interview with Developers Richard Lowenstein & Martin Ahman",
        "sourceChannelId": "UCYt9E2d_GCrPzquW-5MZwmQ",
        "sourceChannelTitle": "The Guru Meditation",
        "thumbnailUrl": "https://i.ytimg.com/vi/krj0RHn_6SY/hqdefault.jpg",
        "durationSec": 14218
      },
      {
        "youtubeVideoId": "wcTUDQbNhGE",
        "title": "No Switch 2 Price Increases Are Planned and I Am Shook",
        "sourceChannelId": "UCHDRlTIaDXGGYduDDNrBmTw",
        "sourceChannelTitle": "TopicArlo",
        "thumbnailUrl": "https://i.ytimg.com/vi/wcTUDQbNhGE/hqdefault.jpg",
        "durationSec": 745
      },
      {
        "youtubeVideoId": "soTTh20_dYs",
        "title": "This Makes No Sense",
        "sourceChannelId": "UCDTV8DckMvn7mlgtdxTyR-g",
        "sourceChannelTitle": "Spawn Wave Plus",
        "thumbnailUrl": "https://i.ytimg.com/vi/soTTh20_dYs/hqdefault.jpg",
        "durationSec": 485
      },
      {
        "youtubeVideoId": "3Ae0gNYzaSQ",
        "title": "The Legend of Zelda: Ocarina of Time",
        "sourceChannelId": "UCsvn_Po0SmunchJYOWpOxMg",
        "sourceChannelTitle": "videogamedunkey",
        "thumbnailUrl": "https://i.ytimg.com/vi/3Ae0gNYzaSQ/hqdefault.jpg",
        "durationSec": 993
      },
      {
        "youtubeVideoId": "9Xi118VLFfs",
        "title": "Should Your Boyfriend Play Donkey Kong Bananza?",
        "sourceChannelId": "UC2eEGT06FrWFU6VBnPOR9lg",
        "sourceChannelTitle": "Girlfriend Reviews",
        "thumbnailUrl": "https://i.ytimg.com/vi/9Xi118VLFfs/hqdefault.jpg",
        "durationSec": 544
      },
      {
        "youtubeVideoId": "Dbgdi7BzMR0",
        "title": "The History of Every Video Game Genre",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dbgdi7BzMR0/hqdefault.jpg",
        "durationSec": 8318
      },
      {
        "youtubeVideoId": "NF7ELVJUiKM",
        "title": "Can Saros surpass Samson?",
        "sourceChannelId": "UCGiJeCKTVKIxtaYZOidh19g",
        "sourceChannelTitle": "Dunk Tank",
        "thumbnailUrl": "https://i.ytimg.com/vi/NF7ELVJUiKM/hqdefault.jpg",
        "durationSec": 6537
      },
      {
        "youtubeVideoId": "U6I5PkZjWZU",
        "title": "I Google Myself..",
        "sourceChannelId": "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
        "sourceChannelTitle": "PewDiePie",
        "thumbnailUrl": "https://i.ytimg.com/vi/U6I5PkZjWZU/hqdefault.jpg",
        "durationSec": 704
      },
      {
        "youtubeVideoId": "ASY-TjQNOeM",
        "title": "10 GREEDY Games That Had a Slow DOWNFALL",
        "sourceChannelId": "UCNvzD7Z-g64bPXxGzaQaa4g",
        "sourceChannelTitle": "gameranx",
        "thumbnailUrl": "https://i.ytimg.com/vi/ASY-TjQNOeM/hqdefault.jpg",
        "durationSec": 1346
      },
      {
        "youtubeVideoId": "PP9WeyvDdF8",
        "title": "Does Ocarina of Time still deserve all these perfect scores in 2026? | Friends Per Second #108",
        "sourceChannelId": "UCZ7AeeVbyslLM_8-nVy2B8Q",
        "sourceChannelTitle": "Skill Up",
        "thumbnailUrl": "https://i.ytimg.com/vi/PP9WeyvDdF8/hqdefault.jpg",
        "durationSec": 7142
      },
      {
        "youtubeVideoId": "8j-ecLCywxU",
        "title": "Should Developers Target Games For Potato-Level PCs?",
        "sourceChannelId": "UCLdBr5f6RcP6l_TAP4GkhDQ",
        "sourceChannelTitle": "DF Clips",
        "thumbnailUrl": "https://i.ytimg.com/vi/8j-ecLCywxU/hqdefault.jpg",
        "durationSec": 305
      },
      {
        "youtubeVideoId": "mfBeP8318YA",
        "title": "Gametime w/Fendler - Winter PGA Custom Courses/Football Yap (Portrait)",
        "sourceChannelId": "UC5CE6nbu1tjSGha-a_cHAFA",
        "sourceChannelTitle": "GameSpot Sports",
        "thumbnailUrl": "https://i.ytimg.com/vi/mfBeP8318YA/hqdefault.jpg",
        "durationSec": 12718
      },
      {
        "youtubeVideoId": "AMxL-Hc8ROE",
        "title": "Easy Allies Plays Pro Jank Footy, Phantom Blade Zero, and Queen's Domain - Stream Team",
        "sourceChannelId": "UCL7O6Onu0lBcwZ8t-YMgGcw",
        "sourceChannelTitle": "Easy Allies Plays",
        "thumbnailUrl": "https://i.ytimg.com/vi/AMxL-Hc8ROE/hqdefault.jpg",
        "durationSec": 7844
      },
      {
        "youtubeVideoId": "_g6WN2yR0kg",
        "title": "Epic Chris Huelsbeck Interview - The Legendary Commodore 64, Amiga, & Video Game Composer",
        "sourceChannelId": "UCYt9E2d_GCrPzquW-5MZwmQ",
        "sourceChannelTitle": "The Guru Meditation",
        "thumbnailUrl": "https://i.ytimg.com/vi/_g6WN2yR0kg/hqdefault.jpg",
        "durationSec": 5595
      },
      {
        "youtubeVideoId": "VrsUj4j-iWM",
        "title": "I Have Completely Flipped on Pikmin 4 Switch 2 Edition",
        "sourceChannelId": "UCHDRlTIaDXGGYduDDNrBmTw",
        "sourceChannelTitle": "TopicArlo",
        "thumbnailUrl": "https://i.ytimg.com/vi/VrsUj4j-iWM/hqdefault.jpg",
        "durationSec": 720
      },
      {
        "youtubeVideoId": "htHVQalXShA",
        "title": "PS6 Reports Are Already Here…",
        "sourceChannelId": "UCDTV8DckMvn7mlgtdxTyR-g",
        "sourceChannelTitle": "Spawn Wave Plus",
        "thumbnailUrl": "https://i.ytimg.com/vi/htHVQalXShA/hqdefault.jpg",
        "durationSec": 726
      },
      {
        "youtubeVideoId": "-Y6Cp6e-VbI",
        "title": "Call of Duty 24 : Modern Warfare 4",
        "sourceChannelId": "UCsvn_Po0SmunchJYOWpOxMg",
        "sourceChannelTitle": "videogamedunkey",
        "thumbnailUrl": "https://i.ytimg.com/vi/-Y6Cp6e-VbI/hqdefault.jpg",
        "durationSec": 564
      },
      {
        "youtubeVideoId": "aVXbYwJnm7s",
        "title": "Should Your Boyfriend Play Mario Kart World?",
        "sourceChannelId": "UC2eEGT06FrWFU6VBnPOR9lg",
        "sourceChannelTitle": "Girlfriend Reviews",
        "thumbnailUrl": "https://i.ytimg.com/vi/aVXbYwJnm7s/hqdefault.jpg",
        "durationSec": 604
      },
      {
        "youtubeVideoId": "dFsQxTpsEas",
        "title": "Milki Delivery Gameplay Trailer",
        "sourceChannelId": "UCKMkV9T20tUOBqwsi5xh7HA",
        "sourceChannelTitle": "Wholesome Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/dFsQxTpsEas/hqdefault.jpg",
        "durationSec": 64
      },
      {
        "youtubeVideoId": "awegilW3DTc",
        "title": "My Favourite Games From GMTK Game Jam 2026",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/awegilW3DTc/hqdefault.jpg",
        "durationSec": 1250
      },
      {
        "youtubeVideoId": "Iyj1-8iuWXw",
        "title": "Motion Rec",
        "sourceChannelId": "UCGiJeCKTVKIxtaYZOidh19g",
        "sourceChannelTitle": "Dunk Tank",
        "thumbnailUrl": "https://i.ytimg.com/vi/Iyj1-8iuWXw/hqdefault.jpg",
        "durationSec": 4264
      },
      {
        "youtubeVideoId": "ODDJXGY_1kQ",
        "title": "I seriously should NOT be dropping this.",
        "sourceChannelId": "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
        "sourceChannelTitle": "PewDiePie",
        "thumbnailUrl": "https://i.ytimg.com/vi/ODDJXGY_1kQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "UjB432B1Pg4",
        "title": "10 Developers That Warned Us, But Nobody Listened",
        "sourceChannelId": "UCNvzD7Z-g64bPXxGzaQaa4g",
        "sourceChannelTitle": "gameranx",
        "thumbnailUrl": "https://i.ytimg.com/vi/UjB432B1Pg4/hqdefault.jpg",
        "durationSec": 1375
      },
      {
        "youtubeVideoId": "RrBtNPw4hBg",
        "title": "Elder Scrolls VI: Sentinel, Ocarina of Time reviews + GoW Laufey delayed | This Week in Videogames",
        "sourceChannelId": "UCZ7AeeVbyslLM_8-nVy2B8Q",
        "sourceChannelTitle": "Skill Up",
        "thumbnailUrl": "https://i.ytimg.com/vi/RrBtNPw4hBg/hqdefault.jpg",
        "durationSec": 2037
      },
      {
        "youtubeVideoId": "v7j8BvbNpIY",
        "title": "God of Laufey Delayed By Three Months - And That's A Good Thing",
        "sourceChannelId": "UCLdBr5f6RcP6l_TAP4GkhDQ",
        "sourceChannelTitle": "DF Clips",
        "thumbnailUrl": "https://i.ytimg.com/vi/v7j8BvbNpIY/hqdefault.jpg",
        "durationSec": 269
      },
      {
        "youtubeVideoId": "WXTWK_MuuPo",
        "title": "Gametime w/Fendler - Winter PGA Custom Courses/Football Yap (Portrait)",
        "sourceChannelId": "UC5CE6nbu1tjSGha-a_cHAFA",
        "sourceChannelTitle": "GameSpot Sports",
        "thumbnailUrl": "https://i.ytimg.com/vi/WXTWK_MuuPo/hqdefault.jpg",
        "durationSec": 5822
      },
      {
        "youtubeVideoId": "kGFXjeq_nHY",
        "title": "Damiani Plays Phantom Blade Zero",
        "sourceChannelId": "UCL7O6Onu0lBcwZ8t-YMgGcw",
        "sourceChannelTitle": "Easy Allies Plays",
        "thumbnailUrl": "https://i.ytimg.com/vi/kGFXjeq_nHY/hqdefault.jpg",
        "durationSec": 29872
      },
      {
        "youtubeVideoId": "MvZRGvouhdQ",
        "title": "FIRST LOOK: New Wireless Commodore Amiga Tank Mouse",
        "sourceChannelId": "UCYt9E2d_GCrPzquW-5MZwmQ",
        "sourceChannelTitle": "The Guru Meditation",
        "thumbnailUrl": "https://i.ytimg.com/vi/MvZRGvouhdQ/hqdefault.jpg",
        "durationSec": 465
      },
      {
        "youtubeVideoId": "6215y2Q2T10",
        "title": "We've Finally Got Sales Data for a Bunch of Newer Switch 2 Games",
        "sourceChannelId": "UCHDRlTIaDXGGYduDDNrBmTw",
        "sourceChannelTitle": "TopicArlo",
        "thumbnailUrl": "https://i.ytimg.com/vi/6215y2Q2T10/hqdefault.jpg",
        "durationSec": 871
      },
      {
        "youtubeVideoId": "ZX_DzbPF_6E",
        "title": "The PS5 Pro Is Backfiring On Scalpers",
        "sourceChannelId": "UCDTV8DckMvn7mlgtdxTyR-g",
        "sourceChannelTitle": "Spawn Wave Plus",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZX_DzbPF_6E/hqdefault.jpg",
        "durationSec": 537
      },
      {
        "youtubeVideoId": "kjUabhk54gg",
        "title": "Star Wars Galactic Racer",
        "sourceChannelId": "UCsvn_Po0SmunchJYOWpOxMg",
        "sourceChannelTitle": "videogamedunkey",
        "thumbnailUrl": "https://i.ytimg.com/vi/kjUabhk54gg/hqdefault.jpg",
        "durationSec": 749
      },
      {
        "youtubeVideoId": "EbZcrOsFjOw",
        "title": "Spooky Things in Non-Spooky Games | Are you there, Pod?",
        "sourceChannelId": "UC2eEGT06FrWFU6VBnPOR9lg",
        "sourceChannelTitle": "Girlfriend Reviews",
        "thumbnailUrl": "https://i.ytimg.com/vi/EbZcrOsFjOw/hqdefault.jpg",
        "durationSec": 1949
      },
      {
        "youtubeVideoId": "5venGClMwdo",
        "title": "Loftia Early Access Launch Trailer",
        "sourceChannelId": "UCKMkV9T20tUOBqwsi5xh7HA",
        "sourceChannelTitle": "Wholesome Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/5venGClMwdo/hqdefault.jpg",
        "durationSec": 97
      },
      {
        "youtubeVideoId": "JFG0GMCMLgs",
        "title": "Word Play is now available on iOS!",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/JFG0GMCMLgs/hqdefault.jpg",
        "durationSec": 139
      },
      {
        "youtubeVideoId": "bF_zv3H6XgQ",
        "title": "Samson",
        "sourceChannelId": "UCGiJeCKTVKIxtaYZOidh19g",
        "sourceChannelTitle": "Dunk Tank",
        "thumbnailUrl": "https://i.ytimg.com/vi/bF_zv3H6XgQ/hqdefault.jpg",
        "durationSec": 8098
      },
      {
        "youtubeVideoId": "H8g4B5ZN7LM",
        "title": "Thank you and Goodbye.",
        "sourceChannelId": "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
        "sourceChannelTitle": "PewDiePie",
        "thumbnailUrl": "https://i.ytimg.com/vi/H8g4B5ZN7LM/hqdefault.jpg",
        "durationSec": 2206
      },
      {
        "youtubeVideoId": "rk20dVV-AH0",
        "title": "25 UPCOMING Games We're MOST EXCITED ABOUT",
        "sourceChannelId": "UCNvzD7Z-g64bPXxGzaQaa4g",
        "sourceChannelTitle": "gameranx",
        "thumbnailUrl": "https://i.ytimg.com/vi/rk20dVV-AH0/hqdefault.jpg",
        "durationSec": 1658
      },
      {
        "youtubeVideoId": "7d93ySOiHMw",
        "title": "I strongly recommend: 'The Legend of Zelda: Ocarina of Time (2026)' - Review",
        "sourceChannelId": "UCZ7AeeVbyslLM_8-nVy2B8Q",
        "sourceChannelTitle": "Skill Up",
        "thumbnailUrl": "https://i.ytimg.com/vi/7d93ySOiHMw/hqdefault.jpg",
        "durationSec": 1318
      },
      {
        "youtubeVideoId": "bLY4y-3J7Dc",
        "title": "Is Testing Using RTX 5090 Unacceptable At This Point?",
        "sourceChannelId": "UCLdBr5f6RcP6l_TAP4GkhDQ",
        "sourceChannelTitle": "DF Clips",
        "thumbnailUrl": "https://i.ytimg.com/vi/bLY4y-3J7Dc/hqdefault.jpg",
        "durationSec": 560
      },
      {
        "youtubeVideoId": "EsuIE09kie4",
        "title": "Gametime w/Fendler - Winter PGA Custom Courses/Football Yap",
        "sourceChannelId": "UC5CE6nbu1tjSGha-a_cHAFA",
        "sourceChannelTitle": "GameSpot Sports",
        "thumbnailUrl": "https://i.ytimg.com/vi/EsuIE09kie4/hqdefault.jpg",
        "durationSec": 6427
      },
      {
        "youtubeVideoId": "xZ-S0-2zPbM",
        "title": "Easy Allies Halloween Charity Stream 2026",
        "sourceChannelId": "UCL7O6Onu0lBcwZ8t-YMgGcw",
        "sourceChannelTitle": "Easy Allies Plays",
        "thumbnailUrl": "https://i.ytimg.com/vi/xZ-S0-2zPbM/hqdefault.jpg",
        "durationSec": 17297
      }
    ]
  },
  "music": {
    "categoryId": "music",
    "categoryName": "Music",
    "hue": 205,
    "builtAt": 1794338232822,
    "videos": [
      {
        "youtubeVideoId": "LtUDeizHqKk",
        "title": "Fat Joe: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/LtUDeizHqKk/hqdefault.jpg",
        "durationSec": 1547
      },
      {
        "youtubeVideoId": "fIeVKrWIoSM",
        "title": "Jesse Malin - \"Almost Grown\" (Live for World Cafe)",
        "sourceChannelId": "UC7nrQB0dRxdQpH8-y8glEDw",
        "sourceChannelTitle": "World Cafe",
        "thumbnailUrl": "https://i.ytimg.com/vi/fIeVKrWIoSM/hqdefault.jpg",
        "durationSec": 229
      },
      {
        "youtubeVideoId": "qbYI8cixutY",
        "title": "Slowwves - Full Performance (Live on KEXP)",
        "sourceChannelId": "UC3I2GFN_F8WudD_2jUZbojA",
        "sourceChannelTitle": "KEXP",
        "thumbnailUrl": "https://i.ytimg.com/vi/qbYI8cixutY/hqdefault.jpg",
        "durationSec": 1429
      },
      {
        "youtubeVideoId": "4Z2a2Iaj48M",
        "title": "Olive Jones performs Mary for Mahogany Sessions",
        "sourceChannelId": "UCG36u-k09zdIPQh5EEdVgTA",
        "sourceChannelTitle": "Mahogany",
        "thumbnailUrl": "https://i.ytimg.com/vi/4Z2a2Iaj48M/hqdefault.jpg",
        "durationSec": 236
      },
      {
        "youtubeVideoId": "oIgHjxeQn3k",
        "title": "Massane, Teho - Back From There",
        "sourceChannelId": "UCCycRfTS7V9WOFfWfkNVCSg",
        "sourceChannelTitle": "Cercle Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/oIgHjxeQn3k/hqdefault.jpg",
        "durationSec": 315
      },
      {
        "youtubeVideoId": "F8E0y5xiyso",
        "title": "Are You In A Sexless Relationship? | The Hook Up Podcast",
        "sourceChannelId": "UC8sy_jU8fgYKVsMobRiBnWw",
        "sourceChannelTitle": "triple j talks",
        "thumbnailUrl": "https://i.ytimg.com/vi/F8E0y5xiyso/hqdefault.jpg",
        "durationSec": 2508
      },
      {
        "youtubeVideoId": "u1GtMLZMlDA",
        "title": "Ella Red - Ball & Chain | Audiotree Live",
        "sourceChannelId": "UCWjmAUHmajb1-eo5WKk_22A",
        "sourceChannelTitle": "Audiotree",
        "thumbnailUrl": "https://i.ytimg.com/vi/u1GtMLZMlDA/hqdefault.jpg",
        "durationSec": 182
      },
      {
        "youtubeVideoId": "VibtPvPxohQ",
        "title": "2hollis Joins Sian Eleri + 'Daisy' Is Radio 1's Hottest Record 🔥",
        "sourceChannelId": "UC-FQUIVQ-bZiefzBiQAa8Fw",
        "sourceChannelTitle": "BBC Radio 1",
        "thumbnailUrl": "https://i.ytimg.com/vi/VibtPvPxohQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "z28UbGAPteA",
        "title": "Vieze Asbak | Boiler Room LA: Teletech",
        "sourceChannelId": "UCGBpxWJr9FNOcFYA5GkKrMg",
        "sourceChannelTitle": "Boiler Room",
        "thumbnailUrl": "https://i.ytimg.com/vi/z28UbGAPteA/hqdefault.jpg",
        "durationSec": 3561
      },
      {
        "youtubeVideoId": "b7jc67izCKU",
        "title": "Denitia covers Stone Temple Pilots' \"Interstate Love Song.\"",
        "sourceChannelId": "UCRLZb8PpI9N7COmYqHiDH7A",
        "sourceChannelTitle": "Sofar Sounds",
        "thumbnailUrl": "https://i.ytimg.com/vi/b7jc67izCKU/hqdefault.jpg",
        "durationSec": 252
      },
      {
        "youtubeVideoId": "h1QTWtUx81w",
        "title": "Charlie Parr — (what's so funny about) Universal Healthcare? (live in The Current studio)",
        "sourceChannelId": "UCAKcSON6PSG_JkTbXh2WdIg",
        "sourceChannelTitle": "The Current",
        "thumbnailUrl": "https://i.ytimg.com/vi/h1QTWtUx81w/hqdefault.jpg",
        "durationSec": 190
      },
      {
        "youtubeVideoId": "qwEvePgqS3E",
        "title": "Katie Pruitt - Full Session | Paste",
        "sourceChannelId": "UC_PscE_7n8SiMspieMGMK_A",
        "sourceChannelTitle": "Paste Magazine",
        "thumbnailUrl": "https://i.ytimg.com/vi/qwEvePgqS3E/hqdefault.jpg",
        "durationSec": 1004
      },
      {
        "youtubeVideoId": "mk-UTm2zvNk",
        "title": "LIVE: Special Guest Robby Hoffman! | Morning Becomes Eclectic",
        "sourceChannelId": "UC54U5gpKkaa_BpXRVNip2Dw",
        "sourceChannelTitle": "KCRW",
        "thumbnailUrl": "https://i.ytimg.com/vi/mk-UTm2zvNk/hqdefault.jpg",
        "durationSec": 3419
      },
      {
        "youtubeVideoId": "73wCQRQb7v0",
        "title": "Jungle: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/73wCQRQb7v0/hqdefault.jpg",
        "durationSec": 1093
      },
      {
        "youtubeVideoId": "KAAOVrm6Q4Q",
        "title": "Jesse Malin - \"Hollywood Forever\" (Live for World Cafe)",
        "sourceChannelId": "UC7nrQB0dRxdQpH8-y8glEDw",
        "sourceChannelTitle": "World Cafe",
        "thumbnailUrl": "https://i.ytimg.com/vi/KAAOVrm6Q4Q/hqdefault.jpg",
        "durationSec": 211
      },
      {
        "youtubeVideoId": "GRunLx0PZKk",
        "title": "Slowwves - Killed By Egoistic Disease (Live on KEXP)",
        "sourceChannelId": "UC3I2GFN_F8WudD_2jUZbojA",
        "sourceChannelTitle": "KEXP",
        "thumbnailUrl": "https://i.ytimg.com/vi/GRunLx0PZKk/hqdefault.jpg",
        "durationSec": 316
      },
      {
        "youtubeVideoId": "_sf68tCJtXY",
        "title": "Sparklmami performs running for Mahogany Sessions",
        "sourceChannelId": "UCG36u-k09zdIPQh5EEdVgTA",
        "sourceChannelTitle": "Mahogany",
        "thumbnailUrl": "https://i.ytimg.com/vi/_sf68tCJtXY/hqdefault.jpg",
        "durationSec": 203
      },
      {
        "youtubeVideoId": "gwLLvuVitx0",
        "title": "Denis Horvat, Lulliby - What To Do",
        "sourceChannelId": "UCCycRfTS7V9WOFfWfkNVCSg",
        "sourceChannelTitle": "Cercle Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/gwLLvuVitx0/hqdefault.jpg",
        "durationSec": 162
      },
      {
        "youtubeVideoId": "UiR_wdpxNIk",
        "title": "STOP USING PARTIFUL | The Slop podcast",
        "sourceChannelId": "UC8sy_jU8fgYKVsMobRiBnWw",
        "sourceChannelTitle": "triple j talks",
        "thumbnailUrl": "https://i.ytimg.com/vi/UiR_wdpxNIk/hqdefault.jpg",
        "durationSec": 1876
      },
      {
        "youtubeVideoId": "19oaAYqgiU0",
        "title": "Ella Red - Aphrodite | Audiotree Live",
        "sourceChannelId": "UCWjmAUHmajb1-eo5WKk_22A",
        "sourceChannelTitle": "Audiotree",
        "thumbnailUrl": "https://i.ytimg.com/vi/19oaAYqgiU0/hqdefault.jpg",
        "durationSec": 236
      },
      {
        "youtubeVideoId": "j04AQUOx9yY",
        "title": "Armin van Buuren & Benwal at ADE (Gashouder) - Radio 1’s Essential Mix Live",
        "sourceChannelId": "UC-FQUIVQ-bZiefzBiQAa8Fw",
        "sourceChannelTitle": "BBC Radio 1",
        "thumbnailUrl": "https://i.ytimg.com/vi/j04AQUOx9yY/hqdefault.jpg",
        "durationSec": 8079
      },
      {
        "youtubeVideoId": "rGjgyjKBhDs",
        "title": "JAZZY | Boiler Room LA: Teletech",
        "sourceChannelId": "UCGBpxWJr9FNOcFYA5GkKrMg",
        "sourceChannelTitle": "Boiler Room",
        "thumbnailUrl": "https://i.ytimg.com/vi/rGjgyjKBhDs/hqdefault.jpg",
        "durationSec": 3649
      },
      {
        "youtubeVideoId": "FHuAfvoQB-c",
        "title": "Kiwi Jr. — Photos of the Reenactment (live in The Current studio)",
        "sourceChannelId": "UCAKcSON6PSG_JkTbXh2WdIg",
        "sourceChannelTitle": "The Current",
        "thumbnailUrl": "https://i.ytimg.com/vi/FHuAfvoQB-c/hqdefault.jpg",
        "durationSec": 187
      },
      {
        "youtubeVideoId": "KDvG_hN_8o8",
        "title": "Della Mae - Full Session | Paste",
        "sourceChannelId": "UC_PscE_7n8SiMspieMGMK_A",
        "sourceChannelTitle": "Paste Magazine",
        "thumbnailUrl": "https://i.ytimg.com/vi/KDvG_hN_8o8/hqdefault.jpg",
        "durationSec": 605
      },
      {
        "youtubeVideoId": "KZ2OEZArv5g",
        "title": "Jakob Nowell's (of Sublime) Must-Listen Albums",
        "sourceChannelId": "UC54U5gpKkaa_BpXRVNip2Dw",
        "sourceChannelTitle": "KCRW",
        "thumbnailUrl": "https://i.ytimg.com/vi/KZ2OEZArv5g/hqdefault.jpg",
        "durationSec": 534
      },
      {
        "youtubeVideoId": "XoH44mH5laY",
        "title": "Richard O'Brien's 'The Rocky Horror Show': Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/XoH44mH5laY/hqdefault.jpg",
        "durationSec": 966
      },
      {
        "youtubeVideoId": "UdJNUNiXKQs",
        "title": "Jesse Malin - \"Shining Down\" (Live for World Cafe)",
        "sourceChannelId": "UC7nrQB0dRxdQpH8-y8glEDw",
        "sourceChannelTitle": "World Cafe",
        "thumbnailUrl": "https://i.ytimg.com/vi/UdJNUNiXKQs/hqdefault.jpg",
        "durationSec": 188
      },
      {
        "youtubeVideoId": "UNE8a-AGo3Q",
        "title": "Slowwves - Vortex (Live on KEXP)",
        "sourceChannelId": "UC3I2GFN_F8WudD_2jUZbojA",
        "sourceChannelTitle": "KEXP",
        "thumbnailUrl": "https://i.ytimg.com/vi/UNE8a-AGo3Q/hqdefault.jpg",
        "durationSec": 221
      },
      {
        "youtubeVideoId": "vD5_ys2KurU",
        "title": "Sparklmami performs quisiera for Mahogany Sessions",
        "sourceChannelId": "UCG36u-k09zdIPQh5EEdVgTA",
        "sourceChannelTitle": "Mahogany",
        "thumbnailUrl": "https://i.ytimg.com/vi/vD5_ys2KurU/hqdefault.jpg",
        "durationSec": 268
      },
      {
        "youtubeVideoId": "F6IiTdG83Y4",
        "title": "19:26,1LINE - On The Other Side",
        "sourceChannelId": "UCCycRfTS7V9WOFfWfkNVCSg",
        "sourceChannelTitle": "Cercle Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/F6IiTdG83Y4/hqdefault.jpg",
        "durationSec": 171
      },
      {
        "youtubeVideoId": "IEoIAMl87RA",
        "title": "The kind of episode where you have to wipe your ass after | The Grill Podcast",
        "sourceChannelId": "UC8sy_jU8fgYKVsMobRiBnWw",
        "sourceChannelTitle": "triple j talks",
        "thumbnailUrl": "https://i.ytimg.com/vi/IEoIAMl87RA/hqdefault.jpg",
        "durationSec": 1754
      },
      {
        "youtubeVideoId": "fPnkAfXeArM",
        "title": "Ella Red on Audiotree Live (Full Session)",
        "sourceChannelId": "UCWjmAUHmajb1-eo5WKk_22A",
        "sourceChannelTitle": "Audiotree",
        "thumbnailUrl": "https://i.ytimg.com/vi/fPnkAfXeArM/hqdefault.jpg",
        "durationSec": 1557
      },
      {
        "youtubeVideoId": "AL75DHREheM",
        "title": "Jowi | Boiler Room LA: Teletech",
        "sourceChannelId": "UCGBpxWJr9FNOcFYA5GkKrMg",
        "sourceChannelTitle": "Boiler Room",
        "thumbnailUrl": "https://i.ytimg.com/vi/AL75DHREheM/hqdefault.jpg",
        "durationSec": 3512
      },
      {
        "youtubeVideoId": "j58aOarW_YA",
        "title": "Ramsey Thornton - Full Session | Paste",
        "sourceChannelId": "UC_PscE_7n8SiMspieMGMK_A",
        "sourceChannelTitle": "Paste Magazine",
        "thumbnailUrl": "https://i.ytimg.com/vi/j58aOarW_YA/hqdefault.jpg",
        "durationSec": 939
      },
      {
        "youtubeVideoId": "cfNiSsYBki0",
        "title": "LIVE: Monday Morning Soundtrack | Morning Becomes Eclectic",
        "sourceChannelId": "UC54U5gpKkaa_BpXRVNip2Dw",
        "sourceChannelTitle": "KCRW",
        "thumbnailUrl": "https://i.ytimg.com/vi/cfNiSsYBki0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "xPIMk4d4ulI",
        "title": "CMAT: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/xPIMk4d4ulI/hqdefault.jpg",
        "durationSec": 1452
      },
      {
        "youtubeVideoId": "bRjijIUxLOQ",
        "title": "Jesse Malin on World Cafe I Studio Session & Interview",
        "sourceChannelId": "UC7nrQB0dRxdQpH8-y8glEDw",
        "sourceChannelTitle": "World Cafe",
        "thumbnailUrl": "https://i.ytimg.com/vi/bRjijIUxLOQ/hqdefault.jpg",
        "durationSec": 1924
      },
      {
        "youtubeVideoId": "OGBXbNoFWEw",
        "title": "Slowwves - Evangeline (Live on KEXP)",
        "sourceChannelId": "UC3I2GFN_F8WudD_2jUZbojA",
        "sourceChannelTitle": "KEXP",
        "thumbnailUrl": "https://i.ytimg.com/vi/OGBXbNoFWEw/hqdefault.jpg",
        "durationSec": 392
      },
      {
        "youtubeVideoId": "N4OIOudIROo",
        "title": "olorunns performs Iris for Mahogany Sessions",
        "sourceChannelId": "UCG36u-k09zdIPQh5EEdVgTA",
        "sourceChannelTitle": "Mahogany",
        "thumbnailUrl": "https://i.ytimg.com/vi/N4OIOudIROo/hqdefault.jpg",
        "durationSec": 178
      },
      {
        "youtubeVideoId": "KlGEta2Pp-o",
        "title": "Helsloot - I Keep Going (feat. Chris Howard)",
        "sourceChannelId": "UCCycRfTS7V9WOFfWfkNVCSg",
        "sourceChannelTitle": "Cercle Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/KlGEta2Pp-o/hqdefault.jpg",
        "durationSec": 254
      },
      {
        "youtubeVideoId": "duAln9SSHgU",
        "title": "70 Shows Into Breaky Radio And We Have Thoughts! | Abby and Tyrone Podcast",
        "sourceChannelId": "UC8sy_jU8fgYKVsMobRiBnWw",
        "sourceChannelTitle": "triple j talks",
        "thumbnailUrl": "https://i.ytimg.com/vi/duAln9SSHgU/hqdefault.jpg",
        "durationSec": 1031
      },
      {
        "youtubeVideoId": "AjoHm2q6jos",
        "title": "Ella Red - I Like You Best | Audiotree Live",
        "sourceChannelId": "UCWjmAUHmajb1-eo5WKk_22A",
        "sourceChannelTitle": "Audiotree",
        "thumbnailUrl": "https://i.ytimg.com/vi/AjoHm2q6jos/hqdefault.jpg",
        "durationSec": 172
      },
      {
        "youtubeVideoId": "svo1fX_il9k",
        "title": "Natte Visstick | Boiler Room LA: Teletech",
        "sourceChannelId": "UCGBpxWJr9FNOcFYA5GkKrMg",
        "sourceChannelTitle": "Boiler Room",
        "thumbnailUrl": "https://i.ytimg.com/vi/svo1fX_il9k/hqdefault.jpg",
        "durationSec": 3493
      },
      {
        "youtubeVideoId": "8GmD549VT2o",
        "title": "Lindsay Lou - Full Session | Paste",
        "sourceChannelId": "UC_PscE_7n8SiMspieMGMK_A",
        "sourceChannelTitle": "Paste Magazine",
        "thumbnailUrl": "https://i.ytimg.com/vi/8GmD549VT2o/hqdefault.jpg",
        "durationSec": 1291
      },
      {
        "youtubeVideoId": "MQi0WJcps9w",
        "title": "Music in Nature | 8 Hour Ambient Mix",
        "sourceChannelId": "UC54U5gpKkaa_BpXRVNip2Dw",
        "sourceChannelTitle": "KCRW",
        "thumbnailUrl": "https://i.ytimg.com/vi/MQi0WJcps9w/hqdefault.jpg",
        "durationSec": 28909
      },
      {
        "youtubeVideoId": "_Mp_bpIZKlI",
        "title": "Brìghde Chaimbeul: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/_Mp_bpIZKlI/hqdefault.jpg",
        "durationSec": 1195
      },
      {
        "youtubeVideoId": "i0w641Yo0ys",
        "title": "Margaret Glaspy - \"Reminder\" (Live for World Cafe)",
        "sourceChannelId": "UC7nrQB0dRxdQpH8-y8glEDw",
        "sourceChannelTitle": "World Cafe",
        "thumbnailUrl": "https://i.ytimg.com/vi/i0w641Yo0ys/hqdefault.jpg",
        "durationSec": 307
      },
      {
        "youtubeVideoId": "EeI8OkqYbbQ",
        "title": "Slowwves - Anywhere Else (Live on KEXP)",
        "sourceChannelId": "UC3I2GFN_F8WudD_2jUZbojA",
        "sourceChannelTitle": "KEXP",
        "thumbnailUrl": "https://i.ytimg.com/vi/EeI8OkqYbbQ/hqdefault.jpg",
        "durationSec": 247
      },
      {
        "youtubeVideoId": "CgXxYPAJU-s",
        "title": "Matthew Ifield performs Thinking for Mahogany Sessions",
        "sourceChannelId": "UCG36u-k09zdIPQh5EEdVgTA",
        "sourceChannelTitle": "Mahogany",
        "thumbnailUrl": "https://i.ytimg.com/vi/CgXxYPAJU-s/hqdefault.jpg",
        "durationSec": 212
      },
      {
        "youtubeVideoId": "_n49Uzm9DCM",
        "title": "Marino Canal - Luxor",
        "sourceChannelId": "UCCycRfTS7V9WOFfWfkNVCSg",
        "sourceChannelTitle": "Cercle Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/_n49Uzm9DCM/hqdefault.jpg",
        "durationSec": 291
      }
    ]
  },
  "food": {
    "categoryId": "food",
    "categoryName": "Food",
    "hue": 22,
    "builtAt": 1794338233231,
    "videos": [
      {
        "youtubeVideoId": "3r5aoFrXNRY",
        "title": "How To Make Award Winning Chili",
        "sourceChannelId": "UCJFp8uSYCjXOMnkUyb3CQ3Q",
        "sourceChannelTitle": "Tasty",
        "thumbnailUrl": "https://i.ytimg.com/vi/3r5aoFrXNRY/hqdefault.jpg",
        "durationSec": 485
      },
      {
        "youtubeVideoId": "dUtnimSrLSQ",
        "title": "10 Levels of Potatoes (ft @FallowChefs) | With Babish",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/dUtnimSrLSQ/hqdefault.jpg",
        "durationSec": 2281
      },
      {
        "youtubeVideoId": "-H3pjmp_aDg",
        "title": "The Best Grilled Cheese of All Time",
        "sourceChannelId": "UCUAg71CJEvFdOnujmep1Svw",
        "sourceChannelTitle": "Joshua Weissman Recipes",
        "thumbnailUrl": "https://i.ytimg.com/vi/-H3pjmp_aDg/hqdefault.jpg",
        "durationSec": 678
      },
      {
        "youtubeVideoId": "sif3mn9UFH4",
        "title": "Gordon Ramsay Can't Deal With This \"Fresh Frozen\" Food | Full Episode | Kitchen Nightmares",
        "sourceChannelId": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
        "sourceChannelTitle": "Gordon Ramsay",
        "thumbnailUrl": "https://i.ytimg.com/vi/sif3mn9UFH4/hqdefault.jpg",
        "durationSec": 2606
      },
      {
        "youtubeVideoId": "xS02sPTgWc8",
        "title": "Our 5 Favorite Party Appetizers | Test Kitchen Talks | Bon Appétit",
        "sourceChannelId": "UCbpMy0Fg74eXXkvxJrtEn3w",
        "sourceChannelTitle": "Bon Appétit",
        "thumbnailUrl": "https://i.ytimg.com/vi/xS02sPTgWc8/hqdefault.jpg",
        "durationSec": 960
      },
      {
        "youtubeVideoId": "ZOhcENWpock",
        "title": "I Tried EVERY Frozen Burrito",
        "sourceChannelId": "UC4avs5jYd_FvzQ8f0XYziqw",
        "sourceChannelTitle": "Beyond Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZOhcENWpock/hqdefault.jpg",
        "durationSec": 1700
      },
      {
        "youtubeVideoId": "5z4TqEFrRYQ",
        "title": "Chef vs Dad Testing Family Kitchen Gadgets",
        "sourceChannelId": "UCfyehHM_eo4g5JUyWmms2LA",
        "sourceChannelTitle": "Sorted Food",
        "thumbnailUrl": "https://i.ytimg.com/vi/5z4TqEFrRYQ/hqdefault.jpg",
        "durationSec": 1355
      },
      {
        "youtubeVideoId": "mXUG-m6QgKs",
        "title": "Alpha Male Cupcakes - You Suck at Cooking (episode 182)",
        "sourceChannelId": "UCekQr9znsk2vWxBo3YiLq2w",
        "sourceChannelTitle": "You Suck At Cooking",
        "thumbnailUrl": "https://i.ytimg.com/vi/mXUG-m6QgKs/hqdefault.jpg",
        "durationSec": 298
      },
      {
        "youtubeVideoId": "yYWBELSNb2g",
        "title": "I Made a FULL Mexican Dinner for 4 People for Just $25!",
        "sourceChannelId": "UCbRj3Tcy1Zoz3rcf83nW5kw",
        "sourceChannelTitle": "SAM THE COOKING GUY",
        "thumbnailUrl": "https://i.ytimg.com/vi/yYWBELSNb2g/hqdefault.jpg",
        "durationSec": 1146
      },
      {
        "youtubeVideoId": "N6JDgJmiMFM",
        "title": "The Best Tiramisu You’ll Ever Make (Restaurant-Quality) | Epicurious 101",
        "sourceChannelId": "UCcjhYlL1WRBjKaJsMH_h7Lg",
        "sourceChannelTitle": "Epicurious",
        "thumbnailUrl": "https://i.ytimg.com/vi/N6JDgJmiMFM/hqdefault.jpg",
        "durationSec": 514
      },
      {
        "youtubeVideoId": "H1-JB28hzyE",
        "title": "Can You Cook Pizza Faster Than A Delivery? | The Tuesday 20",
        "sourceChannelId": "UCpSgg_ECBj25s9moCDfSTsA",
        "sourceChannelTitle": "Jamie Oliver",
        "thumbnailUrl": "https://i.ytimg.com/vi/H1-JB28hzyE/hqdefault.jpg",
        "durationSec": 770
      },
      {
        "youtubeVideoId": "R3o8NLYZMeU",
        "title": "Easy Kimchi Recipe (Small Batch)",
        "sourceChannelId": "UC8gFadPgK2r1ndqLI04Xvvw",
        "sourceChannelTitle": "Maangchi",
        "thumbnailUrl": "https://i.ytimg.com/vi/R3o8NLYZMeU/hqdefault.jpg",
        "durationSec": 747
      },
      {
        "youtubeVideoId": "jlyuqWBo_W0",
        "title": "Giancarlo Esposito Eats His Last Meal",
        "sourceChannelId": "UCXGR70CkW_pXb8n52LzCCRw",
        "sourceChannelTitle": "Mythical Kitchen",
        "thumbnailUrl": "https://i.ytimg.com/vi/jlyuqWBo_W0/hqdefault.jpg",
        "durationSec": 3725
      },
      {
        "youtubeVideoId": "COvngm7VbZs",
        "title": "I Tested Viral TikTok Recipes",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/COvngm7VbZs/hqdefault.jpg",
        "durationSec": 2162
      },
      {
        "youtubeVideoId": "kd6lUmbj5ig",
        "title": "The Best French Onion Soup Ever",
        "sourceChannelId": "UCUAg71CJEvFdOnujmep1Svw",
        "sourceChannelTitle": "Joshua Weissman Recipes",
        "thumbnailUrl": "https://i.ytimg.com/vi/kd6lUmbj5ig/hqdefault.jpg",
        "durationSec": 497
      },
      {
        "youtubeVideoId": "69-fHxLSToA",
        "title": "Gordon Ramsay's Most OUTRAGEOUS Kitchen Nightmares Moments | NEW COMPILATION | Kitchen Nightmares",
        "sourceChannelId": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
        "sourceChannelTitle": "Gordon Ramsay",
        "thumbnailUrl": "https://i.ytimg.com/vi/69-fHxLSToA/hqdefault.jpg",
        "durationSec": 1353
      },
      {
        "youtubeVideoId": "Nx2V2yC-ei4",
        "title": "The Test Kitchen Makes Their Perfect Thanksgiving Recipes | Bon Appétit",
        "sourceChannelId": "UCbpMy0Fg74eXXkvxJrtEn3w",
        "sourceChannelTitle": "Bon Appétit",
        "thumbnailUrl": "https://i.ytimg.com/vi/Nx2V2yC-ei4/hqdefault.jpg",
        "durationSec": 15561
      },
      {
        "youtubeVideoId": "5lcYUY8yUZc",
        "title": "I Tried EVERY Monster While Playing Elden Ring",
        "sourceChannelId": "UC4avs5jYd_FvzQ8f0XYziqw",
        "sourceChannelTitle": "Beyond Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/5lcYUY8yUZc/hqdefault.jpg",
        "durationSec": 3778
      },
      {
        "youtubeVideoId": "qs9U08mUxIQ",
        "title": "£10 BUDGET Recipe Relay Challenge | Pass it On",
        "sourceChannelId": "UCfyehHM_eo4g5JUyWmms2LA",
        "sourceChannelTitle": "Sorted Food",
        "thumbnailUrl": "https://i.ytimg.com/vi/qs9U08mUxIQ/hqdefault.jpg",
        "durationSec": 1188
      },
      {
        "youtubeVideoId": "TRF14lFwB7I",
        "title": "Chili Oil Onion Pasta - You Suck at Cooking (episode 181)",
        "sourceChannelId": "UCekQr9znsk2vWxBo3YiLq2w",
        "sourceChannelTitle": "You Suck At Cooking",
        "thumbnailUrl": "https://i.ytimg.com/vi/TRF14lFwB7I/hqdefault.jpg",
        "durationSec": 268
      },
      {
        "youtubeVideoId": "K-WfZ-VaKgc",
        "title": "I Can't Believe 4 Ingredients Make THIS!",
        "sourceChannelId": "UCbRj3Tcy1Zoz3rcf83nW5kw",
        "sourceChannelTitle": "SAM THE COOKING GUY",
        "thumbnailUrl": "https://i.ytimg.com/vi/K-WfZ-VaKgc/hqdefault.jpg",
        "durationSec": 512
      },
      {
        "youtubeVideoId": "BrLTf27eUL0",
        "title": "Butcher Explains Which Steak to Buy | Ultimate Buying Guide | Epicurious",
        "sourceChannelId": "UCcjhYlL1WRBjKaJsMH_h7Lg",
        "sourceChannelTitle": "Epicurious",
        "thumbnailUrl": "https://i.ytimg.com/vi/BrLTf27eUL0/hqdefault.jpg",
        "durationSec": 1143
      },
      {
        "youtubeVideoId": "1NldsAtQlOc",
        "title": "How To Make Bread At Home | Jamie Oliver",
        "sourceChannelId": "UCpSgg_ECBj25s9moCDfSTsA",
        "sourceChannelTitle": "Jamie Oliver",
        "thumbnailUrl": "https://i.ytimg.com/vi/1NldsAtQlOc/hqdefault.jpg",
        "durationSec": 612
      },
      {
        "youtubeVideoId": "xrTMJbjUJCA",
        "title": "Korean highway reststop potatoes",
        "sourceChannelId": "UC8gFadPgK2r1ndqLI04Xvvw",
        "sourceChannelTitle": "Maangchi",
        "thumbnailUrl": "https://i.ytimg.com/vi/xrTMJbjUJCA/hqdefault.jpg",
        "durationSec": 311
      },
      {
        "youtubeVideoId": "AQbpUILs8So",
        "title": "We Meal Prep With YOUR Groceries",
        "sourceChannelId": "UCXGR70CkW_pXb8n52LzCCRw",
        "sourceChannelTitle": "Mythical Kitchen",
        "thumbnailUrl": "https://i.ytimg.com/vi/AQbpUILs8So/hqdefault.jpg",
        "durationSec": 3388
      },
      {
        "youtubeVideoId": "HGWICoR6n2s",
        "title": "I Tried the Best (and WORST) Instant Pot Recipes",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/HGWICoR6n2s/hqdefault.jpg",
        "durationSec": 2057
      },
      {
        "youtubeVideoId": "7YmQDbJOelY",
        "title": "The Best Flaky Biscuits Ever",
        "sourceChannelId": "UCUAg71CJEvFdOnujmep1Svw",
        "sourceChannelTitle": "Joshua Weissman Recipes",
        "thumbnailUrl": "https://i.ytimg.com/vi/7YmQDbJOelY/hqdefault.jpg",
        "durationSec": 605
      },
      {
        "youtubeVideoId": "I-kx4seyE7w",
        "title": "\"I Would Pay You $100 Not To Sing!\" Owner WON'T Stop Singing Cher | Full Episode | Hotel Hell",
        "sourceChannelId": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
        "sourceChannelTitle": "Gordon Ramsay",
        "thumbnailUrl": "https://i.ytimg.com/vi/I-kx4seyE7w/hqdefault.jpg",
        "durationSec": 2356
      },
      {
        "youtubeVideoId": "-YP3OCTy3lg",
        "title": "This Steakhouse is Miami’s Hardest Reservation | On The Line | Bon Appétit",
        "sourceChannelId": "UCbpMy0Fg74eXXkvxJrtEn3w",
        "sourceChannelTitle": "Bon Appétit",
        "thumbnailUrl": "https://i.ytimg.com/vi/-YP3OCTy3lg/hqdefault.jpg",
        "durationSec": 1097
      },
      {
        "youtubeVideoId": "razoqJjP8K8",
        "title": "I Ranked EVERY Pizza Chain",
        "sourceChannelId": "UC4avs5jYd_FvzQ8f0XYziqw",
        "sourceChannelTitle": "Beyond Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/razoqJjP8K8/hqdefault.jpg",
        "durationSec": 1771
      },
      {
        "youtubeVideoId": "HeGHIqv7Vds",
        "title": "BUDGET BATTLES Marathon | Sorted Food",
        "sourceChannelId": "UCfyehHM_eo4g5JUyWmms2LA",
        "sourceChannelTitle": "Sorted Food",
        "thumbnailUrl": "https://i.ytimg.com/vi/HeGHIqv7Vds/hqdefault.jpg",
        "durationSec": 5795
      },
      {
        "youtubeVideoId": "Bp2r-gleRws",
        "title": "I Made the HELLFIRE BURGER… and Immediately Regretted It",
        "sourceChannelId": "UCbRj3Tcy1Zoz3rcf83nW5kw",
        "sourceChannelTitle": "SAM THE COOKING GUY",
        "thumbnailUrl": "https://i.ytimg.com/vi/Bp2r-gleRws/hqdefault.jpg",
        "durationSec": 555
      },
      {
        "youtubeVideoId": "OxuHuukJq3c",
        "title": "Can 8 People Agree on Chocolate Chip Cookies? | Everybody Eats | Epicurious",
        "sourceChannelId": "UCcjhYlL1WRBjKaJsMH_h7Lg",
        "sourceChannelTitle": "Epicurious",
        "thumbnailUrl": "https://i.ytimg.com/vi/OxuHuukJq3c/hqdefault.jpg",
        "durationSec": 958
      },
      {
        "youtubeVideoId": "fQdHTDKlWM0",
        "title": "7 Sunday Dinner Ideas To Cook This Weekend",
        "sourceChannelId": "UCpSgg_ECBj25s9moCDfSTsA",
        "sourceChannelTitle": "Jamie Oliver",
        "thumbnailUrl": "https://i.ytimg.com/vi/fQdHTDKlWM0/hqdefault.jpg",
        "durationSec": 2855
      },
      {
        "youtubeVideoId": "3EeQR3D5Ks0",
        "title": "Easy spicy tuna stew with canned tuna (Chamchi-jjigae: 참치찌개)",
        "sourceChannelId": "UC8gFadPgK2r1ndqLI04Xvvw",
        "sourceChannelTitle": "Maangchi",
        "thumbnailUrl": "https://i.ytimg.com/vi/3EeQR3D5Ks0/hqdefault.jpg",
        "durationSec": 370
      },
      {
        "youtubeVideoId": "zQ_4it9GRWE",
        "title": "Cheap vs Expensive Fried Rice (ft. Uncle Roger)",
        "sourceChannelId": "UCXGR70CkW_pXb8n52LzCCRw",
        "sourceChannelTitle": "Mythical Kitchen",
        "thumbnailUrl": "https://i.ytimg.com/vi/zQ_4it9GRWE/hqdefault.jpg",
        "durationSec": 2108
      },
      {
        "youtubeVideoId": "oWhnytD3QoA",
        "title": "10 Levels of Nachos | With Babish",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/oWhnytD3QoA/hqdefault.jpg",
        "durationSec": 2459
      },
      {
        "youtubeVideoId": "mjJQetAQwW4",
        "title": "The Cheesiest Lasagna Ever",
        "sourceChannelId": "UCUAg71CJEvFdOnujmep1Svw",
        "sourceChannelTitle": "Joshua Weissman Recipes",
        "thumbnailUrl": "https://i.ytimg.com/vi/mjJQetAQwW4/hqdefault.jpg",
        "durationSec": 576
      },
      {
        "youtubeVideoId": "2NAzRDjcdRk",
        "title": "Gordon Ramsay SHOCKED As Chef Needs A Medic Mid-Service! | Full Episode | Hell's Kitchen",
        "sourceChannelId": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
        "sourceChannelTitle": "Gordon Ramsay",
        "thumbnailUrl": "https://i.ytimg.com/vi/2NAzRDjcdRk/hqdefault.jpg",
        "durationSec": 2362
      },
      {
        "youtubeVideoId": "4D4pAvxy9lo",
        "title": "How a French Chef Makes France’s Most Famous Chicken Dish | French Fundamentals | Bon Appétit",
        "sourceChannelId": "UCbpMy0Fg74eXXkvxJrtEn3w",
        "sourceChannelTitle": "Bon Appétit",
        "thumbnailUrl": "https://i.ytimg.com/vi/4D4pAvxy9lo/hqdefault.jpg",
        "durationSec": 791
      },
      {
        "youtubeVideoId": "2upn2jhwMsU",
        "title": "I Tried EVERY Trader Joe’s Pumpkin Product (40+)",
        "sourceChannelId": "UC4avs5jYd_FvzQ8f0XYziqw",
        "sourceChannelTitle": "Beyond Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/2upn2jhwMsU/hqdefault.jpg",
        "durationSec": 2347
      },
      {
        "youtubeVideoId": "hN_jM5_eooc",
        "title": "Pro Chef BAFFLED By Forgotten Ancient Recipe",
        "sourceChannelId": "UCfyehHM_eo4g5JUyWmms2LA",
        "sourceChannelTitle": "Sorted Food",
        "thumbnailUrl": "https://i.ytimg.com/vi/hN_jM5_eooc/hqdefault.jpg",
        "durationSec": 947
      },
      {
        "youtubeVideoId": "RE-eipdL68k",
        "title": "Trust Me on This…",
        "sourceChannelId": "UCbRj3Tcy1Zoz3rcf83nW5kw",
        "sourceChannelTitle": "SAM THE COOKING GUY",
        "thumbnailUrl": "https://i.ytimg.com/vi/RE-eipdL68k/hqdefault.jpg",
        "durationSec": 480
      },
      {
        "youtubeVideoId": "r9eTNJHskSU",
        "title": "Pro Chefs Blind Taste Test Every Frozen Mac & Cheese | The Taste Panel | Epicurious",
        "sourceChannelId": "UCcjhYlL1WRBjKaJsMH_h7Lg",
        "sourceChannelTitle": "Epicurious",
        "thumbnailUrl": "https://i.ytimg.com/vi/r9eTNJHskSU/hqdefault.jpg",
        "durationSec": 1543
      },
      {
        "youtubeVideoId": "3zdNUrZaqvA",
        "title": "Can Crystelle Cook Thai Soup in 20 Minutes? ⏱️ | The Tuesday 20",
        "sourceChannelId": "UCpSgg_ECBj25s9moCDfSTsA",
        "sourceChannelTitle": "Jamie Oliver",
        "thumbnailUrl": "https://i.ytimg.com/vi/3zdNUrZaqvA/hqdefault.jpg",
        "durationSec": 508
      },
      {
        "youtubeVideoId": "U-oN4yYCVgA",
        "title": "Pan-Fried Eggplant That Tastes Like Grilled Meat",
        "sourceChannelId": "UC8gFadPgK2r1ndqLI04Xvvw",
        "sourceChannelTitle": "Maangchi",
        "thumbnailUrl": "https://i.ytimg.com/vi/U-oN4yYCVgA/hqdefault.jpg",
        "durationSec": 433
      },
      {
        "youtubeVideoId": "SMe38JQJbAs",
        "title": "We Spent $1,240 To Make a Wendy's Baconator",
        "sourceChannelId": "UCXGR70CkW_pXb8n52LzCCRw",
        "sourceChannelTitle": "Mythical Kitchen",
        "thumbnailUrl": "https://i.ytimg.com/vi/SMe38JQJbAs/hqdefault.jpg",
        "durationSec": 2681
      },
      {
        "youtubeVideoId": "iZi0yEY60zE",
        "title": "I Tried Celebrities' Favorite Pastas | With Babish",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/iZi0yEY60zE/hqdefault.jpg",
        "durationSec": 1307
      },
      {
        "youtubeVideoId": "ILArlisjE3k",
        "title": "The McDonald's Egg McMuffin But Better",
        "sourceChannelId": "UCUAg71CJEvFdOnujmep1Svw",
        "sourceChannelTitle": "Joshua Weissman Recipes",
        "thumbnailUrl": "https://i.ytimg.com/vi/ILArlisjE3k/hqdefault.jpg",
        "durationSec": 741
      },
      {
        "youtubeVideoId": "0Nxldbd3oQ0",
        "title": "Gordon Ramsay's Best UNDERCOVER Disguises (Season 2) | COMPILATION | 24 Hours To Hell & Back",
        "sourceChannelId": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
        "sourceChannelTitle": "Gordon Ramsay",
        "thumbnailUrl": "https://i.ytimg.com/vi/0Nxldbd3oQ0/hqdefault.jpg",
        "durationSec": 2037
      }
    ]
  },
  "science": {
    "categoryId": "science",
    "categoryName": "Science",
    "hue": 170,
    "builtAt": 1794338233582,
    "videos": [
      {
        "youtubeVideoId": "KfODG5REyss",
        "title": "I finally saw quantum mechanics with my own eyes... (It's spookier than I expected)",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/KfODG5REyss/hqdefault.jpg",
        "durationSec": 3955
      },
      {
        "youtubeVideoId": "QQXCC6o_LHU",
        "title": "The Cult That Drove a Whole City Insane",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/QQXCC6o_LHU/hqdefault.jpg",
        "durationSec": 1152
      },
      {
        "youtubeVideoId": "TTipD_G73iQ",
        "title": "Smarter Every Day 2 Live Stream",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/TTipD_G73iQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "4fvkgAJiBQI",
        "title": "I Engineered the First-Ever Human Car Wash",
        "sourceChannelId": "UC513PdAP2-jWkJunTh5kXRw",
        "sourceChannelTitle": "CrunchLabs",
        "thumbnailUrl": "https://i.ytimg.com/vi/4fvkgAJiBQI/hqdefault.jpg",
        "durationSec": 1003
      },
      {
        "youtubeVideoId": "2pJY7kBXBb4",
        "title": "What Are We Really Doing While We Sleep | Compilation",
        "sourceChannelId": "UCUdettijNYvLAm4AixZv4RA",
        "sourceChannelTitle": "SciShow Psych",
        "thumbnailUrl": "https://i.ytimg.com/vi/2pJY7kBXBb4/hqdefault.jpg",
        "durationSec": 1686
      },
      {
        "youtubeVideoId": "744fHerowJ4",
        "title": "Why Do We Even Need A Clock This Accurate?",
        "sourceChannelId": "UCeiYXex_fwgYDonaTcSIk6w",
        "sourceChannelTitle": "MinuteEarth",
        "thumbnailUrl": "https://i.ytimg.com/vi/744fHerowJ4/hqdefault.jpg",
        "durationSec": 475
      },
      {
        "youtubeVideoId": "fwW3XVFrm9c",
        "title": "The Most Important Silicon Valley Company You've Never Heard Of",
        "sourceChannelId": "UC1UmujXTizWokDHojdEOdow",
        "sourceChannelTitle": "InGenius by Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/fwW3XVFrm9c/hqdefault.jpg",
        "durationSec": 2740
      },
      {
        "youtubeVideoId": "RG5WhPmwGgk",
        "title": "So You Want To Understand Black Holes...",
        "sourceChannelId": "UC7_gcs09iThXybpVgjHZ_7g",
        "sourceChannelTitle": "PBS Space Time",
        "thumbnailUrl": "https://i.ytimg.com/vi/RG5WhPmwGgk/hqdefault.jpg",
        "durationSec": 7096
      },
      {
        "youtubeVideoId": "YgoiujmwLKI",
        "title": "The Real Cost of AI Will Shock You",
        "sourceChannelId": "UCH4BNI0-FOK2dMXoFtViWHw",
        "sourceChannelTitle": "Be Smart",
        "thumbnailUrl": "https://i.ytimg.com/vi/YgoiujmwLKI/hqdefault.jpg",
        "durationSec": 2563
      },
      {
        "youtubeVideoId": "ID-K64Jk6JM",
        "title": "Turning air into alcohol",
        "sourceChannelId": "UCFhXFikryT4aFcLkLw2LBLA",
        "sourceChannelTitle": "NileRed",
        "thumbnailUrl": "https://i.ytimg.com/vi/ID-K64Jk6JM/hqdefault.jpg",
        "durationSec": 5411
      },
      {
        "youtubeVideoId": "99rI-nOCajM",
        "title": "Most People Get This Physics Question Wrong",
        "sourceChannelId": "UC1VLQPn9cYSqx8plbk9RxxQ",
        "sourceChannelTitle": "The Action Lab",
        "thumbnailUrl": "https://i.ytimg.com/vi/99rI-nOCajM/hqdefault.jpg",
        "durationSec": 677
      },
      {
        "youtubeVideoId": "AJIKyn24Upc",
        "title": "Clever! A New Method to Find Alien Life",
        "sourceChannelId": "UC1yNl2E66ZzKApQdRuTQ4tw",
        "sourceChannelTitle": "Sabine Hossenfelder",
        "thumbnailUrl": "https://i.ytimg.com/vi/AJIKyn24Upc/hqdefault.jpg",
        "durationSec": 376
      },
      {
        "youtubeVideoId": "eyZEqSPeMwg",
        "title": "No device could prove Einstein wrong... until now",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/eyZEqSPeMwg/hqdefault.jpg",
        "durationSec": 2067
      },
      {
        "youtubeVideoId": "HfaO94_KZ3c",
        "title": "The Fall of the Last Zulu King",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/HfaO94_KZ3c/hqdefault.jpg",
        "durationSec": 1073
      },
      {
        "youtubeVideoId": "3L-_HyXdGP4",
        "title": "Rebecca's Amazing America's 250th Birthday Quilt - From Alabama's American Village On July 4th 2026.",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/3L-_HyXdGP4/hqdefault.jpg",
        "durationSec": 152
      },
      {
        "youtubeVideoId": "vr_ADr-XrR4",
        "title": "Can Anything Survive My Crunchinator?",
        "sourceChannelId": "UC513PdAP2-jWkJunTh5kXRw",
        "sourceChannelTitle": "CrunchLabs",
        "thumbnailUrl": "https://i.ytimg.com/vi/vr_ADr-XrR4/hqdefault.jpg",
        "durationSec": 982
      },
      {
        "youtubeVideoId": "cIH1FyNTzMw",
        "title": "Being a New Parent is Hard | Compilation",
        "sourceChannelId": "UCUdettijNYvLAm4AixZv4RA",
        "sourceChannelTitle": "SciShow Psych",
        "thumbnailUrl": "https://i.ytimg.com/vi/cIH1FyNTzMw/hqdefault.jpg",
        "durationSec": 1672
      },
      {
        "youtubeVideoId": "9PJvV5PYDm0",
        "title": "Why Are Some Sunsets SO MUCH Better Than Others?",
        "sourceChannelId": "UCeiYXex_fwgYDonaTcSIk6w",
        "sourceChannelTitle": "MinuteEarth",
        "thumbnailUrl": "https://i.ytimg.com/vi/9PJvV5PYDm0/hqdefault.jpg",
        "durationSec": 163
      },
      {
        "youtubeVideoId": "CTUqmUHvd2Y",
        "title": "We analysed 3 years worth of Polymarket trades. Here's what we found.",
        "sourceChannelId": "UC1UmujXTizWokDHojdEOdow",
        "sourceChannelTitle": "InGenius by Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/CTUqmUHvd2Y/hqdefault.jpg",
        "durationSec": 2214
      },
      {
        "youtubeVideoId": "eb8x2tz_pgc",
        "title": "Ghost Particles Are Exposing Hidden Black Holes. They Just Won a Nobel Prize.",
        "sourceChannelId": "UC7_gcs09iThXybpVgjHZ_7g",
        "sourceChannelTitle": "PBS Space Time",
        "thumbnailUrl": "https://i.ytimg.com/vi/eb8x2tz_pgc/hqdefault.jpg",
        "durationSec": 1146
      },
      {
        "youtubeVideoId": "w6hK2PML6Uc",
        "title": "This Weird Pattern Will Let Us Reshape Matter",
        "sourceChannelId": "UCH4BNI0-FOK2dMXoFtViWHw",
        "sourceChannelTitle": "Be Smart",
        "thumbnailUrl": "https://i.ytimg.com/vi/w6hK2PML6Uc/hqdefault.jpg",
        "durationSec": 1494
      },
      {
        "youtubeVideoId": "GmwaJnj6pfY",
        "title": "Making liquid nitrogen from scratch (an absurd amount)",
        "sourceChannelId": "UCFhXFikryT4aFcLkLw2LBLA",
        "sourceChannelTitle": "NileRed",
        "thumbnailUrl": "https://i.ytimg.com/vi/GmwaJnj6pfY/hqdefault.jpg",
        "durationSec": 3332
      },
      {
        "youtubeVideoId": "qB7d062jcNg",
        "title": "The Physics Problem With Tesla's Flying Car",
        "sourceChannelId": "UC1VLQPn9cYSqx8plbk9RxxQ",
        "sourceChannelTitle": "The Action Lab",
        "thumbnailUrl": "https://i.ytimg.com/vi/qB7d062jcNg/hqdefault.jpg",
        "durationSec": 515
      },
      {
        "youtubeVideoId": "fu5xB5ls2sU",
        "title": "Something Isn’t Adding Up in Particle Physics",
        "sourceChannelId": "UC1yNl2E66ZzKApQdRuTQ4tw",
        "sourceChannelTitle": "Sabine Hossenfelder",
        "thumbnailUrl": "https://i.ytimg.com/vi/fu5xB5ls2sU/hqdefault.jpg",
        "durationSec": 367
      },
      {
        "youtubeVideoId": "NiCgcUTL9_Q",
        "title": "Fiber Optics are so much cooler than I thought",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/NiCgcUTL9_Q/hqdefault.jpg",
        "durationSec": 2072
      },
      {
        "youtubeVideoId": "kGvF7ATAqoo",
        "title": "The Real Story of the Mongolian Singing Dunes",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/kGvF7ATAqoo/hqdefault.jpg",
        "durationSec": 410
      },
      {
        "youtubeVideoId": "Q9JcpSJwEK0",
        "title": "BIG NEWS From Dr. Fuqua",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q9JcpSJwEK0/hqdefault.jpg",
        "durationSec": 614
      },
      {
        "youtubeVideoId": "iSbLf1iOcZQ",
        "title": "Water Experiments That Look Like Magic",
        "sourceChannelId": "UC513PdAP2-jWkJunTh5kXRw",
        "sourceChannelTitle": "CrunchLabs",
        "thumbnailUrl": "https://i.ytimg.com/vi/iSbLf1iOcZQ/hqdefault.jpg",
        "durationSec": 1118
      },
      {
        "youtubeVideoId": "MX3RLigD-UA",
        "title": "Cinema Psychology | Compilation",
        "sourceChannelId": "UCUdettijNYvLAm4AixZv4RA",
        "sourceChannelTitle": "SciShow Psych",
        "thumbnailUrl": "https://i.ytimg.com/vi/MX3RLigD-UA/hqdefault.jpg",
        "durationSec": 1546
      },
      {
        "youtubeVideoId": "kIXkIBWo6vE",
        "title": "Four Places We Might Find Aliens",
        "sourceChannelId": "UCeiYXex_fwgYDonaTcSIk6w",
        "sourceChannelTitle": "MinuteEarth",
        "thumbnailUrl": "https://i.ytimg.com/vi/kIXkIBWo6vE/hqdefault.jpg",
        "durationSec": 217
      },
      {
        "youtubeVideoId": "eczB0uUx_k8",
        "title": "This $40 Hunk of Metal Made China a Superpower",
        "sourceChannelId": "UC1UmujXTizWokDHojdEOdow",
        "sourceChannelTitle": "InGenius by Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/eczB0uUx_k8/hqdefault.jpg",
        "durationSec": 2785
      },
      {
        "youtubeVideoId": "w6229Ivy_Lo",
        "title": "Why Does -1/12 Keep Appearing Everywhere In Physics?",
        "sourceChannelId": "UC7_gcs09iThXybpVgjHZ_7g",
        "sourceChannelTitle": "PBS Space Time",
        "thumbnailUrl": "https://i.ytimg.com/vi/w6229Ivy_Lo/hqdefault.jpg",
        "durationSec": 959
      },
      {
        "youtubeVideoId": "KLmtn_xwgS4",
        "title": "The Very Weird Reason Hot Water Freezes Faster",
        "sourceChannelId": "UCH4BNI0-FOK2dMXoFtViWHw",
        "sourceChannelTitle": "Be Smart",
        "thumbnailUrl": "https://i.ytimg.com/vi/KLmtn_xwgS4/hqdefault.jpg",
        "durationSec": 1033
      },
      {
        "youtubeVideoId": "WzHKEXc-8f4",
        "title": "The Sun Is the Wrong Color",
        "sourceChannelId": "UC1VLQPn9cYSqx8plbk9RxxQ",
        "sourceChannelTitle": "The Action Lab",
        "thumbnailUrl": "https://i.ytimg.com/vi/WzHKEXc-8f4/hqdefault.jpg",
        "durationSec": 627
      },
      {
        "youtubeVideoId": "mh-e78kaQ8o",
        "title": "Physicists Can’t Explain This, And Now It’s a Problem",
        "sourceChannelId": "UC1yNl2E66ZzKApQdRuTQ4tw",
        "sourceChannelTitle": "Sabine Hossenfelder",
        "thumbnailUrl": "https://i.ytimg.com/vi/mh-e78kaQ8o/hqdefault.jpg",
        "durationSec": 390
      },
      {
        "youtubeVideoId": "ONAuUyml0yI",
        "title": "We're trying something new...",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/ONAuUyml0yI/hqdefault.jpg",
        "durationSec": 307
      },
      {
        "youtubeVideoId": "AcjDyzYcIkc",
        "title": "Why These Nuns Cut off Their Noses and Lips",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/AcjDyzYcIkc/hqdefault.jpg",
        "durationSec": 470
      },
      {
        "youtubeVideoId": "i7_hi00ktgY",
        "title": "My Computer Update",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/i7_hi00ktgY/hqdefault.jpg",
        "durationSec": 368
      },
      {
        "youtubeVideoId": "9QldsLTaQHo",
        "title": "Animals vs Engineers",
        "sourceChannelId": "UC513PdAP2-jWkJunTh5kXRw",
        "sourceChannelTitle": "CrunchLabs",
        "thumbnailUrl": "https://i.ytimg.com/vi/9QldsLTaQHo/hqdefault.jpg",
        "durationSec": 1167
      },
      {
        "youtubeVideoId": "TR1jAlI_VYw",
        "title": "The Psychology of Senses | Compilation",
        "sourceChannelId": "UCUdettijNYvLAm4AixZv4RA",
        "sourceChannelTitle": "SciShow Psych",
        "thumbnailUrl": "https://i.ytimg.com/vi/TR1jAlI_VYw/hqdefault.jpg",
        "durationSec": 2015
      },
      {
        "youtubeVideoId": "jsAFbi4HgFg",
        "title": "The Sea Turtle Cheat Code",
        "sourceChannelId": "UCeiYXex_fwgYDonaTcSIk6w",
        "sourceChannelTitle": "MinuteEarth",
        "thumbnailUrl": "https://i.ytimg.com/vi/jsAFbi4HgFg/hqdefault.jpg",
        "durationSec": 236
      },
      {
        "youtubeVideoId": "SsYKLXIU7no",
        "title": "An Element Of Innovation  | Channel Trailer",
        "sourceChannelId": "UC1UmujXTizWokDHojdEOdow",
        "sourceChannelTitle": "InGenius by Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/SsYKLXIU7no/hqdefault.jpg",
        "durationSec": 92
      },
      {
        "youtubeVideoId": "jXzARHsTBQY",
        "title": "This Ring of Plasma Could Change the World",
        "sourceChannelId": "UC1VLQPn9cYSqx8plbk9RxxQ",
        "sourceChannelTitle": "The Action Lab",
        "thumbnailUrl": "https://i.ytimg.com/vi/jXzARHsTBQY/hqdefault.jpg",
        "durationSec": 660
      },
      {
        "youtubeVideoId": "t3CvQRH-mFg",
        "title": "Quantum Computing Finally Got Its Numbers, and They’re Bad",
        "sourceChannelId": "UC1yNl2E66ZzKApQdRuTQ4tw",
        "sourceChannelTitle": "Sabine Hossenfelder",
        "thumbnailUrl": "https://i.ytimg.com/vi/t3CvQRH-mFg/hqdefault.jpg",
        "durationSec": 398
      },
      {
        "youtubeVideoId": "JsBZOcqZerk",
        "title": "The Insane Real Engineering of the Nazi Enigma Machine",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/JsBZOcqZerk/hqdefault.jpg",
        "durationSec": 2861
      },
      {
        "youtubeVideoId": "205swuI0JlY",
        "title": "When Death Was a Relief",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/205swuI0JlY/hqdefault.jpg",
        "durationSec": 946
      },
      {
        "youtubeVideoId": "jVDPOPWarDU",
        "title": "Smarter Scrubber Update",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/jVDPOPWarDU/hqdefault.jpg",
        "durationSec": 837
      },
      {
        "youtubeVideoId": "QMFrtyT5a2k",
        "title": "Making Impossible Items Float",
        "sourceChannelId": "UC513PdAP2-jWkJunTh5kXRw",
        "sourceChannelTitle": "CrunchLabs",
        "thumbnailUrl": "https://i.ytimg.com/vi/QMFrtyT5a2k/hqdefault.jpg",
        "durationSec": 1247
      },
      {
        "youtubeVideoId": "LNBXhocsQyY",
        "title": "Tune Into Psychology | Compilation",
        "sourceChannelId": "UCUdettijNYvLAm4AixZv4RA",
        "sourceChannelTitle": "SciShow Psych",
        "thumbnailUrl": "https://i.ytimg.com/vi/LNBXhocsQyY/hqdefault.jpg",
        "durationSec": 1337
      },
      {
        "youtubeVideoId": "x-vpfrs7RIs",
        "title": "Why Don't Birds Cause MORE Crashes?",
        "sourceChannelId": "UCeiYXex_fwgYDonaTcSIk6w",
        "sourceChannelTitle": "MinuteEarth",
        "thumbnailUrl": "https://i.ytimg.com/vi/x-vpfrs7RIs/hqdefault.jpg",
        "durationSec": 163
      }
    ]
  },
  "sports": {
    "categoryId": "sports",
    "categoryName": "Sports",
    "hue": 140,
    "builtAt": 1794338234020,
    "videos": [
      {
        "youtubeVideoId": "4MZHXB6UX-c",
        "title": "Overtime 52: PIRATE EDITION",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/4MZHXB6UX-c/hqdefault.jpg",
        "durationSec": 1644
      },
      {
        "youtubeVideoId": "0VCpPloplNY",
        "title": "Guess The Rank in FORTNITE ft. SypherPK, Amar, Mongraal & MrSavage",
        "sourceChannelId": "UC8VddvuHJzIj__Ud0rY2_ww",
        "sourceChannelTitle": "Red Bull Esports",
        "thumbnailUrl": "https://i.ytimg.com/vi/0VCpPloplNY/hqdefault.jpg",
        "durationSec": 712
      },
      {
        "youtubeVideoId": "jRnRoHv23KU",
        "title": "‘Blowing Me Away’ 👀 Daniel Jeremiah reacts to Arvell Reese’s recent stretch | Move the Sticks",
        "sourceChannelId": "UCiio0ydw439X13KyZgMIcHw",
        "sourceChannelTitle": "NFL on ESPN",
        "thumbnailUrl": "https://i.ytimg.com/vi/jRnRoHv23KU/hqdefault.jpg",
        "durationSec": 310
      },
      {
        "youtubeVideoId": "Ixb4d-8HNeQ",
        "title": "Louane Plisson's Stunning Floor Routine at Dakar 2026 🇫🇷🤸‍♀️ | Youth Olympics",
        "sourceChannelId": "UC_kdjhHnkUbSImMrezjRyDQ",
        "sourceChannelTitle": "Olympics Gymnastics",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ixb4d-8HNeQ/hqdefault.jpg",
        "durationSec": 94
      },
      {
        "youtubeVideoId": "DrjpFEoaSOw",
        "title": "Is This The WORST Sports Take Of All-Time?",
        "sourceChannelId": "UCJrWyyCRROi8NlQ6Xd9dx5Q",
        "sourceChannelTitle": "Almost Athletes with Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/DrjpFEoaSOw/hqdefault.jpg",
        "durationSec": 925
      },
      {
        "youtubeVideoId": "krXg6yqZU5A",
        "title": "Jason Borosky returns to Double the Baldy Pipe",
        "sourceChannelId": "UC9UGYdMSKasjY0mhU1lG4lQ",
        "sourceChannelTitle": "Nitro Circus",
        "thumbnailUrl": "https://i.ytimg.com/vi/krXg6yqZU5A/hqdefault.jpg",
        "durationSec": 159
      },
      {
        "youtubeVideoId": "7EyJnj-rpcQ",
        "title": "UFC 334 Embedded: Vlog Series - Episode 2",
        "sourceChannelId": "UCvgfXK4nTYKudb0rFR6noLA",
        "sourceChannelTitle": "UFC",
        "thumbnailUrl": "https://i.ytimg.com/vi/7EyJnj-rpcQ/hqdefault.jpg",
        "durationSec": 551
      },
      {
        "youtubeVideoId": "9rZmV1XAGm4",
        "title": "NBA on Fire - 2026/27 - Episode 3",
        "sourceChannelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
        "sourceChannelTitle": "NBA",
        "thumbnailUrl": "https://i.ytimg.com/vi/9rZmV1XAGm4/hqdefault.jpg",
        "durationSec": 1696
      },
      {
        "youtubeVideoId": "Jf0wDZBEutM",
        "title": "Best Of Week 9 Station!",
        "sourceChannelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        "sourceChannelTitle": "NFL",
        "thumbnailUrl": "https://i.ytimg.com/vi/Jf0wDZBEutM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "N4Rvj7VF800",
        "title": "Fighting a House Fire | GoPro POV",
        "sourceChannelId": "UCqhnX4jA0A5paNd1v-zEysw",
        "sourceChannelTitle": "GoPro",
        "thumbnailUrl": "https://i.ytimg.com/vi/N4Rvj7VF800/hqdefault.jpg",
        "durationSec": 418
      },
      {
        "youtubeVideoId": "zTBCMBS0UEo",
        "title": "Daniel Ricciardo Reacts To Best Career Moments | Salesforce: Inside F1",
        "sourceChannelId": "UCB_qr75-ydFVKSF9Dmo6izg",
        "sourceChannelTitle": "FORMULA 1",
        "thumbnailUrl": "https://i.ytimg.com/vi/zTBCMBS0UEo/hqdefault.jpg",
        "durationSec": 1155
      },
      {
        "youtubeVideoId": "Q4xRXBVvHU4",
        "title": "Barca come from behind to win! 🔥 | Atletico Madrid 1-2 Barcelona | La Liga Highlights",
        "sourceChannelId": "UCZ7wY7MRDSygp63HIEfdQZA",
        "sourceChannelTitle": "Sky Sports Football",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q4xRXBVvHU4/hqdefault.jpg",
        "durationSec": 125
      },
      {
        "youtubeVideoId": "UgUuZelE4gs",
        "title": "🔴 𝙇𝙄𝙑𝙀 Summer Youth Olympics! Women's Artistic Gymnastics All Around Final | #Dakar2026",
        "sourceChannelId": "UCTl3QQTvqHFjurroKxexy2Q",
        "sourceChannelTitle": "Olympic Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/UgUuZelE4gs/hqdefault.jpg",
        "durationSec": 10324
      },
      {
        "youtubeVideoId": "qoAj4fBA5AI",
        "title": "A Clash Between Modern Legends | Leshar vs Kawano",
        "sourceChannelId": "UC8VddvuHJzIj__Ud0rY2_ww",
        "sourceChannelTitle": "Red Bull Esports",
        "thumbnailUrl": "https://i.ytimg.com/vi/qoAj4fBA5AI/hqdefault.jpg",
        "durationSec": 919
      },
      {
        "youtubeVideoId": "Fiz7podqPUA",
        "title": "Do the Bills need to MAKE A TRADE?! 👀 Stephen A. weighs in | First Take",
        "sourceChannelId": "UCiio0ydw439X13KyZgMIcHw",
        "sourceChannelTitle": "NFL on ESPN",
        "thumbnailUrl": "https://i.ytimg.com/vi/Fiz7podqPUA/hqdefault.jpg",
        "durationSec": 764
      },
      {
        "youtubeVideoId": "qjxdqn7fOjY",
        "title": "Zhong Qi on the Beam! 🇨🇳🤸‍♀️ Artistic Gymnastics at Dakar 2026 | Youth Olympics",
        "sourceChannelId": "UC_kdjhHnkUbSImMrezjRyDQ",
        "sourceChannelTitle": "Olympics Gymnastics",
        "thumbnailUrl": "https://i.ytimg.com/vi/qjxdqn7fOjY/hqdefault.jpg",
        "durationSec": 135
      },
      {
        "youtubeVideoId": "mq-uDRYTi6g",
        "title": "Dude Perfect Reacts to The World's Weirdest Sports",
        "sourceChannelId": "UCJrWyyCRROi8NlQ6Xd9dx5Q",
        "sourceChannelTitle": "Almost Athletes with Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/mq-uDRYTi6g/hqdefault.jpg",
        "durationSec": 5037
      },
      {
        "youtubeVideoId": "nXiFBPABGsQ",
        "title": "This Moto Quarterpipe Contest Only Got CRAZIER in Round 2",
        "sourceChannelId": "UC9UGYdMSKasjY0mhU1lG4lQ",
        "sourceChannelTitle": "Nitro Circus",
        "thumbnailUrl": "https://i.ytimg.com/vi/nXiFBPABGsQ/hqdefault.jpg",
        "durationSec": 742
      },
      {
        "youtubeVideoId": "duQzkyrxmgs",
        "title": "GREATEST FIGHTS FROM UFC 334 Fighters 🚨",
        "sourceChannelId": "UCvgfXK4nTYKudb0rFR6noLA",
        "sourceChannelTitle": "UFC",
        "thumbnailUrl": "https://i.ytimg.com/vi/duQzkyrxmgs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ETVUBCD7-Bk",
        "title": "NBA's Nightly Recap | November 9, 2026",
        "sourceChannelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
        "sourceChannelTitle": "NBA",
        "thumbnailUrl": "https://i.ytimg.com/vi/ETVUBCD7-Bk/hqdefault.jpg",
        "durationSec": 1662
      },
      {
        "youtubeVideoId": "x36-dlSgzpo",
        "title": "Top 15 Plays at Midseason! | 2026 NFL Season",
        "sourceChannelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        "sourceChannelTitle": "NFL",
        "thumbnailUrl": "https://i.ytimg.com/vi/x36-dlSgzpo/hqdefault.jpg",
        "durationSec": 355
      },
      {
        "youtubeVideoId": "13YuMKeCtuE",
        "title": "“PASS TO STEPH” Coach Jimmy Butler’s Game Plan for the Warriors 🤣",
        "sourceChannelId": "UCqQo7ewe87aYAe7ub5UqXMw",
        "sourceChannelTitle": "House of Highlights",
        "thumbnailUrl": "https://i.ytimg.com/vi/13YuMKeCtuE/hqdefault.jpg",
        "durationSec": 88
      },
      {
        "youtubeVideoId": "OVRba175OpU",
        "title": "Double Dragon Gaiden: Rise Of The Dragons - LAUNCH TRAILER",
        "sourceChannelId": "UCw_LnTX4iYwMic7q20I4uRQ",
        "sourceChannelTitle": "Secret Base",
        "thumbnailUrl": "https://i.ytimg.com/vi/OVRba175OpU/hqdefault.jpg",
        "durationSec": 81
      },
      {
        "youtubeVideoId": "y23pvZMQCPI",
        "title": "Wild Race Start & Mercedes' Wet Weather Struggles In Interlagos | Jolyon Palmer's F1 TV Analysis",
        "sourceChannelId": "UCB_qr75-ydFVKSF9Dmo6izg",
        "sourceChannelTitle": "FORMULA 1",
        "thumbnailUrl": "https://i.ytimg.com/vi/y23pvZMQCPI/hqdefault.jpg",
        "durationSec": 1000
      },
      {
        "youtubeVideoId": "XR21JDFQv-E",
        "title": "Five-star Falkirk THUMP sorry Hearts! 💢 | Hearts 2-5 Falkirk | SPFL highlights",
        "sourceChannelId": "UCZ7wY7MRDSygp63HIEfdQZA",
        "sourceChannelTitle": "Sky Sports Football",
        "thumbnailUrl": "https://i.ytimg.com/vi/XR21JDFQv-E/hqdefault.jpg",
        "durationSec": 223
      },
      {
        "youtubeVideoId": "074I4964nGw",
        "title": "Mzondois is GOLDEN for Zimbabwe! 🇿🇼 | Men's 200m #Dakar2026",
        "sourceChannelId": "UCTl3QQTvqHFjurroKxexy2Q",
        "sourceChannelTitle": "Olympic Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/074I4964nGw/hqdefault.jpg",
        "durationSec": 173
      },
      {
        "youtubeVideoId": "jWVzGoSXHPU",
        "title": "The future of Street Fighter is HERE | Sahara vs Blaz",
        "sourceChannelId": "UC8VddvuHJzIj__Ud0rY2_ww",
        "sourceChannelTitle": "Red Bull Esports",
        "thumbnailUrl": "https://i.ytimg.com/vi/jWVzGoSXHPU/hqdefault.jpg",
        "durationSec": 1031
      },
      {
        "youtubeVideoId": "JWKUr2rFmxk",
        "title": "Stephen A. tells Trevor Lawrence to ANSWER THE CALL as the Jaguars make big moves 📞 | First Take",
        "sourceChannelId": "UCiio0ydw439X13KyZgMIcHw",
        "sourceChannelTitle": "NFL on ESPN",
        "thumbnailUrl": "https://i.ytimg.com/vi/JWKUr2rFmxk/hqdefault.jpg",
        "durationSec": 873
      },
      {
        "youtubeVideoId": "ShpQZ-RLibQ",
        "title": "Li Lezheng on the Horizontal Bar at Dakar 2026! 🇨🇳 | Youth Olympics",
        "sourceChannelId": "UC_kdjhHnkUbSImMrezjRyDQ",
        "sourceChannelTitle": "Olympics Gymnastics",
        "thumbnailUrl": "https://i.ytimg.com/vi/ShpQZ-RLibQ/hqdefault.jpg",
        "durationSec": 137
      },
      {
        "youtubeVideoId": "mqeTIFCNwiE",
        "title": "Dude Perfect Picks Season 1 Fan Fail WINNER!",
        "sourceChannelId": "UCJrWyyCRROi8NlQ6Xd9dx5Q",
        "sourceChannelTitle": "Almost Athletes with Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/mqeTIFCNwiE/hqdefault.jpg",
        "durationSec": 1306
      },
      {
        "youtubeVideoId": "CuhVdH5QGbg",
        "title": "Only ONE Man in History Had Ever Landed This Stunt...",
        "sourceChannelId": "UC9UGYdMSKasjY0mhU1lG4lQ",
        "sourceChannelTitle": "Nitro Circus",
        "thumbnailUrl": "https://i.ytimg.com/vi/CuhVdH5QGbg/hqdefault.jpg",
        "durationSec": 999
      },
      {
        "youtubeVideoId": "JnX9xgJu3q4",
        "title": "UFC FIGHTS THAT ARE AMAZING",
        "sourceChannelId": "UCvgfXK4nTYKudb0rFR6noLA",
        "sourceChannelTitle": "UFC",
        "thumbnailUrl": "https://i.ytimg.com/vi/JnX9xgJu3q4/hqdefault.jpg",
        "durationSec": 10170
      },
      {
        "youtubeVideoId": "y-jR93AytPc",
        "title": "EXTENDED: PACERS at MAVERICKS | FULL GAME HIGHLIGHTS | November 9, 2026",
        "sourceChannelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
        "sourceChannelTitle": "NBA",
        "thumbnailUrl": "https://i.ytimg.com/vi/y-jR93AytPc/hqdefault.jpg",
        "durationSec": 1693
      },
      {
        "youtubeVideoId": "QxO8kEPVmC0",
        "title": "Every Team's Longest Play at Midseason | 2026 NFL Season",
        "sourceChannelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        "sourceChannelTitle": "NFL",
        "thumbnailUrl": "https://i.ytimg.com/vi/QxO8kEPVmC0/hqdefault.jpg",
        "durationSec": 689
      },
      {
        "youtubeVideoId": "x13U7HIJGHg",
        "title": "Double Dragon Gaiden : Rise of the Dragons - Announcement Trailer",
        "sourceChannelId": "UCw_LnTX4iYwMic7q20I4uRQ",
        "sourceChannelTitle": "Secret Base",
        "thumbnailUrl": "https://i.ytimg.com/vi/x13U7HIJGHg/hqdefault.jpg",
        "durationSec": 79
      },
      {
        "youtubeVideoId": "_09gPxeE_gc",
        "title": "Top 10 Onboards | 2026 Sao Paulo Grand Prix | Qatar Airways",
        "sourceChannelId": "UCB_qr75-ydFVKSF9Dmo6izg",
        "sourceChannelTitle": "FORMULA 1",
        "thumbnailUrl": "https://i.ytimg.com/vi/_09gPxeE_gc/hqdefault.jpg",
        "durationSec": 565
      },
      {
        "youtubeVideoId": "DSicuQmGksI",
        "title": "Hoops restore four-point lead at top! | Celtic 1-0 Kilmarnock | SPFL highlights",
        "sourceChannelId": "UCZ7wY7MRDSygp63HIEfdQZA",
        "sourceChannelTitle": "Sky Sports Football",
        "thumbnailUrl": "https://i.ytimg.com/vi/DSicuQmGksI/hqdefault.jpg",
        "durationSec": 199
      },
      {
        "youtubeVideoId": "B_IwF-sh0LI",
        "title": "🔴 𝙇𝙄𝙑𝙀 Summer Youth Olympics! Taekwondo Finals - Women's -55kg, -63kg & Men's -63kg | #Dakar2026",
        "sourceChannelId": "UCTl3QQTvqHFjurroKxexy2Q",
        "sourceChannelTitle": "Olympic Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/B_IwF-sh0LI/hqdefault.jpg",
        "durationSec": 10547
      },
      {
        "youtubeVideoId": "1_91kDYtHbo",
        "title": "Street Fighter's Most Competitive Rivalry | Tokido vs MenaRD",
        "sourceChannelId": "UC8VddvuHJzIj__Ud0rY2_ww",
        "sourceChannelTitle": "Red Bull Esports",
        "thumbnailUrl": "https://i.ytimg.com/vi/1_91kDYtHbo/hqdefault.jpg",
        "durationSec": 1074
      },
      {
        "youtubeVideoId": "QmLsn_JrPbo",
        "title": "‘NOT FAIR’ 😤 How the Bengals offense KEEPS dominating | Move the Sticks",
        "sourceChannelId": "UCiio0ydw439X13KyZgMIcHw",
        "sourceChannelTitle": "NFL on ESPN",
        "thumbnailUrl": "https://i.ytimg.com/vi/QmLsn_JrPbo/hqdefault.jpg",
        "durationSec": 292
      },
      {
        "youtubeVideoId": "YvYBloAS3_Y",
        "title": "Polymarket UFC 334: Ceremonial Weigh-In",
        "sourceChannelId": "UCvgfXK4nTYKudb0rFR6noLA",
        "sourceChannelTitle": "UFC",
        "thumbnailUrl": "https://i.ytimg.com/vi/YvYBloAS3_Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "B5VNBCvu4E0",
        "title": "NBA's Top 10 Plays of the Night | November 9, 2026",
        "sourceChannelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
        "sourceChannelTitle": "NBA",
        "thumbnailUrl": "https://i.ytimg.com/vi/B5VNBCvu4E0/hqdefault.jpg",
        "durationSec": 149
      },
      {
        "youtubeVideoId": "BN_-u78ur0I",
        "title": "Top 15 Plays of Week 9! | 2026 NFL Season",
        "sourceChannelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        "sourceChannelTitle": "NFL",
        "thumbnailUrl": "https://i.ytimg.com/vi/BN_-u78ur0I/hqdefault.jpg",
        "durationSec": 319
      },
      {
        "youtubeVideoId": "8TvF1hxB7c0",
        "title": "Original Devil Dare review on GameTrailers",
        "sourceChannelId": "UCw_LnTX4iYwMic7q20I4uRQ",
        "sourceChannelTitle": "Secret Base",
        "thumbnailUrl": "https://i.ytimg.com/vi/8TvF1hxB7c0/hqdefault.jpg",
        "durationSec": 283
      },
      {
        "youtubeVideoId": "q16mDWoytf0",
        "title": "Nine Minutes Of Max Verstappen Tearing Through The Field At Interlagos | 2026 Sao Paulo Grand Prix",
        "sourceChannelId": "UCB_qr75-ydFVKSF9Dmo6izg",
        "sourceChannelTitle": "FORMULA 1",
        "thumbnailUrl": "https://i.ytimg.com/vi/q16mDWoytf0/hqdefault.jpg",
        "durationSec": 536
      },
      {
        "youtubeVideoId": "LVhbeQDt5RM",
        "title": "Spence assists Esposito as Como beaten! | Inter Milan 2-0 Como | Serie A Highlights",
        "sourceChannelId": "UCZ7wY7MRDSygp63HIEfdQZA",
        "sourceChannelTitle": "Sky Sports Football",
        "thumbnailUrl": "https://i.ytimg.com/vi/LVhbeQDt5RM/hqdefault.jpg",
        "durationSec": 189
      },
      {
        "youtubeVideoId": "ta-sP-EY8aM",
        "title": "🔴 𝙇𝙄𝙑𝙀 Summer Youth Olympics! Athletics Finals - Men's & Women's 200m and more! | #Dakar2026",
        "sourceChannelId": "UCTl3QQTvqHFjurroKxexy2Q",
        "sourceChannelTitle": "Olympic Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/ta-sP-EY8aM/hqdefault.jpg",
        "durationSec": 16855
      }
    ]
  },
  "travel": {
    "categoryId": "travel",
    "categoryName": "Travel",
    "hue": 190,
    "builtAt": 1794338234296,
    "videos": [
      {
        "youtubeVideoId": "42M_CnizJxc",
        "title": "Daily Drop Pro Just Got a HUGE Upgrade (Full Demo)",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/42M_CnizJxc/hqdefault.jpg",
        "durationSec": 627
      },
      {
        "youtubeVideoId": "cBGSUS7iOgg",
        "title": "What happened to Yes Theory this year?",
        "sourceChannelId": "UCTd7KzdwnFE3lm6LCfYDmUQ",
        "sourceChannelTitle": "Seek Discomfort",
        "thumbnailUrl": "https://i.ytimg.com/vi/cBGSUS7iOgg/hqdefault.jpg",
        "durationSec": 5771
      },
      {
        "youtubeVideoId": "CE0GHFSc2p8",
        "title": "This Changes EVERYTHING (Our Product Reveal)",
        "sourceChannelId": "UCi7KXaqqW_h6ifNVnudH0kQ",
        "sourceChannelTitle": "Christian LeBlanc",
        "thumbnailUrl": "https://i.ytimg.com/vi/CE0GHFSc2p8/hqdefault.jpg",
        "durationSec": 1007
      },
      {
        "youtubeVideoId": "IqXl0JxxHx8",
        "title": "The Hardest Places on Earth to Be a Kid",
        "sourceChannelId": "UCodVXWu3aFyE1hGmbJrJJLQ",
        "sourceChannelTitle": "Drew Binsky Top Videos",
        "thumbnailUrl": "https://i.ytimg.com/vi/IqXl0JxxHx8/hqdefault.jpg",
        "durationSec": 8272
      },
      {
        "youtubeVideoId": "sWBMwr3y9c4",
        "title": "Montenegro Food: What to Eat & Drink When You Visit",
        "sourceChannelId": "UCkFli83zdGzt7s-IsiRijXA",
        "sourceChannelTitle": "Wolters World Eats",
        "thumbnailUrl": "https://i.ytimg.com/vi/sWBMwr3y9c4/hqdefault.jpg",
        "durationSec": 774
      },
      {
        "youtubeVideoId": "5wypCQp11wo",
        "title": "24 Hours In An Abandoned Soviet City",
        "sourceChannelId": "UCxDZs_ltFFvn0FDHT6kmoXA",
        "sourceChannelTitle": "bald and bankrupt",
        "thumbnailUrl": "https://i.ytimg.com/vi/5wypCQp11wo/hqdefault.jpg",
        "durationSec": 2644
      },
      {
        "youtubeVideoId": "W4lTVLOwzQQ",
        "title": "A Gondola Ride in Venice",
        "sourceChannelId": "UCJ7FVLKSOlpTNbuyvqOjPqw",
        "sourceChannelTitle": "RickStevesEurope",
        "thumbnailUrl": "https://i.ytimg.com/vi/W4lTVLOwzQQ/hqdefault.jpg",
        "durationSec": 71
      },
      {
        "youtubeVideoId": "kYyxSvOcr4k",
        "title": "Everyday life living in my tent alone (with horses & dogs)",
        "sourceChannelId": "UCDTINI9skkeZNY2ZXnBqIkQ",
        "sourceChannelTitle": "Eva zu Beck",
        "thumbnailUrl": "https://i.ytimg.com/vi/kYyxSvOcr4k/hqdefault.jpg",
        "durationSec": 1706
      },
      {
        "youtubeVideoId": "lz06lrFWgmQ",
        "title": "Indians Kept Telling Me to Eat HERE!! (Lucknow Food Tour)",
        "sourceChannelId": "UCyEd6QBSgat5kkC6svyjudA",
        "sourceChannelTitle": "Mark Wiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/lz06lrFWgmQ/hqdefault.jpg",
        "durationSec": 2025
      },
      {
        "youtubeVideoId": "q7thhitQoww",
        "title": "The Zombie Fungus Worth More than Gold",
        "sourceChannelId": "UC_DmOS_FBvO4H27U7X0OtRg",
        "sourceChannelTitle": "Fearless &amp; Far",
        "thumbnailUrl": "https://i.ytimg.com/vi/q7thhitQoww/hqdefault.jpg",
        "durationSec": 2823
      },
      {
        "youtubeVideoId": "Rp2pJ9EfFAU",
        "title": "That Time I Went to North Korea as a Tourist (Full Documentary)",
        "sourceChannelId": "UCXulruMI7BHj3kGyosNa0jA",
        "sourceChannelTitle": "Indigo Traveller",
        "thumbnailUrl": "https://i.ytimg.com/vi/Rp2pJ9EfFAU/hqdefault.jpg",
        "durationSec": 2679
      },
      {
        "youtubeVideoId": "fTXEa-lERGc",
        "title": "Wild Journey to Colombia and Venezuela Bordertown 🇨🇴",
        "sourceChannelId": "UCD5v3wL-6NMG0SMMeR6TxsA",
        "sourceChannelTitle": "Extra Chopsticks",
        "thumbnailUrl": "https://i.ytimg.com/vi/fTXEa-lERGc/hqdefault.jpg",
        "durationSec": 1245
      },
      {
        "youtubeVideoId": "4u9kJEYyk_o",
        "title": "My Chinese Wife Judges Pasta in Italy!!",
        "sourceChannelId": "UCiAq_SU0ED1C6vWFMnw8Ekg",
        "sourceChannelTitle": "The Food Ranger",
        "thumbnailUrl": "https://i.ytimg.com/vi/4u9kJEYyk_o/hqdefault.jpg",
        "durationSec": 1741
      },
      {
        "youtubeVideoId": "61XiQ9ahJjA",
        "title": "I Have 7 Chase Business Cards: This One’s the Best",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/61XiQ9ahJjA/hqdefault.jpg",
        "durationSec": 652
      },
      {
        "youtubeVideoId": "K3tG371iWhs",
        "title": "We Went Inside Brussels' Mysterious Blue Cube with 500 subscribers",
        "sourceChannelId": "UCTd7KzdwnFE3lm6LCfYDmUQ",
        "sourceChannelTitle": "Seek Discomfort",
        "thumbnailUrl": "https://i.ytimg.com/vi/K3tG371iWhs/hqdefault.jpg",
        "durationSec": 694
      },
      {
        "youtubeVideoId": "PnnjlMu-uyI",
        "title": "The Upgrade That Could Make or Break Lost Labs",
        "sourceChannelId": "UCi7KXaqqW_h6ifNVnudH0kQ",
        "sourceChannelTitle": "Christian LeBlanc",
        "thumbnailUrl": "https://i.ytimg.com/vi/PnnjlMu-uyI/hqdefault.jpg",
        "durationSec": 1631
      },
      {
        "youtubeVideoId": "rwX1YVzRn4M",
        "title": "Inside Appalachia: America’s Most Misunderstood Region",
        "sourceChannelId": "UCodVXWu3aFyE1hGmbJrJJLQ",
        "sourceChannelTitle": "Drew Binsky Top Videos",
        "thumbnailUrl": "https://i.ytimg.com/vi/rwX1YVzRn4M/hqdefault.jpg",
        "durationSec": 8175
      },
      {
        "youtubeVideoId": "pG4ru332TYc",
        "title": "What to Eat in Florence, Italy - Traditional Florentine Food You MUST Try",
        "sourceChannelId": "UCkFli83zdGzt7s-IsiRijXA",
        "sourceChannelTitle": "Wolters World Eats",
        "thumbnailUrl": "https://i.ytimg.com/vi/pG4ru332TYc/hqdefault.jpg",
        "durationSec": 960
      },
      {
        "youtubeVideoId": "ktb5PTSVSNg",
        "title": "I Investigated What Remains Of Yugoslavia",
        "sourceChannelId": "UCxDZs_ltFFvn0FDHT6kmoXA",
        "sourceChannelTitle": "bald and bankrupt",
        "thumbnailUrl": "https://i.ytimg.com/vi/ktb5PTSVSNg/hqdefault.jpg",
        "durationSec": 1846
      },
      {
        "youtubeVideoId": "2vZA83_gQCA",
        "title": "A Long Way Down",
        "sourceChannelId": "UCJ7FVLKSOlpTNbuyvqOjPqw",
        "sourceChannelTitle": "RickStevesEurope",
        "thumbnailUrl": "https://i.ytimg.com/vi/2vZA83_gQCA/hqdefault.jpg",
        "durationSec": 75
      },
      {
        "youtubeVideoId": "vofF8V-40dU",
        "title": "I'm moving into a tent... (and I rescued a dog)",
        "sourceChannelId": "UCDTINI9skkeZNY2ZXnBqIkQ",
        "sourceChannelTitle": "Eva zu Beck",
        "thumbnailUrl": "https://i.ytimg.com/vi/vofF8V-40dU/hqdefault.jpg",
        "durationSec": 1488
      },
      {
        "youtubeVideoId": "8tEXcv-8pIw",
        "title": "I Tried the World’s Most UNUSUAL Buffet!! (in Greenland 🇬🇱)",
        "sourceChannelId": "UCyEd6QBSgat5kkC6svyjudA",
        "sourceChannelTitle": "Mark Wiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/8tEXcv-8pIw/hqdefault.jpg",
        "durationSec": 1552
      },
      {
        "youtubeVideoId": "BPHjquSgzMQ",
        "title": "72 Hours Covering the Sudan War (I have no words)",
        "sourceChannelId": "UCXulruMI7BHj3kGyosNa0jA",
        "sourceChannelTitle": "Indigo Traveller",
        "thumbnailUrl": "https://i.ytimg.com/vi/BPHjquSgzMQ/hqdefault.jpg",
        "durationSec": 2594
      },
      {
        "youtubeVideoId": "gUHDGLVph9Y",
        "title": "Colombian Food They Don't Want You to See (CENSORED) 🇨🇴",
        "sourceChannelId": "UCD5v3wL-6NMG0SMMeR6TxsA",
        "sourceChannelTitle": "Extra Chopsticks",
        "thumbnailUrl": "https://i.ytimg.com/vi/gUHDGLVph9Y/hqdefault.jpg",
        "durationSec": 1201
      },
      {
        "youtubeVideoId": "VBcwjyBzAdo",
        "title": "I Tried China's Most Insane Breakfasts!",
        "sourceChannelId": "UCiAq_SU0ED1C6vWFMnw8Ekg",
        "sourceChannelTitle": "The Food Ranger",
        "thumbnailUrl": "https://i.ytimg.com/vi/VBcwjyBzAdo/hqdefault.jpg",
        "durationSec": 1212
      },
      {
        "youtubeVideoId": "zgHOkzd7lrs",
        "title": "5 SHOCKINGLY Affordable Travel Destinations",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/zgHOkzd7lrs/hqdefault.jpg",
        "durationSec": 751
      },
      {
        "youtubeVideoId": "OPg97iP7klM",
        "title": "I Visited the Town Where Everyone Lives on One Road",
        "sourceChannelId": "UCTd7KzdwnFE3lm6LCfYDmUQ",
        "sourceChannelTitle": "Seek Discomfort",
        "thumbnailUrl": "https://i.ytimg.com/vi/OPg97iP7klM/hqdefault.jpg",
        "durationSec": 1363
      },
      {
        "youtubeVideoId": "-ZfrST8diaY",
        "title": "Stressful Breakthroughs (Building a Product in 90 days)",
        "sourceChannelId": "UCi7KXaqqW_h6ifNVnudH0kQ",
        "sourceChannelTitle": "Christian LeBlanc",
        "thumbnailUrl": "https://i.ytimg.com/vi/-ZfrST8diaY/hqdefault.jpg",
        "durationSec": 1332
      },
      {
        "youtubeVideoId": "pZYuphYyMrA",
        "title": "The Wildest Places People Live in Southeast Asia",
        "sourceChannelId": "UCodVXWu3aFyE1hGmbJrJJLQ",
        "sourceChannelTitle": "Drew Binsky Top Videos",
        "thumbnailUrl": "https://i.ytimg.com/vi/pZYuphYyMrA/hqdefault.jpg",
        "durationSec": 4961
      },
      {
        "youtubeVideoId": "7XxKCSS_iZ4",
        "title": "The Best Food in Turin, Italy - What to Eat in Torino",
        "sourceChannelId": "UCkFli83zdGzt7s-IsiRijXA",
        "sourceChannelTitle": "Wolters World Eats",
        "thumbnailUrl": "https://i.ytimg.com/vi/7XxKCSS_iZ4/hqdefault.jpg",
        "durationSec": 708
      },
      {
        "youtubeVideoId": "3eykcScdqJM",
        "title": "Investigating The Czechia Tourists Never See",
        "sourceChannelId": "UCxDZs_ltFFvn0FDHT6kmoXA",
        "sourceChannelTitle": "bald and bankrupt",
        "thumbnailUrl": "https://i.ytimg.com/vi/3eykcScdqJM/hqdefault.jpg",
        "durationSec": 3235
      },
      {
        "youtubeVideoId": "uuJpJ6sAULE",
        "title": "Life has taken a crazy turn (am I a farmer now?)",
        "sourceChannelId": "UCDTINI9skkeZNY2ZXnBqIkQ",
        "sourceChannelTitle": "Eva zu Beck",
        "thumbnailUrl": "https://i.ytimg.com/vi/uuJpJ6sAULE/hqdefault.jpg",
        "durationSec": 1137
      },
      {
        "youtubeVideoId": "gM5hAO3bW7s",
        "title": "Surviving GREENLAND!! Arctic Food for 4,500 Years!!",
        "sourceChannelId": "UCyEd6QBSgat5kkC6svyjudA",
        "sourceChannelTitle": "Mark Wiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/gM5hAO3bW7s/hqdefault.jpg",
        "durationSec": 1974
      },
      {
        "youtubeVideoId": "LiIraJl0bBU",
        "title": "Walking into Peru's Roughest Neighborhood",
        "sourceChannelId": "UCXulruMI7BHj3kGyosNa0jA",
        "sourceChannelTitle": "Indigo Traveller",
        "thumbnailUrl": "https://i.ytimg.com/vi/LiIraJl0bBU/hqdefault.jpg",
        "durationSec": 1660
      },
      {
        "youtubeVideoId": "_SoZEcucEXg",
        "title": "I Ranked 13 Chinese Street Foods on a $100 Budget!",
        "sourceChannelId": "UCiAq_SU0ED1C6vWFMnw8Ekg",
        "sourceChannelTitle": "The Food Ranger",
        "thumbnailUrl": "https://i.ytimg.com/vi/_SoZEcucEXg/hqdefault.jpg",
        "durationSec": 1457
      },
      {
        "youtubeVideoId": "M1y8jNjOqHs",
        "title": "We Visited 60 Countries. These Are Our Best Flights.",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/M1y8jNjOqHs/hqdefault.jpg",
        "durationSec": 526
      },
      {
        "youtubeVideoId": "0KxZNNjuGOc",
        "title": "We Took Our Food Delivery Man to a Real Maasai Village",
        "sourceChannelId": "UCTd7KzdwnFE3lm6LCfYDmUQ",
        "sourceChannelTitle": "Seek Discomfort",
        "thumbnailUrl": "https://i.ytimg.com/vi/0KxZNNjuGOc/hqdefault.jpg",
        "durationSec": 997
      },
      {
        "youtubeVideoId": "5Y7KLAn0QAg",
        "title": "We visited the Factory (Building a Product in 90 days)",
        "sourceChannelId": "UCi7KXaqqW_h6ifNVnudH0kQ",
        "sourceChannelTitle": "Christian LeBlanc",
        "thumbnailUrl": "https://i.ytimg.com/vi/5Y7KLAn0QAg/hqdefault.jpg",
        "durationSec": 903
      },
      {
        "youtubeVideoId": "EwiNn8un55c",
        "title": "Visiting The World’s Most Unreachable Places",
        "sourceChannelId": "UCodVXWu3aFyE1hGmbJrJJLQ",
        "sourceChannelTitle": "Drew Binsky Top Videos",
        "thumbnailUrl": "https://i.ytimg.com/vi/EwiNn8un55c/hqdefault.jpg",
        "durationSec": 6101
      },
      {
        "youtubeVideoId": "xWT89PEpAXU",
        "title": "Best Drinks Tourists Should Try in France",
        "sourceChannelId": "UCkFli83zdGzt7s-IsiRijXA",
        "sourceChannelTitle": "Wolters World Eats",
        "thumbnailUrl": "https://i.ytimg.com/vi/xWT89PEpAXU/hqdefault.jpg",
        "durationSec": 603
      },
      {
        "youtubeVideoId": "Ez3rzTM3IgQ",
        "title": "24 Hours In Venezuela's Worst Rated Hotel",
        "sourceChannelId": "UCxDZs_ltFFvn0FDHT6kmoXA",
        "sourceChannelTitle": "bald and bankrupt",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ez3rzTM3IgQ/hqdefault.jpg",
        "durationSec": 2191
      },
      {
        "youtubeVideoId": "D8dAqVe6m0E",
        "title": "They're making my life here VERY difficult",
        "sourceChannelId": "UCDTINI9skkeZNY2ZXnBqIkQ",
        "sourceChannelTitle": "Eva zu Beck",
        "thumbnailUrl": "https://i.ytimg.com/vi/D8dAqVe6m0E/hqdefault.jpg",
        "durationSec": 1264
      },
      {
        "youtubeVideoId": "Tk_0L_vS5Y4",
        "title": "Food is WILD on the World’s Biggest Island!!",
        "sourceChannelId": "UCyEd6QBSgat5kkC6svyjudA",
        "sourceChannelTitle": "Mark Wiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/Tk_0L_vS5Y4/hqdefault.jpg",
        "durationSec": 3233
      },
      {
        "youtubeVideoId": "xNXA8CRnZXY",
        "title": "Dust & Bones: Entering Peru’s Endless Desert Slums",
        "sourceChannelId": "UCXulruMI7BHj3kGyosNa0jA",
        "sourceChannelTitle": "Indigo Traveller",
        "thumbnailUrl": "https://i.ytimg.com/vi/xNXA8CRnZXY/hqdefault.jpg",
        "durationSec": 1744
      },
      {
        "youtubeVideoId": "-7BUwQH6bAY",
        "title": "I Tried the World's Spiciest Chinese Food!! (Almost Died)",
        "sourceChannelId": "UCiAq_SU0ED1C6vWFMnw8Ekg",
        "sourceChannelTitle": "The Food Ranger",
        "thumbnailUrl": "https://i.ytimg.com/vi/-7BUwQH6bAY/hqdefault.jpg",
        "durationSec": 1351
      },
      {
        "youtubeVideoId": "jZb8qTrR5lk",
        "title": "Credit Card Stacking Explained: Save More, Earn More",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/jZb8qTrR5lk/hqdefault.jpg",
        "durationSec": 785
      },
      {
        "youtubeVideoId": "CKDGkhQDLjQ",
        "title": "We Launched the First Ever \"Seek Discomfort\" Shoe!",
        "sourceChannelId": "UCTd7KzdwnFE3lm6LCfYDmUQ",
        "sourceChannelTitle": "Seek Discomfort",
        "thumbnailUrl": "https://i.ytimg.com/vi/CKDGkhQDLjQ/hqdefault.jpg",
        "durationSec": 943
      },
      {
        "youtubeVideoId": "EFczZrLwS_I",
        "title": "Building a Product in China (the idea got REAL)",
        "sourceChannelId": "UCi7KXaqqW_h6ifNVnudH0kQ",
        "sourceChannelTitle": "Christian LeBlanc",
        "thumbnailUrl": "https://i.ytimg.com/vi/EFczZrLwS_I/hqdefault.jpg",
        "durationSec": 1639
      }
    ]
  },
  "film": {
    "categoryId": "film",
    "categoryName": "Film",
    "hue": 300,
    "builtAt": 1794338234810,
    "videos": [
      {
        "youtubeVideoId": "ZzaAa6yDvVk",
        "title": "Helene in Asheville / Scenes From a Disaster",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZzaAa6yDvVk/hqdefault.jpg",
        "durationSec": 231
      },
      {
        "youtubeVideoId": "Dz7LH5YfYc0",
        "title": "Why Movie Extras Aren't Allowed to Talk",
        "sourceChannelId": "UCDylnpLJWDj2gKWujjwap9w",
        "sourceChannelTitle": "StudioBinder Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dz7LH5YfYc0/hqdefault.jpg",
        "durationSec": 327
      },
      {
        "youtubeVideoId": "-LDXBGgs1QI",
        "title": "The Anatomy of Genres — A Conversation with John Truby | @BeyondTheScreenplay",
        "sourceChannelId": "UCErSSa3CaP_GJxmFpdjG9Jw",
        "sourceChannelTitle": "Lessons from the Screenplay",
        "thumbnailUrl": "https://i.ytimg.com/vi/-LDXBGgs1QI/hqdefault.jpg",
        "durationSec": 3601
      },
      {
        "youtubeVideoId": "utJ4ld9n9vE",
        "title": "The moment you realize it's 1993 and the movie's making you feel super weird",
        "sourceChannelId": "UCzjbia0NqUsSL1_-loJihMg",
        "sourceChannelTitle": "CinemaStix",
        "thumbnailUrl": "https://i.ytimg.com/vi/utJ4ld9n9vE/hqdefault.jpg",
        "durationSec": 650
      },
      {
        "youtubeVideoId": "b6b_uVA1ZSo",
        "title": "Van Gogh - Beauty in Suffering",
        "sourceChannelId": "UCuPgdqQKpq4T4zeqmTelnFg",
        "sourceChannelTitle": "kaptainkristian",
        "thumbnailUrl": "https://i.ytimg.com/vi/b6b_uVA1ZSo/hqdefault.jpg",
        "durationSec": 373
      },
      {
        "youtubeVideoId": "V04X299hq9c",
        "title": "Succession - How To Film a Car Scene",
        "sourceChannelId": "UCWTFGPpNQ0Ms6afXhaWDiRw",
        "sourceChannelTitle": "Now You See It",
        "thumbnailUrl": "https://i.ytimg.com/vi/V04X299hq9c/hqdefault.jpg",
        "durationSec": 249
      },
      {
        "youtubeVideoId": "a2jlDGZJRBI",
        "title": "The Worldwide Scramble to Copy Star Wars",
        "sourceChannelId": "UCJkMlOu7faDgqh4PfzbpLdg",
        "sourceChannelTitle": "Nerdwriter1",
        "thumbnailUrl": "https://i.ytimg.com/vi/a2jlDGZJRBI/hqdefault.jpg",
        "durationSec": 495
      },
      {
        "youtubeVideoId": "ei1QhjvNnVM",
        "title": "Game of Clones",
        "sourceChannelId": "UCx0L2ZdYfiq-tsAXb8IXpQg",
        "sourceChannelTitle": "Just Write",
        "thumbnailUrl": "https://i.ytimg.com/vi/ei1QhjvNnVM/hqdefault.jpg",
        "durationSec": 2569
      },
      {
        "youtubeVideoId": "Jobvn4xLGRU",
        "title": "I Made D&D Table SO BIG my friends can never Leave",
        "sourceChannelId": "UCSpFnDQr88xCZ80N-X7t0nQ",
        "sourceChannelTitle": "Corridor Crew",
        "thumbnailUrl": "https://i.ytimg.com/vi/Jobvn4xLGRU/hqdefault.jpg",
        "durationSec": 965
      },
      {
        "youtubeVideoId": "obxiFt-FROk",
        "title": "Hey - It's been a Bit...",
        "sourceChannelId": "UCSFAYalJ2Q7Tm_WmLgetmeg",
        "sourceChannelTitle": "Filmmaker IQ",
        "thumbnailUrl": "https://i.ytimg.com/vi/obxiFt-FROk/hqdefault.jpg",
        "durationSec": 6554
      },
      {
        "youtubeVideoId": "ZXUBoI9eHfQ",
        "title": "Every Frame x Lackadaisy - Interview with Tracy J. Butler & Fable Siegel",
        "sourceChannelId": "UCjFqcJQXGZ6T6sxyFB-5i6A",
        "sourceChannelTitle": "Every Frame a Painting",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZXUBoI9eHfQ/hqdefault.jpg",
        "durationSec": 3268
      },
      {
        "youtubeVideoId": "TibHDhxlEzc",
        "title": "A Battleship on Tracks, Because Why Not.",
        "sourceChannelId": "UCfjaAUlTZRHJapJmCT6eyIg",
        "sourceChannelTitle": "Spacedock",
        "thumbnailUrl": "https://i.ytimg.com/vi/TibHDhxlEzc/hqdefault.jpg",
        "durationSec": 544
      },
      {
        "youtubeVideoId": "Cd4vtY-uY9I",
        "title": "Why They Can't Make World War 2 Feel This \"Real\" Anymore",
        "sourceChannelId": "UCs7nPQIEba0T3tGOWWsZpJQ",
        "sourceChannelTitle": "Like Stories of Old",
        "thumbnailUrl": "https://i.ytimg.com/vi/Cd4vtY-uY9I/hqdefault.jpg",
        "durationSec": 1736
      },
      {
        "youtubeVideoId": "LdbmF1bzaUI",
        "title": "when you notice the sunlight streaming through the trees - 1 Hour Nature Ambience",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/LdbmF1bzaUI/hqdefault.jpg",
        "durationSec": 3604
      },
      {
        "youtubeVideoId": "Wq8_S3drQg8",
        "title": "The Art of Faking It in Movies",
        "sourceChannelId": "UCDylnpLJWDj2gKWujjwap9w",
        "sourceChannelTitle": "StudioBinder Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/Wq8_S3drQg8/hqdefault.jpg",
        "durationSec": 486
      },
      {
        "youtubeVideoId": "5REIludod7c",
        "title": "Holiday Gift Guide: Best Accessories!",
        "sourceChannelId": "UCKy1dAqELo0zrOtPkf0eTMw",
        "sourceChannelTitle": "IGN",
        "thumbnailUrl": "https://i.ytimg.com/vi/5REIludod7c/hqdefault.jpg",
        "durationSec": 376
      },
      {
        "youtubeVideoId": "IuaaTJxhSEc",
        "title": "What’s new on my other channels",
        "sourceChannelId": "UCErSSa3CaP_GJxmFpdjG9Jw",
        "sourceChannelTitle": "Lessons from the Screenplay",
        "thumbnailUrl": "https://i.ytimg.com/vi/IuaaTJxhSEc/hqdefault.jpg",
        "durationSec": 66
      },
      {
        "youtubeVideoId": "yAHnEXHMACA",
        "title": "“the filmmakers somehow knew this would work…”",
        "sourceChannelId": "UCzjbia0NqUsSL1_-loJihMg",
        "sourceChannelTitle": "CinemaStix",
        "thumbnailUrl": "https://i.ytimg.com/vi/yAHnEXHMACA/hqdefault.jpg",
        "durationSec": 823
      },
      {
        "youtubeVideoId": "01BrRGEzPaQ",
        "title": "When Tarantino Learned To Shut Up",
        "sourceChannelId": "UCuPgdqQKpq4T4zeqmTelnFg",
        "sourceChannelTitle": "kaptainkristian",
        "thumbnailUrl": "https://i.ytimg.com/vi/01BrRGEzPaQ/hqdefault.jpg",
        "durationSec": 637
      },
      {
        "youtubeVideoId": "uS-CXPJVtFI",
        "title": "What's In a Name? Why Character Names Matter",
        "sourceChannelId": "UCWTFGPpNQ0Ms6afXhaWDiRw",
        "sourceChannelTitle": "Now You See It",
        "thumbnailUrl": "https://i.ytimg.com/vi/uS-CXPJVtFI/hqdefault.jpg",
        "durationSec": 692
      },
      {
        "youtubeVideoId": "1AdRE5qFzuE",
        "title": "Why Rich People Used to Collect Unicorn Horns",
        "sourceChannelId": "UCJkMlOu7faDgqh4PfzbpLdg",
        "sourceChannelTitle": "Nerdwriter1",
        "thumbnailUrl": "https://i.ytimg.com/vi/1AdRE5qFzuE/hqdefault.jpg",
        "durationSec": 467
      },
      {
        "youtubeVideoId": "YtEYWMuw5c8",
        "title": "The Pirates Trilogy is Pure Bliss",
        "sourceChannelId": "UCx0L2ZdYfiq-tsAXb8IXpQg",
        "sourceChannelTitle": "Just Write",
        "thumbnailUrl": "https://i.ytimg.com/vi/YtEYWMuw5c8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "FBV-leryHu8",
        "title": "VFX Artists React to Bad & Great CGi 250",
        "sourceChannelId": "UCSpFnDQr88xCZ80N-X7t0nQ",
        "sourceChannelTitle": "Corridor Crew",
        "thumbnailUrl": "https://i.ytimg.com/vi/FBV-leryHu8/hqdefault.jpg",
        "durationSec": 1071
      },
      {
        "youtubeVideoId": "hDZ0DyHfpkI",
        "title": "Saying Adios to 2025 Stream!",
        "sourceChannelId": "UCSFAYalJ2Q7Tm_WmLgetmeg",
        "sourceChannelTitle": "Filmmaker IQ",
        "thumbnailUrl": "https://i.ytimg.com/vi/hDZ0DyHfpkI/hqdefault.jpg",
        "durationSec": 2508
      },
      {
        "youtubeVideoId": "CahiJhFxrTE",
        "title": "THE SECOND | Animatic vs. Final (Bonus Video)",
        "sourceChannelId": "UCjFqcJQXGZ6T6sxyFB-5i6A",
        "sourceChannelTitle": "Every Frame a Painting",
        "thumbnailUrl": "https://i.ytimg.com/vi/CahiJhFxrTE/hqdefault.jpg",
        "durationSec": 1005
      },
      {
        "youtubeVideoId": "NajjQV0ljTo",
        "title": "Warships That Carry Warships",
        "sourceChannelId": "UCfjaAUlTZRHJapJmCT6eyIg",
        "sourceChannelTitle": "Spacedock",
        "thumbnailUrl": "https://i.ytimg.com/vi/NajjQV0ljTo/hqdefault.jpg",
        "durationSec": 551
      },
      {
        "youtubeVideoId": "J56XPMA6KHI",
        "title": "Modern Movie Culture has a Problem",
        "sourceChannelId": "UCs7nPQIEba0T3tGOWWsZpJQ",
        "sourceChannelTitle": "Like Stories of Old",
        "thumbnailUrl": "https://i.ytimg.com/vi/J56XPMA6KHI/hqdefault.jpg",
        "durationSec": 2070
      },
      {
        "youtubeVideoId": "zfem5233D_8",
        "title": "Is The Algorithm Speaking To People?",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/zfem5233D_8/hqdefault.jpg",
        "durationSec": 640
      },
      {
        "youtubeVideoId": "NK5wsSLY5-o",
        "title": "How Movies Replace Actors Without You Noticing",
        "sourceChannelId": "UCDylnpLJWDj2gKWujjwap9w",
        "sourceChannelTitle": "StudioBinder Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/NK5wsSLY5-o/hqdefault.jpg",
        "durationSec": 435
      },
      {
        "youtubeVideoId": "zjIXBESV0ew",
        "title": "Marvel Rivals - Official Nightcrawler Character Reveal Trailer",
        "sourceChannelId": "UCKy1dAqELo0zrOtPkf0eTMw",
        "sourceChannelTitle": "IGN",
        "thumbnailUrl": "https://i.ytimg.com/vi/zjIXBESV0ew/hqdefault.jpg",
        "durationSec": 74
      },
      {
        "youtubeVideoId": "-elPKyfpJrM",
        "title": "Why Mass Effect Should Be the Next Game of Thrones",
        "sourceChannelId": "UCErSSa3CaP_GJxmFpdjG9Jw",
        "sourceChannelTitle": "Lessons from the Screenplay",
        "thumbnailUrl": "https://i.ytimg.com/vi/-elPKyfpJrM/hqdefault.jpg",
        "durationSec": 1231
      },
      {
        "youtubeVideoId": "tWa7Rkpm5rg",
        "title": "“The filmmakers really didn’t think we’d notice this…”",
        "sourceChannelId": "UCzjbia0NqUsSL1_-loJihMg",
        "sourceChannelTitle": "CinemaStix",
        "thumbnailUrl": "https://i.ytimg.com/vi/tWa7Rkpm5rg/hqdefault.jpg",
        "durationSec": 572
      },
      {
        "youtubeVideoId": "4O9RY2n-ckg",
        "title": "100 Years of History in 100 Films",
        "sourceChannelId": "UCuPgdqQKpq4T4zeqmTelnFg",
        "sourceChannelTitle": "kaptainkristian",
        "thumbnailUrl": "https://i.ytimg.com/vi/4O9RY2n-ckg/hqdefault.jpg",
        "durationSec": 781
      },
      {
        "youtubeVideoId": "omn9OXRwTro",
        "title": "EXPLOSIONS in Movies: More Than Just Spectacle",
        "sourceChannelId": "UCWTFGPpNQ0Ms6afXhaWDiRw",
        "sourceChannelTitle": "Now You See It",
        "thumbnailUrl": "https://i.ytimg.com/vi/omn9OXRwTro/hqdefault.jpg",
        "durationSec": 776
      },
      {
        "youtubeVideoId": "41UQ1JIvXtI",
        "title": "Mary Cassatt: The Impressionist Who Painted The Mind",
        "sourceChannelId": "UCJkMlOu7faDgqh4PfzbpLdg",
        "sourceChannelTitle": "Nerdwriter1",
        "thumbnailUrl": "https://i.ytimg.com/vi/41UQ1JIvXtI/hqdefault.jpg",
        "durationSec": 674
      },
      {
        "youtubeVideoId": "AcBVlsholwA",
        "title": "What The Last Of Us Actually Changed",
        "sourceChannelId": "UCx0L2ZdYfiq-tsAXb8IXpQg",
        "sourceChannelTitle": "Just Write",
        "thumbnailUrl": "https://i.ytimg.com/vi/AcBVlsholwA/hqdefault.jpg",
        "durationSec": 945
      },
      {
        "youtubeVideoId": "TOfKSbaM4wM",
        "title": "A PEEK at our BIGGEST Project YET!",
        "sourceChannelId": "UCSpFnDQr88xCZ80N-X7t0nQ",
        "sourceChannelTitle": "Corridor Crew",
        "thumbnailUrl": "https://i.ytimg.com/vi/TOfKSbaM4wM/hqdefault.jpg",
        "durationSec": 79
      },
      {
        "youtubeVideoId": "fVABEb4l7xs",
        "title": "Checking In + Your Chats",
        "sourceChannelId": "UCSFAYalJ2Q7Tm_WmLgetmeg",
        "sourceChannelTitle": "Filmmaker IQ",
        "thumbnailUrl": "https://i.ytimg.com/vi/fVABEb4l7xs/hqdefault.jpg",
        "durationSec": 2837
      },
      {
        "youtubeVideoId": "Mfz6tj_Ep1E",
        "title": "THE SECOND | Short Film",
        "sourceChannelId": "UCjFqcJQXGZ6T6sxyFB-5i6A",
        "sourceChannelTitle": "Every Frame a Painting",
        "thumbnailUrl": "https://i.ytimg.com/vi/Mfz6tj_Ep1E/hqdefault.jpg",
        "durationSec": 970
      },
      {
        "youtubeVideoId": "BbyEGvL57_M",
        "title": "Using Teleportation as a Weapon",
        "sourceChannelId": "UCfjaAUlTZRHJapJmCT6eyIg",
        "sourceChannelTitle": "Spacedock",
        "thumbnailUrl": "https://i.ytimg.com/vi/BbyEGvL57_M/hqdefault.jpg",
        "durationSec": 585
      },
      {
        "youtubeVideoId": "UVA7phJ4iTc",
        "title": "The Ryan Gosling Movie That Became Every Guy's Personality",
        "sourceChannelId": "UCs7nPQIEba0T3tGOWWsZpJQ",
        "sourceChannelTitle": "Like Stories of Old",
        "thumbnailUrl": "https://i.ytimg.com/vi/UVA7phJ4iTc/hqdefault.jpg",
        "durationSec": 1533
      },
      {
        "youtubeVideoId": "hygub3ScCbQ",
        "title": "Furiosa - Thomas Flight Review",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/hygub3ScCbQ/hqdefault.jpg",
        "durationSec": 667
      },
      {
        "youtubeVideoId": "3ew1FTNK4K0",
        "title": "The Film Job Nobody Talks About",
        "sourceChannelId": "UCDylnpLJWDj2gKWujjwap9w",
        "sourceChannelTitle": "StudioBinder Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/3ew1FTNK4K0/hqdefault.jpg",
        "durationSec": 400
      },
      {
        "youtubeVideoId": "Y5S4PyBR364",
        "title": "How Good Filmmaking Brings a Script to Life",
        "sourceChannelId": "UCErSSa3CaP_GJxmFpdjG9Jw",
        "sourceChannelTitle": "Lessons from the Screenplay",
        "thumbnailUrl": "https://i.ytimg.com/vi/Y5S4PyBR364/hqdefault.jpg",
        "durationSec": 993
      },
      {
        "youtubeVideoId": "KbQVhxtbCso",
        "title": "It’s dirtier than Star Wars",
        "sourceChannelId": "UCzjbia0NqUsSL1_-loJihMg",
        "sourceChannelTitle": "CinemaStix",
        "thumbnailUrl": "https://i.ytimg.com/vi/KbQVhxtbCso/hqdefault.jpg",
        "durationSec": 566
      },
      {
        "youtubeVideoId": "2qZjAnUqZBM",
        "title": "Tolkien's Secret Ingredient To Worldbuilding",
        "sourceChannelId": "UCuPgdqQKpq4T4zeqmTelnFg",
        "sourceChannelTitle": "kaptainkristian",
        "thumbnailUrl": "https://i.ytimg.com/vi/2qZjAnUqZBM/hqdefault.jpg",
        "durationSec": 601
      },
      {
        "youtubeVideoId": "taRU6iMQrhY",
        "title": "How to (and Not to) Show Panic Attacks On-Screen",
        "sourceChannelId": "UCWTFGPpNQ0Ms6afXhaWDiRw",
        "sourceChannelTitle": "Now You See It",
        "thumbnailUrl": "https://i.ytimg.com/vi/taRU6iMQrhY/hqdefault.jpg",
        "durationSec": 432
      },
      {
        "youtubeVideoId": "XUmgIQIpg-E",
        "title": "The Art World Couldn't Understand William Blake",
        "sourceChannelId": "UCJkMlOu7faDgqh4PfzbpLdg",
        "sourceChannelTitle": "Nerdwriter1",
        "thumbnailUrl": "https://i.ytimg.com/vi/XUmgIQIpg-E/hqdefault.jpg",
        "durationSec": 679
      }
    ]
  },
  "fitness": {
    "categoryId": "fitness",
    "categoryName": "Fitness",
    "hue": 100,
    "builtAt": 1794338235193,
    "videos": [
      {
        "youtubeVideoId": "xVuvVmZdIpQ",
        "title": "How to maintain motivation for long-term goals",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/xVuvVmZdIpQ/hqdefault.jpg",
        "durationSec": 834
      },
      {
        "youtubeVideoId": "hzoaClKPAUs",
        "title": "The ONLY 2 DB Biceps Exercises You Need (NO, SERIOUSLY!)",
        "sourceChannelId": "UCe0TLA0EsQbE-MjuHXevj2A",
        "sourceChannelTitle": "ATHLEAN-X™",
        "thumbnailUrl": "https://i.ytimg.com/vi/hzoaClKPAUs/hqdefault.jpg",
        "durationSec": 260
      },
      {
        "youtubeVideoId": "dP5SxmMNjAE",
        "title": "Can You Really Get Fit With Just 1 Hour a Week?",
        "sourceChannelId": "UCZIIRX8rkNjVpP-oLMHpeDw",
        "sourceChannelTitle": "Calisthenicmovement",
        "thumbnailUrl": "https://i.ytimg.com/vi/dP5SxmMNjAE/hqdefault.jpg",
        "durationSec": 440
      },
      {
        "youtubeVideoId": "Dg26eIEgH50",
        "title": "[FREE Day 4]- Bored Easily Core & HIIT Cardio: Blended Exercises with No Equipment",
        "sourceChannelId": "UCiP6wD_tYlYLYh3agzbByWQ",
        "sourceChannelTitle": "FitnessBlender",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dg26eIEgH50/hqdefault.jpg",
        "durationSec": 1764
      },
      {
        "youtubeVideoId": "2dn-mcgyC8s",
        "title": "7 Minute Morning Meditation | Stillness to Start Your Day.",
        "sourceChannelId": "UCFKE7WVJfvaHW5q283SxchA",
        "sourceChannelTitle": "Yoga With Adriene",
        "thumbnailUrl": "https://i.ytimg.com/vi/2dn-mcgyC8s/hqdefault.jpg",
        "durationSec": 432
      },
      {
        "youtubeVideoId": "eP1AEH9P2XE",
        "title": "How to Turn a Bad Workout Into a GOOD One",
        "sourceChannelId": "UCadiU6WTKl65HUwEih1XLYg",
        "sourceChannelTitle": "PictureFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/eP1AEH9P2XE/hqdefault.jpg",
        "durationSec": 251
      },
      {
        "youtubeVideoId": "aCH0eUXFMk0",
        "title": "I Dressed Like a 1950s Man for a Week, Here's What Happened",
        "sourceChannelId": "UCKf0UqBiCQI4Ol0To9V0pKQ",
        "sourceChannelTitle": "Buff Dudes",
        "thumbnailUrl": "https://i.ytimg.com/vi/aCH0eUXFMk0/hqdefault.jpg",
        "durationSec": 1741
      },
      {
        "youtubeVideoId": "NDX4pSQZVYA",
        "title": "The ONLY Deep Squat Video You Need",
        "sourceChannelId": "UCM2ra7Od2jliHB9TLPKt76w",
        "sourceChannelTitle": "MovementbyDavid",
        "thumbnailUrl": "https://i.ytimg.com/vi/NDX4pSQZVYA/hqdefault.jpg",
        "durationSec": 483
      },
      {
        "youtubeVideoId": "j2xY50x-zr4",
        "title": "20 Min Full Body Workout with Dumbbell - At Home Workout",
        "sourceChannelId": "UCCgLoMYIyP0U56dEhEL1wXQ",
        "sourceChannelTitle": "Chloe Ting",
        "thumbnailUrl": "https://i.ytimg.com/vi/j2xY50x-zr4/hqdefault.jpg",
        "durationSec": 1219
      },
      {
        "youtubeVideoId": "H90XDZVHKHI",
        "title": "25 MIN BIRTH BALL EXERCISES (MadFit App Prenatal Program)",
        "sourceChannelId": "UCpQ34afVgk8cRQBjSJ1xuJQ",
        "sourceChannelTitle": "MadFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/H90XDZVHKHI/hqdefault.jpg",
        "durationSec": 1555
      },
      {
        "youtubeVideoId": "dQqezMeNspA",
        "title": "20 MIN SHANGHAI DANCE WORKOUT - all levels - happy, cute, fun, playful",
        "sourceChannelId": "UChVRfsT_ASBZk10o0An7Ucg",
        "sourceChannelTitle": "Pamela Reif",
        "thumbnailUrl": "https://i.ytimg.com/vi/dQqezMeNspA/hqdefault.jpg",
        "durationSec": 1271
      },
      {
        "youtubeVideoId": "QVJDTBX_8Po",
        "title": "The Perfect Calisthenics Back & Biceps Workout for Beginners & Advanced",
        "sourceChannelId": "UCgFItI58gEggW1-39DxjVbA",
        "sourceChannelTitle": "CALISTHENICS FAMILY",
        "thumbnailUrl": "https://i.ytimg.com/vi/QVJDTBX_8Po/hqdefault.jpg",
        "durationSec": 710
      },
      {
        "youtubeVideoId": "CoWcu2b498g",
        "title": "How to find your purpose",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/CoWcu2b498g/hqdefault.jpg",
        "durationSec": 899
      },
      {
        "youtubeVideoId": "GOxz6bLRMsk",
        "title": "Give Me 2 Dumbbells... I'll Build You a BIGGER Chest",
        "sourceChannelId": "UCe0TLA0EsQbE-MjuHXevj2A",
        "sourceChannelTitle": "ATHLEAN-X™",
        "thumbnailUrl": "https://i.ytimg.com/vi/GOxz6bLRMsk/hqdefault.jpg",
        "durationSec": 489
      },
      {
        "youtubeVideoId": "xGSLQ1ynZjQ",
        "title": "Community Discussion: You Questions Answered Video Response (Brian & Tasha)",
        "sourceChannelId": "UCiP6wD_tYlYLYh3agzbByWQ",
        "sourceChannelTitle": "FitnessBlender",
        "thumbnailUrl": "https://i.ytimg.com/vi/xGSLQ1ynZjQ/hqdefault.jpg",
        "durationSec": 1031
      },
      {
        "youtubeVideoId": "E9AwOaDbclg",
        "title": "Halloween Yoga | A Red Riding Hood Adventure",
        "sourceChannelId": "UCFKE7WVJfvaHW5q283SxchA",
        "sourceChannelTitle": "Yoga With Adriene",
        "thumbnailUrl": "https://i.ytimg.com/vi/E9AwOaDbclg/hqdefault.jpg",
        "durationSec": 805
      },
      {
        "youtubeVideoId": "k0E1uGBFxv4",
        "title": "Berberine vs. Ozempic: What's the REAL Difference?",
        "sourceChannelId": "UCadiU6WTKl65HUwEih1XLYg",
        "sourceChannelTitle": "PictureFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/k0E1uGBFxv4/hqdefault.jpg",
        "durationSec": 217
      },
      {
        "youtubeVideoId": "uldb_2pKxvA",
        "title": "Full Day of Eating with the ONLY 20 Foods You Need to Get Shredded",
        "sourceChannelId": "UCKf0UqBiCQI4Ol0To9V0pKQ",
        "sourceChannelTitle": "Buff Dudes",
        "thumbnailUrl": "https://i.ytimg.com/vi/uldb_2pKxvA/hqdefault.jpg",
        "durationSec": 693
      },
      {
        "youtubeVideoId": "p-_Dfw5XbmI",
        "title": "15 Min Dumbbell Upper Body Workout (Back, Arms & Shoulders)",
        "sourceChannelId": "UCCgLoMYIyP0U56dEhEL1wXQ",
        "sourceChannelTitle": "Chloe Ting",
        "thumbnailUrl": "https://i.ytimg.com/vi/p-_Dfw5XbmI/hqdefault.jpg",
        "durationSec": 928
      },
      {
        "youtubeVideoId": "rbUl0AyD1Dk",
        "title": "30 DAY HOME WORKOUT CHALLENGE | FREE Full Body Workout Plan",
        "sourceChannelId": "UCpQ34afVgk8cRQBjSJ1xuJQ",
        "sourceChannelTitle": "MadFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/rbUl0AyD1Dk/hqdefault.jpg",
        "durationSec": 530
      },
      {
        "youtubeVideoId": "cwXDfR3AO9o",
        "title": "15 MIN TONED LEGS BEGINNER - Standing, focus: inner thigh, butt & calves I Chair + Book",
        "sourceChannelId": "UChVRfsT_ASBZk10o0An7Ucg",
        "sourceChannelTitle": "Pamela Reif",
        "thumbnailUrl": "https://i.ytimg.com/vi/cwXDfR3AO9o/hqdefault.jpg",
        "durationSec": 915
      },
      {
        "youtubeVideoId": "hR6R0oVl6_U",
        "title": "10 Calisthenics Exercises Every Gym Lifter MUST Do",
        "sourceChannelId": "UCgFItI58gEggW1-39DxjVbA",
        "sourceChannelTitle": "CALISTHENICS FAMILY",
        "thumbnailUrl": "https://i.ytimg.com/vi/hR6R0oVl6_U/hqdefault.jpg",
        "durationSec": 897
      },
      {
        "youtubeVideoId": "hzU-Zy1aAgM",
        "title": "Reducing procrastination",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/hzU-Zy1aAgM/hqdefault.jpg",
        "durationSec": 741
      },
      {
        "youtubeVideoId": "hRg-HRt0flU",
        "title": "It's Weird, But it Drops Body Fat Faster Than Dieting!",
        "sourceChannelId": "UCe0TLA0EsQbE-MjuHXevj2A",
        "sourceChannelTitle": "ATHLEAN-X™",
        "thumbnailUrl": "https://i.ytimg.com/vi/hRg-HRt0flU/hqdefault.jpg",
        "durationSec": 383
      },
      {
        "youtubeVideoId": "6QBodF49E1s",
        "title": "Energizing Cardio and Core: Low-Impact Exercises with Light Weights",
        "sourceChannelId": "UCiP6wD_tYlYLYh3agzbByWQ",
        "sourceChannelTitle": "FitnessBlender",
        "thumbnailUrl": "https://i.ytimg.com/vi/6QBodF49E1s/hqdefault.jpg",
        "durationSec": 1256
      },
      {
        "youtubeVideoId": "aA9EI3NKUS4",
        "title": "Find Your Flexibility | Full Body Yoga",
        "sourceChannelId": "UCFKE7WVJfvaHW5q283SxchA",
        "sourceChannelTitle": "Yoga With Adriene",
        "thumbnailUrl": "https://i.ytimg.com/vi/aA9EI3NKUS4/hqdefault.jpg",
        "durationSec": 1523
      },
      {
        "youtubeVideoId": "nuIkrzh7H9M",
        "title": "Some of My Worst Advice... DEBUNKED",
        "sourceChannelId": "UCadiU6WTKl65HUwEih1XLYg",
        "sourceChannelTitle": "PictureFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/nuIkrzh7H9M/hqdefault.jpg",
        "durationSec": 377
      },
      {
        "youtubeVideoId": "r4NRilxu4WA",
        "title": "The ONLY 20 Foods You Need to Get Shredded (Budget Grocery Haul)",
        "sourceChannelId": "UCKf0UqBiCQI4Ol0To9V0pKQ",
        "sourceChannelTitle": "Buff Dudes",
        "thumbnailUrl": "https://i.ytimg.com/vi/r4NRilxu4WA/hqdefault.jpg",
        "durationSec": 1210
      },
      {
        "youtubeVideoId": "pbCNzNhTOuI",
        "title": "10 Min Abs with Dumbbell - Feel the BURN (At Home Workout)",
        "sourceChannelId": "UCCgLoMYIyP0U56dEhEL1wXQ",
        "sourceChannelTitle": "Chloe Ting",
        "thumbnailUrl": "https://i.ytimg.com/vi/pbCNzNhTOuI/hqdefault.jpg",
        "durationSec": 621
      },
      {
        "youtubeVideoId": "OIpQ9jnUH1c",
        "title": "45 MIN FULL BODY STRENGTH + BALANCE WORKOUT (MadFit App Prenatal Program)",
        "sourceChannelId": "UCpQ34afVgk8cRQBjSJ1xuJQ",
        "sourceChannelTitle": "MadFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/OIpQ9jnUH1c/hqdefault.jpg",
        "durationSec": 2792
      },
      {
        "youtubeVideoId": "Qaytn3391Ao",
        "title": "10 MIN STRONG CORE - AB WORKOUT + WEIGHT - floor only, fun & special exercises",
        "sourceChannelId": "UChVRfsT_ASBZk10o0An7Ucg",
        "sourceChannelTitle": "Pamela Reif",
        "thumbnailUrl": "https://i.ytimg.com/vi/Qaytn3391Ao/hqdefault.jpg",
        "durationSec": 648
      },
      {
        "youtubeVideoId": "M3MnGJ-RCDk",
        "title": "Can’t Do a Muscle-Up? Try This 7 Minute Workout",
        "sourceChannelId": "UCgFItI58gEggW1-39DxjVbA",
        "sourceChannelTitle": "CALISTHENICS FAMILY",
        "thumbnailUrl": "https://i.ytimg.com/vi/M3MnGJ-RCDk/hqdefault.jpg",
        "durationSec": 694
      },
      {
        "youtubeVideoId": "pcvzzVeE4c8",
        "title": "How to share your thoughts clearly",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/pcvzzVeE4c8/hqdefault.jpg",
        "durationSec": 855
      },
      {
        "youtubeVideoId": "j_5du-KhOu4",
        "title": "Please STOP Gripping Your Dumbbells Like This!",
        "sourceChannelId": "UCe0TLA0EsQbE-MjuHXevj2A",
        "sourceChannelTitle": "ATHLEAN-X™",
        "thumbnailUrl": "https://i.ytimg.com/vi/j_5du-KhOu4/hqdefault.jpg",
        "durationSec": 218
      },
      {
        "youtubeVideoId": "WRIOtDa2tG0",
        "title": "Express Upper Body Active Recovery: Low-Intensity Cardio, Mobility & Stretching",
        "sourceChannelId": "UCiP6wD_tYlYLYh3agzbByWQ",
        "sourceChannelTitle": "FitnessBlender",
        "thumbnailUrl": "https://i.ytimg.com/vi/WRIOtDa2tG0/hqdefault.jpg",
        "durationSec": 1336
      },
      {
        "youtubeVideoId": "oqqcuzv0wJ4",
        "title": "Yoga for Healthy Feet | Strengthen, Stretch & Restore",
        "sourceChannelId": "UCFKE7WVJfvaHW5q283SxchA",
        "sourceChannelTitle": "Yoga With Adriene",
        "thumbnailUrl": "https://i.ytimg.com/vi/oqqcuzv0wJ4/hqdefault.jpg",
        "durationSec": 414
      },
      {
        "youtubeVideoId": "qdUg4vvDxGI",
        "title": "Is HMB Making a Comeback? (NEW RESEARCH)",
        "sourceChannelId": "UCadiU6WTKl65HUwEih1XLYg",
        "sourceChannelTitle": "PictureFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/qdUg4vvDxGI/hqdefault.jpg",
        "durationSec": 251
      },
      {
        "youtubeVideoId": "PKxOEoZGDZI",
        "title": "Im Broken...",
        "sourceChannelId": "UCKf0UqBiCQI4Ol0To9V0pKQ",
        "sourceChannelTitle": "Buff Dudes",
        "thumbnailUrl": "https://i.ytimg.com/vi/PKxOEoZGDZI/hqdefault.jpg",
        "durationSec": 743
      },
      {
        "youtubeVideoId": "q0TeIERTaSo",
        "title": "15 Min Full Body Dumbbell Workout At Home - Beginner to Intermediate",
        "sourceChannelId": "UCCgLoMYIyP0U56dEhEL1wXQ",
        "sourceChannelTitle": "Chloe Ting",
        "thumbnailUrl": "https://i.ytimg.com/vi/q0TeIERTaSo/hqdefault.jpg",
        "durationSec": 935
      },
      {
        "youtubeVideoId": "uMJ_HdFusWs",
        "title": "20 MIN CORE + BREATHING WORKOUT (MadFit App Prenatal Program)",
        "sourceChannelId": "UCpQ34afVgk8cRQBjSJ1xuJQ",
        "sourceChannelTitle": "MadFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/uMJ_HdFusWs/hqdefault.jpg",
        "durationSec": 1543
      },
      {
        "youtubeVideoId": "var0HjTAFhA",
        "title": "20 MIN RDL BOOTY - DEADLIFT VARIATIONS, Gym Style I Weight + Bench",
        "sourceChannelId": "UChVRfsT_ASBZk10o0An7Ucg",
        "sourceChannelTitle": "Pamela Reif",
        "thumbnailUrl": "https://i.ytimg.com/vi/var0HjTAFhA/hqdefault.jpg",
        "durationSec": 1170
      },
      {
        "youtubeVideoId": "KtCbv0U_e8A",
        "title": "How to feel grateful for life (without gaslighting yourself)",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/KtCbv0U_e8A/hqdefault.jpg",
        "durationSec": 573
      },
      {
        "youtubeVideoId": "X6LXOWzmUmY",
        "title": "The ONLY 2 Dumbbell Triceps Exercises You Need (NO, SERIOUSLY!)",
        "sourceChannelId": "UCe0TLA0EsQbE-MjuHXevj2A",
        "sourceChannelTitle": "ATHLEAN-X™",
        "thumbnailUrl": "https://i.ytimg.com/vi/X6LXOWzmUmY/hqdefault.jpg",
        "durationSec": 308
      },
      {
        "youtubeVideoId": "eQeNhnAHXP4",
        "title": "Yoga for Better Posture | Chest, Shoulders & Upper Back",
        "sourceChannelId": "UCFKE7WVJfvaHW5q283SxchA",
        "sourceChannelTitle": "Yoga With Adriene",
        "thumbnailUrl": "https://i.ytimg.com/vi/eQeNhnAHXP4/hqdefault.jpg",
        "durationSec": 1513
      },
      {
        "youtubeVideoId": "Hf_NBDid0d0",
        "title": "Stop Cutting and Bulking. Do This Instead.",
        "sourceChannelId": "UCadiU6WTKl65HUwEih1XLYg",
        "sourceChannelTitle": "PictureFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/Hf_NBDid0d0/hqdefault.jpg",
        "durationSec": 301
      },
      {
        "youtubeVideoId": "W--SWugwi_M",
        "title": "How to Train Like The Witcher | Bodyweight Workout",
        "sourceChannelId": "UCKf0UqBiCQI4Ol0To9V0pKQ",
        "sourceChannelTitle": "Buff Dudes",
        "thumbnailUrl": "https://i.ytimg.com/vi/W--SWugwi_M/hqdefault.jpg",
        "durationSec": 121
      },
      {
        "youtubeVideoId": "2_VXktb_2ag",
        "title": "20 Min Killer Full Body HIIT Workout - 2 Week Glow Up | Home Workout",
        "sourceChannelId": "UCCgLoMYIyP0U56dEhEL1wXQ",
        "sourceChannelTitle": "Chloe Ting",
        "thumbnailUrl": "https://i.ytimg.com/vi/2_VXktb_2ag/hqdefault.jpg",
        "durationSec": 1266
      },
      {
        "youtubeVideoId": "o9l63Vr0HRs",
        "title": "THE COMPLETE PREGNANCY WORKOUT PROGRAM | Workouts for Every Trimester",
        "sourceChannelId": "UCpQ34afVgk8cRQBjSJ1xuJQ",
        "sourceChannelTitle": "MadFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/o9l63Vr0HRs/hqdefault.jpg",
        "durationSec": 189
      },
      {
        "youtubeVideoId": "4Mn8O9szfKo",
        "title": "12 MIN PAM’S BDAY DANCE - Dua Lipa, Bruno Mars, Lizzo, Anne Marie",
        "sourceChannelId": "UChVRfsT_ASBZk10o0An7Ucg",
        "sourceChannelTitle": "Pamela Reif",
        "thumbnailUrl": "https://i.ytimg.com/vi/4Mn8O9szfKo/hqdefault.jpg",
        "durationSec": 781
      },
      {
        "youtubeVideoId": "RtLUWw0IViI",
        "title": "Patience can help you achieve your goals faster (if you understand it)",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/RtLUWw0IViI/hqdefault.jpg",
        "durationSec": 728
      }
    ]
  },
  "art": {
    "categoryId": "art",
    "categoryName": "Art",
    "hue": 330,
    "builtAt": 1794338235757,
    "videos": [
      {
        "youtubeVideoId": "qLzw6r2ORk0",
        "title": "Chromatic Drawing with Lane Brown",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/qLzw6r2ORk0/hqdefault.jpg",
        "durationSec": 6754
      },
      {
        "youtubeVideoId": "InAA1SRpGAo",
        "title": "This isn't goodbye. It's smell you later",
        "sourceChannelId": "UC3BCGz72VQcFdoBiZtKfOpg",
        "sourceChannelTitle": "[INSERT ART]",
        "thumbnailUrl": "https://i.ytimg.com/vi/InAA1SRpGAo/hqdefault.jpg",
        "durationSec": 810
      },
      {
        "youtubeVideoId": "Yb3BgyloqcU",
        "title": "Artists Turn Dog Breed Descriptions Into Characters",
        "sourceChannelId": "UCoal_hpPIPAnWlG-kWHLheA",
        "sourceChannelTitle": "Drawfee Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/Yb3BgyloqcU/hqdefault.jpg",
        "durationSec": 2178
      },
      {
        "youtubeVideoId": "-CfS7iOJmr8",
        "title": "The Intermediate Plateau - Draftsmen S4E08",
        "sourceChannelId": "UCfvIqreCk628yB9mp3e_ABQ",
        "sourceChannelTitle": "Draftsmen",
        "thumbnailUrl": "https://i.ytimg.com/vi/-CfS7iOJmr8/hqdefault.jpg",
        "durationSec": 3873
      },
      {
        "youtubeVideoId": "tzvG7qcVAxY",
        "title": "4 Pro Artists vs PENCIL ONLY art battle!",
        "sourceChannelId": "UCh-ArhaGOqFsBPrR2yQd42w",
        "sourceChannelTitle": "Ten Hundred",
        "thumbnailUrl": "https://i.ytimg.com/vi/tzvG7qcVAxY/hqdefault.jpg",
        "durationSec": 2062
      },
      {
        "youtubeVideoId": "w02M1vjrqZ0",
        "title": "Chris' Crusade - Free Conservation Contest Winner",
        "sourceChannelId": "UCvZe6ZCbF9xgbbbdkiodPKQ",
        "sourceChannelTitle": "Baumgartner Restoration",
        "thumbnailUrl": "https://i.ytimg.com/vi/w02M1vjrqZ0/hqdefault.jpg",
        "durationSec": 2079
      },
      {
        "youtubeVideoId": "wtzzVe_jCoc",
        "title": "Etsy Update: Commissions Are Open!",
        "sourceChannelId": "UCno-YPZ8BiLrN0Wbl8qICFA",
        "sourceChannelTitle": "markcrilley",
        "thumbnailUrl": "https://i.ytimg.com/vi/wtzzVe_jCoc/hqdefault.jpg",
        "durationSec": 229
      },
      {
        "youtubeVideoId": "kS2n12ATeMI",
        "title": "✨ Packing Orders & Chatting ✨",
        "sourceChannelId": "UCx-mMlEegnZ-SjWPS73Tgvw",
        "sourceChannelTitle": "Baylee Jae",
        "thumbnailUrl": "https://i.ytimg.com/vi/kS2n12ATeMI/hqdefault.jpg",
        "durationSec": 20364
      },
      {
        "youtubeVideoId": "3zqkmOKJy3c",
        "title": "For anyone ALSO in a weirdly specific rut",
        "sourceChannelId": "UCvcEBQ0K3UsQ8bzWKHKQmbw",
        "sourceChannelTitle": "struthless",
        "thumbnailUrl": "https://i.ytimg.com/vi/3zqkmOKJy3c/hqdefault.jpg",
        "durationSec": 1141
      },
      {
        "youtubeVideoId": "alI9_07IFqg",
        "title": "Blizzard + Riot character designer redesigns link from Zelda ocarina of time",
        "sourceChannelId": "UCmRm1xtLIpBhuWjTyD411pA",
        "sourceChannelTitle": "Trent Kaniuga",
        "thumbnailUrl": "https://i.ytimg.com/vi/alI9_07IFqg/hqdefault.jpg",
        "durationSec": 693
      },
      {
        "youtubeVideoId": "AoL4cD93Shw",
        "title": "I Filmed 6 Months of Videos in a Week! · Bulk-Filming (because I'm pregnant!)",
        "sourceChannelId": "UCLcxo0ysMP27XTiRKqrdASg",
        "sourceChannelTitle": "Minnie Small",
        "thumbnailUrl": "https://i.ytimg.com/vi/AoL4cD93Shw/hqdefault.jpg",
        "durationSec": 1889
      },
      {
        "youtubeVideoId": "zo-kwu5NGOE",
        "title": "Colored Pencil Realism with ONLY 3 Colors *5 Pencils*",
        "sourceChannelId": "UCSl51TSNCxLQJqLTQp0B6Cg",
        "sourceChannelTitle": "Kirsty Partridge Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/zo-kwu5NGOE/hqdefault.jpg",
        "durationSec": 1388
      },
      {
        "youtubeVideoId": "sTuD_8UD7Kg",
        "title": "The Art School Advice I Wish I Had Before Going Into Debt",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/sTuD_8UD7Kg/hqdefault.jpg",
        "durationSec": 4082
      },
      {
        "youtubeVideoId": "h7TCCPboS7c",
        "title": "We Made Our Own ORIGINAL Pokemon!",
        "sourceChannelId": "UC3BCGz72VQcFdoBiZtKfOpg",
        "sourceChannelTitle": "[INSERT ART]",
        "thumbnailUrl": "https://i.ytimg.com/vi/h7TCCPboS7c/hqdefault.jpg",
        "durationSec": 737
      },
      {
        "youtubeVideoId": "o9uewrsg_FY",
        "title": "Putting Cartoon Characters in JAIL in This FREE Drawing Game",
        "sourceChannelId": "UCoal_hpPIPAnWlG-kWHLheA",
        "sourceChannelTitle": "Drawfee Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/o9uewrsg_FY/hqdefault.jpg",
        "durationSec": 2648
      },
      {
        "youtubeVideoId": "YO5axY8wHGk",
        "title": "How to Learn Color - Draftsmen S4E07",
        "sourceChannelId": "UCfvIqreCk628yB9mp3e_ABQ",
        "sourceChannelTitle": "Draftsmen",
        "thumbnailUrl": "https://i.ytimg.com/vi/YO5axY8wHGk/hqdefault.jpg",
        "durationSec": 6681
      },
      {
        "youtubeVideoId": "CSNhgaw3tcg",
        "title": "The tool merch companies don't want you to have.",
        "sourceChannelId": "UCh-ArhaGOqFsBPrR2yQd42w",
        "sourceChannelTitle": "Ten Hundred",
        "thumbnailUrl": "https://i.ytimg.com/vi/CSNhgaw3tcg/hqdefault.jpg",
        "durationSec": 1873
      },
      {
        "youtubeVideoId": "HxLRqJv3wNg",
        "title": "The Art of Science",
        "sourceChannelId": "UCvZe6ZCbF9xgbbbdkiodPKQ",
        "sourceChannelTitle": "Baumgartner Restoration",
        "thumbnailUrl": "https://i.ytimg.com/vi/HxLRqJv3wNg/hqdefault.jpg",
        "durationSec": 1335
      },
      {
        "youtubeVideoId": "KpZfki9CFoc",
        "title": "Etsy Update: Commissions Now Open + New Original Art",
        "sourceChannelId": "UCno-YPZ8BiLrN0Wbl8qICFA",
        "sourceChannelTitle": "markcrilley",
        "thumbnailUrl": "https://i.ytimg.com/vi/KpZfki9CFoc/hqdefault.jpg",
        "durationSec": 182
      },
      {
        "youtubeVideoId": "YRncWBLOst0",
        "title": "Making My Halloween Costume ✨ Zelda Switch 2 ✨ Shop Prep",
        "sourceChannelId": "UCx-mMlEegnZ-SjWPS73Tgvw",
        "sourceChannelTitle": "Baylee Jae",
        "thumbnailUrl": "https://i.ytimg.com/vi/YRncWBLOst0/hqdefault.jpg",
        "durationSec": 4303
      },
      {
        "youtubeVideoId": "aLPrNSFLb2U",
        "title": "The Subtle Art of Normalising Dystopia",
        "sourceChannelId": "UCvcEBQ0K3UsQ8bzWKHKQmbw",
        "sourceChannelTitle": "struthless",
        "thumbnailUrl": "https://i.ytimg.com/vi/aLPrNSFLb2U/hqdefault.jpg",
        "durationSec": 3069
      },
      {
        "youtubeVideoId": "OioegWLBlS0",
        "title": "The Hidden Details in the New Link Redesign + STYLE analysis",
        "sourceChannelId": "UCmRm1xtLIpBhuWjTyD411pA",
        "sourceChannelTitle": "Trent Kaniuga",
        "thumbnailUrl": "https://i.ytimg.com/vi/OioegWLBlS0/hqdefault.jpg",
        "durationSec": 585
      },
      {
        "youtubeVideoId": "rELxufvhKJo",
        "title": "Everything I've Learned Running an Online Art Shop · What I Wish I Knew When I Started Selling",
        "sourceChannelId": "UCLcxo0ysMP27XTiRKqrdASg",
        "sourceChannelTitle": "Minnie Small",
        "thumbnailUrl": "https://i.ytimg.com/vi/rELxufvhKJo/hqdefault.jpg",
        "durationSec": 864
      },
      {
        "youtubeVideoId": "W74JgVN5rKw",
        "title": "The Colored Pencil Layering Method I Wish I'd Known Years Ago",
        "sourceChannelId": "UCSl51TSNCxLQJqLTQp0B6Cg",
        "sourceChannelTitle": "Kirsty Partridge Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/W74JgVN5rKw/hqdefault.jpg",
        "durationSec": 1446
      },
      {
        "youtubeVideoId": "y5Yy7pQacAY",
        "title": "No Erasing or Zooming! Drawing a Character Straight from Imagination",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/y5Yy7pQacAY/hqdefault.jpg",
        "durationSec": 7282
      },
      {
        "youtubeVideoId": "ISMZzNHjnf4",
        "title": "Turning MUSIC GENRES into ORIGINAL CHARACTERS",
        "sourceChannelId": "UC3BCGz72VQcFdoBiZtKfOpg",
        "sourceChannelTitle": "[INSERT ART]",
        "thumbnailUrl": "https://i.ytimg.com/vi/ISMZzNHjnf4/hqdefault.jpg",
        "durationSec": 474
      },
      {
        "youtubeVideoId": "VE3gIgdYG5A",
        "title": "Drawing Wholesome Versions of Horror Movie Monsters",
        "sourceChannelId": "UCoal_hpPIPAnWlG-kWHLheA",
        "sourceChannelTitle": "Drawfee Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/VE3gIgdYG5A/hqdefault.jpg",
        "durationSec": 2487
      },
      {
        "youtubeVideoId": "xjXqmNqukEY",
        "title": "Draftsmen LIVE Q&A",
        "sourceChannelId": "UCfvIqreCk628yB9mp3e_ABQ",
        "sourceChannelTitle": "Draftsmen",
        "thumbnailUrl": "https://i.ytimg.com/vi/xjXqmNqukEY/hqdefault.jpg",
        "durationSec": 5994
      },
      {
        "youtubeVideoId": "JLhhXQ0qYz8",
        "title": "I Battle 3 Artists to Redesign Movie Posters!",
        "sourceChannelId": "UCh-ArhaGOqFsBPrR2yQd42w",
        "sourceChannelTitle": "Ten Hundred",
        "thumbnailUrl": "https://i.ytimg.com/vi/JLhhXQ0qYz8/hqdefault.jpg",
        "durationSec": 2068
      },
      {
        "youtubeVideoId": "2N8j6slomko",
        "title": "The Fourth Miracle - Epilogue",
        "sourceChannelId": "UCvZe6ZCbF9xgbbbdkiodPKQ",
        "sourceChannelTitle": "Baumgartner Restoration",
        "thumbnailUrl": "https://i.ytimg.com/vi/2N8j6slomko/hqdefault.jpg",
        "durationSec": 1789
      },
      {
        "youtubeVideoId": "z4L3Gd76xaE",
        "title": "Commissions Are Open! Get an Original Work of Art from Me",
        "sourceChannelId": "UCno-YPZ8BiLrN0Wbl8qICFA",
        "sourceChannelTitle": "markcrilley",
        "thumbnailUrl": "https://i.ytimg.com/vi/z4L3Gd76xaE/hqdefault.jpg",
        "durationSec": 148
      },
      {
        "youtubeVideoId": "fUlIDtIDOKs",
        "title": "✨ Assembling Bundles & Chatting ✨ Shop Update Nov 4th 12pm MDT",
        "sourceChannelId": "UCx-mMlEegnZ-SjWPS73Tgvw",
        "sourceChannelTitle": "Baylee Jae",
        "thumbnailUrl": "https://i.ytimg.com/vi/fUlIDtIDOKs/hqdefault.jpg",
        "durationSec": 34138
      },
      {
        "youtubeVideoId": "XJa7sE5Q1QA",
        "title": "Journalling but make it punk",
        "sourceChannelId": "UCvcEBQ0K3UsQ8bzWKHKQmbw",
        "sourceChannelTitle": "struthless",
        "thumbnailUrl": "https://i.ytimg.com/vi/XJa7sE5Q1QA/hqdefault.jpg",
        "durationSec": 1196
      },
      {
        "youtubeVideoId": "HfHW53KY2po",
        "title": "YOU'RE HIRED to Paint A Hearthstone Card   What Happens Next?",
        "sourceChannelId": "UCmRm1xtLIpBhuWjTyD411pA",
        "sourceChannelTitle": "Trent Kaniuga",
        "thumbnailUrl": "https://i.ytimg.com/vi/HfHW53KY2po/hqdefault.jpg",
        "durationSec": 640
      },
      {
        "youtubeVideoId": "08d2-yedTWA",
        "title": "Small Space Storage for Art and Filming Supplies · Minimal Studio Tour",
        "sourceChannelId": "UCLcxo0ysMP27XTiRKqrdASg",
        "sourceChannelTitle": "Minnie Small",
        "thumbnailUrl": "https://i.ytimg.com/vi/08d2-yedTWA/hqdefault.jpg",
        "durationSec": 221
      },
      {
        "youtubeVideoId": "1gRO_hedmv4",
        "title": "This Colored Pencil Secret Makes Realism Easy (even for beginners)",
        "sourceChannelId": "UCSl51TSNCxLQJqLTQp0B6Cg",
        "sourceChannelTitle": "Kirsty Partridge Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/1gRO_hedmv4/hqdefault.jpg",
        "durationSec": 559
      },
      {
        "youtubeVideoId": "CrYJxU9st8Y",
        "title": "Myths in Charcoal: Patrick Jones and Grafit Studio Charcoal and Pencil Demo",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/CrYJxU9st8Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-2KUCMYsQsI",
        "title": "Turning RANDOM ANIMALS into DRAGONS part 2!",
        "sourceChannelId": "UC3BCGz72VQcFdoBiZtKfOpg",
        "sourceChannelTitle": "[INSERT ART]",
        "thumbnailUrl": "https://i.ytimg.com/vi/-2KUCMYsQsI/hqdefault.jpg",
        "durationSec": 749
      },
      {
        "youtubeVideoId": "V2Q6m8Pv6wM",
        "title": "Drawfee But My Coworkers Don't Know the Drawing Prompt",
        "sourceChannelId": "UCoal_hpPIPAnWlG-kWHLheA",
        "sourceChannelTitle": "Drawfee Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/V2Q6m8Pv6wM/hqdefault.jpg",
        "durationSec": 1915
      },
      {
        "youtubeVideoId": "Dgf66X_dRVI",
        "title": "State of the Art Industry - Draftsmen S04E06",
        "sourceChannelId": "UCfvIqreCk628yB9mp3e_ABQ",
        "sourceChannelTitle": "Draftsmen",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dgf66X_dRVI/hqdefault.jpg",
        "durationSec": 4466
      },
      {
        "youtubeVideoId": "PAne696jokM",
        "title": "I Challenge 3 Artists to a 1 COLOR Art Battle!",
        "sourceChannelId": "UCh-ArhaGOqFsBPrR2yQd42w",
        "sourceChannelTitle": "Ten Hundred",
        "thumbnailUrl": "https://i.ytimg.com/vi/PAne696jokM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "r5q5Db64EHo",
        "title": "The Fourth Miracle Part 4 of 4 San Gennaro Comes Alive",
        "sourceChannelId": "UCvZe6ZCbF9xgbbbdkiodPKQ",
        "sourceChannelTitle": "Baumgartner Restoration",
        "thumbnailUrl": "https://i.ytimg.com/vi/r5q5Db64EHo/hqdefault.jpg",
        "durationSec": 1917
      },
      {
        "youtubeVideoId": "OlryHR_l19E",
        "title": "COMMISSIONS UPDATE + My Latest Etsy Art",
        "sourceChannelId": "UCno-YPZ8BiLrN0Wbl8qICFA",
        "sourceChannelTitle": "markcrilley",
        "thumbnailUrl": "https://i.ytimg.com/vi/OlryHR_l19E/hqdefault.jpg",
        "durationSec": 340
      },
      {
        "youtubeVideoId": "GE4fmuyA85Y",
        "title": "It's All Coming Together – Prepping for a Shop Update",
        "sourceChannelId": "UCx-mMlEegnZ-SjWPS73Tgvw",
        "sourceChannelTitle": "Baylee Jae",
        "thumbnailUrl": "https://i.ytimg.com/vi/GE4fmuyA85Y/hqdefault.jpg",
        "durationSec": 4604
      },
      {
        "youtubeVideoId": "11FIIPmdpHo",
        "title": "The Al question no one wants to ask",
        "sourceChannelId": "UCvcEBQ0K3UsQ8bzWKHKQmbw",
        "sourceChannelTitle": "struthless",
        "thumbnailUrl": "https://i.ytimg.com/vi/11FIIPmdpHo/hqdefault.jpg",
        "durationSec": 3575
      },
      {
        "youtubeVideoId": "hESa-TDTJEs",
        "title": "Gothic Remake changed how I think about Game Development",
        "sourceChannelId": "UCmRm1xtLIpBhuWjTyD411pA",
        "sourceChannelTitle": "Trent Kaniuga",
        "thumbnailUrl": "https://i.ytimg.com/vi/hESa-TDTJEs/hqdefault.jpg",
        "durationSec": 942
      },
      {
        "youtubeVideoId": "Isjn9u57Suc",
        "title": "Easy, Pro Photos of Your Art · How To Make Your Own Mockups and Listing Photos for Art Prints",
        "sourceChannelId": "UCLcxo0ysMP27XTiRKqrdASg",
        "sourceChannelTitle": "Minnie Small",
        "thumbnailUrl": "https://i.ytimg.com/vi/Isjn9u57Suc/hqdefault.jpg",
        "durationSec": 1015
      },
      {
        "youtubeVideoId": "89-gBfVF18s",
        "title": "Coloured Pencil Portrait LIVE Drawalong- Fun, Colourful Sketch!",
        "sourceChannelId": "UCSl51TSNCxLQJqLTQp0B6Cg",
        "sourceChannelTitle": "Kirsty Partridge Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/89-gBfVF18s/hqdefault.jpg",
        "durationSec": 5981
      },
      {
        "youtubeVideoId": "NIXL6uEMFJk",
        "title": "How to Shade Dark Skin, Highlights, and More Value Questions - Stanswers #5",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/NIXL6uEMFJk/hqdefault.jpg",
        "durationSec": 1433
      },
      {
        "youtubeVideoId": "ceKjmYH1D8k",
        "title": "Random Character Style Swap Challenge!",
        "sourceChannelId": "UC3BCGz72VQcFdoBiZtKfOpg",
        "sourceChannelTitle": "[INSERT ART]",
        "thumbnailUrl": "https://i.ytimg.com/vi/ceKjmYH1D8k/hqdefault.jpg",
        "durationSec": 375
      }
    ]
  },
  "design": {
    "categoryId": "design",
    "categoryName": "Design",
    "hue": 45,
    "builtAt": 1794338236111,
    "videos": [
      {
        "youtubeVideoId": "yUzgb0RYpfc",
        "title": "Small Apartment Transformed With Clever Storage and Colour, Poland 58sqm/624sqft",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/yUzgb0RYpfc/hqdefault.jpg",
        "durationSec": 579
      },
      {
        "youtubeVideoId": "MYM0Q_6sbEc",
        "title": "Inside the Coziest Celebrity Homes | Architectural Digest",
        "sourceChannelId": "UC0k238zFx-Z8xFH0sxCrPJg",
        "sourceChannelTitle": "Architectural Digest",
        "thumbnailUrl": "https://i.ytimg.com/vi/MYM0Q_6sbEc/hqdefault.jpg",
        "durationSec": 8578
      },
      {
        "youtubeVideoId": "UsmyL3K7Uvk",
        "title": "A Desert Home Built From the Desert Itself (House Tour)",
        "sourceChannelId": "UCgxg48_pay4R67s-7WOgWFA",
        "sourceChannelTitle": "The Local Project",
        "thumbnailUrl": "https://i.ytimg.com/vi/UsmyL3K7Uvk/hqdefault.jpg",
        "durationSec": 467
      },
      {
        "youtubeVideoId": "Re-60bdrzow",
        "title": "Nobody wanted underground fixer-upper. He turned it into sun-warmed gem",
        "sourceChannelId": "UCDsElQQt_gCZ9LgnW-7v-cQ",
        "sourceChannelTitle": "Kirsten Dirksen",
        "thumbnailUrl": "https://i.ytimg.com/vi/Re-60bdrzow/hqdefault.jpg",
        "durationSec": 1553
      },
      {
        "youtubeVideoId": "fkcW4VqJqbw",
        "title": "Why Your Brand Is Forgettable (And How to Fix It)",
        "sourceChannelId": "UC-b3c7kxa5vU-bnmaROgvog",
        "sourceChannelTitle": "The Futur",
        "thumbnailUrl": "https://i.ytimg.com/vi/fkcW4VqJqbw/hqdefault.jpg",
        "durationSec": 3259
      },
      {
        "youtubeVideoId": "fyYo1jxj5Io",
        "title": "The Greatest Empire was built on This Secret...",
        "sourceChannelId": "UCJ_2hNMxOzNjviJBiLWHMqg",
        "sourceChannelTitle": "DamiLee",
        "thumbnailUrl": "https://i.ytimg.com/vi/fyYo1jxj5Io/hqdefault.jpg",
        "durationSec": 1399
      },
      {
        "youtubeVideoId": "EJgVjxM4Rno",
        "title": "Why Safer Streets Keep Losing to Fire Trucks",
        "sourceChannelId": "UCYAm24PkejQR2xMgJgn7xwg",
        "sourceChannelTitle": "Stewart Hicks",
        "thumbnailUrl": "https://i.ytimg.com/vi/EJgVjxM4Rno/hqdefault.jpg",
        "durationSec": 656
      },
      {
        "youtubeVideoId": "rUsO5hIqIME",
        "title": "HOW TO SAVE WEBSITES FOR OFFLINE USE |TECH SCOUT TIPS|",
        "sourceChannelId": "UC_kjXjYwOlMZeLMkAanRn3g",
        "sourceChannelTitle": "Design Theory",
        "thumbnailUrl": "https://i.ytimg.com/vi/rUsO5hIqIME/hqdefault.jpg",
        "durationSec": 441
      },
      {
        "youtubeVideoId": "EIpN8NPczqc",
        "title": "Font Piracy: Addendum",
        "sourceChannelId": "UCSb-xYOELhIqVr2n9s-b_4w",
        "sourceChannelTitle": "Linus Boman",
        "thumbnailUrl": "https://i.ytimg.com/vi/EIpN8NPczqc/hqdefault.jpg",
        "durationSec": 191
      },
      {
        "youtubeVideoId": "uZZ_Dz9sPTA",
        "title": "A Magical Cabin Hidden Amongst the Trees",
        "sourceChannelId": "UCoNTMWgGuXtGPLv9UeJZwBw",
        "sourceChannelTitle": "Living Big In A Tiny House",
        "thumbnailUrl": "https://i.ytimg.com/vi/uZZ_Dz9sPTA/hqdefault.jpg",
        "durationSec": 1319
      },
      {
        "youtubeVideoId": "Ebn1Ju6fjEo",
        "title": "Mori AI home robot “resembles a contemporary table lamp”",
        "sourceChannelId": "UCsWG9ANbrmgR0z-eFk_A3YQ",
        "sourceChannelTitle": "Dezeen",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ebn1Ju6fjEo/hqdefault.jpg",
        "durationSec": 102
      },
      {
        "youtubeVideoId": "WtpkjcbdvF8",
        "title": "In Conversation with Fadaa at Amman Design Week 2026",
        "sourceChannelId": "UC3r_kdJocuqtDYb2GgM42Ng",
        "sourceChannelTitle": "ArchDaily",
        "thumbnailUrl": "https://i.ytimg.com/vi/WtpkjcbdvF8/hqdefault.jpg",
        "durationSec": 1037
      },
      {
        "youtubeVideoId": "-Dcz_fJdL80",
        "title": "new ritulas, old instincts – room for utopias podcast (episode 05)",
        "sourceChannelId": "UCv6JHGYnS74viHnZ-6zR2Jg",
        "sourceChannelTitle": "designboom",
        "thumbnailUrl": "https://i.ytimg.com/vi/-Dcz_fJdL80/hqdefault.jpg",
        "durationSec": 1790
      },
      {
        "youtubeVideoId": "bKmUQcFlDPI",
        "title": "How One Man DIY'd His Entire NYC Apartment | Small Spaces | Architectural Digest",
        "sourceChannelId": "UC0k238zFx-Z8xFH0sxCrPJg",
        "sourceChannelTitle": "Architectural Digest",
        "thumbnailUrl": "https://i.ytimg.com/vi/bKmUQcFlDPI/hqdefault.jpg",
        "durationSec": 519
      },
      {
        "youtubeVideoId": "2z2W4NvoJXk",
        "title": "Architect Designs a Hilltop Home Inspired by His Childhood in Italy (House Tour)",
        "sourceChannelId": "UCgxg48_pay4R67s-7WOgWFA",
        "sourceChannelTitle": "The Local Project",
        "thumbnailUrl": "https://i.ytimg.com/vi/2z2W4NvoJXk/hqdefault.jpg",
        "durationSec": 429
      },
      {
        "youtubeVideoId": "aITGbdW-67Q",
        "title": "Mocked for his cabin, welder builds 160-foot Castle alone, has last laugh",
        "sourceChannelId": "UCDsElQQt_gCZ9LgnW-7v-cQ",
        "sourceChannelTitle": "Kirsten Dirksen",
        "thumbnailUrl": "https://i.ytimg.com/vi/aITGbdW-67Q/hqdefault.jpg",
        "durationSec": 1403
      },
      {
        "youtubeVideoId": "WrehiIId62U",
        "title": "The Painful Truth About Being a “Jack of All Trades”",
        "sourceChannelId": "UC-b3c7kxa5vU-bnmaROgvog",
        "sourceChannelTitle": "The Futur",
        "thumbnailUrl": "https://i.ytimg.com/vi/WrehiIId62U/hqdefault.jpg",
        "durationSec": 3053
      },
      {
        "youtubeVideoId": "TPTtcV3qJ4U",
        "title": "Is Chongqing REALLY a Cyberpunk City?",
        "sourceChannelId": "UCJ_2hNMxOzNjviJBiLWHMqg",
        "sourceChannelTitle": "DamiLee",
        "thumbnailUrl": "https://i.ytimg.com/vi/TPTtcV3qJ4U/hqdefault.jpg",
        "durationSec": 1406
      },
      {
        "youtubeVideoId": "RjJO-fCWR54",
        "title": "The Problem With Colorful Houses",
        "sourceChannelId": "UCYAm24PkejQR2xMgJgn7xwg",
        "sourceChannelTitle": "Stewart Hicks",
        "thumbnailUrl": "https://i.ytimg.com/vi/RjJO-fCWR54/hqdefault.jpg",
        "durationSec": 664
      },
      {
        "youtubeVideoId": "fCKaDR1rNgk",
        "title": "MOVING CAR ANIMATION TUTORIAL",
        "sourceChannelId": "UC_kjXjYwOlMZeLMkAanRn3g",
        "sourceChannelTitle": "Design Theory",
        "thumbnailUrl": "https://i.ytimg.com/vi/fCKaDR1rNgk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "altfwRMXG4A",
        "title": "The secret history of font piracy",
        "sourceChannelId": "UCSb-xYOELhIqVr2n9s-b_4w",
        "sourceChannelTitle": "Linus Boman",
        "thumbnailUrl": "https://i.ytimg.com/vi/altfwRMXG4A/hqdefault.jpg",
        "durationSec": 1286
      },
      {
        "youtubeVideoId": "6QbQb-jKA-M",
        "title": "At Just 23, She Built a Gorgeous Tiny Home Inspired by Nature & Permaculture",
        "sourceChannelId": "UCoNTMWgGuXtGPLv9UeJZwBw",
        "sourceChannelTitle": "Living Big In A Tiny House",
        "thumbnailUrl": "https://i.ytimg.com/vi/6QbQb-jKA-M/hqdefault.jpg",
        "durationSec": 1363
      },
      {
        "youtubeVideoId": "3Mn6YnuH_AI",
        "title": "Concept car that transforms from SUV to pickup is \"a symbol of freedom\" says Fiat CEO",
        "sourceChannelId": "UCsWG9ANbrmgR0z-eFk_A3YQ",
        "sourceChannelTitle": "Dezeen",
        "thumbnailUrl": "https://i.ytimg.com/vi/3Mn6YnuH_AI/hqdefault.jpg",
        "durationSec": 114
      },
      {
        "youtubeVideoId": "_7S4pG9mMmM",
        "title": "Why Light is The Most Important Material in Architecture",
        "sourceChannelId": "UC3r_kdJocuqtDYb2GgM42Ng",
        "sourceChannelTitle": "ArchDaily",
        "thumbnailUrl": "https://i.ytimg.com/vi/_7S4pG9mMmM/hqdefault.jpg",
        "durationSec": 696
      },
      {
        "youtubeVideoId": "liO-zVzN4Cs",
        "title": "freedom from style –l room for utopias podcast (episode 06)",
        "sourceChannelId": "UCv6JHGYnS74viHnZ-6zR2Jg",
        "sourceChannelTitle": "designboom",
        "thumbnailUrl": "https://i.ytimg.com/vi/liO-zVzN4Cs/hqdefault.jpg",
        "durationSec": 2678
      },
      {
        "youtubeVideoId": "dlnH0uVAEHk",
        "title": "Inside NBA Star Jaylen Brown's Sleek Boston Penthouse | Open Door | Architectural Digest",
        "sourceChannelId": "UC0k238zFx-Z8xFH0sxCrPJg",
        "sourceChannelTitle": "Architectural Digest",
        "thumbnailUrl": "https://i.ytimg.com/vi/dlnH0uVAEHk/hqdefault.jpg",
        "durationSec": 670
      },
      {
        "youtubeVideoId": "Z3AlPMj6mIc",
        "title": "How to Design a Home Step by Step with Commune Design (Design Masterclass)",
        "sourceChannelId": "UCgxg48_pay4R67s-7WOgWFA",
        "sourceChannelTitle": "The Local Project",
        "thumbnailUrl": "https://i.ytimg.com/vi/Z3AlPMj6mIc/hqdefault.jpg",
        "durationSec": 573
      },
      {
        "youtubeVideoId": "R4WxHWQ-i_g",
        "title": "Three-sided greenhouse house masters heat & cold in tranquil Nordic village",
        "sourceChannelId": "UCDsElQQt_gCZ9LgnW-7v-cQ",
        "sourceChannelTitle": "Kirsten Dirksen",
        "thumbnailUrl": "https://i.ytimg.com/vi/R4WxHWQ-i_g/hqdefault.jpg",
        "durationSec": 1058
      },
      {
        "youtubeVideoId": "LEVGLXBzghc",
        "title": "Better Work Won’t Get You More Clients. This Will.",
        "sourceChannelId": "UC-b3c7kxa5vU-bnmaROgvog",
        "sourceChannelTitle": "The Futur",
        "thumbnailUrl": "https://i.ytimg.com/vi/LEVGLXBzghc/hqdefault.jpg",
        "durationSec": 469
      },
      {
        "youtubeVideoId": "2JOmHYyQoO4",
        "title": "AI’s Newest Buildings Are Already Obsolete",
        "sourceChannelId": "UCYAm24PkejQR2xMgJgn7xwg",
        "sourceChannelTitle": "Stewart Hicks",
        "thumbnailUrl": "https://i.ytimg.com/vi/2JOmHYyQoO4/hqdefault.jpg",
        "durationSec": 665
      },
      {
        "youtubeVideoId": "ogH1NEJ1GUw",
        "title": "stream: new font just dropped.",
        "sourceChannelId": "UCSb-xYOELhIqVr2n9s-b_4w",
        "sourceChannelTitle": "Linus Boman",
        "thumbnailUrl": "https://i.ytimg.com/vi/ogH1NEJ1GUw/hqdefault.jpg",
        "durationSec": 4485
      },
      {
        "youtubeVideoId": "TPIbyvSf3qY",
        "title": "This SUPERSIZED Tiny House Makes Downsizing Feel Like an Upgrade",
        "sourceChannelId": "UCoNTMWgGuXtGPLv9UeJZwBw",
        "sourceChannelTitle": "Living Big In A Tiny House",
        "thumbnailUrl": "https://i.ytimg.com/vi/TPIbyvSf3qY/hqdefault.jpg",
        "durationSec": 1304
      },
      {
        "youtubeVideoId": "44PTbbnCVuE",
        "title": "\"Things start in really simple gestures\" says Es Devlin of her Design Museum retrospective",
        "sourceChannelId": "UCsWG9ANbrmgR0z-eFk_A3YQ",
        "sourceChannelTitle": "Dezeen",
        "thumbnailUrl": "https://i.ytimg.com/vi/44PTbbnCVuE/hqdefault.jpg",
        "durationSec": 240
      },
      {
        "youtubeVideoId": "pDG_clTIfVc",
        "title": "Jane Jacobs | The Woman Who Changed City Design Forever",
        "sourceChannelId": "UC3r_kdJocuqtDYb2GgM42Ng",
        "sourceChannelTitle": "ArchDaily",
        "thumbnailUrl": "https://i.ytimg.com/vi/pDG_clTIfVc/hqdefault.jpg",
        "durationSec": 562
      },
      {
        "youtubeVideoId": "jc_oBQdBgZ8",
        "title": "what people don't ask for – room for utopias podcast (episode 04)",
        "sourceChannelId": "UCv6JHGYnS74viHnZ-6zR2Jg",
        "sourceChannelTitle": "designboom",
        "thumbnailUrl": "https://i.ytimg.com/vi/jc_oBQdBgZ8/hqdefault.jpg",
        "durationSec": 2308
      },
      {
        "youtubeVideoId": "X8D6ZPz5eWc",
        "title": "How an Architect Turned a Basic White Box Into a Dream NYC Home | Architectural Digest",
        "sourceChannelId": "UC0k238zFx-Z8xFH0sxCrPJg",
        "sourceChannelTitle": "Architectural Digest",
        "thumbnailUrl": "https://i.ytimg.com/vi/X8D6ZPz5eWc/hqdefault.jpg",
        "durationSec": 746
      },
      {
        "youtubeVideoId": "g20cSkBc2XA",
        "title": "How to Style a Home with Custom Furniture and Art (Design Masterclass)",
        "sourceChannelId": "UCgxg48_pay4R67s-7WOgWFA",
        "sourceChannelTitle": "The Local Project",
        "thumbnailUrl": "https://i.ytimg.com/vi/g20cSkBc2XA/hqdefault.jpg",
        "durationSec": 352
      },
      {
        "youtubeVideoId": "pcHEMy7uN2Q",
        "title": "Couple's indoor-outdoor natural life: underground pipes, double stove & cork",
        "sourceChannelId": "UCDsElQQt_gCZ9LgnW-7v-cQ",
        "sourceChannelTitle": "Kirsten Dirksen",
        "thumbnailUrl": "https://i.ytimg.com/vi/pcHEMy7uN2Q/hqdefault.jpg",
        "durationSec": 938
      },
      {
        "youtubeVideoId": "EYXgfHNq6mo",
        "title": "How to Stand Out When Everyone Sells the Same Thing",
        "sourceChannelId": "UC-b3c7kxa5vU-bnmaROgvog",
        "sourceChannelTitle": "The Futur",
        "thumbnailUrl": "https://i.ytimg.com/vi/EYXgfHNq6mo/hqdefault.jpg",
        "durationSec": 639
      },
      {
        "youtubeVideoId": "7sfoLUumGnc",
        "title": "Why We Can’t Build Apartments Like This Anymore",
        "sourceChannelId": "UCYAm24PkejQR2xMgJgn7xwg",
        "sourceChannelTitle": "Stewart Hicks",
        "thumbnailUrl": "https://i.ytimg.com/vi/7sfoLUumGnc/hqdefault.jpg",
        "durationSec": 706
      },
      {
        "youtubeVideoId": "ISDVLuErJ3k",
        "title": "Animation Hot Girl character design  in adobe illustrator",
        "sourceChannelId": "UC_kjXjYwOlMZeLMkAanRn3g",
        "sourceChannelTitle": "Design Theory",
        "thumbnailUrl": "https://i.ytimg.com/vi/ISDVLuErJ3k/hqdefault.jpg",
        "durationSec": 728
      },
      {
        "youtubeVideoId": "JiJA5SHAwHs",
        "title": "Walmart's new $1 million logo",
        "sourceChannelId": "UCSb-xYOELhIqVr2n9s-b_4w",
        "sourceChannelTitle": "Linus Boman",
        "thumbnailUrl": "https://i.ytimg.com/vi/JiJA5SHAwHs/hqdefault.jpg",
        "durationSec": 533
      },
      {
        "youtubeVideoId": "kD9P2TjT0sk",
        "title": "Tiny House Meets Modular Design in This Stunning Modern Home",
        "sourceChannelId": "UCoNTMWgGuXtGPLv9UeJZwBw",
        "sourceChannelTitle": "Living Big In A Tiny House",
        "thumbnailUrl": "https://i.ytimg.com/vi/kD9P2TjT0sk/hqdefault.jpg",
        "durationSec": 1243
      },
      {
        "youtubeVideoId": "s-kMNm8Ob3U",
        "title": "Tuesday Labs debuts “droid butler” Voxel",
        "sourceChannelId": "UCsWG9ANbrmgR0z-eFk_A3YQ",
        "sourceChannelTitle": "Dezeen",
        "thumbnailUrl": "https://i.ytimg.com/vi/s-kMNm8Ob3U/hqdefault.jpg",
        "durationSec": 89
      },
      {
        "youtubeVideoId": "wmjwvYJzmhs",
        "title": "the architecture of togetherness – room for utopias podcast (episode 03)",
        "sourceChannelId": "UCv6JHGYnS74viHnZ-6zR2Jg",
        "sourceChannelTitle": "designboom",
        "thumbnailUrl": "https://i.ytimg.com/vi/wmjwvYJzmhs/hqdefault.jpg",
        "durationSec": 2669
      },
      {
        "youtubeVideoId": "wPX8KOAGJ6A",
        "title": "Inside a Legendary Stadium Carved Into an L.A. Hillside | Inside History | Architectural Digest",
        "sourceChannelId": "UC0k238zFx-Z8xFH0sxCrPJg",
        "sourceChannelTitle": "Architectural Digest",
        "thumbnailUrl": "https://i.ytimg.com/vi/wPX8KOAGJ6A/hqdefault.jpg",
        "durationSec": 1147
      },
      {
        "youtubeVideoId": "Vx40aviKhZE",
        "title": "Inside a Penthouse Where Architecture, Interior and River Become One (Penthouse Tour)",
        "sourceChannelId": "UCgxg48_pay4R67s-7WOgWFA",
        "sourceChannelTitle": "The Local Project",
        "thumbnailUrl": "https://i.ytimg.com/vi/Vx40aviKhZE/hqdefault.jpg",
        "durationSec": 365
      },
      {
        "youtubeVideoId": "NP_ugJHuY6w",
        "title": "He turned fixer-upper hidden in French village maze into foot-only oasis",
        "sourceChannelId": "UCDsElQQt_gCZ9LgnW-7v-cQ",
        "sourceChannelTitle": "Kirsten Dirksen",
        "thumbnailUrl": "https://i.ytimg.com/vi/NP_ugJHuY6w/hqdefault.jpg",
        "durationSec": 1216
      },
      {
        "youtubeVideoId": "jHIkiGJ1PxM",
        "title": "The Gross Reason Suburban Yards Had to Be This Big",
        "sourceChannelId": "UCYAm24PkejQR2xMgJgn7xwg",
        "sourceChannelTitle": "Stewart Hicks",
        "thumbnailUrl": "https://i.ytimg.com/vi/jHIkiGJ1PxM/hqdefault.jpg",
        "durationSec": 773
      }
    ]
  },
  "learning": {
    "categoryId": "learning",
    "categoryName": "Learning",
    "hue": 235,
    "builtAt": 1794338236477,
    "videos": [
      {
        "youtubeVideoId": "l7-eiKWhRHo",
        "title": "Why your cold emails aren't paying off | Best of Luck",
        "sourceChannelId": "UCLXo7UDZvByw2ixzpQCufnA",
        "sourceChannelTitle": "Vox",
        "thumbnailUrl": "https://i.ytimg.com/vi/l7-eiKWhRHo/hqdefault.jpg",
        "durationSec": 2607
      },
      {
        "youtubeVideoId": "nBVuemyrMgE",
        "title": "When did humans start using salt? - Carolyn Beans",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/nBVuemyrMgE/hqdefault.jpg",
        "durationSec": 309
      },
      {
        "youtubeVideoId": "pTdvsfIMGes",
        "title": "How People Are Using AI to Grieve, Love and Connect | Jennifer Cearns | TED",
        "sourceChannelId": "UCAuUUnT6oDeKwE6v1NGQxug",
        "sourceChannelTitle": "TED",
        "thumbnailUrl": "https://i.ytimg.com/vi/pTdvsfIMGes/hqdefault.jpg",
        "durationSec": 841
      },
      {
        "youtubeVideoId": "rUiulWItECQ",
        "title": "Parity of permutations, impossible puzzles and the magical determinant",
        "sourceChannelId": "UC1_uAIS3r8Vu6JjXWvastJg",
        "sourceChannelTitle": "Mathologer",
        "thumbnailUrl": "https://i.ytimg.com/vi/rUiulWItECQ/hqdefault.jpg",
        "durationSec": 2336
      },
      {
        "youtubeVideoId": "Z9qScNdX0Q4",
        "title": "Civita: Why One of the Italy’s Most Visited Places Is Dying",
        "sourceChannelId": "UCTWKe1zATFV6d0o6oLS9sgw",
        "sourceChannelTitle": "Extremities",
        "thumbnailUrl": "https://i.ytimg.com/vi/Z9qScNdX0Q4/hqdefault.jpg",
        "durationSec": 1254
      },
      {
        "youtubeVideoId": "2KpNwcpAAd8",
        "title": "Why Studying Sloths Is Basically Impossible",
        "sourceChannelId": "UC176GAQozKKjhz62H8u9vQQ",
        "sourceChannelTitle": "Real Science",
        "thumbnailUrl": "https://i.ytimg.com/vi/2KpNwcpAAd8/hqdefault.jpg",
        "durationSec": 1030
      },
      {
        "youtubeVideoId": "EQr_eJOFy4Q",
        "title": "Crash Course World History Marathon • Full Series",
        "sourceChannelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        "sourceChannelTitle": "CrashCourse",
        "thumbnailUrl": "https://i.ytimg.com/vi/EQr_eJOFy4Q/hqdefault.jpg",
        "durationSec": 28099
      },
      {
        "youtubeVideoId": "n05Yu3UAI_o",
        "title": "My First Mistake as an Engineer",
        "sourceChannelId": "UCMOqf8ab-42UUQIdVoKwjlQ",
        "sourceChannelTitle": "Practical Engineering",
        "thumbnailUrl": "https://i.ytimg.com/vi/n05Yu3UAI_o/hqdefault.jpg",
        "durationSec": 469
      },
      {
        "youtubeVideoId": "FPg1UL0RNnA",
        "title": "The Logistics of the NYC Marathon",
        "sourceChannelId": "UCuCkxoKLYO_EQ2GeFtbM_bw",
        "sourceChannelTitle": "Half as Interesting",
        "thumbnailUrl": "https://i.ytimg.com/vi/FPg1UL0RNnA/hqdefault.jpg",
        "durationSec": 535
      },
      {
        "youtubeVideoId": "p2AAz24AzU4",
        "title": "Terence Tao's Math(s) Essentials - Numberphile",
        "sourceChannelId": "UCoxcjq-8xIDTYp3uz647V5A",
        "sourceChannelTitle": "Numberphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/p2AAz24AzU4/hqdefault.jpg",
        "durationSec": 801
      },
      {
        "youtubeVideoId": "BmBw827GgFA",
        "title": "Mutex Explained - Computerphile",
        "sourceChannelId": "UC9-y-6csu5WGm29I7JiwpnA",
        "sourceChannelTitle": "Computerphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/BmBw827GgFA/hqdefault.jpg",
        "durationSec": 701
      },
      {
        "youtubeVideoId": "0V-4lQYNugA",
        "title": "Why you can't touch Stonehenge any more",
        "sourceChannelId": "UCBa659QWEk1AI4Tg--mrJ2A",
        "sourceChannelTitle": "Tom Scott",
        "thumbnailUrl": "https://i.ytimg.com/vi/0V-4lQYNugA/hqdefault.jpg",
        "durationSec": 1585
      },
      {
        "youtubeVideoId": "zuaVFnj4SWY",
        "title": "The mystery of the 14 fractions",
        "sourceChannelId": "UCSju5G2aFaWMqn-_0YBtq5A",
        "sourceChannelTitle": "Stand-up Maths",
        "thumbnailUrl": "https://i.ytimg.com/vi/zuaVFnj4SWY/hqdefault.jpg",
        "durationSec": 1212
      },
      {
        "youtubeVideoId": "1BVJzaXv3rk",
        "title": "The Second Punic War  - OverSimplified (Part 3)",
        "sourceChannelId": "UCNIuvl7V8zACPpTmmNIqP2A",
        "sourceChannelTitle": "OverSimplified",
        "thumbnailUrl": "https://i.ytimg.com/vi/1BVJzaXv3rk/hqdefault.jpg",
        "durationSec": 2946
      },
      {
        "youtubeVideoId": "r0750q5e-Us",
        "title": "Chocolate is getting worse. So is everything else. | The Gray Area",
        "sourceChannelId": "UCLXo7UDZvByw2ixzpQCufnA",
        "sourceChannelTitle": "Vox",
        "thumbnailUrl": "https://i.ytimg.com/vi/r0750q5e-Us/hqdefault.jpg",
        "durationSec": 2491
      },
      {
        "youtubeVideoId": "bw5tzcoEG88",
        "title": "How to effectively use visuals in your presentation",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/bw5tzcoEG88/hqdefault.jpg",
        "durationSec": 298
      },
      {
        "youtubeVideoId": "g3_TqjSLyLk",
        "title": "AI Brain Fry Is Real. Here’s What Leaders Can Do | Julie Bedard | TED",
        "sourceChannelId": "UCAuUUnT6oDeKwE6v1NGQxug",
        "sourceChannelTitle": "TED",
        "thumbnailUrl": "https://i.ytimg.com/vi/g3_TqjSLyLk/hqdefault.jpg",
        "durationSec": 543
      },
      {
        "youtubeVideoId": "8q95eiq-y-Q",
        "title": "I Built an Original One-Glance Proof from Dice",
        "sourceChannelId": "UC1_uAIS3r8Vu6JjXWvastJg",
        "sourceChannelTitle": "Mathologer",
        "thumbnailUrl": "https://i.ytimg.com/vi/8q95eiq-y-Q/hqdefault.jpg",
        "durationSec": 878
      },
      {
        "youtubeVideoId": "TQ96CN6G6bQ",
        "title": "Adak: Why the Westernmost Town in the US Exists",
        "sourceChannelId": "UCTWKe1zATFV6d0o6oLS9sgw",
        "sourceChannelTitle": "Extremities",
        "thumbnailUrl": "https://i.ytimg.com/vi/TQ96CN6G6bQ/hqdefault.jpg",
        "durationSec": 1300
      },
      {
        "youtubeVideoId": "IH_uv4h2xYM",
        "title": "This Slug Should Be Impossible",
        "sourceChannelId": "UC176GAQozKKjhz62H8u9vQQ",
        "sourceChannelTitle": "Real Science",
        "thumbnailUrl": "https://i.ytimg.com/vi/IH_uv4h2xYM/hqdefault.jpg",
        "durationSec": 984
      },
      {
        "youtubeVideoId": "FcY4QW_lyYo",
        "title": "The Quest for Stardust: Crash Course Lecture",
        "sourceChannelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        "sourceChannelTitle": "CrashCourse",
        "thumbnailUrl": "https://i.ytimg.com/vi/FcY4QW_lyYo/hqdefault.jpg",
        "durationSec": 2009
      },
      {
        "youtubeVideoId": "JsRiC6vGb1E",
        "title": "Windows Are Absurd",
        "sourceChannelId": "UCMOqf8ab-42UUQIdVoKwjlQ",
        "sourceChannelTitle": "Practical Engineering",
        "thumbnailUrl": "https://i.ytimg.com/vi/JsRiC6vGb1E/hqdefault.jpg",
        "durationSec": 1469
      },
      {
        "youtubeVideoId": "ju1OZStv2eI",
        "title": "How Planes Fly Without Air Traffic Control",
        "sourceChannelId": "UCuCkxoKLYO_EQ2GeFtbM_bw",
        "sourceChannelTitle": "Half as Interesting",
        "thumbnailUrl": "https://i.ytimg.com/vi/ju1OZStv2eI/hqdefault.jpg",
        "durationSec": 438
      },
      {
        "youtubeVideoId": "vCAD3W43lIk",
        "title": "Who's Richer, Mario or Sonic? - Numberphile",
        "sourceChannelId": "UCoxcjq-8xIDTYp3uz647V5A",
        "sourceChannelTitle": "Numberphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/vCAD3W43lIk/hqdefault.jpg",
        "durationSec": 1178
      },
      {
        "youtubeVideoId": "NDgS__J1U-M",
        "title": "The Private Key Mistake! (TLS Key set to \"4\") - Computerphile",
        "sourceChannelId": "UC9-y-6csu5WGm29I7JiwpnA",
        "sourceChannelTitle": "Computerphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/NDgS__J1U-M/hqdefault.jpg",
        "durationSec": 1476
      },
      {
        "youtubeVideoId": "NBXu6Z9Fw_M",
        "title": "It's getting harder to balance the power grid. Here's why.",
        "sourceChannelId": "UCBa659QWEk1AI4Tg--mrJ2A",
        "sourceChannelTitle": "Tom Scott",
        "thumbnailUrl": "https://i.ytimg.com/vi/NBXu6Z9Fw_M/hqdefault.jpg",
        "durationSec": 980
      },
      {
        "youtubeVideoId": "KxHKrbfnmTU",
        "title": "Did Hannah Fry crack The Traitors?",
        "sourceChannelId": "UCSju5G2aFaWMqn-_0YBtq5A",
        "sourceChannelTitle": "Stand-up Maths",
        "thumbnailUrl": "https://i.ytimg.com/vi/KxHKrbfnmTU/hqdefault.jpg",
        "durationSec": 1673
      },
      {
        "youtubeVideoId": "Q-nWA0WeF98",
        "title": "The Second Punic War - OverSimplified (Part 2)",
        "sourceChannelId": "UCNIuvl7V8zACPpTmmNIqP2A",
        "sourceChannelTitle": "OverSimplified",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q-nWA0WeF98/hqdefault.jpg",
        "durationSec": 2257
      },
      {
        "youtubeVideoId": "olEs7cm1LWw",
        "title": "Wes Moore to Dems: Move fast on affordability | America, Actually",
        "sourceChannelId": "UCLXo7UDZvByw2ixzpQCufnA",
        "sourceChannelTitle": "Vox",
        "thumbnailUrl": "https://i.ytimg.com/vi/olEs7cm1LWw/hqdefault.jpg",
        "durationSec": 1903
      },
      {
        "youtubeVideoId": "8EtdC9Bjubk",
        "title": "Can you solve the Billy Bonka riddle? - Edwin F. Meyer",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/8EtdC9Bjubk/hqdefault.jpg",
        "durationSec": 373
      },
      {
        "youtubeVideoId": "on1L_jblaw8",
        "title": "How to Look and Sound Confident | Cara Hale Alter | TED",
        "sourceChannelId": "UCAuUUnT6oDeKwE6v1NGQxug",
        "sourceChannelTitle": "TED",
        "thumbnailUrl": "https://i.ytimg.com/vi/on1L_jblaw8/hqdefault.jpg",
        "durationSec": 988
      },
      {
        "youtubeVideoId": "d-Yy-ILjM3k",
        "title": "How to build and solve a 4D Rubik's cubes in physical 3D (no simulator!)",
        "sourceChannelId": "UC1_uAIS3r8Vu6JjXWvastJg",
        "sourceChannelTitle": "Mathologer",
        "thumbnailUrl": "https://i.ytimg.com/vi/d-Yy-ILjM3k/hqdefault.jpg",
        "durationSec": 2252
      },
      {
        "youtubeVideoId": "X0gnZtjW-eE",
        "title": "Villa Las Estrellas: An Actual Town in Antarctica",
        "sourceChannelId": "UCTWKe1zATFV6d0o6oLS9sgw",
        "sourceChannelTitle": "Extremities",
        "thumbnailUrl": "https://i.ytimg.com/vi/X0gnZtjW-eE/hqdefault.jpg",
        "durationSec": 1390
      },
      {
        "youtubeVideoId": "uGCaL_Ge6tg",
        "title": "The Frog That Unleashed the World’s Most Lethal Pathogen",
        "sourceChannelId": "UC176GAQozKKjhz62H8u9vQQ",
        "sourceChannelTitle": "Real Science",
        "thumbnailUrl": "https://i.ytimg.com/vi/uGCaL_Ge6tg/hqdefault.jpg",
        "durationSec": 1120
      },
      {
        "youtubeVideoId": "oJXxCfwkb-o",
        "title": "Is Gerrymandering Getting Worse?: Crash Course US Government #7",
        "sourceChannelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        "sourceChannelTitle": "CrashCourse",
        "thumbnailUrl": "https://i.ytimg.com/vi/oJXxCfwkb-o/hqdefault.jpg",
        "durationSec": 869
      },
      {
        "youtubeVideoId": "awV7FP9sAHE",
        "title": "Whatever Happened to Fire Escapes?",
        "sourceChannelId": "UCMOqf8ab-42UUQIdVoKwjlQ",
        "sourceChannelTitle": "Practical Engineering",
        "thumbnailUrl": "https://i.ytimg.com/vi/awV7FP9sAHE/hqdefault.jpg",
        "durationSec": 1087
      },
      {
        "youtubeVideoId": "auScRXZwHhk",
        "title": "The Logistics of IMAX",
        "sourceChannelId": "UCuCkxoKLYO_EQ2GeFtbM_bw",
        "sourceChannelTitle": "Half as Interesting",
        "thumbnailUrl": "https://i.ytimg.com/vi/auScRXZwHhk/hqdefault.jpg",
        "durationSec": 530
      },
      {
        "youtubeVideoId": "EgnAN0ZUl08",
        "title": "Squaring the Triangle - Numberphile",
        "sourceChannelId": "UCoxcjq-8xIDTYp3uz647V5A",
        "sourceChannelTitle": "Numberphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/EgnAN0ZUl08/hqdefault.jpg",
        "durationSec": 819
      },
      {
        "youtubeVideoId": "cI8IquVEyVY",
        "title": "?PHP Problem? - Computerphile",
        "sourceChannelId": "UC9-y-6csu5WGm29I7JiwpnA",
        "sourceChannelTitle": "Computerphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/cI8IquVEyVY/hqdefault.jpg",
        "durationSec": 1158
      },
      {
        "youtubeVideoId": "-E47v4Oy7fE",
        "title": "This machine breaks things.",
        "sourceChannelId": "UCBa659QWEk1AI4Tg--mrJ2A",
        "sourceChannelTitle": "Tom Scott",
        "thumbnailUrl": "https://i.ytimg.com/vi/-E47v4Oy7fE/hqdefault.jpg",
        "durationSec": 1397
      },
      {
        "youtubeVideoId": "9xwU-ochogk",
        "title": "We tested Babish's 15,000% claim!",
        "sourceChannelId": "UCSju5G2aFaWMqn-_0YBtq5A",
        "sourceChannelTitle": "Stand-up Maths",
        "thumbnailUrl": "https://i.ytimg.com/vi/9xwU-ochogk/hqdefault.jpg",
        "durationSec": 1110
      },
      {
        "youtubeVideoId": "lsbcN9-jU1Y",
        "title": "The Second Punic War - OverSimplified (Part 1)",
        "sourceChannelId": "UCNIuvl7V8zACPpTmmNIqP2A",
        "sourceChannelTitle": "OverSimplified",
        "thumbnailUrl": "https://i.ytimg.com/vi/lsbcN9-jU1Y/hqdefault.jpg",
        "durationSec": 1695
      },
      {
        "youtubeVideoId": "MQqi6wZYRGs",
        "title": "Is this the end of MAGA?",
        "sourceChannelId": "UCLXo7UDZvByw2ixzpQCufnA",
        "sourceChannelTitle": "Vox",
        "thumbnailUrl": "https://i.ytimg.com/vi/MQqi6wZYRGs/hqdefault.jpg",
        "durationSec": 703
      },
      {
        "youtubeVideoId": "8RPK5KwYhgA",
        "title": "What if you didn’t brush your teeth for a year? - Justin Merritt",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/8RPK5KwYhgA/hqdefault.jpg",
        "durationSec": 330
      },
      {
        "youtubeVideoId": "84wVmiEl7Dg",
        "title": "I Can’t Speak. Here’s How I Get People to Listen | Jessica Irwin | TED",
        "sourceChannelId": "UCAuUUnT6oDeKwE6v1NGQxug",
        "sourceChannelTitle": "TED",
        "thumbnailUrl": "https://i.ytimg.com/vi/84wVmiEl7Dg/hqdefault.jpg",
        "durationSec": 382
      },
      {
        "youtubeVideoId": "8CksuEk2jJQ",
        "title": "How to Integrate with an AX? The Surprising Power of Planimeters – Visually Explained!",
        "sourceChannelId": "UC1_uAIS3r8Vu6JjXWvastJg",
        "sourceChannelTitle": "Mathologer",
        "thumbnailUrl": "https://i.ytimg.com/vi/8CksuEk2jJQ/hqdefault.jpg",
        "durationSec": 2113
      },
      {
        "youtubeVideoId": "W9e5Un7VLUg",
        "title": "Kalaupapa: Why Hawaii's Most Isolated Town Stays Isolated",
        "sourceChannelId": "UCTWKe1zATFV6d0o6oLS9sgw",
        "sourceChannelTitle": "Extremities",
        "thumbnailUrl": "https://i.ytimg.com/vi/W9e5Un7VLUg/hqdefault.jpg",
        "durationSec": 1439
      },
      {
        "youtubeVideoId": "nq_tGiprNlU",
        "title": "Dragonflies Are Not What You Think",
        "sourceChannelId": "UC176GAQozKKjhz62H8u9vQQ",
        "sourceChannelTitle": "Real Science",
        "thumbnailUrl": "https://i.ytimg.com/vi/nq_tGiprNlU/hqdefault.jpg",
        "durationSec": 1376
      },
      {
        "youtubeVideoId": "y5RqfQvCaBY",
        "title": "How Geologists Can Tell if the World is Warming : Crash Course Geology #23",
        "sourceChannelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        "sourceChannelTitle": "CrashCourse",
        "thumbnailUrl": "https://i.ytimg.com/vi/y5RqfQvCaBY/hqdefault.jpg",
        "durationSec": 694
      },
      {
        "youtubeVideoId": "5_B1Mq02wcI",
        "title": "The Hidden Engineering of Pressure Regulators",
        "sourceChannelId": "UCMOqf8ab-42UUQIdVoKwjlQ",
        "sourceChannelTitle": "Practical Engineering",
        "thumbnailUrl": "https://i.ytimg.com/vi/5_B1Mq02wcI/hqdefault.jpg",
        "durationSec": 994
      }
    ]
  }
};
