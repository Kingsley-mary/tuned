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
    "builtAt": 1794334888300,
    "videos": [
      {
        "youtubeVideoId": "_x58r9TBois",
        "title": "Meta VR Glasses: What Vision Pro 2 COULD Have Been!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/_x58r9TBois/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "clJCDHml2cA",
        "title": "I built a DeepSeek R1 powered VS Code extension…",
        "sourceChannelId": "UC2Xd-TjJByJyK2w1zNwY0zQ",
        "sourceChannelTitle": "Beyond Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/clJCDHml2cA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1FurWDiK9A4",
        "title": "Did Anthropic just save its $1 trillion IPO?",
        "sourceChannelId": "UCsBjURrPoezykLs9EqgamOA",
        "sourceChannelTitle": "Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/1FurWDiK9A4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "K_AvLm5TOws",
        "title": "Apple Really Does it Better - MacBook Pro with PROLED XDR",
        "sourceChannelId": "UCdBK94H6oZT2Q7l0-b0xmMg",
        "sourceChannelTitle": "ShortCircuit",
        "thumbnailUrl": "https://i.ytimg.com/vi/K_AvLm5TOws/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zWq76MXOS_g",
        "title": "Ring's autonomous security robot",
        "sourceChannelId": "UCddiUEpeqJcYeBxX1IVBKvQ",
        "sourceChannelTitle": "The Verge",
        "thumbnailUrl": "https://i.ytimg.com/vi/zWq76MXOS_g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HVLUtJWlcJY",
        "title": "I Tested 42 Years of Phones!",
        "sourceChannelId": "UCMiJRAwDNSNzuYeN2uWa0pA",
        "sourceChannelTitle": "Mrwhosetheboss",
        "thumbnailUrl": "https://i.ytimg.com/vi/HVLUtJWlcJY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "k8W0Eb7sKss",
        "title": "ONE PHONE TO RULE THEM ALL",
        "sourceChannelId": "UCWFKCr40YwOZQx8FHU_ZqqQ",
        "sourceChannelTitle": "JerryRigEverything",
        "thumbnailUrl": "https://i.ytimg.com/vi/k8W0Eb7sKss/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ARreuKEUQuE",
        "title": "WEIRDEST Costco Tech",
        "sourceChannelId": "UC1IQIspOkCeV3WnYm32SBFQ",
        "sourceChannelTitle": "This Is",
        "thumbnailUrl": "https://i.ytimg.com/vi/ARreuKEUQuE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "v92XR6RwB9Q",
        "title": "Marques Blind Ranks Halloween Candy",
        "sourceChannelId": "UCG7J20LhUeLl6y_Emi7OJrA",
        "sourceChannelTitle": "The Studio",
        "thumbnailUrl": "https://i.ytimg.com/vi/v92XR6RwB9Q/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "D3y2h-LhCKw",
        "title": "Elon Finally Said It...",
        "sourceChannelId": "UCXv-co3EYHF7aOH4A93qAHQ",
        "sourceChannelTitle": "Lew Later",
        "thumbnailUrl": "https://i.ytimg.com/vi/D3y2h-LhCKw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kNY9zrl5DYY",
        "title": "Building a Smart Home in 2026!",
        "sourceChannelId": "UC9fSZHEh6XsRpX-xJc6lT3A",
        "sourceChannelTitle": "UrAvgConsumer",
        "thumbnailUrl": "https://i.ytimg.com/vi/kNY9zrl5DYY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "g6Die8gVFn0",
        "title": "OLED iPad Mini is The Most Apple Product They've Ever Appled",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/g6Die8gVFn0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "xWkozeculPo",
        "title": "Is Next.js 15 any good? \"use cache\" API first look",
        "sourceChannelId": "UC2Xd-TjJByJyK2w1zNwY0zQ",
        "sourceChannelTitle": "Beyond Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/xWkozeculPo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "pf5tXJZM1Rw",
        "title": "OpenAI spent $1.2 million hacking Linux... and it was a bargain",
        "sourceChannelId": "UCsBjURrPoezykLs9EqgamOA",
        "sourceChannelTitle": "Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/pf5tXJZM1Rw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "dSS8c0ehMHQ",
        "title": "Can a Tablet Really Replace Paper?",
        "sourceChannelId": "UCdBK94H6oZT2Q7l0-b0xmMg",
        "sourceChannelTitle": "ShortCircuit",
        "thumbnailUrl": "https://i.ytimg.com/vi/dSS8c0ehMHQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "b62BIUCVuRY",
        "title": "Ring Drone Cam hands-on",
        "sourceChannelId": "UCddiUEpeqJcYeBxX1IVBKvQ",
        "sourceChannelTitle": "The Verge",
        "thumbnailUrl": "https://i.ytimg.com/vi/b62BIUCVuRY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Yg2t5w8vj5Q",
        "title": "I Tested the Most Downloaded 3D Printed Tech!",
        "sourceChannelId": "UCMiJRAwDNSNzuYeN2uWa0pA",
        "sourceChannelTitle": "Mrwhosetheboss",
        "thumbnailUrl": "https://i.ytimg.com/vi/Yg2t5w8vj5Q/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-Z0hsfUP-I4",
        "title": "LOOK MOM NO HANDS",
        "sourceChannelId": "UCWFKCr40YwOZQx8FHU_ZqqQ",
        "sourceChannelTitle": "JerryRigEverything",
        "thumbnailUrl": "https://i.ytimg.com/vi/-Z0hsfUP-I4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Aj00weTl3JM",
        "title": "Am I The @$$hole?!",
        "sourceChannelId": "UC1IQIspOkCeV3WnYm32SBFQ",
        "sourceChannelTitle": "This Is",
        "thumbnailUrl": "https://i.ytimg.com/vi/Aj00weTl3JM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "0-bQziLITuk",
        "title": "Do You Know These Foldables?",
        "sourceChannelId": "UCG7J20LhUeLl6y_Emi7OJrA",
        "sourceChannelTitle": "The Studio",
        "thumbnailUrl": "https://i.ytimg.com/vi/0-bQziLITuk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zhfFgJRn0cU",
        "title": "Is Twitter Getting Desperate?",
        "sourceChannelId": "UCXv-co3EYHF7aOH4A93qAHQ",
        "sourceChannelTitle": "Lew Later",
        "thumbnailUrl": "https://i.ytimg.com/vi/zhfFgJRn0cU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1oggyK7dnXY",
        "title": "A fun day w/ Austin playing Minecraft with the new @XBOX Nano Controller. Like father like son 💪🏾",
        "sourceChannelId": "UC9fSZHEh6XsRpX-xJc6lT3A",
        "sourceChannelTitle": "UrAvgConsumer",
        "thumbnailUrl": "https://i.ytimg.com/vi/1oggyK7dnXY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2reQut8WNGc",
        "title": "Macbook PROLED XDR Impressions: They Said They Wouldn't!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/2reQut8WNGc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "_pWA4rbzvIg",
        "title": "JavaScript performance is weird... Write scientifically faster code with benchmarking",
        "sourceChannelId": "UC2Xd-TjJByJyK2w1zNwY0zQ",
        "sourceChannelTitle": "Beyond Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/_pWA4rbzvIg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "iw9SZgyahqg",
        "title": "The one thing holding theoretical CS together just broke... kinda",
        "sourceChannelId": "UCsBjURrPoezykLs9EqgamOA",
        "sourceChannelTitle": "Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/iw9SZgyahqg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8YClr7M-fsI",
        "title": "A great deal from Razer? - Reclusa x Mini 65",
        "sourceChannelId": "UCdBK94H6oZT2Q7l0-b0xmMg",
        "sourceChannelTitle": "ShortCircuit",
        "thumbnailUrl": "https://i.ytimg.com/vi/8YClr7M-fsI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "F4SWHjK9mcI",
        "title": "Torrenters vs. J.D. Salinger",
        "sourceChannelId": "UCddiUEpeqJcYeBxX1IVBKvQ",
        "sourceChannelTitle": "The Verge",
        "thumbnailUrl": "https://i.ytimg.com/vi/F4SWHjK9mcI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1yB56IT0kDw",
        "title": "6 ways Samsung Fold beats iPhone Duo",
        "sourceChannelId": "UCMiJRAwDNSNzuYeN2uWa0pA",
        "sourceChannelTitle": "Mrwhosetheboss",
        "thumbnailUrl": "https://i.ytimg.com/vi/1yB56IT0kDw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8xUEEu5vom8",
        "title": "Hey Look Mom, Ive made it!",
        "sourceChannelId": "UCWFKCr40YwOZQx8FHU_ZqqQ",
        "sourceChannelTitle": "JerryRigEverything",
        "thumbnailUrl": "https://i.ytimg.com/vi/8xUEEu5vom8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Uqns_bpMUfQ",
        "title": "This Laptop is NEXT Level #MSI #NVIDIA #RTXSpark #ad",
        "sourceChannelId": "UC1IQIspOkCeV3WnYm32SBFQ",
        "sourceChannelTitle": "This Is",
        "thumbnailUrl": "https://i.ytimg.com/vi/Uqns_bpMUfQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fBdy_ggh8Xc",
        "title": "Bet you didn't know what we shot the intro on",
        "sourceChannelId": "UCG7J20LhUeLl6y_Emi7OJrA",
        "sourceChannelTitle": "The Studio",
        "thumbnailUrl": "https://i.ytimg.com/vi/fBdy_ggh8Xc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "4GhEtEjIIuU",
        "title": "This Footage Shouldn't Even Exist...",
        "sourceChannelId": "UCXv-co3EYHF7aOH4A93qAHQ",
        "sourceChannelTitle": "Lew Later",
        "thumbnailUrl": "https://i.ytimg.com/vi/4GhEtEjIIuU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KjAscT1SfvA",
        "title": "Unboxing the MacBook Pro with PROLED was LIT! 🔥 what do you guys want to know about this one? 👀",
        "sourceChannelId": "UC9fSZHEh6XsRpX-xJc6lT3A",
        "sourceChannelTitle": "UrAvgConsumer",
        "thumbnailUrl": "https://i.ytimg.com/vi/KjAscT1SfvA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ai1gIWacf0I",
        "title": "This can SEE Sound!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/ai1gIWacf0I/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8IHhvkaVqVE",
        "title": "Does Deno 2 really uncomplicate JavaScript?",
        "sourceChannelId": "UC2Xd-TjJByJyK2w1zNwY0zQ",
        "sourceChannelTitle": "Beyond Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/8IHhvkaVqVE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "k2ruCf_z75I",
        "title": "The worst week in cybersecurity history... so far",
        "sourceChannelId": "UCsBjURrPoezykLs9EqgamOA",
        "sourceChannelTitle": "Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/k2ruCf_z75I/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KZR6XdQ0xk8",
        "title": "Copy/Paste in Real Life -  Creality Sermoon P1",
        "sourceChannelId": "UCdBK94H6oZT2Q7l0-b0xmMg",
        "sourceChannelTitle": "ShortCircuit",
        "thumbnailUrl": "https://i.ytimg.com/vi/KZR6XdQ0xk8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Q5HihA3g0uU",
        "title": "Is a 5.3 inch display enough for a phone? #Vergecast",
        "sourceChannelId": "UCddiUEpeqJcYeBxX1IVBKvQ",
        "sourceChannelTitle": "The Verge",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q5HihA3g0uU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "i3ZlSlnGWng",
        "title": "6 ways iPhone Duo beats Samsung",
        "sourceChannelId": "UCMiJRAwDNSNzuYeN2uWa0pA",
        "sourceChannelTitle": "Mrwhosetheboss",
        "thumbnailUrl": "https://i.ytimg.com/vi/i3ZlSlnGWng/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "5O-vCJW1b8g",
        "title": "Trump Phone Durability Test - Its worse than we thought...",
        "sourceChannelId": "UCWFKCr40YwOZQx8FHU_ZqqQ",
        "sourceChannelTitle": "JerryRigEverything",
        "thumbnailUrl": "https://i.ytimg.com/vi/5O-vCJW1b8g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "jUj_wMtm8w0",
        "title": "Whoops, we got forgot about this",
        "sourceChannelId": "UC1IQIspOkCeV3WnYm32SBFQ",
        "sourceChannelTitle": "This Is",
        "thumbnailUrl": "https://i.ytimg.com/vi/jUj_wMtm8w0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Q7MpFTrT9Gk",
        "title": "Weird Tech We WOULD Try",
        "sourceChannelId": "UCG7J20LhUeLl6y_Emi7OJrA",
        "sourceChannelTitle": "The Studio",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q7MpFTrT9Gk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "sEW_R9sbnNM",
        "title": "Apple Loses Ground...",
        "sourceChannelId": "UCXv-co3EYHF7aOH4A93qAHQ",
        "sourceChannelTitle": "Lew Later",
        "thumbnailUrl": "https://i.ytimg.com/vi/sEW_R9sbnNM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rSMgft_byEA",
        "title": "iPhone Duo: My Favorite Accessories So Far!",
        "sourceChannelId": "UC9fSZHEh6XsRpX-xJc6lT3A",
        "sourceChannelTitle": "UrAvgConsumer",
        "thumbnailUrl": "https://i.ytimg.com/vi/rSMgft_byEA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "_4ELeWAgMwo",
        "title": "ASMR iPhone Duo Unboxing",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/_4ELeWAgMwo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "7WFXl4-aCxs",
        "title": "Build better payment forms using new “embedded” Stripe Checkout",
        "sourceChannelId": "UC2Xd-TjJByJyK2w1zNwY0zQ",
        "sourceChannelTitle": "Beyond Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/7WFXl4-aCxs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "nEaJMdM1djM",
        "title": "Did the AI bubble just pop?",
        "sourceChannelId": "UCsBjURrPoezykLs9EqgamOA",
        "sourceChannelTitle": "Fireship",
        "thumbnailUrl": "https://i.ytimg.com/vi/nEaJMdM1djM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ewwShy3UFWo",
        "title": "LMG Staff React to iPhone Duo",
        "sourceChannelId": "UCdBK94H6oZT2Q7l0-b0xmMg",
        "sourceChannelTitle": "ShortCircuit",
        "thumbnailUrl": "https://i.ytimg.com/vi/ewwShy3UFWo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "afoJu8f9GMA",
        "title": "Torrenters are building epic media collections | The Vergecast",
        "sourceChannelId": "UCddiUEpeqJcYeBxX1IVBKvQ",
        "sourceChannelTitle": "The Verge",
        "thumbnailUrl": "https://i.ytimg.com/vi/afoJu8f9GMA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Xrxy_W78SKk",
        "title": "iPhone Duo is Messier Than You Think",
        "sourceChannelId": "UCMiJRAwDNSNzuYeN2uWa0pA",
        "sourceChannelTitle": "Mrwhosetheboss",
        "thumbnailUrl": "https://i.ytimg.com/vi/Xrxy_W78SKk/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "games": {
    "categoryId": "games",
    "categoryName": "Games",
    "hue": 268,
    "builtAt": 1794334889319,
    "videos": [
      {
        "youtubeVideoId": "8LMau1qXPYE",
        "title": "My game was cloned with AI... what do I do?",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/8LMau1qXPYE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Byibb4onvGE",
        "title": "Rainbow Six Vegas",
        "sourceChannelId": "UCGiJeCKTVKIxtaYZOidh19g",
        "sourceChannelTitle": "Dunk Tank",
        "thumbnailUrl": "https://i.ytimg.com/vi/Byibb4onvGE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "I7IaqRJMi9w",
        "title": "I Failed",
        "sourceChannelId": "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
        "sourceChannelTitle": "PewDiePie",
        "thumbnailUrl": "https://i.ytimg.com/vi/I7IaqRJMi9w/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "3Wr72H2pnfM",
        "title": "20 Game Franchises That DIED For Dumbest Reasons",
        "sourceChannelId": "UCNvzD7Z-g64bPXxGzaQaa4g",
        "sourceChannelTitle": "gameranx",
        "thumbnailUrl": "https://i.ytimg.com/vi/3Wr72H2pnfM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "0FIMFMxODIE",
        "title": "Monster Hunter Outlanders (Austin's Review)",
        "sourceChannelId": "UCZ7AeeVbyslLM_8-nVy2B8Q",
        "sourceChannelTitle": "Skill Up",
        "thumbnailUrl": "https://i.ytimg.com/vi/0FIMFMxODIE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8j-ecLCywxU",
        "title": "Should Developers Target Games For Potato-Level PCs?",
        "sourceChannelId": "UCLdBr5f6RcP6l_TAP4GkhDQ",
        "sourceChannelTitle": "DF Clips",
        "thumbnailUrl": "https://i.ytimg.com/vi/8j-ecLCywxU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "o6BzlI71DSA",
        "title": "FANATICS FEST ANNOUNCEMENT!!!",
        "sourceChannelId": "UC5CE6nbu1tjSGha-a_cHAFA",
        "sourceChannelTitle": "GameSpot Sports",
        "thumbnailUrl": "https://i.ytimg.com/vi/o6BzlI71DSA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KIQnIBi7SjU",
        "title": "Damiani Plays Zelda: Ocarina of Time (2026) (Pt 1) - It's Been 28 Years...",
        "sourceChannelId": "UCL7O6Onu0lBcwZ8t-YMgGcw",
        "sourceChannelTitle": "Easy Allies Plays",
        "thumbnailUrl": "https://i.ytimg.com/vi/KIQnIBi7SjU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "krj0RHn_6SY",
        "title": "HOT New Amiga Game Reshoot Proxima 3 Interview with Developers Richard Lowenstein & Martin Ahman",
        "sourceChannelId": "UCYt9E2d_GCrPzquW-5MZwmQ",
        "sourceChannelTitle": "The Guru Meditation",
        "thumbnailUrl": "https://i.ytimg.com/vi/krj0RHn_6SY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "wcTUDQbNhGE",
        "title": "No Switch 2 Price Increases Are Planned and I Am Shook",
        "sourceChannelId": "UCHDRlTIaDXGGYduDDNrBmTw",
        "sourceChannelTitle": "TopicArlo",
        "thumbnailUrl": "https://i.ytimg.com/vi/wcTUDQbNhGE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "soTTh20_dYs",
        "title": "This Makes No Sense",
        "sourceChannelId": "UCDTV8DckMvn7mlgtdxTyR-g",
        "sourceChannelTitle": "Spawn Wave Plus",
        "thumbnailUrl": "https://i.ytimg.com/vi/soTTh20_dYs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "3Ae0gNYzaSQ",
        "title": "The Legend of Zelda: Ocarina of Time",
        "sourceChannelId": "UCsvn_Po0SmunchJYOWpOxMg",
        "sourceChannelTitle": "videogamedunkey",
        "thumbnailUrl": "https://i.ytimg.com/vi/3Ae0gNYzaSQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "9Xi118VLFfs",
        "title": "Should Your Boyfriend Play Donkey Kong Bananza?",
        "sourceChannelId": "UC2eEGT06FrWFU6VBnPOR9lg",
        "sourceChannelTitle": "Girlfriend Reviews",
        "thumbnailUrl": "https://i.ytimg.com/vi/9Xi118VLFfs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "91G_5eFTnUE",
        "title": "Black Cat Book Club Steam Trailer",
        "sourceChannelId": "UCKMkV9T20tUOBqwsi5xh7HA",
        "sourceChannelTitle": "Wholesome Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/91G_5eFTnUE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Dbgdi7BzMR0",
        "title": "The History of Every Video Game Genre",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dbgdi7BzMR0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NF7ELVJUiKM",
        "title": "Can Saros surpass Samson?",
        "sourceChannelId": "UCGiJeCKTVKIxtaYZOidh19g",
        "sourceChannelTitle": "Dunk Tank",
        "thumbnailUrl": "https://i.ytimg.com/vi/NF7ELVJUiKM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "U6I5PkZjWZU",
        "title": "I Google Myself..",
        "sourceChannelId": "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
        "sourceChannelTitle": "PewDiePie",
        "thumbnailUrl": "https://i.ytimg.com/vi/U6I5PkZjWZU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ASY-TjQNOeM",
        "title": "10 GREEDY Games That Had a Slow DOWNFALL",
        "sourceChannelId": "UCNvzD7Z-g64bPXxGzaQaa4g",
        "sourceChannelTitle": "gameranx",
        "thumbnailUrl": "https://i.ytimg.com/vi/ASY-TjQNOeM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "PP9WeyvDdF8",
        "title": "Does Ocarina of Time still deserve all these perfect scores in 2026? | Friends Per Second #108",
        "sourceChannelId": "UCZ7AeeVbyslLM_8-nVy2B8Q",
        "sourceChannelTitle": "Skill Up",
        "thumbnailUrl": "https://i.ytimg.com/vi/PP9WeyvDdF8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "v7j8BvbNpIY",
        "title": "God of Laufey Delayed By Three Months - And That's A Good Thing",
        "sourceChannelId": "UCLdBr5f6RcP6l_TAP4GkhDQ",
        "sourceChannelTitle": "DF Clips",
        "thumbnailUrl": "https://i.ytimg.com/vi/v7j8BvbNpIY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ECHvbbpEP_M",
        "title": "Gametime w/Fendler - Winter PGA Custom Courses/Football Yap",
        "sourceChannelId": "UC5CE6nbu1tjSGha-a_cHAFA",
        "sourceChannelTitle": "GameSpot Sports",
        "thumbnailUrl": "https://i.ytimg.com/vi/ECHvbbpEP_M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "AMxL-Hc8ROE",
        "title": "Easy Allies Plays Pro Jank Footy, Phantom Blade Zero, and Queen's Domain - Stream Team",
        "sourceChannelId": "UCL7O6Onu0lBcwZ8t-YMgGcw",
        "sourceChannelTitle": "Easy Allies Plays",
        "thumbnailUrl": "https://i.ytimg.com/vi/AMxL-Hc8ROE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "CFB5WLEMgBM",
        "title": "What is the Magic of Chris Huelsbeck's Iconic Video Game Music?",
        "sourceChannelId": "UCYt9E2d_GCrPzquW-5MZwmQ",
        "sourceChannelTitle": "The Guru Meditation",
        "thumbnailUrl": "https://i.ytimg.com/vi/CFB5WLEMgBM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "VrsUj4j-iWM",
        "title": "I Have Completely Flipped on Pikmin 4 Switch 2 Edition",
        "sourceChannelId": "UCHDRlTIaDXGGYduDDNrBmTw",
        "sourceChannelTitle": "TopicArlo",
        "thumbnailUrl": "https://i.ytimg.com/vi/VrsUj4j-iWM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "htHVQalXShA",
        "title": "PS6 Reports Are Already Here…",
        "sourceChannelId": "UCDTV8DckMvn7mlgtdxTyR-g",
        "sourceChannelTitle": "Spawn Wave Plus",
        "thumbnailUrl": "https://i.ytimg.com/vi/htHVQalXShA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-Y6Cp6e-VbI",
        "title": "Call of Duty 24 : Modern Warfare 4",
        "sourceChannelId": "UCsvn_Po0SmunchJYOWpOxMg",
        "sourceChannelTitle": "videogamedunkey",
        "thumbnailUrl": "https://i.ytimg.com/vi/-Y6Cp6e-VbI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "aVXbYwJnm7s",
        "title": "Should Your Boyfriend Play Mario Kart World?",
        "sourceChannelId": "UC2eEGT06FrWFU6VBnPOR9lg",
        "sourceChannelTitle": "Girlfriend Reviews",
        "thumbnailUrl": "https://i.ytimg.com/vi/aVXbYwJnm7s/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Ow_I3R8GfSA",
        "title": "⭐Wholesome Snack returns on December 5th at 9 am PT / 12 pm ET⭐",
        "sourceChannelId": "UCKMkV9T20tUOBqwsi5xh7HA",
        "sourceChannelTitle": "Wholesome Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ow_I3R8GfSA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "awegilW3DTc",
        "title": "My Favourite Games From GMTK Game Jam 2026",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/awegilW3DTc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Iyj1-8iuWXw",
        "title": "Motion Rec",
        "sourceChannelId": "UCGiJeCKTVKIxtaYZOidh19g",
        "sourceChannelTitle": "Dunk Tank",
        "thumbnailUrl": "https://i.ytimg.com/vi/Iyj1-8iuWXw/hqdefault.jpg",
        "durationSec": 600
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
        "durationSec": 600
      },
      {
        "youtubeVideoId": "RrBtNPw4hBg",
        "title": "Elder Scrolls VI: Sentinel, Ocarina of Time reviews + GoW Laufey delayed | This Week in Videogames",
        "sourceChannelId": "UCZ7AeeVbyslLM_8-nVy2B8Q",
        "sourceChannelTitle": "Skill Up",
        "thumbnailUrl": "https://i.ytimg.com/vi/RrBtNPw4hBg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "bLY4y-3J7Dc",
        "title": "Is Testing Using RTX 5090 Unacceptable At This Point?",
        "sourceChannelId": "UCLdBr5f6RcP6l_TAP4GkhDQ",
        "sourceChannelTitle": "DF Clips",
        "thumbnailUrl": "https://i.ytimg.com/vi/bLY4y-3J7Dc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "mfBeP8318YA",
        "title": "Gametime w/Fendler - Winter PGA Custom Courses/Football Yap (Portrait)",
        "sourceChannelId": "UC5CE6nbu1tjSGha-a_cHAFA",
        "sourceChannelTitle": "GameSpot Sports",
        "thumbnailUrl": "https://i.ytimg.com/vi/mfBeP8318YA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kGFXjeq_nHY",
        "title": "Damiani Plays Phantom Blade Zero",
        "sourceChannelId": "UCL7O6Onu0lBcwZ8t-YMgGcw",
        "sourceChannelTitle": "Easy Allies Plays",
        "thumbnailUrl": "https://i.ytimg.com/vi/kGFXjeq_nHY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "vNi24u3hapc",
        "title": "The Hilarious Story About How The Great Giana Sisters Got Its Title - Chris Huelsbeck",
        "sourceChannelId": "UCYt9E2d_GCrPzquW-5MZwmQ",
        "sourceChannelTitle": "The Guru Meditation",
        "thumbnailUrl": "https://i.ytimg.com/vi/vNi24u3hapc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "6215y2Q2T10",
        "title": "We've Finally Got Sales Data for a Bunch of Newer Switch 2 Games",
        "sourceChannelId": "UCHDRlTIaDXGGYduDDNrBmTw",
        "sourceChannelTitle": "TopicArlo",
        "thumbnailUrl": "https://i.ytimg.com/vi/6215y2Q2T10/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ZX_DzbPF_6E",
        "title": "The PS5 Pro Is Backfiring On Scalpers",
        "sourceChannelId": "UCDTV8DckMvn7mlgtdxTyR-g",
        "sourceChannelTitle": "Spawn Wave Plus",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZX_DzbPF_6E/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kjUabhk54gg",
        "title": "Star Wars Galactic Racer",
        "sourceChannelId": "UCsvn_Po0SmunchJYOWpOxMg",
        "sourceChannelTitle": "videogamedunkey",
        "thumbnailUrl": "https://i.ytimg.com/vi/kjUabhk54gg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "EbZcrOsFjOw",
        "title": "Spooky Things in Non-Spooky Games | Are you there, Pod?",
        "sourceChannelId": "UC2eEGT06FrWFU6VBnPOR9lg",
        "sourceChannelTitle": "Girlfriend Reviews",
        "thumbnailUrl": "https://i.ytimg.com/vi/EbZcrOsFjOw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "bySXbrw029k",
        "title": "Help Neha find a friend for her pet cow in Milki Delivery, launching November 17th",
        "sourceChannelId": "UCKMkV9T20tUOBqwsi5xh7HA",
        "sourceChannelTitle": "Wholesome Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/bySXbrw029k/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "JFG0GMCMLgs",
        "title": "Word Play is now available on iOS!",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/JFG0GMCMLgs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "bF_zv3H6XgQ",
        "title": "Samson",
        "sourceChannelId": "UCGiJeCKTVKIxtaYZOidh19g",
        "sourceChannelTitle": "Dunk Tank",
        "thumbnailUrl": "https://i.ytimg.com/vi/bF_zv3H6XgQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "H8g4B5ZN7LM",
        "title": "Thank you and Goodbye.",
        "sourceChannelId": "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
        "sourceChannelTitle": "PewDiePie",
        "thumbnailUrl": "https://i.ytimg.com/vi/H8g4B5ZN7LM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rk20dVV-AH0",
        "title": "25 UPCOMING Games We're MOST EXCITED ABOUT",
        "sourceChannelId": "UCNvzD7Z-g64bPXxGzaQaa4g",
        "sourceChannelTitle": "gameranx",
        "thumbnailUrl": "https://i.ytimg.com/vi/rk20dVV-AH0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "7d93ySOiHMw",
        "title": "I strongly recommend: 'The Legend of Zelda: Ocarina of Time (2026)' - Review",
        "sourceChannelId": "UCZ7AeeVbyslLM_8-nVy2B8Q",
        "sourceChannelTitle": "Skill Up",
        "thumbnailUrl": "https://i.ytimg.com/vi/7d93ySOiHMw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NnqPuwRZAhw",
        "title": "Claude Blocked From Creating AI Recompilations... But Will It Work?",
        "sourceChannelId": "UCLdBr5f6RcP6l_TAP4GkhDQ",
        "sourceChannelTitle": "DF Clips",
        "thumbnailUrl": "https://i.ytimg.com/vi/NnqPuwRZAhw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "YvoVlEvzLGw",
        "title": "GOLF IS HARD!! (even virtually).  There's always the next hole...",
        "sourceChannelId": "UC5CE6nbu1tjSGha-a_cHAFA",
        "sourceChannelTitle": "GameSpot Sports",
        "thumbnailUrl": "https://i.ytimg.com/vi/YvoVlEvzLGw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "xZ-S0-2zPbM",
        "title": "Easy Allies Halloween Charity Stream 2026",
        "sourceChannelId": "UCL7O6Onu0lBcwZ8t-YMgGcw",
        "sourceChannelTitle": "Easy Allies Plays",
        "thumbnailUrl": "https://i.ytimg.com/vi/xZ-S0-2zPbM/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "music": {
    "categoryId": "music",
    "categoryName": "Music",
    "hue": 205,
    "builtAt": 1794334889559,
    "videos": [
      {
        "youtubeVideoId": "LtUDeizHqKk",
        "title": "Fat Joe: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/LtUDeizHqKk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "QTLM3cu6-Dg",
        "title": "Jesse Malin shares his memoir with World Cafe",
        "sourceChannelId": "UC7nrQB0dRxdQpH8-y8glEDw",
        "sourceChannelTitle": "World Cafe",
        "thumbnailUrl": "https://i.ytimg.com/vi/QTLM3cu6-Dg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "LCV4BlH1_Is",
        "title": "Slowwves performs \"Anywhere Else\" & more Live on KEXP at AXEAN Festival",
        "sourceChannelId": "UC3I2GFN_F8WudD_2jUZbojA",
        "sourceChannelTitle": "KEXP",
        "thumbnailUrl": "https://i.ytimg.com/vi/LCV4BlH1_Is/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "4Z2a2Iaj48M",
        "title": "Olive Jones performs Mary for Mahogany Sessions",
        "sourceChannelId": "UCG36u-k09zdIPQh5EEdVgTA",
        "sourceChannelTitle": "Mahogany",
        "thumbnailUrl": "https://i.ytimg.com/vi/4Z2a2Iaj48M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "t6lYfvGxYpM",
        "title": "“Back From There”, a soaring and high-energy collaboration by Massane and Teho. Out now.",
        "sourceChannelId": "UCCycRfTS7V9WOFfWfkNVCSg",
        "sourceChannelTitle": "Cercle Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/t6lYfvGxYpM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "F8E0y5xiyso",
        "title": "Are You In A Sexless Relationship? | The Hook Up Podcast",
        "sourceChannelId": "UC8sy_jU8fgYKVsMobRiBnWw",
        "sourceChannelTitle": "triple j talks",
        "thumbnailUrl": "https://i.ytimg.com/vi/F8E0y5xiyso/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "u1GtMLZMlDA",
        "title": "Ella Red - Ball & Chain | Audiotree Live",
        "sourceChannelId": "UCWjmAUHmajb1-eo5WKk_22A",
        "sourceChannelTitle": "Audiotree",
        "thumbnailUrl": "https://i.ytimg.com/vi/u1GtMLZMlDA/hqdefault.jpg",
        "durationSec": 600
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
        "youtubeVideoId": "18RaQ6ZkJrc",
        "title": "Hannah Laing at Boiler Room LA: Teletech",
        "sourceChannelId": "UCGBpxWJr9FNOcFYA5GkKrMg",
        "sourceChannelTitle": "Boiler Room",
        "thumbnailUrl": "https://i.ytimg.com/vi/18RaQ6ZkJrc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "El4mqvRWuDY",
        "title": "@Flyteband describes how they would write a song about success",
        "sourceChannelId": "UCRLZb8PpI9N7COmYqHiDH7A",
        "sourceChannelTitle": "Sofar Sounds",
        "thumbnailUrl": "https://i.ytimg.com/vi/El4mqvRWuDY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "FwD_FIWHVFw",
        "title": "Amythyst Kiah on Dolly Parton's passing #AmythystKiah",
        "sourceChannelId": "UCAKcSON6PSG_JkTbXh2WdIg",
        "sourceChannelTitle": "The Current",
        "thumbnailUrl": "https://i.ytimg.com/vi/FwD_FIWHVFw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zPqkBwImvMk",
        "title": "Katie Pruitt performing “Little Boxes” in our latest Paste Session",
        "sourceChannelId": "UC_PscE_7n8SiMspieMGMK_A",
        "sourceChannelTitle": "Paste Magazine",
        "thumbnailUrl": "https://i.ytimg.com/vi/zPqkBwImvMk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "mk-UTm2zvNk",
        "title": "LIVE: Special Guest Robby Hoffman! | Morning Becomes Eclectic",
        "sourceChannelId": "UC54U5gpKkaa_BpXRVNip2Dw",
        "sourceChannelTitle": "KCRW",
        "thumbnailUrl": "https://i.ytimg.com/vi/mk-UTm2zvNk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "D7l-2yGnrEc",
        "title": "Thaiboy Digital's Perfect 10",
        "sourceChannelId": "UC7kI8WjpCfFoMSNDuRh_4lA",
        "sourceChannelTitle": "Pitchfork",
        "thumbnailUrl": "https://i.ytimg.com/vi/D7l-2yGnrEc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "73wCQRQb7v0",
        "title": "Jungle: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/73wCQRQb7v0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fIeVKrWIoSM",
        "title": "Jesse Malin - \"Almost Grown\" (Live for World Cafe)",
        "sourceChannelId": "UC7nrQB0dRxdQpH8-y8glEDw",
        "sourceChannelTitle": "World Cafe",
        "thumbnailUrl": "https://i.ytimg.com/vi/fIeVKrWIoSM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "qbYI8cixutY",
        "title": "Slowwves - Full Performance (Live on KEXP)",
        "sourceChannelId": "UC3I2GFN_F8WudD_2jUZbojA",
        "sourceChannelTitle": "KEXP",
        "thumbnailUrl": "https://i.ytimg.com/vi/qbYI8cixutY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "_sf68tCJtXY",
        "title": "Sparklmami performs running for Mahogany Sessions",
        "sourceChannelId": "UCG36u-k09zdIPQh5EEdVgTA",
        "sourceChannelTitle": "Mahogany",
        "thumbnailUrl": "https://i.ytimg.com/vi/_sf68tCJtXY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "oIgHjxeQn3k",
        "title": "Massane, Teho - Back From There",
        "sourceChannelId": "UCCycRfTS7V9WOFfWfkNVCSg",
        "sourceChannelTitle": "Cercle Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/oIgHjxeQn3k/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "BNiyijgDRp0",
        "title": "THIS IS NOT A JOKE FACEBOOK EVENT!",
        "sourceChannelId": "UC8sy_jU8fgYKVsMobRiBnWw",
        "sourceChannelTitle": "triple j talks",
        "thumbnailUrl": "https://i.ytimg.com/vi/BNiyijgDRp0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "19oaAYqgiU0",
        "title": "Ella Red - Aphrodite | Audiotree Live",
        "sourceChannelId": "UCWjmAUHmajb1-eo5WKk_22A",
        "sourceChannelTitle": "Audiotree",
        "thumbnailUrl": "https://i.ytimg.com/vi/19oaAYqgiU0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "JhHnfevpeDs",
        "title": "the most British Unpopular Opinion you’ll hear this week 🇬🇧🚗",
        "sourceChannelId": "UC-FQUIVQ-bZiefzBiQAa8Fw",
        "sourceChannelTitle": "BBC Radio 1",
        "thumbnailUrl": "https://i.ytimg.com/vi/JhHnfevpeDs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rYyooU5oQGo",
        "title": "Natte Visstick at Boiler Room LA: Teletech",
        "sourceChannelId": "UCGBpxWJr9FNOcFYA5GkKrMg",
        "sourceChannelTitle": "Boiler Room",
        "thumbnailUrl": "https://i.ytimg.com/vi/rYyooU5oQGo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Mt6-b6UayEc",
        "title": "For @mayadelilahh, she had an actual ‘Have I Made It’ moment.",
        "sourceChannelId": "UCRLZb8PpI9N7COmYqHiDH7A",
        "sourceChannelTitle": "Sofar Sounds",
        "thumbnailUrl": "https://i.ytimg.com/vi/Mt6-b6UayEc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ZOGTz79r3w8",
        "title": "Ryan Bingham on writing the song \"Cocaine Charlie\"",
        "sourceChannelId": "UCAKcSON6PSG_JkTbXh2WdIg",
        "sourceChannelTitle": "The Current",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZOGTz79r3w8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "qwEvePgqS3E",
        "title": "Katie Pruitt - Full Session | Paste",
        "sourceChannelId": "UC_PscE_7n8SiMspieMGMK_A",
        "sourceChannelTitle": "Paste Magazine",
        "thumbnailUrl": "https://i.ytimg.com/vi/qwEvePgqS3E/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KZ2OEZArv5g",
        "title": "Jakob Nowell's (of Sublime) Must-Listen Albums",
        "sourceChannelId": "UC54U5gpKkaa_BpXRVNip2Dw",
        "sourceChannelTitle": "KCRW",
        "thumbnailUrl": "https://i.ytimg.com/vi/KZ2OEZArv5g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "WIHGdXVji7w",
        "title": "Backstage at Carnegie Hall with Worldpeace DMT",
        "sourceChannelId": "UC7kI8WjpCfFoMSNDuRh_4lA",
        "sourceChannelTitle": "Pitchfork",
        "thumbnailUrl": "https://i.ytimg.com/vi/WIHGdXVji7w/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "XoH44mH5laY",
        "title": "Richard O'Brien's 'The Rocky Horror Show': Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/XoH44mH5laY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KAAOVrm6Q4Q",
        "title": "Jesse Malin - \"Hollywood Forever\" (Live for World Cafe)",
        "sourceChannelId": "UC7nrQB0dRxdQpH8-y8glEDw",
        "sourceChannelTitle": "World Cafe",
        "thumbnailUrl": "https://i.ytimg.com/vi/KAAOVrm6Q4Q/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "GRunLx0PZKk",
        "title": "Slowwves - Killed By Egoistic Disease (Live on KEXP)",
        "sourceChannelId": "UC3I2GFN_F8WudD_2jUZbojA",
        "sourceChannelTitle": "KEXP",
        "thumbnailUrl": "https://i.ytimg.com/vi/GRunLx0PZKk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "vD5_ys2KurU",
        "title": "Sparklmami performs quisiera for Mahogany Sessions",
        "sourceChannelId": "UCG36u-k09zdIPQh5EEdVgTA",
        "sourceChannelTitle": "Mahogany",
        "thumbnailUrl": "https://i.ytimg.com/vi/vD5_ys2KurU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "wdfjTwqvpbM",
        "title": "“What To Do” an energetic track by Denis Horvat and Lulliby. Out now on all platforms.",
        "sourceChannelId": "UCCycRfTS7V9WOFfWfkNVCSg",
        "sourceChannelTitle": "Cercle Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/wdfjTwqvpbM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "UiR_wdpxNIk",
        "title": "STOP USING PARTIFUL | The Slop podcast",
        "sourceChannelId": "UC8sy_jU8fgYKVsMobRiBnWw",
        "sourceChannelTitle": "triple j talks",
        "thumbnailUrl": "https://i.ytimg.com/vi/UiR_wdpxNIk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "S2maODnQWGk",
        "title": "#AltPop Ella Red on Audiotree Live - OUT NOW",
        "sourceChannelId": "UCWjmAUHmajb1-eo5WKk_22A",
        "sourceChannelTitle": "Audiotree",
        "thumbnailUrl": "https://i.ytimg.com/vi/S2maODnQWGk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "bpLRhji2YYM",
        "title": "The Essential Mix in 60 seconds 👽👾",
        "sourceChannelId": "UC-FQUIVQ-bZiefzBiQAa8Fw",
        "sourceChannelTitle": "BBC Radio 1",
        "thumbnailUrl": "https://i.ytimg.com/vi/bpLRhji2YYM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "xH_zllbN8BE",
        "title": "Vieze Asbak at Boiler Room LA: Teletech",
        "sourceChannelId": "UCGBpxWJr9FNOcFYA5GkKrMg",
        "sourceChannelTitle": "Boiler Room",
        "thumbnailUrl": "https://i.ytimg.com/vi/xH_zllbN8BE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "jUE4PXqEyR4",
        "title": "@denitia covers Stone Temple Pilots' \"Interstate Love Song.\"",
        "sourceChannelId": "UCRLZb8PpI9N7COmYqHiDH7A",
        "sourceChannelTitle": "Sofar Sounds",
        "thumbnailUrl": "https://i.ytimg.com/vi/jUE4PXqEyR4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "s3UyXjqpRcs",
        "title": "How fatherhood inspired Shakey Graves' latest album #ShakeyGraves",
        "sourceChannelId": "UCAKcSON6PSG_JkTbXh2WdIg",
        "sourceChannelTitle": "The Current",
        "thumbnailUrl": "https://i.ytimg.com/vi/s3UyXjqpRcs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ZReZuy9lFaw",
        "title": "Della Mae performs “Magic Accident” for our latest Paste Session",
        "sourceChannelId": "UC_PscE_7n8SiMspieMGMK_A",
        "sourceChannelTitle": "Paste Magazine",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZReZuy9lFaw/hqdefault.jpg",
        "durationSec": 600
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
        "youtubeVideoId": "D6rlsp7mCxU",
        "title": "Shygirl on collaborating with SOPHIE, Arca, Tinashe, and more",
        "sourceChannelId": "UC7kI8WjpCfFoMSNDuRh_4lA",
        "sourceChannelTitle": "Pitchfork",
        "thumbnailUrl": "https://i.ytimg.com/vi/D6rlsp7mCxU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "xPIMk4d4ulI",
        "title": "CMAT: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/xPIMk4d4ulI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "UdJNUNiXKQs",
        "title": "Jesse Malin - \"Shining Down\" (Live for World Cafe)",
        "sourceChannelId": "UC7nrQB0dRxdQpH8-y8glEDw",
        "sourceChannelTitle": "World Cafe",
        "thumbnailUrl": "https://i.ytimg.com/vi/UdJNUNiXKQs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "UNE8a-AGo3Q",
        "title": "Slowwves - Vortex (Live on KEXP)",
        "sourceChannelId": "UC3I2GFN_F8WudD_2jUZbojA",
        "sourceChannelTitle": "KEXP",
        "thumbnailUrl": "https://i.ytimg.com/vi/UNE8a-AGo3Q/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "N4OIOudIROo",
        "title": "olorunns performs Iris for Mahogany Sessions",
        "sourceChannelId": "UCG36u-k09zdIPQh5EEdVgTA",
        "sourceChannelTitle": "Mahogany",
        "thumbnailUrl": "https://i.ytimg.com/vi/N4OIOudIROo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "gwLLvuVitx0",
        "title": "Denis Horvat, Lulliby - What To Do",
        "sourceChannelId": "UCCycRfTS7V9WOFfWfkNVCSg",
        "sourceChannelTitle": "Cercle Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/gwLLvuVitx0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "b2aZbtDuObM",
        "title": "This button could ruin lives",
        "sourceChannelId": "UC8sy_jU8fgYKVsMobRiBnWw",
        "sourceChannelTitle": "triple j talks",
        "thumbnailUrl": "https://i.ytimg.com/vi/b2aZbtDuObM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fPnkAfXeArM",
        "title": "Ella Red on Audiotree Live (Full Session)",
        "sourceChannelId": "UCWjmAUHmajb1-eo5WKk_22A",
        "sourceChannelTitle": "Audiotree",
        "thumbnailUrl": "https://i.ytimg.com/vi/fPnkAfXeArM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "4KUkG76N3AM",
        "title": "Denis Villeneuve's favourite Bond moments",
        "sourceChannelId": "UC-FQUIVQ-bZiefzBiQAa8Fw",
        "sourceChannelTitle": "BBC Radio 1",
        "thumbnailUrl": "https://i.ytimg.com/vi/4KUkG76N3AM/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "food": {
    "categoryId": "food",
    "categoryName": "Food",
    "hue": 22,
    "builtAt": 1794334890150,
    "videos": [
      {
        "youtubeVideoId": "dUtnimSrLSQ",
        "title": "10 Levels of Potatoes (ft @FallowChefs) | With Babish",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/dUtnimSrLSQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-H3pjmp_aDg",
        "title": "The Best Grilled Cheese of All Time",
        "sourceChannelId": "UCUAg71CJEvFdOnujmep1Svw",
        "sourceChannelTitle": "Joshua Weissman Recipes",
        "thumbnailUrl": "https://i.ytimg.com/vi/-H3pjmp_aDg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "sif3mn9UFH4",
        "title": "Gordon Ramsay Can't Deal With This \"Fresh Frozen\" Food | Full Episode | Kitchen Nightmares",
        "sourceChannelId": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
        "sourceChannelTitle": "Gordon Ramsay",
        "thumbnailUrl": "https://i.ytimg.com/vi/sif3mn9UFH4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "xS02sPTgWc8",
        "title": "Our 5 Favorite Party Appetizers | Test Kitchen Talks | Bon Appétit",
        "sourceChannelId": "UCbpMy0Fg74eXXkvxJrtEn3w",
        "sourceChannelTitle": "Bon Appétit",
        "thumbnailUrl": "https://i.ytimg.com/vi/xS02sPTgWc8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ZOhcENWpock",
        "title": "I Tried EVERY Frozen Burrito",
        "sourceChannelId": "UC4avs5jYd_FvzQ8f0XYziqw",
        "sourceChannelTitle": "Beyond Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZOhcENWpock/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "5z4TqEFrRYQ",
        "title": "Chef vs Dad Testing Family Kitchen Gadgets",
        "sourceChannelId": "UCfyehHM_eo4g5JUyWmms2LA",
        "sourceChannelTitle": "Sorted Food",
        "thumbnailUrl": "https://i.ytimg.com/vi/5z4TqEFrRYQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "jHyxSnOSQgE",
        "title": "Preparing for Fall  #apple #fall #leaves",
        "sourceChannelId": "UCekQr9znsk2vWxBo3YiLq2w",
        "sourceChannelTitle": "You Suck At Cooking",
        "thumbnailUrl": "https://i.ytimg.com/vi/jHyxSnOSQgE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "yYWBELSNb2g",
        "title": "I Made a FULL Mexican Dinner for 4 People for Just $25!",
        "sourceChannelId": "UCbRj3Tcy1Zoz3rcf83nW5kw",
        "sourceChannelTitle": "SAM THE COOKING GUY",
        "thumbnailUrl": "https://i.ytimg.com/vi/yYWBELSNb2g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "eZY8Js-eE6k",
        "title": "The Secret to Perfect Tiramisu Is in the Ladyfingers",
        "sourceChannelId": "UCcjhYlL1WRBjKaJsMH_h7Lg",
        "sourceChannelTitle": "Epicurious",
        "thumbnailUrl": "https://i.ytimg.com/vi/eZY8Js-eE6k/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "H1-JB28hzyE",
        "title": "Can You Cook Pizza Faster Than A Delivery? | The Tuesday 20",
        "sourceChannelId": "UCpSgg_ECBj25s9moCDfSTsA",
        "sourceChannelTitle": "Jamie Oliver",
        "thumbnailUrl": "https://i.ytimg.com/vi/H1-JB28hzyE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "R3o8NLYZMeU",
        "title": "Easy Kimchi Recipe (Small Batch)",
        "sourceChannelId": "UC8gFadPgK2r1ndqLI04Xvvw",
        "sourceChannelTitle": "Maangchi",
        "thumbnailUrl": "https://i.ytimg.com/vi/R3o8NLYZMeU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "jlyuqWBo_W0",
        "title": "Giancarlo Esposito Eats His Last Meal",
        "sourceChannelId": "UCXGR70CkW_pXb8n52LzCCRw",
        "sourceChannelTitle": "Mythical Kitchen",
        "thumbnailUrl": "https://i.ytimg.com/vi/jlyuqWBo_W0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "COvngm7VbZs",
        "title": "I Tested Viral TikTok Recipes",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/COvngm7VbZs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kd6lUmbj5ig",
        "title": "The Best French Onion Soup Ever",
        "sourceChannelId": "UCUAg71CJEvFdOnujmep1Svw",
        "sourceChannelTitle": "Joshua Weissman Recipes",
        "thumbnailUrl": "https://i.ytimg.com/vi/kd6lUmbj5ig/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "69-fHxLSToA",
        "title": "Gordon Ramsay's Most OUTRAGEOUS Kitchen Nightmares Moments | NEW COMPILATION | Kitchen Nightmares",
        "sourceChannelId": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
        "sourceChannelTitle": "Gordon Ramsay",
        "thumbnailUrl": "https://i.ytimg.com/vi/69-fHxLSToA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "FNOnylMO7wU",
        "title": "The Right Way to Make Fried Rice",
        "sourceChannelId": "UCbpMy0Fg74eXXkvxJrtEn3w",
        "sourceChannelTitle": "Bon Appétit",
        "thumbnailUrl": "https://i.ytimg.com/vi/FNOnylMO7wU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "5lcYUY8yUZc",
        "title": "I Tried EVERY Monster While Playing Elden Ring",
        "sourceChannelId": "UC4avs5jYd_FvzQ8f0XYziqw",
        "sourceChannelTitle": "Beyond Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/5lcYUY8yUZc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "qs9U08mUxIQ",
        "title": "£10 BUDGET Recipe Relay Challenge | Pass it On",
        "sourceChannelId": "UCfyehHM_eo4g5JUyWmms2LA",
        "sourceChannelTitle": "Sorted Food",
        "thumbnailUrl": "https://i.ytimg.com/vi/qs9U08mUxIQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "mjf8i_qZ3u4",
        "title": "Jack it Up         #halloween #pumpkin #jackolantern",
        "sourceChannelId": "UCekQr9znsk2vWxBo3YiLq2w",
        "sourceChannelTitle": "You Suck At Cooking",
        "thumbnailUrl": "https://i.ytimg.com/vi/mjf8i_qZ3u4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "K-WfZ-VaKgc",
        "title": "I Can't Believe 4 Ingredients Make THIS!",
        "sourceChannelId": "UCbRj3Tcy1Zoz3rcf83nW5kw",
        "sourceChannelTitle": "SAM THE COOKING GUY",
        "thumbnailUrl": "https://i.ytimg.com/vi/K-WfZ-VaKgc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "RZTj_vDAFqM",
        "title": "How to Make Perfect Mascarpone Cream for Tiramisu",
        "sourceChannelId": "UCcjhYlL1WRBjKaJsMH_h7Lg",
        "sourceChannelTitle": "Epicurious",
        "thumbnailUrl": "https://i.ytimg.com/vi/RZTj_vDAFqM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "GlAx-afCrfg",
        "title": "20 Minutes on the Clock: Can Jamie beat the Roo? 🍕 #challenge #sabotage",
        "sourceChannelId": "UCpSgg_ECBj25s9moCDfSTsA",
        "sourceChannelTitle": "Jamie Oliver",
        "thumbnailUrl": "https://i.ytimg.com/vi/GlAx-afCrfg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "E5oO1rKZSVQ",
        "title": "Beef & Mushroom Rice Bowl  (소고기버섯덮밥)",
        "sourceChannelId": "UC8gFadPgK2r1ndqLI04Xvvw",
        "sourceChannelTitle": "Maangchi",
        "thumbnailUrl": "https://i.ytimg.com/vi/E5oO1rKZSVQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "iU9Ql5QDmkg",
        "title": "Matthew McConaughey is blown away by fried bologna",
        "sourceChannelId": "UCXGR70CkW_pXb8n52LzCCRw",
        "sourceChannelTitle": "Mythical Kitchen",
        "thumbnailUrl": "https://i.ytimg.com/vi/iU9Ql5QDmkg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HGWICoR6n2s",
        "title": "I Tried the Best (and WORST) Instant Pot Recipes",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/HGWICoR6n2s/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "7YmQDbJOelY",
        "title": "The Best Flaky Biscuits Ever",
        "sourceChannelId": "UCUAg71CJEvFdOnujmep1Svw",
        "sourceChannelTitle": "Joshua Weissman Recipes",
        "thumbnailUrl": "https://i.ytimg.com/vi/7YmQDbJOelY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "I-kx4seyE7w",
        "title": "\"I Would Pay You $100 Not To Sing!\" Owner WON'T Stop Singing Cher | Full Episode | Hotel Hell",
        "sourceChannelId": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
        "sourceChannelTitle": "Gordon Ramsay",
        "thumbnailUrl": "https://i.ytimg.com/vi/I-kx4seyE7w/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Nx2V2yC-ei4",
        "title": "The Test Kitchen Makes Their Perfect Thanksgiving Recipes | Bon Appétit",
        "sourceChannelId": "UCbpMy0Fg74eXXkvxJrtEn3w",
        "sourceChannelTitle": "Bon Appétit",
        "thumbnailUrl": "https://i.ytimg.com/vi/Nx2V2yC-ei4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "razoqJjP8K8",
        "title": "I Ranked EVERY Pizza Chain",
        "sourceChannelId": "UC4avs5jYd_FvzQ8f0XYziqw",
        "sourceChannelTitle": "Beyond Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/razoqJjP8K8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HeGHIqv7Vds",
        "title": "BUDGET BATTLES Marathon | Sorted Food",
        "sourceChannelId": "UCfyehHM_eo4g5JUyWmms2LA",
        "sourceChannelTitle": "Sorted Food",
        "thumbnailUrl": "https://i.ytimg.com/vi/HeGHIqv7Vds/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "7zvheC0F_Yk",
        "title": "History of Jack-O-Lanterns.  #pumpkin #halloween #jackolantern",
        "sourceChannelId": "UCekQr9znsk2vWxBo3YiLq2w",
        "sourceChannelTitle": "You Suck At Cooking",
        "thumbnailUrl": "https://i.ytimg.com/vi/7zvheC0F_Yk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Bp2r-gleRws",
        "title": "I Made the HELLFIRE BURGER… and Immediately Regretted It",
        "sourceChannelId": "UCbRj3Tcy1Zoz3rcf83nW5kw",
        "sourceChannelTitle": "SAM THE COOKING GUY",
        "thumbnailUrl": "https://i.ytimg.com/vi/Bp2r-gleRws/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "N6JDgJmiMFM",
        "title": "The Best Tiramisu You’ll Ever Make (Restaurant-Quality) | Epicurious 101",
        "sourceChannelId": "UCcjhYlL1WRBjKaJsMH_h7Lg",
        "sourceChannelTitle": "Epicurious",
        "thumbnailUrl": "https://i.ytimg.com/vi/N6JDgJmiMFM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1NldsAtQlOc",
        "title": "How To Make Bread At Home | Jamie Oliver",
        "sourceChannelId": "UCpSgg_ECBj25s9moCDfSTsA",
        "sourceChannelTitle": "Jamie Oliver",
        "thumbnailUrl": "https://i.ytimg.com/vi/1NldsAtQlOc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "xrTMJbjUJCA",
        "title": "Korean highway reststop potatoes",
        "sourceChannelId": "UC8gFadPgK2r1ndqLI04Xvvw",
        "sourceChannelTitle": "Maangchi",
        "thumbnailUrl": "https://i.ytimg.com/vi/xrTMJbjUJCA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "YtF1mj9j1m4",
        "title": "Surprising Josh Johnson with Nunchucks",
        "sourceChannelId": "UCXGR70CkW_pXb8n52LzCCRw",
        "sourceChannelTitle": "Mythical Kitchen",
        "thumbnailUrl": "https://i.ytimg.com/vi/YtF1mj9j1m4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "oWhnytD3QoA",
        "title": "10 Levels of Nachos | With Babish",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/oWhnytD3QoA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "mjJQetAQwW4",
        "title": "The Cheesiest Lasagna Ever",
        "sourceChannelId": "UCUAg71CJEvFdOnujmep1Svw",
        "sourceChannelTitle": "Joshua Weissman Recipes",
        "thumbnailUrl": "https://i.ytimg.com/vi/mjJQetAQwW4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2NAzRDjcdRk",
        "title": "Gordon Ramsay SHOCKED As Chef Needs A Medic Mid-Service! | Full Episode | Hell's Kitchen",
        "sourceChannelId": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
        "sourceChannelTitle": "Gordon Ramsay",
        "thumbnailUrl": "https://i.ytimg.com/vi/2NAzRDjcdRk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Fb_fZxOm-0Y",
        "title": "This Viral Restaurant Only Opens 3 Days a Week",
        "sourceChannelId": "UCbpMy0Fg74eXXkvxJrtEn3w",
        "sourceChannelTitle": "Bon Appétit",
        "thumbnailUrl": "https://i.ytimg.com/vi/Fb_fZxOm-0Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2upn2jhwMsU",
        "title": "I Tried EVERY Trader Joe’s Pumpkin Product (40+)",
        "sourceChannelId": "UC4avs5jYd_FvzQ8f0XYziqw",
        "sourceChannelTitle": "Beyond Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/2upn2jhwMsU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hN_jM5_eooc",
        "title": "Pro Chef BAFFLED By Forgotten Ancient Recipe",
        "sourceChannelId": "UCfyehHM_eo4g5JUyWmms2LA",
        "sourceChannelTitle": "Sorted Food",
        "thumbnailUrl": "https://i.ytimg.com/vi/hN_jM5_eooc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "IarUQl3EOdA",
        "title": "The Lemon Party                   #lemons #party #nature",
        "sourceChannelId": "UCekQr9znsk2vWxBo3YiLq2w",
        "sourceChannelTitle": "You Suck At Cooking",
        "thumbnailUrl": "https://i.ytimg.com/vi/IarUQl3EOdA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "RE-eipdL68k",
        "title": "Trust Me on This…",
        "sourceChannelId": "UCbRj3Tcy1Zoz3rcf83nW5kw",
        "sourceChannelTitle": "SAM THE COOKING GUY",
        "thumbnailUrl": "https://i.ytimg.com/vi/RE-eipdL68k/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "BrLTf27eUL0",
        "title": "Butcher Explains Which Steak to Buy | Ultimate Buying Guide | Epicurious",
        "sourceChannelId": "UCcjhYlL1WRBjKaJsMH_h7Lg",
        "sourceChannelTitle": "Epicurious",
        "thumbnailUrl": "https://i.ytimg.com/vi/BrLTf27eUL0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fQdHTDKlWM0",
        "title": "7 Sunday Dinner Ideas To Cook This Weekend",
        "sourceChannelId": "UCpSgg_ECBj25s9moCDfSTsA",
        "sourceChannelTitle": "Jamie Oliver",
        "thumbnailUrl": "https://i.ytimg.com/vi/fQdHTDKlWM0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "3EeQR3D5Ks0",
        "title": "Easy spicy tuna stew with canned tuna (Chamchi-jjigae: 참치찌개)",
        "sourceChannelId": "UC8gFadPgK2r1ndqLI04Xvvw",
        "sourceChannelTitle": "Maangchi",
        "thumbnailUrl": "https://i.ytimg.com/vi/3EeQR3D5Ks0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HCm32djYLkg",
        "title": "Dan & Phil Don't Say \"I Love You\"",
        "sourceChannelId": "UCXGR70CkW_pXb8n52LzCCRw",
        "sourceChannelTitle": "Mythical Kitchen",
        "thumbnailUrl": "https://i.ytimg.com/vi/HCm32djYLkg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "iZi0yEY60zE",
        "title": "I Tried Celebrities' Favorite Pastas | With Babish",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/iZi0yEY60zE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ILArlisjE3k",
        "title": "The McDonald's Egg McMuffin But Better",
        "sourceChannelId": "UCUAg71CJEvFdOnujmep1Svw",
        "sourceChannelTitle": "Joshua Weissman Recipes",
        "thumbnailUrl": "https://i.ytimg.com/vi/ILArlisjE3k/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "science": {
    "categoryId": "science",
    "categoryName": "Science",
    "hue": 170,
    "builtAt": 1794334890440,
    "videos": [
      {
        "youtubeVideoId": "rL0qEmTRI-I",
        "title": "Why do deserts get cold at night?",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/rL0qEmTRI-I/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "QQXCC6o_LHU",
        "title": "The Cult That Drove a Whole City Insane",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/QQXCC6o_LHU/hqdefault.jpg",
        "durationSec": 600
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
        "youtubeVideoId": "G99ycZV6g1g",
        "title": "Messiest Competition vs. Kid Wash",
        "sourceChannelId": "UC513PdAP2-jWkJunTh5kXRw",
        "sourceChannelTitle": "CrunchLabs",
        "thumbnailUrl": "https://i.ytimg.com/vi/G99ycZV6g1g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "sQjWFvpTg7Y",
        "title": "What I Found In My Safe",
        "sourceChannelId": "UC6nSFpj9HTCZ5t-N3Rm3-HA",
        "sourceChannelTitle": "Vsauce",
        "thumbnailUrl": "https://i.ytimg.com/vi/sQjWFvpTg7Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2pJY7kBXBb4",
        "title": "What Are We Really Doing While We Sleep | Compilation",
        "sourceChannelId": "UCUdettijNYvLAm4AixZv4RA",
        "sourceChannelTitle": "SciShow Psych",
        "thumbnailUrl": "https://i.ytimg.com/vi/2pJY7kBXBb4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "744fHerowJ4",
        "title": "Why Do We Even Need A Clock This Accurate?",
        "sourceChannelId": "UCeiYXex_fwgYDonaTcSIk6w",
        "sourceChannelTitle": "MinuteEarth",
        "thumbnailUrl": "https://i.ytimg.com/vi/744fHerowJ4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "teQi1dVC_X4",
        "title": "How two letters have made this island $100 million",
        "sourceChannelId": "UC1UmujXTizWokDHojdEOdow",
        "sourceChannelTitle": "InGenius by Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/teQi1dVC_X4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "e1zyr9K03c0",
        "title": "How Black Holes EAT Entire Galaxies",
        "sourceChannelId": "UC7_gcs09iThXybpVgjHZ_7g",
        "sourceChannelTitle": "PBS Space Time",
        "thumbnailUrl": "https://i.ytimg.com/vi/e1zyr9K03c0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fcjR9ORNtXc",
        "title": "Your mom's cells are still inside you",
        "sourceChannelId": "UCH4BNI0-FOK2dMXoFtViWHw",
        "sourceChannelTitle": "Be Smart",
        "thumbnailUrl": "https://i.ytimg.com/vi/fcjR9ORNtXc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "TVpMka43TFk",
        "title": "This magnet machine is scary",
        "sourceChannelId": "UCFhXFikryT4aFcLkLw2LBLA",
        "sourceChannelTitle": "NileRed",
        "thumbnailUrl": "https://i.ytimg.com/vi/TVpMka43TFk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "99rI-nOCajM",
        "title": "Most People Get This Physics Question Wrong",
        "sourceChannelId": "UC1VLQPn9cYSqx8plbk9RxxQ",
        "sourceChannelTitle": "The Action Lab",
        "thumbnailUrl": "https://i.ytimg.com/vi/99rI-nOCajM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "AJIKyn24Upc",
        "title": "Clever! A New Method to Find Alien Life",
        "sourceChannelId": "UC1yNl2E66ZzKApQdRuTQ4tw",
        "sourceChannelTitle": "Sabine Hossenfelder",
        "thumbnailUrl": "https://i.ytimg.com/vi/AJIKyn24Upc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KfODG5REyss",
        "title": "I finally saw quantum mechanics with my own eyes... (It's spookier than I expected)",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/KfODG5REyss/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HfaO94_KZ3c",
        "title": "The Fall of the Last Zulu King",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/HfaO94_KZ3c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "3L-_HyXdGP4",
        "title": "Rebecca's Amazing America's 250th Birthday Quilt - From Alabama's American Village On July 4th 2026.",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/3L-_HyXdGP4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "P1eps8HN2T8",
        "title": "Over-Engineered Pumpkin Carving",
        "sourceChannelId": "UC513PdAP2-jWkJunTh5kXRw",
        "sourceChannelTitle": "CrunchLabs",
        "thumbnailUrl": "https://i.ytimg.com/vi/P1eps8HN2T8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "sU3DYEJ1br0",
        "title": "Ghost Tape Number 10",
        "sourceChannelId": "UC6nSFpj9HTCZ5t-N3Rm3-HA",
        "sourceChannelTitle": "Vsauce",
        "thumbnailUrl": "https://i.ytimg.com/vi/sU3DYEJ1br0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "cIH1FyNTzMw",
        "title": "Being a New Parent is Hard | Compilation",
        "sourceChannelId": "UCUdettijNYvLAm4AixZv4RA",
        "sourceChannelTitle": "SciShow Psych",
        "thumbnailUrl": "https://i.ytimg.com/vi/cIH1FyNTzMw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "EVGE1Mu9PTQ",
        "title": "What makes some sunsets so spectacular?",
        "sourceChannelId": "UCeiYXex_fwgYDonaTcSIk6w",
        "sourceChannelTitle": "MinuteEarth",
        "thumbnailUrl": "https://i.ytimg.com/vi/EVGE1Mu9PTQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fwW3XVFrm9c",
        "title": "The Most Important Silicon Valley Company You've Never Heard Of",
        "sourceChannelId": "UC1UmujXTizWokDHojdEOdow",
        "sourceChannelTitle": "InGenius by Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/fwW3XVFrm9c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "RG5WhPmwGgk",
        "title": "So You Want To Understand Black Holes...",
        "sourceChannelId": "UC7_gcs09iThXybpVgjHZ_7g",
        "sourceChannelTitle": "PBS Space Time",
        "thumbnailUrl": "https://i.ytimg.com/vi/RG5WhPmwGgk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "4NEdVmPFP7g",
        "title": "Why are there no green mammals?",
        "sourceChannelId": "UCH4BNI0-FOK2dMXoFtViWHw",
        "sourceChannelTitle": "Be Smart",
        "thumbnailUrl": "https://i.ytimg.com/vi/4NEdVmPFP7g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "5OcnO7U0VeA",
        "title": "Making nasty soap",
        "sourceChannelId": "UCFhXFikryT4aFcLkLw2LBLA",
        "sourceChannelTitle": "NileRed",
        "thumbnailUrl": "https://i.ytimg.com/vi/5OcnO7U0VeA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "qB7d062jcNg",
        "title": "The Physics Problem With Tesla's Flying Car",
        "sourceChannelId": "UC1VLQPn9cYSqx8plbk9RxxQ",
        "sourceChannelTitle": "The Action Lab",
        "thumbnailUrl": "https://i.ytimg.com/vi/qB7d062jcNg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fu5xB5ls2sU",
        "title": "Something Isn’t Adding Up in Particle Physics",
        "sourceChannelId": "UC1yNl2E66ZzKApQdRuTQ4tw",
        "sourceChannelTitle": "Sabine Hossenfelder",
        "thumbnailUrl": "https://i.ytimg.com/vi/fu5xB5ls2sU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "xlNKNnXdtN4",
        "title": "These ponds help support half the people on Earth",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/xlNKNnXdtN4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kGvF7ATAqoo",
        "title": "The Real Story of the Mongolian Singing Dunes",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/kGvF7ATAqoo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Q9JcpSJwEK0",
        "title": "BIG NEWS From Dr. Fuqua",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q9JcpSJwEK0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ayr091ImrwU",
        "title": "Levitate A Ball With Water!",
        "sourceChannelId": "UC513PdAP2-jWkJunTh5kXRw",
        "sourceChannelTitle": "CrunchLabs",
        "thumbnailUrl": "https://i.ytimg.com/vi/ayr091ImrwU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "YYu76d3leR8",
        "title": "Thunder Tubes",
        "sourceChannelId": "UC6nSFpj9HTCZ5t-N3Rm3-HA",
        "sourceChannelTitle": "Vsauce",
        "thumbnailUrl": "https://i.ytimg.com/vi/YYu76d3leR8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "MX3RLigD-UA",
        "title": "Cinema Psychology | Compilation",
        "sourceChannelId": "UCUdettijNYvLAm4AixZv4RA",
        "sourceChannelTitle": "SciShow Psych",
        "thumbnailUrl": "https://i.ytimg.com/vi/MX3RLigD-UA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1bjkZYmQefA",
        "title": "How to Tame Your Pet AI Dragon",
        "sourceChannelId": "UCeiYXex_fwgYDonaTcSIk6w",
        "sourceChannelTitle": "MinuteEarth",
        "thumbnailUrl": "https://i.ytimg.com/vi/1bjkZYmQefA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "CTUqmUHvd2Y",
        "title": "We analysed 3 years worth of Polymarket trades. Here's what we found.",
        "sourceChannelId": "UC1UmujXTizWokDHojdEOdow",
        "sourceChannelTitle": "InGenius by Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/CTUqmUHvd2Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hq65Tpdx3-Q",
        "title": "The Hidden Structure of The Universe",
        "sourceChannelId": "UC7_gcs09iThXybpVgjHZ_7g",
        "sourceChannelTitle": "PBS Space Time",
        "thumbnailUrl": "https://i.ytimg.com/vi/hq65Tpdx3-Q/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "YgoiujmwLKI",
        "title": "The Real Cost of AI Will Shock You",
        "sourceChannelId": "UCH4BNI0-FOK2dMXoFtViWHw",
        "sourceChannelTitle": "Be Smart",
        "thumbnailUrl": "https://i.ytimg.com/vi/YgoiujmwLKI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "K56LuXCQ0ik",
        "title": "Making color changing mercury",
        "sourceChannelId": "UCFhXFikryT4aFcLkLw2LBLA",
        "sourceChannelTitle": "NileRed",
        "thumbnailUrl": "https://i.ytimg.com/vi/K56LuXCQ0ik/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "WzHKEXc-8f4",
        "title": "The Sun Is the Wrong Color",
        "sourceChannelId": "UC1VLQPn9cYSqx8plbk9RxxQ",
        "sourceChannelTitle": "The Action Lab",
        "thumbnailUrl": "https://i.ytimg.com/vi/WzHKEXc-8f4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "mh-e78kaQ8o",
        "title": "Physicists Can’t Explain This, And Now It’s a Problem",
        "sourceChannelId": "UC1yNl2E66ZzKApQdRuTQ4tw",
        "sourceChannelTitle": "Sabine Hossenfelder",
        "thumbnailUrl": "https://i.ytimg.com/vi/mh-e78kaQ8o/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zEmabFZvdqA",
        "title": "What happens if I lower this weight into the water?",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/zEmabFZvdqA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "AcjDyzYcIkc",
        "title": "Why These Nuns Cut off Their Noses and Lips",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/AcjDyzYcIkc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "i7_hi00ktgY",
        "title": "My Computer Update",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/i7_hi00ktgY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "4fvkgAJiBQI",
        "title": "I Engineered the First-Ever Human Car Wash",
        "sourceChannelId": "UC513PdAP2-jWkJunTh5kXRw",
        "sourceChannelTitle": "CrunchLabs",
        "thumbnailUrl": "https://i.ytimg.com/vi/4fvkgAJiBQI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "gNVj-FIxoe4",
        "title": "We Used To Think The Sun Was Cold",
        "sourceChannelId": "UC6nSFpj9HTCZ5t-N3Rm3-HA",
        "sourceChannelTitle": "Vsauce",
        "thumbnailUrl": "https://i.ytimg.com/vi/gNVj-FIxoe4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "TR1jAlI_VYw",
        "title": "The Psychology of Senses | Compilation",
        "sourceChannelId": "UCUdettijNYvLAm4AixZv4RA",
        "sourceChannelTitle": "SciShow Psych",
        "thumbnailUrl": "https://i.ytimg.com/vi/TR1jAlI_VYw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Tl-5u1AHQjo",
        "title": "Kate's National Geographic Journeys safari experience!",
        "sourceChannelId": "UCeiYXex_fwgYDonaTcSIk6w",
        "sourceChannelTitle": "MinuteEarth",
        "thumbnailUrl": "https://i.ytimg.com/vi/Tl-5u1AHQjo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "eczB0uUx_k8",
        "title": "This $40 Hunk of Metal Made China a Superpower",
        "sourceChannelId": "UC1UmujXTizWokDHojdEOdow",
        "sourceChannelTitle": "InGenius by Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/eczB0uUx_k8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "FSwND7rvjpo",
        "title": "Can We Turn The Solar System Into A Spaceship?",
        "sourceChannelId": "UC7_gcs09iThXybpVgjHZ_7g",
        "sourceChannelTitle": "PBS Space Time",
        "thumbnailUrl": "https://i.ytimg.com/vi/FSwND7rvjpo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "pBLPsvOdPSE",
        "title": "Where have humans never been?",
        "sourceChannelId": "UCH4BNI0-FOK2dMXoFtViWHw",
        "sourceChannelTitle": "Be Smart",
        "thumbnailUrl": "https://i.ytimg.com/vi/pBLPsvOdPSE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ID-K64Jk6JM",
        "title": "Turning air into alcohol",
        "sourceChannelId": "UCFhXFikryT4aFcLkLw2LBLA",
        "sourceChannelTitle": "NileRed",
        "thumbnailUrl": "https://i.ytimg.com/vi/ID-K64Jk6JM/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "sports": {
    "categoryId": "sports",
    "categoryName": "Sports",
    "hue": 140,
    "builtAt": 1794334890867,
    "videos": [
      {
        "youtubeVideoId": "URBkhN6-Pkc",
        "title": "BOUNCE IN A ROW",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/URBkhN6-Pkc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "obcHTkREpvI",
        "title": "Tenz + Ace = Good Times #twitch #valorant",
        "sourceChannelId": "UC8VddvuHJzIj__Ud0rY2_ww",
        "sourceChannelTitle": "Red Bull Esports",
        "thumbnailUrl": "https://i.ytimg.com/vi/obcHTkREpvI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NMa_9_WMggY",
        "title": "Mission: Hurricane Marathon and Finale Tonight",
        "sourceChannelId": "UCcSrNe5CbXOmsF645RYDe5w",
        "sourceChannelTitle": "WeatherSpyTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/NMa_9_WMggY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "jRnRoHv23KU",
        "title": "‘Blowing Me Away’ 👀 Daniel Jeremiah reacts to Arvell Reese’s recent stretch | Move the Sticks",
        "sourceChannelId": "UCiio0ydw439X13KyZgMIcHw",
        "sourceChannelTitle": "NFL on ESPN",
        "thumbnailUrl": "https://i.ytimg.com/vi/jRnRoHv23KU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Ixb4d-8HNeQ",
        "title": "Louane Plisson's Stunning Floor Routine at Dakar 2026 🇫🇷🤸‍♀️ | Youth Olympics",
        "sourceChannelId": "UC_kdjhHnkUbSImMrezjRyDQ",
        "sourceChannelTitle": "Olympics Gymnastics",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ixb4d-8HNeQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "DrjpFEoaSOw",
        "title": "Is This The WORST Sports Take Of All-Time?",
        "sourceChannelId": "UCJrWyyCRROi8NlQ6Xd9dx5Q",
        "sourceChannelTitle": "Almost Athletes with Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/DrjpFEoaSOw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "6ec1PbkVq7M",
        "title": "Someone's ready for winter 😅",
        "sourceChannelId": "UC9UGYdMSKasjY0mhU1lG4lQ",
        "sourceChannelTitle": "Nitro Circus",
        "thumbnailUrl": "https://i.ytimg.com/vi/6ec1PbkVq7M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Vofo3L74RpY",
        "title": "기술로 압도하겠다는 호킷 #UFC334",
        "sourceChannelId": "UCvgfXK4nTYKudb0rFR6noLA",
        "sourceChannelTitle": "UFC",
        "thumbnailUrl": "https://i.ytimg.com/vi/Vofo3L74RpY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "VyRXzWb4eB8",
        "title": "Yaxel had only good things to say about Jordan Poole ‼️🙌",
        "sourceChannelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
        "sourceChannelTitle": "NBA",
        "thumbnailUrl": "https://i.ytimg.com/vi/VyRXzWb4eB8/hqdefault.jpg",
        "durationSec": 600
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
        "youtubeVideoId": "ZRJm2ZOB7Lo",
        "title": "Dog got his own racetrack😭🔥",
        "sourceChannelId": "UCqQo7ewe87aYAe7ub5UqXMw",
        "sourceChannelTitle": "House of Highlights",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZRJm2ZOB7Lo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "LSlNkIJbd8w",
        "title": "Insane S&S Wallride 🎬 Wyatt Gentry + Parkin Costain #GoPro",
        "sourceChannelId": "UCqhnX4jA0A5paNd1v-zEysw",
        "sourceChannelTitle": "GoPro",
        "thumbnailUrl": "https://i.ytimg.com/vi/LSlNkIJbd8w/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "xwtCdHd7H7w",
        "title": "Ball Touched The CLOUDS ☁️ (feat. iShowSpeed)",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/xwtCdHd7H7w/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rcWvrg2Dx9w",
        "title": "How far can Team Spirit make it?🤔 #gaming #redbull #counterstrike #cs2 #esport",
        "sourceChannelId": "UC8VddvuHJzIj__Ud0rY2_ww",
        "sourceChannelTitle": "Red Bull Esports",
        "thumbnailUrl": "https://i.ytimg.com/vi/rcWvrg2Dx9w/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "eRHXwx0v8bE",
        "title": "Mission: Hurricane Returns Sunday, August 13th!",
        "sourceChannelId": "UCcSrNe5CbXOmsF645RYDe5w",
        "sourceChannelTitle": "WeatherSpyTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/eRHXwx0v8bE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Fiz7podqPUA",
        "title": "Do the Bills need to MAKE A TRADE?! 👀 Stephen A. weighs in | First Take",
        "sourceChannelId": "UCiio0ydw439X13KyZgMIcHw",
        "sourceChannelTitle": "NFL on ESPN",
        "thumbnailUrl": "https://i.ytimg.com/vi/Fiz7podqPUA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "qjxdqn7fOjY",
        "title": "Zhong Qi on the Beam! 🇨🇳🤸‍♀️ Artistic Gymnastics at Dakar 2026 | Youth Olympics",
        "sourceChannelId": "UC_kdjhHnkUbSImMrezjRyDQ",
        "sourceChannelTitle": "Olympics Gymnastics",
        "thumbnailUrl": "https://i.ytimg.com/vi/qjxdqn7fOjY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kKqddaxOB_o",
        "title": "Sparky Has a SERIOUS Problem With Thanksgiving",
        "sourceChannelId": "UCJrWyyCRROi8NlQ6Xd9dx5Q",
        "sourceChannelTitle": "Almost Athletes with Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/kKqddaxOB_o/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "krXg6yqZU5A",
        "title": "Jason Borosky returns to Double the Baldy Pipe",
        "sourceChannelId": "UC9UGYdMSKasjY0mhU1lG4lQ",
        "sourceChannelTitle": "Nitro Circus",
        "thumbnailUrl": "https://i.ytimg.com/vi/krXg6yqZU5A/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "I7K8HTklrG4",
        "title": "Josh Hokit reacting to Ciryl Gane's KO over Alex Pereira #ufc334",
        "sourceChannelId": "UCvgfXK4nTYKudb0rFR6noLA",
        "sourceChannelTitle": "UFC",
        "thumbnailUrl": "https://i.ytimg.com/vi/I7K8HTklrG4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "jGMchLz9oxM",
        "title": "Coach Steve Kerr with a funny comment on Coach Jimmy 😭",
        "sourceChannelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
        "sourceChannelTitle": "NBA",
        "thumbnailUrl": "https://i.ytimg.com/vi/jGMchLz9oxM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "l0gQUTnvpy0",
        "title": "@buffalobills Greg Rousseau schools the rookie 😅",
        "sourceChannelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        "sourceChannelTitle": "NFL",
        "thumbnailUrl": "https://i.ytimg.com/vi/l0gQUTnvpy0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "49ZUQsKGV64",
        "title": "Bro was just AURA farming😭🔥",
        "sourceChannelId": "UCqQo7ewe87aYAe7ub5UqXMw",
        "sourceChannelTitle": "House of Highlights",
        "thumbnailUrl": "https://i.ytimg.com/vi/49ZUQsKGV64/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "tAIjGmGVa1g",
        "title": "POV: 55ft MTB Freefall 🎬 Antoni Villoni #GoPro",
        "sourceChannelId": "UCqhnX4jA0A5paNd1v-zEysw",
        "sourceChannelTitle": "GoPro",
        "thumbnailUrl": "https://i.ytimg.com/vi/tAIjGmGVa1g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "vGZy0zCJ8MQ",
        "title": "Can We Make 6 In A Row? 🏀",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/vGZy0zCJ8MQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "WnYp6-oJ-Us",
        "title": "Did you guess it? 🥹🤌 #fortnite #rank #challenge @S@SypherPKmon@mongraalsav@mrsavageOff@AmarOfficial",
        "sourceChannelId": "UC8VddvuHJzIj__Ud0rY2_ww",
        "sourceChannelTitle": "Red Bull Esports",
        "thumbnailUrl": "https://i.ytimg.com/vi/WnYp6-oJ-Us/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "N4HRSTvF9NA",
        "title": "Mission: Hurricane BTS Compilation",
        "sourceChannelId": "UCcSrNe5CbXOmsF645RYDe5w",
        "sourceChannelTitle": "WeatherSpyTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/N4HRSTvF9NA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "yJ-kgIKZNm4",
        "title": "Is the 2027 NFL Draft class looking like a DISAPPOINTMENT? 🤔",
        "sourceChannelId": "UCiio0ydw439X13KyZgMIcHw",
        "sourceChannelTitle": "NFL on ESPN",
        "thumbnailUrl": "https://i.ytimg.com/vi/yJ-kgIKZNm4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ShpQZ-RLibQ",
        "title": "Li Lezheng on the Horizontal Bar at Dakar 2026! 🇨🇳 | Youth Olympics",
        "sourceChannelId": "UC_kdjhHnkUbSImMrezjRyDQ",
        "sourceChannelTitle": "Olympics Gymnastics",
        "thumbnailUrl": "https://i.ytimg.com/vi/ShpQZ-RLibQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1AJlJhXqo5k",
        "title": "Does Cornhole Count as a REAL Sport?",
        "sourceChannelId": "UCJrWyyCRROi8NlQ6Xd9dx5Q",
        "sourceChannelTitle": "Almost Athletes with Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/1AJlJhXqo5k/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "REM3E5d4YV4",
        "title": "Not our smartest idea...",
        "sourceChannelId": "UC9UGYdMSKasjY0mhU1lG4lQ",
        "sourceChannelTitle": "Nitro Circus",
        "thumbnailUrl": "https://i.ytimg.com/vi/REM3E5d4YV4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "7EyJnj-rpcQ",
        "title": "UFC 334 Embedded: Vlog Series - Episode 2",
        "sourceChannelId": "UCvgfXK4nTYKudb0rFR6noLA",
        "sourceChannelTitle": "UFC",
        "thumbnailUrl": "https://i.ytimg.com/vi/7EyJnj-rpcQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "z-pnATbVRw8",
        "title": "Had to throw Jordan Poole's sunglasses on... 😎 (📹: 957thegame/X)",
        "sourceChannelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
        "sourceChannelTitle": "NBA",
        "thumbnailUrl": "https://i.ytimg.com/vi/z-pnATbVRw8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "F9Ulo10MgPg",
        "title": "“You know I caught that, right?” | Every Angle of Broncos Safety Devon Key’s bizarre interception",
        "sourceChannelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        "sourceChannelTitle": "NFL",
        "thumbnailUrl": "https://i.ytimg.com/vi/F9Ulo10MgPg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "MojzyGnga5o",
        "title": "Mom just happy to be there🔥😅",
        "sourceChannelId": "UCqQo7ewe87aYAe7ub5UqXMw",
        "sourceChannelTitle": "House of Highlights",
        "thumbnailUrl": "https://i.ytimg.com/vi/MojzyGnga5o/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ZXldnr-bwsE",
        "title": "The Future of Helmets | GoPro x AGV",
        "sourceChannelId": "UCqhnX4jA0A5paNd1v-zEysw",
        "sourceChannelTitle": "GoPro",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZXldnr-bwsE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "PknrQZXny-8",
        "title": "This Trick Shot Took 10 HOURS 🤯",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/PknrQZXny-8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "0VCpPloplNY",
        "title": "Guess The Rank in FORTNITE ft. SypherPK, Amar, Mongraal & MrSavage",
        "sourceChannelId": "UC8VddvuHJzIj__Ud0rY2_ww",
        "sourceChannelTitle": "Red Bull Esports",
        "thumbnailUrl": "https://i.ytimg.com/vi/0VCpPloplNY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "dcGHp_BqcCM",
        "title": "Mission: Hurricane EP7",
        "sourceChannelId": "UCcSrNe5CbXOmsF645RYDe5w",
        "sourceChannelTitle": "WeatherSpyTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/dcGHp_BqcCM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "yS_b9ngAq4E",
        "title": "BOLD Prediction For Arvell Reese",
        "sourceChannelId": "UCiio0ydw439X13KyZgMIcHw",
        "sourceChannelTitle": "NFL on ESPN",
        "thumbnailUrl": "https://i.ytimg.com/vi/yS_b9ngAq4E/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HRMCWVyr5ss",
        "title": "Minamino Yume's Vault! 🇯🇵 | Dakar Youth Olympics",
        "sourceChannelId": "UC_kdjhHnkUbSImMrezjRyDQ",
        "sourceChannelTitle": "Olympics Gymnastics",
        "thumbnailUrl": "https://i.ytimg.com/vi/HRMCWVyr5ss/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NoLZHGW2Nl0",
        "title": "Tyler Toney Has a HUGE Problem With Duck Hunting Season",
        "sourceChannelId": "UCJrWyyCRROi8NlQ6Xd9dx5Q",
        "sourceChannelTitle": "Almost Athletes with Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/NoLZHGW2Nl0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "H2hTkbWvmO8",
        "title": "'He got merked' 😆",
        "sourceChannelId": "UC9UGYdMSKasjY0mhU1lG4lQ",
        "sourceChannelTitle": "Nitro Circus",
        "thumbnailUrl": "https://i.ytimg.com/vi/H2hTkbWvmO8/hqdefault.jpg",
        "durationSec": 600
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
        "youtubeVideoId": "NffLBR4im28",
        "title": "How Wemby?! 😱",
        "sourceChannelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
        "sourceChannelTitle": "NBA",
        "thumbnailUrl": "https://i.ytimg.com/vi/NffLBR4im28/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "x36-dlSgzpo",
        "title": "Top 15 Plays at Midseason! | 2026 NFL Season",
        "sourceChannelId": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
        "sourceChannelTitle": "NFL",
        "thumbnailUrl": "https://i.ytimg.com/vi/x36-dlSgzpo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "omu_DluQhsg",
        "title": "WARRIORS ARE RED HOT😤🔥",
        "sourceChannelId": "UCqQo7ewe87aYAe7ub5UqXMw",
        "sourceChannelTitle": "House of Highlights",
        "thumbnailUrl": "https://i.ytimg.com/vi/omu_DluQhsg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "csoJZlpT9AE",
        "title": "POV: Fighting a House Fire 🎬 Bryce Medina #GoPro",
        "sourceChannelId": "UCqhnX4jA0A5paNd1v-zEysw",
        "sourceChannelTitle": "GoPro",
        "thumbnailUrl": "https://i.ytimg.com/vi/csoJZlpT9AE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "dfzhNKPPqjM",
        "title": "WHO HIT THE TARGET?! 🎯",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/dfzhNKPPqjM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ILi9y-1bDj0",
        "title": "Trent 4k like 🤯 #g2 #vct #redbull",
        "sourceChannelId": "UC8VddvuHJzIj__Ud0rY2_ww",
        "sourceChannelTitle": "Red Bull Esports",
        "thumbnailUrl": "https://i.ytimg.com/vi/ILi9y-1bDj0/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "travel": {
    "categoryId": "travel",
    "categoryName": "Travel",
    "hue": 190,
    "builtAt": 1794334891152,
    "videos": [
      {
        "youtubeVideoId": "42M_CnizJxc",
        "title": "Daily Drop Pro Just Got a HUGE Upgrade (Full Demo)",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/42M_CnizJxc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "cBGSUS7iOgg",
        "title": "What happened to Yes Theory this year?",
        "sourceChannelId": "UCTd7KzdwnFE3lm6LCfYDmUQ",
        "sourceChannelTitle": "Seek Discomfort",
        "thumbnailUrl": "https://i.ytimg.com/vi/cBGSUS7iOgg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "CE0GHFSc2p8",
        "title": "This Changes EVERYTHING (Our Product Reveal)",
        "sourceChannelId": "UCi7KXaqqW_h6ifNVnudH0kQ",
        "sourceChannelTitle": "Christian LeBlanc",
        "thumbnailUrl": "https://i.ytimg.com/vi/CE0GHFSc2p8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "IqXl0JxxHx8",
        "title": "The Hardest Places on Earth to Be a Kid",
        "sourceChannelId": "UCodVXWu3aFyE1hGmbJrJJLQ",
        "sourceChannelTitle": "Drew Binsky Top Videos",
        "thumbnailUrl": "https://i.ytimg.com/vi/IqXl0JxxHx8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "sWBMwr3y9c4",
        "title": "Montenegro Food: What to Eat & Drink When You Visit",
        "sourceChannelId": "UCkFli83zdGzt7s-IsiRijXA",
        "sourceChannelTitle": "Wolters World Eats",
        "thumbnailUrl": "https://i.ytimg.com/vi/sWBMwr3y9c4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "5wypCQp11wo",
        "title": "24 Hours In An Abandoned Soviet City",
        "sourceChannelId": "UCxDZs_ltFFvn0FDHT6kmoXA",
        "sourceChannelTitle": "bald and bankrupt",
        "thumbnailUrl": "https://i.ytimg.com/vi/5wypCQp11wo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "W4lTVLOwzQQ",
        "title": "A Gondola Ride in Venice",
        "sourceChannelId": "UCJ7FVLKSOlpTNbuyvqOjPqw",
        "sourceChannelTitle": "RickStevesEurope",
        "thumbnailUrl": "https://i.ytimg.com/vi/W4lTVLOwzQQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Rw2KYD6WuqI",
        "title": "Proud to be a barefoot human with @vivobarefootTV ❤️ Use code 25EVAZUBECK for 25% off at checkout!",
        "sourceChannelId": "UCDTINI9skkeZNY2ZXnBqIkQ",
        "sourceChannelTitle": "Eva zu Beck",
        "thumbnailUrl": "https://i.ytimg.com/vi/Rw2KYD6WuqI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "lz06lrFWgmQ",
        "title": "Indians Kept Telling Me to Eat HERE!! (Lucknow Food Tour)",
        "sourceChannelId": "UCyEd6QBSgat5kkC6svyjudA",
        "sourceChannelTitle": "Mark Wiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/lz06lrFWgmQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "cabm6L_rgC8",
        "title": "Viper on a Remote Trail",
        "sourceChannelId": "UC_DmOS_FBvO4H27U7X0OtRg",
        "sourceChannelTitle": "Fearless &amp; Far",
        "thumbnailUrl": "https://i.ytimg.com/vi/cabm6L_rgC8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Rp2pJ9EfFAU",
        "title": "That Time I Went to North Korea as a Tourist (Full Documentary)",
        "sourceChannelId": "UCXulruMI7BHj3kGyosNa0jA",
        "sourceChannelTitle": "Indigo Traveller",
        "thumbnailUrl": "https://i.ytimg.com/vi/Rp2pJ9EfFAU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fTXEa-lERGc",
        "title": "Wild Journey to Colombia and Venezuela Bordertown 🇨🇴",
        "sourceChannelId": "UCD5v3wL-6NMG0SMMeR6TxsA",
        "sourceChannelTitle": "Extra Chopsticks",
        "thumbnailUrl": "https://i.ytimg.com/vi/fTXEa-lERGc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "4u9kJEYyk_o",
        "title": "My Chinese Wife Judges Pasta in Italy!!",
        "sourceChannelId": "UCiAq_SU0ED1C6vWFMnw8Ekg",
        "sourceChannelTitle": "The Food Ranger",
        "thumbnailUrl": "https://i.ytimg.com/vi/4u9kJEYyk_o/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "61XiQ9ahJjA",
        "title": "I Have 7 Chase Business Cards: This One’s the Best",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/61XiQ9ahJjA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "K3tG371iWhs",
        "title": "We Went Inside Brussels' Mysterious Blue Cube with 500 subscribers",
        "sourceChannelId": "UCTd7KzdwnFE3lm6LCfYDmUQ",
        "sourceChannelTitle": "Seek Discomfort",
        "thumbnailUrl": "https://i.ytimg.com/vi/K3tG371iWhs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "PnnjlMu-uyI",
        "title": "The Upgrade That Could Make or Break Lost Labs",
        "sourceChannelId": "UCi7KXaqqW_h6ifNVnudH0kQ",
        "sourceChannelTitle": "Christian LeBlanc",
        "thumbnailUrl": "https://i.ytimg.com/vi/PnnjlMu-uyI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rwX1YVzRn4M",
        "title": "Inside Appalachia: America’s Most Misunderstood Region",
        "sourceChannelId": "UCodVXWu3aFyE1hGmbJrJJLQ",
        "sourceChannelTitle": "Drew Binsky Top Videos",
        "thumbnailUrl": "https://i.ytimg.com/vi/rwX1YVzRn4M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "pG4ru332TYc",
        "title": "What to Eat in Florence, Italy - Traditional Florentine Food You MUST Try",
        "sourceChannelId": "UCkFli83zdGzt7s-IsiRijXA",
        "sourceChannelTitle": "Wolters World Eats",
        "thumbnailUrl": "https://i.ytimg.com/vi/pG4ru332TYc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ktb5PTSVSNg",
        "title": "I Investigated What Remains Of Yugoslavia",
        "sourceChannelId": "UCxDZs_ltFFvn0FDHT6kmoXA",
        "sourceChannelTitle": "bald and bankrupt",
        "thumbnailUrl": "https://i.ytimg.com/vi/ktb5PTSVSNg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2vZA83_gQCA",
        "title": "A Long Way Down",
        "sourceChannelId": "UCJ7FVLKSOlpTNbuyvqOjPqw",
        "sourceChannelTitle": "RickStevesEurope",
        "thumbnailUrl": "https://i.ytimg.com/vi/2vZA83_gQCA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kYyxSvOcr4k",
        "title": "Everyday life living in my tent alone (with horses & dogs)",
        "sourceChannelId": "UCDTINI9skkeZNY2ZXnBqIkQ",
        "sourceChannelTitle": "Eva zu Beck",
        "thumbnailUrl": "https://i.ytimg.com/vi/kYyxSvOcr4k/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "OMHTpynpU7g",
        "title": "How London’s Famous Salt Beef Beigel Is Made 🇬🇧",
        "sourceChannelId": "UCyEd6QBSgat5kkC6svyjudA",
        "sourceChannelTitle": "Mark Wiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/OMHTpynpU7g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hj-3KmH8a30",
        "title": "River Catch Wrapped in Leaves",
        "sourceChannelId": "UC_DmOS_FBvO4H27U7X0OtRg",
        "sourceChannelTitle": "Fearless &amp; Far",
        "thumbnailUrl": "https://i.ytimg.com/vi/hj-3KmH8a30/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "BPHjquSgzMQ",
        "title": "72 Hours Covering the Sudan War (I have no words)",
        "sourceChannelId": "UCXulruMI7BHj3kGyosNa0jA",
        "sourceChannelTitle": "Indigo Traveller",
        "thumbnailUrl": "https://i.ytimg.com/vi/BPHjquSgzMQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "gUHDGLVph9Y",
        "title": "Colombian Food They Don't Want You to See (CENSORED) 🇨🇴",
        "sourceChannelId": "UCD5v3wL-6NMG0SMMeR6TxsA",
        "sourceChannelTitle": "Extra Chopsticks",
        "thumbnailUrl": "https://i.ytimg.com/vi/gUHDGLVph9Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ntg3B80YRNo",
        "title": "Trying the viral Iranian “looti pulao” in Dubai at Iranish Restaurant!",
        "sourceChannelId": "UCiAq_SU0ED1C6vWFMnw8Ekg",
        "sourceChannelTitle": "The Food Ranger",
        "thumbnailUrl": "https://i.ytimg.com/vi/ntg3B80YRNo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zgHOkzd7lrs",
        "title": "5 SHOCKINGLY Affordable Travel Destinations",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/zgHOkzd7lrs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "OPg97iP7klM",
        "title": "I Visited the Town Where Everyone Lives on One Road",
        "sourceChannelId": "UCTd7KzdwnFE3lm6LCfYDmUQ",
        "sourceChannelTitle": "Seek Discomfort",
        "thumbnailUrl": "https://i.ytimg.com/vi/OPg97iP7klM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-ZfrST8diaY",
        "title": "Stressful Breakthroughs (Building a Product in 90 days)",
        "sourceChannelId": "UCi7KXaqqW_h6ifNVnudH0kQ",
        "sourceChannelTitle": "Christian LeBlanc",
        "thumbnailUrl": "https://i.ytimg.com/vi/-ZfrST8diaY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "pZYuphYyMrA",
        "title": "The Wildest Places People Live in Southeast Asia",
        "sourceChannelId": "UCodVXWu3aFyE1hGmbJrJJLQ",
        "sourceChannelTitle": "Drew Binsky Top Videos",
        "thumbnailUrl": "https://i.ytimg.com/vi/pZYuphYyMrA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "bjnLknm-lns",
        "title": "Eat Seasonal When you Travel Europe for the best Treats!",
        "sourceChannelId": "UCkFli83zdGzt7s-IsiRijXA",
        "sourceChannelTitle": "Wolters World Eats",
        "thumbnailUrl": "https://i.ytimg.com/vi/bjnLknm-lns/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "3eykcScdqJM",
        "title": "Investigating The Czechia Tourists Never See",
        "sourceChannelId": "UCxDZs_ltFFvn0FDHT6kmoXA",
        "sourceChannelTitle": "bald and bankrupt",
        "thumbnailUrl": "https://i.ytimg.com/vi/3eykcScdqJM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rA2EkEbClfg",
        "title": "Down the Grand Canal...",
        "sourceChannelId": "UCJ7FVLKSOlpTNbuyvqOjPqw",
        "sourceChannelTitle": "RickStevesEurope",
        "thumbnailUrl": "https://i.ytimg.com/vi/rA2EkEbClfg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HJ98D9wLmNY",
        "title": "My book, THE WILDER WAY, is now available in GERMAN! Buy it anywhere you buy your books!",
        "sourceChannelId": "UCDTINI9skkeZNY2ZXnBqIkQ",
        "sourceChannelTitle": "Eva zu Beck",
        "thumbnailUrl": "https://i.ytimg.com/vi/HJ98D9wLmNY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8tEXcv-8pIw",
        "title": "I Tried the World’s Most UNUSUAL Buffet!! (in Greenland 🇬🇱)",
        "sourceChannelId": "UCyEd6QBSgat5kkC6svyjudA",
        "sourceChannelTitle": "Mark Wiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/8tEXcv-8pIw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "tEgNK8FxcYs",
        "title": "Dinner Comes with Spikes",
        "sourceChannelId": "UC_DmOS_FBvO4H27U7X0OtRg",
        "sourceChannelTitle": "Fearless &amp; Far",
        "thumbnailUrl": "https://i.ytimg.com/vi/tEgNK8FxcYs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "LiIraJl0bBU",
        "title": "Walking into Peru's Roughest Neighborhood",
        "sourceChannelId": "UCXulruMI7BHj3kGyosNa0jA",
        "sourceChannelTitle": "Indigo Traveller",
        "thumbnailUrl": "https://i.ytimg.com/vi/LiIraJl0bBU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NPbYmiWvBHY",
        "title": "I've NEVER SEEN this Filipino sweet before 🇵🇭 So Unique!!",
        "sourceChannelId": "UCD5v3wL-6NMG0SMMeR6TxsA",
        "sourceChannelTitle": "Extra Chopsticks",
        "thumbnailUrl": "https://i.ytimg.com/vi/NPbYmiWvBHY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "PVJAvf947aI",
        "title": "Trying the most viral seafood restaurant in Greece",
        "sourceChannelId": "UCiAq_SU0ED1C6vWFMnw8Ekg",
        "sourceChannelTitle": "The Food Ranger",
        "thumbnailUrl": "https://i.ytimg.com/vi/PVJAvf947aI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "M1y8jNjOqHs",
        "title": "We Visited 60 Countries. These Are Our Best Flights.",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/M1y8jNjOqHs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "0KxZNNjuGOc",
        "title": "We Took Our Food Delivery Man to a Real Maasai Village",
        "sourceChannelId": "UCTd7KzdwnFE3lm6LCfYDmUQ",
        "sourceChannelTitle": "Seek Discomfort",
        "thumbnailUrl": "https://i.ytimg.com/vi/0KxZNNjuGOc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "5Y7KLAn0QAg",
        "title": "We visited the Factory (Building a Product in 90 days)",
        "sourceChannelId": "UCi7KXaqqW_h6ifNVnudH0kQ",
        "sourceChannelTitle": "Christian LeBlanc",
        "thumbnailUrl": "https://i.ytimg.com/vi/5Y7KLAn0QAg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "EwiNn8un55c",
        "title": "Visiting The World’s Most Unreachable Places",
        "sourceChannelId": "UCodVXWu3aFyE1hGmbJrJJLQ",
        "sourceChannelTitle": "Drew Binsky Top Videos",
        "thumbnailUrl": "https://i.ytimg.com/vi/EwiNn8un55c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "7XxKCSS_iZ4",
        "title": "The Best Food in Turin, Italy - What to Eat in Torino",
        "sourceChannelId": "UCkFli83zdGzt7s-IsiRijXA",
        "sourceChannelTitle": "Wolters World Eats",
        "thumbnailUrl": "https://i.ytimg.com/vi/7XxKCSS_iZ4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Ez3rzTM3IgQ",
        "title": "24 Hours In Venezuela's Worst Rated Hotel",
        "sourceChannelId": "UCxDZs_ltFFvn0FDHT6kmoXA",
        "sourceChannelTitle": "bald and bankrupt",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ez3rzTM3IgQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2K9Raloi9AY",
        "title": "Rome in 180°",
        "sourceChannelId": "UCJ7FVLKSOlpTNbuyvqOjPqw",
        "sourceChannelTitle": "RickStevesEurope",
        "thumbnailUrl": "https://i.ytimg.com/vi/2K9Raloi9AY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "vofF8V-40dU",
        "title": "I'm moving into a tent... (and I rescued a dog)",
        "sourceChannelId": "UCDTINI9skkeZNY2ZXnBqIkQ",
        "sourceChannelTitle": "Eva zu Beck",
        "thumbnailUrl": "https://i.ytimg.com/vi/vofF8V-40dU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "y0RKbdmLOcQ",
        "title": "Everything I Ate for 24 hours as a MasterChef Asia Judge in Macao!",
        "sourceChannelId": "UCyEd6QBSgat5kkC6svyjudA",
        "sourceChannelTitle": "Mark Wiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/y0RKbdmLOcQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ifYSO8p_ik4",
        "title": "Amazon Sweat Bees: Honey Hunt Gone Wrong",
        "sourceChannelId": "UC_DmOS_FBvO4H27U7X0OtRg",
        "sourceChannelTitle": "Fearless &amp; Far",
        "thumbnailUrl": "https://i.ytimg.com/vi/ifYSO8p_ik4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "xNXA8CRnZXY",
        "title": "Dust & Bones: Entering Peru’s Endless Desert Slums",
        "sourceChannelId": "UCXulruMI7BHj3kGyosNa0jA",
        "sourceChannelTitle": "Indigo Traveller",
        "thumbnailUrl": "https://i.ytimg.com/vi/xNXA8CRnZXY/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "film": {
    "categoryId": "film",
    "categoryName": "Film",
    "hue": 300,
    "builtAt": 1794334891651,
    "videos": [
      {
        "youtubeVideoId": "ZzaAa6yDvVk",
        "title": "Helene in Asheville / Scenes From a Disaster",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZzaAa6yDvVk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Dz7LH5YfYc0",
        "title": "Why Movie Extras Aren't Allowed to Talk",
        "sourceChannelId": "UCDylnpLJWDj2gKWujjwap9w",
        "sourceChannelTitle": "StudioBinder Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dz7LH5YfYc0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "5REIludod7c",
        "title": "Holiday Gift Guide: Best Accessories!",
        "sourceChannelId": "UCKy1dAqELo0zrOtPkf0eTMw",
        "sourceChannelTitle": "IGN",
        "thumbnailUrl": "https://i.ytimg.com/vi/5REIludod7c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-LDXBGgs1QI",
        "title": "The Anatomy of Genres — A Conversation with John Truby | @BeyondTheScreenplay",
        "sourceChannelId": "UCErSSa3CaP_GJxmFpdjG9Jw",
        "sourceChannelTitle": "Lessons from the Screenplay",
        "thumbnailUrl": "https://i.ytimg.com/vi/-LDXBGgs1QI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "utJ4ld9n9vE",
        "title": "The moment you realize it's 1993 and the movie's making you feel super weird",
        "sourceChannelId": "UCzjbia0NqUsSL1_-loJihMg",
        "sourceChannelTitle": "CinemaStix",
        "thumbnailUrl": "https://i.ytimg.com/vi/utJ4ld9n9vE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "b6b_uVA1ZSo",
        "title": "Van Gogh - Beauty in Suffering",
        "sourceChannelId": "UCuPgdqQKpq4T4zeqmTelnFg",
        "sourceChannelTitle": "kaptainkristian",
        "thumbnailUrl": "https://i.ytimg.com/vi/b6b_uVA1ZSo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "V04X299hq9c",
        "title": "Succession - How To Film a Car Scene",
        "sourceChannelId": "UCWTFGPpNQ0Ms6afXhaWDiRw",
        "sourceChannelTitle": "Now You See It",
        "thumbnailUrl": "https://i.ytimg.com/vi/V04X299hq9c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "a2jlDGZJRBI",
        "title": "The Worldwide Scramble to Copy Star Wars",
        "sourceChannelId": "UCJkMlOu7faDgqh4PfzbpLdg",
        "sourceChannelTitle": "Nerdwriter1",
        "thumbnailUrl": "https://i.ytimg.com/vi/a2jlDGZJRBI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ei1QhjvNnVM",
        "title": "Game of Clones",
        "sourceChannelId": "UCx0L2ZdYfiq-tsAXb8IXpQg",
        "sourceChannelTitle": "Just Write",
        "thumbnailUrl": "https://i.ytimg.com/vi/ei1QhjvNnVM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Jobvn4xLGRU",
        "title": "I Made D&D Table SO BIG my friends can never Leave",
        "sourceChannelId": "UCSpFnDQr88xCZ80N-X7t0nQ",
        "sourceChannelTitle": "Corridor Crew",
        "thumbnailUrl": "https://i.ytimg.com/vi/Jobvn4xLGRU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "obxiFt-FROk",
        "title": "Hey - It's been a Bit...",
        "sourceChannelId": "UCSFAYalJ2Q7Tm_WmLgetmeg",
        "sourceChannelTitle": "Filmmaker IQ",
        "thumbnailUrl": "https://i.ytimg.com/vi/obxiFt-FROk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Nl7q_96GWV0",
        "title": "A trip to Granville Island @VIFFest Industry 2026",
        "sourceChannelId": "UCjFqcJQXGZ6T6sxyFB-5i6A",
        "sourceChannelTitle": "Every Frame a Painting",
        "thumbnailUrl": "https://i.ytimg.com/vi/Nl7q_96GWV0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "TibHDhxlEzc",
        "title": "A Battleship on Tracks, Because Why Not.",
        "sourceChannelId": "UCfjaAUlTZRHJapJmCT6eyIg",
        "sourceChannelTitle": "Spacedock",
        "thumbnailUrl": "https://i.ytimg.com/vi/TibHDhxlEzc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Cd4vtY-uY9I",
        "title": "Why They Can't Make World War 2 Feel This \"Real\" Anymore",
        "sourceChannelId": "UCs7nPQIEba0T3tGOWWsZpJQ",
        "sourceChannelTitle": "Like Stories of Old",
        "thumbnailUrl": "https://i.ytimg.com/vi/Cd4vtY-uY9I/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "LdbmF1bzaUI",
        "title": "when you notice the sunlight streaming through the trees - 1 Hour Nature Ambience",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/LdbmF1bzaUI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "0VZSru3ol98",
        "title": "How Film Crews Prevent Ruined Shots",
        "sourceChannelId": "UCDylnpLJWDj2gKWujjwap9w",
        "sourceChannelTitle": "StudioBinder Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/0VZSru3ol98/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "g1Jbb45TDrk",
        "title": "Which Darunia had the better Lost Woods dance in Ocarina of Time? #zelda #ocarinaoftime #og #ign",
        "sourceChannelId": "UCKy1dAqELo0zrOtPkf0eTMw",
        "sourceChannelTitle": "IGN",
        "thumbnailUrl": "https://i.ytimg.com/vi/g1Jbb45TDrk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "IuaaTJxhSEc",
        "title": "What’s new on my other channels",
        "sourceChannelId": "UCErSSa3CaP_GJxmFpdjG9Jw",
        "sourceChannelTitle": "Lessons from the Screenplay",
        "thumbnailUrl": "https://i.ytimg.com/vi/IuaaTJxhSEc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "yAHnEXHMACA",
        "title": "“the filmmakers somehow knew this would work…”",
        "sourceChannelId": "UCzjbia0NqUsSL1_-loJihMg",
        "sourceChannelTitle": "CinemaStix",
        "thumbnailUrl": "https://i.ytimg.com/vi/yAHnEXHMACA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "01BrRGEzPaQ",
        "title": "When Tarantino Learned To Shut Up",
        "sourceChannelId": "UCuPgdqQKpq4T4zeqmTelnFg",
        "sourceChannelTitle": "kaptainkristian",
        "thumbnailUrl": "https://i.ytimg.com/vi/01BrRGEzPaQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "uS-CXPJVtFI",
        "title": "What's In a Name? Why Character Names Matter",
        "sourceChannelId": "UCWTFGPpNQ0Ms6afXhaWDiRw",
        "sourceChannelTitle": "Now You See It",
        "thumbnailUrl": "https://i.ytimg.com/vi/uS-CXPJVtFI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1AdRE5qFzuE",
        "title": "Why Rich People Used to Collect Unicorn Horns",
        "sourceChannelId": "UCJkMlOu7faDgqh4PfzbpLdg",
        "sourceChannelTitle": "Nerdwriter1",
        "thumbnailUrl": "https://i.ytimg.com/vi/1AdRE5qFzuE/hqdefault.jpg",
        "durationSec": 600
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
        "youtubeVideoId": "tPOmWB1ui3o",
        "title": "A New Challenger approaches...",
        "sourceChannelId": "UCSpFnDQr88xCZ80N-X7t0nQ",
        "sourceChannelTitle": "Corridor Crew",
        "thumbnailUrl": "https://i.ytimg.com/vi/tPOmWB1ui3o/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hDZ0DyHfpkI",
        "title": "Saying Adios to 2025 Stream!",
        "sourceChannelId": "UCSFAYalJ2Q7Tm_WmLgetmeg",
        "sourceChannelTitle": "Filmmaker IQ",
        "thumbnailUrl": "https://i.ytimg.com/vi/hDZ0DyHfpkI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "GRgb8oDtxOc",
        "title": "Things you learn in South Korea @VIFFest 2026 Industry",
        "sourceChannelId": "UCjFqcJQXGZ6T6sxyFB-5i6A",
        "sourceChannelTitle": "Every Frame a Painting",
        "thumbnailUrl": "https://i.ytimg.com/vi/GRgb8oDtxOc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NajjQV0ljTo",
        "title": "Warships That Carry Warships",
        "sourceChannelId": "UCfjaAUlTZRHJapJmCT6eyIg",
        "sourceChannelTitle": "Spacedock",
        "thumbnailUrl": "https://i.ytimg.com/vi/NajjQV0ljTo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "J56XPMA6KHI",
        "title": "Modern Movie Culture has a Problem",
        "sourceChannelId": "UCs7nPQIEba0T3tGOWWsZpJQ",
        "sourceChannelTitle": "Like Stories of Old",
        "thumbnailUrl": "https://i.ytimg.com/vi/J56XPMA6KHI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zfem5233D_8",
        "title": "Is The Algorithm Speaking To People?",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/zfem5233D_8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Wq8_S3drQg8",
        "title": "The Art of Faking It in Movies",
        "sourceChannelId": "UCDylnpLJWDj2gKWujjwap9w",
        "sourceChannelTitle": "StudioBinder Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/Wq8_S3drQg8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zjIXBESV0ew",
        "title": "Marvel Rivals - Official Nightcrawler Character Reveal Trailer",
        "sourceChannelId": "UCKy1dAqELo0zrOtPkf0eTMw",
        "sourceChannelTitle": "IGN",
        "thumbnailUrl": "https://i.ytimg.com/vi/zjIXBESV0ew/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-elPKyfpJrM",
        "title": "Why Mass Effect Should Be the Next Game of Thrones",
        "sourceChannelId": "UCErSSa3CaP_GJxmFpdjG9Jw",
        "sourceChannelTitle": "Lessons from the Screenplay",
        "thumbnailUrl": "https://i.ytimg.com/vi/-elPKyfpJrM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "tWa7Rkpm5rg",
        "title": "“The filmmakers really didn’t think we’d notice this…”",
        "sourceChannelId": "UCzjbia0NqUsSL1_-loJihMg",
        "sourceChannelTitle": "CinemaStix",
        "thumbnailUrl": "https://i.ytimg.com/vi/tWa7Rkpm5rg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "4O9RY2n-ckg",
        "title": "100 Years of History in 100 Films",
        "sourceChannelId": "UCuPgdqQKpq4T4zeqmTelnFg",
        "sourceChannelTitle": "kaptainkristian",
        "thumbnailUrl": "https://i.ytimg.com/vi/4O9RY2n-ckg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "omn9OXRwTro",
        "title": "EXPLOSIONS in Movies: More Than Just Spectacle",
        "sourceChannelId": "UCWTFGPpNQ0Ms6afXhaWDiRw",
        "sourceChannelTitle": "Now You See It",
        "thumbnailUrl": "https://i.ytimg.com/vi/omn9OXRwTro/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "41UQ1JIvXtI",
        "title": "Mary Cassatt: The Impressionist Who Painted The Mind",
        "sourceChannelId": "UCJkMlOu7faDgqh4PfzbpLdg",
        "sourceChannelTitle": "Nerdwriter1",
        "thumbnailUrl": "https://i.ytimg.com/vi/41UQ1JIvXtI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "AcBVlsholwA",
        "title": "What The Last Of Us Actually Changed",
        "sourceChannelId": "UCx0L2ZdYfiq-tsAXb8IXpQg",
        "sourceChannelTitle": "Just Write",
        "thumbnailUrl": "https://i.ytimg.com/vi/AcBVlsholwA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "FBV-leryHu8",
        "title": "VFX Artists React to Bad & Great CGi 250",
        "sourceChannelId": "UCSpFnDQr88xCZ80N-X7t0nQ",
        "sourceChannelTitle": "Corridor Crew",
        "thumbnailUrl": "https://i.ytimg.com/vi/FBV-leryHu8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fVABEb4l7xs",
        "title": "Checking In + Your Chats",
        "sourceChannelId": "UCSFAYalJ2Q7Tm_WmLgetmeg",
        "sourceChannelTitle": "Filmmaker IQ",
        "thumbnailUrl": "https://i.ytimg.com/vi/fVABEb4l7xs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "yJiZGtm_Xpc",
        "title": "A new live event @VIFFest Industry 2026",
        "sourceChannelId": "UCjFqcJQXGZ6T6sxyFB-5i6A",
        "sourceChannelTitle": "Every Frame a Painting",
        "thumbnailUrl": "https://i.ytimg.com/vi/yJiZGtm_Xpc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "BbyEGvL57_M",
        "title": "Using Teleportation as a Weapon",
        "sourceChannelId": "UCfjaAUlTZRHJapJmCT6eyIg",
        "sourceChannelTitle": "Spacedock",
        "thumbnailUrl": "https://i.ytimg.com/vi/BbyEGvL57_M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "UVA7phJ4iTc",
        "title": "The Ryan Gosling Movie That Became Every Guy's Personality",
        "sourceChannelId": "UCs7nPQIEba0T3tGOWWsZpJQ",
        "sourceChannelTitle": "Like Stories of Old",
        "thumbnailUrl": "https://i.ytimg.com/vi/UVA7phJ4iTc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "FX49j9ImvlU",
        "title": "My Favorite Pacino Performance #thomasflight #acting",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/FX49j9ImvlU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NK5wsSLY5-o",
        "title": "How Movies Replace Actors Without You Noticing",
        "sourceChannelId": "UCDylnpLJWDj2gKWujjwap9w",
        "sourceChannelTitle": "StudioBinder Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/NK5wsSLY5-o/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "PbvwXckJKrw",
        "title": "Minerva Rising - Official Launch Trailer",
        "sourceChannelId": "UCKy1dAqELo0zrOtPkf0eTMw",
        "sourceChannelTitle": "IGN",
        "thumbnailUrl": "https://i.ytimg.com/vi/PbvwXckJKrw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Y5S4PyBR364",
        "title": "How Good Filmmaking Brings a Script to Life",
        "sourceChannelId": "UCErSSa3CaP_GJxmFpdjG9Jw",
        "sourceChannelTitle": "Lessons from the Screenplay",
        "thumbnailUrl": "https://i.ytimg.com/vi/Y5S4PyBR364/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KbQVhxtbCso",
        "title": "It’s dirtier than Star Wars",
        "sourceChannelId": "UCzjbia0NqUsSL1_-loJihMg",
        "sourceChannelTitle": "CinemaStix",
        "thumbnailUrl": "https://i.ytimg.com/vi/KbQVhxtbCso/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2qZjAnUqZBM",
        "title": "Tolkien's Secret Ingredient To Worldbuilding",
        "sourceChannelId": "UCuPgdqQKpq4T4zeqmTelnFg",
        "sourceChannelTitle": "kaptainkristian",
        "thumbnailUrl": "https://i.ytimg.com/vi/2qZjAnUqZBM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "taRU6iMQrhY",
        "title": "How to (and Not to) Show Panic Attacks On-Screen",
        "sourceChannelId": "UCWTFGPpNQ0Ms6afXhaWDiRw",
        "sourceChannelTitle": "Now You See It",
        "thumbnailUrl": "https://i.ytimg.com/vi/taRU6iMQrhY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "XUmgIQIpg-E",
        "title": "The Art World Couldn't Understand William Blake",
        "sourceChannelId": "UCJkMlOu7faDgqh4PfzbpLdg",
        "sourceChannelTitle": "Nerdwriter1",
        "thumbnailUrl": "https://i.ytimg.com/vi/XUmgIQIpg-E/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "fitness": {
    "categoryId": "fitness",
    "categoryName": "Fitness",
    "hue": 100,
    "builtAt": 1794334891888,
    "videos": [
      {
        "youtubeVideoId": "xVuvVmZdIpQ",
        "title": "How to maintain motivation for long-term goals",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/xVuvVmZdIpQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hzoaClKPAUs",
        "title": "The ONLY 2 DB Biceps Exercises You Need (NO, SERIOUSLY!)",
        "sourceChannelId": "UCe0TLA0EsQbE-MjuHXevj2A",
        "sourceChannelTitle": "ATHLEAN-X™",
        "thumbnailUrl": "https://i.ytimg.com/vi/hzoaClKPAUs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "CmreFQoVans",
        "title": "I Trained With Rice for 30 Days!",
        "sourceChannelId": "UCZIIRX8rkNjVpP-oLMHpeDw",
        "sourceChannelTitle": "Calisthenicmovement",
        "thumbnailUrl": "https://i.ytimg.com/vi/CmreFQoVans/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "w7lWAtaQlkQ",
        "title": "Work-to-Rest Ratios & Strength: What You Need to Know",
        "sourceChannelId": "UCiP6wD_tYlYLYh3agzbByWQ",
        "sourceChannelTitle": "FitnessBlender",
        "thumbnailUrl": "https://i.ytimg.com/vi/w7lWAtaQlkQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2dn-mcgyC8s",
        "title": "7 Minute Morning Meditation | Stillness to Start Your Day.",
        "sourceChannelId": "UCFKE7WVJfvaHW5q283SxchA",
        "sourceChannelTitle": "Yoga With Adriene",
        "thumbnailUrl": "https://i.ytimg.com/vi/2dn-mcgyC8s/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "eP1AEH9P2XE",
        "title": "How to Turn a Bad Workout Into a GOOD One",
        "sourceChannelId": "UCadiU6WTKl65HUwEih1XLYg",
        "sourceChannelTitle": "PictureFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/eP1AEH9P2XE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "tfY99dJ-A88",
        "title": "Casual 1950's style",
        "sourceChannelId": "UCKf0UqBiCQI4Ol0To9V0pKQ",
        "sourceChannelTitle": "Buff Dudes",
        "thumbnailUrl": "https://i.ytimg.com/vi/tfY99dJ-A88/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "txsjs8Mvits",
        "title": "What I would about society #stayflexy #ad @wearpeluva",
        "sourceChannelId": "UCM2ra7Od2jliHB9TLPKt76w",
        "sourceChannelTitle": "MovementbyDavid",
        "thumbnailUrl": "https://i.ytimg.com/vi/txsjs8Mvits/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "j2xY50x-zr4",
        "title": "20 Min Full Body Workout with Dumbbell - At Home Workout",
        "sourceChannelId": "UCCgLoMYIyP0U56dEhEL1wXQ",
        "sourceChannelTitle": "Chloe Ting",
        "thumbnailUrl": "https://i.ytimg.com/vi/j2xY50x-zr4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fFEOLAGTkjM",
        "title": "pov: you’re in your 3rd trimester",
        "sourceChannelId": "UCpQ34afVgk8cRQBjSJ1xuJQ",
        "sourceChannelTitle": "MadFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/fFEOLAGTkjM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "dQqezMeNspA",
        "title": "20 MIN SHANGHAI DANCE WORKOUT - all levels - happy, cute, fun, playful",
        "sourceChannelId": "UChVRfsT_ASBZk10o0An7Ucg",
        "sourceChannelTitle": "Pamela Reif",
        "thumbnailUrl": "https://i.ytimg.com/vi/dQqezMeNspA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "QVJDTBX_8Po",
        "title": "The Perfect Calisthenics Back & Biceps Workout for Beginners & Advanced",
        "sourceChannelId": "UCgFItI58gEggW1-39DxjVbA",
        "sourceChannelTitle": "CALISTHENICS FAMILY",
        "thumbnailUrl": "https://i.ytimg.com/vi/QVJDTBX_8Po/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "CoWcu2b498g",
        "title": "How to find your purpose",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/CoWcu2b498g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "GOxz6bLRMsk",
        "title": "Give Me 2 Dumbbells... I'll Build You a BIGGER Chest",
        "sourceChannelId": "UCe0TLA0EsQbE-MjuHXevj2A",
        "sourceChannelTitle": "ATHLEAN-X™",
        "thumbnailUrl": "https://i.ytimg.com/vi/GOxz6bLRMsk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "nIHuncyH_zc",
        "title": "Are You Lying About Your Pull Ups?",
        "sourceChannelId": "UCZIIRX8rkNjVpP-oLMHpeDw",
        "sourceChannelTitle": "Calisthenicmovement",
        "thumbnailUrl": "https://i.ytimg.com/vi/nIHuncyH_zc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "T_azyub3mPQ",
        "title": "Reps & Weight Ratios: What Really Builds Strength?",
        "sourceChannelId": "UCiP6wD_tYlYLYh3agzbByWQ",
        "sourceChannelTitle": "FitnessBlender",
        "thumbnailUrl": "https://i.ytimg.com/vi/T_azyub3mPQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "E9AwOaDbclg",
        "title": "Halloween Yoga | A Red Riding Hood Adventure",
        "sourceChannelId": "UCFKE7WVJfvaHW5q283SxchA",
        "sourceChannelTitle": "Yoga With Adriene",
        "thumbnailUrl": "https://i.ytimg.com/vi/E9AwOaDbclg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "k0E1uGBFxv4",
        "title": "Berberine vs. Ozempic: What's the REAL Difference?",
        "sourceChannelId": "UCadiU6WTKl65HUwEih1XLYg",
        "sourceChannelTitle": "PictureFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/k0E1uGBFxv4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "aCH0eUXFMk0",
        "title": "I Dressed Like a 1950s Man for a Week, Here's What Happened",
        "sourceChannelId": "UCKf0UqBiCQI4Ol0To9V0pKQ",
        "sourceChannelTitle": "Buff Dudes",
        "thumbnailUrl": "https://i.ytimg.com/vi/aCH0eUXFMk0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1GvHr5KBWMg",
        "title": "These abs tests... HARD #stayflexy",
        "sourceChannelId": "UCM2ra7Od2jliHB9TLPKt76w",
        "sourceChannelTitle": "MovementbyDavid",
        "thumbnailUrl": "https://i.ytimg.com/vi/1GvHr5KBWMg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "p-_Dfw5XbmI",
        "title": "15 Min Dumbbell Upper Body Workout (Back, Arms & Shoulders)",
        "sourceChannelId": "UCCgLoMYIyP0U56dEhEL1wXQ",
        "sourceChannelTitle": "Chloe Ting",
        "thumbnailUrl": "https://i.ytimg.com/vi/p-_Dfw5XbmI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "UZRYKxY6mdw",
        "title": "Focusing on stability during pregnancy is one of the best things I’ve done!",
        "sourceChannelId": "UCpQ34afVgk8cRQBjSJ1xuJQ",
        "sourceChannelTitle": "MadFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/UZRYKxY6mdw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "cwXDfR3AO9o",
        "title": "15 MIN TONED LEGS BEGINNER - Standing, focus: inner thigh, butt & calves I Chair + Book",
        "sourceChannelId": "UChVRfsT_ASBZk10o0An7Ucg",
        "sourceChannelTitle": "Pamela Reif",
        "thumbnailUrl": "https://i.ytimg.com/vi/cwXDfR3AO9o/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "tgk77qH9UmQ",
        "title": "Top 3 Core Exercises for Calisthenics",
        "sourceChannelId": "UCgFItI58gEggW1-39DxjVbA",
        "sourceChannelTitle": "CALISTHENICS FAMILY",
        "thumbnailUrl": "https://i.ytimg.com/vi/tgk77qH9UmQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hzU-Zy1aAgM",
        "title": "Reducing procrastination",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/hzU-Zy1aAgM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hRg-HRt0flU",
        "title": "It's Weird, But it Drops Body Fat Faster Than Dieting!",
        "sourceChannelId": "UCe0TLA0EsQbE-MjuHXevj2A",
        "sourceChannelTitle": "ATHLEAN-X™",
        "thumbnailUrl": "https://i.ytimg.com/vi/hRg-HRt0flU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zvcsrmzomH4",
        "title": "Don't Feel Like Working Out - Try This!",
        "sourceChannelId": "UCZIIRX8rkNjVpP-oLMHpeDw",
        "sourceChannelTitle": "Calisthenicmovement",
        "thumbnailUrl": "https://i.ytimg.com/vi/zvcsrmzomH4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Dg26eIEgH50",
        "title": "[FREE Day 4]- Bored Easily Core & HIIT Cardio: Blended Exercises with No Equipment",
        "sourceChannelId": "UCiP6wD_tYlYLYh3agzbByWQ",
        "sourceChannelTitle": "FitnessBlender",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dg26eIEgH50/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "aA9EI3NKUS4",
        "title": "Find Your Flexibility | Full Body Yoga",
        "sourceChannelId": "UCFKE7WVJfvaHW5q283SxchA",
        "sourceChannelTitle": "Yoga With Adriene",
        "thumbnailUrl": "https://i.ytimg.com/vi/aA9EI3NKUS4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "nuIkrzh7H9M",
        "title": "Some of My Worst Advice... DEBUNKED",
        "sourceChannelId": "UCadiU6WTKl65HUwEih1XLYg",
        "sourceChannelTitle": "PictureFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/nuIkrzh7H9M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "UPLD5E8ERtc",
        "title": "when you run into the other evil homie 🎃",
        "sourceChannelId": "UCKf0UqBiCQI4Ol0To9V0pKQ",
        "sourceChannelTitle": "Buff Dudes",
        "thumbnailUrl": "https://i.ytimg.com/vi/UPLD5E8ERtc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "yvax7DfQs1I",
        "title": "Ankle Mobility!",
        "sourceChannelId": "UCM2ra7Od2jliHB9TLPKt76w",
        "sourceChannelTitle": "MovementbyDavid",
        "thumbnailUrl": "https://i.ytimg.com/vi/yvax7DfQs1I/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "pbCNzNhTOuI",
        "title": "10 Min Abs with Dumbbell - Feel the BURN (At Home Workout)",
        "sourceChannelId": "UCCgLoMYIyP0U56dEhEL1wXQ",
        "sourceChannelTitle": "Chloe Ting",
        "thumbnailUrl": "https://i.ytimg.com/vi/pbCNzNhTOuI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "GkkJ5e0v1KQ",
        "title": "things I stopped caring about during pregnancy!",
        "sourceChannelId": "UCpQ34afVgk8cRQBjSJ1xuJQ",
        "sourceChannelTitle": "MadFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/GkkJ5e0v1KQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Qaytn3391Ao",
        "title": "10 MIN STRONG CORE - AB WORKOUT + WEIGHT - floor only, fun & special exercises",
        "sourceChannelId": "UChVRfsT_ASBZk10o0An7Ucg",
        "sourceChannelTitle": "Pamela Reif",
        "thumbnailUrl": "https://i.ytimg.com/vi/Qaytn3391Ao/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hR6R0oVl6_U",
        "title": "10 Calisthenics Exercises Every Gym Lifter MUST Do",
        "sourceChannelId": "UCgFItI58gEggW1-39DxjVbA",
        "sourceChannelTitle": "CALISTHENICS FAMILY",
        "thumbnailUrl": "https://i.ytimg.com/vi/hR6R0oVl6_U/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "pcvzzVeE4c8",
        "title": "How to share your thoughts clearly",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/pcvzzVeE4c8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "j_5du-KhOu4",
        "title": "Please STOP Gripping Your Dumbbells Like This!",
        "sourceChannelId": "UCe0TLA0EsQbE-MjuHXevj2A",
        "sourceChannelTitle": "ATHLEAN-X™",
        "thumbnailUrl": "https://i.ytimg.com/vi/j_5du-KhOu4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "dP5SxmMNjAE",
        "title": "Can You Really Get Fit With Just 1 Hour a Week?",
        "sourceChannelId": "UCZIIRX8rkNjVpP-oLMHpeDw",
        "sourceChannelTitle": "Calisthenicmovement",
        "thumbnailUrl": "https://i.ytimg.com/vi/dP5SxmMNjAE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "g1Jq_ghFULY",
        "title": "Stop Comparing Your Fitness Journey",
        "sourceChannelId": "UCiP6wD_tYlYLYh3agzbByWQ",
        "sourceChannelTitle": "FitnessBlender",
        "thumbnailUrl": "https://i.ytimg.com/vi/g1Jq_ghFULY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "oqqcuzv0wJ4",
        "title": "Yoga for Healthy Feet | Strengthen, Stretch & Restore",
        "sourceChannelId": "UCFKE7WVJfvaHW5q283SxchA",
        "sourceChannelTitle": "Yoga With Adriene",
        "thumbnailUrl": "https://i.ytimg.com/vi/oqqcuzv0wJ4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "qdUg4vvDxGI",
        "title": "Is HMB Making a Comeback? (NEW RESEARCH)",
        "sourceChannelId": "UCadiU6WTKl65HUwEih1XLYg",
        "sourceChannelTitle": "PictureFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/qdUg4vvDxGI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "uldb_2pKxvA",
        "title": "Full Day of Eating with the ONLY 20 Foods You Need to Get Shredded",
        "sourceChannelId": "UCKf0UqBiCQI4Ol0To9V0pKQ",
        "sourceChannelTitle": "Buff Dudes",
        "thumbnailUrl": "https://i.ytimg.com/vi/uldb_2pKxvA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-KuWRD_T_d0",
        "title": "Medieval Workout #stayflexy",
        "sourceChannelId": "UCM2ra7Od2jliHB9TLPKt76w",
        "sourceChannelTitle": "MovementbyDavid",
        "thumbnailUrl": "https://i.ytimg.com/vi/-KuWRD_T_d0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "q0TeIERTaSo",
        "title": "15 Min Full Body Dumbbell Workout At Home - Beginner to Intermediate",
        "sourceChannelId": "UCCgLoMYIyP0U56dEhEL1wXQ",
        "sourceChannelTitle": "Chloe Ting",
        "thumbnailUrl": "https://i.ytimg.com/vi/q0TeIERTaSo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "JS3sTtD_Eec",
        "title": "“no equipment” does NOT mean you’re in the clear😅",
        "sourceChannelId": "UCpQ34afVgk8cRQBjSJ1xuJQ",
        "sourceChannelTitle": "MadFit",
        "thumbnailUrl": "https://i.ytimg.com/vi/JS3sTtD_Eec/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "var0HjTAFhA",
        "title": "20 MIN RDL BOOTY - DEADLIFT VARIATIONS, Gym Style I Weight + Bench",
        "sourceChannelId": "UChVRfsT_ASBZk10o0An7Ucg",
        "sourceChannelTitle": "Pamela Reif",
        "thumbnailUrl": "https://i.ytimg.com/vi/var0HjTAFhA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "llO11-faOBs",
        "title": "The 7-Minute Calisthenics Workout",
        "sourceChannelId": "UCgFItI58gEggW1-39DxjVbA",
        "sourceChannelTitle": "CALISTHENICS FAMILY",
        "thumbnailUrl": "https://i.ytimg.com/vi/llO11-faOBs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KtCbv0U_e8A",
        "title": "How to feel grateful for life (without gaslighting yourself)",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/KtCbv0U_e8A/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "X6LXOWzmUmY",
        "title": "The ONLY 2 Dumbbell Triceps Exercises You Need (NO, SERIOUSLY!)",
        "sourceChannelId": "UCe0TLA0EsQbE-MjuHXevj2A",
        "sourceChannelTitle": "ATHLEAN-X™",
        "thumbnailUrl": "https://i.ytimg.com/vi/X6LXOWzmUmY/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "art": {
    "categoryId": "art",
    "categoryName": "Art",
    "hue": 330,
    "builtAt": 1794334892502,
    "videos": [
      {
        "youtubeVideoId": "qLzw6r2ORk0",
        "title": "Chromatic Drawing with Lane Brown",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/qLzw6r2ORk0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "InAA1SRpGAo",
        "title": "This isn't goodbye. It's smell you later",
        "sourceChannelId": "UC3BCGz72VQcFdoBiZtKfOpg",
        "sourceChannelTitle": "[INSERT ART]",
        "thumbnailUrl": "https://i.ytimg.com/vi/InAA1SRpGAo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Yb3BgyloqcU",
        "title": "Artists Turn Dog Breed Descriptions Into Characters",
        "sourceChannelId": "UCoal_hpPIPAnWlG-kWHLheA",
        "sourceChannelTitle": "Drawfee Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/Yb3BgyloqcU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "DmjAVwGii2c",
        "title": "He Was An Artist Before Directing 🤯",
        "sourceChannelId": "UCfvIqreCk628yB9mp3e_ABQ",
        "sourceChannelTitle": "Draftsmen",
        "thumbnailUrl": "https://i.ytimg.com/vi/DmjAVwGii2c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "tzvG7qcVAxY",
        "title": "4 Pro Artists vs PENCIL ONLY art battle!",
        "sourceChannelId": "UCh-ArhaGOqFsBPrR2yQd42w",
        "sourceChannelTitle": "Ten Hundred",
        "thumbnailUrl": "https://i.ytimg.com/vi/tzvG7qcVAxY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "w02M1vjrqZ0",
        "title": "Chris' Crusade - Free Conservation Contest Winner",
        "sourceChannelId": "UCvZe6ZCbF9xgbbbdkiodPKQ",
        "sourceChannelTitle": "Baumgartner Restoration",
        "thumbnailUrl": "https://i.ytimg.com/vi/w02M1vjrqZ0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "wtzzVe_jCoc",
        "title": "Etsy Update: Commissions Are Open!",
        "sourceChannelId": "UCno-YPZ8BiLrN0Wbl8qICFA",
        "sourceChannelTitle": "markcrilley",
        "thumbnailUrl": "https://i.ytimg.com/vi/wtzzVe_jCoc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kS2n12ATeMI",
        "title": "✨ Packing Orders & Chatting ✨",
        "sourceChannelId": "UCx-mMlEegnZ-SjWPS73Tgvw",
        "sourceChannelTitle": "Baylee Jae",
        "thumbnailUrl": "https://i.ytimg.com/vi/kS2n12ATeMI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "3zqkmOKJy3c",
        "title": "For anyone ALSO in a weirdly specific rut",
        "sourceChannelId": "UCvcEBQ0K3UsQ8bzWKHKQmbw",
        "sourceChannelTitle": "struthless",
        "thumbnailUrl": "https://i.ytimg.com/vi/3zqkmOKJy3c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "alI9_07IFqg",
        "title": "Blizzard + Riot character designer redesigns link from Zelda ocarina of time",
        "sourceChannelId": "UCmRm1xtLIpBhuWjTyD411pA",
        "sourceChannelTitle": "Trent Kaniuga",
        "thumbnailUrl": "https://i.ytimg.com/vi/alI9_07IFqg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "AoL4cD93Shw",
        "title": "I Filmed 6 Months of Videos in a Week! · Bulk-Filming (because I'm pregnant!)",
        "sourceChannelId": "UCLcxo0ysMP27XTiRKqrdASg",
        "sourceChannelTitle": "Minnie Small",
        "thumbnailUrl": "https://i.ytimg.com/vi/AoL4cD93Shw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zo-kwu5NGOE",
        "title": "Colored Pencil Realism with ONLY 3 Colors *5 Pencils*",
        "sourceChannelId": "UCSl51TSNCxLQJqLTQp0B6Cg",
        "sourceChannelTitle": "Kirsty Partridge Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/zo-kwu5NGOE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "sTuD_8UD7Kg",
        "title": "The Art School Advice I Wish I Had Before Going Into Debt",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/sTuD_8UD7Kg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "h7TCCPboS7c",
        "title": "We Made Our Own ORIGINAL Pokemon!",
        "sourceChannelId": "UC3BCGz72VQcFdoBiZtKfOpg",
        "sourceChannelTitle": "[INSERT ART]",
        "thumbnailUrl": "https://i.ytimg.com/vi/h7TCCPboS7c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "o9uewrsg_FY",
        "title": "Putting Cartoon Characters in JAIL in This FREE Drawing Game",
        "sourceChannelId": "UCoal_hpPIPAnWlG-kWHLheA",
        "sourceChannelTitle": "Drawfee Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/o9uewrsg_FY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-CfS7iOJmr8",
        "title": "The Intermediate Plateau - Draftsmen S4E08",
        "sourceChannelId": "UCfvIqreCk628yB9mp3e_ABQ",
        "sourceChannelTitle": "Draftsmen",
        "thumbnailUrl": "https://i.ytimg.com/vi/-CfS7iOJmr8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "CSNhgaw3tcg",
        "title": "The tool merch companies don't want you to have.",
        "sourceChannelId": "UCh-ArhaGOqFsBPrR2yQd42w",
        "sourceChannelTitle": "Ten Hundred",
        "thumbnailUrl": "https://i.ytimg.com/vi/CSNhgaw3tcg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HxLRqJv3wNg",
        "title": "The Art of Science",
        "sourceChannelId": "UCvZe6ZCbF9xgbbbdkiodPKQ",
        "sourceChannelTitle": "Baumgartner Restoration",
        "thumbnailUrl": "https://i.ytimg.com/vi/HxLRqJv3wNg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KpZfki9CFoc",
        "title": "Etsy Update: Commissions Now Open + New Original Art",
        "sourceChannelId": "UCno-YPZ8BiLrN0Wbl8qICFA",
        "sourceChannelTitle": "markcrilley",
        "thumbnailUrl": "https://i.ytimg.com/vi/KpZfki9CFoc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "YRncWBLOst0",
        "title": "Making My Halloween Costume ✨ Zelda Switch 2 ✨ Shop Prep",
        "sourceChannelId": "UCx-mMlEegnZ-SjWPS73Tgvw",
        "sourceChannelTitle": "Baylee Jae",
        "thumbnailUrl": "https://i.ytimg.com/vi/YRncWBLOst0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "aLPrNSFLb2U",
        "title": "The Subtle Art of Normalising Dystopia",
        "sourceChannelId": "UCvcEBQ0K3UsQ8bzWKHKQmbw",
        "sourceChannelTitle": "struthless",
        "thumbnailUrl": "https://i.ytimg.com/vi/aLPrNSFLb2U/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "OioegWLBlS0",
        "title": "The Hidden Details in the New Link Redesign + STYLE analysis",
        "sourceChannelId": "UCmRm1xtLIpBhuWjTyD411pA",
        "sourceChannelTitle": "Trent Kaniuga",
        "thumbnailUrl": "https://i.ytimg.com/vi/OioegWLBlS0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rELxufvhKJo",
        "title": "Everything I've Learned Running an Online Art Shop · What I Wish I Knew When I Started Selling",
        "sourceChannelId": "UCLcxo0ysMP27XTiRKqrdASg",
        "sourceChannelTitle": "Minnie Small",
        "thumbnailUrl": "https://i.ytimg.com/vi/rELxufvhKJo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "W74JgVN5rKw",
        "title": "The Colored Pencil Layering Method I Wish I'd Known Years Ago",
        "sourceChannelId": "UCSl51TSNCxLQJqLTQp0B6Cg",
        "sourceChannelTitle": "Kirsty Partridge Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/W74JgVN5rKw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "y5Yy7pQacAY",
        "title": "No Erasing or Zooming! Drawing a Character Straight from Imagination",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/y5Yy7pQacAY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ISMZzNHjnf4",
        "title": "Turning MUSIC GENRES into ORIGINAL CHARACTERS",
        "sourceChannelId": "UC3BCGz72VQcFdoBiZtKfOpg",
        "sourceChannelTitle": "[INSERT ART]",
        "thumbnailUrl": "https://i.ytimg.com/vi/ISMZzNHjnf4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "VE3gIgdYG5A",
        "title": "Drawing Wholesome Versions of Horror Movie Monsters",
        "sourceChannelId": "UCoal_hpPIPAnWlG-kWHLheA",
        "sourceChannelTitle": "Drawfee Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/VE3gIgdYG5A/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "YO5axY8wHGk",
        "title": "How to Learn Color - Draftsmen S4E07",
        "sourceChannelId": "UCfvIqreCk628yB9mp3e_ABQ",
        "sourceChannelTitle": "Draftsmen",
        "thumbnailUrl": "https://i.ytimg.com/vi/YO5axY8wHGk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "JLhhXQ0qYz8",
        "title": "I Battle 3 Artists to Redesign Movie Posters!",
        "sourceChannelId": "UCh-ArhaGOqFsBPrR2yQd42w",
        "sourceChannelTitle": "Ten Hundred",
        "thumbnailUrl": "https://i.ytimg.com/vi/JLhhXQ0qYz8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2N8j6slomko",
        "title": "The Fourth Miracle - Epilogue",
        "sourceChannelId": "UCvZe6ZCbF9xgbbbdkiodPKQ",
        "sourceChannelTitle": "Baumgartner Restoration",
        "thumbnailUrl": "https://i.ytimg.com/vi/2N8j6slomko/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "z4L3Gd76xaE",
        "title": "Commissions Are Open! Get an Original Work of Art from Me",
        "sourceChannelId": "UCno-YPZ8BiLrN0Wbl8qICFA",
        "sourceChannelTitle": "markcrilley",
        "thumbnailUrl": "https://i.ytimg.com/vi/z4L3Gd76xaE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fUlIDtIDOKs",
        "title": "✨ Assembling Bundles & Chatting ✨ Shop Update Nov 4th 12pm MDT",
        "sourceChannelId": "UCx-mMlEegnZ-SjWPS73Tgvw",
        "sourceChannelTitle": "Baylee Jae",
        "thumbnailUrl": "https://i.ytimg.com/vi/fUlIDtIDOKs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "XJa7sE5Q1QA",
        "title": "Journalling but make it punk",
        "sourceChannelId": "UCvcEBQ0K3UsQ8bzWKHKQmbw",
        "sourceChannelTitle": "struthless",
        "thumbnailUrl": "https://i.ytimg.com/vi/XJa7sE5Q1QA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HfHW53KY2po",
        "title": "YOU'RE HIRED to Paint A Hearthstone Card   What Happens Next?",
        "sourceChannelId": "UCmRm1xtLIpBhuWjTyD411pA",
        "sourceChannelTitle": "Trent Kaniuga",
        "thumbnailUrl": "https://i.ytimg.com/vi/HfHW53KY2po/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "08d2-yedTWA",
        "title": "Small Space Storage for Art and Filming Supplies · Minimal Studio Tour",
        "sourceChannelId": "UCLcxo0ysMP27XTiRKqrdASg",
        "sourceChannelTitle": "Minnie Small",
        "thumbnailUrl": "https://i.ytimg.com/vi/08d2-yedTWA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1gRO_hedmv4",
        "title": "This Colored Pencil Secret Makes Realism Easy (even for beginners)",
        "sourceChannelId": "UCSl51TSNCxLQJqLTQp0B6Cg",
        "sourceChannelTitle": "Kirsty Partridge Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/1gRO_hedmv4/hqdefault.jpg",
        "durationSec": 600
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
        "durationSec": 600
      },
      {
        "youtubeVideoId": "V2Q6m8Pv6wM",
        "title": "Drawfee But My Coworkers Don't Know the Drawing Prompt",
        "sourceChannelId": "UCoal_hpPIPAnWlG-kWHLheA",
        "sourceChannelTitle": "Drawfee Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/V2Q6m8Pv6wM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "eDvvh8tJPGI",
        "title": "How to Encourage Creativity #art",
        "sourceChannelId": "UCfvIqreCk628yB9mp3e_ABQ",
        "sourceChannelTitle": "Draftsmen",
        "thumbnailUrl": "https://i.ytimg.com/vi/eDvvh8tJPGI/hqdefault.jpg",
        "durationSec": 600
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
        "durationSec": 600
      },
      {
        "youtubeVideoId": "OlryHR_l19E",
        "title": "COMMISSIONS UPDATE + My Latest Etsy Art",
        "sourceChannelId": "UCno-YPZ8BiLrN0Wbl8qICFA",
        "sourceChannelTitle": "markcrilley",
        "thumbnailUrl": "https://i.ytimg.com/vi/OlryHR_l19E/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "GE4fmuyA85Y",
        "title": "It's All Coming Together – Prepping for a Shop Update",
        "sourceChannelId": "UCx-mMlEegnZ-SjWPS73Tgvw",
        "sourceChannelTitle": "Baylee Jae",
        "thumbnailUrl": "https://i.ytimg.com/vi/GE4fmuyA85Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "11FIIPmdpHo",
        "title": "The Al question no one wants to ask",
        "sourceChannelId": "UCvcEBQ0K3UsQ8bzWKHKQmbw",
        "sourceChannelTitle": "struthless",
        "thumbnailUrl": "https://i.ytimg.com/vi/11FIIPmdpHo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hESa-TDTJEs",
        "title": "Gothic Remake changed how I think about Game Development",
        "sourceChannelId": "UCmRm1xtLIpBhuWjTyD411pA",
        "sourceChannelTitle": "Trent Kaniuga",
        "thumbnailUrl": "https://i.ytimg.com/vi/hESa-TDTJEs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Isjn9u57Suc",
        "title": "Easy, Pro Photos of Your Art · How To Make Your Own Mockups and Listing Photos for Art Prints",
        "sourceChannelId": "UCLcxo0ysMP27XTiRKqrdASg",
        "sourceChannelTitle": "Minnie Small",
        "thumbnailUrl": "https://i.ytimg.com/vi/Isjn9u57Suc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "89-gBfVF18s",
        "title": "Coloured Pencil Portrait LIVE Drawalong- Fun, Colourful Sketch!",
        "sourceChannelId": "UCSl51TSNCxLQJqLTQp0B6Cg",
        "sourceChannelTitle": "Kirsty Partridge Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/89-gBfVF18s/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NIXL6uEMFJk",
        "title": "How to Shade Dark Skin, Highlights, and More Value Questions - Stanswers #5",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/NIXL6uEMFJk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ceKjmYH1D8k",
        "title": "Random Character Style Swap Challenge!",
        "sourceChannelId": "UC3BCGz72VQcFdoBiZtKfOpg",
        "sourceChannelTitle": "[INSERT ART]",
        "thumbnailUrl": "https://i.ytimg.com/vi/ceKjmYH1D8k/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "design": {
    "categoryId": "design",
    "categoryName": "Design",
    "hue": 45,
    "builtAt": 1794334892907,
    "videos": [
      {
        "youtubeVideoId": "vQ_40b0Un-I",
        "title": "These Bricks Move To Make Shelves And Hooks!",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/vQ_40b0Un-I/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "0OZdY64GOZk",
        "title": "Jaylen Brown Has a Hyperbaric Chamber in His Bedroom",
        "sourceChannelId": "UC0k238zFx-Z8xFH0sxCrPJg",
        "sourceChannelTitle": "Architectural Digest",
        "thumbnailUrl": "https://i.ytimg.com/vi/0OZdY64GOZk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "UsmyL3K7Uvk",
        "title": "A Desert Home Built From the Desert Itself (House Tour)",
        "sourceChannelId": "UCgxg48_pay4R67s-7WOgWFA",
        "sourceChannelTitle": "The Local Project",
        "thumbnailUrl": "https://i.ytimg.com/vi/UsmyL3K7Uvk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Re-60bdrzow",
        "title": "Nobody wanted underground fixer-upper. He turned it into sun-warmed gem",
        "sourceChannelId": "UCDsElQQt_gCZ9LgnW-7v-cQ",
        "sourceChannelTitle": "Kirsten Dirksen",
        "thumbnailUrl": "https://i.ytimg.com/vi/Re-60bdrzow/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fkcW4VqJqbw",
        "title": "Why Your Brand Is Forgettable (And How to Fix It)",
        "sourceChannelId": "UC-b3c7kxa5vU-bnmaROgvog",
        "sourceChannelTitle": "The Futur",
        "thumbnailUrl": "https://i.ytimg.com/vi/fkcW4VqJqbw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fyYo1jxj5Io",
        "title": "The Greatest Empire was built on This Secret...",
        "sourceChannelId": "UCJ_2hNMxOzNjviJBiLWHMqg",
        "sourceChannelTitle": "DamiLee",
        "thumbnailUrl": "https://i.ytimg.com/vi/fyYo1jxj5Io/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "EJgVjxM4Rno",
        "title": "Why Safer Streets Keep Losing to Fire Trucks",
        "sourceChannelId": "UCYAm24PkejQR2xMgJgn7xwg",
        "sourceChannelTitle": "Stewart Hicks",
        "thumbnailUrl": "https://i.ytimg.com/vi/EJgVjxM4Rno/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rUsO5hIqIME",
        "title": "HOW TO SAVE WEBSITES FOR OFFLINE USE |TECH SCOUT TIPS|",
        "sourceChannelId": "UC_kjXjYwOlMZeLMkAanRn3g",
        "sourceChannelTitle": "Design Theory",
        "thumbnailUrl": "https://i.ytimg.com/vi/rUsO5hIqIME/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "EIpN8NPczqc",
        "title": "Font Piracy: Addendum",
        "sourceChannelId": "UCSb-xYOELhIqVr2n9s-b_4w",
        "sourceChannelTitle": "Linus Boman",
        "thumbnailUrl": "https://i.ytimg.com/vi/EIpN8NPczqc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "uZZ_Dz9sPTA",
        "title": "A Magical Cabin Hidden Amongst the Trees",
        "sourceChannelId": "UCoNTMWgGuXtGPLv9UeJZwBw",
        "sourceChannelTitle": "Living Big In A Tiny House",
        "thumbnailUrl": "https://i.ytimg.com/vi/uZZ_Dz9sPTA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Ebn1Ju6fjEo",
        "title": "Mori AI home robot “resembles a contemporary table lamp”",
        "sourceChannelId": "UCsWG9ANbrmgR0z-eFk_A3YQ",
        "sourceChannelTitle": "Dezeen",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ebn1Ju6fjEo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "4jOMmgdXNLA",
        "title": "What does it mean to make the city?",
        "sourceChannelId": "UC3r_kdJocuqtDYb2GgM42Ng",
        "sourceChannelTitle": "ArchDaily",
        "thumbnailUrl": "https://i.ytimg.com/vi/4jOMmgdXNLA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-Dcz_fJdL80",
        "title": "new ritulas, old instincts – room for utopias podcast (episode 05)",
        "sourceChannelId": "UCv6JHGYnS74viHnZ-6zR2Jg",
        "sourceChannelTitle": "designboom",
        "thumbnailUrl": "https://i.ytimg.com/vi/-Dcz_fJdL80/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "5StC8a8Hyjo",
        "title": "Your Hallway Could Be Working Harder #nevertoosmall #mycitymybackyard",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/5StC8a8Hyjo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "MYM0Q_6sbEc",
        "title": "Inside the Coziest Celebrity Homes | Architectural Digest",
        "sourceChannelId": "UC0k238zFx-Z8xFH0sxCrPJg",
        "sourceChannelTitle": "Architectural Digest",
        "thumbnailUrl": "https://i.ytimg.com/vi/MYM0Q_6sbEc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2z2W4NvoJXk",
        "title": "Architect Designs a Hilltop Home Inspired by His Childhood in Italy (House Tour)",
        "sourceChannelId": "UCgxg48_pay4R67s-7WOgWFA",
        "sourceChannelTitle": "The Local Project",
        "thumbnailUrl": "https://i.ytimg.com/vi/2z2W4NvoJXk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "aITGbdW-67Q",
        "title": "Mocked for his cabin, welder builds 160-foot Castle alone, has last laugh",
        "sourceChannelId": "UCDsElQQt_gCZ9LgnW-7v-cQ",
        "sourceChannelTitle": "Kirsten Dirksen",
        "thumbnailUrl": "https://i.ytimg.com/vi/aITGbdW-67Q/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "sUEwAXpQl3E",
        "title": "Why Expertise Makes Influencers Truly Powerful",
        "sourceChannelId": "UC-b3c7kxa5vU-bnmaROgvog",
        "sourceChannelTitle": "The Futur",
        "thumbnailUrl": "https://i.ytimg.com/vi/sUEwAXpQl3E/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "3-YzceiIP3o",
        "title": "Hong Kong’s Rainbow Estate is Coming Down",
        "sourceChannelId": "UCJ_2hNMxOzNjviJBiLWHMqg",
        "sourceChannelTitle": "DamiLee",
        "thumbnailUrl": "https://i.ytimg.com/vi/3-YzceiIP3o/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "RjJO-fCWR54",
        "title": "The Problem With Colorful Houses",
        "sourceChannelId": "UCYAm24PkejQR2xMgJgn7xwg",
        "sourceChannelTitle": "Stewart Hicks",
        "thumbnailUrl": "https://i.ytimg.com/vi/RjJO-fCWR54/hqdefault.jpg",
        "durationSec": 600
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
        "durationSec": 600
      },
      {
        "youtubeVideoId": "6QbQb-jKA-M",
        "title": "At Just 23, She Built a Gorgeous Tiny Home Inspired by Nature & Permaculture",
        "sourceChannelId": "UCoNTMWgGuXtGPLv9UeJZwBw",
        "sourceChannelTitle": "Living Big In A Tiny House",
        "thumbnailUrl": "https://i.ytimg.com/vi/6QbQb-jKA-M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "3Mn6YnuH_AI",
        "title": "Concept car that transforms from SUV to pickup is \"a symbol of freedom\" says Fiat CEO",
        "sourceChannelId": "UCsWG9ANbrmgR0z-eFk_A3YQ",
        "sourceChannelTitle": "Dezeen",
        "thumbnailUrl": "https://i.ytimg.com/vi/3Mn6YnuH_AI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hjZulm02-Yc",
        "title": "Las Vegas Architecture City Guide",
        "sourceChannelId": "UC3r_kdJocuqtDYb2GgM42Ng",
        "sourceChannelTitle": "ArchDaily",
        "thumbnailUrl": "https://i.ytimg.com/vi/hjZulm02-Yc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "liO-zVzN4Cs",
        "title": "freedom from style –l room for utopias podcast (episode 06)",
        "sourceChannelId": "UCv6JHGYnS74viHnZ-6zR2Jg",
        "sourceChannelTitle": "designboom",
        "thumbnailUrl": "https://i.ytimg.com/vi/liO-zVzN4Cs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rAWKSMrQaVg",
        "title": "This Artwork Seats Four… Yep, You Read That Right!",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/rAWKSMrQaVg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kCuU3GDuEuw",
        "title": "Why Dodger Stadium Looks So Different From Other Ballparks",
        "sourceChannelId": "UC0k238zFx-Z8xFH0sxCrPJg",
        "sourceChannelTitle": "Architectural Digest",
        "thumbnailUrl": "https://i.ytimg.com/vi/kCuU3GDuEuw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Z3AlPMj6mIc",
        "title": "How to Design a Home Step by Step with Commune Design (Design Masterclass)",
        "sourceChannelId": "UCgxg48_pay4R67s-7WOgWFA",
        "sourceChannelTitle": "The Local Project",
        "thumbnailUrl": "https://i.ytimg.com/vi/Z3AlPMj6mIc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "R4WxHWQ-i_g",
        "title": "Three-sided greenhouse house masters heat & cold in tranquil Nordic village",
        "sourceChannelId": "UCDsElQQt_gCZ9LgnW-7v-cQ",
        "sourceChannelTitle": "Kirsten Dirksen",
        "thumbnailUrl": "https://i.ytimg.com/vi/R4WxHWQ-i_g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NBP_aFUiuZ4",
        "title": "Don’t Explain Your Prices",
        "sourceChannelId": "UC-b3c7kxa5vU-bnmaROgvog",
        "sourceChannelTitle": "The Futur",
        "thumbnailUrl": "https://i.ytimg.com/vi/NBP_aFUiuZ4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "XFncrDhMDic",
        "title": "Happy halloween everyone ☠️👻☠️",
        "sourceChannelId": "UCJ_2hNMxOzNjviJBiLWHMqg",
        "sourceChannelTitle": "DamiLee",
        "thumbnailUrl": "https://i.ytimg.com/vi/XFncrDhMDic/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2JOmHYyQoO4",
        "title": "AI’s Newest Buildings Are Already Obsolete",
        "sourceChannelId": "UCYAm24PkejQR2xMgJgn7xwg",
        "sourceChannelTitle": "Stewart Hicks",
        "thumbnailUrl": "https://i.ytimg.com/vi/2JOmHYyQoO4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2_f7pJwCb9c",
        "title": "DON'T DRINK & DRIVE |MY FIRST ANIMATION|",
        "sourceChannelId": "UC_kjXjYwOlMZeLMkAanRn3g",
        "sourceChannelTitle": "Design Theory",
        "thumbnailUrl": "https://i.ytimg.com/vi/2_f7pJwCb9c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ogH1NEJ1GUw",
        "title": "stream: new font just dropped.",
        "sourceChannelId": "UCSb-xYOELhIqVr2n9s-b_4w",
        "sourceChannelTitle": "Linus Boman",
        "thumbnailUrl": "https://i.ytimg.com/vi/ogH1NEJ1GUw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "TPIbyvSf3qY",
        "title": "This SUPERSIZED Tiny House Makes Downsizing Feel Like an Upgrade",
        "sourceChannelId": "UCoNTMWgGuXtGPLv9UeJZwBw",
        "sourceChannelTitle": "Living Big In A Tiny House",
        "thumbnailUrl": "https://i.ytimg.com/vi/TPIbyvSf3qY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "nmfJdtjp3Wc",
        "title": "Take a look at the key features of Dezeen's new website!",
        "sourceChannelId": "UCsWG9ANbrmgR0z-eFk_A3YQ",
        "sourceChannelTitle": "Dezeen",
        "thumbnailUrl": "https://i.ytimg.com/vi/nmfJdtjp3Wc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zExTY2eint0",
        "title": "The Student Project Awards are back!",
        "sourceChannelId": "UC3r_kdJocuqtDYb2GgM42Ng",
        "sourceChannelTitle": "ArchDaily",
        "thumbnailUrl": "https://i.ytimg.com/vi/zExTY2eint0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "jc_oBQdBgZ8",
        "title": "what people don't ask for – room for utopias podcast (episode 04)",
        "sourceChannelId": "UCv6JHGYnS74viHnZ-6zR2Jg",
        "sourceChannelTitle": "designboom",
        "thumbnailUrl": "https://i.ytimg.com/vi/jc_oBQdBgZ8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "BWXeyNxczSU",
        "title": "How Do You Fit A Home, Yoga Studio, Piano Room And Hair Salon Into One Garage?",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/BWXeyNxczSU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "bKmUQcFlDPI",
        "title": "How One Man DIY'd His Entire NYC Apartment | Small Spaces | Architectural Digest",
        "sourceChannelId": "UC0k238zFx-Z8xFH0sxCrPJg",
        "sourceChannelTitle": "Architectural Digest",
        "thumbnailUrl": "https://i.ytimg.com/vi/bKmUQcFlDPI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "g20cSkBc2XA",
        "title": "How to Style a Home with Custom Furniture and Art (Design Masterclass)",
        "sourceChannelId": "UCgxg48_pay4R67s-7WOgWFA",
        "sourceChannelTitle": "The Local Project",
        "thumbnailUrl": "https://i.ytimg.com/vi/g20cSkBc2XA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "pcHEMy7uN2Q",
        "title": "Couple's indoor-outdoor natural life: underground pipes, double stove & cork",
        "sourceChannelId": "UCDsElQQt_gCZ9LgnW-7v-cQ",
        "sourceChannelTitle": "Kirsten Dirksen",
        "thumbnailUrl": "https://i.ytimg.com/vi/pcHEMy7uN2Q/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Vb6KM4g8huo",
        "title": "Simple Phrase That Softnens Difficult Questions",
        "sourceChannelId": "UC-b3c7kxa5vU-bnmaROgvog",
        "sourceChannelTitle": "The Futur",
        "thumbnailUrl": "https://i.ytimg.com/vi/Vb6KM4g8huo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Dn5dCPg_yTc",
        "title": "The Hidden Pattern in Khafre’s Pyramid",
        "sourceChannelId": "UCJ_2hNMxOzNjviJBiLWHMqg",
        "sourceChannelTitle": "DamiLee",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dn5dCPg_yTc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "7sfoLUumGnc",
        "title": "Why We Can’t Build Apartments Like This Anymore",
        "sourceChannelId": "UCYAm24PkejQR2xMgJgn7xwg",
        "sourceChannelTitle": "Stewart Hicks",
        "thumbnailUrl": "https://i.ytimg.com/vi/7sfoLUumGnc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ISDVLuErJ3k",
        "title": "Animation Hot Girl character design  in adobe illustrator",
        "sourceChannelId": "UC_kjXjYwOlMZeLMkAanRn3g",
        "sourceChannelTitle": "Design Theory",
        "thumbnailUrl": "https://i.ytimg.com/vi/ISDVLuErJ3k/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "i7PxPJe6iEI",
        "title": "i thought they said designers were obsolete?",
        "sourceChannelId": "UCSb-xYOELhIqVr2n9s-b_4w",
        "sourceChannelTitle": "Linus Boman",
        "thumbnailUrl": "https://i.ytimg.com/vi/i7PxPJe6iEI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kD9P2TjT0sk",
        "title": "Tiny House Meets Modular Design in This Stunning Modern Home",
        "sourceChannelId": "UCoNTMWgGuXtGPLv9UeJZwBw",
        "sourceChannelTitle": "Living Big In A Tiny House",
        "thumbnailUrl": "https://i.ytimg.com/vi/kD9P2TjT0sk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8lmJtfWCJOU",
        "title": "Peter Zumthor unveils trio of “wonderfully expressive” buildings for Swiss museum",
        "sourceChannelId": "UCsWG9ANbrmgR0z-eFk_A3YQ",
        "sourceChannelTitle": "Dezeen",
        "thumbnailUrl": "https://i.ytimg.com/vi/8lmJtfWCJOU/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "learning": {
    "categoryId": "learning",
    "categoryName": "Learning",
    "hue": 235,
    "builtAt": 1794334893343,
    "videos": [
      {
        "youtubeVideoId": "nBVuemyrMgE",
        "title": "When did humans start using salt? - Carolyn Beans",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/nBVuemyrMgE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "pTdvsfIMGes",
        "title": "How People Are Using AI to Grieve, Love and Connect | Jennifer Cearns | TED",
        "sourceChannelId": "UCAuUUnT6oDeKwE6v1NGQxug",
        "sourceChannelTitle": "TED",
        "thumbnailUrl": "https://i.ytimg.com/vi/pTdvsfIMGes/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rUiulWItECQ",
        "title": "Parity of permutations, impossible puzzles and the magical determinant",
        "sourceChannelId": "UC1_uAIS3r8Vu6JjXWvastJg",
        "sourceChannelTitle": "Mathologer",
        "thumbnailUrl": "https://i.ytimg.com/vi/rUiulWItECQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Z9qScNdX0Q4",
        "title": "Civita: Why One of the Italy’s Most Visited Places Is Dying",
        "sourceChannelId": "UCTWKe1zATFV6d0o6oLS9sgw",
        "sourceChannelTitle": "Extremities",
        "thumbnailUrl": "https://i.ytimg.com/vi/Z9qScNdX0Q4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "2KpNwcpAAd8",
        "title": "Why Studying Sloths Is Basically Impossible",
        "sourceChannelId": "UC176GAQozKKjhz62H8u9vQQ",
        "sourceChannelTitle": "Real Science",
        "thumbnailUrl": "https://i.ytimg.com/vi/2KpNwcpAAd8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "EQr_eJOFy4Q",
        "title": "Crash Course World History Marathon • Full Series",
        "sourceChannelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        "sourceChannelTitle": "CrashCourse",
        "thumbnailUrl": "https://i.ytimg.com/vi/EQr_eJOFy4Q/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "n05Yu3UAI_o",
        "title": "My First Mistake as an Engineer",
        "sourceChannelId": "UCMOqf8ab-42UUQIdVoKwjlQ",
        "sourceChannelTitle": "Practical Engineering",
        "thumbnailUrl": "https://i.ytimg.com/vi/n05Yu3UAI_o/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "FPg1UL0RNnA",
        "title": "The Logistics of the NYC Marathon",
        "sourceChannelId": "UCuCkxoKLYO_EQ2GeFtbM_bw",
        "sourceChannelTitle": "Half as Interesting",
        "thumbnailUrl": "https://i.ytimg.com/vi/FPg1UL0RNnA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "p2AAz24AzU4",
        "title": "Terence Tao's Math(s) Essentials - Numberphile",
        "sourceChannelId": "UCoxcjq-8xIDTYp3uz647V5A",
        "sourceChannelTitle": "Numberphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/p2AAz24AzU4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "BmBw827GgFA",
        "title": "Mutex Explained - Computerphile",
        "sourceChannelId": "UC9-y-6csu5WGm29I7JiwpnA",
        "sourceChannelTitle": "Computerphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/BmBw827GgFA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "0V-4lQYNugA",
        "title": "Why you can't touch Stonehenge any more",
        "sourceChannelId": "UCBa659QWEk1AI4Tg--mrJ2A",
        "sourceChannelTitle": "Tom Scott",
        "thumbnailUrl": "https://i.ytimg.com/vi/0V-4lQYNugA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zuaVFnj4SWY",
        "title": "The mystery of the 14 fractions",
        "sourceChannelId": "UCSju5G2aFaWMqn-_0YBtq5A",
        "sourceChannelTitle": "Stand-up Maths",
        "thumbnailUrl": "https://i.ytimg.com/vi/zuaVFnj4SWY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1BVJzaXv3rk",
        "title": "The Second Punic War  - OverSimplified (Part 3)",
        "sourceChannelId": "UCNIuvl7V8zACPpTmmNIqP2A",
        "sourceChannelTitle": "OverSimplified",
        "thumbnailUrl": "https://i.ytimg.com/vi/1BVJzaXv3rk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "bw5tzcoEG88",
        "title": "How to effectively use visuals in your presentation",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/bw5tzcoEG88/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "g3_TqjSLyLk",
        "title": "AI Brain Fry Is Real. Here’s What Leaders Can Do | Julie Bedard | TED",
        "sourceChannelId": "UCAuUUnT6oDeKwE6v1NGQxug",
        "sourceChannelTitle": "TED",
        "thumbnailUrl": "https://i.ytimg.com/vi/g3_TqjSLyLk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8q95eiq-y-Q",
        "title": "I Built an Original One-Glance Proof from Dice",
        "sourceChannelId": "UC1_uAIS3r8Vu6JjXWvastJg",
        "sourceChannelTitle": "Mathologer",
        "thumbnailUrl": "https://i.ytimg.com/vi/8q95eiq-y-Q/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "TQ96CN6G6bQ",
        "title": "Adak: Why the Westernmost Town in the US Exists",
        "sourceChannelId": "UCTWKe1zATFV6d0o6oLS9sgw",
        "sourceChannelTitle": "Extremities",
        "thumbnailUrl": "https://i.ytimg.com/vi/TQ96CN6G6bQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "IH_uv4h2xYM",
        "title": "This Slug Should Be Impossible",
        "sourceChannelId": "UC176GAQozKKjhz62H8u9vQQ",
        "sourceChannelTitle": "Real Science",
        "thumbnailUrl": "https://i.ytimg.com/vi/IH_uv4h2xYM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "FcY4QW_lyYo",
        "title": "The Quest for Stardust: Crash Course Lecture",
        "sourceChannelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        "sourceChannelTitle": "CrashCourse",
        "thumbnailUrl": "https://i.ytimg.com/vi/FcY4QW_lyYo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "JsRiC6vGb1E",
        "title": "Windows Are Absurd",
        "sourceChannelId": "UCMOqf8ab-42UUQIdVoKwjlQ",
        "sourceChannelTitle": "Practical Engineering",
        "thumbnailUrl": "https://i.ytimg.com/vi/JsRiC6vGb1E/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ju1OZStv2eI",
        "title": "How Planes Fly Without Air Traffic Control",
        "sourceChannelId": "UCuCkxoKLYO_EQ2GeFtbM_bw",
        "sourceChannelTitle": "Half as Interesting",
        "thumbnailUrl": "https://i.ytimg.com/vi/ju1OZStv2eI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "v9sfKhXDOn0",
        "title": "Blind Ranking Numbers (Tom Crawford)",
        "sourceChannelId": "UCoxcjq-8xIDTYp3uz647V5A",
        "sourceChannelTitle": "Numberphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/v9sfKhXDOn0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NDgS__J1U-M",
        "title": "The Private Key Mistake! (TLS Key set to \"4\") - Computerphile",
        "sourceChannelId": "UC9-y-6csu5WGm29I7JiwpnA",
        "sourceChannelTitle": "Computerphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/NDgS__J1U-M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NBXu6Z9Fw_M",
        "title": "It's getting harder to balance the power grid. Here's why.",
        "sourceChannelId": "UCBa659QWEk1AI4Tg--mrJ2A",
        "sourceChannelTitle": "Tom Scott",
        "thumbnailUrl": "https://i.ytimg.com/vi/NBXu6Z9Fw_M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KxHKrbfnmTU",
        "title": "Did Hannah Fry crack The Traitors?",
        "sourceChannelId": "UCSju5G2aFaWMqn-_0YBtq5A",
        "sourceChannelTitle": "Stand-up Maths",
        "thumbnailUrl": "https://i.ytimg.com/vi/KxHKrbfnmTU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Q-nWA0WeF98",
        "title": "The Second Punic War - OverSimplified (Part 2)",
        "sourceChannelId": "UCNIuvl7V8zACPpTmmNIqP2A",
        "sourceChannelTitle": "OverSimplified",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q-nWA0WeF98/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8EtdC9Bjubk",
        "title": "Can you solve the Billy Bonka riddle? - Edwin F. Meyer",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/8EtdC9Bjubk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "on1L_jblaw8",
        "title": "How to Look and Sound Confident | Cara Hale Alter | TED",
        "sourceChannelId": "UCAuUUnT6oDeKwE6v1NGQxug",
        "sourceChannelTitle": "TED",
        "thumbnailUrl": "https://i.ytimg.com/vi/on1L_jblaw8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "d-Yy-ILjM3k",
        "title": "How to build and solve a 4D Rubik's cubes in physical 3D (no simulator!)",
        "sourceChannelId": "UC1_uAIS3r8Vu6JjXWvastJg",
        "sourceChannelTitle": "Mathologer",
        "thumbnailUrl": "https://i.ytimg.com/vi/d-Yy-ILjM3k/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "X0gnZtjW-eE",
        "title": "Villa Las Estrellas: An Actual Town in Antarctica",
        "sourceChannelId": "UCTWKe1zATFV6d0o6oLS9sgw",
        "sourceChannelTitle": "Extremities",
        "thumbnailUrl": "https://i.ytimg.com/vi/X0gnZtjW-eE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "uGCaL_Ge6tg",
        "title": "The Frog That Unleashed the World’s Most Lethal Pathogen",
        "sourceChannelId": "UC176GAQozKKjhz62H8u9vQQ",
        "sourceChannelTitle": "Real Science",
        "thumbnailUrl": "https://i.ytimg.com/vi/uGCaL_Ge6tg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "oJXxCfwkb-o",
        "title": "Is Gerrymandering Getting Worse?: Crash Course US Government #7",
        "sourceChannelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        "sourceChannelTitle": "CrashCourse",
        "thumbnailUrl": "https://i.ytimg.com/vi/oJXxCfwkb-o/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "awV7FP9sAHE",
        "title": "Whatever Happened to Fire Escapes?",
        "sourceChannelId": "UCMOqf8ab-42UUQIdVoKwjlQ",
        "sourceChannelTitle": "Practical Engineering",
        "thumbnailUrl": "https://i.ytimg.com/vi/awV7FP9sAHE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "auScRXZwHhk",
        "title": "The Logistics of IMAX",
        "sourceChannelId": "UCuCkxoKLYO_EQ2GeFtbM_bw",
        "sourceChannelTitle": "Half as Interesting",
        "thumbnailUrl": "https://i.ytimg.com/vi/auScRXZwHhk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "vCAD3W43lIk",
        "title": "Who's Richer, Mario or Sonic? - Numberphile",
        "sourceChannelId": "UCoxcjq-8xIDTYp3uz647V5A",
        "sourceChannelTitle": "Numberphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/vCAD3W43lIk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "cI8IquVEyVY",
        "title": "?PHP Problem? - Computerphile",
        "sourceChannelId": "UC9-y-6csu5WGm29I7JiwpnA",
        "sourceChannelTitle": "Computerphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/cI8IquVEyVY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-E47v4Oy7fE",
        "title": "This machine breaks things.",
        "sourceChannelId": "UCBa659QWEk1AI4Tg--mrJ2A",
        "sourceChannelTitle": "Tom Scott",
        "thumbnailUrl": "https://i.ytimg.com/vi/-E47v4Oy7fE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "9xwU-ochogk",
        "title": "We tested Babish's 15,000% claim!",
        "sourceChannelId": "UCSju5G2aFaWMqn-_0YBtq5A",
        "sourceChannelTitle": "Stand-up Maths",
        "thumbnailUrl": "https://i.ytimg.com/vi/9xwU-ochogk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "lsbcN9-jU1Y",
        "title": "The Second Punic War - OverSimplified (Part 1)",
        "sourceChannelId": "UCNIuvl7V8zACPpTmmNIqP2A",
        "sourceChannelTitle": "OverSimplified",
        "thumbnailUrl": "https://i.ytimg.com/vi/lsbcN9-jU1Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8RPK5KwYhgA",
        "title": "What if you didn’t brush your teeth for a year? - Justin Merritt",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/8RPK5KwYhgA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "XZZ9gGpeSq4",
        "title": "In a world of endless health advice, clarity and context might be the best prescription #TEDTalks",
        "sourceChannelId": "UCAuUUnT6oDeKwE6v1NGQxug",
        "sourceChannelTitle": "TED",
        "thumbnailUrl": "https://i.ytimg.com/vi/XZZ9gGpeSq4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8CksuEk2jJQ",
        "title": "How to Integrate with an AX? The Surprising Power of Planimeters – Visually Explained!",
        "sourceChannelId": "UC1_uAIS3r8Vu6JjXWvastJg",
        "sourceChannelTitle": "Mathologer",
        "thumbnailUrl": "https://i.ytimg.com/vi/8CksuEk2jJQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "W9e5Un7VLUg",
        "title": "Kalaupapa: Why Hawaii's Most Isolated Town Stays Isolated",
        "sourceChannelId": "UCTWKe1zATFV6d0o6oLS9sgw",
        "sourceChannelTitle": "Extremities",
        "thumbnailUrl": "https://i.ytimg.com/vi/W9e5Un7VLUg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "nq_tGiprNlU",
        "title": "Dragonflies Are Not What You Think",
        "sourceChannelId": "UC176GAQozKKjhz62H8u9vQQ",
        "sourceChannelTitle": "Real Science",
        "thumbnailUrl": "https://i.ytimg.com/vi/nq_tGiprNlU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "y5RqfQvCaBY",
        "title": "How Geologists Can Tell if the World is Warming : Crash Course Geology #23",
        "sourceChannelId": "UCX6b17PVsYBQ0ip5gyeme-Q",
        "sourceChannelTitle": "CrashCourse",
        "thumbnailUrl": "https://i.ytimg.com/vi/y5RqfQvCaBY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "5_B1Mq02wcI",
        "title": "The Hidden Engineering of Pressure Regulators",
        "sourceChannelId": "UCMOqf8ab-42UUQIdVoKwjlQ",
        "sourceChannelTitle": "Practical Engineering",
        "thumbnailUrl": "https://i.ytimg.com/vi/5_B1Mq02wcI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HjeesNAbWqM",
        "title": "The Logistics of NYC Waste Management",
        "sourceChannelId": "UCuCkxoKLYO_EQ2GeFtbM_bw",
        "sourceChannelTitle": "Half as Interesting",
        "thumbnailUrl": "https://i.ytimg.com/vi/HjeesNAbWqM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "iJU6csQs_no",
        "title": "Blind Ranking Numbers (Daniel Litt)",
        "sourceChannelId": "UCoxcjq-8xIDTYp3uz647V5A",
        "sourceChannelTitle": "Numberphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/iJU6csQs_no/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "h6j_ixGnpiY",
        "title": "How Image Watermarking Works - Computerphile",
        "sourceChannelId": "UC9-y-6csu5WGm29I7JiwpnA",
        "sourceChannelTitle": "Computerphile",
        "thumbnailUrl": "https://i.ytimg.com/vi/h6j_ixGnpiY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "BxXfeotgVVA",
        "title": "Clocks are so much more interesting than I thought.",
        "sourceChannelId": "UCBa659QWEk1AI4Tg--mrJ2A",
        "sourceChannelTitle": "Tom Scott",
        "thumbnailUrl": "https://i.ytimg.com/vi/BxXfeotgVVA/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  }
};
