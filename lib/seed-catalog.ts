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
    "description": "Graphic design, UI/UX, 3D motion, product design & furniture craft"
  },
  {
    "id": "learning",
    "name": "Learning",
    "hue": 235,
    "description": "Cognition, mathematics, history & big ideas"
  },
  {
    "id": "movies",
    "name": "Movies",
    "hue": 12,
    "description": "Full-length feature films, sci-fi showcases, indie cinema & cult classics"
  },
  {
    "id": "cartoons",
    "name": "Animations",
    "hue": 48,
    "description": "Animated series, indie animation studios, storytelling & classic cartoons"
  },
  {
    "id": "industry",
    "name": "Industry",
    "hue": 32,
    "description": "How things are made, factory production lines, CNC machining & mass manufacturing"
  },
  {
    "id": "documentaries",
    "name": "Documentaries",
    "hue": 215,
    "description": "Deep-dive investigations, space epics, nature & human stories"
  },
  {
    "id": "architecture",
    "name": "Architecture",
    "hue": 28,
    "description": "Home tours, skylines, megaprojects & spatial craft"
  },
  {
    "id": "religion",
    "name": "Religion",
    "hue": 42,
    "description": "Faith, scripture reflections, theology & spiritual habits"
  },
  {
    "id": "cars",
    "name": "Cars",
    "hue": 8,
    "description": "Supercars, EVs, motorsport icons & automotive reviews"
  },
  {
    "id": "business",
    "name": "Business",
    "hue": 155,
    "description": "Founders, economics, markets & entrepreneur deep-dives"
  },
  {
    "id": "news",
    "name": "News",
    "hue": 200,
    "description": "World headlines, breaking stories & current affairs"
  },
  {
    "id": "entertainment",
    "name": "Entertainment",
    "hue": 320,
    "description": "Challenges, podcasts, comedy & internet culture"
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
        "youtubeVideoId": "0LqLBHercIo",
        "title": "Apple Just Made PCs Pointless",
        "sourceChannelId": "UCC_NjLEb2Sley94py4vSYTA",
        "sourceChannelTitle": "Andres Vidoza",
        "thumbnailUrl": "https://i.ytimg.com/vi/0LqLBHercIo/hqdefault.jpg",
        "durationSec": 993
      },
      {
        "youtubeVideoId": "3t0dUbh14Lc",
        "title": "iPhone 18 Pro After 1 Month — Why I Keep Coming Back",
        "sourceChannelId": "UCUUNkL6Wke6i0P6funa7wdQ",
        "sourceChannelTitle": "AppleInsider",
        "thumbnailUrl": "https://i.ytimg.com/vi/3t0dUbh14Lc/hqdefault.jpg",
        "durationSec": 481
      },
      {
        "youtubeVideoId": "us-ANZPNcpw",
        "title": "How to replace your GPUs thermal paste and pads/RTX 4090 Strix ",
        "sourceChannelId": "UCJSJ0xIWf4e3hNu7KgYqPxg",
        "sourceChannelTitle": "Hall Of Tech LLC",
        "thumbnailUrl": "https://i.ytimg.com/vi/us-ANZPNcpw/hqdefault.jpg",
        "durationSec": 457
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
        "youtubeVideoId": "N5YLi8Ar3Wg",
        "title": "Meet the Startup: Aegiq, A Full-Stack Photonic Quantum Computing Company",
        "sourceChannelId": "UCHuiy8bXnmK5nisYHUd1J5g",
        "sourceChannelTitle": "NVIDIA",
        "thumbnailUrl": "https://i.ytimg.com/vi/N5YLi8Ar3Wg/hqdefault.jpg",
        "durationSec": 106
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
        "youtubeVideoId": "Vna0hkq7U1g",
        "title": "Neuralink’s Newest Brain Chip Isn’t What You Think",
        "sourceChannelId": "UC415bOPUcGSamy543abLmRA",
        "sourceChannelTitle": "Cleo Abram",
        "thumbnailUrl": "https://i.ytimg.com/vi/Vna0hkq7U1g/hqdefault.jpg",
        "durationSec": 1067
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
        "youtubeVideoId": "YIfRvkKO0yg",
        "title": "Nigerian iPhone users vs. iPhone Vendors for the iPhone 18 pro",
        "sourceChannelId": "UCxDb8z2KsJTwDTRixbx-Ncg",
        "sourceChannelTitle": "Kagan",
        "thumbnailUrl": "https://i.ytimg.com/vi/YIfRvkKO0yg/hqdefault.jpg",
        "durationSec": 180
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
        "youtubeVideoId": "d68R5pkhz0Y",
        "title": "27 GTA 6 Missions in the Real Vice City",
        "sourceChannelId": "UCuVQmkiETvqmLviDcBtQw4A",
        "sourceChannelTitle": "Nothing",
        "thumbnailUrl": "https://i.ytimg.com/vi/d68R5pkhz0Y/hqdefault.jpg",
        "durationSec": 1450
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
        "youtubeVideoId": "3ueuqO9WukY",
        "title": "OPPO Find N6: Full-On Foldable Flagship!",
        "sourceChannelId": "UCEeH57P89hPQ1Sp2TavfICA",
        "sourceChannelTitle": "Parker Burton",
        "thumbnailUrl": "https://i.ytimg.com/vi/3ueuqO9WukY/hqdefault.jpg",
        "durationSec": 667
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
        "youtubeVideoId": "DaLB-A-i00o",
        "title": "A Few Days in My Life as a YouTuber",
        "sourceChannelId": "UCEli52HZqbog3LQr5sRzL1A",
        "sourceChannelTitle": "Shevon Salmon",
        "thumbnailUrl": "https://i.ytimg.com/vi/DaLB-A-i00o/hqdefault.jpg",
        "durationSec": 2385
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
        "youtubeVideoId": "DDjr6gXqtN8",
        "title": "What’s New in Google Accessibility | Episode 13 | American Sign Language",
        "sourceChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "sourceChannelTitle": "Google",
        "thumbnailUrl": "https://i.ytimg.com/vi/DDjr6gXqtN8/hqdefault.jpg",
        "durationSec": 478
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
        "youtubeVideoId": "kusynk28wMw",
        "title": "Home Appliance B2B Case Study Film at Current Landing I Samsung",
        "sourceChannelId": "UCWwgaK7x0_FR1goeSRazfsQ",
        "sourceChannelTitle": "Samsung",
        "thumbnailUrl": "https://i.ytimg.com/vi/kusynk28wMw/hqdefault.jpg",
        "durationSec": 168
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
        "youtubeVideoId": "RsT_fA_DPOY",
        "title": "If I had a $2000 budget, this is the gaming pc I would build",
        "sourceChannelId": "UCQQBbC25U6zJtGhxUnaPOLg",
        "sourceChannelTitle": "Devyn Johnston",
        "thumbnailUrl": "https://i.ytimg.com/vi/RsT_fA_DPOY/hqdefault.jpg",
        "durationSec": 613
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
        "youtubeVideoId": "RTOARC-yeMc",
        "title": "Air Powered Display: 3D Printed Fluidic Multiplexing",
        "sourceChannelId": "UCRsSVa7zu3l5e0CI3j14NrA",
        "sourceChannelTitle": "soiboi soft",
        "thumbnailUrl": "https://i.ytimg.com/vi/RTOARC-yeMc/hqdefault.jpg",
        "durationSec": 1128
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
        "youtubeVideoId": "T40hRXn6YMk",
        "title": "MuseTree - Grow Your Dreams with AI Magic | ASUS ProArt 2026",
        "sourceChannelId": "UCBK_MzhanH8HamrFbABbe8Q",
        "sourceChannelTitle": "ASUS",
        "thumbnailUrl": "https://i.ytimg.com/vi/T40hRXn6YMk/hqdefault.jpg",
        "durationSec": 101
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
        "youtubeVideoId": "hnZI5uUSdEo",
        "title": "New MacBook Pro with PROLED XDR Display: The first-ever Mac with Touch",
        "sourceChannelId": "UCE_M8A5yxnLfW0KghEeajjw",
        "sourceChannelTitle": "Apple",
        "thumbnailUrl": "https://i.ytimg.com/vi/hnZI5uUSdEo/hqdefault.jpg",
        "durationSec": 117
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
        "youtubeVideoId": "3pUyKy4w35I",
        "title": "If aging is a disease, how close are we to curing it? | Andrew Steele",
        "sourceChannelId": "UConJDkGk921yT9hISzFqpzw",
        "sourceChannelTitle": "Freethink",
        "thumbnailUrl": "https://i.ytimg.com/vi/3pUyKy4w35I/hqdefault.jpg",
        "durationSec": 824
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
        "youtubeVideoId": "HWfxnDDa4pQ",
        "title": "I Built an AI Video Editor. Would Anyone Pay for It? (App Validation in 1 Day)",
        "sourceChannelId": "UCNl9pCCDFUWqWmvk4sI5WLA",
        "sourceChannelTitle": "Life Of Gaurz",
        "thumbnailUrl": "https://i.ytimg.com/vi/HWfxnDDa4pQ/hqdefault.jpg",
        "durationSec": 781
      },
      {
        "youtubeVideoId": "A6sv_DIdKOo",
        "title": "Voice controlled apps with Twilio + OpenAI GPT-Live · Web Dev Challenge S3.E7",
        "sourceChannelId": "UCnty0z0pNRDgnuoirYXnC5A",
        "sourceChannelTitle": "CodeTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/A6sv_DIdKOo/hqdefault.jpg",
        "durationSec": 2059
      },
      {
        "youtubeVideoId": "YBDcwuWNa6o",
        "title": "The AI Image Model NOBODY is talking about (Seedream 5.5)",
        "sourceChannelId": "UCOQ6GGRyyu8S3jahnUz2zHw",
        "sourceChannelTitle": "Bad Decisions Studio ",
        "thumbnailUrl": "https://i.ytimg.com/vi/YBDcwuWNa6o/hqdefault.jpg",
        "durationSec": 2528
      },
      {
        "youtubeVideoId": "AR3DJ_EniCk",
        "title": "Amazon Can Run a Home Server… Too",
        "sourceChannelId": "UCC_NjLEb2Sley94py4vSYTA",
        "sourceChannelTitle": "Andres Vidoza",
        "thumbnailUrl": "https://i.ytimg.com/vi/AR3DJ_EniCk/hqdefault.jpg",
        "durationSec": 729
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
        "youtubeVideoId": "aTI2VLNHTZE",
        "title": "Your Friendly Neighborhood ROG RTX 5080 Astral Build 🕸️ ",
        "sourceChannelId": "UCJSJ0xIWf4e3hNu7KgYqPxg",
        "sourceChannelTitle": "Hall Of Tech LLC",
        "thumbnailUrl": "https://i.ytimg.com/vi/aTI2VLNHTZE/hqdefault.jpg",
        "durationSec": 395
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
        "youtubeVideoId": "784YQBiZArk",
        "title": "How Siemens Plans Production in Minutes With NVIDIA AI",
        "sourceChannelId": "UCHuiy8bXnmK5nisYHUd1J5g",
        "sourceChannelTitle": "NVIDIA",
        "thumbnailUrl": "https://i.ytimg.com/vi/784YQBiZArk/hqdefault.jpg",
        "durationSec": 92
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
        "youtubeVideoId": "YkEwyFpxWFc",
        "title": "The Most Likely Place to Find Aliens",
        "sourceChannelId": "UC415bOPUcGSamy543abLmRA",
        "sourceChannelTitle": "Cleo Abram",
        "thumbnailUrl": "https://i.ytimg.com/vi/YkEwyFpxWFc/hqdefault.jpg",
        "durationSec": 2346
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
        "youtubeVideoId": "KzsBA5VI7v0",
        "title": "Infinix Hot 70 Pro 5G - I'm So Confused",
        "sourceChannelId": "UCxDb8z2KsJTwDTRixbx-Ncg",
        "sourceChannelTitle": "Kagan",
        "thumbnailUrl": "https://i.ytimg.com/vi/KzsBA5VI7v0/hqdefault.jpg",
        "durationSec": 492
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
        "youtubeVideoId": "Ye8ZIj0ThKs",
        "title": "Nothing CEO reacts to Headphone (1) Pro reviews",
        "sourceChannelId": "UCuVQmkiETvqmLviDcBtQw4A",
        "sourceChannelTitle": "Nothing",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ye8ZIj0ThKs/hqdefault.jpg",
        "durationSec": 593
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
        "youtubeVideoId": "rHuU-YeHTjE",
        "title": "Tecno Camon 50 Ultra: A Focus on Imaging",
        "sourceChannelId": "UCEeH57P89hPQ1Sp2TavfICA",
        "sourceChannelTitle": "Parker Burton",
        "thumbnailUrl": "https://i.ytimg.com/vi/rHuU-YeHTjE/hqdefault.jpg",
        "durationSec": 509
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
        "youtubeVideoId": "3y2GFwNHNcE",
        "title": "iPhone Duo Unboxing & First Impressions - Star White",
        "sourceChannelId": "UCEli52HZqbog3LQr5sRzL1A",
        "sourceChannelTitle": "Shevon Salmon",
        "thumbnailUrl": "https://i.ytimg.com/vi/3y2GFwNHNcE/hqdefault.jpg",
        "durationSec": 1139
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
        "youtubeVideoId": "lL7L6DiGeLc",
        "title": "What’s New in Google Accessibility | Episode 13",
        "sourceChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "sourceChannelTitle": "Google",
        "thumbnailUrl": "https://i.ytimg.com/vi/lL7L6DiGeLc/hqdefault.jpg",
        "durationSec": 478
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
        "youtubeVideoId": "r0rC2jFXzo0",
        "title": "Home Appliance B2B Case Study Film at Aripeka I Dacor I Samsung",
        "sourceChannelId": "UCWwgaK7x0_FR1goeSRazfsQ",
        "sourceChannelTitle": "Samsung",
        "thumbnailUrl": "https://i.ytimg.com/vi/r0rC2jFXzo0/hqdefault.jpg",
        "durationSec": 210
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
        "youtubeVideoId": "nXNNEFOnGX8",
        "title": "One of the Thinnest 5090 Gaming PC's",
        "sourceChannelId": "UCQQBbC25U6zJtGhxUnaPOLg",
        "sourceChannelTitle": "Devyn Johnston",
        "thumbnailUrl": "https://i.ytimg.com/vi/nXNNEFOnGX8/hqdefault.jpg",
        "durationSec": 584
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
        "youtubeVideoId": "E1BLGpE5zH0",
        "title": "Air Powered Segment Display: 3D Printed Microfluidic RAM?",
        "sourceChannelId": "UCRsSVa7zu3l5e0CI3j14NrA",
        "sourceChannelTitle": "soiboi soft",
        "thumbnailUrl": "https://i.ytimg.com/vi/E1BLGpE5zH0/hqdefault.jpg",
        "durationSec": 976
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
        "youtubeVideoId": "u00fLLJsQbc",
        "title": "How Local AI Agents Simulate Cyberattacks and Test Defenses on ASUS Ascent GX10 | ASUS",
        "sourceChannelId": "UCBK_MzhanH8HamrFbABbe8Q",
        "sourceChannelTitle": "ASUS",
        "thumbnailUrl": "https://i.ytimg.com/vi/u00fLLJsQbc/hqdefault.jpg",
        "durationSec": 115
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
        "youtubeVideoId": "pglSnVLJnrw",
        "title": "Inside the lab training AI to cure diseases | Sam Rodriques: Full Interview",
        "sourceChannelId": "UConJDkGk921yT9hISzFqpzw",
        "sourceChannelTitle": "Freethink",
        "thumbnailUrl": "https://i.ytimg.com/vi/pglSnVLJnrw/hqdefault.jpg",
        "durationSec": 2077
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
        "youtubeVideoId": "KTClPQrlL5U",
        "title": "cozy coding vlog: fixing my app after a lead designer tested it 🦥 (app launch series)",
        "sourceChannelId": "UCNl9pCCDFUWqWmvk4sI5WLA",
        "sourceChannelTitle": "Life Of Gaurz",
        "thumbnailUrl": "https://i.ytimg.com/vi/KTClPQrlL5U/hqdefault.jpg",
        "durationSec": 391
      },
      {
        "youtubeVideoId": "pui1mW9sexM",
        "title": "This app is EVIL · Web Dev Challenge S3.E6",
        "sourceChannelId": "UCnty0z0pNRDgnuoirYXnC5A",
        "sourceChannelTitle": "CodeTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/pui1mW9sexM/hqdefault.jpg",
        "durationSec": 2196
      },
      {
        "youtubeVideoId": "iLjPajYhgYI",
        "title": "ChatGPT Image 2.6 can do this ?? 🤯",
        "sourceChannelId": "UCOQ6GGRyyu8S3jahnUz2zHw",
        "sourceChannelTitle": "Bad Decisions Studio ",
        "thumbnailUrl": "https://i.ytimg.com/vi/iLjPajYhgYI/hqdefault.jpg",
        "durationSec": 3261
      },
      {
        "youtubeVideoId": "X_Eb3MMD33M",
        "title": "Living with the iPhone Duo is Complicated",
        "sourceChannelId": "UCC_NjLEb2Sley94py4vSYTA",
        "sourceChannelTitle": "Andres Vidoza",
        "thumbnailUrl": "https://i.ytimg.com/vi/X_Eb3MMD33M/hqdefault.jpg",
        "durationSec": 1933
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
        "youtubeVideoId": "GHw6VlMDmfo",
        "title": "How to Replace the Liquid Metal on Your PS5 (Fix Overheating & Loud Fans)",
        "sourceChannelId": "UCJSJ0xIWf4e3hNu7KgYqPxg",
        "sourceChannelTitle": "Hall Of Tech LLC",
        "thumbnailUrl": "https://i.ytimg.com/vi/GHw6VlMDmfo/hqdefault.jpg",
        "durationSec": 744
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
        "youtubeVideoId": "yLMjEpMio2w",
        "title": "From AI Infrastructure to the 6G Future",
        "sourceChannelId": "UCHuiy8bXnmK5nisYHUd1J5g",
        "sourceChannelTitle": "NVIDIA",
        "thumbnailUrl": "https://i.ytimg.com/vi/yLMjEpMio2w/hqdefault.jpg",
        "durationSec": 2280
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
        "youtubeVideoId": "1LRvMRC_pfY",
        "title": "The Biggest Launch Since ChatGPT (Muse)",
        "sourceChannelId": "UC415bOPUcGSamy543abLmRA",
        "sourceChannelTitle": "Cleo Abram",
        "thumbnailUrl": "https://i.ytimg.com/vi/1LRvMRC_pfY/hqdefault.jpg",
        "durationSec": 4101
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
        "youtubeVideoId": "SnWdmElOpWM",
        "title": "Infinix Hot 70 Review - Hotter Than You Thought",
        "sourceChannelId": "UCxDb8z2KsJTwDTRixbx-Ncg",
        "sourceChannelTitle": "Kagan",
        "thumbnailUrl": "https://i.ytimg.com/vi/SnWdmElOpWM/hqdefault.jpg",
        "durationSec": 358
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
        "youtubeVideoId": "QWgHDWRI2Tc",
        "title": "V Reacts - Retro Tech",
        "sourceChannelId": "UCuVQmkiETvqmLviDcBtQw4A",
        "sourceChannelTitle": "Nothing",
        "thumbnailUrl": "https://i.ytimg.com/vi/QWgHDWRI2Tc/hqdefault.jpg",
        "durationSec": 208
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
        "youtubeVideoId": "Ph2ERKFg8x4",
        "title": "Galaxy Z TriFold: A Practical Review",
        "sourceChannelId": "UCEeH57P89hPQ1Sp2TavfICA",
        "sourceChannelTitle": "Parker Burton",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ph2ERKFg8x4/hqdefault.jpg",
        "durationSec": 506
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
        "youtubeVideoId": "VSHvlXqU6vQ",
        "title": "iPhone 18 Pro Max - Real Day In My Life Review (Battery & Camera Test)",
        "sourceChannelId": "UCEli52HZqbog3LQr5sRzL1A",
        "sourceChannelTitle": "Shevon Salmon",
        "thumbnailUrl": "https://i.ytimg.com/vi/VSHvlXqU6vQ/hqdefault.jpg",
        "durationSec": 3575
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
        "youtubeVideoId": "WMjVP7QQyDI",
        "title": "Giannis x Google Search: Miami Pickup Hoops",
        "sourceChannelId": "UCK8sQmJBp8GCxrOtXWBpyEA",
        "sourceChannelTitle": "Google",
        "thumbnailUrl": "https://i.ytimg.com/vi/WMjVP7QQyDI/hqdefault.jpg",
        "durationSec": 73
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
        "youtubeVideoId": "HJQ37cs9iHQ",
        "title": "BTS World Tour ARIRANG in Chicago: How we captured the stage #withGalaxy | Samsung",
        "sourceChannelId": "UCWwgaK7x0_FR1goeSRazfsQ",
        "sourceChannelTitle": "Samsung",
        "thumbnailUrl": "https://i.ytimg.com/vi/HJQ37cs9iHQ/hqdefault.jpg",
        "durationSec": 77
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
        "youtubeVideoId": "EpDXDY1pa6A",
        "title": "PS5 Sized Living Room Gaming PC",
        "sourceChannelId": "UCQQBbC25U6zJtGhxUnaPOLg",
        "sourceChannelTitle": "Devyn Johnston",
        "thumbnailUrl": "https://i.ytimg.com/vi/EpDXDY1pa6A/hqdefault.jpg",
        "durationSec": 462
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
        "youtubeVideoId": "VZ2ZcOzLnGg",
        "title": "A Display Powered by Air: 3D Printed Microfluidic Multiplexing",
        "sourceChannelId": "UCRsSVa7zu3l5e0CI3j14NrA",
        "sourceChannelTitle": "soiboi soft",
        "thumbnailUrl": "https://i.ytimg.com/vi/VZ2ZcOzLnGg/hqdefault.jpg",
        "durationSec": 954
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
        "youtubeVideoId": "5fXGvXVcBJ0",
        "title": "NVIDIA RTX Spark on ASUS ProArt: Everything You Need to Know (with professional voice actor) | ASUS",
        "sourceChannelId": "UCBK_MzhanH8HamrFbABbe8Q",
        "sourceChannelTitle": "ASUS",
        "thumbnailUrl": "https://i.ytimg.com/vi/5fXGvXVcBJ0/hqdefault.jpg",
        "durationSec": 469
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
        "youtubeVideoId": "bIiaPZffJ5g",
        "title": "Why the current moment is bigger than the invention of electricity | Peter Leyden",
        "sourceChannelId": "UConJDkGk921yT9hISzFqpzw",
        "sourceChannelTitle": "Freethink",
        "thumbnailUrl": "https://i.ytimg.com/vi/bIiaPZffJ5g/hqdefault.jpg",
        "durationSec": 603
      },
      {
        "youtubeVideoId": "E1xkpJjlfKI",
        "title": "200 people want my app. I’m not building it.",
        "sourceChannelId": "UCNl9pCCDFUWqWmvk4sI5WLA",
        "sourceChannelTitle": "Life Of Gaurz",
        "thumbnailUrl": "https://i.ytimg.com/vi/E1xkpJjlfKI/hqdefault.jpg",
        "durationSec": 643
      },
      {
        "youtubeVideoId": "B8AfcnlamA8",
        "title": "Why G2i flipped its entire business model · The Build Log",
        "sourceChannelId": "UCnty0z0pNRDgnuoirYXnC5A",
        "sourceChannelTitle": "CodeTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/B8AfcnlamA8/hqdefault.jpg",
        "durationSec": 949
      },
      {
        "youtubeVideoId": "anYTdbhJWCg",
        "title": "HIGGSFIELD Sends CEASE And DESIST Letter to COMFYUI 🤯",
        "sourceChannelId": "UCOQ6GGRyyu8S3jahnUz2zHw",
        "sourceChannelTitle": "Bad Decisions Studio ",
        "thumbnailUrl": "https://i.ytimg.com/vi/anYTdbhJWCg/hqdefault.jpg",
        "durationSec": 3811
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
        "youtubeVideoId": "nM21hVqvhmk",
        "title": "If You Escape, You Win $1,000,000",
        "sourceChannelId": "UCIPPMRA040LQr5QPyJEbmXA",
        "sourceChannelTitle": "MrBeast Gaming",
        "thumbnailUrl": "https://i.ytimg.com/vi/nM21hVqvhmk/hqdefault.jpg",
        "durationSec": 1512
      },
      {
        "youtubeVideoId": "8LMau1qXPYE",
        "title": "My game was cloned with AI... what do I do?",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/8LMau1qXPYE/hqdefault.jpg",
        "durationSec": 1228
      },
      {
        "youtubeVideoId": "bB-4Bhiotxo",
        "title": "nicki minaj sunshine",
        "sourceChannelId": "UC7Y7aX_EMsRwue_G_Vb7YDA",
        "sourceChannelTitle": "ladycrakajoke",
        "thumbnailUrl": "https://i.ytimg.com/vi/bB-4Bhiotxo/hqdefault.jpg",
        "durationSec": 206
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
        "youtubeVideoId": "shJPWM_mNcQ",
        "title": "FINAL LIFE: Episode 2 - BIG BUSINESS",
        "sourceChannelId": "UChFur_NwVSbUozOcF_F2kMg",
        "sourceChannelTitle": "Mumbo Jumbo",
        "thumbnailUrl": "https://i.ytimg.com/vi/shJPWM_mNcQ/hqdefault.jpg",
        "durationSec": 3118
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
        "youtubeVideoId": "cQjNtfbezFY",
        "title": "Final Life: Episode 2 - CUSHION BRIDGE!",
        "sourceChannelId": "UCR9Gcq0CMm6YgTzsDxAxjOQ",
        "sourceChannelTitle": "Grian",
        "thumbnailUrl": "https://i.ytimg.com/vi/cQjNtfbezFY/hqdefault.jpg",
        "durationSec": 2750
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
        "youtubeVideoId": "I4w4bUHEpiM",
        "title": "A NEW BEGINNING :: Create Aeronautics SMP Season 2 Episode 01",
        "sourceChannelId": "UCoVnZiFHqOuIbYp7MFPU3FQ",
        "sourceChannelTitle": "Kindle Bubble Dump",
        "thumbnailUrl": "https://i.ytimg.com/vi/I4w4bUHEpiM/hqdefault.jpg",
        "durationSec": 1905
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
        "youtubeVideoId": "Z6Uk8Xia5WY",
        "title": "Acorn Cop is CRAZY!! #acorn #police",
        "sourceChannelId": "UCbVrK84jqRDbN3pPf25TDDw",
        "sourceChannelTitle": "Flow State",
        "thumbnailUrl": "https://i.ytimg.com/vi/Z6Uk8Xia5WY/hqdefault.jpg",
        "durationSec": 538
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
        "youtubeVideoId": "WFXkmmfh_94",
        "title": "You Should Fight the Wind",
        "sourceChannelId": "UCEW0O9GyXRw420kj4dL8CkQ",
        "sourceChannelTitle": "orkid pulse",
        "thumbnailUrl": "https://i.ytimg.com/vi/WFXkmmfh_94/hqdefault.jpg",
        "durationSec": 1933
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
        "youtubeVideoId": "U-8tKxfR9Lc",
        "title": "The Beauty We're Taught to Hate | BRUTALISM",
        "sourceChannelId": "UCmb9CzRZCd71cdcesqyzenA",
        "sourceChannelTitle": "Snarple",
        "thumbnailUrl": "https://i.ytimg.com/vi/U-8tKxfR9Lc/hqdefault.jpg",
        "durationSec": 1273
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
        "youtubeVideoId": "gRcy-tlNKEo",
        "title": "Hunger and \"addicting\" game design",
        "sourceChannelId": "UChRxI4p6X8u7vCaRmpHK-rw",
        "sourceChannelTitle": "Riloe",
        "thumbnailUrl": "https://i.ytimg.com/vi/gRcy-tlNKEo/hqdefault.jpg",
        "durationSec": 1316
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
        "youtubeVideoId": "bOpqPkOlCGA",
        "title": "Marathon - Symbiosis Gameplay Trailer | PS5 & PC Games",
        "sourceChannelId": "UC-2Y8dQb0S6DtpxNgAKoJKA",
        "sourceChannelTitle": "PlayStation",
        "thumbnailUrl": "https://i.ytimg.com/vi/bOpqPkOlCGA/hqdefault.jpg",
        "durationSec": 155
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
        "youtubeVideoId": "WofFb_eOxxA",
        "title": "Gizmo Flushes",
        "sourceChannelId": "UCvRu5NjRmXy4UbKNHBhmKYA",
        "sourceChannelTitle": "Nick Sayer",
        "thumbnailUrl": "https://i.ytimg.com/vi/WofFb_eOxxA/hqdefault.jpg",
        "durationSec": 170
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
        "youtubeVideoId": "diUR_nHbaM8",
        "title": "I Built for 700 Hours in Creative Mode",
        "sourceChannelId": "UCSLAT2AVACxik7Ez8f9nsRQ",
        "sourceChannelTitle": "shovel241",
        "thumbnailUrl": "https://i.ytimg.com/vi/diUR_nHbaM8/hqdefault.jpg",
        "durationSec": 4332
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
        "youtubeVideoId": "npFlBoJM2Ts",
        "title": "Minecraft on Nintendo Switch™ 2!",
        "sourceChannelId": "UC1sELGmy5jp5fQUugmuYlXQ",
        "sourceChannelTitle": "Minecraft",
        "thumbnailUrl": "https://i.ytimg.com/vi/npFlBoJM2Ts/hqdefault.jpg",
        "durationSec": 76
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
        "youtubeVideoId": "rz1B4B2yBZY",
        "title": "Grand Theft Auto VI Launch Trailer",
        "sourceChannelId": "UC6VcWc1rAoWdBCM0JxrRQ3A",
        "sourceChannelTitle": "Rockstar Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/rz1B4B2yBZY/hqdefault.jpg",
        "durationSec": 90
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
        "youtubeVideoId": "uRjiHf8OKb0",
        "title": "Thronefall - Launch Trailer",
        "sourceChannelId": "UCjBp_7RuDBUYbd1LegWEJ8g",
        "sourceChannelTitle": "XBOX",
        "thumbnailUrl": "https://i.ytimg.com/vi/uRjiHf8OKb0/hqdefault.jpg",
        "durationSec": 70
      },
      {
        "youtubeVideoId": "JD-_Pm11WvU",
        "title": "I Expanded my Minecraft Backrooms...",
        "sourceChannelId": "UCGwITW9jq4h_9osOC-jFnJw",
        "sourceChannelTitle": "ThaMango",
        "thumbnailUrl": "https://i.ytimg.com/vi/JD-_Pm11WvU/hqdefault.jpg",
        "durationSec": 848
      },
      {
        "youtubeVideoId": "6Vw8fbA7HmA",
        "title": "Hush Official Gameplay Reveal // VALORANT",
        "sourceChannelId": "UC8CX0LD98EDXl4UYX1MDCXg",
        "sourceChannelTitle": "VALORANT",
        "thumbnailUrl": "https://i.ytimg.com/vi/6Vw8fbA7HmA/hqdefault.jpg",
        "durationSec": 109
      },
      {
        "youtubeVideoId": "YswVR2P79AA",
        "title": "Ultimate Pale Garden | Official Trailer",
        "sourceChannelId": "UC4UNqGYuB2q49GzGD_CBIVQ",
        "sourceChannelTitle": "TrixyBlox",
        "thumbnailUrl": "https://i.ytimg.com/vi/YswVR2P79AA/hqdefault.jpg",
        "durationSec": 86
      },
      {
        "youtubeVideoId": "YMhUV1hnzHE",
        "title": "Hytale Early Access: Chapter I (Official Trailer)",
        "sourceChannelId": "UCpmThB2TR0XQ8Y8Zv4zgYyA",
        "sourceChannelTitle": "Hytale",
        "thumbnailUrl": "https://i.ytimg.com/vi/YMhUV1hnzHE/hqdefault.jpg",
        "durationSec": 162
      },
      {
        "youtubeVideoId": "VCh95GAV6_c",
        "title": "STARCRAFT: 2030 Open World Shooter Announcement from Blizzcon",
        "sourceChannelId": "UCqDS7KWjAPKv-7ZSlro9OiQ",
        "sourceChannelTitle": "thegameawards",
        "thumbnailUrl": "https://i.ytimg.com/vi/VCh95GAV6_c/hqdefault.jpg",
        "durationSec": 187
      },
      {
        "youtubeVideoId": "SxypH1VSY3c",
        "title": "minecraft, but it's wii-era beach aesthetic",
        "sourceChannelId": "UCVb8JXAznL2asigbDnrP6jA",
        "sourceChannelTitle": "Sluda Builds",
        "thumbnailUrl": "https://i.ytimg.com/vi/SxypH1VSY3c/hqdefault.jpg",
        "durationSec": 841
      },
      {
        "youtubeVideoId": "aC75QH6JfVk",
        "title": "Client Rollercoaster #3 - Science Milk",
        "sourceChannelId": "UCP4kPIzNhpTGrn75XeLVVXg",
        "sourceChannelTitle": "nounish",
        "thumbnailUrl": "https://i.ytimg.com/vi/aC75QH6JfVk/hqdefault.jpg",
        "durationSec": 1184
      },
      {
        "youtubeVideoId": "n1j5QEss53o",
        "title": "I Trapped Youtubers in a Dystopian World in Minecraft",
        "sourceChannelId": "UC1MaLhSumVa9tx_qL2BR-ug",
        "sourceChannelTitle": "ApolloTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/n1j5QEss53o/hqdefault.jpg",
        "durationSec": 7308
      },
      {
        "youtubeVideoId": "Tnu0DEPP82k",
        "title": "How to unlock The Sift Dimension in Minecraft",
        "sourceChannelId": "UC-dqqfoSrz8sAYzpJ2zdIIw",
        "sourceChannelTitle": "Laynce",
        "thumbnailUrl": "https://i.ytimg.com/vi/Tnu0DEPP82k/hqdefault.jpg",
        "durationSec": 249
      },
      {
        "youtubeVideoId": "h8VE9_aHd94",
        "title": "$10,000 Every Day You Survive In Minecraft",
        "sourceChannelId": "UCIPPMRA040LQr5QPyJEbmXA",
        "sourceChannelTitle": "MrBeast Gaming",
        "thumbnailUrl": "https://i.ytimg.com/vi/h8VE9_aHd94/hqdefault.jpg",
        "durationSec": 3457
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
        "youtubeVideoId": "LrzV_gAmQbE",
        "title": "Brown Eyes - Destiny's Child [Lyrics]",
        "sourceChannelId": "UC7Y7aX_EMsRwue_G_Vb7YDA",
        "sourceChannelTitle": "jaglion",
        "thumbnailUrl": "https://i.ytimg.com/vi/LrzV_gAmQbE/hqdefault.jpg",
        "durationSec": 276
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
        "youtubeVideoId": "OQL2DSH0llM",
        "title": "The most beautiful Minecraft piston door",
        "sourceChannelId": "UChFur_NwVSbUozOcF_F2kMg",
        "sourceChannelTitle": "Mumbo Jumbo",
        "thumbnailUrl": "https://i.ytimg.com/vi/OQL2DSH0llM/hqdefault.jpg",
        "durationSec": 1239
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
        "youtubeVideoId": "ePqTmlZIEVk",
        "title": "Final Life: Episode 1 - HE'S BACK!",
        "sourceChannelId": "UCR9Gcq0CMm6YgTzsDxAxjOQ",
        "sourceChannelTitle": "Grian",
        "thumbnailUrl": "https://i.ytimg.com/vi/ePqTmlZIEVk/hqdefault.jpg",
        "durationSec": 4002
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
        "youtubeVideoId": "MaZbRgBenKw",
        "title": "The start of something beautiful :: Building My Forever World 10",
        "sourceChannelId": "UCoVnZiFHqOuIbYp7MFPU3FQ",
        "sourceChannelTitle": "Kindle Bubble Dump",
        "thumbnailUrl": "https://i.ytimg.com/vi/MaZbRgBenKw/hqdefault.jpg",
        "durationSec": 1311
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
        "youtubeVideoId": "7fkvue1y1wE",
        "title": "Brick Jonesey and Generally Specific thought they could lie to Flow State?? 😂 #forpublicsafety",
        "sourceChannelId": "UCbVrK84jqRDbN3pPf25TDDw",
        "sourceChannelTitle": "Flow State",
        "thumbnailUrl": "https://i.ytimg.com/vi/7fkvue1y1wE/hqdefault.jpg",
        "durationSec": 299
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
        "youtubeVideoId": "Ta1_BrDRkK0",
        "title": "Every Minecraft Harbor Needs a Lighthouse",
        "sourceChannelId": "UCEW0O9GyXRw420kj4dL8CkQ",
        "sourceChannelTitle": "orkid pulse",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ta1_BrDRkK0/hqdefault.jpg",
        "durationSec": 1278
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
        "youtubeVideoId": "PJlYWTNh4EE",
        "title": "I Built 24 Hours Straight in Minecraft",
        "sourceChannelId": "UCmb9CzRZCd71cdcesqyzenA",
        "sourceChannelTitle": "Snarple",
        "thumbnailUrl": "https://i.ytimg.com/vi/PJlYWTNh4EE/hqdefault.jpg",
        "durationSec": 1655
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
        "youtubeVideoId": "dAAdKizttUw",
        "title": "So... why are halo fans so obsessed with Artstyle?",
        "sourceChannelId": "UChRxI4p6X8u7vCaRmpHK-rw",
        "sourceChannelTitle": "Riloe",
        "thumbnailUrl": "https://i.ytimg.com/vi/dAAdKizttUw/hqdefault.jpg",
        "durationSec": 993
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
        "youtubeVideoId": "9qOjJaeKTAQ",
        "title": "Mistfall Hunter Season 2: Fires of the Past - Launch Trailer | PS5 Games",
        "sourceChannelId": "UC-2Y8dQb0S6DtpxNgAKoJKA",
        "sourceChannelTitle": "PlayStation",
        "thumbnailUrl": "https://i.ytimg.com/vi/9qOjJaeKTAQ/hqdefault.jpg",
        "durationSec": 126
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
        "youtubeVideoId": "Mi-C4eis2-Y",
        "title": "《賽德克‧巴萊》戲院預告(HD) - Seediq Bale - Theatrical Trailer - English Subtitled",
        "sourceChannelId": "UCvRu5NjRmXy4UbKNHBhmKYA",
        "sourceChannelTitle": "TheARSFilm",
        "thumbnailUrl": "https://i.ytimg.com/vi/Mi-C4eis2-Y/hqdefault.jpg",
        "durationSec": 125
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
        "youtubeVideoId": "ZaF0pXtHQuo",
        "title": "I Built for 500 Hours in Creative Mode",
        "sourceChannelId": "UCSLAT2AVACxik7Ez8f9nsRQ",
        "sourceChannelTitle": "shovel241",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZaF0pXtHQuo/hqdefault.jpg",
        "durationSec": 3293
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
        "youtubeVideoId": "cnVftw9QWgg",
        "title": "Minecraft x Dragon Ball Z - 1.1 Legends Update",
        "sourceChannelId": "UC1sELGmy5jp5fQUugmuYlXQ",
        "sourceChannelTitle": "Minecraft",
        "thumbnailUrl": "https://i.ytimg.com/vi/cnVftw9QWgg/hqdefault.jpg",
        "durationSec": 72
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
        "youtubeVideoId": "5venGClMwdo",
        "title": "Loftia Early Access Launch Trailer",
        "sourceChannelId": "UCKMkV9T20tUOBqwsi5xh7HA",
        "sourceChannelTitle": "Wholesome Games",
        "thumbnailUrl": "https://i.ytimg.com/vi/5venGClMwdo/hqdefault.jpg",
        "durationSec": 97
      },
      {
        "youtubeVideoId": "viF_AHt8uDs",
        "title": "MARVEL Cosmic Invasion: The Siege of Castle Doom | DLC #2 out NOW!",
        "sourceChannelId": "UCjBp_7RuDBUYbd1LegWEJ8g",
        "sourceChannelTitle": "XBOX",
        "thumbnailUrl": "https://i.ytimg.com/vi/viF_AHt8uDs/hqdefault.jpg",
        "durationSec": 71
      },
      {
        "youtubeVideoId": "Si-QP8IUL6w",
        "title": "Building a HUGE MINECRAFT KINGDOM in 24 HOURS",
        "sourceChannelId": "UCGwITW9jq4h_9osOC-jFnJw",
        "sourceChannelTitle": "ThaMango",
        "thumbnailUrl": "https://i.ytimg.com/vi/Si-QP8IUL6w/hqdefault.jpg",
        "durationSec": 2148
      },
      {
        "youtubeVideoId": "69sKYwsxUM8",
        "title": "VOCÊ É BRABA // VALORANT 2026 Game Changers Championship Hype Film",
        "sourceChannelId": "UC8CX0LD98EDXl4UYX1MDCXg",
        "sourceChannelTitle": "VALORANT",
        "thumbnailUrl": "https://i.ytimg.com/vi/69sKYwsxUM8/hqdefault.jpg",
        "durationSec": 109
      },
      {
        "youtubeVideoId": "JiV-2Ml08l4",
        "title": "This is Minecraft's ULTIMATE Survival World.",
        "sourceChannelId": "UC4UNqGYuB2q49GzGD_CBIVQ",
        "sourceChannelTitle": "TrixyBlox",
        "thumbnailUrl": "https://i.ytimg.com/vi/JiV-2Ml08l4/hqdefault.jpg",
        "durationSec": 1114
      },
      {
        "youtubeVideoId": "_NNh6Dz7YpA",
        "title": "Hytale | Creative Gameplay: New Entity Tools",
        "sourceChannelId": "UCpmThB2TR0XQ8Y8Zv4zgYyA",
        "sourceChannelTitle": "Hytale",
        "thumbnailUrl": "https://i.ytimg.com/vi/_NNh6Dz7YpA/hqdefault.jpg",
        "durationSec": 470
      },
      {
        "youtubeVideoId": "q56cEFowUgQ",
        "title": "Metroid Ravenous Reveal Trailer - New 2D Metroid, Coming January to Switch 2!",
        "sourceChannelId": "UCqDS7KWjAPKv-7ZSlro9OiQ",
        "sourceChannelTitle": "thegameawards",
        "thumbnailUrl": "https://i.ytimg.com/vi/q56cEFowUgQ/hqdefault.jpg",
        "durationSec": 122
      },
      {
        "youtubeVideoId": "sYh-usuT-gc",
        "title": "I Built the World's Most Complex City in Minecraft",
        "sourceChannelId": "UCVb8JXAznL2asigbDnrP6jA",
        "sourceChannelTitle": "Sluda Builds",
        "thumbnailUrl": "https://i.ytimg.com/vi/sYh-usuT-gc/hqdefault.jpg",
        "durationSec": 1805
      },
      {
        "youtubeVideoId": "dJcHd4m-CIc",
        "title": "Ep 3 – We turned illustration into an Olympic sport",
        "sourceChannelId": "UCP4kPIzNhpTGrn75XeLVVXg",
        "sourceChannelTitle": "nounish",
        "thumbnailUrl": "https://i.ytimg.com/vi/dJcHd4m-CIc/hqdefault.jpg",
        "durationSec": 886
      },
      {
        "youtubeVideoId": "RB_czcemwPY",
        "title": "I Put 7 Youtubers in a COSMIC Manhunt in Minecraft",
        "sourceChannelId": "UC1MaLhSumVa9tx_qL2BR-ug",
        "sourceChannelTitle": "ApolloTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/RB_czcemwPY/hqdefault.jpg",
        "durationSec": 5197
      },
      {
        "youtubeVideoId": "ZTS-XN7Z3ks",
        "title": "How to Make Movies in Minecraft",
        "sourceChannelId": "UC-dqqfoSrz8sAYzpJ2zdIIw",
        "sourceChannelTitle": "Laynce",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZTS-XN7Z3ks/hqdefault.jpg",
        "durationSec": 756
      },
      {
        "youtubeVideoId": "PyLGTmWz37U",
        "title": "I Found My 13 Year Old Minecraft World",
        "sourceChannelId": "UCIPPMRA040LQr5QPyJEbmXA",
        "sourceChannelTitle": "MrBeast Gaming",
        "thumbnailUrl": "https://i.ytimg.com/vi/PyLGTmWz37U/hqdefault.jpg",
        "durationSec": 979
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
        "youtubeVideoId": "XK9O74esKNU",
        "title": "nicki minaj feat.Lil Wayne \"I get crazy\" [2009]",
        "sourceChannelId": "UC7Y7aX_EMsRwue_G_Vb7YDA",
        "sourceChannelTitle": "pussimonster",
        "thumbnailUrl": "https://i.ytimg.com/vi/XK9O74esKNU/hqdefault.jpg",
        "durationSec": 160
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
        "youtubeVideoId": "0L3UJXg__JM",
        "title": "FINAL LIFE: Episode 1 - Mountain Starter Base",
        "sourceChannelId": "UChFur_NwVSbUozOcF_F2kMg",
        "sourceChannelTitle": "Mumbo Jumbo",
        "thumbnailUrl": "https://i.ytimg.com/vi/0L3UJXg__JM/hqdefault.jpg",
        "durationSec": 3264
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
        "youtubeVideoId": "MBWGQ2XxmjE",
        "title": "Hermitcraft 11: Episode 30 - WHIMSY WATERFALL!",
        "sourceChannelId": "UCR9Gcq0CMm6YgTzsDxAxjOQ",
        "sourceChannelTitle": "Grian",
        "thumbnailUrl": "https://i.ytimg.com/vi/MBWGQ2XxmjE/hqdefault.jpg",
        "durationSec": 2081
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
        "youtubeVideoId": "R2Y0uZ5M400",
        "title": "The ULTIMATE Minecraft Villager BREEDER + CONVERTER | Block-by-Block Tutorial",
        "sourceChannelId": "UCoVnZiFHqOuIbYp7MFPU3FQ",
        "sourceChannelTitle": "Kindle Bubble Dump",
        "thumbnailUrl": "https://i.ytimg.com/vi/R2Y0uZ5M400/hqdefault.jpg",
        "durationSec": 1663
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
        "youtubeVideoId": "Q7mpy4tnJkY",
        "title": "Flow State's Greatest Hates, Volume 2",
        "sourceChannelId": "UCbVrK84jqRDbN3pPf25TDDw",
        "sourceChannelTitle": "Flow State",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q7mpy4tnJkY/hqdefault.jpg",
        "durationSec": 2972
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
        "youtubeVideoId": "M6PNgnVfCKs",
        "title": "Transforming This Harbor in Survival Minecraft",
        "sourceChannelId": "UCEW0O9GyXRw420kj4dL8CkQ",
        "sourceChannelTitle": "orkid pulse",
        "thumbnailUrl": "https://i.ytimg.com/vi/M6PNgnVfCKs/hqdefault.jpg",
        "durationSec": 1691
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
        "youtubeVideoId": "BDyiqDVMst4",
        "title": "I Hosted Minecraft's BIGGEST Build Event",
        "sourceChannelId": "UCmb9CzRZCd71cdcesqyzenA",
        "sourceChannelTitle": "Snarple",
        "thumbnailUrl": "https://i.ytimg.com/vi/BDyiqDVMst4/hqdefault.jpg",
        "durationSec": 2911
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
        "youtubeVideoId": "PTwdOveYwrY",
        "title": "Yeah, the graphics really don't matter, btw",
        "sourceChannelId": "UChRxI4p6X8u7vCaRmpHK-rw",
        "sourceChannelTitle": "Riloe",
        "thumbnailUrl": "https://i.ytimg.com/vi/PTwdOveYwrY/hqdefault.jpg",
        "durationSec": 877
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
        "youtubeVideoId": "WjlWK1Wl6dc",
        "title": "The Outer Worlds 2 - Side Effects Guaranteed Trailer | PS5 Games",
        "sourceChannelId": "UC-2Y8dQb0S6DtpxNgAKoJKA",
        "sourceChannelTitle": "PlayStation",
        "thumbnailUrl": "https://i.ytimg.com/vi/WjlWK1Wl6dc/hqdefault.jpg",
        "durationSec": 119
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
        "youtubeVideoId": "Ha65Y7Rn8bo",
        "title": "I Built for 500 Hours in Creative Mode",
        "sourceChannelId": "UCSLAT2AVACxik7Ez8f9nsRQ",
        "sourceChannelTitle": "shovel241",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ha65Y7Rn8bo/hqdefault.jpg",
        "durationSec": 1901
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
        "youtubeVideoId": "nHW7oH_kZd4",
        "title": "MINECRAFT DUNGEONS II | Official Launch Trailer",
        "sourceChannelId": "UC1sELGmy5jp5fQUugmuYlXQ",
        "sourceChannelTitle": "Minecraft",
        "thumbnailUrl": "https://i.ytimg.com/vi/nHW7oH_kZd4/hqdefault.jpg",
        "durationSec": 81
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
        "youtubeVideoId": "iXG8wL03W00",
        "title": "Star Trek Online | Rediscovered Launch Trailer",
        "sourceChannelId": "UCjBp_7RuDBUYbd1LegWEJ8g",
        "sourceChannelTitle": "XBOX",
        "thumbnailUrl": "https://i.ytimg.com/vi/iXG8wL03W00/hqdefault.jpg",
        "durationSec": 108
      },
      {
        "youtubeVideoId": "xm7D2FkdAeo",
        "title": "I Built the Backrooms in Minecraft",
        "sourceChannelId": "UCGwITW9jq4h_9osOC-jFnJw",
        "sourceChannelTitle": "ThaMango",
        "thumbnailUrl": "https://i.ytimg.com/vi/xm7D2FkdAeo/hqdefault.jpg",
        "durationSec": 979
      },
      {
        "youtubeVideoId": "EQQuDPAAAI0",
        "title": "Shh.. We’re Chatting about Hush // Dev Diaries - VALORANT",
        "sourceChannelId": "UC8CX0LD98EDXl4UYX1MDCXg",
        "sourceChannelTitle": "VALORANT",
        "thumbnailUrl": "https://i.ytimg.com/vi/EQQuDPAAAI0/hqdefault.jpg",
        "durationSec": 558
      },
      {
        "youtubeVideoId": "I4DQNNLRRb4",
        "title": "Ultimate Survival: Solarpunk Island | Official Trailer",
        "sourceChannelId": "UC4UNqGYuB2q49GzGD_CBIVQ",
        "sourceChannelTitle": "TrixyBlox",
        "thumbnailUrl": "https://i.ytimg.com/vi/I4DQNNLRRb4/hqdefault.jpg",
        "durationSec": 87
      },
      {
        "youtubeVideoId": "BAmnC-ZEaAM",
        "title": "Hytale | Early PvP Gameplay Duel/FFA",
        "sourceChannelId": "UCpmThB2TR0XQ8Y8Zv4zgYyA",
        "sourceChannelTitle": "Hytale",
        "thumbnailUrl": "https://i.ytimg.com/vi/BAmnC-ZEaAM/hqdefault.jpg",
        "durationSec": 416
      },
      {
        "youtubeVideoId": "GcAv-ylntj0",
        "title": "The Legend of Zelda: Ocarina of Time Remake Trailer (November 5, 2026)",
        "sourceChannelId": "UCqDS7KWjAPKv-7ZSlro9OiQ",
        "sourceChannelTitle": "thegameawards",
        "thumbnailUrl": "https://i.ytimg.com/vi/GcAv-ylntj0/hqdefault.jpg",
        "durationSec": 206
      },
      {
        "youtubeVideoId": "wSwBy9v3eOg",
        "title": "A City That Will Never Exist, Built in Minecraft",
        "sourceChannelId": "UCVb8JXAznL2asigbDnrP6jA",
        "sourceChannelTitle": "Sluda Builds",
        "thumbnailUrl": "https://i.ytimg.com/vi/wSwBy9v3eOg/hqdefault.jpg",
        "durationSec": 1019
      },
      {
        "youtubeVideoId": "G4UU9j_1CyI",
        "title": "Ep 2 – We turned illustration into an Olympic sport",
        "sourceChannelId": "UCP4kPIzNhpTGrn75XeLVVXg",
        "sourceChannelTitle": "nounish",
        "thumbnailUrl": "https://i.ytimg.com/vi/G4UU9j_1CyI/hqdefault.jpg",
        "durationSec": 1422
      },
      {
        "youtubeVideoId": "XrxrhI-aitw",
        "title": "Trapping Youtubers in an Eldritch Forest in Minecraft",
        "sourceChannelId": "UC1MaLhSumVa9tx_qL2BR-ug",
        "sourceChannelTitle": "ApolloTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/XrxrhI-aitw/hqdefault.jpg",
        "durationSec": 4529
      },
      {
        "youtubeVideoId": "_FQfNC0Hc5c",
        "title": "Antarchy Mod Official Trailer",
        "sourceChannelId": "UC-dqqfoSrz8sAYzpJ2zdIIw",
        "sourceChannelTitle": "Laynce",
        "thumbnailUrl": "https://i.ytimg.com/vi/_FQfNC0Hc5c/hqdefault.jpg",
        "durationSec": 440
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
      },
      {
        "youtubeVideoId": "WRWbsryyCK4",
        "title": "SNAP JAW | Official Reveal Trailer",
        "sourceChannelId": "UCMOBdfLjLT-PzrGzld8GjRw",
        "sourceChannelTitle": "Carbon",
        "thumbnailUrl": "https://i.ytimg.com/vi/WRWbsryyCK4/hqdefault.jpg",
        "durationSec": 73
      },
      {
        "youtubeVideoId": "0L1L_3YZjto",
        "title": "What Happens If You Strap A Jet Engine To Your Fist?",
        "sourceChannelId": "UCMOBdfLjLT-PzrGzld8GjRw",
        "sourceChannelTitle": "Carbon",
        "thumbnailUrl": "https://i.ytimg.com/vi/0L1L_3YZjto/hqdefault.jpg",
        "durationSec": 89
      },
      {
        "youtubeVideoId": "ZQ09PE__XAM",
        "title": "Games I Regret Making",
        "sourceChannelId": "UCMOBdfLjLT-PzrGzld8GjRw",
        "sourceChannelTitle": "Carbon",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZQ09PE__XAM/hqdefault.jpg",
        "durationSec": 943
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
        "youtubeVideoId": "A8lEleHtqQc",
        "title": "2 Hours of Cozy, Ambient Sounds for Your Pet’s Afternoon Nap",
        "sourceChannelId": "UC3JhfsgFPLSLNEROQCdj-GQ",
        "sourceChannelTitle": "Headspace",
        "thumbnailUrl": "https://i.ytimg.com/vi/A8lEleHtqQc/hqdefault.jpg",
        "durationSec": 7227
      },
      {
        "youtubeVideoId": "ynbIe1LGx7g",
        "title": "4-Minute Pep Talk to Boost Your Confidence",
        "sourceChannelId": "UC3JhfsgFPLSLNEROQCdj-GQ",
        "sourceChannelTitle": "Headspace",
        "thumbnailUrl": "https://i.ytimg.com/vi/ynbIe1LGx7g/hqdefault.jpg",
        "durationSec": 240
      },
      {
        "youtubeVideoId": "OlV94YvOUlA",
        "title": "12-Minute Meditation to Improve Focus and Productivity | Headspace Courses",
        "sourceChannelId": "UC3JhfsgFPLSLNEROQCdj-GQ",
        "sourceChannelTitle": "Headspace",
        "thumbnailUrl": "https://i.ytimg.com/vi/OlV94YvOUlA/hqdefault.jpg",
        "durationSec": 711
      },
      {
        "youtubeVideoId": "o8EmAJGYJgE",
        "title": "Little Simz - Game On ft. JT (Official Visualiser)",
        "sourceChannelId": "UC89IYKXyf15qNezA7IuFG1A",
        "sourceChannelTitle": "Little Simz",
        "thumbnailUrl": "https://i.ytimg.com/vi/o8EmAJGYJgE/hqdefault.jpg",
        "durationSec": 150
      },
      {
        "youtubeVideoId": "vEhlyN9TU6c",
        "title": "thuy makes some tough decisions in IYKYK",
        "sourceChannelId": "UC2pmfLm7iq6Ov1UwYrWYkZA",
        "sourceChannelTitle": "Vevo",
        "thumbnailUrl": "https://i.ytimg.com/vi/vEhlyN9TU6c/hqdefault.jpg",
        "durationSec": 73
      },
      {
        "youtubeVideoId": "y12T26QcfDM",
        "title": "ROTI- Angalana Malai",
        "sourceChannelId": "UC_m96wEUiEktKJ_0JoqqGfQ",
        "sourceChannelTitle": "ROTI",
        "thumbnailUrl": "https://i.ytimg.com/vi/y12T26QcfDM/hqdefault.jpg",
        "durationSec": 149
      },
      {
        "youtubeVideoId": "LtUDeizHqKk",
        "title": "Fat Joe: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/LtUDeizHqKk/hqdefault.jpg",
        "durationSec": 1547
      },
      {
        "youtubeVideoId": "ejftyFf49Sg",
        "title": "How to Use Meme Sound Effects in Your Videos | Sound Snacks",
        "sourceChannelId": "UC_sOjEnngNB2y_AEaDd2cSA",
        "sourceChannelTitle": "Epidemic Sound",
        "thumbnailUrl": "https://i.ytimg.com/vi/ejftyFf49Sg/hqdefault.jpg",
        "durationSec": 241
      },
      {
        "youtubeVideoId": "XiCdhLJE93Q",
        "title": "Sienna Senate | A COLORS INTERVIEW",
        "sourceChannelId": "UC2Qw1dzXDBAZPwS7zm37g8g",
        "sourceChannelTitle": "COLORS",
        "thumbnailUrl": "https://i.ytimg.com/vi/XiCdhLJE93Q/hqdefault.jpg",
        "durationSec": 198
      },
      {
        "youtubeVideoId": "2G65jmC5XTY",
        "title": "October Evenings | Cozy Bedroom Guitar Session",
        "sourceChannelId": "UCn9Vf5gBcLMNGvAy37BPCaA",
        "sourceChannelTitle": "Alesa Mileto",
        "thumbnailUrl": "https://i.ytimg.com/vi/2G65jmC5XTY/hqdefault.jpg",
        "durationSec": 1334
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
        "youtubeVideoId": "ajFVuw8cErM",
        "title": "🌨️get cozy and comfortable...🍵(Cozy C418 Music to sleep to) Winter Dark Academia Ambience for Sleep",
        "sourceChannelId": "UCHzIX2frWnKAURPn3tK4wMA",
        "sourceChannelTitle": "Surreal Cat",
        "thumbnailUrl": "https://i.ytimg.com/vi/ajFVuw8cErM/hqdefault.jpg",
        "durationSec": 5383
      },
      {
        "youtubeVideoId": "xJ6IRuipyro",
        "title": "comehelpglo “onsra” Lyrics & Meaning | Genius Verified",
        "sourceChannelId": "UCyFZMEnm1il5Wv3a6tPscbA",
        "sourceChannelTitle": "Genius",
        "thumbnailUrl": "https://i.ytimg.com/vi/xJ6IRuipyro/hqdefault.jpg",
        "durationSec": 171
      },
      {
        "youtubeVideoId": "sNY_2TEmzho",
        "title": "Kendrick Lamar, SZA - luther",
        "sourceChannelId": "UC3lBXcrKFnFAFkfVk5WuKcQ",
        "sourceChannelTitle": "KendrickLamarVEVO",
        "thumbnailUrl": "https://i.ytimg.com/vi/sNY_2TEmzho/hqdefault.jpg",
        "durationSec": 311
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
        "youtubeVideoId": "7zXlhzA_Ti0",
        "title": "The Great Culture Shift",
        "sourceChannelId": "UCeJrRK_Pt1m23l5zgSytVUA",
        "sourceChannelTitle": "duplee",
        "thumbnailUrl": "https://i.ytimg.com/vi/7zXlhzA_Ti0/hqdefault.jpg",
        "durationSec": 1886
      },
      {
        "youtubeVideoId": "nERl4gyy-XM",
        "title": "Outstanding Pop Tour of the Year: Hilary Duff | Billboard Live Music Summit 2026",
        "sourceChannelId": "UCsVcseUYbYjldc-XgcsiEbg",
        "sourceChannelTitle": "Billboard",
        "thumbnailUrl": "https://i.ytimg.com/vi/nERl4gyy-XM/hqdefault.jpg",
        "durationSec": 1858
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
        "youtubeVideoId": "C4XtDNlB11k",
        "title": "Jordan Firstman on Club Kid, New Lingo & Knowing When To Leave the Party | The Rolling Stone Studio",
        "sourceChannelId": "UC-JblcinswY50lrUdSaRNEg",
        "sourceChannelTitle": "Rolling Stone",
        "thumbnailUrl": "https://i.ytimg.com/vi/C4XtDNlB11k/hqdefault.jpg",
        "durationSec": 1782
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
        "youtubeVideoId": "SoeQGZzQps0",
        "title": "’The Hunger Games: Sunrise on the Reaping’ Cast Creates a Custom Playlist | MTV Music To Blank To",
        "sourceChannelId": "UCxAICW_LdkfFYwTqTHHE0vg",
        "sourceChannelTitle": "MTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/SoeQGZzQps0/hqdefault.jpg",
        "durationSec": 292
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
        "youtubeVideoId": "d3QQHqRmvH4",
        "title": "The Christmas gift that started it all (animated clip)",
        "sourceChannelId": "UCSJ4gkVC6NrvII8umztf0Ow",
        "sourceChannelTitle": "Lofi Girl",
        "thumbnailUrl": "https://i.ytimg.com/vi/d3QQHqRmvH4/hqdefault.jpg",
        "durationSec": 72
      },
      {
        "youtubeVideoId": "IGaRF6dwRkQ",
        "title": "Avicii | Tomorrowland 2011",
        "sourceChannelId": "UCsN8M73DMWa8SPp5o_0IAQQ",
        "sourceChannelTitle": "Tomorrowland",
        "thumbnailUrl": "https://i.ytimg.com/vi/IGaRF6dwRkQ/hqdefault.jpg",
        "durationSec": 5175
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
        "youtubeVideoId": "BLtZYoxFsaI",
        "title": "Spinnin’ Sessions Radio – Episode #704 | Modeā",
        "sourceChannelId": "UCpDJl2EmP7Oh90Vylx0dZtA",
        "sourceChannelTitle": "Spinnin' Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/BLtZYoxFsaI/hqdefault.jpg",
        "durationSec": 3453
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
        "youtubeVideoId": "dS6Lhl4JS8A",
        "title": "Punctual & Jem Cooke - Ten Thousand Times [Deep Progressive House | Monstercat]",
        "sourceChannelId": "UCp8OOssjSjGZRVYK6zWbNLg",
        "sourceChannelTitle": "Monstercat Instinct",
        "thumbnailUrl": "https://i.ytimg.com/vi/dS6Lhl4JS8A/hqdefault.jpg",
        "durationSec": 194
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
        "youtubeVideoId": "b3MEtRUTYc0",
        "title": "Sanjoy - Doux (Official Lyric Video) [Ultra Records]",
        "sourceChannelId": "UC4rasfm9J-X4jNl9SvXp8xA",
        "sourceChannelTitle": "Ultra Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/b3MEtRUTYc0/hqdefault.jpg",
        "durationSec": 198
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
        "youtubeVideoId": "j04AQUOx9yY",
        "title": "Armin van Buuren & Benwal at ADE (Gashouder) - Radio 1’s Essential Mix Live",
        "sourceChannelId": "UC-FQUIVQ-bZiefzBiQAa8Fw",
        "sourceChannelTitle": "BBC Radio 1",
        "thumbnailUrl": "https://i.ytimg.com/vi/j04AQUOx9yY/hqdefault.jpg",
        "durationSec": 8079
      },
      {
        "youtubeVideoId": "tJIN-03qNSk",
        "title": "Little Simz - That’s a No No (Official Visualiser)",
        "sourceChannelId": "UC89IYKXyf15qNezA7IuFG1A",
        "sourceChannelTitle": "Little Simz",
        "thumbnailUrl": "https://i.ytimg.com/vi/tJIN-03qNSk/hqdefault.jpg",
        "durationSec": 206
      },
      {
        "youtubeVideoId": "yObCB1oCh3g",
        "title": "Bradley Simpson's Play, Skip, Repeat",
        "sourceChannelId": "UC2pmfLm7iq6Ov1UwYrWYkZA",
        "sourceChannelTitle": "Vevo",
        "thumbnailUrl": "https://i.ytimg.com/vi/yObCB1oCh3g/hqdefault.jpg",
        "durationSec": 87
      },
      {
        "youtubeVideoId": "XYV6Mkm9g3Q",
        "title": "ROTI- Fasisakechu",
        "sourceChannelId": "UC_m96wEUiEktKJ_0JoqqGfQ",
        "sourceChannelTitle": "ROTI",
        "thumbnailUrl": "https://i.ytimg.com/vi/XYV6Mkm9g3Q/hqdefault.jpg",
        "durationSec": 129
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
        "youtubeVideoId": "6OjTmBY4mHQ",
        "title": "5 Sound Effects That Make Any Scene Suspenseful  |  Sound Snacks",
        "sourceChannelId": "UC_sOjEnngNB2y_AEaDd2cSA",
        "sourceChannelTitle": "Epidemic Sound",
        "thumbnailUrl": "https://i.ytimg.com/vi/6OjTmBY4mHQ/hqdefault.jpg",
        "durationSec": 240
      },
      {
        "youtubeVideoId": "TOBmHM6_hGc",
        "title": "Sienna Senate - Do Your Thing | A COLORS SHOW",
        "sourceChannelId": "UC2Qw1dzXDBAZPwS7zm37g8g",
        "sourceChannelTitle": "COLORS",
        "thumbnailUrl": "https://i.ytimg.com/vi/TOBmHM6_hGc/hqdefault.jpg",
        "durationSec": 180
      },
      {
        "youtubeVideoId": "hWCcn_12gbc",
        "title": "crystal by stevie nicks (acoustic cover)",
        "sourceChannelId": "UCn9Vf5gBcLMNGvAy37BPCaA",
        "sourceChannelTitle": "Alesa Mileto",
        "thumbnailUrl": "https://i.ytimg.com/vi/hWCcn_12gbc/hqdefault.jpg",
        "durationSec": 404
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
        "youtubeVideoId": "i3sbbz3_taM",
        "title": "🍂I should relax too...⛩️(calming C418 music to sleep to) Snowy Autumn Ambience [Dark Academia]",
        "sourceChannelId": "UCHzIX2frWnKAURPn3tK4wMA",
        "sourceChannelTitle": "Surreal Cat",
        "thumbnailUrl": "https://i.ytimg.com/vi/i3sbbz3_taM/hqdefault.jpg",
        "durationSec": 5536
      },
      {
        "youtubeVideoId": "kXJqbgwzqzs",
        "title": "That Mexican OT “Apple Bottom” (Live Performance) | Open Mic",
        "sourceChannelId": "UCyFZMEnm1il5Wv3a6tPscbA",
        "sourceChannelTitle": "Genius",
        "thumbnailUrl": "https://i.ytimg.com/vi/kXJqbgwzqzs/hqdefault.jpg",
        "durationSec": 230
      },
      {
        "youtubeVideoId": "fuV4yQWdn_4",
        "title": "squabble up",
        "sourceChannelId": "UC3lBXcrKFnFAFkfVk5WuKcQ",
        "sourceChannelTitle": "Kendrick Lamar",
        "thumbnailUrl": "https://i.ytimg.com/vi/fuV4yQWdn_4/hqdefault.jpg",
        "durationSec": 166
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
        "youtubeVideoId": "kY5qThzkzhM",
        "title": "Types of Rap Fans 2",
        "sourceChannelId": "UCeJrRK_Pt1m23l5zgSytVUA",
        "sourceChannelTitle": "duplee",
        "thumbnailUrl": "https://i.ytimg.com/vi/kY5qThzkzhM/hqdefault.jpg",
        "durationSec": 506
      },
      {
        "youtubeVideoId": "b94GGzJepQ4",
        "title": "Bella Kay’s Breakout Year: Taking “iloveitiloveiloveit” From TikTok to the Hot 100 | Up & Coming",
        "sourceChannelId": "UCsVcseUYbYjldc-XgcsiEbg",
        "sourceChannelTitle": "Billboard",
        "thumbnailUrl": "https://i.ytimg.com/vi/b94GGzJepQ4/hqdefault.jpg",
        "durationSec": 2617
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
        "youtubeVideoId": "xxHF843gTUA",
        "title": "Greta Van Fleet’s Unlikely Evolution | Rolling Stone Nashville Now",
        "sourceChannelId": "UC-JblcinswY50lrUdSaRNEg",
        "sourceChannelTitle": "Rolling Stone",
        "thumbnailUrl": "https://i.ytimg.com/vi/xxHF843gTUA/hqdefault.jpg",
        "durationSec": 4268
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
        "youtubeVideoId": "x_iZ9dYYpC4",
        "title": "I Cried a River Through Palm Springs (Baby Nova) | MTV Underground",
        "sourceChannelId": "UCxAICW_LdkfFYwTqTHHE0vg",
        "sourceChannelTitle": "MTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/x_iZ9dYYpC4/hqdefault.jpg",
        "durationSec": 196
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
        "youtubeVideoId": "_jH2oTNRe7g",
        "title": "cozy autumn music 🍂 lofi beats to study / relax to",
        "sourceChannelId": "UCSJ4gkVC6NrvII8umztf0Ow",
        "sourceChannelTitle": "Lofi Girl",
        "thumbnailUrl": "https://i.ytimg.com/vi/_jH2oTNRe7g/hqdefault.jpg",
        "durationSec": 3881
      },
      {
        "youtubeVideoId": "fO64LaGqx3s",
        "title": "We Are Tomorrow 2026 l Documentary",
        "sourceChannelId": "UCsN8M73DMWa8SPp5o_0IAQQ",
        "sourceChannelTitle": "Tomorrowland",
        "thumbnailUrl": "https://i.ytimg.com/vi/fO64LaGqx3s/hqdefault.jpg",
        "durationSec": 1433
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
        "youtubeVideoId": "5lOloH_NrK8",
        "title": "KAAZE - Psychological (feat. CERES) [Official Audio]",
        "sourceChannelId": "UCpDJl2EmP7Oh90Vylx0dZtA",
        "sourceChannelTitle": "Spinnin' Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/5lOloH_NrK8/hqdefault.jpg",
        "durationSec": 153
      },
      {
        "youtubeVideoId": "kntCvO1Xopo",
        "title": "Macon & Paige Bea - Back Where It Started [Techno | Monstercat]",
        "sourceChannelId": "UCp8OOssjSjGZRVYK6zWbNLg",
        "sourceChannelTitle": "Monstercat Instinct",
        "thumbnailUrl": "https://i.ytimg.com/vi/kntCvO1Xopo/hqdefault.jpg",
        "durationSec": 202
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
        "youtubeVideoId": "xZbcSF9itt8",
        "title": "EASY FREAK - Summer Interlude (Official Video) [Ultra Records]",
        "sourceChannelId": "UC4rasfm9J-X4jNl9SvXp8xA",
        "sourceChannelTitle": "Ultra Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/xZbcSF9itt8/hqdefault.jpg",
        "durationSec": 118
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
        "youtubeVideoId": "C6A5Xb7dnm8",
        "title": "Little Simz - Open Arms ft. DEELA (Official Visualiser)",
        "sourceChannelId": "UC89IYKXyf15qNezA7IuFG1A",
        "sourceChannelTitle": "Little Simz",
        "thumbnailUrl": "https://i.ytimg.com/vi/C6A5Xb7dnm8/hqdefault.jpg",
        "durationSec": 213
      },
      {
        "youtubeVideoId": "IhfgQ0zCA70",
        "title": "Vevo - Pop Video Weekly | This Week’s Biggest Hits Ep. 22",
        "sourceChannelId": "UC2pmfLm7iq6Ov1UwYrWYkZA",
        "sourceChannelTitle": "Vevo",
        "thumbnailUrl": "https://i.ytimg.com/vi/IhfgQ0zCA70/hqdefault.jpg",
        "durationSec": 117
      },
      {
        "youtubeVideoId": "UWgjeENyQ10",
        "title": "ROTI- Maya Jhuto Haina ( Official Lyrics Visualizer )",
        "sourceChannelId": "UC_m96wEUiEktKJ_0JoqqGfQ",
        "sourceChannelTitle": "ROTI",
        "thumbnailUrl": "https://i.ytimg.com/vi/UWgjeENyQ10/hqdefault.jpg",
        "durationSec": 188
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
        "youtubeVideoId": "fhM85urlNYc",
        "title": "How Pro Editors Layer Sound Effects  |  Sound Snacks",
        "sourceChannelId": "UC_sOjEnngNB2y_AEaDd2cSA",
        "sourceChannelTitle": "Epidemic Sound",
        "thumbnailUrl": "https://i.ytimg.com/vi/fhM85urlNYc/hqdefault.jpg",
        "durationSec": 191
      },
      {
        "youtubeVideoId": "1czUusLWcZg",
        "title": "Rex Orange County - Iron Man | A COLORS SHOW",
        "sourceChannelId": "UC2Qw1dzXDBAZPwS7zm37g8g",
        "sourceChannelTitle": "COLORS",
        "thumbnailUrl": "https://i.ytimg.com/vi/1czUusLWcZg/hqdefault.jpg",
        "durationSec": 217
      },
      {
        "youtubeVideoId": "XFuATt6PZEA",
        "title": "Sing You To Sleep #12 🌙 End of Summer (Noah Kahan, The Cranberries, Lana Del Rey, & More)",
        "sourceChannelId": "UCn9Vf5gBcLMNGvAy37BPCaA",
        "sourceChannelTitle": "Alesa Mileto",
        "thumbnailUrl": "https://i.ytimg.com/vi/XFuATt6PZEA/hqdefault.jpg",
        "durationSec": 1895
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
        "youtubeVideoId": "Y0uXls6lYbU",
        "title": "🍁I'll never forget you...❄️(fireplace noise w/ minecraft music) Snowy Autumn Mountain House Ambiance",
        "sourceChannelId": "UCHzIX2frWnKAURPn3tK4wMA",
        "sourceChannelTitle": "Surreal Cat",
        "thumbnailUrl": "https://i.ytimg.com/vi/Y0uXls6lYbU/hqdefault.jpg",
        "durationSec": 5584
      },
      {
        "youtubeVideoId": "IwRUkl5QJNo",
        "title": "JoJo “Too Little Too Late” Lyrics & Meaning | Genius Verified",
        "sourceChannelId": "UCyFZMEnm1il5Wv3a6tPscbA",
        "sourceChannelTitle": "Genius",
        "thumbnailUrl": "https://i.ytimg.com/vi/IwRUkl5QJNo/hqdefault.jpg",
        "durationSec": 323
      },
      {
        "youtubeVideoId": "NYH6Oa4PXlY",
        "title": "Kendrick Lamar - squabble up (Official Audio)",
        "sourceChannelId": "UC3lBXcrKFnFAFkfVk5WuKcQ",
        "sourceChannelTitle": "Kendrick Lamar",
        "thumbnailUrl": "https://i.ytimg.com/vi/NYH6Oa4PXlY/hqdefault.jpg",
        "durationSec": 158
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
        "youtubeVideoId": "C1f8_-8GU7I",
        "title": "The 7 Levels of Rapper",
        "sourceChannelId": "UCeJrRK_Pt1m23l5zgSytVUA",
        "sourceChannelTitle": "duplee",
        "thumbnailUrl": "https://i.ytimg.com/vi/C1f8_-8GU7I/hqdefault.jpg",
        "durationSec": 792
      },
      {
        "youtubeVideoId": "8TKmep6Tl4U",
        "title": "Fans At Billboard Latin Music Week 2026 Share What Songs Help Get Them In Motion | Billboard",
        "sourceChannelId": "UCsVcseUYbYjldc-XgcsiEbg",
        "sourceChannelTitle": "Billboard",
        "thumbnailUrl": "https://i.ytimg.com/vi/8TKmep6Tl4U/hqdefault.jpg",
        "durationSec": 106
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
        "youtubeVideoId": "3164WXoiZjY",
        "title": "Kurt Vile Shuffles His Music Library: John Prine, The Roots, and more | Song Shuffle",
        "sourceChannelId": "UC-JblcinswY50lrUdSaRNEg",
        "sourceChannelTitle": "Rolling Stone",
        "thumbnailUrl": "https://i.ytimg.com/vi/3164WXoiZjY/hqdefault.jpg",
        "durationSec": 610
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
        "youtubeVideoId": "JTFwsLsaeIk",
        "title": "Baby Nova Shows Off Her Vocals on “Sad Porn” 🌟 MTV Underground",
        "sourceChannelId": "UCxAICW_LdkfFYwTqTHHE0vg",
        "sourceChannelTitle": "MTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/JTFwsLsaeIk/hqdefault.jpg",
        "durationSec": 185
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
        "youtubeVideoId": "O_97HkFMhFk",
        "title": "lofi house vol.1 🌆 chill music to vibe to",
        "sourceChannelId": "UCSJ4gkVC6NrvII8umztf0Ow",
        "sourceChannelTitle": "Lofi Girl",
        "thumbnailUrl": "https://i.ytimg.com/vi/O_97HkFMhFk/hqdefault.jpg",
        "durationSec": 5455
      },
      {
        "youtubeVideoId": "SiYRxCfrPTw",
        "title": "Memories live forever | Sunweb x Tomorrowland",
        "sourceChannelId": "UCsN8M73DMWa8SPp5o_0IAQQ",
        "sourceChannelTitle": "Tomorrowland",
        "thumbnailUrl": "https://i.ytimg.com/vi/SiYRxCfrPTw/hqdefault.jpg",
        "durationSec": 185
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
        "youtubeVideoId": "fobCK-B51iM",
        "title": "SMVGGLERS - Babalù (feat. KEL) [Official Audio]",
        "sourceChannelId": "UCpDJl2EmP7Oh90Vylx0dZtA",
        "sourceChannelTitle": "Spinnin' Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/fobCK-B51iM/hqdefault.jpg",
        "durationSec": 169
      },
      {
        "youtubeVideoId": "gdqOmI7dygY",
        "title": "Eyezic - LONELY [Dance / Pop | Monstercat]",
        "sourceChannelId": "UCp8OOssjSjGZRVYK6zWbNLg",
        "sourceChannelTitle": "Monstercat Instinct",
        "thumbnailUrl": "https://i.ytimg.com/vi/gdqOmI7dygY/hqdefault.jpg",
        "durationSec": 167
      },
      {
        "youtubeVideoId": "_dgWYxPCEc0",
        "title": "Halogen - Dope [Ultra Records]",
        "sourceChannelId": "UC4rasfm9J-X4jNl9SvXp8xA",
        "sourceChannelTitle": "Ultra Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/_dgWYxPCEc0/hqdefault.jpg",
        "durationSec": 274
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
        "youtubeVideoId": "MQi0WJcps9w",
        "title": "Music in Nature | 8 Hour Ambient Mix",
        "sourceChannelId": "UC54U5gpKkaa_BpXRVNip2Dw",
        "sourceChannelTitle": "KCRW",
        "thumbnailUrl": "https://i.ytimg.com/vi/MQi0WJcps9w/hqdefault.jpg",
        "durationSec": 28909
      },
      {
        "youtubeVideoId": "eNBySS8jaOo",
        "title": "Sam Smith, Demi Lovato - The Making Of I’m Ready | Vevo Footnotes",
        "sourceChannelId": "UC2pmfLm7iq6Ov1UwYrWYkZA",
        "sourceChannelTitle": "Vevo",
        "thumbnailUrl": "https://i.ytimg.com/vi/eNBySS8jaOo/hqdefault.jpg",
        "durationSec": 209
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
        "youtubeVideoId": "DuwDrPcC5fs",
        "title": "The Womack Sisters - I Am Your Season | A COLORS SHOW",
        "sourceChannelId": "UC2Qw1dzXDBAZPwS7zm37g8g",
        "sourceChannelTitle": "COLORS",
        "thumbnailUrl": "https://i.ytimg.com/vi/DuwDrPcC5fs/hqdefault.jpg",
        "durationSec": 243
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
        "youtubeVideoId": "oHyGHWcaooU",
        "title": "Milo J \"Niño\" Letra Oficial Y Significado | Genius Verified",
        "sourceChannelId": "UCyFZMEnm1il5Wv3a6tPscbA",
        "sourceChannelTitle": "Genius",
        "thumbnailUrl": "https://i.ytimg.com/vi/oHyGHWcaooU/hqdefault.jpg",
        "durationSec": 418
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
        "youtubeVideoId": "7TKX9O9xhFs",
        "title": "Maluma Gets Real About Mental Health, Vulnerability & Personal Growth | Latin Music Week 2026",
        "sourceChannelId": "UCsVcseUYbYjldc-XgcsiEbg",
        "sourceChannelTitle": "Billboard",
        "thumbnailUrl": "https://i.ytimg.com/vi/7TKX9O9xhFs/hqdefault.jpg",
        "durationSec": 1820
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
        "youtubeVideoId": "jbdnXHx_O3c",
        "title": "Jessica Lange on ‘AHS’ S13, Ryan Murphy, and Why She May Be Done Acting | The Rolling Stone Studio",
        "sourceChannelId": "UC-JblcinswY50lrUdSaRNEg",
        "sourceChannelTitle": "Rolling Stone",
        "thumbnailUrl": "https://i.ytimg.com/vi/jbdnXHx_O3c/hqdefault.jpg",
        "durationSec": 1716
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
        "youtubeVideoId": "TWzJ2gSNuos",
        "title": "Madonna Wins Artist of the Year | 2026 VMAs",
        "sourceChannelId": "UCxAICW_LdkfFYwTqTHHE0vg",
        "sourceChannelTitle": "MTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/TWzJ2gSNuos/hqdefault.jpg",
        "durationSec": 166
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
        "youtubeVideoId": "P12XxVMbYXg",
        "title": "Lofi Girl x Secret Lair - beats to cast to 💫",
        "sourceChannelId": "UCSJ4gkVC6NrvII8umztf0Ow",
        "sourceChannelTitle": "Lofi Girl",
        "thumbnailUrl": "https://i.ytimg.com/vi/P12XxVMbYXg/hqdefault.jpg",
        "durationSec": 3874
      },
      {
        "youtubeVideoId": "M66W6tETI0E",
        "title": "Holy Priest WE1 | Tomorrowland 2026",
        "sourceChannelId": "UCsN8M73DMWa8SPp5o_0IAQQ",
        "sourceChannelTitle": "Tomorrowland",
        "thumbnailUrl": "https://i.ytimg.com/vi/M66W6tETI0E/hqdefault.jpg",
        "durationSec": 3610
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
        "youtubeVideoId": "A64nnJE8j7s",
        "title": "Behind the Song | Timmy Trumpet x Olivia Sebastianelli - Dance Till I Die",
        "sourceChannelId": "UCpDJl2EmP7Oh90Vylx0dZtA",
        "sourceChannelTitle": "Spinnin' Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/A64nnJE8j7s/hqdefault.jpg",
        "durationSec": 138
      },
      {
        "youtubeVideoId": "7tmI8gcGL34",
        "title": "Bag Raiders & Abby Bella May - Ur Type [Indie Dance | Monstercat]",
        "sourceChannelId": "UCp8OOssjSjGZRVYK6zWbNLg",
        "sourceChannelTitle": "Monstercat Instinct",
        "thumbnailUrl": "https://i.ytimg.com/vi/7tmI8gcGL34/hqdefault.jpg",
        "durationSec": 188
      },
      {
        "youtubeVideoId": "uiUSM6sSlic",
        "title": "EASY FREAK - Don't It Feel Right (Official Video) [Ultra Records]",
        "sourceChannelId": "UC4rasfm9J-X4jNl9SvXp8xA",
        "sourceChannelTitle": "Ultra Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/uiUSM6sSlic/hqdefault.jpg",
        "durationSec": 158
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
        "youtubeVideoId": "S1ajVx9hL48",
        "title": "Demi Lovato - Reactions to Demi Lovato’s “I Love Me” | Watch This (Vevo)",
        "sourceChannelId": "UC2pmfLm7iq6Ov1UwYrWYkZA",
        "sourceChannelTitle": "Vevo",
        "thumbnailUrl": "https://i.ytimg.com/vi/S1ajVx9hL48/hqdefault.jpg",
        "durationSec": 203
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
        "youtubeVideoId": "TW3Hy5-Z2Pc",
        "title": "Anderson .Paak & Cordae - 58th Floor | A COLORS SHOW",
        "sourceChannelId": "UC2Qw1dzXDBAZPwS7zm37g8g",
        "sourceChannelTitle": "COLORS",
        "thumbnailUrl": "https://i.ytimg.com/vi/TW3Hy5-Z2Pc/hqdefault.jpg",
        "durationSec": 181
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
        "youtubeVideoId": "GBZpkNWjy0U",
        "title": "BE:FIRST “WATCH ME” (Live Performance) | Open Mic",
        "sourceChannelId": "UCyFZMEnm1il5Wv3a6tPscbA",
        "sourceChannelTitle": "Genius",
        "thumbnailUrl": "https://i.ytimg.com/vi/GBZpkNWjy0U/hqdefault.jpg",
        "durationSec": 170
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
        "youtubeVideoId": "yb7G9mMNkbY",
        "title": "Luke Bryan on “Country Girl (Shake It For Me)” “Play It Again” & His Biggest Hits | Chart History",
        "sourceChannelId": "UCsVcseUYbYjldc-XgcsiEbg",
        "sourceChannelTitle": "Billboard",
        "thumbnailUrl": "https://i.ytimg.com/vi/yb7G9mMNkbY/hqdefault.jpg",
        "durationSec": 1892
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
        "youtubeVideoId": "-HOmlgll1sI",
        "title": "Vince Staples Joins The Rolling Stone Interview: ‘Hip-Hop Doesn’t Really Have Any Rules’",
        "sourceChannelId": "UC-JblcinswY50lrUdSaRNEg",
        "sourceChannelTitle": "Rolling Stone",
        "thumbnailUrl": "https://i.ytimg.com/vi/-HOmlgll1sI/hqdefault.jpg",
        "durationSec": 2112
      },
      {
        "youtubeVideoId": "_n49Uzm9DCM",
        "title": "Marino Canal - Luxor",
        "sourceChannelId": "UCCycRfTS7V9WOFfWfkNVCSg",
        "sourceChannelTitle": "Cercle Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/_n49Uzm9DCM/hqdefault.jpg",
        "durationSec": 291
      },
      {
        "youtubeVideoId": "iOpesuAYbcw",
        "title": "Raye Performs \"I Will Overcome.\" / \"WHERE IS MY HUSBAND!\" | 2026 VMAs",
        "sourceChannelId": "UCxAICW_LdkfFYwTqTHHE0vg",
        "sourceChannelTitle": "MTV",
        "thumbnailUrl": "https://i.ytimg.com/vi/iOpesuAYbcw/hqdefault.jpg",
        "durationSec": 216
      },
      {
        "youtubeVideoId": "XVFUtEh9zrY",
        "title": "summer lofi ☀️ chill beats to relax to",
        "sourceChannelId": "UCSJ4gkVC6NrvII8umztf0Ow",
        "sourceChannelTitle": "Lofi Girl",
        "thumbnailUrl": "https://i.ytimg.com/vi/XVFUtEh9zrY/hqdefault.jpg",
        "durationSec": 3661
      },
      {
        "youtubeVideoId": "Mwfd0youI1Q",
        "title": "Philou WE2 | Tomorrowland 2026",
        "sourceChannelId": "UCsN8M73DMWa8SPp5o_0IAQQ",
        "sourceChannelTitle": "Tomorrowland",
        "thumbnailUrl": "https://i.ytimg.com/vi/Mwfd0youI1Q/hqdefault.jpg",
        "durationSec": 2792
      },
      {
        "youtubeVideoId": "8-4WnV7r-EE",
        "title": "KAAZE - Hot As Ice (feat. CERES) [Official Audio]",
        "sourceChannelId": "UCpDJl2EmP7Oh90Vylx0dZtA",
        "sourceChannelTitle": "Spinnin' Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/8-4WnV7r-EE/hqdefault.jpg",
        "durationSec": 182
      },
      {
        "youtubeVideoId": "KeSwS7m_0vc",
        "title": "Dillon Francis - Fall [Future Bass | Monstercat]",
        "sourceChannelId": "UCp8OOssjSjGZRVYK6zWbNLg",
        "sourceChannelTitle": "Monstercat Instinct",
        "thumbnailUrl": "https://i.ytimg.com/vi/KeSwS7m_0vc/hqdefault.jpg",
        "durationSec": 200
      },
      {
        "youtubeVideoId": "p9VGmfmw8sg",
        "title": "Franky Wah, Tripolism - Tripowah [Ultra Records]",
        "sourceChannelId": "UC4rasfm9J-X4jNl9SvXp8xA",
        "sourceChannelTitle": "Ultra Records",
        "thumbnailUrl": "https://i.ytimg.com/vi/p9VGmfmw8sg/hqdefault.jpg",
        "durationSec": 219
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
        "youtubeVideoId": "5LKOoqiQGDQ",
        "title": "I Tried EVERY Steak in America",
        "sourceChannelId": "UC_pT_Iz6XjuM-eMTlXghdfw",
        "sourceChannelTitle": "Max the Meat Guy",
        "thumbnailUrl": "https://i.ytimg.com/vi/5LKOoqiQGDQ/hqdefault.jpg",
        "durationSec": 3209
      },
      {
        "youtubeVideoId": "3r5aoFrXNRY",
        "title": "How To Make Award Winning Chili",
        "sourceChannelId": "UCJFp8uSYCjXOMnkUyb3CQ3Q",
        "sourceChannelTitle": "Tasty",
        "thumbnailUrl": "https://i.ytimg.com/vi/3r5aoFrXNRY/hqdefault.jpg",
        "durationSec": 485
      },
      {
        "youtubeVideoId": "9ZqdgmaO6gM",
        "title": "$1 vs $10,000 Mystery Box Challenge",
        "sourceChannelId": "UCMyOj6fhvKFMjxUCp3b_3gA",
        "sourceChannelTitle": "Nick DiGiovanni",
        "thumbnailUrl": "https://i.ytimg.com/vi/9ZqdgmaO6gM/hqdefault.jpg",
        "durationSec": 1634
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
        "youtubeVideoId": "eYzf04NfNDE",
        "title": "Apparently I’ve Been Cooking Steak WRONG All My Life!",
        "sourceChannelId": "UCfE5Cz44GlZVyoaYTHJbuZw",
        "sourceChannelTitle": "Guga Foods",
        "thumbnailUrl": "https://i.ytimg.com/vi/eYzf04NfNDE/hqdefault.jpg",
        "durationSec": 1249
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
        "youtubeVideoId": "j8bJN1UvHn0",
        "title": "I Tried the World’s SPICIEST Sauce",
        "sourceChannelId": "UC_pT_Iz6XjuM-eMTlXghdfw",
        "sourceChannelTitle": "Max the Meat Guy",
        "thumbnailUrl": "https://i.ytimg.com/vi/j8bJN1UvHn0/hqdefault.jpg",
        "durationSec": 2801
      },
      {
        "youtubeVideoId": "tP_x_ctVz3Y",
        "title": "I Cooked EVERY YouTuber’s Last Meals",
        "sourceChannelId": "UCMyOj6fhvKFMjxUCp3b_3gA",
        "sourceChannelTitle": "Nick DiGiovanni",
        "thumbnailUrl": "https://i.ytimg.com/vi/tP_x_ctVz3Y/hqdefault.jpg",
        "durationSec": 1757
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
        "youtubeVideoId": "VibGvoe3j_g",
        "title": "Is It Still Cheaper to Cook Steak at Home?",
        "sourceChannelId": "UCfE5Cz44GlZVyoaYTHJbuZw",
        "sourceChannelTitle": "Guga Foods",
        "thumbnailUrl": "https://i.ytimg.com/vi/VibGvoe3j_g/hqdefault.jpg",
        "durationSec": 807
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
        "youtubeVideoId": "P7OofYaOIKw",
        "title": "I Tried America’s Most EXPENSIVE Menu Items",
        "sourceChannelId": "UC_pT_Iz6XjuM-eMTlXghdfw",
        "sourceChannelTitle": "Max the Meat Guy",
        "thumbnailUrl": "https://i.ytimg.com/vi/P7OofYaOIKw/hqdefault.jpg",
        "durationSec": 3468
      },
      {
        "youtubeVideoId": "1fGScw5eX0M",
        "title": "10 Levels Of Spicy Food",
        "sourceChannelId": "UCMyOj6fhvKFMjxUCp3b_3gA",
        "sourceChannelTitle": "Nick DiGiovanni",
        "thumbnailUrl": "https://i.ytimg.com/vi/1fGScw5eX0M/hqdefault.jpg",
        "durationSec": 1177
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
        "youtubeVideoId": "wAD3ZWZ3FgE",
        "title": "Which Country Makes the ULTIMATE Roasted Chicken?",
        "sourceChannelId": "UCfE5Cz44GlZVyoaYTHJbuZw",
        "sourceChannelTitle": "Guga Foods",
        "thumbnailUrl": "https://i.ytimg.com/vi/wAD3ZWZ3FgE/hqdefault.jpg",
        "durationSec": 1251
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
        "youtubeVideoId": "7zkt-FdPC2Y",
        "title": "I sank to the bottom of the deepest ocean in real time",
        "sourceChannelId": "UClYDoTmBdnafBCHhnUCqvtw",
        "sourceChannelTitle": "Epic Spaceman",
        "thumbnailUrl": "https://i.ytimg.com/vi/7zkt-FdPC2Y/hqdefault.jpg",
        "durationSec": 1808
      },
      {
        "youtubeVideoId": "KfODG5REyss",
        "title": "I finally saw quantum mechanics with my own eyes... (It's spookier than I expected)",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/KfODG5REyss/hqdefault.jpg",
        "durationSec": 3955
      },
      {
        "youtubeVideoId": "fEjvSbI_PT4",
        "title": "What Actually Happens When You Die?",
        "sourceChannelId": "UCsXVk37bltHxD1rDPwtNM8Q",
        "sourceChannelTitle": "Kurzgesagt – In a Nutshell",
        "thumbnailUrl": "https://i.ytimg.com/vi/fEjvSbI_PT4/hqdefault.jpg",
        "durationSec": 864
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
        "youtubeVideoId": "3L-_HyXdGP4",
        "title": "Rebecca's Amazing America's 250th Birthday Quilt - From Alabama's American Village On July 4th 2026.",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/3L-_HyXdGP4/hqdefault.jpg",
        "durationSec": 152
      },
      {
        "youtubeVideoId": "QtW1lQITckE",
        "title": "I Flew Inside The Chip In My Phone",
        "sourceChannelId": "UClYDoTmBdnafBCHhnUCqvtw",
        "sourceChannelTitle": "Epic Spaceman",
        "thumbnailUrl": "https://i.ytimg.com/vi/QtW1lQITckE/hqdefault.jpg",
        "durationSec": 1147
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
        "youtubeVideoId": "5_Fayfx2NUM",
        "title": "How I Survived Late-Stage Cancer (A Fun Story)",
        "sourceChannelId": "UCsXVk37bltHxD1rDPwtNM8Q",
        "sourceChannelTitle": "Kurzgesagt – In a Nutshell",
        "thumbnailUrl": "https://i.ytimg.com/vi/5_Fayfx2NUM/hqdefault.jpg",
        "durationSec": 682
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
        "youtubeVideoId": "Q9JcpSJwEK0",
        "title": "BIG NEWS From Dr. Fuqua",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q9JcpSJwEK0/hqdefault.jpg",
        "durationSec": 614
      },
      {
        "youtubeVideoId": "V-S6GrwH6IQ",
        "title": "I put 40 Billion marbles in the Colosseum to find alien life",
        "sourceChannelId": "UClYDoTmBdnafBCHhnUCqvtw",
        "sourceChannelTitle": "Epic Spaceman",
        "thumbnailUrl": "https://i.ytimg.com/vi/V-S6GrwH6IQ/hqdefault.jpg",
        "durationSec": 2199
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
        "youtubeVideoId": "QW_jlUn4gA8",
        "title": "This Is What a Godlike Civilization Would Look Like",
        "sourceChannelId": "UCsXVk37bltHxD1rDPwtNM8Q",
        "sourceChannelTitle": "Kurzgesagt – In a Nutshell",
        "thumbnailUrl": "https://i.ytimg.com/vi/QW_jlUn4gA8/hqdefault.jpg",
        "durationSec": 862
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
        "youtubeVideoId": "i7_hi00ktgY",
        "title": "My Computer Update",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/i7_hi00ktgY/hqdefault.jpg",
        "durationSec": 368
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
        "youtubeVideoId": "PXbVn-f_wuM",
        "title": "You Will Only Like Half of This Video",
        "sourceChannelId": "UCsXVk37bltHxD1rDPwtNM8Q",
        "sourceChannelTitle": "Kurzgesagt – In a Nutshell",
        "thumbnailUrl": "https://i.ytimg.com/vi/PXbVn-f_wuM/hqdefault.jpg",
        "durationSec": 627
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
        "youtubeVideoId": "jVDPOPWarDU",
        "title": "Smarter Scrubber Update",
        "sourceChannelId": "UC8VkNBOwvsTlFjoSnNSMmxw",
        "sourceChannelTitle": "Smarter Every Day 2",
        "thumbnailUrl": "https://i.ytimg.com/vi/jVDPOPWarDU/hqdefault.jpg",
        "durationSec": 837
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
        "youtubeVideoId": "_y9JuojAIg0",
        "title": "We Finally Know More About Humanity’s First Civilization",
        "sourceChannelId": "UCsXVk37bltHxD1rDPwtNM8Q",
        "sourceChannelTitle": "Kurzgesagt – In a Nutshell",
        "thumbnailUrl": "https://i.ytimg.com/vi/_y9JuojAIg0/hqdefault.jpg",
        "durationSec": 634
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
      },
      {
        "youtubeVideoId": "ujkD4SxPKOI",
        "title": "AI Just Crossed the Terrifying Line - Now What?",
        "sourceChannelId": "UCsXVk37bltHxD1rDPwtNM8Q",
        "sourceChannelTitle": "Kurzgesagt – In a Nutshell",
        "thumbnailUrl": "https://i.ytimg.com/vi/ujkD4SxPKOI/hqdefault.jpg",
        "durationSec": 808
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
        "youtubeVideoId": "kqt1A8oB0BE",
        "title": "3 Reasons Alisha Palmowski Dominated the 2026 Season 🏆  | F1 ACADEMY",
        "sourceChannelId": "UCNtiHO5dvgowvZScesaKUqA",
        "sourceChannelTitle": "F1 Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/kqt1A8oB0BE/hqdefault.jpg",
        "durationSec": 124
      },
      {
        "youtubeVideoId": "4MZHXB6UX-c",
        "title": "Overtime 52: PIRATE EDITION",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/4MZHXB6UX-c/hqdefault.jpg",
        "durationSec": 1644
      },
      {
        "youtubeVideoId": "6Tap2dcxUJ0",
        "title": "How Good Was PRIME Michael Schumacher Actually?",
        "sourceChannelId": "UCQctwMz9ErTyK6ZpguWNH5Q",
        "sourceChannelTitle": "The Grid",
        "thumbnailUrl": "https://i.ytimg.com/vi/6Tap2dcxUJ0/hqdefault.jpg",
        "durationSec": 2125
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
        "youtubeVideoId": "ZYmzHbM5lHI",
        "title": "Champions' Chat with Alisha and Doriane 🎙️ 🏆 | F1 ACADEMY",
        "sourceChannelId": "UCNtiHO5dvgowvZScesaKUqA",
        "sourceChannelTitle": "F1 Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZYmzHbM5lHI/hqdefault.jpg",
        "durationSec": 296
      },
      {
        "youtubeVideoId": "t0Ou7tY-gZE",
        "title": "What Happened To Grosjean After F1s Scariest Crash?",
        "sourceChannelId": "UCQctwMz9ErTyK6ZpguWNH5Q",
        "sourceChannelTitle": "The Grid",
        "thumbnailUrl": "https://i.ytimg.com/vi/t0Ou7tY-gZE/hqdefault.jpg",
        "durationSec": 922
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
        "youtubeVideoId": "JnX9xgJu3q4",
        "title": "UFC FIGHTS THAT ARE AMAZING",
        "sourceChannelId": "UCvgfXK4nTYKudb0rFR6noLA",
        "sourceChannelTitle": "UFC",
        "thumbnailUrl": "https://i.ytimg.com/vi/JnX9xgJu3q4/hqdefault.jpg",
        "durationSec": 10170
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
        "youtubeVideoId": "LOGqTyDxy7w",
        "title": "The American Academy 📚🇺🇸  | F1 ACADEMY",
        "sourceChannelId": "UCNtiHO5dvgowvZScesaKUqA",
        "sourceChannelTitle": "F1 Academy",
        "thumbnailUrl": "https://i.ytimg.com/vi/LOGqTyDxy7w/hqdefault.jpg",
        "durationSec": 186
      },
      {
        "youtubeVideoId": "yCf_D9ZwbRs",
        "title": "Scariest F1 Crashes Of The Decade",
        "sourceChannelId": "UCQctwMz9ErTyK6ZpguWNH5Q",
        "sourceChannelTitle": "The Grid",
        "thumbnailUrl": "https://i.ytimg.com/vi/yCf_D9ZwbRs/hqdefault.jpg",
        "durationSec": 1748
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
        "youtubeVideoId": "y-jR93AytPc",
        "title": "EXTENDED: PACERS at MAVERICKS | FULL GAME HIGHLIGHTS | November 9, 2026",
        "sourceChannelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
        "sourceChannelTitle": "NBA",
        "thumbnailUrl": "https://i.ytimg.com/vi/y-jR93AytPc/hqdefault.jpg",
        "durationSec": 1693
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
        "youtubeVideoId": "B5VNBCvu4E0",
        "title": "NBA's Top 10 Plays of the Night | November 9, 2026",
        "sourceChannelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
        "sourceChannelTitle": "NBA",
        "thumbnailUrl": "https://i.ytimg.com/vi/B5VNBCvu4E0/hqdefault.jpg",
        "durationSec": 149
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
        "youtubeVideoId": "rvs9_MK4cH8",
        "title": "The Kenya They Don’t Want You To See!",
        "sourceChannelId": "UC8p_y3iHPe-n3zRfXK2czWA",
        "sourceChannelTitle": "Tayo Aina",
        "thumbnailUrl": "https://i.ytimg.com/vi/rvs9_MK4cH8/hqdefault.jpg",
        "durationSec": 2686
      },
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
        "youtubeVideoId": "4gokDKFHeB8",
        "title": "The Rwanda They Don't Want You To See!",
        "sourceChannelId": "UC8p_y3iHPe-n3zRfXK2czWA",
        "sourceChannelTitle": "Tayo Aina",
        "thumbnailUrl": "https://i.ytimg.com/vi/4gokDKFHeB8/hqdefault.jpg",
        "durationSec": 1938
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
        "youtubeVideoId": "DpZPRKGkRmU",
        "title": "The Ivory Coast They Don't Want You to See!",
        "sourceChannelId": "UC8p_y3iHPe-n3zRfXK2czWA",
        "sourceChannelTitle": "Tayo Aina",
        "thumbnailUrl": "https://i.ytimg.com/vi/DpZPRKGkRmU/hqdefault.jpg",
        "durationSec": 2904
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
        "youtubeVideoId": "Y9S0x-KL1nk",
        "title": "12 Cheating Allegations That Went Viral Overnight",
        "sourceChannelId": "UCaWd5_7JhbQBe4dknZhsHJg",
        "sourceChannelTitle": "WatchMojo.com",
        "thumbnailUrl": "https://i.ytimg.com/vi/Y9S0x-KL1nk/hqdefault.jpg",
        "durationSec": 944
      },
      {
        "youtubeVideoId": "Rma1KLKyZWs",
        "title": "RESIDENT EVIL Creator Deep Dive With Filmmakers - Teaser",
        "sourceChannelId": "UCz97F7dMxBNOfGYu3rx8aCw",
        "sourceChannelTitle": "Sony Pictures Entertainment",
        "thumbnailUrl": "https://i.ytimg.com/vi/Rma1KLKyZWs/hqdefault.jpg",
        "durationSec": 80
      },
      {
        "youtubeVideoId": "6DazexC3PR4",
        "title": "The Batman 2's Villain Leak Could Break Bruce Wayne’s Hope",
        "sourceChannelId": "UC2iUwfYi_1FCGGqhOUNx-iA",
        "sourceChannelTitle": "ScreenRant",
        "thumbnailUrl": "https://i.ytimg.com/vi/6DazexC3PR4/hqdefault.jpg",
        "durationSec": 531
      },
      {
        "youtubeVideoId": "ZzaAa6yDvVk",
        "title": "Helene in Asheville / Scenes From a Disaster",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZzaAa6yDvVk/hqdefault.jpg",
        "durationSec": 231
      },
      {
        "youtubeVideoId": "GxclbRaQMa8",
        "title": "The VisionQuest Official Podcast",
        "sourceChannelId": "UCvC4D8onUfXzvjTOM-dBfEA",
        "sourceChannelTitle": "Marvel Entertainment",
        "thumbnailUrl": "https://i.ytimg.com/vi/GxclbRaQMa8/hqdefault.jpg",
        "durationSec": 3733
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
        "youtubeVideoId": "iV7QfHCPuco",
        "title": "Nick and Noah's Most Unforgettable Kisses | Culpa Mía & Culpa Tuya | Prime Video",
        "sourceChannelId": "UCQJWtTnAHhEG5w4uN0udnUQ",
        "sourceChannelTitle": "Prime Video",
        "thumbnailUrl": "https://i.ytimg.com/vi/iV7QfHCPuco/hqdefault.jpg",
        "durationSec": 378
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
        "youtubeVideoId": "8DtnBGbnf-0",
        "title": "12 Days of Snoopy — \"Trying to Get There\" by Kamasi Washington feat. Leon Bridges | Apple TV",
        "sourceChannelId": "UC1Myj674wRVXB9I4c6Hm5zA",
        "sourceChannelTitle": "Apple TV",
        "thumbnailUrl": "https://i.ytimg.com/vi/8DtnBGbnf-0/hqdefault.jpg",
        "durationSec": 139
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
        "youtubeVideoId": "1czL3pM0rUQ",
        "title": "The Agency | Henry Tracks Down the Mole in Season 2 | Paramount+",
        "sourceChannelId": "UCrRttZIypNTA1Mrfwo745Sg",
        "sourceChannelTitle": "Paramount Plus",
        "thumbnailUrl": "https://i.ytimg.com/vi/1czL3pM0rUQ/hqdefault.jpg",
        "durationSec": 1777
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
        "youtubeVideoId": "_m6GbCv5_XE",
        "title": "Chad Johnson Is Worth Millions, But Still Lives Like He's Poor",
        "sourceChannelId": "UCeMYsj4kULpER9OQpKn9HhQ",
        "sourceChannelTitle": "NFL Rivals",
        "thumbnailUrl": "https://i.ytimg.com/vi/_m6GbCv5_XE/hqdefault.jpg",
        "durationSec": 1088
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
        "youtubeVideoId": "ahRyxQn1l58",
        "title": "It's Florida, Man Season 3 | Official Trailer | HBO Max",
        "sourceChannelId": "UCx-KWLTKlB83hDI6UKECtJQ",
        "sourceChannelTitle": "HBO Max",
        "thumbnailUrl": "https://i.ytimg.com/vi/ahRyxQn1l58/hqdefault.jpg",
        "durationSec": 132
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
        "youtubeVideoId": "-t8LxYQrj70",
        "title": "Emily in Paris: The Final Season | Official Teaser | Netflix",
        "sourceChannelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
        "sourceChannelTitle": "Netflix",
        "thumbnailUrl": "https://i.ytimg.com/vi/-t8LxYQrj70/hqdefault.jpg",
        "durationSec": 98
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
        "youtubeVideoId": "eeUQf24OfzA",
        "title": "Dune: Part Three | Final Trailer",
        "sourceChannelId": "UCAVadSTSh382kte-fQHqMNw",
        "sourceChannelTitle": "Legendary",
        "thumbnailUrl": "https://i.ytimg.com/vi/eeUQf24OfzA/hqdefault.jpg",
        "durationSec": 159
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
        "youtubeVideoId": "tpDFP9kzm3c",
        "title": "Sony’s Purpose 2026 | Official Video",
        "sourceChannelId": "UCVjS9AuBloqJJjhsy3vIfug",
        "sourceChannelTitle": "Sony",
        "thumbnailUrl": "https://i.ytimg.com/vi/tpDFP9kzm3c/hqdefault.jpg",
        "durationSec": 185
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
        "youtubeVideoId": "IRNwqTFWUX4",
        "title": "How It Was Made: Harry Potter Audioscapes Behind The Scenes",
        "sourceChannelId": "UChPRO1CB_Hvd0TvKRU62iSQ",
        "sourceChannelTitle": "Harry Potter",
        "thumbnailUrl": "https://i.ytimg.com/vi/IRNwqTFWUX4/hqdefault.jpg",
        "durationSec": 670
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
        "youtubeVideoId": "s-HKYRQ--as",
        "title": "The Official Gilded Age Podcast | Episode 2, “You Won’t Hear Me Beg” | HBO",
        "sourceChannelId": "UCVTQuK2CaWaTgSsoNkn5AiQ",
        "sourceChannelTitle": "HBO",
        "thumbnailUrl": "https://i.ytimg.com/vi/s-HKYRQ--as/hqdefault.jpg",
        "durationSec": 3160
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
        "youtubeVideoId": "rw9AIvK6x3g",
        "title": "Can I Make a HORROR Movie in 24 Hours?",
        "sourceChannelId": "UCAYsy_6_VBLiXkTGYIO2pdg",
        "sourceChannelTitle": "William H Baker",
        "thumbnailUrl": "https://i.ytimg.com/vi/rw9AIvK6x3g/hqdefault.jpg",
        "durationSec": 1225
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
        "youtubeVideoId": "mZkEkFW8LWY",
        "title": "The Best Nonbenders in Avatar | Seven Havens, Legend of Korra, and The Last Airbender",
        "sourceChannelId": "UCN_u5w69V9wUZYG8WeJWuNg",
        "sourceChannelTitle": "Avatar Legends",
        "thumbnailUrl": "https://i.ytimg.com/vi/mZkEkFW8LWY/hqdefault.jpg",
        "durationSec": 3703
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
        "youtubeVideoId": "SrO9Pp2Dw7k",
        "title": "Why Does Everyone Think They're an Influencer Now?",
        "sourceChannelId": "UC9to9MJHFod_HCb5QVRN3uQ",
        "sourceChannelTitle": "Snarky Jay",
        "thumbnailUrl": "https://i.ytimg.com/vi/SrO9Pp2Dw7k/hqdefault.jpg",
        "durationSec": 1202
      },
      {
        "youtubeVideoId": "EgbYEhxBsYY",
        "title": "How I Made a Film Using an iPhone and AI - in a Jungle",
        "sourceChannelId": "UC71x8bBOwIEscxAltguHXMQ",
        "sourceChannelTitle": "Blake Ridder",
        "thumbnailUrl": "https://i.ytimg.com/vi/EgbYEhxBsYY/hqdefault.jpg",
        "durationSec": 696
      },
      {
        "youtubeVideoId": "l2nYsfDjOGk",
        "title": "VISIONQUEST FINALE REACTION | Series Review & What Next? | NR Aftershow",
        "sourceChannelId": "UC7yRILFFJ2QZCykymr8LPwA",
        "sourceChannelTitle": "New Rockstars",
        "thumbnailUrl": "https://i.ytimg.com/vi/l2nYsfDjOGk/hqdefault.jpg",
        "durationSec": 5412
      },
      {
        "youtubeVideoId": "A8hES9I375g",
        "title": "Film Theory: Over the Garden Wall will CURSE You!",
        "sourceChannelId": "UC3sznuotAs2ohg_U__Jzj_Q",
        "sourceChannelTitle": "The Film Theorists",
        "thumbnailUrl": "https://i.ytimg.com/vi/A8hES9I375g/hqdefault.jpg",
        "durationSec": 1215
      },
      {
        "youtubeVideoId": "WaM6K8IXueI",
        "title": "The Easiest film look with ANY camera -- color grading + Dehancer",
        "sourceChannelId": "UCCwh1iC5ZJ7niFzqqVwAPTA",
        "sourceChannelTitle": "Moodymeria",
        "thumbnailUrl": "https://i.ytimg.com/vi/WaM6K8IXueI/hqdefault.jpg",
        "durationSec": 298
      },
      {
        "youtubeVideoId": "fBfJMNS0MnQ",
        "title": "how to switch from watching to creating.",
        "sourceChannelId": "UCWfi3ehtvILxj5zjxiVKDXQ",
        "sourceChannelTitle": "Ermia Ramez",
        "thumbnailUrl": "https://i.ytimg.com/vi/fBfJMNS0MnQ/hqdefault.jpg",
        "durationSec": 687
      },
      {
        "youtubeVideoId": "YLuwPgJkUNw",
        "title": "The Chalk Warfare Closed Beta is Finally Here",
        "sourceChannelId": "UCKo61AAaRD00ibCWJZ321MQ",
        "sourceChannelTitle": "SoKrispyMedia",
        "thumbnailUrl": "https://i.ytimg.com/vi/YLuwPgJkUNw/hqdefault.jpg",
        "durationSec": 484
      },
      {
        "youtubeVideoId": "ZGYi_JjKhfE",
        "title": "If Technoblade's Life Was a Movie...",
        "sourceChannelId": "UCVun3IyFIh6AsEMV11zlVHg",
        "sourceChannelTitle": "Sticks",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZGYi_JjKhfE/hqdefault.jpg",
        "durationSec": 817
      },
      {
        "youtubeVideoId": "Nl890MXSRnI",
        "title": "Remember Ultron? He's Real Now",
        "sourceChannelId": "UCSBPzXzIiNrrQFJOdG9TVkA",
        "sourceChannelTitle": "Talkin' Bout",
        "thumbnailUrl": "https://i.ytimg.com/vi/Nl890MXSRnI/hqdefault.jpg",
        "durationSec": 821
      },
      {
        "youtubeVideoId": "acxz7hUwwEU",
        "title": "The Endless Pursuit of Enough.",
        "sourceChannelId": "UCiELs1dxyTThkxGFFo7M6vA",
        "sourceChannelTitle": "Luda",
        "thumbnailUrl": "https://i.ytimg.com/vi/acxz7hUwwEU/hqdefault.jpg",
        "durationSec": 670
      },
      {
        "youtubeVideoId": "ZqXbhO4NDrw",
        "title": "Between Love and Fear | Short Film",
        "sourceChannelId": "UCEmc2aF81xiI9JNDGTMOTCQ",
        "sourceChannelTitle": "Kemz Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZqXbhO4NDrw/hqdefault.jpg",
        "durationSec": 329
      },
      {
        "youtubeVideoId": "Cjdkfj4YX00",
        "title": "The Story of a Garden",
        "sourceChannelId": "UCpntEHiWoGKaJEosqaPlQhQ",
        "sourceChannelTitle": "sam boyette",
        "thumbnailUrl": "https://i.ytimg.com/vi/Cjdkfj4YX00/hqdefault.jpg",
        "durationSec": 394
      },
      {
        "youtubeVideoId": "vbsbZOHffmQ",
        "title": "Art Of Being Tired | Sony ZV-E10 Cinematic",
        "sourceChannelId": "UCxAJ8G44RgNhDwXTJM8gkYw",
        "sourceChannelTitle": "taichibeni",
        "thumbnailUrl": "https://i.ytimg.com/vi/vbsbZOHffmQ/hqdefault.jpg",
        "durationSec": 165
      },
      {
        "youtubeVideoId": "ZlQ3Qmtfp98",
        "title": "You should compare yourself to others.",
        "sourceChannelId": "UCp-R630BEr1UHsvh6HUh8fQ",
        "sourceChannelTitle": "Sleepy Charlie",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZlQ3Qmtfp98/hqdefault.jpg",
        "durationSec": 458
      },
      {
        "youtubeVideoId": "8UaWLBbisHY",
        "title": "A Silent Voice - A Brutally Honest Anime About Suicide",
        "sourceChannelId": "UCN-DGJpb0iyPVdK_qto0qsw",
        "sourceChannelTitle": "Ryder the Omniscient",
        "thumbnailUrl": "https://i.ytimg.com/vi/8UaWLBbisHY/hqdefault.jpg",
        "durationSec": 1089
      },
      {
        "youtubeVideoId": "d75mxdr5PZI",
        "title": "8 Hours in Maasai Mara Safari, Kenya — In 6 Minutes",
        "sourceChannelId": "UCeJWq9aFeZJlRjtLO4ttDAA",
        "sourceChannelTitle": "akthawicked",
        "thumbnailUrl": "https://i.ytimg.com/vi/d75mxdr5PZI/hqdefault.jpg",
        "durationSec": 368
      },
      {
        "youtubeVideoId": "4Vw6mV4ROiw",
        "title": "Exposing Hollywood’s Biggest Thief..",
        "sourceChannelId": "UCCA75dU6oaqia36HHrVveaQ",
        "sourceChannelTitle": "Scene It",
        "thumbnailUrl": "https://i.ytimg.com/vi/4Vw6mV4ROiw/hqdefault.jpg",
        "durationSec": 650
      },
      {
        "youtubeVideoId": "BJfTAXmKYNE",
        "title": "Anthony Hamilton - Best of Me (Official Audio)",
        "sourceChannelId": "UCV8Ml5naZgJ2gfH1_6-c8-w",
        "sourceChannelTitle": "anthonyhamiltonVEVO",
        "thumbnailUrl": "https://i.ytimg.com/vi/BJfTAXmKYNE/hqdefault.jpg",
        "durationSec": 227
      },
      {
        "youtubeVideoId": "I_70NPZdMV4",
        "title": "I Recreated The Most Expensive Movie at Home (again)",
        "sourceChannelId": "UCz11O3R1rNe7rrZjBRSdkQA",
        "sourceChannelTitle": "Isaac Carlton",
        "thumbnailUrl": "https://i.ytimg.com/vi/I_70NPZdMV4/hqdefault.jpg",
        "durationSec": 1290
      },
      {
        "youtubeVideoId": "sWuMwuvhJWI",
        "title": "The BEST Vlog Camera For Documenting Your Life",
        "sourceChannelId": "UCRZ1OquIwGiUjJS7SXW4Fdg",
        "sourceChannelTitle": "Life Of Riza",
        "thumbnailUrl": "https://i.ytimg.com/vi/sWuMwuvhJWI/hqdefault.jpg",
        "durationSec": 707
      },
      {
        "youtubeVideoId": "tkpo-QrpK4k",
        "title": "Vlogging My Entire Day as a Creative on the DJI Osmo Pocket 4",
        "sourceChannelId": "UC8ItWN2sAQFqMvfylrqbwWw",
        "sourceChannelTitle": "itsn3t",
        "thumbnailUrl": "https://i.ytimg.com/vi/tkpo-QrpK4k/hqdefault.jpg",
        "durationSec": 915
      },
      {
        "youtubeVideoId": "E1xBr2kZcfY",
        "title": "World’s Worst First Date | Cinematic Short Film",
        "sourceChannelId": "UC20Y7fiRyz8aCctBJa937IA",
        "sourceChannelTitle": "Teja Lisjak",
        "thumbnailUrl": "https://i.ytimg.com/vi/E1xBr2kZcfY/hqdefault.jpg",
        "durationSec": 120
      },
      {
        "youtubeVideoId": "M0yvS5yWeOo",
        "title": "Stop Letting it Win",
        "sourceChannelId": "UCcFoxUZrPn3qT0WGLDjqaxA",
        "sourceChannelTitle": "The Vandalist",
        "thumbnailUrl": "https://i.ytimg.com/vi/M0yvS5yWeOo/hqdefault.jpg",
        "durationSec": 246
      },
      {
        "youtubeVideoId": "l3n4x-NmCdc",
        "title": "10 Disturbing Russell Brand Moments With What We Know Now",
        "sourceChannelId": "UCaWd5_7JhbQBe4dknZhsHJg",
        "sourceChannelTitle": "WatchMojo.com",
        "thumbnailUrl": "https://i.ytimg.com/vi/l3n4x-NmCdc/hqdefault.jpg",
        "durationSec": 707
      },
      {
        "youtubeVideoId": "nIw1O3zvOfE",
        "title": "JUMANJI: OPEN WORLD - New Trailer (4K)",
        "sourceChannelId": "UCz97F7dMxBNOfGYu3rx8aCw",
        "sourceChannelTitle": "Sony Pictures Entertainment",
        "thumbnailUrl": "https://i.ytimg.com/vi/nIw1O3zvOfE/hqdefault.jpg",
        "durationSec": 171
      },
      {
        "youtubeVideoId": "WWXstkvMFzQ",
        "title": "NCIS: Origins: Gibbs’ Silence About Lala Has a Painful New Meaning",
        "sourceChannelId": "UC2iUwfYi_1FCGGqhOUNx-iA",
        "sourceChannelTitle": "ScreenRant",
        "thumbnailUrl": "https://i.ytimg.com/vi/WWXstkvMFzQ/hqdefault.jpg",
        "durationSec": 517
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
        "youtubeVideoId": "2FdjsoGEQqg",
        "title": "Who Have You Lost? | Marvel Television's VisionQuest: Ep 7 | Stream on Disney+",
        "sourceChannelId": "UCvC4D8onUfXzvjTOM-dBfEA",
        "sourceChannelTitle": "Marvel Entertainment",
        "thumbnailUrl": "https://i.ytimg.com/vi/2FdjsoGEQqg/hqdefault.jpg",
        "durationSec": 69
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
        "youtubeVideoId": "zFSES2mzUU8",
        "title": "Blitzø's Acting Career Is Off to a Questionable Start | Helluva Boss | Clip | Prime Video",
        "sourceChannelId": "UCQJWtTnAHhEG5w4uN0udnUQ",
        "sourceChannelTitle": "Prime Video",
        "thumbnailUrl": "https://i.ytimg.com/vi/zFSES2mzUU8/hqdefault.jpg",
        "durationSec": 108
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
        "youtubeVideoId": "l8lDiZJTiys",
        "title": "Tenzing — The Making Of | Inside Look | Apple TV",
        "sourceChannelId": "UC1Myj674wRVXB9I4c6Hm5zA",
        "sourceChannelTitle": "Apple TV",
        "thumbnailUrl": "https://i.ytimg.com/vi/l8lDiZJTiys/hqdefault.jpg",
        "durationSec": 623
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
        "youtubeVideoId": "334hIUqKLX4",
        "title": "Lioness | Kyle Forces Information Out of Joe's Kidnappers (S3, E4) | Paramount+",
        "sourceChannelId": "UCrRttZIypNTA1Mrfwo745Sg",
        "sourceChannelTitle": "Paramount Plus",
        "thumbnailUrl": "https://i.ytimg.com/vi/334hIUqKLX4/hqdefault.jpg",
        "durationSec": 322
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
        "youtubeVideoId": "i3fXiJ40WOw",
        "title": "OOBAH | Official Trailer | HBO Max",
        "sourceChannelId": "UCx-KWLTKlB83hDI6UKECtJQ",
        "sourceChannelTitle": "HBO Max",
        "thumbnailUrl": "https://i.ytimg.com/vi/i3fXiJ40WOw/hqdefault.jpg",
        "durationSec": 120
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
        "youtubeVideoId": "bCjoG8Fff9I",
        "title": "NFL Players & Military Heroes on the Power of Brotherhood | The Mosquito Bowl | Netflix",
        "sourceChannelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
        "sourceChannelTitle": "Netflix",
        "thumbnailUrl": "https://i.ytimg.com/vi/bCjoG8Fff9I/hqdefault.jpg",
        "durationSec": 137
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
        "youtubeVideoId": "nRr3v9QWOfo",
        "title": "DIGGER | Official Final Trailer",
        "sourceChannelId": "UCAVadSTSh382kte-fQHqMNw",
        "sourceChannelTitle": "Legendary",
        "thumbnailUrl": "https://i.ytimg.com/vi/nRr3v9QWOfo/hqdefault.jpg",
        "durationSec": 144
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
        "youtubeVideoId": "PZElEo9qD9k",
        "title": "Sony’s Purpose 2026 (with Audio Description) | Official Video",
        "sourceChannelId": "UCVjS9AuBloqJJjhsy3vIfug",
        "sourceChannelTitle": "Sony",
        "thumbnailUrl": "https://i.ytimg.com/vi/PZElEo9qD9k/hqdefault.jpg",
        "durationSec": 185
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
        "youtubeVideoId": "O_l0rG4Fwbo",
        "title": "Sneak Peek of Harry Potter Audioscapes: The Gryffindor Common Room",
        "sourceChannelId": "UChPRO1CB_Hvd0TvKRU62iSQ",
        "sourceChannelTitle": "Harry Potter",
        "thumbnailUrl": "https://i.ytimg.com/vi/O_l0rG4Fwbo/hqdefault.jpg",
        "durationSec": 89
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
        "youtubeVideoId": "UCI5jWuqy7Y",
        "title": "The Official Gilded Age Podcast | Episode 1, “Ring The Bells” | HBO",
        "sourceChannelId": "UCVTQuK2CaWaTgSsoNkn5AiQ",
        "sourceChannelTitle": "HBO",
        "thumbnailUrl": "https://i.ytimg.com/vi/UCI5jWuqy7Y/hqdefault.jpg",
        "durationSec": 3511
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
        "youtubeVideoId": "Tx14uk3EBIo",
        "title": "I Spent 3 Months Recreating Spider-Man",
        "sourceChannelId": "UCAYsy_6_VBLiXkTGYIO2pdg",
        "sourceChannelTitle": "William H Baker",
        "thumbnailUrl": "https://i.ytimg.com/vi/Tx14uk3EBIo/hqdefault.jpg",
        "durationSec": 1247
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
        "youtubeVideoId": "MO58uyty-fA",
        "title": "Hunting Down the Avatar in Seven Havens | Braving the Elements S5 Ep 13",
        "sourceChannelId": "UCN_u5w69V9wUZYG8WeJWuNg",
        "sourceChannelTitle": "Avatar Legends",
        "thumbnailUrl": "https://i.ytimg.com/vi/MO58uyty-fA/hqdefault.jpg",
        "durationSec": 2830
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
        "youtubeVideoId": "go663dj4zng",
        "title": "Why The Crow (1994) Is Still a Masterpiece",
        "sourceChannelId": "UC9to9MJHFod_HCb5QVRN3uQ",
        "sourceChannelTitle": "Snarky Jay",
        "thumbnailUrl": "https://i.ytimg.com/vi/go663dj4zng/hqdefault.jpg",
        "durationSec": 1165
      },
      {
        "youtubeVideoId": "pZQ8HPscZB0",
        "title": "Welcome to The Jungle - Short Film",
        "sourceChannelId": "UC71x8bBOwIEscxAltguHXMQ",
        "sourceChannelTitle": "Blake Ridder",
        "thumbnailUrl": "https://i.ytimg.com/vi/pZQ8HPscZB0/hqdefault.jpg",
        "durationSec": 104
      },
      {
        "youtubeVideoId": "XspuR4fkaZo",
        "title": "What Really Happened with James Gunn & Jeremy Latcham at DC Studios",
        "sourceChannelId": "UC7yRILFFJ2QZCykymr8LPwA",
        "sourceChannelTitle": "New Rockstars",
        "thumbnailUrl": "https://i.ytimg.com/vi/XspuR4fkaZo/hqdefault.jpg",
        "durationSec": 1359
      },
      {
        "youtubeVideoId": "nLZ0qQuNo1U",
        "title": "Film Theory: NEVER Look Into the Water! (Santa Rosa Aquarium)",
        "sourceChannelId": "UC3sznuotAs2ohg_U__Jzj_Q",
        "sourceChannelTitle": "The Film Theorists",
        "thumbnailUrl": "https://i.ytimg.com/vi/nLZ0qQuNo1U/hqdefault.jpg",
        "durationSec": 1210
      },
      {
        "youtubeVideoId": "1QxBGBSjMZQ",
        "title": "The Trial - A Short Film",
        "sourceChannelId": "UCCwh1iC5ZJ7niFzqqVwAPTA",
        "sourceChannelTitle": "Moodymeria",
        "thumbnailUrl": "https://i.ytimg.com/vi/1QxBGBSjMZQ/hqdefault.jpg",
        "durationSec": 120
      },
      {
        "youtubeVideoId": "rvTaSn5hP6E",
        "title": "How this camera has the SAME quality as IMAX?",
        "sourceChannelId": "UCWfi3ehtvILxj5zjxiVKDXQ",
        "sourceChannelTitle": "Ermia Ramez",
        "thumbnailUrl": "https://i.ytimg.com/vi/rvTaSn5hP6E/hqdefault.jpg",
        "durationSec": 510
      },
      {
        "youtubeVideoId": "yr61CFTAuf8",
        "title": "Chalk Warfare is Finally a Video Game",
        "sourceChannelId": "UCKo61AAaRD00ibCWJZ321MQ",
        "sourceChannelTitle": "SoKrispyMedia",
        "thumbnailUrl": "https://i.ytimg.com/vi/yr61CFTAuf8/hqdefault.jpg",
        "durationSec": 634
      },
      {
        "youtubeVideoId": "l_N7AssXmYc",
        "title": "We Tricked Hollywood Into Buying Our $1 Movie",
        "sourceChannelId": "UCVun3IyFIh6AsEMV11zlVHg",
        "sourceChannelTitle": "Sticks",
        "thumbnailUrl": "https://i.ytimg.com/vi/l_N7AssXmYc/hqdefault.jpg",
        "durationSec": 2223
      },
      {
        "youtubeVideoId": "Q2EVFo4uzW4",
        "title": "Give Me 15 Minutes, I'll Get You Ready for Doomsday",
        "sourceChannelId": "UCSBPzXzIiNrrQFJOdG9TVkA",
        "sourceChannelTitle": "Talkin' Bout",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q2EVFo4uzW4/hqdefault.jpg",
        "durationSec": 902
      },
      {
        "youtubeVideoId": "NFm2Xjx61Q8",
        "title": "\"Got any hobbies?\"",
        "sourceChannelId": "UCiELs1dxyTThkxGFFo7M6vA",
        "sourceChannelTitle": "Luda",
        "thumbnailUrl": "https://i.ytimg.com/vi/NFm2Xjx61Q8/hqdefault.jpg",
        "durationSec": 507
      },
      {
        "youtubeVideoId": "vziFpg26KkE",
        "title": "ETAN (Deception) | Nigerian Thriller-Horror Short Film",
        "sourceChannelId": "UCEmc2aF81xiI9JNDGTMOTCQ",
        "sourceChannelTitle": "Kemz Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/vziFpg26KkE/hqdefault.jpg",
        "durationSec": 971
      },
      {
        "youtubeVideoId": "hlokGh8Nwzs",
        "title": "Mountain Reverie",
        "sourceChannelId": "UCpntEHiWoGKaJEosqaPlQhQ",
        "sourceChannelTitle": "sam boyette",
        "thumbnailUrl": "https://i.ytimg.com/vi/hlokGh8Nwzs/hqdefault.jpg",
        "durationSec": 172
      },
      {
        "youtubeVideoId": "Dohpfi4gMf8",
        "title": "IT WILL HAPPEN | Short Film | Sony FX3",
        "sourceChannelId": "UCxAJ8G44RgNhDwXTJM8gkYw",
        "sourceChannelTitle": "taichibeni",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dohpfi4gMf8/hqdefault.jpg",
        "durationSec": 85
      },
      {
        "youtubeVideoId": "dipA9BiTkYE",
        "title": "How I Make Cinematic YouTube Movies By Myself",
        "sourceChannelId": "UCp-R630BEr1UHsvh6HUh8fQ",
        "sourceChannelTitle": "Sleepy Charlie",
        "thumbnailUrl": "https://i.ytimg.com/vi/dipA9BiTkYE/hqdefault.jpg",
        "durationSec": 1162
      },
      {
        "youtubeVideoId": "ZHlwbykpYus",
        "title": "Horror Without God Isn't Actually Scary",
        "sourceChannelId": "UCN-DGJpb0iyPVdK_qto0qsw",
        "sourceChannelTitle": "Ryder the Omniscient",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZHlwbykpYus/hqdefault.jpg",
        "durationSec": 1184
      },
      {
        "youtubeVideoId": "5zU72RKLLaY",
        "title": "Solo in Kenya - An Adventure of a Lifetime.",
        "sourceChannelId": "UCeJWq9aFeZJlRjtLO4ttDAA",
        "sourceChannelTitle": "akthawicked",
        "thumbnailUrl": "https://i.ytimg.com/vi/5zU72RKLLaY/hqdefault.jpg",
        "durationSec": 519
      },
      {
        "youtubeVideoId": "ccMWgU5hl4U",
        "title": "when a script changed cinema forever...",
        "sourceChannelId": "UCCA75dU6oaqia36HHrVveaQ",
        "sourceChannelTitle": "Scene It",
        "thumbnailUrl": "https://i.ytimg.com/vi/ccMWgU5hl4U/hqdefault.jpg",
        "durationSec": 769
      },
      {
        "youtubeVideoId": "8G46Gd7B4gY",
        "title": "I Recreated Spider-Man Brand New Day at Home",
        "sourceChannelId": "UCz11O3R1rNe7rrZjBRSdkQA",
        "sourceChannelTitle": "Isaac Carlton",
        "thumbnailUrl": "https://i.ytimg.com/vi/8G46Gd7B4gY/hqdefault.jpg",
        "durationSec": 998
      },
      {
        "youtubeVideoId": "j4aoo1qbGoE",
        "title": "How To Film Your Life Like A Movie",
        "sourceChannelId": "UCRZ1OquIwGiUjJS7SXW4Fdg",
        "sourceChannelTitle": "Life Of Riza",
        "thumbnailUrl": "https://i.ytimg.com/vi/j4aoo1qbGoE/hqdefault.jpg",
        "durationSec": 614
      },
      {
        "youtubeVideoId": "k07lPWXtnHE",
        "title": "My Everyday Carry as a Creative in 2026",
        "sourceChannelId": "UC8ItWN2sAQFqMvfylrqbwWw",
        "sourceChannelTitle": "itsn3t",
        "thumbnailUrl": "https://i.ytimg.com/vi/k07lPWXtnHE/hqdefault.jpg",
        "durationSec": 606
      },
      {
        "youtubeVideoId": "G_fCDVyxH5w",
        "title": "Switzerland | Cinematic Travel Film | Sony A7V",
        "sourceChannelId": "UC20Y7fiRyz8aCctBJa937IA",
        "sourceChannelTitle": "Teja Lisjak",
        "thumbnailUrl": "https://i.ytimg.com/vi/G_fCDVyxH5w/hqdefault.jpg",
        "durationSec": 152
      },
      {
        "youtubeVideoId": "qSXSWXbKZZE",
        "title": "The Creature | YouTube Short Film",
        "sourceChannelId": "UCcFoxUZrPn3qT0WGLDjqaxA",
        "sourceChannelTitle": "The Vandalist",
        "thumbnailUrl": "https://i.ytimg.com/vi/qSXSWXbKZZE/hqdefault.jpg",
        "durationSec": 591
      },
      {
        "youtubeVideoId": "Oqs4HKdv6FA",
        "title": "3 Predictions For Godzilla After Minus Zero",
        "sourceChannelId": "UCaWd5_7JhbQBe4dknZhsHJg",
        "sourceChannelTitle": "WatchMojo.com",
        "thumbnailUrl": "https://i.ytimg.com/vi/Oqs4HKdv6FA/hqdefault.jpg",
        "durationSec": 722
      },
      {
        "youtubeVideoId": "NLVLsyE4uUA",
        "title": "The Holiday 20th Anniversary Trailer",
        "sourceChannelId": "UCz97F7dMxBNOfGYu3rx8aCw",
        "sourceChannelTitle": "Sony Pictures Entertainment",
        "thumbnailUrl": "https://i.ytimg.com/vi/NLVLsyE4uUA/hqdefault.jpg",
        "durationSec": 92
      },
      {
        "youtubeVideoId": "65pR6snQ9Qg",
        "title": "Austin Powers 4: Dr. Evil Could Steal Austin’s Movie",
        "sourceChannelId": "UC2iUwfYi_1FCGGqhOUNx-iA",
        "sourceChannelTitle": "ScreenRant",
        "thumbnailUrl": "https://i.ytimg.com/vi/65pR6snQ9Qg/hqdefault.jpg",
        "durationSec": 503
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
        "youtubeVideoId": "yBuk93NX8NE",
        "title": "MARVEL Tōkon: Fighting Souls | Phoenix Cyclops Character Guide",
        "sourceChannelId": "UCvC4D8onUfXzvjTOM-dBfEA",
        "sourceChannelTitle": "Marvel Entertainment",
        "thumbnailUrl": "https://i.ytimg.com/vi/yBuk93NX8NE/hqdefault.jpg",
        "durationSec": 529
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
        "youtubeVideoId": "nOyT9RkGRn4",
        "title": "Clashing Through The Snow - Official Trailer | Prime Video",
        "sourceChannelId": "UCQJWtTnAHhEG5w4uN0udnUQ",
        "sourceChannelTitle": "Prime Video",
        "thumbnailUrl": "https://i.ytimg.com/vi/nOyT9RkGRn4/hqdefault.jpg",
        "durationSec": 149
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
        "youtubeVideoId": "9ZiePpwIlAE",
        "title": "Bad Monkey — Season 2 Official Trailer | Apple TV",
        "sourceChannelId": "UC1Myj674wRVXB9I4c6Hm5zA",
        "sourceChannelTitle": "Apple TV",
        "thumbnailUrl": "https://i.ytimg.com/vi/9ZiePpwIlAE/hqdefault.jpg",
        "durationSec": 139
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
        "youtubeVideoId": "CQo5429ntRg",
        "title": "Among Us | Funniest Moments | Paramount+",
        "sourceChannelId": "UCrRttZIypNTA1Mrfwo745Sg",
        "sourceChannelTitle": "Paramount Plus",
        "thumbnailUrl": "https://i.ytimg.com/vi/CQo5429ntRg/hqdefault.jpg",
        "durationSec": 712
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
        "youtubeVideoId": "XBY2ylbeOkM",
        "title": "The Hotline | Official Trailer | HBO Max",
        "sourceChannelId": "UCx-KWLTKlB83hDI6UKECtJQ",
        "sourceChannelTitle": "HBO Max",
        "thumbnailUrl": "https://i.ytimg.com/vi/XBY2ylbeOkM/hqdefault.jpg",
        "durationSec": 84
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
        "youtubeVideoId": "uouCo9PqxVo",
        "title": "Ethos: Season 2 | Official Trailer | Netflix",
        "sourceChannelId": "UCWOA1ZGywLbqmigxE4Qlvuw",
        "sourceChannelTitle": "Netflix",
        "thumbnailUrl": "https://i.ytimg.com/vi/uouCo9PqxVo/hqdefault.jpg",
        "durationSec": 131
      },
      {
        "youtubeVideoId": "hrx7cQFIIn0",
        "title": "Street Fighter | New Trailer (2026 Movie)",
        "sourceChannelId": "UCAVadSTSh382kte-fQHqMNw",
        "sourceChannelTitle": "Legendary",
        "thumbnailUrl": "https://i.ytimg.com/vi/hrx7cQFIIn0/hqdefault.jpg",
        "durationSec": 169
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
        "youtubeVideoId": "pFORqArtuvU",
        "title": "Sony Innovation Fund | Official Video",
        "sourceChannelId": "UCVjS9AuBloqJJjhsy3vIfug",
        "sourceChannelTitle": "Sony",
        "thumbnailUrl": "https://i.ytimg.com/vi/pFORqArtuvU/hqdefault.jpg",
        "durationSec": 222
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
        "youtubeVideoId": "g0OiXWnrpyk",
        "title": "Harry Potter: Wizards of Baking Season 3 | Official Trailer",
        "sourceChannelId": "UChPRO1CB_Hvd0TvKRU62iSQ",
        "sourceChannelTitle": "Harry Potter",
        "thumbnailUrl": "https://i.ytimg.com/vi/g0OiXWnrpyk/hqdefault.jpg",
        "durationSec": 127
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
        "youtubeVideoId": "0kOc-9_fZsU",
        "title": "The Official Gilded Age Podcast Season 4 | Official Trailer | HBO",
        "sourceChannelId": "UCVTQuK2CaWaTgSsoNkn5AiQ",
        "sourceChannelTitle": "HBO",
        "thumbnailUrl": "https://i.ytimg.com/vi/0kOc-9_fZsU/hqdefault.jpg",
        "durationSec": 113
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
        "youtubeVideoId": "fKNwy6n5VG0",
        "title": "I Recreated the Most Iconic Shot",
        "sourceChannelId": "UCAYsy_6_VBLiXkTGYIO2pdg",
        "sourceChannelTitle": "William H Baker",
        "thumbnailUrl": "https://i.ytimg.com/vi/fKNwy6n5VG0/hqdefault.jpg",
        "durationSec": 750
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
        "youtubeVideoId": "_0kupFz2kSc",
        "title": "Every Fight in Avatar: Seven Havens So Far | Avatar",
        "sourceChannelId": "UCN_u5w69V9wUZYG8WeJWuNg",
        "sourceChannelTitle": "Avatar Legends",
        "thumbnailUrl": "https://i.ytimg.com/vi/_0kupFz2kSc/hqdefault.jpg",
        "durationSec": 299
      },
      {
        "youtubeVideoId": "8mDqR4XayhE",
        "title": "Hollywood HATES Its Own Audience",
        "sourceChannelId": "UC9to9MJHFod_HCb5QVRN3uQ",
        "sourceChannelTitle": "Snarky Jay",
        "thumbnailUrl": "https://i.ytimg.com/vi/8mDqR4XayhE/hqdefault.jpg",
        "durationSec": 1111
      },
      {
        "youtubeVideoId": "rTSZiPe8BqU",
        "title": "Captured - Short Film",
        "sourceChannelId": "UC71x8bBOwIEscxAltguHXMQ",
        "sourceChannelTitle": "Blake Ridder",
        "thumbnailUrl": "https://i.ytimg.com/vi/rTSZiPe8BqU/hqdefault.jpg",
        "durationSec": 157
      },
      {
        "youtubeVideoId": "DyaJowHohAE",
        "title": "AVENGERS DOOMSDAY: Wolverine, Nightcrawler & TVA Revealed in New Promos!",
        "sourceChannelId": "UC7yRILFFJ2QZCykymr8LPwA",
        "sourceChannelTitle": "New Rockstars",
        "thumbnailUrl": "https://i.ytimg.com/vi/DyaJowHohAE/hqdefault.jpg",
        "durationSec": 911
      },
      {
        "youtubeVideoId": "b4eNlo7xooA",
        "title": "Film Theory: The Most DISTURBING Analog Horror on YouTube",
        "sourceChannelId": "UC3sznuotAs2ohg_U__Jzj_Q",
        "sourceChannelTitle": "The Film Theorists",
        "thumbnailUrl": "https://i.ytimg.com/vi/b4eNlo7xooA/hqdefault.jpg",
        "durationSec": 2528
      },
      {
        "youtubeVideoId": "RV07iijRckc",
        "title": "1:00 AM Coffee & Cookie - SONY ZV-E1",
        "sourceChannelId": "UCCwh1iC5ZJ7niFzqqVwAPTA",
        "sourceChannelTitle": "Moodymeria",
        "thumbnailUrl": "https://i.ytimg.com/vi/RV07iijRckc/hqdefault.jpg",
        "durationSec": 75
      },
      {
        "youtubeVideoId": "Ayhk9HXvZEE",
        "title": "This is the only camera you need for cinematic videos.",
        "sourceChannelId": "UCWfi3ehtvILxj5zjxiVKDXQ",
        "sourceChannelTitle": "Ermia Ramez",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ayhk9HXvZEE/hqdefault.jpg",
        "durationSec": 565
      },
      {
        "youtubeVideoId": "IAYMfaFXPoo",
        "title": "Chalk Warfare 4.5 | Official Video Game Reveal",
        "sourceChannelId": "UCKo61AAaRD00ibCWJZ321MQ",
        "sourceChannelTitle": "SoKrispyMedia",
        "thumbnailUrl": "https://i.ytimg.com/vi/IAYMfaFXPoo/hqdefault.jpg",
        "durationSec": 274
      },
      {
        "youtubeVideoId": "NvTduUDqozE",
        "title": "We Surprised Dude Perfect With Their Own Movie",
        "sourceChannelId": "UCVun3IyFIh6AsEMV11zlVHg",
        "sourceChannelTitle": "Sticks",
        "thumbnailUrl": "https://i.ytimg.com/vi/NvTduUDqozE/hqdefault.jpg",
        "durationSec": 2439
      },
      {
        "youtubeVideoId": "iDVba_i0XQE",
        "title": "I Figured out How to Kill Every X-Man",
        "sourceChannelId": "UCSBPzXzIiNrrQFJOdG9TVkA",
        "sourceChannelTitle": "Talkin' Bout",
        "thumbnailUrl": "https://i.ytimg.com/vi/iDVba_i0XQE/hqdefault.jpg",
        "durationSec": 589
      },
      {
        "youtubeVideoId": "v1ZQZGejMu8",
        "title": "I Started a 9-5.",
        "sourceChannelId": "UCiELs1dxyTThkxGFFo7M6vA",
        "sourceChannelTitle": "Luda",
        "thumbnailUrl": "https://i.ytimg.com/vi/v1ZQZGejMu8/hqdefault.jpg",
        "durationSec": 334
      },
      {
        "youtubeVideoId": "vIlMbfN8ut8",
        "title": "JAPA | Award Winning Short Film",
        "sourceChannelId": "UCEmc2aF81xiI9JNDGTMOTCQ",
        "sourceChannelTitle": "Kemz Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/vIlMbfN8ut8/hqdefault.jpg",
        "durationSec": 530
      },
      {
        "youtubeVideoId": "6pRd5AM_uxo",
        "title": "winter, spring // a postcard from plymouth garden",
        "sourceChannelId": "UCpntEHiWoGKaJEosqaPlQhQ",
        "sourceChannelTitle": "sam boyette",
        "thumbnailUrl": "https://i.ytimg.com/vi/6pRd5AM_uxo/hqdefault.jpg",
        "durationSec": 228
      },
      {
        "youtubeVideoId": "Z9wzvh6Ft_Q",
        "title": "MIND IS TALKING, short film | Sony A7SIII",
        "sourceChannelId": "UCxAJ8G44RgNhDwXTJM8gkYw",
        "sourceChannelTitle": "taichibeni",
        "thumbnailUrl": "https://i.ytimg.com/vi/Z9wzvh6Ft_Q/hqdefault.jpg",
        "durationSec": 127
      },
      {
        "youtubeVideoId": "ox5UKqP0isI",
        "title": "You Don't Need Goals, You Need an Excuse to Start",
        "sourceChannelId": "UCp-R630BEr1UHsvh6HUh8fQ",
        "sourceChannelTitle": "Sleepy Charlie",
        "thumbnailUrl": "https://i.ytimg.com/vi/ox5UKqP0isI/hqdefault.jpg",
        "durationSec": 511
      },
      {
        "youtubeVideoId": "CEVUJEWUP9I",
        "title": "Fantasy is a Christian Genre, Actually",
        "sourceChannelId": "UCN-DGJpb0iyPVdK_qto0qsw",
        "sourceChannelTitle": "Ryder the Omniscient",
        "thumbnailUrl": "https://i.ytimg.com/vi/CEVUJEWUP9I/hqdefault.jpg",
        "durationSec": 1168
      },
      {
        "youtubeVideoId": "dV1uD6xpGWI",
        "title": "10 Ways Marvel Had To Change Its Plans After Dropping Kang",
        "sourceChannelId": "UCaWd5_7JhbQBe4dknZhsHJg",
        "sourceChannelTitle": "WatchMojo.com",
        "thumbnailUrl": "https://i.ytimg.com/vi/dV1uD6xpGWI/hqdefault.jpg",
        "durationSec": 729
      },
      {
        "youtubeVideoId": "u1qAFoWqgl0",
        "title": "Carrie Season 2 Expands Stephen King's Psychic World",
        "sourceChannelId": "UC2iUwfYi_1FCGGqhOUNx-iA",
        "sourceChannelTitle": "ScreenRant",
        "thumbnailUrl": "https://i.ytimg.com/vi/u1qAFoWqgl0/hqdefault.jpg",
        "durationSec": 530
      },
      {
        "youtubeVideoId": "OT_go3Yozls",
        "title": "Top 10 Most Iconic Music Moments of 2002",
        "sourceChannelId": "UCaWd5_7JhbQBe4dknZhsHJg",
        "sourceChannelTitle": "WatchMojo.com",
        "thumbnailUrl": "https://i.ytimg.com/vi/OT_go3Yozls/hqdefault.jpg",
        "durationSec": 797
      },
      {
        "youtubeVideoId": "5Qp8X9BFnaA",
        "title": "You Can See Everything: Oscars' First Best Picture Doc?",
        "sourceChannelId": "UC2iUwfYi_1FCGGqhOUNx-iA",
        "sourceChannelTitle": "ScreenRant",
        "thumbnailUrl": "https://i.ytimg.com/vi/5Qp8X9BFnaA/hqdefault.jpg",
        "durationSec": 560
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
        "youtubeVideoId": "5Gz60WNz6mk",
        "title": "The Webcomic Chapter That Refused to End... Ends TODAY! 🔥",
        "sourceChannelId": "UChIHYCXYpUsHY6Wjk03C_uQ",
        "sourceChannelTitle": "Love2DrawManga",
        "thumbnailUrl": "https://i.ytimg.com/vi/5Gz60WNz6mk/hqdefault.jpg",
        "durationSec": 978
      },
      {
        "youtubeVideoId": "qLzw6r2ORk0",
        "title": "Chromatic Drawing with Lane Brown",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/qLzw6r2ORk0/hqdefault.jpg",
        "durationSec": 6754
      },
      {
        "youtubeVideoId": "iZU-kv8LM9M",
        "title": "The only 7 skills you need to draw anything ✏️",
        "sourceChannelId": "UCKtu_JtQCY0yryIy6zK4ZCg",
        "sourceChannelTitle": "Marc Brunet",
        "thumbnailUrl": "https://i.ytimg.com/vi/iZU-kv8LM9M/hqdefault.jpg",
        "durationSec": 712
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
        "youtubeVideoId": "LDgj4aeNxY4",
        "title": "I Tried VIRAL Impossible Art Challenges",
        "sourceChannelId": "UCM55RjebjSevVWPnj2LEymw",
        "sourceChannelTitle": "viyaura",
        "thumbnailUrl": "https://i.ytimg.com/vi/LDgj4aeNxY4/hqdefault.jpg",
        "durationSec": 1157
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
        "youtubeVideoId": "-c05EUyHAyk",
        "title": "Starting my first professional Stop-Motion Puppet... (This is gonna take a while)",
        "sourceChannelId": "UCHu2KNu6TtJ0p4hpSW7Yv7Q",
        "sourceChannelTitle": "Jazza",
        "thumbnailUrl": "https://i.ytimg.com/vi/-c05EUyHAyk/hqdefault.jpg",
        "durationSec": 1205
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
        "youtubeVideoId": "-45geIBMpJA",
        "title": "RATING TIKTOK ART TUTORIALS 24 😭 (I finally crash out)",
        "sourceChannelId": "UCNNOvB507MRfny7Jcv8MmOw",
        "sourceChannelTitle": "SamDoesArts",
        "thumbnailUrl": "https://i.ytimg.com/vi/-45geIBMpJA/hqdefault.jpg",
        "durationSec": 1029
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
        "youtubeVideoId": "eVr5rsWc_RU",
        "title": "Designing Characters from the Land: Yaks, Teeth and Tibet",
        "sourceChannelId": "UC96DW3YAifjM7x3LYpPyI0A",
        "sourceChannelTitle": "Airi Pan",
        "thumbnailUrl": "https://i.ytimg.com/vi/eVr5rsWc_RU/hqdefault.jpg",
        "durationSec": 1229
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
        "youtubeVideoId": "DT4bL0GmyUE",
        "title": "Riot hired me… so I finally figured out ARCANE’S art style",
        "sourceChannelId": "UCjGjl2fpyL5WQBCwy-M4lNw",
        "sourceChannelTitle": "Konariin",
        "thumbnailUrl": "https://i.ytimg.com/vi/DT4bL0GmyUE/hqdefault.jpg",
        "durationSec": 695
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
        "youtubeVideoId": "7U63WKkHvcc",
        "title": "What if you just...painted it?",
        "sourceChannelId": "UCpgi6wIZv7c6TlAY-d1PMuw",
        "sourceChannelTitle": "Chroma Moma",
        "thumbnailUrl": "https://i.ytimg.com/vi/7U63WKkHvcc/hqdefault.jpg",
        "durationSec": 68
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
        "youtubeVideoId": "xJZdhz9C0q4",
        "title": "How a Cup of Noodles Fixed my Art block",
        "sourceChannelId": "UCKrYd0tMaMSp16q4xCMiLDQ",
        "sourceChannelTitle": "Dayungnico",
        "thumbnailUrl": "https://i.ytimg.com/vi/xJZdhz9C0q4/hqdefault.jpg",
        "durationSec": 467
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
        "youtubeVideoId": "QMtsvyJmUAk",
        "title": "How I Paint Realistic Clouds that *GLOW*",
        "sourceChannelId": "UCcwoY8oOA0DOW2H7OqmqNzw",
        "sourceChannelTitle": "Brooke Cormier",
        "thumbnailUrl": "https://i.ytimg.com/vi/QMtsvyJmUAk/hqdefault.jpg",
        "durationSec": 1298
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
        "youtubeVideoId": "7UmHRopI4eQ",
        "title": "I Built a 200ft Mural in Las Vegas...Then Disaster Strikes.",
        "sourceChannelId": "UCwcDy-AjZJ5T7DH9BWaOMZg",
        "sourceChannelTitle": "Kiptoe",
        "thumbnailUrl": "https://i.ytimg.com/vi/7UmHRopI4eQ/hqdefault.jpg",
        "durationSec": 2923
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
        "youtubeVideoId": "mG4VSXDg1rE",
        "title": "Do THIS to study more effectively in you Sketchbook | Sketchbook Series Part 6",
        "sourceChannelId": "UC1fctxjxOyjNyWYR1Q1j8-g",
        "sourceChannelTitle": "MEANDI DRAWS",
        "thumbnailUrl": "https://i.ytimg.com/vi/mG4VSXDg1rE/hqdefault.jpg",
        "durationSec": 1874
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
        "youtubeVideoId": "m8L1RsIxBCQ",
        "title": "The Only Drawing Exercise I used to Draw from Imagination (That you won't do)",
        "sourceChannelId": "UCLMkh2PYXpQh52d3m2bzNNA",
        "sourceChannelTitle": "KeshArt",
        "thumbnailUrl": "https://i.ytimg.com/vi/m8L1RsIxBCQ/hqdefault.jpg",
        "durationSec": 1330
      },
      {
        "youtubeVideoId": "fO-DT-f9dz8",
        "title": "Fred again..: Behind The Sound",
        "sourceChannelId": "UCFDxyA1H3VEN0VQwfMe2VMQ",
        "sourceChannelTitle": "Gawx Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/fO-DT-f9dz8/hqdefault.jpg",
        "durationSec": 1220
      },
      {
        "youtubeVideoId": "7VDB4tWLRyY",
        "title": "Reviving My Cozy Scratch Game! 👻 Dev Log #3",
        "sourceChannelId": "UChIHYCXYpUsHY6Wjk03C_uQ",
        "sourceChannelTitle": "Love2DrawManga",
        "thumbnailUrl": "https://i.ytimg.com/vi/7VDB4tWLRyY/hqdefault.jpg",
        "durationSec": 1104
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
        "youtubeVideoId": "XTwELmi7sBw",
        "title": "This coloring method will change your life fr",
        "sourceChannelId": "UCKtu_JtQCY0yryIy6zK4ZCg",
        "sourceChannelTitle": "Marc Brunet",
        "thumbnailUrl": "https://i.ytimg.com/vi/XTwELmi7sBw/hqdefault.jpg",
        "durationSec": 549
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
        "youtubeVideoId": "jNrKf-KiZQg",
        "title": "I Made a Clear Cake",
        "sourceChannelId": "UCM55RjebjSevVWPnj2LEymw",
        "sourceChannelTitle": "viyaura",
        "thumbnailUrl": "https://i.ytimg.com/vi/jNrKf-KiZQg/hqdefault.jpg",
        "durationSec": 764
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
        "youtubeVideoId": "n52GoJMsi44",
        "title": "How to turn Cute Coloring Pages into NIGHTMARES...",
        "sourceChannelId": "UCHu2KNu6TtJ0p4hpSW7Yv7Q",
        "sourceChannelTitle": "Jazza",
        "thumbnailUrl": "https://i.ytimg.com/vi/n52GoJMsi44/hqdefault.jpg",
        "durationSec": 1456
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
        "youtubeVideoId": "0JJur-9g1wY",
        "title": "DO YOU HAVE FLAT RENDERING SYNDROME? (and how to fix it)",
        "sourceChannelId": "UCNNOvB507MRfny7Jcv8MmOw",
        "sourceChannelTitle": "SamDoesArts",
        "thumbnailUrl": "https://i.ytimg.com/vi/0JJur-9g1wY/hqdefault.jpg",
        "durationSec": 619
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
        "youtubeVideoId": "8WbCCFqL12Y",
        "title": "How a camping anime changed me for the better",
        "sourceChannelId": "UC96DW3YAifjM7x3LYpPyI0A",
        "sourceChannelTitle": "Airi Pan",
        "thumbnailUrl": "https://i.ytimg.com/vi/8WbCCFqL12Y/hqdefault.jpg",
        "durationSec": 767
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
        "youtubeVideoId": "Y2VYlRB6I6o",
        "title": "How I turned ARCANE into my own fan-game",
        "sourceChannelId": "UCjGjl2fpyL5WQBCwy-M4lNw",
        "sourceChannelTitle": "Konariin",
        "thumbnailUrl": "https://i.ytimg.com/vi/Y2VYlRB6I6o/hqdefault.jpg",
        "durationSec": 915
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
        "youtubeVideoId": "mSFvVaLGIKQ",
        "title": "Making my own sketchbook",
        "sourceChannelId": "UCpgi6wIZv7c6TlAY-d1PMuw",
        "sourceChannelTitle": "Chroma Moma",
        "thumbnailUrl": "https://i.ytimg.com/vi/mSFvVaLGIKQ/hqdefault.jpg",
        "durationSec": 805
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
        "youtubeVideoId": "92fe7jQAd7k",
        "title": "Improving Your Art (My Approach)",
        "sourceChannelId": "UCKrYd0tMaMSp16q4xCMiLDQ",
        "sourceChannelTitle": "Dayungnico",
        "thumbnailUrl": "https://i.ytimg.com/vi/92fe7jQAd7k/hqdefault.jpg",
        "durationSec": 929
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
        "youtubeVideoId": "3zUREp_tlbs",
        "title": "I Made a $15k Oil Painting",
        "sourceChannelId": "UCcwoY8oOA0DOW2H7OqmqNzw",
        "sourceChannelTitle": "Brooke Cormier",
        "thumbnailUrl": "https://i.ytimg.com/vi/3zUREp_tlbs/hqdefault.jpg",
        "durationSec": 1069
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
        "youtubeVideoId": "MniK2QWg-LI",
        "title": "The Final Piece of My 200-Foot Mural",
        "sourceChannelId": "UCwcDy-AjZJ5T7DH9BWaOMZg",
        "sourceChannelTitle": "Kiptoe",
        "thumbnailUrl": "https://i.ytimg.com/vi/MniK2QWg-LI/hqdefault.jpg",
        "durationSec": 1213
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
        "youtubeVideoId": "cYHx2FCy2z8",
        "title": "How to Worldbuild and Design Characters in a Sketchbook | Sketchbook Series Part 5",
        "sourceChannelId": "UC1fctxjxOyjNyWYR1Q1j8-g",
        "sourceChannelTitle": "MEANDI DRAWS",
        "thumbnailUrl": "https://i.ytimg.com/vi/cYHx2FCy2z8/hqdefault.jpg",
        "durationSec": 1801
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
        "youtubeVideoId": "IDkxJ5kzs5I",
        "title": "The Best Drawing Routine for Beginner Artists (and Pros too!?)",
        "sourceChannelId": "UCLMkh2PYXpQh52d3m2bzNNA",
        "sourceChannelTitle": "KeshArt",
        "thumbnailUrl": "https://i.ytimg.com/vi/IDkxJ5kzs5I/hqdefault.jpg",
        "durationSec": 686
      },
      {
        "youtubeVideoId": "GkOLkuHhU7s",
        "title": "Before You See, You Listen.",
        "sourceChannelId": "UCFDxyA1H3VEN0VQwfMe2VMQ",
        "sourceChannelTitle": "Gawx Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/GkOLkuHhU7s/hqdefault.jpg",
        "durationSec": 646
      },
      {
        "youtubeVideoId": "-rA5nvG_hpI",
        "title": "Testing Out a NEW Coloring Style and Tablet! 💖 XPPen Artist Pro 27 Gen 2",
        "sourceChannelId": "UChIHYCXYpUsHY6Wjk03C_uQ",
        "sourceChannelTitle": "Love2DrawManga",
        "thumbnailUrl": "https://i.ytimg.com/vi/-rA5nvG_hpI/hqdefault.jpg",
        "durationSec": 821
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
        "youtubeVideoId": "V8wrCfdrv4c",
        "title": "These 12 exercises will 12X your lineart quality 🤩",
        "sourceChannelId": "UCKtu_JtQCY0yryIy6zK4ZCg",
        "sourceChannelTitle": "Marc Brunet",
        "thumbnailUrl": "https://i.ytimg.com/vi/V8wrCfdrv4c/hqdefault.jpg",
        "durationSec": 720
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
        "youtubeVideoId": "i7X4ZAZm32U",
        "title": "i coded a game for my school project",
        "sourceChannelId": "UCM55RjebjSevVWPnj2LEymw",
        "sourceChannelTitle": "viyaura",
        "thumbnailUrl": "https://i.ytimg.com/vi/i7X4ZAZm32U/hqdefault.jpg",
        "durationSec": 1079
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
        "youtubeVideoId": "IJeWrxwxg1k",
        "title": "You can SCULPT with PLASTIC?!",
        "sourceChannelId": "UCHu2KNu6TtJ0p4hpSW7Yv7Q",
        "sourceChannelTitle": "Jazza",
        "thumbnailUrl": "https://i.ytimg.com/vi/IJeWrxwxg1k/hqdefault.jpg",
        "durationSec": 1761
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
        "youtubeVideoId": "NDrVpnA9znQ",
        "title": "Real Artists are Being Accused of AI Art now..",
        "sourceChannelId": "UCNNOvB507MRfny7Jcv8MmOw",
        "sourceChannelTitle": "SamDoesArts",
        "thumbnailUrl": "https://i.ytimg.com/vi/NDrVpnA9znQ/hqdefault.jpg",
        "durationSec": 853
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
        "youtubeVideoId": "pcGUiMPdHNo",
        "title": "Befriending Art Block",
        "sourceChannelId": "UC96DW3YAifjM7x3LYpPyI0A",
        "sourceChannelTitle": "Airi Pan",
        "thumbnailUrl": "https://i.ytimg.com/vi/pcGUiMPdHNo/hqdefault.jpg",
        "durationSec": 786
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
        "youtubeVideoId": "atFn2E1anrg",
        "title": "I copied Miyazaki to remake Elden Ring… in Unreal Engine 5",
        "sourceChannelId": "UCjGjl2fpyL5WQBCwy-M4lNw",
        "sourceChannelTitle": "Konariin",
        "thumbnailUrl": "https://i.ytimg.com/vi/atFn2E1anrg/hqdefault.jpg",
        "durationSec": 943
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
        "youtubeVideoId": "NiwUt9MUFB4",
        "title": "5 secret websites to help your art stand out",
        "sourceChannelId": "UCpgi6wIZv7c6TlAY-d1PMuw",
        "sourceChannelTitle": "Chroma Moma",
        "thumbnailUrl": "https://i.ytimg.com/vi/NiwUt9MUFB4/hqdefault.jpg",
        "durationSec": 468
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
        "youtubeVideoId": "8orxaWJXLVM",
        "title": "Dear Artists: Focus on Creating, Not Blowing Up",
        "sourceChannelId": "UCKrYd0tMaMSp16q4xCMiLDQ",
        "sourceChannelTitle": "Dayungnico",
        "thumbnailUrl": "https://i.ytimg.com/vi/8orxaWJXLVM/hqdefault.jpg",
        "durationSec": 820
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
        "youtubeVideoId": "H5Y01Kj538I",
        "title": "How to Stop Overthinking and Just Start Painting",
        "sourceChannelId": "UCcwoY8oOA0DOW2H7OqmqNzw",
        "sourceChannelTitle": "Brooke Cormier",
        "thumbnailUrl": "https://i.ytimg.com/vi/H5Y01Kj538I/hqdefault.jpg",
        "durationSec": 702
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
        "youtubeVideoId": "7offhcKeGDo",
        "title": "Bringing Brazilian Culture to Life in a 200-Foot Mural",
        "sourceChannelId": "UCwcDy-AjZJ5T7DH9BWaOMZg",
        "sourceChannelTitle": "Kiptoe",
        "thumbnailUrl": "https://i.ytimg.com/vi/7offhcKeGDo/hqdefault.jpg",
        "durationSec": 1290
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
        "youtubeVideoId": "fgnOH2IyfOc",
        "title": "Conversation with the Creator of Artwod - Antonio Stappaerts",
        "sourceChannelId": "UC1fctxjxOyjNyWYR1Q1j8-g",
        "sourceChannelTitle": "MEANDI DRAWS",
        "thumbnailUrl": "https://i.ytimg.com/vi/fgnOH2IyfOc/hqdefault.jpg",
        "durationSec": 3098
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
        "youtubeVideoId": "jRImZYOlVuA",
        "title": "Welcome to my Art Channel? 😅",
        "sourceChannelId": "UCLMkh2PYXpQh52d3m2bzNNA",
        "sourceChannelTitle": "KeshArt",
        "thumbnailUrl": "https://i.ytimg.com/vi/jRImZYOlVuA/hqdefault.jpg",
        "durationSec": 189
      },
      {
        "youtubeVideoId": "55oPmIBq3Ok",
        "title": "Artist Athlete",
        "sourceChannelId": "UCFDxyA1H3VEN0VQwfMe2VMQ",
        "sourceChannelTitle": "Gawx Art",
        "thumbnailUrl": "https://i.ytimg.com/vi/55oPmIBq3Ok/hqdefault.jpg",
        "durationSec": 396
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
        "youtubeVideoId": "cfIpjDhtDvc",
        "title": "People Make the Brand — Beth Johnson",
        "sourceChannelId": "UCw5pljbSyZMq-wjm_notQLQ",
        "sourceChannelTitle": "Two Times Elliott",
        "thumbnailUrl": "https://i.ytimg.com/vi/cfIpjDhtDvc/hqdefault.jpg",
        "durationSec": 3443
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
        "youtubeVideoId": "CeM0Y088lIw",
        "title": "Midnight Shrimp Pasta Recipe 🌙🍤🍝 Easy, Delicious & So Satisfying",
        "sourceChannelId": "UCwOFqUE6Er2hfCvtLGMTW6Q",
        "sourceChannelTitle": "RIGHT ALIGNED",
        "thumbnailUrl": "https://i.ytimg.com/vi/CeM0Y088lIw/hqdefault.jpg",
        "durationSec": 482
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
        "youtubeVideoId": "j1i3oXXVmBw",
        "title": "how to make videos that don’t suck.",
        "sourceChannelId": "UCcBZIvKbIgXGRjn9j2P6lOw",
        "sourceChannelTitle": "Arteri",
        "thumbnailUrl": "https://i.ytimg.com/vi/j1i3oXXVmBw/hqdefault.jpg",
        "durationSec": 992
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
        "youtubeVideoId": "oIcLQ_QAlPE",
        "title": "“Postmodern Design Hellscape” | The Cheesecake Factory",
        "sourceChannelId": "UC98Glz-MWdnqeZDBxRPUUvQ",
        "sourceChannelTitle": "Design Docs",
        "thumbnailUrl": "https://i.ytimg.com/vi/oIcLQ_QAlPE/hqdefault.jpg",
        "durationSec": 1815
      },
      {
        "youtubeVideoId": "diyIQ1yAyFQ",
        "title": "How I Design $10k+ Brand Identities From Start to Finish with Shutterstock",
        "sourceChannelId": "UC8ME0E1icwddCikdomxrIVw",
        "sourceChannelTitle": "Dena Nguyen",
        "thumbnailUrl": "https://i.ytimg.com/vi/diyIQ1yAyFQ/hqdefault.jpg",
        "durationSec": 746
      },
      {
        "youtubeVideoId": "fs2GpXHE3Os",
        "title": "The Real Value of Graphic Design Right Now",
        "sourceChannelId": "UCqausxjCnGsTl0rQgM7HZWQ",
        "sourceChannelTitle": "Designer In Japan",
        "thumbnailUrl": "https://i.ytimg.com/vi/fs2GpXHE3Os/hqdefault.jpg",
        "durationSec": 531
      },
      {
        "youtubeVideoId": "iI0gZOmaaLs",
        "title": "how to design a brand that doesn't suck",
        "sourceChannelId": "UCwADKD62xOgWPxoe68rzMVA",
        "sourceChannelTitle": "Shantanu Kumar",
        "thumbnailUrl": "https://i.ytimg.com/vi/iI0gZOmaaLs/hqdefault.jpg",
        "durationSec": 615
      },
      {
        "youtubeVideoId": "bjE6HYuEA1k",
        "title": "Designing the Perfect Scam",
        "sourceChannelId": "UCdgUN8rX3SEb9L7FDub3I6A",
        "sourceChannelTitle": "Design Theory",
        "thumbnailUrl": "https://i.ytimg.com/vi/bjE6HYuEA1k/hqdefault.jpg",
        "durationSec": 1791
      },
      {
        "youtubeVideoId": "ysiyeCEtNMs",
        "title": "Apple AirTag Pro: Never Lose Anything Again",
        "sourceChannelId": "UCUn5JuT0zriA1nOJWoumSZw",
        "sourceChannelTitle": "Scene",
        "thumbnailUrl": "https://i.ytimg.com/vi/ysiyeCEtNMs/hqdefault.jpg",
        "durationSec": 88
      },
      {
        "youtubeVideoId": "8ITuejNr640",
        "title": "'Tis But a Scratch (re-re-re-upload)",
        "sourceChannelId": "UCSIkG6wtvxDduCumCRAAO4A",
        "sourceChannelTitle": "Will Paterson",
        "thumbnailUrl": "https://i.ytimg.com/vi/8ITuejNr640/hqdefault.jpg",
        "durationSec": 300
      },
      {
        "youtubeVideoId": "ERFeOgqk324",
        "title": "I Redesigned VLC After 25 Years",
        "sourceChannelId": "UCa8W2_uf81Ew6gYuw0VPSeA",
        "sourceChannelTitle": "Juxtopposed",
        "thumbnailUrl": "https://i.ytimg.com/vi/ERFeOgqk324/hqdefault.jpg",
        "durationSec": 1260
      },
      {
        "youtubeVideoId": "bogig_MH6Z4",
        "title": "Starting Over. Designing my Portfolio After 10 Years",
        "sourceChannelId": "UCSLeoz5odIGS2GdlbHbCAUg",
        "sourceChannelTitle": "Matthew Encina",
        "thumbnailUrl": "https://i.ytimg.com/vi/bogig_MH6Z4/hqdefault.jpg",
        "durationSec": 775
      },
      {
        "youtubeVideoId": "R-VDsnhMPCg",
        "title": "is TouchDesigner as hard as it looks?",
        "sourceChannelId": "UCa_aLyHBN8zuisUpHDjmBbw",
        "sourceChannelTitle": "elliotisacoolguy",
        "thumbnailUrl": "https://i.ytimg.com/vi/R-VDsnhMPCg/hqdefault.jpg",
        "durationSec": 1328
      },
      {
        "youtubeVideoId": "S9AwSVsllTo",
        "title": "Backrooms VFX Supervisor: I Render at 800 Samples",
        "sourceChannelId": "UCMosQZ8k4dPITlPZ0Q6kpog",
        "sourceChannelTitle": "Kaizen",
        "thumbnailUrl": "https://i.ytimg.com/vi/S9AwSVsllTo/hqdefault.jpg",
        "durationSec": 2393
      },
      {
        "youtubeVideoId": "9aPPmKEuNw4",
        "title": "How to Make a Gradient Sphere in After Effects",
        "sourceChannelId": "UCS1gMhu2KgHqW4OunIAaKrA",
        "sourceChannelTitle": "P A N T E R",
        "thumbnailUrl": "https://i.ytimg.com/vi/9aPPmKEuNw4/hqdefault.jpg",
        "durationSec": 221
      },
      {
        "youtubeVideoId": "Q0mL2VsRBFw",
        "title": "Apple Watch: Designed to Work, Not Impress.",
        "sourceChannelId": "UCIn5gFPi5hSB1Gqpur33_3w",
        "sourceChannelTitle": "The Science of Products",
        "thumbnailUrl": "https://i.ytimg.com/vi/Q0mL2VsRBFw/hqdefault.jpg",
        "durationSec": 1527
      },
      {
        "youtubeVideoId": "td5ZYosA2WM",
        "title": "Make Music with Motion Detected Visuals | Touch Designer Tutorial",
        "sourceChannelId": "UCWIfzAYHyNSyHmT2AO-54yg",
        "sourceChannelTitle": "pwnisher",
        "thumbnailUrl": "https://i.ytimg.com/vi/td5ZYosA2WM/hqdefault.jpg",
        "durationSec": 2630
      },
      {
        "youtubeVideoId": "oLaiy0EPiY4",
        "title": "The Arcane Style in a Music Video! | 3D Artist Reacts",
        "sourceChannelId": "UCFsUH7Zyy0UXAfv6KQGq9eg",
        "sourceChannelTitle": "Noggi",
        "thumbnailUrl": "https://i.ytimg.com/vi/oLaiy0EPiY4/hqdefault.jpg",
        "durationSec": 820
      },
      {
        "youtubeVideoId": "YcbdO1sVnKo",
        "title": "“That’s the Nicest Table You’ve Ever Built”",
        "sourceChannelId": "UC1V-DYqsaj764uBis9-UDug",
        "sourceChannelTitle": "Foureyes Furniture",
        "thumbnailUrl": "https://i.ytimg.com/vi/YcbdO1sVnKo/hqdefault.jpg",
        "durationSec": 2188
      },
      {
        "youtubeVideoId": "wc_1IICYEjM",
        "title": "I Built a Secret Library in my Tiny Apartment.",
        "sourceChannelId": "UCQJQB-ij7HNYKCyNdi0Y--Q",
        "sourceChannelTitle": "Make With Miles",
        "thumbnailUrl": "https://i.ytimg.com/vi/wc_1IICYEjM/hqdefault.jpg",
        "durationSec": 1614
      },
      {
        "youtubeVideoId": "oNvCXgsQUZI",
        "title": "become a one-of-one creative in a world full of copycats",
        "sourceChannelId": "UCkcBDNWKUSczL9TIx-7h6Qw",
        "sourceChannelTitle": "David Fragomeni",
        "thumbnailUrl": "https://i.ytimg.com/vi/oNvCXgsQUZI/hqdefault.jpg",
        "durationSec": 681
      },
      {
        "youtubeVideoId": "2P8vdzVmKB8",
        "title": "I Built a Sleep Pod for Airplanes",
        "sourceChannelId": "UCbtEd1MuY6gd2RpdWqkzXFw",
        "sourceChannelTitle": "Morley Kert",
        "thumbnailUrl": "https://i.ytimg.com/vi/2P8vdzVmKB8/hqdefault.jpg",
        "durationSec": 1803
      },
      {
        "youtubeVideoId": "PJRy-yhDUqs",
        "title": "Aesthetically Pleasing Vertical ITX Case",
        "sourceChannelId": "UC5mKrz-oinuz9stgxYdznrg",
        "sourceChannelTitle": "makerunit",
        "thumbnailUrl": "https://i.ytimg.com/vi/PJRy-yhDUqs/hqdefault.jpg",
        "durationSec": 921
      },
      {
        "youtubeVideoId": "-qUu8kIliy8",
        "title": "Making the most pickproof lock yet",
        "sourceChannelId": "UC0G7e3uCtTyKQy2vZbRaKxg",
        "sourceChannelTitle": "Works By Design",
        "thumbnailUrl": "https://i.ytimg.com/vi/-qUu8kIliy8/hqdefault.jpg",
        "durationSec": 1616
      },
      {
        "youtubeVideoId": "KC00iPcS4JQ",
        "title": "Building a Brand Beyond Its Logo — Jessica McGowan",
        "sourceChannelId": "UCw5pljbSyZMq-wjm_notQLQ",
        "sourceChannelTitle": "Two Times Elliott",
        "thumbnailUrl": "https://i.ytimg.com/vi/KC00iPcS4JQ/hqdefault.jpg",
        "durationSec": 2104
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
        "youtubeVideoId": "jvLsaU6lIuQ",
        "title": "The Ultimate Shrimp Pasta Recipe | Quick, Easy & Incredibly Delicious 🍤🍝",
        "sourceChannelId": "UCwOFqUE6Er2hfCvtLGMTW6Q",
        "sourceChannelTitle": "RIGHT ALIGNED",
        "thumbnailUrl": "https://i.ytimg.com/vi/jvLsaU6lIuQ/hqdefault.jpg",
        "durationSec": 814
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
        "youtubeVideoId": "-fu7kSx-3VY",
        "title": "why do green things just look so good?",
        "sourceChannelId": "UCcBZIvKbIgXGRjn9j2P6lOw",
        "sourceChannelTitle": "Arteri",
        "thumbnailUrl": "https://i.ytimg.com/vi/-fu7kSx-3VY/hqdefault.jpg",
        "durationSec": 553
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
        "youtubeVideoId": "o-Gs92DDkAQ",
        "title": "The Lie About Your Keyboard",
        "sourceChannelId": "UC98Glz-MWdnqeZDBxRPUUvQ",
        "sourceChannelTitle": "Design Docs",
        "thumbnailUrl": "https://i.ytimg.com/vi/o-Gs92DDkAQ/hqdefault.jpg",
        "durationSec": 1791
      },
      {
        "youtubeVideoId": "dTsL3eIMH4Y",
        "title": "Realistic Day in my Life as a Freelance Graphic Designer 🎨",
        "sourceChannelId": "UC8ME0E1icwddCikdomxrIVw",
        "sourceChannelTitle": "Dena Nguyen",
        "thumbnailUrl": "https://i.ytimg.com/vi/dTsL3eIMH4Y/hqdefault.jpg",
        "durationSec": 1510
      },
      {
        "youtubeVideoId": "WwiIJsEkcoE",
        "title": "I Built a Visual Music App",
        "sourceChannelId": "UCqausxjCnGsTl0rQgM7HZWQ",
        "sourceChannelTitle": "Designer In Japan",
        "thumbnailUrl": "https://i.ytimg.com/vi/WwiIJsEkcoE/hqdefault.jpg",
        "durationSec": 412
      },
      {
        "youtubeVideoId": "OrbFXy95Ma0",
        "title": "my life at 28 as a creative agency founder",
        "sourceChannelId": "UCwADKD62xOgWPxoe68rzMVA",
        "sourceChannelTitle": "Shantanu Kumar",
        "thumbnailUrl": "https://i.ytimg.com/vi/OrbFXy95Ma0/hqdefault.jpg",
        "durationSec": 762
      },
      {
        "youtubeVideoId": "XmT4SMO_1q8",
        "title": "Why They Redesigned Surveillance To Look Harmless",
        "sourceChannelId": "UCdgUN8rX3SEb9L7FDub3I6A",
        "sourceChannelTitle": "Design Theory",
        "thumbnailUrl": "https://i.ytimg.com/vi/XmT4SMO_1q8/hqdefault.jpg",
        "durationSec": 2088
      },
      {
        "youtubeVideoId": "Phm0k3FMJ5w",
        "title": "3 Siri AI Features Apple Didn't Tell Us",
        "sourceChannelId": "UCUn5JuT0zriA1nOJWoumSZw",
        "sourceChannelTitle": "Scene",
        "thumbnailUrl": "https://i.ytimg.com/vi/Phm0k3FMJ5w/hqdefault.jpg",
        "durationSec": 95
      },
      {
        "youtubeVideoId": "DnkqmSDBfJk",
        "title": "Where are your Mum and Dad?",
        "sourceChannelId": "UCSIkG6wtvxDduCumCRAAO4A",
        "sourceChannelTitle": "Will Paterson",
        "thumbnailUrl": "https://i.ytimg.com/vi/DnkqmSDBfJk/hqdefault.jpg",
        "durationSec": 165
      },
      {
        "youtubeVideoId": "pQFoPOTL5cU",
        "title": "I Tried CLI... as a GUI Person",
        "sourceChannelId": "UCa8W2_uf81Ew6gYuw0VPSeA",
        "sourceChannelTitle": "Juxtopposed",
        "thumbnailUrl": "https://i.ytimg.com/vi/pQFoPOTL5cU/hqdefault.jpg",
        "durationSec": 925
      },
      {
        "youtubeVideoId": "CmsHAt9PexI",
        "title": "I Built an Entryway Bench With Hidden Features (DIY)",
        "sourceChannelId": "UCSLeoz5odIGS2GdlbHbCAUg",
        "sourceChannelTitle": "Matthew Encina",
        "thumbnailUrl": "https://i.ytimg.com/vi/CmsHAt9PexI/hqdefault.jpg",
        "durationSec": 1064
      },
      {
        "youtubeVideoId": "p0m5nuygU5w",
        "title": "an unnecessarily good video about Pokémon's graphic design",
        "sourceChannelId": "UCa_aLyHBN8zuisUpHDjmBbw",
        "sourceChannelTitle": "elliotisacoolguy",
        "thumbnailUrl": "https://i.ytimg.com/vi/p0m5nuygU5w/hqdefault.jpg",
        "durationSec": 1444
      },
      {
        "youtubeVideoId": "knzKHaZFzbQ",
        "title": "Why the Blender Conference Blew My Mind AGAIN!",
        "sourceChannelId": "UCMosQZ8k4dPITlPZ0Q6kpog",
        "sourceChannelTitle": "Kaizen",
        "thumbnailUrl": "https://i.ytimg.com/vi/knzKHaZFzbQ/hqdefault.jpg",
        "durationSec": 1001
      },
      {
        "youtubeVideoId": "WFdePxW_gWU",
        "title": "How To Use The New Rotate Object In Photoshop",
        "sourceChannelId": "UCS1gMhu2KgHqW4OunIAaKrA",
        "sourceChannelTitle": "P A N T E R",
        "thumbnailUrl": "https://i.ytimg.com/vi/WFdePxW_gWU/hqdefault.jpg",
        "durationSec": 152
      },
      {
        "youtubeVideoId": "ivEqZafqX7E",
        "title": "Hermès: The Brand That REFUSES To Sell",
        "sourceChannelId": "UCIn5gFPi5hSB1Gqpur33_3w",
        "sourceChannelTitle": "The Science of Products",
        "thumbnailUrl": "https://i.ytimg.com/vi/ivEqZafqX7E/hqdefault.jpg",
        "durationSec": 1418
      },
      {
        "youtubeVideoId": "MbNGuD7mCVw",
        "title": "Top 100 Animated Trading Cards Montage | Gauntlet of Gods (ft. @RogetMusic )",
        "sourceChannelId": "UCWIfzAYHyNSyHmT2AO-54yg",
        "sourceChannelTitle": "pwnisher",
        "thumbnailUrl": "https://i.ytimg.com/vi/MbNGuD7mCVw/hqdefault.jpg",
        "durationSec": 544
      },
      {
        "youtubeVideoId": "aHRykn_sCpc",
        "title": "I Practiced Japan’s 3D Modeling Philosophy For 90 Days",
        "sourceChannelId": "UCFsUH7Zyy0UXAfv6KQGq9eg",
        "sourceChannelTitle": "Noggi",
        "thumbnailUrl": "https://i.ytimg.com/vi/aHRykn_sCpc/hqdefault.jpg",
        "durationSec": 1358
      },
      {
        "youtubeVideoId": "rPRxObGqlFE",
        "title": "I Got Lucky, and it Only Cost Me $4,250",
        "sourceChannelId": "UC1V-DYqsaj764uBis9-UDug",
        "sourceChannelTitle": "Foureyes Furniture",
        "thumbnailUrl": "https://i.ytimg.com/vi/rPRxObGqlFE/hqdefault.jpg",
        "durationSec": 2319
      },
      {
        "youtubeVideoId": "1OFK384Vp-s",
        "title": "I Made a Desk for Messy People.",
        "sourceChannelId": "UCQJQB-ij7HNYKCyNdi0Y--Q",
        "sourceChannelTitle": "Make With Miles",
        "thumbnailUrl": "https://i.ytimg.com/vi/1OFK384Vp-s/hqdefault.jpg",
        "durationSec": 1899
      },
      {
        "youtubeVideoId": "msvbxnYUJtQ",
        "title": "Reinvent yourself",
        "sourceChannelId": "UCkcBDNWKUSczL9TIx-7h6Qw",
        "sourceChannelTitle": "David Fragomeni",
        "thumbnailUrl": "https://i.ytimg.com/vi/msvbxnYUJtQ/hqdefault.jpg",
        "durationSec": 772
      },
      {
        "youtubeVideoId": "h_UzcB138mk",
        "title": "Turning Microplastics into a $5,000 Table",
        "sourceChannelId": "UCbtEd1MuY6gd2RpdWqkzXFw",
        "sourceChannelTitle": "Morley Kert",
        "thumbnailUrl": "https://i.ytimg.com/vi/h_UzcB138mk/hqdefault.jpg",
        "durationSec": 2098
      },
      {
        "youtubeVideoId": "uak3-LFW0Is",
        "title": "3D Printed mATX Case That Looks Great on a Budget",
        "sourceChannelId": "UC5mKrz-oinuz9stgxYdznrg",
        "sourceChannelTitle": "makerunit",
        "thumbnailUrl": "https://i.ytimg.com/vi/uak3-LFW0Is/hqdefault.jpg",
        "durationSec": 873
      },
      {
        "youtubeVideoId": "5lISr1OjhjQ",
        "title": "Building pawns that transform into every piece",
        "sourceChannelId": "UC0G7e3uCtTyKQy2vZbRaKxg",
        "sourceChannelTitle": "Works By Design",
        "thumbnailUrl": "https://i.ytimg.com/vi/5lISr1OjhjQ/hqdefault.jpg",
        "durationSec": 1326
      },
      {
        "youtubeVideoId": "ar4U80XwqMw",
        "title": "Why Designers Need Space to Be Wrong — Liam Creed",
        "sourceChannelId": "UCw5pljbSyZMq-wjm_notQLQ",
        "sourceChannelTitle": "Two Times Elliott",
        "thumbnailUrl": "https://i.ytimg.com/vi/ar4U80XwqMw/hqdefault.jpg",
        "durationSec": 2079
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
        "youtubeVideoId": "ilRqPJWcaFI",
        "title": "Cheap, Easy & Incredibly Delicious Spicy Tomato Pasta - HOW TO COOK",
        "sourceChannelId": "UCwOFqUE6Er2hfCvtLGMTW6Q",
        "sourceChannelTitle": "RIGHT ALIGNED",
        "thumbnailUrl": "https://i.ytimg.com/vi/ilRqPJWcaFI/hqdefault.jpg",
        "durationSec": 651
      },
      {
        "youtubeVideoId": "JVlxFZsDEgk",
        "title": "why did last century just look so stylish?",
        "sourceChannelId": "UCcBZIvKbIgXGRjn9j2P6lOw",
        "sourceChannelTitle": "Arteri",
        "thumbnailUrl": "https://i.ytimg.com/vi/JVlxFZsDEgk/hqdefault.jpg",
        "durationSec": 715
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
        "youtubeVideoId": "z51-98aYgFU",
        "title": "The 30-Year Fight Over America’s Road Signs | Highway Gothic vs Clearview",
        "sourceChannelId": "UC98Glz-MWdnqeZDBxRPUUvQ",
        "sourceChannelTitle": "Design Docs",
        "thumbnailUrl": "https://i.ytimg.com/vi/z51-98aYgFU/hqdefault.jpg",
        "durationSec": 1866
      },
      {
        "youtubeVideoId": "7OIVRN4KM3E",
        "title": "How to Design A Creative Portfolio that ATTRACTS Dream Clients (with Tips!)",
        "sourceChannelId": "UC8ME0E1icwddCikdomxrIVw",
        "sourceChannelTitle": "Dena Nguyen",
        "thumbnailUrl": "https://i.ytimg.com/vi/7OIVRN4KM3E/hqdefault.jpg",
        "durationSec": 607
      },
      {
        "youtubeVideoId": "hwxGGNzbrMg",
        "title": "The Design of a Perfect Onsen",
        "sourceChannelId": "UCqausxjCnGsTl0rQgM7HZWQ",
        "sourceChannelTitle": "Designer In Japan",
        "thumbnailUrl": "https://i.ytimg.com/vi/hwxGGNzbrMg/hqdefault.jpg",
        "durationSec": 284
      },
      {
        "youtubeVideoId": "7tqu-x0dDeQ",
        "title": "how to design a brand that people give a shit about",
        "sourceChannelId": "UCwADKD62xOgWPxoe68rzMVA",
        "sourceChannelTitle": "Shantanu Kumar",
        "thumbnailUrl": "https://i.ytimg.com/vi/7tqu-x0dDeQ/hqdefault.jpg",
        "durationSec": 555
      },
      {
        "youtubeVideoId": "HgjXjPP_p3s",
        "title": "Why Nothing Looks Cool Anymore",
        "sourceChannelId": "UCdgUN8rX3SEb9L7FDub3I6A",
        "sourceChannelTitle": "Design Theory",
        "thumbnailUrl": "https://i.ytimg.com/vi/HgjXjPP_p3s/hqdefault.jpg",
        "durationSec": 2095
      },
      {
        "youtubeVideoId": "voNHWjICAts",
        "title": "Introducing the iPhone 18 Classic",
        "sourceChannelId": "UCUn5JuT0zriA1nOJWoumSZw",
        "sourceChannelTitle": "Scene",
        "thumbnailUrl": "https://i.ytimg.com/vi/voNHWjICAts/hqdefault.jpg",
        "durationSec": 187
      },
      {
        "youtubeVideoId": "-_A-IqUVmh0",
        "title": "Pree-Knee-Injuree",
        "sourceChannelId": "UCSIkG6wtvxDduCumCRAAO4A",
        "sourceChannelTitle": "Will Paterson",
        "thumbnailUrl": "https://i.ytimg.com/vi/-_A-IqUVmh0/hqdefault.jpg",
        "durationSec": 145
      },
      {
        "youtubeVideoId": "57j7W7coQMg",
        "title": "I Tried Designing an \"Easy\" Linux Theme",
        "sourceChannelId": "UCa8W2_uf81Ew6gYuw0VPSeA",
        "sourceChannelTitle": "Juxtopposed",
        "thumbnailUrl": "https://i.ytimg.com/vi/57j7W7coQMg/hqdefault.jpg",
        "durationSec": 713
      },
      {
        "youtubeVideoId": "j9mSt9UpxGc",
        "title": "Saying Goodbye to the Dream Studio I Spent 3 Years Building",
        "sourceChannelId": "UCSLeoz5odIGS2GdlbHbCAUg",
        "sourceChannelTitle": "Matthew Encina",
        "thumbnailUrl": "https://i.ytimg.com/vi/j9mSt9UpxGc/hqdefault.jpg",
        "durationSec": 308
      },
      {
        "youtubeVideoId": "SGr3Kg0OziQ",
        "title": "i animated for the first time... in Blender",
        "sourceChannelId": "UCa_aLyHBN8zuisUpHDjmBbw",
        "sourceChannelTitle": "elliotisacoolguy",
        "thumbnailUrl": "https://i.ytimg.com/vi/SGr3Kg0OziQ/hqdefault.jpg",
        "durationSec": 1081
      },
      {
        "youtubeVideoId": "RfPro3hlOMg",
        "title": "How to Create PRO Materials in Blender",
        "sourceChannelId": "UCMosQZ8k4dPITlPZ0Q6kpog",
        "sourceChannelTitle": "Kaizen",
        "thumbnailUrl": "https://i.ytimg.com/vi/RfPro3hlOMg/hqdefault.jpg",
        "durationSec": 1049
      },
      {
        "youtubeVideoId": "c06pGep7tMk",
        "title": "How to Create Ghost Text in Illustrator",
        "sourceChannelId": "UCS1gMhu2KgHqW4OunIAaKrA",
        "sourceChannelTitle": "P A N T E R",
        "thumbnailUrl": "https://i.ytimg.com/vi/c06pGep7tMk/hqdefault.jpg",
        "durationSec": 170
      },
      {
        "youtubeVideoId": "EcG7CYYhI-Q",
        "title": "BIC: The Pen Designed to Be SIMPLE But Complex",
        "sourceChannelId": "UCIn5gFPi5hSB1Gqpur33_3w",
        "sourceChannelTitle": "The Science of Products",
        "thumbnailUrl": "https://i.ytimg.com/vi/EcG7CYYhI-Q/hqdefault.jpg",
        "durationSec": 1218
      },
      {
        "youtubeVideoId": "FJLlDNp4i8o",
        "title": "When 1,700 3D Artists Hand-make Animated Trading Cards | Gauntlet of Gods 3D Challenge",
        "sourceChannelId": "UCWIfzAYHyNSyHmT2AO-54yg",
        "sourceChannelTitle": "pwnisher",
        "thumbnailUrl": "https://i.ytimg.com/vi/FJLlDNp4i8o/hqdefault.jpg",
        "durationSec": 8069
      },
      {
        "youtubeVideoId": "tvaghwCZINc",
        "title": "29 3D Anime Tips I’ve Learned In The Last 3 Years",
        "sourceChannelId": "UCFsUH7Zyy0UXAfv6KQGq9eg",
        "sourceChannelTitle": "Noggi",
        "thumbnailUrl": "https://i.ytimg.com/vi/tvaghwCZINc/hqdefault.jpg",
        "durationSec": 2500
      },
      {
        "youtubeVideoId": "QIaKx4QjdOY",
        "title": "The Nicest Bookcase I've Ever Built",
        "sourceChannelId": "UC1V-DYqsaj764uBis9-UDug",
        "sourceChannelTitle": "Foureyes Furniture",
        "thumbnailUrl": "https://i.ytimg.com/vi/QIaKx4QjdOY/hqdefault.jpg",
        "durationSec": 1658
      },
      {
        "youtubeVideoId": "sQvp4k5-Q2s",
        "title": "I Built an Over-Engineered Tiny Home in my Car.",
        "sourceChannelId": "UCQJQB-ij7HNYKCyNdi0Y--Q",
        "sourceChannelTitle": "Make With Miles",
        "thumbnailUrl": "https://i.ytimg.com/vi/sQvp4k5-Q2s/hqdefault.jpg",
        "durationSec": 1911
      },
      {
        "youtubeVideoId": "i3e6oFZYe_w",
        "title": "building brands in an AI infested world",
        "sourceChannelId": "UCkcBDNWKUSczL9TIx-7h6Qw",
        "sourceChannelTitle": "David Fragomeni",
        "thumbnailUrl": "https://i.ytimg.com/vi/i3e6oFZYe_w/hqdefault.jpg",
        "durationSec": 1465
      },
      {
        "youtubeVideoId": "R1ul9iBhpVM",
        "title": "I Hate Modern Desks... So I Built This.",
        "sourceChannelId": "UCbtEd1MuY6gd2RpdWqkzXFw",
        "sourceChannelTitle": "Morley Kert",
        "thumbnailUrl": "https://i.ytimg.com/vi/R1ul9iBhpVM/hqdefault.jpg",
        "durationSec": 1729
      },
      {
        "youtubeVideoId": "7h-golEJVtc",
        "title": "The Backpack-friendly 3D Printed ITX PC case - v2.0",
        "sourceChannelId": "UC5mKrz-oinuz9stgxYdznrg",
        "sourceChannelTitle": "makerunit",
        "thumbnailUrl": "https://i.ytimg.com/vi/7h-golEJVtc/hqdefault.jpg",
        "durationSec": 539
      },
      {
        "youtubeVideoId": "TkNaZU9zPjk",
        "title": "Building a pneumatic dragonfly",
        "sourceChannelId": "UC0G7e3uCtTyKQy2vZbRaKxg",
        "sourceChannelTitle": "Works By Design",
        "thumbnailUrl": "https://i.ytimg.com/vi/TkNaZU9zPjk/hqdefault.jpg",
        "durationSec": 926
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
        "youtubeVideoId": "JiJA5SHAwHs",
        "title": "Walmart's new $1 million logo",
        "sourceChannelId": "UCSb-xYOELhIqVr2n9s-b_4w",
        "sourceChannelTitle": "Linus Boman",
        "thumbnailUrl": "https://i.ytimg.com/vi/JiJA5SHAwHs/hqdefault.jpg",
        "durationSec": 533
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
        "youtubeVideoId": "OOxp8bShXaQ",
        "title": "The Collapse of the Dollar (And Why You're Already Poorer)",
        "sourceChannelId": "UCfdNM3NAhaBOXCafH7krzrA",
        "sourceChannelTitle": "The Infographics Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/OOxp8bShXaQ/hqdefault.jpg",
        "durationSec": 13884
      },
      {
        "youtubeVideoId": "l7-eiKWhRHo",
        "title": "Why your cold emails aren't paying off | Best of Luck",
        "sourceChannelId": "UCLXo7UDZvByw2ixzpQCufnA",
        "sourceChannelTitle": "Vox",
        "thumbnailUrl": "https://i.ytimg.com/vi/l7-eiKWhRHo/hqdefault.jpg",
        "durationSec": 2607
      },
      {
        "youtubeVideoId": "ZZTC_dXcC2o",
        "title": "Do you think Hard Disk Drives are Slow? Think again.",
        "sourceChannelId": "UCdp4_l1vPmpN-gDbUwhaRUQ",
        "sourceChannelTitle": "Branch Education",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZZTC_dXcC2o/hqdefault.jpg",
        "durationSec": 317
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
        "youtubeVideoId": "CWCph73jQBU",
        "title": "Assault Rifles: What Are They?",
        "sourceChannelId": "UCZjMzdwVa4dRy_V5AQwEv8A",
        "sourceChannelTitle": "Historically",
        "thumbnailUrl": "https://i.ytimg.com/vi/CWCph73jQBU/hqdefault.jpg",
        "durationSec": 718
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
        "youtubeVideoId": "Fo-VWz8bDGQ",
        "title": "Haven’t Written In Months? Here’s How To Start Again",
        "sourceChannelId": "UCFYOBrtrYKzdya20cFirkTA",
        "sourceChannelTitle": "Kieren Westwood",
        "thumbnailUrl": "https://i.ytimg.com/vi/Fo-VWz8bDGQ/hqdefault.jpg",
        "durationSec": 601
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
        "youtubeVideoId": "g3j75KqRAGA",
        "title": "A Bittersweet Farewell to Evermore Park + Weekly Update",
        "sourceChannelId": "UC3g-w83Cb5pEAu5UmRrge-A",
        "sourceChannelTitle": "Brandon Sanderson",
        "thumbnailUrl": "https://i.ytimg.com/vi/g3j75KqRAGA/hqdefault.jpg",
        "durationSec": 250
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
        "youtubeVideoId": "tdmQpf9qlIc",
        "title": "I can't get over this book and not in a good way",
        "sourceChannelId": "UCiflcKnh5cZiRWK7jlYKwxA",
        "sourceChannelTitle": "Elliot Brooks",
        "thumbnailUrl": "https://i.ytimg.com/vi/tdmQpf9qlIc/hqdefault.jpg",
        "durationSec": 1558
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
        "youtubeVideoId": "QQXCC6o_LHU",
        "title": "The Cult That Drove a Whole City Insane",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/QQXCC6o_LHU/hqdefault.jpg",
        "durationSec": 1152
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
        "youtubeVideoId": "uRCskQbL1KY",
        "title": "I Ranked Every Productivity Tool From Worst to Best",
        "sourceChannelId": "UCoOae5nYA7VqaXzerajD0lg",
        "sourceChannelTitle": "Ali Abdaal",
        "thumbnailUrl": "https://i.ytimg.com/vi/uRCskQbL1KY/hqdefault.jpg",
        "durationSec": 1520
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
        "youtubeVideoId": "4BFn_ggImZQ",
        "title": "How to never procrastinate (science-based)",
        "sourceChannelId": "UCftSbpEaMtTWcaFnvjwCvXw",
        "sourceChannelTitle": "Rian Doris",
        "thumbnailUrl": "https://i.ytimg.com/vi/4BFn_ggImZQ/hqdefault.jpg",
        "durationSec": 2036
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
        "youtubeVideoId": "a62aK2DU7uM",
        "title": "I destroyed my spine. Here's how I fixed it in 6 months.",
        "sourceChannelId": "UCtUId5WFnN82GdDy7DgaQ7w",
        "sourceChannelTitle": "Better Ideas",
        "thumbnailUrl": "https://i.ytimg.com/vi/a62aK2DU7uM/hqdefault.jpg",
        "durationSec": 667
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
        "youtubeVideoId": "3AKzzrIEmX8",
        "title": "This video will only find you before your next chapter",
        "sourceChannelId": "UC-dmJ79518WlKMbsu50eMTQ",
        "sourceChannelTitle": "Clark Kegley",
        "thumbnailUrl": "https://i.ytimg.com/vi/3AKzzrIEmX8/hqdefault.jpg",
        "durationSec": 962
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
        "youtubeVideoId": "_KCvoOhUqHA",
        "title": "The Man Who Smoked Weed for 10 Years",
        "sourceChannelId": "UCfdNM3NAhaBOXCafH7krzrA",
        "sourceChannelTitle": "The Infographics Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/_KCvoOhUqHA/hqdefault.jpg",
        "durationSec": 1013
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
        "youtubeVideoId": "N_6k_jd5pnA",
        "title": "How does Tap to Pay Work?",
        "sourceChannelId": "UCdp4_l1vPmpN-gDbUwhaRUQ",
        "sourceChannelTitle": "Branch Education",
        "thumbnailUrl": "https://i.ytimg.com/vi/N_6k_jd5pnA/hqdefault.jpg",
        "durationSec": 1818
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
        "youtubeVideoId": "F3nYVJhdUz4",
        "title": "How the British Snuck Under a Russian Aircraft Carrier",
        "sourceChannelId": "UCZjMzdwVa4dRy_V5AQwEv8A",
        "sourceChannelTitle": "Historically",
        "thumbnailUrl": "https://i.ytimg.com/vi/F3nYVJhdUz4/hqdefault.jpg",
        "durationSec": 480
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
        "youtubeVideoId": "mvPyhj9ieoE",
        "title": "Want to Write But Can't Get Going? Try These Three Things",
        "sourceChannelId": "UCFYOBrtrYKzdya20cFirkTA",
        "sourceChannelTitle": "Kieren Westwood",
        "thumbnailUrl": "https://i.ytimg.com/vi/mvPyhj9ieoE/hqdefault.jpg",
        "durationSec": 588
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
        "youtubeVideoId": "7ow2Oix2zr0",
        "title": "A Night of Science Fiction with James Islington, Janci Patterson, and Brandon Sanderson",
        "sourceChannelId": "UC3g-w83Cb5pEAu5UmRrge-A",
        "sourceChannelTitle": "Brandon Sanderson",
        "thumbnailUrl": "https://i.ytimg.com/vi/7ow2Oix2zr0/hqdefault.jpg",
        "durationSec": 3120
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
        "youtubeVideoId": "POyPLDXmE5A",
        "title": "Adult Fantasy Goodreads Predictions | 2026",
        "sourceChannelId": "UCiflcKnh5cZiRWK7jlYKwxA",
        "sourceChannelTitle": "Elliot Brooks",
        "thumbnailUrl": "https://i.ytimg.com/vi/POyPLDXmE5A/hqdefault.jpg",
        "durationSec": 786
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
        "youtubeVideoId": "HfaO94_KZ3c",
        "title": "The Fall of the Last Zulu King",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/HfaO94_KZ3c/hqdefault.jpg",
        "durationSec": 1073
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
        "youtubeVideoId": "DDB7E6aUJa8",
        "title": "The Most Valuable Sales Training You’ll Ever Watch",
        "sourceChannelId": "UCoOae5nYA7VqaXzerajD0lg",
        "sourceChannelTitle": "Ali Abdaal",
        "thumbnailUrl": "https://i.ytimg.com/vi/DDB7E6aUJa8/hqdefault.jpg",
        "durationSec": 5937
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
        "youtubeVideoId": "GU50VFQc2BA",
        "title": "This morning routine is scientifically proven to make you \"Limitless\"",
        "sourceChannelId": "UCftSbpEaMtTWcaFnvjwCvXw",
        "sourceChannelTitle": "Rian Doris",
        "thumbnailUrl": "https://i.ytimg.com/vi/GU50VFQc2BA/hqdefault.jpg",
        "durationSec": 2142
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
        "youtubeVideoId": "3FqB_AkTwEw",
        "title": "Ranking every self-improvement trend (from best to worst)",
        "sourceChannelId": "UCtUId5WFnN82GdDy7DgaQ7w",
        "sourceChannelTitle": "Better Ideas",
        "thumbnailUrl": "https://i.ytimg.com/vi/3FqB_AkTwEw/hqdefault.jpg",
        "durationSec": 1204
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
        "youtubeVideoId": "FP9V7lMT14w",
        "title": "It took me 35 years to realize what I’ll tell you in 13 minutes...",
        "sourceChannelId": "UC-dmJ79518WlKMbsu50eMTQ",
        "sourceChannelTitle": "Clark Kegley",
        "thumbnailUrl": "https://i.ytimg.com/vi/FP9V7lMT14w/hqdefault.jpg",
        "durationSec": 792
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
        "youtubeVideoId": "0DYYdcGrbMM",
        "title": "History Is Repeating. This Is Where It Goes Wrong.",
        "sourceChannelId": "UCfdNM3NAhaBOXCafH7krzrA",
        "sourceChannelTitle": "The Infographics Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/0DYYdcGrbMM/hqdefault.jpg",
        "durationSec": 1122
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
        "youtubeVideoId": "9kM3mnxrMMM",
        "title": "How do microSD Cards Store 2 TB in such a TINY space?",
        "sourceChannelId": "UCdp4_l1vPmpN-gDbUwhaRUQ",
        "sourceChannelTitle": "Branch Education",
        "thumbnailUrl": "https://i.ytimg.com/vi/9kM3mnxrMMM/hqdefault.jpg",
        "durationSec": 367
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
        "youtubeVideoId": "8xluueyeEKQ",
        "title": "Canada's Forgotten Aircraft Carriers",
        "sourceChannelId": "UCZjMzdwVa4dRy_V5AQwEv8A",
        "sourceChannelTitle": "Historically",
        "thumbnailUrl": "https://i.ytimg.com/vi/8xluueyeEKQ/hqdefault.jpg",
        "durationSec": 1196
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
        "youtubeVideoId": "U9JMdCP8y_g",
        "title": "You've Got A Story Idea? Here's Your Next Step.",
        "sourceChannelId": "UCFYOBrtrYKzdya20cFirkTA",
        "sourceChannelTitle": "Kieren Westwood",
        "thumbnailUrl": "https://i.ytimg.com/vi/U9JMdCP8y_g/hqdefault.jpg",
        "durationSec": 465
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
        "youtubeVideoId": "SrkBIyD5rKU",
        "title": "Sinners Review — Intentionally Blank Ep. 283",
        "sourceChannelId": "UC3g-w83Cb5pEAu5UmRrge-A",
        "sourceChannelTitle": "Brandon Sanderson",
        "thumbnailUrl": "https://i.ytimg.com/vi/SrkBIyD5rKU/hqdefault.jpg",
        "durationSec": 2414
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
        "youtubeVideoId": "hQ9aod9yDns",
        "title": "someone decided to mock a self pub author for . . . no reason | let's discuss",
        "sourceChannelId": "UCiflcKnh5cZiRWK7jlYKwxA",
        "sourceChannelTitle": "Elliot Brooks",
        "thumbnailUrl": "https://i.ytimg.com/vi/hQ9aod9yDns/hqdefault.jpg",
        "durationSec": 857
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
        "youtubeVideoId": "kGvF7ATAqoo",
        "title": "The Real Story of the Mongolian Singing Dunes",
        "sourceChannelId": "UCq8ZAAsI89IoJ-fn1gYpO3g",
        "sourceChannelTitle": "Nightshift – Kurzgesagt After Dark",
        "thumbnailUrl": "https://i.ytimg.com/vi/kGvF7ATAqoo/hqdefault.jpg",
        "durationSec": 410
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
        "youtubeVideoId": "DrZNvkOgZRE",
        "title": "Everything's Changing - 2026 Life Update",
        "sourceChannelId": "UCoOae5nYA7VqaXzerajD0lg",
        "sourceChannelTitle": "Ali Abdaal",
        "thumbnailUrl": "https://i.ytimg.com/vi/DrZNvkOgZRE/hqdefault.jpg",
        "durationSec": 2248
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
        "youtubeVideoId": "1MJisI8TtSk",
        "title": "Self Improvement is Actually Melting Your Brain",
        "sourceChannelId": "UCftSbpEaMtTWcaFnvjwCvXw",
        "sourceChannelTitle": "Rian Doris",
        "thumbnailUrl": "https://i.ytimg.com/vi/1MJisI8TtSk/hqdefault.jpg",
        "durationSec": 1033
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
        "youtubeVideoId": "cnkTn5y238c",
        "title": "It's boring, but this is how you focus on anything for 10+ hours",
        "sourceChannelId": "UCtUId5WFnN82GdDy7DgaQ7w",
        "sourceChannelTitle": "Better Ideas",
        "thumbnailUrl": "https://i.ytimg.com/vi/cnkTn5y238c/hqdefault.jpg",
        "durationSec": 1013
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
        "youtubeVideoId": "t6A2pbiuQq4",
        "title": "Dumb People Are WINNING While You’re STUCK Overthinking",
        "sourceChannelId": "UC-dmJ79518WlKMbsu50eMTQ",
        "sourceChannelTitle": "Clark Kegley",
        "thumbnailUrl": "https://i.ytimg.com/vi/t6A2pbiuQq4/hqdefault.jpg",
        "durationSec": 868
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
  },
  "movies": {
    "categoryId": "movies",
    "categoryName": "Movies",
    "hue": 12,
    "builtAt": 1794346171198,
    "videos": [
      {
        "youtubeVideoId": "nfz6SaMOEd8",
        "title": "\"Chilling Encounters: Scary Stories to Keep You Up at Night\"",
        "sourceChannelId": "UCPHA7A4XYhyQR4ewsuFkKnw",
        "sourceChannelTitle": "HorrorCentral",
        "thumbnailUrl": "https://i.ytimg.com/vi/nfz6SaMOEd8/hqdefault.jpg",
        "durationSec": 162
      },
      {
        "youtubeVideoId": "3Eh7dVNKWNU",
        "title": "Marvelous and The Black Hole | Full Movie",
        "sourceChannelId": "UC8IHAQMuiJdY6ALuhG7iU8Q",
        "sourceChannelTitle": "FilmRise Movies",
        "thumbnailUrl": "https://i.ytimg.com/vi/3Eh7dVNKWNU/hqdefault.jpg",
        "durationSec": 4901
      },
      {
        "youtubeVideoId": "OqktXY_oRDQ",
        "title": "THE LEPRECHAUN'S CURSE 🎬 Full Horror Movie 🎬 English HD",
        "sourceChannelId": "UC4ZqZ6V67OWNUxBHLLv7yAA",
        "sourceChannelTitle": "Watch Movies Now!",
        "thumbnailUrl": "https://i.ytimg.com/vi/OqktXY_oRDQ/hqdefault.jpg",
        "durationSec": 4819
      },
      {
        "youtubeVideoId": "bopJV_Xk_Ls",
        "title": "A Birder's Guide To Everything | FULL MOVIE | Comedy | Kodi Smit-McPhee, Alex Wolff, Ben Kingsley",
        "sourceChannelId": "UCVFYikepF-avelvuIaQ_lHA",
        "sourceChannelTitle": "Popcornflix",
        "thumbnailUrl": "https://i.ytimg.com/vi/bopJV_Xk_Ls/hqdefault.jpg",
        "durationSec": 5183
      },
      {
        "youtubeVideoId": "2j1ulDeUPzk",
        "title": "Alice Fades Away (FULL MOVIE) WWII Drama, Ashley Shelton, William Sadler, Blanche Baker",
        "sourceChannelId": "UCX1nchEcBshItKBeJvH-YMw",
        "sourceChannelTitle": "FREE MOVIES",
        "thumbnailUrl": "https://i.ytimg.com/vi/2j1ulDeUPzk/hqdefault.jpg",
        "durationSec": 4574
      },
      {
        "youtubeVideoId": "pNcI-uY00fk",
        "title": "A Crime On The Bayou | FULL MOVIE | True Crime Racism Documentary",
        "sourceChannelId": "UCpHaAKu74UHvcYCi2g_PvBQ",
        "sourceChannelTitle": "Shout! Studios",
        "thumbnailUrl": "https://i.ytimg.com/vi/pNcI-uY00fk/hqdefault.jpg",
        "durationSec": 5462
      },
      {
        "youtubeVideoId": "YllC-K1l2yg",
        "title": "Stuck on Christmas | Full Movie | Office Rivals Trapped Together on Christmas Eve",
        "sourceChannelId": "UC2u3R3pjOiPZu4LtTlKkxdw",
        "sourceChannelTitle": "Maverick Movies",
        "thumbnailUrl": "https://i.ytimg.com/vi/YllC-K1l2yg/hqdefault.jpg",
        "durationSec": 4612
      },
      {
        "youtubeVideoId": "k_INCq511-g",
        "title": "LAND OF FORGOTTEN ECHOES | Omeleto",
        "sourceChannelId": "UCTMt7iMWa7jy0fNXIktwyLA",
        "sourceChannelTitle": "Omeleto",
        "thumbnailUrl": "https://i.ytimg.com/vi/k_INCq511-g/hqdefault.jpg",
        "durationSec": 826
      },
      {
        "youtubeVideoId": "6YVLLkWE_9w",
        "title": "Downsized | Sci-Fi Short Film | DUST",
        "sourceChannelId": "UC7sDT8jZ76VLV1u__krUutA",
        "sourceChannelTitle": "DUST",
        "thumbnailUrl": "https://i.ytimg.com/vi/6YVLLkWE_9w/hqdefault.jpg",
        "durationSec": 516
      },
      {
        "youtubeVideoId": "LBemh5juvyo",
        "title": "Four Itchy Boys | Horror Short Film | ALTER",
        "sourceChannelId": "UCMOB6uDg7e-h8OuCw8dK2_Q",
        "sourceChannelTitle": "ALTER",
        "thumbnailUrl": "https://i.ytimg.com/vi/LBemh5juvyo/hqdefault.jpg",
        "durationSec": 731
      },
      {
        "youtubeVideoId": "0t6KgGBA4I4",
        "title": "🍕Sweet Kitty Bellairs (1930) Full HD Movie | Claudia Dell, PRE-CODE MUSICAL ROMP🍕",
        "sourceChannelId": "UCE34fwgW7kWr7tc7YiOWtRw",
        "sourceChannelTitle": "PizzaFlix",
        "thumbnailUrl": "https://i.ytimg.com/vi/0t6KgGBA4I4/hqdefault.jpg",
        "durationSec": 3845
      },
      {
        "youtubeVideoId": "6mfiaNtG7bY",
        "title": "Красная палатка (1969) - Михаил Калатозов | драма | Мосфильм 4K",
        "sourceChannelId": "UCEK3tT7DcfWGWJpNEDBdWog",
        "sourceChannelTitle": "Киноконцерн &quot;Мосфильм&quot;",
        "thumbnailUrl": "https://i.ytimg.com/vi/6mfiaNtG7bY/hqdefault.jpg",
        "durationSec": 9417
      },
      {
        "youtubeVideoId": "RF64lC6m4rI",
        "title": "A Great Divide | Official Trailer | Gravitas Ventures | Starring Ken Jeong",
        "sourceChannelId": "UCoulHkEKWQ1t36oBheqEE_g",
        "sourceChannelTitle": "Gravitas Ventures",
        "thumbnailUrl": "https://i.ytimg.com/vi/RF64lC6m4rI/hqdefault.jpg",
        "durationSec": 135
      },
      {
        "youtubeVideoId": "1NKq2wL_CcY",
        "title": "Drug Kingpin Sends A Hitman To Kill Him | Shadows | Full 2026 Crime Drama Thriller Movie",
        "sourceChannelId": "UCGBzBkV-MinlBvHBzZawfLQ",
        "sourceChannelTitle": "Movie Central",
        "thumbnailUrl": "https://i.ytimg.com/vi/1NKq2wL_CcY/hqdefault.jpg",
        "durationSec": 6049
      },
      {
        "youtubeVideoId": "-6MDFSsIyfU",
        "title": "work in progress",
        "sourceChannelId": "UC2iymls3S-p5rsTdCfRYaNw",
        "sourceChannelTitle": "SamuelGoldwynFilms",
        "thumbnailUrl": "https://i.ytimg.com/vi/-6MDFSsIyfU/hqdefault.jpg",
        "durationSec": 128
      },
      {
        "youtubeVideoId": "2IwRTjgBT38",
        "title": "\"Chilling True Scary Story: 'The Neighbor'",
        "sourceChannelId": "UCPHA7A4XYhyQR4ewsuFkKnw",
        "sourceChannelTitle": "HorrorCentral",
        "thumbnailUrl": "https://i.ytimg.com/vi/2IwRTjgBT38/hqdefault.jpg",
        "durationSec": 154
      },
      {
        "youtubeVideoId": "Ekfn-RVo8XI",
        "title": "Mortuary | Full Movie",
        "sourceChannelId": "UC8IHAQMuiJdY6ALuhG7iU8Q",
        "sourceChannelTitle": "FilmRise Movies",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ekfn-RVo8XI/hqdefault.jpg",
        "durationSec": 5576
      },
      {
        "youtubeVideoId": "dHhMxFm_upM",
        "title": "THE DEAD RISE (SPECIAL EDITION) 🎬 Full Sci-Fi Horror Movie 🎬 English HD",
        "sourceChannelId": "UC4ZqZ6V67OWNUxBHLLv7yAA",
        "sourceChannelTitle": "Watch Movies Now!",
        "thumbnailUrl": "https://i.ytimg.com/vi/dHhMxFm_upM/hqdefault.jpg",
        "durationSec": 4710
      },
      {
        "youtubeVideoId": "NG4UEfI2qes",
        "title": "Fever | FULL MOVIE | Mystery, Dark Thriller | Teri Hatcher, Henry Thomas",
        "sourceChannelId": "UCVFYikepF-avelvuIaQ_lHA",
        "sourceChannelTitle": "Popcornflix",
        "thumbnailUrl": "https://i.ytimg.com/vi/NG4UEfI2qes/hqdefault.jpg",
        "durationSec": 5317
      },
      {
        "youtubeVideoId": "bI80wVThavY",
        "title": "This Is Where We Live | Heartfelt Award-Winning Indie Family Drama",
        "sourceChannelId": "UCX1nchEcBshItKBeJvH-YMw",
        "sourceChannelTitle": "FREE MOVIES",
        "thumbnailUrl": "https://i.ytimg.com/vi/bI80wVThavY/hqdefault.jpg",
        "durationSec": 5574
      },
      {
        "youtubeVideoId": "oKRznAcakfQ",
        "title": "Old Enough | FULL MOVIE | Danny Aiello, Alyssa Milano | Coming of Age NYC Drama",
        "sourceChannelId": "UCpHaAKu74UHvcYCi2g_PvBQ",
        "sourceChannelTitle": "Shout! Studios",
        "thumbnailUrl": "https://i.ytimg.com/vi/oKRznAcakfQ/hqdefault.jpg",
        "durationSec": 5492
      },
      {
        "youtubeVideoId": "a5V50qc5lxA",
        "title": "Merry Little Baby | Full Movie | A Baby by Christmas? Love Has Other Plans",
        "sourceChannelId": "UC2u3R3pjOiPZu4LtTlKkxdw",
        "sourceChannelTitle": "Maverick Movies",
        "thumbnailUrl": "https://i.ytimg.com/vi/a5V50qc5lxA/hqdefault.jpg",
        "durationSec": 5758
      },
      {
        "youtubeVideoId": "bp_olTAJOac",
        "title": "SILICON VALLEY GIRL | Omeleto",
        "sourceChannelId": "UCTMt7iMWa7jy0fNXIktwyLA",
        "sourceChannelTitle": "Omeleto",
        "thumbnailUrl": "https://i.ytimg.com/vi/bp_olTAJOac/hqdefault.jpg",
        "durationSec": 796
      },
      {
        "youtubeVideoId": "JiGrx-9RDYw",
        "title": "HYPERBURN | Sci-Fi Short Film | DUST",
        "sourceChannelId": "UC7sDT8jZ76VLV1u__krUutA",
        "sourceChannelTitle": "DUST",
        "thumbnailUrl": "https://i.ytimg.com/vi/JiGrx-9RDYw/hqdefault.jpg",
        "durationSec": 667
      },
      {
        "youtubeVideoId": "ZWTJrhVDvDY",
        "title": "AMYGDALA | Horror Short Film | ALTER",
        "sourceChannelId": "UCMOB6uDg7e-h8OuCw8dK2_Q",
        "sourceChannelTitle": "ALTER",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZWTJrhVDvDY/hqdefault.jpg",
        "durationSec": 535
      },
      {
        "youtubeVideoId": "EA6W6C0GeyE",
        "title": "NEW HD RESTORATION🍕The Giant Spider Invasion (1975) UNBLURRED, UNCENSORED, ORIGINAL DIRECTOR'S CUT!",
        "sourceChannelId": "UCE34fwgW7kWr7tc7YiOWtRw",
        "sourceChannelTitle": "PizzaFlix",
        "thumbnailUrl": "https://i.ytimg.com/vi/EA6W6C0GeyE/hqdefault.jpg",
        "durationSec": 4800
      },
      {
        "youtubeVideoId": "hm1gjlHUgBE",
        "title": "Причалы (1987) — драма | Мосфильм",
        "sourceChannelId": "UCEK3tT7DcfWGWJpNEDBdWog",
        "sourceChannelTitle": "Киноконцерн &quot;Мосфильм&quot;",
        "thumbnailUrl": "https://i.ytimg.com/vi/hm1gjlHUgBE/hqdefault.jpg",
        "durationSec": 4790
      },
      {
        "youtubeVideoId": "CpwrJIkWxRw",
        "title": "On Our Way - Official Trailer (2023) Micheál Richardson, Sophie Lane Curtis",
        "sourceChannelId": "UCoulHkEKWQ1t36oBheqEE_g",
        "sourceChannelTitle": "Gravitas Ventures",
        "thumbnailUrl": "https://i.ytimg.com/vi/CpwrJIkWxRw/hqdefault.jpg",
        "durationSec": 95
      },
      {
        "youtubeVideoId": "tYaiRT_sN24",
        "title": "Paul Walker & Tyrese Gibson Street Race For Pink Slips | 2 Fast 2 Furious | Movie Clip",
        "sourceChannelId": "UCGBzBkV-MinlBvHBzZawfLQ",
        "sourceChannelTitle": "Movie Central",
        "thumbnailUrl": "https://i.ytimg.com/vi/tYaiRT_sN24/hqdefault.jpg",
        "durationSec": 593
      },
      {
        "youtubeVideoId": "kozeQ7UR_-8",
        "title": "\"Real Scary Stories That Will Haunt Your Dreams\"",
        "sourceChannelId": "UCPHA7A4XYhyQR4ewsuFkKnw",
        "sourceChannelTitle": "HorrorCentral",
        "thumbnailUrl": "https://i.ytimg.com/vi/kozeQ7UR_-8/hqdefault.jpg",
        "durationSec": 82
      },
      {
        "youtubeVideoId": "xN6n3cSfOqw",
        "title": "BUTCHERS (SPECIAL EDITION) 🎬 Full Horror Movie 🎬 English HD",
        "sourceChannelId": "UC4ZqZ6V67OWNUxBHLLv7yAA",
        "sourceChannelTitle": "Watch Movies Now!",
        "thumbnailUrl": "https://i.ytimg.com/vi/xN6n3cSfOqw/hqdefault.jpg",
        "durationSec": 3823
      },
      {
        "youtubeVideoId": "wgBnLO4Pnb0",
        "title": "FARRAH BATTLES ROBOT! Saturn 3 | FULL MOVIE | Sci Fi Cult Classic | Farrah Fawcett, Kirk Douglas",
        "sourceChannelId": "UCVFYikepF-avelvuIaQ_lHA",
        "sourceChannelTitle": "Popcornflix",
        "thumbnailUrl": "https://i.ytimg.com/vi/wgBnLO4Pnb0/hqdefault.jpg",
        "durationSec": 5231
      },
      {
        "youtubeVideoId": "yRYvLFLdgk0",
        "title": "Keedar Whittle: Hear Me Out (FULL COMEDY SPECIAL) Stand Up Comedy, Movie,",
        "sourceChannelId": "UCX1nchEcBshItKBeJvH-YMw",
        "sourceChannelTitle": "FREE MOVIES",
        "thumbnailUrl": "https://i.ytimg.com/vi/yRYvLFLdgk0/hqdefault.jpg",
        "durationSec": 3894
      },
      {
        "youtubeVideoId": "k4zqaGyaojU",
        "title": "Fade To Black | FULL MOVIE | Mickey Rourke | WTF Cult Horror Comedy Thriller",
        "sourceChannelId": "UCpHaAKu74UHvcYCi2g_PvBQ",
        "sourceChannelTitle": "Shout! Studios",
        "thumbnailUrl": "https://i.ytimg.com/vi/k4zqaGyaojU/hqdefault.jpg",
        "durationSec": 6142
      },
      {
        "youtubeVideoId": "__LLF0vik24",
        "title": "Bad Shuffle | Official Trailer",
        "sourceChannelId": "UC2u3R3pjOiPZu4LtTlKkxdw",
        "sourceChannelTitle": "Maverick Movies",
        "thumbnailUrl": "https://i.ytimg.com/vi/__LLF0vik24/hqdefault.jpg",
        "durationSec": 97
      },
      {
        "youtubeVideoId": "hAjf3hD_C-I",
        "title": "NOT YET | Omeleto",
        "sourceChannelId": "UCTMt7iMWa7jy0fNXIktwyLA",
        "sourceChannelTitle": "Omeleto",
        "thumbnailUrl": "https://i.ytimg.com/vi/hAjf3hD_C-I/hqdefault.jpg",
        "durationSec": 833
      },
      {
        "youtubeVideoId": "g5WsM0G-_Ks",
        "title": "The Reclaimers | Sci-Fi Short Film | DUST",
        "sourceChannelId": "UC7sDT8jZ76VLV1u__krUutA",
        "sourceChannelTitle": "DUST",
        "thumbnailUrl": "https://i.ytimg.com/vi/g5WsM0G-_Ks/hqdefault.jpg",
        "durationSec": 1147
      },
      {
        "youtubeVideoId": "KOzxf1LryD0",
        "title": "GNOMES | Horror Short Film | ALTER",
        "sourceChannelId": "UCMOB6uDg7e-h8OuCw8dK2_Q",
        "sourceChannelTitle": "ALTER",
        "thumbnailUrl": "https://i.ytimg.com/vi/KOzxf1LryD0/hqdefault.jpg",
        "durationSec": 351
      },
      {
        "youtubeVideoId": "ob2oz-p5byg",
        "title": "NEW HD RESTORATION🍕 Door-to-Door Maniac (1960) Five Minutes to Live | JOHNNY CASH goes DARK🍕",
        "sourceChannelId": "UCE34fwgW7kWr7tc7YiOWtRw",
        "sourceChannelTitle": "PizzaFlix",
        "thumbnailUrl": "https://i.ytimg.com/vi/ob2oz-p5byg/hqdefault.jpg",
        "durationSec": 4536
      },
      {
        "youtubeVideoId": "mPEpMflSsoM",
        "title": "Деловые люди (1962) — Леонид Гайдай | комедия | Мосфильм 4K",
        "sourceChannelId": "UCEK3tT7DcfWGWJpNEDBdWog",
        "sourceChannelTitle": "Киноконцерн &quot;Мосфильм&quot;",
        "thumbnailUrl": "https://i.ytimg.com/vi/mPEpMflSsoM/hqdefault.jpg",
        "durationSec": 5027
      },
      {
        "youtubeVideoId": "btr33ucPaB4",
        "title": "Gringa - Official Trailer (2023) Steve Zahn, Jess Gabor",
        "sourceChannelId": "UCoulHkEKWQ1t36oBheqEE_g",
        "sourceChannelTitle": "Gravitas Ventures",
        "thumbnailUrl": "https://i.ytimg.com/vi/btr33ucPaB4/hqdefault.jpg",
        "durationSec": 156
      },
      {
        "youtubeVideoId": "_D-jweYqi4Q",
        "title": "She Vowed To Rescue Trafficked Women | Death On The Border | 2026 Crime Action Movie",
        "sourceChannelId": "UCGBzBkV-MinlBvHBzZawfLQ",
        "sourceChannelTitle": "Movie Central",
        "thumbnailUrl": "https://i.ytimg.com/vi/_D-jweYqi4Q/hqdefault.jpg",
        "durationSec": 5646
      },
      {
        "youtubeVideoId": "B0wH5sJeNgk",
        "title": "\"Creepy Tales: True Horror Stories You Won't Believe\"",
        "sourceChannelId": "UCPHA7A4XYhyQR4ewsuFkKnw",
        "sourceChannelTitle": "HorrorCentral",
        "thumbnailUrl": "https://i.ytimg.com/vi/B0wH5sJeNgk/hqdefault.jpg",
        "durationSec": 105
      },
      {
        "youtubeVideoId": "EuRQx5jURxA",
        "title": "BLEED: EAT OR BE EATEN (SPECIAL EDITION) 🎬 Full Horror Movie 🎬 English HD",
        "sourceChannelId": "UC4ZqZ6V67OWNUxBHLLv7yAA",
        "sourceChannelTitle": "Watch Movies Now!",
        "thumbnailUrl": "https://i.ytimg.com/vi/EuRQx5jURxA/hqdefault.jpg",
        "durationSec": 4007
      },
      {
        "youtubeVideoId": "ra0vF8YSvps",
        "title": "Rendel: Dark Vengeance | FULL MOVIE | Action, Crime | Superhero",
        "sourceChannelId": "UCVFYikepF-avelvuIaQ_lHA",
        "sourceChannelTitle": "Popcornflix",
        "thumbnailUrl": "https://i.ytimg.com/vi/ra0vF8YSvps/hqdefault.jpg",
        "durationSec": 6324
      },
      {
        "youtubeVideoId": "sqCYHOTNBNc",
        "title": "Ashes (FULL MOVIE) Based on a true story | Horror, Supernatural, Ghosts, Comedy, Ouija Board",
        "sourceChannelId": "UCX1nchEcBshItKBeJvH-YMw",
        "sourceChannelTitle": "FREE MOVIES",
        "thumbnailUrl": "https://i.ytimg.com/vi/sqCYHOTNBNc/hqdefault.jpg",
        "durationSec": 5200
      },
      {
        "youtubeVideoId": "osuPhvRRNA4",
        "title": "Christmas in The Hood | Official Trailer",
        "sourceChannelId": "UC2u3R3pjOiPZu4LtTlKkxdw",
        "sourceChannelTitle": "Maverick Movies",
        "thumbnailUrl": "https://i.ytimg.com/vi/osuPhvRRNA4/hqdefault.jpg",
        "durationSec": 121
      },
      {
        "youtubeVideoId": "Y1NIUL6T7_k",
        "title": "AN ARTIST'S SOUL | Omeleto",
        "sourceChannelId": "UCTMt7iMWa7jy0fNXIktwyLA",
        "sourceChannelTitle": "Omeleto",
        "thumbnailUrl": "https://i.ytimg.com/vi/Y1NIUL6T7_k/hqdefault.jpg",
        "durationSec": 848
      },
      {
        "youtubeVideoId": "Lh-kx8B2bV8",
        "title": "Hivemind Deluxe | Sci-Fi Short Film | DUST",
        "sourceChannelId": "UC7sDT8jZ76VLV1u__krUutA",
        "sourceChannelTitle": "DUST",
        "thumbnailUrl": "https://i.ytimg.com/vi/Lh-kx8B2bV8/hqdefault.jpg",
        "durationSec": 605
      },
      {
        "youtubeVideoId": "g5-8WlCU9_M",
        "title": "Shift | Horror Short Film | ALTER",
        "sourceChannelId": "UCMOB6uDg7e-h8OuCw8dK2_Q",
        "sourceChannelTitle": "ALTER",
        "thumbnailUrl": "https://i.ytimg.com/vi/g5-8WlCU9_M/hqdefault.jpg",
        "durationSec": 944
      },
      {
        "youtubeVideoId": "t8IqgV3b75s",
        "title": "🍕Way Out West (MGM, 1930) Full HD Movie | William Haines, Leila Hyams, Screwball Western Sass🍕",
        "sourceChannelId": "UCE34fwgW7kWr7tc7YiOWtRw",
        "sourceChannelTitle": "PizzaFlix",
        "thumbnailUrl": "https://i.ytimg.com/vi/t8IqgV3b75s/hqdefault.jpg",
        "durationSec": 4293
      },
      {
        "youtubeVideoId": "JwooOqHBlWw",
        "title": "Гранатовый браслет (1964) — Абрам Роом | драма | Мосфильм 4K",
        "sourceChannelId": "UCEK3tT7DcfWGWJpNEDBdWog",
        "sourceChannelTitle": "Киноконцерн &quot;Мосфильм&quot;",
        "thumbnailUrl": "https://i.ytimg.com/vi/JwooOqHBlWw/hqdefault.jpg",
        "durationSec": 5408
      },
      {
        "youtubeVideoId": "WVihRhmc264",
        "title": "ALIENS RETURN 🎬 Full Horror Movie 🎬 English HD",
        "sourceChannelId": "UC4ZqZ6V67OWNUxBHLLv7yAA",
        "sourceChannelTitle": "Watch Movies Now!",
        "thumbnailUrl": "https://i.ytimg.com/vi/WVihRhmc264/hqdefault.jpg",
        "durationSec": 4813
      },
      {
        "youtubeVideoId": "oOzODYq1i1A",
        "title": "Hijack (1998) | FULL MOVIE | Action, Ernie Hudson, Jeff Fahey | Train Thriller",
        "sourceChannelId": "UCVFYikepF-avelvuIaQ_lHA",
        "sourceChannelTitle": "Popcornflix",
        "thumbnailUrl": "https://i.ytimg.com/vi/oOzODYq1i1A/hqdefault.jpg",
        "durationSec": 5430
      },
      {
        "youtubeVideoId": "k5u0m5tnMeY",
        "title": "Go Chase Yourself (FULL MOVIE) CRIME DRAMA, SUPERNATURAL, ROMANCE, Amanda Rodriguez, Jason Gervacio",
        "sourceChannelId": "UCX1nchEcBshItKBeJvH-YMw",
        "sourceChannelTitle": "FREE MOVIES",
        "thumbnailUrl": "https://i.ytimg.com/vi/k5u0m5tnMeY/hqdefault.jpg",
        "durationSec": 5013
      },
      {
        "youtubeVideoId": "BKnKv5hs08Y",
        "title": "Hard Holiday | Full Movie | A Single Mother’s Fight for a Second Chance",
        "sourceChannelId": "UC2u3R3pjOiPZu4LtTlKkxdw",
        "sourceChannelTitle": "Maverick Movies",
        "thumbnailUrl": "https://i.ytimg.com/vi/BKnKv5hs08Y/hqdefault.jpg",
        "durationSec": 7072
      },
      {
        "youtubeVideoId": "txAx7ChjbE0",
        "title": "STEVE | Omeleto",
        "sourceChannelId": "UCTMt7iMWa7jy0fNXIktwyLA",
        "sourceChannelTitle": "Omeleto",
        "thumbnailUrl": "https://i.ytimg.com/vi/txAx7ChjbE0/hqdefault.jpg",
        "durationSec": 921
      },
      {
        "youtubeVideoId": "4ykjtJRfong",
        "title": "Sci-Fi Short Film \"The Traveler\" | DUST",
        "sourceChannelId": "UC7sDT8jZ76VLV1u__krUutA",
        "sourceChannelTitle": "DUST",
        "thumbnailUrl": "https://i.ytimg.com/vi/4ykjtJRfong/hqdefault.jpg",
        "durationSec": 1078
      },
      {
        "youtubeVideoId": "HVyxDU56l3c",
        "title": "Tapestry | Horror Short Film | ALTER",
        "sourceChannelId": "UCMOB6uDg7e-h8OuCw8dK2_Q",
        "sourceChannelTitle": "ALTER",
        "thumbnailUrl": "https://i.ytimg.com/vi/HVyxDU56l3c/hqdefault.jpg",
        "durationSec": 371
      },
      {
        "youtubeVideoId": "1YYxEYEvKwM",
        "title": "🍕Old English (1930) Full HD Movie | George Arliss, Leon Janney, PRE-CODE CLASSIC🍕",
        "sourceChannelId": "UCE34fwgW7kWr7tc7YiOWtRw",
        "sourceChannelTitle": "PizzaFlix",
        "thumbnailUrl": "https://i.ytimg.com/vi/1YYxEYEvKwM/hqdefault.jpg",
        "durationSec": 5261
      },
      {
        "youtubeVideoId": "GkXUeJLhg_Q",
        "title": "«Есть только миг» (музыкальный фрагмент из к/ф \"Земля Санникова\")",
        "sourceChannelId": "UCEK3tT7DcfWGWJpNEDBdWog",
        "sourceChannelTitle": "Киноконцерн &quot;Мосфильм&quot;",
        "thumbnailUrl": "https://i.ytimg.com/vi/GkXUeJLhg_Q/hqdefault.jpg",
        "durationSec": 199
      },
      {
        "youtubeVideoId": "B7RsU9_DTfU",
        "title": "Knightriders | FULL MOVIE | 1981 | Ed Harris | Directed by George A. Romero, cosplay, motorcycles",
        "sourceChannelId": "UCVFYikepF-avelvuIaQ_lHA",
        "sourceChannelTitle": "Popcornflix",
        "thumbnailUrl": "https://i.ytimg.com/vi/B7RsU9_DTfU/hqdefault.jpg",
        "durationSec": 8792
      },
      {
        "youtubeVideoId": "H5Dx36Ci2fc",
        "title": "Mama Mae's Christmas | Official Trailer | Special Premiere on Pluto TV",
        "sourceChannelId": "UC2u3R3pjOiPZu4LtTlKkxdw",
        "sourceChannelTitle": "Maverick Movies",
        "thumbnailUrl": "https://i.ytimg.com/vi/H5Dx36Ci2fc/hqdefault.jpg",
        "durationSec": 136
      },
      {
        "youtubeVideoId": "J4hBVdnLRiY",
        "title": "ENDZGIVING | Omeleto",
        "sourceChannelId": "UCTMt7iMWa7jy0fNXIktwyLA",
        "sourceChannelTitle": "Omeleto",
        "thumbnailUrl": "https://i.ytimg.com/vi/J4hBVdnLRiY/hqdefault.jpg",
        "durationSec": 654
      }
    ]
  },
  "cartoons": {
    "categoryId": "cartoons",
    "categoryName": "Animations",
    "hue": 48,
    "builtAt": 1794346171198,
    "videos": [
      {
        "youtubeVideoId": "P0_5DU3A9Cg",
        "title": "I Got CAUGHT Running Away",
        "sourceChannelId": "UCpHWSOWGarUZIjTvTjbQkDA",
        "sourceChannelTitle": "OnzLemur",
        "thumbnailUrl": "https://i.ytimg.com/vi/P0_5DU3A9Cg/hqdefault.jpg",
        "durationSec": 602
      },
      {
        "youtubeVideoId": "zoCxWzuC-dA",
        "title": "ONE Girl DESTROYED My Friend Group 3",
        "sourceChannelId": "UCpHWSOWGarUZIjTvTjbQkDA",
        "sourceChannelTitle": "OnzLemur",
        "thumbnailUrl": "https://i.ytimg.com/vi/zoCxWzuC-dA/hqdefault.jpg",
        "durationSec": 663
      },
      {
        "youtubeVideoId": "YJefoFt_DE0",
        "title": "ONE girl DESTROYED my friend group 2",
        "sourceChannelId": "UCpHWSOWGarUZIjTvTjbQkDA",
        "sourceChannelTitle": "OnzLemur",
        "thumbnailUrl": "https://i.ytimg.com/vi/YJefoFt_DE0/hqdefault.jpg",
        "durationSec": 925
      },
      {
        "youtubeVideoId": "lQ9Kx_tCbNY",
        "title": "Hexed | Wicked Fun",
        "sourceChannelId": "UC_976xMxPgzIa290Hqtk-9g",
        "sourceChannelTitle": "Walt Disney Animation Studios",
        "thumbnailUrl": "https://i.ytimg.com/vi/lQ9Kx_tCbNY/hqdefault.jpg",
        "durationSec": 72
      },
      {
        "youtubeVideoId": "H-AFoTjDdb8",
        "title": "GEMMA - Animation Short Film 2026 - GOBELINS",
        "sourceChannelId": "UC-vrN89jIox3XqAKbEMeFgQ",
        "sourceChannelTitle": "GOBELINS Paris",
        "thumbnailUrl": "https://i.ytimg.com/vi/H-AFoTjDdb8/hqdefault.jpg",
        "durationSec": 375
      },
      {
        "youtubeVideoId": "-jknl-GNjDw",
        "title": "Now Loading... GAMEOVERSE",
        "sourceChannelId": "UCn_FAXem2-e3HQvmK-mOH4g",
        "sourceChannelTitle": "GLITCH",
        "thumbnailUrl": "https://i.ytimg.com/vi/-jknl-GNjDw/hqdefault.jpg",
        "durationSec": 70
      },
      {
        "youtubeVideoId": "d8Fd2wk9toM",
        "title": "Mom, Is Our Fish Dead? [Animation]",
        "sourceChannelId": "UCsOav-uzO3ENpoft3VnDIeQ",
        "sourceChannelTitle": "SkyeWei",
        "thumbnailUrl": "https://i.ytimg.com/vi/d8Fd2wk9toM/hqdefault.jpg",
        "durationSec": 96
      },
      {
        "youtubeVideoId": "5VZRiyT9s8g",
        "title": "MrBeast Lab Ep 2: Nightmare Fuel",
        "sourceChannelId": "UCZzvDDvaYti8Dd8bLEiSoyQ",
        "sourceChannelTitle": "Beast Animations",
        "thumbnailUrl": "https://i.ytimg.com/vi/5VZRiyT9s8g/hqdefault.jpg",
        "durationSec": 589
      },
      {
        "youtubeVideoId": "dk_z_jUzck4",
        "title": "Sinsmas Sweaters, Advent Calendar & More",
        "sourceChannelId": "UCzfyYtgvkx5mLy8nlLlayYg",
        "sourceChannelTitle": "Vivziepop",
        "thumbnailUrl": "https://i.ytimg.com/vi/dk_z_jUzck4/hqdefault.jpg",
        "durationSec": 76
      },
      {
        "youtubeVideoId": "MUH2-HSFwAs",
        "title": "The DARK truth about living in AFRICA ",
        "sourceChannelId": "UC_m-6n6uGAM0K_qPRzGqDaw",
        "sourceChannelTitle": "NAITWAFREDDY ",
        "thumbnailUrl": "https://i.ytimg.com/vi/MUH2-HSFwAs/hqdefault.jpg",
        "durationSec": 1373
      },
      {
        "youtubeVideoId": "VzEyH3XF9u0",
        "title": "Music Saved My Life",
        "sourceChannelId": "UCAjgxh6TBT_mKBjKGDC6g_Q",
        "sourceChannelTitle": "Jaicemations",
        "thumbnailUrl": "https://i.ytimg.com/vi/VzEyH3XF9u0/hqdefault.jpg",
        "durationSec": 678
      },
      {
        "youtubeVideoId": "oD93kl_aoJ4",
        "title": "Being the \"African Kid\" at school",
        "sourceChannelId": "UCWifGU19tH1hkUiiVnWRAOA",
        "sourceChannelTitle": "AFarParadice",
        "thumbnailUrl": "https://i.ytimg.com/vi/oD93kl_aoJ4/hqdefault.jpg",
        "durationSec": 368
      },
      {
        "youtubeVideoId": "QCZjNqtnGmM",
        "title": "The Dark Age - Animator vs. Animation 14",
        "sourceChannelId": "UCbKWv2x9t6u8yZoB3KcPtnw",
        "sourceChannelTitle": "Alan Becker",
        "thumbnailUrl": "https://i.ytimg.com/vi/QCZjNqtnGmM/hqdefault.jpg",
        "durationSec": 1129
      },
      {
        "youtubeVideoId": "I6lNOind-vc",
        "title": "Robots On The Moon",
        "sourceChannelId": "UCQF0f62JXnfFSxKDmN8SDUg",
        "sourceChannelTitle": "SolarBalls",
        "thumbnailUrl": "https://i.ytimg.com/vi/I6lNOind-vc/hqdefault.jpg",
        "durationSec": 545
      },
      {
        "youtubeVideoId": "RCZaxYrKb30",
        "title": "BIGTOP BURGER: HEAVISIDE",
        "sourceChannelId": "UCxXu9tCU63mF1ntk89XPkzA",
        "sourceChannelTitle": "Worthikids",
        "thumbnailUrl": "https://i.ytimg.com/vi/RCZaxYrKb30/hqdefault.jpg",
        "durationSec": 265
      },
      {
        "youtubeVideoId": "pJ8ikZFCegA",
        "title": "The Book of DANIEL | Episode 04 PRAYER | WHHW: An Animated Bible Series | Daniel 2:13-25",
        "sourceChannelId": "UC8hmxmZq7HwS_-tSkNi_n9A",
        "sourceChannelTitle": "WHAT HAD HAPPENED WAS ",
        "thumbnailUrl": "https://i.ytimg.com/vi/pJ8ikZFCegA/hqdefault.jpg",
        "durationSec": 525
      },
      {
        "youtubeVideoId": "JyTKDk-rNr0",
        "title": "Something About Resident Evil Requiem ANIMATED 🧟🧟",
        "sourceChannelId": "UCLFXk9J3O-hhOk0msOjKYdQ",
        "sourceChannelTitle": "TerminalMontage",
        "thumbnailUrl": "https://i.ytimg.com/vi/JyTKDk-rNr0/hqdefault.jpg",
        "durationSec": 822
      },
      {
        "youtubeVideoId": "l6tnLyo1q34",
        "title": "Choose Goose Has What You Need! 🛍️🪿 Adventure Time | Cartoon Network",
        "sourceChannelId": "UCMsgXPD3wzzt8RxHJmXH7hQ",
        "sourceChannelTitle": "Cartoon Network",
        "thumbnailUrl": "https://i.ytimg.com/vi/l6tnLyo1q34/hqdefault.jpg",
        "durationSec": 507
      },
      {
        "youtubeVideoId": "v7MPgNivwYo",
        "title": "ＳＣＡＲＹ",
        "sourceChannelId": "UCWXCrItCF6ZgXrdozUS-Idw",
        "sourceChannelTitle": "ExplosmEntertainment",
        "thumbnailUrl": "https://i.ytimg.com/vi/v7MPgNivwYo/hqdefault.jpg",
        "durationSec": 2216
      },
      {
        "youtubeVideoId": "JlgsuGa8y2o",
        "title": "Peachrooms",
        "sourceChannelId": "UCCn62cYVpl0e_GN-yo1H9yQ",
        "sourceChannelTitle": "mashed",
        "thumbnailUrl": "https://i.ytimg.com/vi/JlgsuGa8y2o/hqdefault.jpg",
        "durationSec": 508
      },
      {
        "youtubeVideoId": "IuosV-TRxDU",
        "title": "Hexed | Tickets On Sale",
        "sourceChannelId": "UC_976xMxPgzIa290Hqtk-9g",
        "sourceChannelTitle": "Walt Disney Animation Studios",
        "thumbnailUrl": "https://i.ytimg.com/vi/IuosV-TRxDU/hqdefault.jpg",
        "durationSec": 104
      },
      {
        "youtubeVideoId": "urOLyaWVDvk",
        "title": "FORTUNE TELLERS INC - Animation Short Film 2026 - GOBELINS",
        "sourceChannelId": "UC-vrN89jIox3XqAKbEMeFgQ",
        "sourceChannelTitle": "GOBELINS Paris",
        "thumbnailUrl": "https://i.ytimg.com/vi/urOLyaWVDvk/hqdefault.jpg",
        "durationSec": 422
      },
      {
        "youtubeVideoId": "4-sO_dp1fkE",
        "title": "KNIGHTS OF GUINEVERE - EPISODE 2 (TRAILER)",
        "sourceChannelId": "UCn_FAXem2-e3HQvmK-mOH4g",
        "sourceChannelTitle": "GLITCH",
        "thumbnailUrl": "https://i.ytimg.com/vi/4-sO_dp1fkE/hqdefault.jpg",
        "durationSec": 63
      },
      {
        "youtubeVideoId": "F8zqVO8UqTM",
        "title": "[Animation] I’ll Start Tomorrow...",
        "sourceChannelId": "UCsOav-uzO3ENpoft3VnDIeQ",
        "sourceChannelTitle": "SkyeWei",
        "thumbnailUrl": "https://i.ytimg.com/vi/F8zqVO8UqTM/hqdefault.jpg",
        "durationSec": 265
      },
      {
        "youtubeVideoId": "tycyv2eoOaU",
        "title": "MrBeast Lab Ep 1: Monster Invasion",
        "sourceChannelId": "UCZzvDDvaYti8Dd8bLEiSoyQ",
        "sourceChannelTitle": "Beast Animations",
        "thumbnailUrl": "https://i.ytimg.com/vi/tycyv2eoOaU/hqdefault.jpg",
        "durationSec": 1538
      },
      {
        "youtubeVideoId": "enjfF0TDFy8",
        "title": "Merry Sinsmas From Helluva Boss!",
        "sourceChannelId": "UCzfyYtgvkx5mLy8nlLlayYg",
        "sourceChannelTitle": "Vivziepop",
        "thumbnailUrl": "https://i.ytimg.com/vi/enjfF0TDFy8/hqdefault.jpg",
        "durationSec": 160
      },
      {
        "youtubeVideoId": "3cK8lSxLMHA",
        "title": "Lucid dreaming changed my life (animated)",
        "sourceChannelId": "UC_m-6n6uGAM0K_qPRzGqDaw",
        "sourceChannelTitle": "NAITWAFREDDY ",
        "thumbnailUrl": "https://i.ytimg.com/vi/3cK8lSxLMHA/hqdefault.jpg",
        "durationSec": 862
      },
      {
        "youtubeVideoId": "NJPY_nUvdl8",
        "title": "The Time A Math Game Took Over My School",
        "sourceChannelId": "UCAjgxh6TBT_mKBjKGDC6g_Q",
        "sourceChannelTitle": "Jaicemations",
        "thumbnailUrl": "https://i.ytimg.com/vi/NJPY_nUvdl8/hqdefault.jpg",
        "durationSec": 485
      },
      {
        "youtubeVideoId": "3nYUhiZquMY",
        "title": "What College Is ACTUALLY Like",
        "sourceChannelId": "UCWifGU19tH1hkUiiVnWRAOA",
        "sourceChannelTitle": "AFarParadice",
        "thumbnailUrl": "https://i.ytimg.com/vi/3nYUhiZquMY/hqdefault.jpg",
        "durationSec": 492
      },
      {
        "youtubeVideoId": "FcQlQAs5EDM",
        "title": "Creeper Clan - Animation vs. Minecraft Shorts Ep 40",
        "sourceChannelId": "UCbKWv2x9t6u8yZoB3KcPtnw",
        "sourceChannelTitle": "Alan Becker",
        "thumbnailUrl": "https://i.ytimg.com/vi/FcQlQAs5EDM/hqdefault.jpg",
        "durationSec": 734
      },
      {
        "youtubeVideoId": "IKA3xzGfqsI",
        "title": "Other planets have SEASONS?!",
        "sourceChannelId": "UCQF0f62JXnfFSxKDmN8SDUg",
        "sourceChannelTitle": "SolarBalls",
        "thumbnailUrl": "https://i.ytimg.com/vi/IKA3xzGfqsI/hqdefault.jpg",
        "durationSec": 498
      },
      {
        "youtubeVideoId": "iTTumugS9ys",
        "title": "BIGTOP BURGER: FACELESS",
        "sourceChannelId": "UCxXu9tCU63mF1ntk89XPkzA",
        "sourceChannelTitle": "Worthikids",
        "thumbnailUrl": "https://i.ytimg.com/vi/iTTumugS9ys/hqdefault.jpg",
        "durationSec": 290
      },
      {
        "youtubeVideoId": "3Ct5UZvXJIo",
        "title": "The Book of DANIEL | Episode 03 NIGHTMARE | WHHW: An Animated Bible Series | Daniel 2:1-13",
        "sourceChannelId": "UC8hmxmZq7HwS_-tSkNi_n9A",
        "sourceChannelTitle": "WHAT HAD HAPPENED WAS ",
        "thumbnailUrl": "https://i.ytimg.com/vi/3Ct5UZvXJIo/hqdefault.jpg",
        "durationSec": 581
      },
      {
        "youtubeVideoId": "nY3KX4nYujU",
        "title": "Something About Pokemon Champions ANIMATED - MASTER RANK BATTLE",
        "sourceChannelId": "UCLFXk9J3O-hhOk0msOjKYdQ",
        "sourceChannelTitle": "TerminalMontage",
        "thumbnailUrl": "https://i.ytimg.com/vi/nY3KX4nYujU/hqdefault.jpg",
        "durationSec": 314
      },
      {
        "youtubeVideoId": "ChNXR50ru8A",
        "title": "Artist's Block 🎨 | Regular Show: The Lost Tapes | Cartoon Network",
        "sourceChannelId": "UCMsgXPD3wzzt8RxHJmXH7hQ",
        "sourceChannelTitle": "Cartoon Network",
        "thumbnailUrl": "https://i.ytimg.com/vi/ChNXR50ru8A/hqdefault.jpg",
        "durationSec": 247
      },
      {
        "youtubeVideoId": "cE-wDybo1sw",
        "title": "America's Next Top Cryptid - PILOT",
        "sourceChannelId": "UCWXCrItCF6ZgXrdozUS-Idw",
        "sourceChannelTitle": "ExplosmEntertainment",
        "thumbnailUrl": "https://i.ytimg.com/vi/cE-wDybo1sw/hqdefault.jpg",
        "durationSec": 656
      },
      {
        "youtubeVideoId": "KXO21xZdUaM",
        "title": "Hexed | Official Trailer",
        "sourceChannelId": "UC_976xMxPgzIa290Hqtk-9g",
        "sourceChannelTitle": "Walt Disney Animation Studios",
        "thumbnailUrl": "https://i.ytimg.com/vi/KXO21xZdUaM/hqdefault.jpg",
        "durationSec": 145
      },
      {
        "youtubeVideoId": "041lqaXwOs0",
        "title": "OUTWILDED - Animation Short Film 2026 - GOBELINS",
        "sourceChannelId": "UC-vrN89jIox3XqAKbEMeFgQ",
        "sourceChannelTitle": "GOBELINS Paris",
        "thumbnailUrl": "https://i.ytimg.com/vi/041lqaXwOs0/hqdefault.jpg",
        "durationSec": 384
      },
      {
        "youtubeVideoId": "hfT8prJy7ZQ",
        "title": "The Art of The Amazing Digital Circus",
        "sourceChannelId": "UCn_FAXem2-e3HQvmK-mOH4g",
        "sourceChannelTitle": "GLITCH",
        "thumbnailUrl": "https://i.ytimg.com/vi/hfT8prJy7ZQ/hqdefault.jpg",
        "durationSec": 179
      },
      {
        "youtubeVideoId": "m20bnGPz17c",
        "title": "How I Animate By Myself - Full process explained!",
        "sourceChannelId": "UCsOav-uzO3ENpoft3VnDIeQ",
        "sourceChannelTitle": "SkyeWei",
        "thumbnailUrl": "https://i.ytimg.com/vi/m20bnGPz17c/hqdefault.jpg",
        "durationSec": 232
      },
      {
        "youtubeVideoId": "3IVslEdL6aQ",
        "title": "I Spent $7,000,000 On My Animated Series",
        "sourceChannelId": "UCZzvDDvaYti8Dd8bLEiSoyQ",
        "sourceChannelTitle": "Beast Animations",
        "thumbnailUrl": "https://i.ytimg.com/vi/3IVslEdL6aQ/hqdefault.jpg",
        "durationSec": 260
      },
      {
        "youtubeVideoId": "trxotfGUCEA",
        "title": "Stolas Reads Horror Fiction Starring YOU",
        "sourceChannelId": "UCzfyYtgvkx5mLy8nlLlayYg",
        "sourceChannelTitle": "Vivziepop",
        "thumbnailUrl": "https://i.ytimg.com/vi/trxotfGUCEA/hqdefault.jpg",
        "durationSec": 140
      },
      {
        "youtubeVideoId": "0j1nIsaitNc",
        "title": "ONE girl DESTROYED my friend group 4",
        "sourceChannelId": "UC_m-6n6uGAM0K_qPRzGqDaw",
        "sourceChannelTitle": "NAITWAFREDDY ",
        "thumbnailUrl": "https://i.ytimg.com/vi/0j1nIsaitNc/hqdefault.jpg",
        "durationSec": 952
      },
      {
        "youtubeVideoId": "CIDJlmWpPSg",
        "title": "How I Got My Girl Back 2",
        "sourceChannelId": "UCAjgxh6TBT_mKBjKGDC6g_Q",
        "sourceChannelTitle": "Jaicemations",
        "thumbnailUrl": "https://i.ytimg.com/vi/CIDJlmWpPSg/hqdefault.jpg",
        "durationSec": 589
      },
      {
        "youtubeVideoId": "w1IZFcVLWlw",
        "title": "How To Get CHEATED On",
        "sourceChannelId": "UCWifGU19tH1hkUiiVnWRAOA",
        "sourceChannelTitle": "AFarParadice",
        "thumbnailUrl": "https://i.ytimg.com/vi/w1IZFcVLWlw/hqdefault.jpg",
        "durationSec": 492
      },
      {
        "youtubeVideoId": "l6WeJ9JqDfU",
        "title": "The Machine - Animator vs. Animation 13",
        "sourceChannelId": "UCbKWv2x9t6u8yZoB3KcPtnw",
        "sourceChannelTitle": "Alan Becker",
        "thumbnailUrl": "https://i.ytimg.com/vi/l6WeJ9JqDfU/hqdefault.jpg",
        "durationSec": 1097
      },
      {
        "youtubeVideoId": "_AuqbEzFA40",
        "title": "What's Going On with the Earth?!",
        "sourceChannelId": "UCQF0f62JXnfFSxKDmN8SDUg",
        "sourceChannelTitle": "SolarBalls",
        "thumbnailUrl": "https://i.ytimg.com/vi/_AuqbEzFA40/hqdefault.jpg",
        "durationSec": 499
      },
      {
        "youtubeVideoId": "iuv_15Z67PE",
        "title": "BIGTOP BURGER: VENEZIA",
        "sourceChannelId": "UCxXu9tCU63mF1ntk89XPkzA",
        "sourceChannelTitle": "Worthikids",
        "thumbnailUrl": "https://i.ytimg.com/vi/iuv_15Z67PE/hqdefault.jpg",
        "durationSec": 337
      },
      {
        "youtubeVideoId": "kIVbfmU8NFA",
        "title": "The Book of DANIEL | Episode 02 CHALLENGE | WHHW: An Animated Bible Series | Daniel 1:15-21",
        "sourceChannelId": "UC8hmxmZq7HwS_-tSkNi_n9A",
        "sourceChannelTitle": "WHAT HAD HAPPENED WAS ",
        "thumbnailUrl": "https://i.ytimg.com/vi/kIVbfmU8NFA/hqdefault.jpg",
        "durationSec": 443
      },
      {
        "youtubeVideoId": "4K6KgNQkFlE",
        "title": "Something About Bomberman 64 💣💥ANIMATED!",
        "sourceChannelId": "UCLFXk9J3O-hhOk0msOjKYdQ",
        "sourceChannelTitle": "TerminalMontage",
        "thumbnailUrl": "https://i.ytimg.com/vi/4K6KgNQkFlE/hqdefault.jpg",
        "durationSec": 373
      },
      {
        "youtubeVideoId": "HWeriY9kB3g",
        "title": "The Creepiest Terror Tales of the Park 👻🎃 The Regular Show | Cartoon Network",
        "sourceChannelId": "UCMsgXPD3wzzt8RxHJmXH7hQ",
        "sourceChannelTitle": "Cartoon Network",
        "thumbnailUrl": "https://i.ytimg.com/vi/HWeriY9kB3g/hqdefault.jpg",
        "durationSec": 1121
      },
      {
        "youtubeVideoId": "q0FhdX_uu-E",
        "title": "Stolas vs Blitz: Who Is Right?",
        "sourceChannelId": "UCzfyYtgvkx5mLy8nlLlayYg",
        "sourceChannelTitle": "Vivziepop",
        "thumbnailUrl": "https://i.ytimg.com/vi/q0FhdX_uu-E/hqdefault.jpg",
        "durationSec": 154
      },
      {
        "youtubeVideoId": "-MV7Hg31usU",
        "title": "The Aether - Animation vs. Minecraft Shorts Ep 39",
        "sourceChannelId": "UCbKWv2x9t6u8yZoB3KcPtnw",
        "sourceChannelTitle": "Alan Becker",
        "thumbnailUrl": "https://i.ytimg.com/vi/-MV7Hg31usU/hqdefault.jpg",
        "durationSec": 764
      },
      {
        "youtubeVideoId": "E7Ejus_AoIY",
        "title": "BIGTOP BURGER: OVEN",
        "sourceChannelId": "UCxXu9tCU63mF1ntk89XPkzA",
        "sourceChannelTitle": "Worthikids",
        "thumbnailUrl": "https://i.ytimg.com/vi/E7Ejus_AoIY/hqdefault.jpg",
        "durationSec": 310
      },
      {
        "youtubeVideoId": "0WY7Y_Hierc",
        "title": "Something About Sonic Racing: CrossWorlds x Mega Man ANIMATED! 🏎️",
        "sourceChannelId": "UCLFXk9J3O-hhOk0msOjKYdQ",
        "sourceChannelTitle": "TerminalMontage",
        "thumbnailUrl": "https://i.ytimg.com/vi/0WY7Y_Hierc/hqdefault.jpg",
        "durationSec": 246
      },
      {
        "youtubeVideoId": "brWNC87c3Ac",
        "title": "The Lich Is Too Evil for Ooo 🦹‍♂️☠️ Adventure Time | Cartoon Network",
        "sourceChannelId": "UCMsgXPD3wzzt8RxHJmXH7hQ",
        "sourceChannelTitle": "Cartoon Network",
        "thumbnailUrl": "https://i.ytimg.com/vi/brWNC87c3Ac/hqdefault.jpg",
        "durationSec": 1097
      }
    ]
  },
  "industry": {
    "categoryId": "industry",
    "categoryName": "Industry",
    "hue": 32,
    "builtAt": 1794347206006,
    "videos": [
      {
        "youtubeVideoId": "ZMf6mL9xehI",
        "title": "PARM（パルム）を大量生産するプロセス。「なめらかなアイス」と「口どけの良いチョコ」が同時にとけ合う、大人のための上質なバーアイス。",
        "sourceChannelId": "UChZgikssAJkmiQOv_sO-ngQ",
        "sourceChannelTitle": "プロセスX",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZMf6mL9xehI/hqdefault.jpg",
        "durationSec": 1107
      },
      {
        "youtubeVideoId": "l5eLV1zblvA",
        "title": "Inside a Factory Mass Producing Laminated Bread",
        "sourceChannelId": "UC-b5z1biw_Qra-eOfC4kuqQ",
        "sourceChannelTitle": "Miracle Process",
        "thumbnailUrl": "https://i.ytimg.com/vi/l5eLV1zblvA/hqdefault.jpg",
        "durationSec": 948
      },
      {
        "youtubeVideoId": "mrlx7CN6sUA",
        "title": "Funny Instagram vid deeeze haha breakfast MDB styles",
        "sourceChannelId": "UCNP1mwtQKwZ2At6QRkJk4tw",
        "sourceChannelTitle": "FACTORYmonster",
        "thumbnailUrl": "https://i.ytimg.com/vi/mrlx7CN6sUA/hqdefault.jpg",
        "durationSec": 890
      },
      {
        "youtubeVideoId": "C626UsA5m3U",
        "title": "Vietnam Bag Mass Production Factory Running Hundreds of Sewing Machines Nonstop",
        "sourceChannelId": "UCSNIT8Z40XgB4RKk9Vhf1eA",
        "sourceChannelTitle": "All process of world",
        "thumbnailUrl": "https://i.ytimg.com/vi/C626UsA5m3U/hqdefault.jpg",
        "durationSec": 774
      },
      {
        "youtubeVideoId": "g1ObfIJ9iHY",
        "title": "Awesome Process Live Stream",
        "sourceChannelId": "UCB9PwFQwTg9ig42xwKsfSEg",
        "sourceChannelTitle": "Awesome Process",
        "thumbnailUrl": "https://i.ytimg.com/vi/g1ObfIJ9iHY/hqdefault.jpg",
        "durationSec": 1185
      },
      {
        "youtubeVideoId": "0r9FLr9Quhw",
        "title": "How Korea Builds Miniature Bullet Trains from Real Train Blueprints",
        "sourceChannelId": "UCbW5tOCMJcgGGK6YtVqCLuA",
        "sourceChannelTitle": "king process",
        "thumbnailUrl": "https://i.ytimg.com/vi/0r9FLr9Quhw/hqdefault.jpg",
        "durationSec": 641
      },
      {
        "youtubeVideoId": "sJ2njpdz6AM",
        "title": "CNC Machining an Aston Martin",
        "sourceChannelId": "UCc2lUKVOTXKlQR7Fm7h1JfQ",
        "sourceChannelTitle": "TITANS of CNC MACHINING",
        "thumbnailUrl": "https://i.ytimg.com/vi/sJ2njpdz6AM/hqdefault.jpg",
        "durationSec": 1489
      },
      {
        "youtubeVideoId": "BuRyQYf03xA",
        "title": "My dog won't stay out of mud so I made this...",
        "sourceChannelId": "UCj1VqrHhDte54oLgPG4xpuQ",
        "sourceChannelTitle": "Stuff Made Here",
        "thumbnailUrl": "https://i.ytimg.com/vi/BuRyQYf03xA/hqdefault.jpg",
        "durationSec": 1008
      },
      {
        "youtubeVideoId": "hksOKMqCqZs",
        "title": "Vampires?  I'M READY!",
        "sourceChannelId": "UC5NO8MgTQKHAWXp6z8Xl7yQ",
        "sourceChannelTitle": "This Old Tony",
        "thumbnailUrl": "https://i.ytimg.com/vi/hksOKMqCqZs/hqdefault.jpg",
        "durationSec": 1423
      },
      {
        "youtubeVideoId": "Sc9H0aCIrmU",
        "title": "Blown Head Gasket - Datsun 240Z Engine Restoration (Part 1)",
        "sourceChannelId": "UCMrMVIBtqFW6O0-MWq26gqw",
        "sourceChannelTitle": "my mechanics",
        "thumbnailUrl": "https://i.ytimg.com/vi/Sc9H0aCIrmU/hqdefault.jpg",
        "durationSec": 652
      },
      {
        "youtubeVideoId": "_CtsnmZFjVE",
        "title": "A Wedge-Style Hand Vise - Part 5 (Making the Jaw Ends & Final Assembly)",
        "sourceChannelId": "UCworsKCR-Sx6R6-BnIjS2MA",
        "sourceChannelTitle": "Clickspring",
        "thumbnailUrl": "https://i.ytimg.com/vi/_CtsnmZFjVE/hqdefault.jpg",
        "durationSec": 677
      },
      {
        "youtubeVideoId": "2XR7pX45LFw",
        "title": "Suction Nozzle Repair for Industrial Water Pump",
        "sourceChannelId": "UCw3UZn1tcVe7pH3R6C3Gcng",
        "sourceChannelTitle": "Abom79",
        "thumbnailUrl": "https://i.ytimg.com/vi/2XR7pX45LFw/hqdefault.jpg",
        "durationSec": 983
      },
      {
        "youtubeVideoId": "NoVq4BieIDI",
        "title": "Our Monster Megabore Lathe Gets Put to Work! | CAT 777F Hub Repair",
        "sourceChannelId": "UC2wdo5vU7bPBNzyC2nnwmNQ",
        "sourceChannelTitle": "Cutting Edge Engineering Australia",
        "thumbnailUrl": "https://i.ytimg.com/vi/NoVq4BieIDI/hqdefault.jpg",
        "durationSec": 1220
      },
      {
        "youtubeVideoId": "sxqa-V9rFSA",
        "title": "創業200年の神技！この世で最も美しい音色を奏でる「佐波理おりん」と日本の金属職人たち",
        "sourceChannelId": "UChZgikssAJkmiQOv_sO-ngQ",
        "sourceChannelTitle": "プロセスX",
        "thumbnailUrl": "https://i.ytimg.com/vi/sxqa-V9rFSA/hqdefault.jpg",
        "durationSec": 1493
      },
      {
        "youtubeVideoId": "10E4u59_5dg",
        "title": "How China Mass Produces Gel Pens Full Process",
        "sourceChannelId": "UC-b5z1biw_Qra-eOfC4kuqQ",
        "sourceChannelTitle": "Miracle Process",
        "thumbnailUrl": "https://i.ytimg.com/vi/10E4u59_5dg/hqdefault.jpg",
        "durationSec": 724
      },
      {
        "youtubeVideoId": "8eZ0fwmVj70",
        "title": "From sth Auckland to Minnesota haha MDBWORLDWIDE",
        "sourceChannelId": "UCNP1mwtQKwZ2At6QRkJk4tw",
        "sourceChannelTitle": "FACTORYmonster",
        "thumbnailUrl": "https://i.ytimg.com/vi/8eZ0fwmVj70/hqdefault.jpg",
        "durationSec": 866
      },
      {
        "youtubeVideoId": "8NgRwNFwArk",
        "title": "Process of Coconut Husks Becoming Walkway Mats. Vietnamese Coir Factory",
        "sourceChannelId": "UCSNIT8Z40XgB4RKk9Vhf1eA",
        "sourceChannelTitle": "All process of world",
        "thumbnailUrl": "https://i.ytimg.com/vi/8NgRwNFwArk/hqdefault.jpg",
        "durationSec": 1061
      },
      {
        "youtubeVideoId": "PEgGXzHBGVs",
        "title": "From Fallproof Ladders to Ladder Trucks for High Rise Moves! Amazing Korean Ladder Technology",
        "sourceChannelId": "UCbW5tOCMJcgGGK6YtVqCLuA",
        "sourceChannelTitle": "king process",
        "thumbnailUrl": "https://i.ytimg.com/vi/PEgGXzHBGVs/hqdefault.jpg",
        "durationSec": 917
      },
      {
        "youtubeVideoId": "RsQjRqgiatM",
        "title": "The Final Operation on Our MASSIVE Blisk",
        "sourceChannelId": "UCc2lUKVOTXKlQR7Fm7h1JfQ",
        "sourceChannelTitle": "TITANS of CNC MACHINING",
        "thumbnailUrl": "https://i.ytimg.com/vi/RsQjRqgiatM/hqdefault.jpg",
        "durationSec": 1355
      },
      {
        "youtubeVideoId": "RpslsMqPFWA",
        "title": "I made an apple peel itself",
        "sourceChannelId": "UCj1VqrHhDte54oLgPG4xpuQ",
        "sourceChannelTitle": "Stuff Made Here",
        "thumbnailUrl": "https://i.ytimg.com/vi/RpslsMqPFWA/hqdefault.jpg",
        "durationSec": 984
      },
      {
        "youtubeVideoId": "wyBkLyGWZyU",
        "title": "Magnets Aren't Always Right!",
        "sourceChannelId": "UC5NO8MgTQKHAWXp6z8Xl7yQ",
        "sourceChannelTitle": "This Old Tony",
        "thumbnailUrl": "https://i.ytimg.com/vi/wyBkLyGWZyU/hqdefault.jpg",
        "durationSec": 1170
      },
      {
        "youtubeVideoId": "24KolOaqA6Q",
        "title": "The Datsun 240Z Restoration So Far - 2.5 Years in One Video (Part 1-8)",
        "sourceChannelId": "UCMrMVIBtqFW6O0-MWq26gqw",
        "sourceChannelTitle": "my mechanics",
        "thumbnailUrl": "https://i.ytimg.com/vi/24KolOaqA6Q/hqdefault.jpg",
        "durationSec": 919
      },
      {
        "youtubeVideoId": "-Xchbq3PGZc",
        "title": "A Wedge-Style Hand Vise - Part 4 (Making the Vise Jaws)",
        "sourceChannelId": "UCworsKCR-Sx6R6-BnIjS2MA",
        "sourceChannelTitle": "Clickspring",
        "thumbnailUrl": "https://i.ytimg.com/vi/-Xchbq3PGZc/hqdefault.jpg",
        "durationSec": 1224
      },
      {
        "youtubeVideoId": "qn2DhXLKwN4",
        "title": "Thread Milling 3/4-10 with Conversational Programming",
        "sourceChannelId": "UCw3UZn1tcVe7pH3R6C3Gcng",
        "sourceChannelTitle": "Abom79",
        "thumbnailUrl": "https://i.ytimg.com/vi/qn2DhXLKwN4/hqdefault.jpg",
        "durationSec": 879
      },
      {
        "youtubeVideoId": "nAB85zQpzC4",
        "title": "In Loving Memory of Homey | 2012 ~ 2026",
        "sourceChannelId": "UC2wdo5vU7bPBNzyC2nnwmNQ",
        "sourceChannelTitle": "Cutting Edge Engineering Australia",
        "thumbnailUrl": "https://i.ytimg.com/vi/nAB85zQpzC4/hqdefault.jpg",
        "durationSec": 1402
      },
      {
        "youtubeVideoId": "888H_cEwueM",
        "title": "サメ水揚げから財布ができるまで！命を無駄なく生かす日本の職人",
        "sourceChannelId": "UChZgikssAJkmiQOv_sO-ngQ",
        "sourceChannelTitle": "プロセスX",
        "thumbnailUrl": "https://i.ytimg.com/vi/888H_cEwueM/hqdefault.jpg",
        "durationSec": 1225
      },
      {
        "youtubeVideoId": "SnutX0cu8LY",
        "title": "China’s Biggest Armored Door Factory: Real Footage",
        "sourceChannelId": "UC-b5z1biw_Qra-eOfC4kuqQ",
        "sourceChannelTitle": "Miracle Process",
        "thumbnailUrl": "https://i.ytimg.com/vi/SnutX0cu8LY/hqdefault.jpg",
        "durationSec": 1187
      },
      {
        "youtubeVideoId": "uraLpjKExdQ",
        "title": "BROWNHILL -ganja farmer live",
        "sourceChannelId": "UCNP1mwtQKwZ2At6QRkJk4tw",
        "sourceChannelTitle": "FACTORYmonster",
        "thumbnailUrl": "https://i.ytimg.com/vi/uraLpjKExdQ/hqdefault.jpg",
        "durationSec": 1351
      },
      {
        "youtubeVideoId": "JG8xOoSFHnI",
        "title": "Korea's First Premium Sheep Wool Comforter. Fluffy Bedding Mass Produced from Raw Fleece",
        "sourceChannelId": "UCSNIT8Z40XgB4RKk9Vhf1eA",
        "sourceChannelTitle": "All process of world",
        "thumbnailUrl": "https://i.ytimg.com/vi/JG8xOoSFHnI/hqdefault.jpg",
        "durationSec": 1031
      },
      {
        "youtubeVideoId": "NpeA-fnhKKQ",
        "title": "A Man Making Glass Bottles in Stifling Heat",
        "sourceChannelId": "UCbW5tOCMJcgGGK6YtVqCLuA",
        "sourceChannelTitle": "king process",
        "thumbnailUrl": "https://i.ytimg.com/vi/NpeA-fnhKKQ/hqdefault.jpg",
        "durationSec": 1176
      },
      {
        "youtubeVideoId": "95ovLUV9LRY",
        "title": "Have you ever seen 3D Printing like this?",
        "sourceChannelId": "UCc2lUKVOTXKlQR7Fm7h1JfQ",
        "sourceChannelTitle": "TITANS of CNC MACHINING",
        "thumbnailUrl": "https://i.ytimg.com/vi/95ovLUV9LRY/hqdefault.jpg",
        "durationSec": 824
      },
      {
        "youtubeVideoId": "2OfjZ3ORJfc",
        "title": "Robot golf vs holes that keep getting harder",
        "sourceChannelId": "UCj1VqrHhDte54oLgPG4xpuQ",
        "sourceChannelTitle": "Stuff Made Here",
        "thumbnailUrl": "https://i.ytimg.com/vi/2OfjZ3ORJfc/hqdefault.jpg",
        "durationSec": 1494
      },
      {
        "youtubeVideoId": "ThSLfcZfS8A",
        "title": "Advanced Welding For Dummies!",
        "sourceChannelId": "UC5NO8MgTQKHAWXp6z8Xl7yQ",
        "sourceChannelTitle": "This Old Tony",
        "thumbnailUrl": "https://i.ytimg.com/vi/ThSLfcZfS8A/hqdefault.jpg",
        "durationSec": 986
      },
      {
        "youtubeVideoId": "PasrD1id2r4",
        "title": "Filthy Datsun 240Z Differential",
        "sourceChannelId": "UCMrMVIBtqFW6O0-MWq26gqw",
        "sourceChannelTitle": "my mechanics",
        "thumbnailUrl": "https://i.ytimg.com/vi/PasrD1id2r4/hqdefault.jpg",
        "durationSec": 1484
      },
      {
        "youtubeVideoId": "ZJHWZqEYkM0",
        "title": "A Wedge-Style Hand Vise - Part 3 (Making the Springs & Fasteners)",
        "sourceChannelId": "UCworsKCR-Sx6R6-BnIjS2MA",
        "sourceChannelTitle": "Clickspring",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZJHWZqEYkM0/hqdefault.jpg",
        "durationSec": 624
      },
      {
        "youtubeVideoId": "kp-NvPwGbKQ",
        "title": "Turning Welding Table Leg Extensions",
        "sourceChannelId": "UCw3UZn1tcVe7pH3R6C3Gcng",
        "sourceChannelTitle": "Abom79",
        "thumbnailUrl": "https://i.ytimg.com/vi/kp-NvPwGbKQ/hqdefault.jpg",
        "durationSec": 1444
      },
      {
        "youtubeVideoId": "xbSiqMQ6qhc",
        "title": "This Excavator Is the Gift That Keeps on Giving! | Hitachi ZX225",
        "sourceChannelId": "UC2wdo5vU7bPBNzyC2nnwmNQ",
        "sourceChannelTitle": "Cutting Edge Engineering Australia",
        "thumbnailUrl": "https://i.ytimg.com/vi/xbSiqMQ6qhc/hqdefault.jpg",
        "durationSec": 1305
      },
      {
        "youtubeVideoId": "H9TM5ObQrPU",
        "title": "さば照焼を大量生産するプロセス。毎月２００トンのさばを捌く！日本最高のさば工場。",
        "sourceChannelId": "UChZgikssAJkmiQOv_sO-ngQ",
        "sourceChannelTitle": "プロセスX",
        "thumbnailUrl": "https://i.ytimg.com/vi/H9TM5ObQrPU/hqdefault.jpg",
        "durationSec": 1060
      }
    ]
  },
  "documentaries": {
    "categoryId": "documentaries",
    "categoryName": "Documentaries",
    "hue": 215,
    "builtAt": 1794338232065,
    "videos": [
      {
        "youtubeVideoId": "AbJqhYqB5ZY",
        "title": "How a Self-taught Designer became a Billionaire Presidential Tailor",
        "sourceChannelId": "UCWAqXzY2MLxYUf8qVFuJedg",
        "sourceChannelTitle": "Theniyifagbemi",
        "thumbnailUrl": "https://i.ytimg.com/vi/AbJqhYqB5ZY/hqdefault.jpg",
        "durationSec": 1042
      },
      {
        "youtubeVideoId": "uSv41lZbBxA",
        "title": "Scientists Finally Know Why Japan’s 2011 Tsunami Was So Big",
        "sourceChannelId": "UCWBtLCE-BnzZx3DneqDiXWQ",
        "sourceChannelTitle": "Astrum Earth",
        "thumbnailUrl": "https://i.ytimg.com/vi/uSv41lZbBxA/hqdefault.jpg",
        "durationSec": 1803
      },
      {
        "youtubeVideoId": "XfXdF53wtBE",
        "title": "THE FIRST SECOND: Official Trailer",
        "sourceChannelId": "UCR9sFzaG9Ia_kXJhfxtFMBA",
        "sourceChannelTitle": "melodysheep",
        "thumbnailUrl": "https://i.ytimg.com/vi/XfXdF53wtBE/hqdefault.jpg",
        "durationSec": 127
      },
      {
        "youtubeVideoId": "Y1-dGM4S0QU",
        "title": "i exposed China’s largest illegal fake luxury market… this is the truth",
        "sourceChannelId": "UC4lH-odQ5ll-85fkpWxDYmA",
        "sourceChannelTitle": "Steven Ndukwu",
        "thumbnailUrl": "https://i.ytimg.com/vi/Y1-dGM4S0QU/hqdefault.jpg",
        "durationSec": 1592
      },
      {
        "youtubeVideoId": "dvmNgQOk56g",
        "title": "When Hurricanes Destroy Everything | Inside the World's Worst Storms | Free Documentary",
        "sourceChannelId": "UCijcd0GR0fkxCAZwkiuWqtQ",
        "sourceChannelTitle": "Free Documentary",
        "thumbnailUrl": "https://i.ytimg.com/vi/dvmNgQOk56g/hqdefault.jpg",
        "durationSec": 3059
      },
      {
        "youtubeVideoId": "0Zc_6xB5W3Y",
        "title": "How Gyroscopes Got So Small",
        "sourceChannelId": "UClZbmi9JzfnB2CEb0fG8iew",
        "sourceChannelTitle": "Primal Space",
        "thumbnailUrl": "https://i.ytimg.com/vi/0Zc_6xB5W3Y/hqdefault.jpg",
        "durationSec": 541
      },
      {
        "youtubeVideoId": "gi1ivBzadTs",
        "title": "Inside the World’s Biggest Stage | Friedrichstadt-Palast Secrets! | WELT Documentary",
        "sourceChannelId": "UCBAeFXaLV1ZqKqc-Uf3pKaA",
        "sourceChannelTitle": "WELT Documentary",
        "thumbnailUrl": "https://i.ytimg.com/vi/gi1ivBzadTs/hqdefault.jpg",
        "durationSec": 3039
      },
      {
        "youtubeVideoId": "IaBqHbUG7y0",
        "title": "Inside Nigeria's Forgotten Oil City | Warri 🇳🇬",
        "sourceChannelId": "UCWAqXzY2MLxYUf8qVFuJedg",
        "sourceChannelTitle": "Theniyifagbemi",
        "thumbnailUrl": "https://i.ytimg.com/vi/IaBqHbUG7y0/hqdefault.jpg",
        "durationSec": 935
      },
      {
        "youtubeVideoId": "pnTf2uwQYzE",
        "title": "Nature Is Full of Real Zombies, and a Third of Us Are Infected",
        "sourceChannelId": "UCWBtLCE-BnzZx3DneqDiXWQ",
        "sourceChannelTitle": "Astrum Earth",
        "thumbnailUrl": "https://i.ytimg.com/vi/pnTf2uwQYzE/hqdefault.jpg",
        "durationSec": 1744
      },
      {
        "youtubeVideoId": "QTQVZuBV9oA",
        "title": "TIMELAPSE OF THE UNIVERSE:  13 Billion Years in 10 Minutes • Updated and Remastered",
        "sourceChannelId": "UCR9sFzaG9Ia_kXJhfxtFMBA",
        "sourceChannelTitle": "melodysheep",
        "thumbnailUrl": "https://i.ytimg.com/vi/QTQVZuBV9oA/hqdefault.jpg",
        "durationSec": 697
      },
      {
        "youtubeVideoId": "nL8BW8baybk",
        "title": "i tested China’s futuristic flying transport systems EP. 6",
        "sourceChannelId": "UC4lH-odQ5ll-85fkpWxDYmA",
        "sourceChannelTitle": "Steven Ndukwu",
        "thumbnailUrl": "https://i.ytimg.com/vi/nL8BW8baybk/hqdefault.jpg",
        "durationSec": 1322
      },
      {
        "youtubeVideoId": "347FNmhBVLM",
        "title": "3,300 Women, Just 20 Guards | Inside the Philippines' Largest Women's Prison | Free Documentary",
        "sourceChannelId": "UCijcd0GR0fkxCAZwkiuWqtQ",
        "sourceChannelTitle": "Free Documentary",
        "thumbnailUrl": "https://i.ytimg.com/vi/347FNmhBVLM/hqdefault.jpg",
        "durationSec": 5440
      },
      {
        "youtubeVideoId": "lXvTnzTXmK8",
        "title": "The Cable That Changed The World",
        "sourceChannelId": "UClZbmi9JzfnB2CEb0fG8iew",
        "sourceChannelTitle": "Primal Space",
        "thumbnailUrl": "https://i.ytimg.com/vi/lXvTnzTXmK8/hqdefault.jpg",
        "durationSec": 651
      },
      {
        "youtubeVideoId": "8DkmlhGKlqQ",
        "title": "NATO TIGER MEET: How European Tornado Crews Train for Combat | Full Documentary",
        "sourceChannelId": "UCBAeFXaLV1ZqKqc-Uf3pKaA",
        "sourceChannelTitle": "WELT Documentary",
        "thumbnailUrl": "https://i.ytimg.com/vi/8DkmlhGKlqQ/hqdefault.jpg",
        "durationSec": 2631
      },
      {
        "youtubeVideoId": "z6Zi4k-biac",
        "title": "The Part of Nigeria They Don't Want You to See 😳 (Nobody Visits here |Taraba State 🇳🇬)",
        "sourceChannelId": "UCWAqXzY2MLxYUf8qVFuJedg",
        "sourceChannelTitle": "Theniyifagbemi",
        "thumbnailUrl": "https://i.ytimg.com/vi/z6Zi4k-biac/hqdefault.jpg",
        "durationSec": 1553
      },
      {
        "youtubeVideoId": "Nh67EuF6wxQ",
        "title": "The Only Place You Can Walk On Earth's Mantle",
        "sourceChannelId": "UCWBtLCE-BnzZx3DneqDiXWQ",
        "sourceChannelTitle": "Astrum Earth",
        "thumbnailUrl": "https://i.ytimg.com/vi/Nh67EuF6wxQ/hqdefault.jpg",
        "durationSec": 1764
      },
      {
        "youtubeVideoId": "SGxz4LQfRpo",
        "title": "ARTEMIS II:  A Visual Masterpiece.  8K Cinematic Supercut",
        "sourceChannelId": "UCR9sFzaG9Ia_kXJhfxtFMBA",
        "sourceChannelTitle": "melodysheep",
        "thumbnailUrl": "https://i.ytimg.com/vi/SGxz4LQfRpo/hqdefault.jpg",
        "durationSec": 491
      },
      {
        "youtubeVideoId": "mIy20iHmOZE",
        "title": "China built a city inside a mountain that defies logic EP. 3",
        "sourceChannelId": "UC4lH-odQ5ll-85fkpWxDYmA",
        "sourceChannelTitle": "Steven Ndukwu",
        "thumbnailUrl": "https://i.ytimg.com/vi/mIy20iHmOZE/hqdefault.jpg",
        "durationSec": 887
      },
      {
        "youtubeVideoId": "H4jRIXwVDKs",
        "title": "The Ayoreo People | Paraguay: Fighting to Remain Uncontacted | Free Documentary",
        "sourceChannelId": "UCijcd0GR0fkxCAZwkiuWqtQ",
        "sourceChannelTitle": "Free Documentary",
        "thumbnailUrl": "https://i.ytimg.com/vi/H4jRIXwVDKs/hqdefault.jpg",
        "durationSec": 1322
      },
      {
        "youtubeVideoId": "FYrNZgZxICU",
        "title": "The Weird Evolution of Trees",
        "sourceChannelId": "UClZbmi9JzfnB2CEb0fG8iew",
        "sourceChannelTitle": "Primal Space",
        "thumbnailUrl": "https://i.ytimg.com/vi/FYrNZgZxICU/hqdefault.jpg",
        "durationSec": 560
      },
      {
        "youtubeVideoId": "MHpdN-ShQNY",
        "title": "HOW POWER IS BUILT: Inside the 500,000 Battery Factory Near Berlin | WELT Documentary",
        "sourceChannelId": "UCBAeFXaLV1ZqKqc-Uf3pKaA",
        "sourceChannelTitle": "WELT Documentary",
        "thumbnailUrl": "https://i.ytimg.com/vi/MHpdN-ShQNY/hqdefault.jpg",
        "durationSec": 3000
      }
    ]
  },
  "architecture": {
    "categoryId": "architecture",
    "categoryName": "Architecture",
    "hue": 28,
    "builtAt": 1794338232065,
    "videos": [
      {
        "youtubeVideoId": "J0L9gEZ-Ht8",
        "title": "Inside a Civil Engineer's Colourful Bungalow in Ibadan | My Compound",
        "sourceChannelId": "UC4GYmnbkZranfQo2f3TJ3KA",
        "sourceChannelTitle": "COMPOUND",
        "thumbnailUrl": "https://i.ytimg.com/vi/J0L9gEZ-Ht8/hqdefault.jpg",
        "durationSec": 316
      },
      {
        "youtubeVideoId": "yUzgb0RYpfc",
        "title": "Small Apartment Transformed With Clever Storage and Colour, Poland 58sqm/624sqft",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/yUzgb0RYpfc/hqdefault.jpg",
        "durationSec": 579
      },
      {
        "youtubeVideoId": "VpuWi9a3MrE",
        "title": "This Will Be The World’s Biggest Park",
        "sourceChannelId": "UC6n8I1UDTKP1IWjQMg6_TwA",
        "sourceChannelTitle": "The B1M",
        "thumbnailUrl": "https://i.ytimg.com/vi/VpuWi9a3MrE/hqdefault.jpg",
        "durationSec": 945
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
        "youtubeVideoId": "v15E5i2WMhI",
        "title": "Inside Marine Tanguy’s 18th-Century London Home Filled With Art",
        "sourceChannelId": "UCLYrUmw0L_bjFeQCvWuiijg",
        "sourceChannelTitle": "The Luxury Home Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/v15E5i2WMhI/hqdefault.jpg",
        "durationSec": 1875
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
        "youtubeVideoId": "rOC9a6UCV0Y",
        "title": "London Home Tour: Inside an Interior Designer’s Own Home | Property London",
        "sourceChannelId": "UCOn4OkRtzsN4EP8pWM-IYVw",
        "sourceChannelTitle": "Property London",
        "thumbnailUrl": "https://i.ytimg.com/vi/rOC9a6UCV0Y/hqdefault.jpg",
        "durationSec": 560
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
        "youtubeVideoId": "pQkvIEU9Ilk",
        "title": "Inside London's Most Expensive Address",
        "sourceChannelId": "UCMayaatitp-arhjI7azj9IA",
        "sourceChannelTitle": "Refined Living",
        "thumbnailUrl": "https://i.ytimg.com/vi/pQkvIEU9Ilk/hqdefault.jpg",
        "durationSec": 855
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
        "youtubeVideoId": "iikHAjqOvTY",
        "title": "China’s Biggest Abandoned Megaprojects",
        "sourceChannelId": "UC6TY36Ys_J6UPKd75TpRuUw",
        "sourceChannelTitle": "MegaBuilds",
        "thumbnailUrl": "https://i.ytimg.com/vi/iikHAjqOvTY/hqdefault.jpg",
        "durationSec": 1149
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
        "youtubeVideoId": "Rqcvc6MxCwM",
        "title": "trying to make rilakkuma pancake art / 엉뚱한 팬케이크 아트 만들기",
        "sourceChannelId": "UCRSRvZQ0PgbINaDIF1QTTRQ",
        "sourceChannelTitle": "Dami Lee",
        "thumbnailUrl": "https://i.ytimg.com/vi/Rqcvc6MxCwM/hqdefault.jpg",
        "durationSec": 116
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
        "youtubeVideoId": "nSSTAw-swDQ",
        "title": "Inside Twin Sisters' Green Lagos Island Apartment | My Compound",
        "sourceChannelId": "UC4GYmnbkZranfQo2f3TJ3KA",
        "sourceChannelTitle": "COMPOUND",
        "thumbnailUrl": "https://i.ytimg.com/vi/nSSTAw-swDQ/hqdefault.jpg",
        "durationSec": 358
      },
      {
        "youtubeVideoId": "zEgrugE_eq8",
        "title": "This US City May Need to be Completely Evacuated",
        "sourceChannelId": "UC6n8I1UDTKP1IWjQMg6_TwA",
        "sourceChannelTitle": "The B1M",
        "thumbnailUrl": "https://i.ytimg.com/vi/zEgrugE_eq8/hqdefault.jpg",
        "durationSec": 1043
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
        "youtubeVideoId": "B0Jiwmr3kyE",
        "title": "Inside a $47,500/Month Los Angeles Home with Panoramic Ocean & City Views",
        "sourceChannelId": "UCLYrUmw0L_bjFeQCvWuiijg",
        "sourceChannelTitle": "The Luxury Home Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/B0Jiwmr3kyE/hqdefault.jpg",
        "durationSec": 513
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
        "youtubeVideoId": "MD-9XmKt8Ck",
        "title": "Inside Interior Designer Katelynn's London Apartment Renovation | Property London",
        "sourceChannelId": "UCOn4OkRtzsN4EP8pWM-IYVw",
        "sourceChannelTitle": "Property London",
        "thumbnailUrl": "https://i.ytimg.com/vi/MD-9XmKt8Ck/hqdefault.jpg",
        "durationSec": 720
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
        "youtubeVideoId": "qcL0xrX26Zs",
        "title": "Why London's Billionaires' Row Is Half Empty",
        "sourceChannelId": "UCMayaatitp-arhjI7azj9IA",
        "sourceChannelTitle": "Refined Living",
        "thumbnailUrl": "https://i.ytimg.com/vi/qcL0xrX26Zs/hqdefault.jpg",
        "durationSec": 608
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
        "youtubeVideoId": "vfWaAaqjKLc",
        "title": "Why China and the US Want the Same Part of the Moon",
        "sourceChannelId": "UC6TY36Ys_J6UPKd75TpRuUw",
        "sourceChannelTitle": "MegaBuilds",
        "thumbnailUrl": "https://i.ytimg.com/vi/vfWaAaqjKLc/hqdefault.jpg",
        "durationSec": 1040
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
        "youtubeVideoId": "UC6He6LnCw0",
        "title": "RINGU Sadako embroidery timelapse",
        "sourceChannelId": "UCRSRvZQ0PgbINaDIF1QTTRQ",
        "sourceChannelTitle": "Dami Lee",
        "thumbnailUrl": "https://i.ytimg.com/vi/UC6He6LnCw0/hqdefault.jpg",
        "durationSec": 192
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
        "youtubeVideoId": "ZlgMPH0Eg7o",
        "title": "Inside Orange Island Estate, Lagos | Reclaiming Open Air by the Waterfront | byCO",
        "sourceChannelId": "UC4GYmnbkZranfQo2f3TJ3KA",
        "sourceChannelTitle": "COMPOUND",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZlgMPH0Eg7o/hqdefault.jpg",
        "durationSec": 207
      },
      {
        "youtubeVideoId": "Pybe5h1DB5w",
        "title": "London's New Supertall Skyscraper is Coming",
        "sourceChannelId": "UC6n8I1UDTKP1IWjQMg6_TwA",
        "sourceChannelTitle": "The B1M",
        "thumbnailUrl": "https://i.ytimg.com/vi/Pybe5h1DB5w/hqdefault.jpg",
        "durationSec": 1155
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
        "youtubeVideoId": "f2n3QD9SU28",
        "title": "Inside a $14,495,000 Los Angeles Estate With Screening Room, Spa & Half-Court",
        "sourceChannelId": "UCLYrUmw0L_bjFeQCvWuiijg",
        "sourceChannelTitle": "The Luxury Home Show",
        "thumbnailUrl": "https://i.ytimg.com/vi/f2n3QD9SU28/hqdefault.jpg",
        "durationSec": 609
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
        "youtubeVideoId": "R86btj9OCOE",
        "title": "How an Interior Designer Renovated This Luxury Chelsea Home | Property London",
        "sourceChannelId": "UCOn4OkRtzsN4EP8pWM-IYVw",
        "sourceChannelTitle": "Property London",
        "thumbnailUrl": "https://i.ytimg.com/vi/R86btj9OCOE/hqdefault.jpg",
        "durationSec": 598
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
        "youtubeVideoId": "vz6YVIjQjQY",
        "title": "Flat Hunting in London with a Millionaire Founder",
        "sourceChannelId": "UCMayaatitp-arhjI7azj9IA",
        "sourceChannelTitle": "Refined Living",
        "thumbnailUrl": "https://i.ytimg.com/vi/vz6YVIjQjQY/hqdefault.jpg",
        "durationSec": 1291
      },
      {
        "youtubeVideoId": "b-aOLbxBErk",
        "title": "The F-47: This is Everything We Know",
        "sourceChannelId": "UC6TY36Ys_J6UPKd75TpRuUw",
        "sourceChannelTitle": "MegaBuilds",
        "thumbnailUrl": "https://i.ytimg.com/vi/b-aOLbxBErk/hqdefault.jpg",
        "durationSec": 824
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
        "youtubeVideoId": "OzHCjaOnP6o",
        "title": "Making dalgona coffee // 달고나 커피 만들기",
        "sourceChannelId": "UCRSRvZQ0PgbINaDIF1QTTRQ",
        "sourceChannelTitle": "Dami Lee",
        "thumbnailUrl": "https://i.ytimg.com/vi/OzHCjaOnP6o/hqdefault.jpg",
        "durationSec": 185
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
        "youtubeVideoId": "7sfoLUumGnc",
        "title": "Why We Can’t Build Apartments Like This Anymore",
        "sourceChannelId": "UCYAm24PkejQR2xMgJgn7xwg",
        "sourceChannelTitle": "Stewart Hicks",
        "thumbnailUrl": "https://i.ytimg.com/vi/7sfoLUumGnc/hqdefault.jpg",
        "durationSec": 706
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
  "religion": {
    "categoryId": "religion",
    "categoryName": "Religion",
    "hue": 42,
    "builtAt": 1794338232065,
    "videos": [
      {
        "youtubeVideoId": "8i8V5jjEHoU",
        "title": "Prayer to Consecrate Your Home to Jesus",
        "sourceChannelId": "UC27F-5DfIOEitDEazCwdHWw",
        "sourceChannelTitle": "The Catholic Crusade",
        "thumbnailUrl": "https://i.ytimg.com/vi/8i8V5jjEHoU/hqdefault.jpg",
        "durationSec": 113
      },
      {
        "youtubeVideoId": "Z3TUBk3Xzws",
        "title": "Fr. Mike's Top SEEK Moments",
        "sourceChannelId": "UCmJTXhjB9h83BjuLjehW_Bw",
        "sourceChannelTitle": "FOCUS Catholic",
        "thumbnailUrl": "https://i.ytimg.com/vi/Z3TUBk3Xzws/hqdefault.jpg",
        "durationSec": 471
      },
      {
        "youtubeVideoId": "O58-74e08Ro",
        "title": "\"The Final Exam: The First Question\" | 32nd Sunday in Ordinary Time (Fr. Mike's Homily)",
        "sourceChannelId": "UCZpWMxP4e8sQLZjbYQmanIw",
        "sourceChannelTitle": "Sundays with Ascension",
        "thumbnailUrl": "https://i.ytimg.com/vi/O58-74e08Ro/hqdefault.jpg",
        "durationSec": 1432
      },
      {
        "youtubeVideoId": "-mscZ195o9Y",
        "title": "The People Pleaser’s Guide to Graciously Saying No",
        "sourceChannelId": "UCEp5Q6cb6GQr5XIZ_2blTjQ",
        "sourceChannelTitle": "Redeeming Productivity",
        "thumbnailUrl": "https://i.ytimg.com/vi/-mscZ195o9Y/hqdefault.jpg",
        "durationSec": 514
      },
      {
        "youtubeVideoId": "UEb7EYwdiis",
        "title": "Obergurgl Hohe Mut Alm down. Piste 1",
        "sourceChannelId": "UCw_FuPznUUVSLtPnSMQnZQw",
        "sourceChannelTitle": "Alexander Wilson",
        "thumbnailUrl": "https://i.ytimg.com/vi/UEb7EYwdiis/hqdefault.jpg",
        "durationSec": 88
      },
      {
        "youtubeVideoId": "JzYz60buh_I",
        "title": "The 4 Virtues You Need to Live Life Well",
        "sourceChannelId": "UCVdGX3N-WIJ5nUvklBTNhAw",
        "sourceChannelTitle": "Ascension Presents",
        "thumbnailUrl": "https://i.ytimg.com/vi/JzYz60buh_I/hqdefault.jpg",
        "durationSec": 885
      },
      {
        "youtubeVideoId": "8IAYgfhGu_U",
        "title": "I Love Thee, O My God — A Prayer to Love God",
        "sourceChannelId": "UC27F-5DfIOEitDEazCwdHWw",
        "sourceChannelTitle": "The Catholic Crusade",
        "thumbnailUrl": "https://i.ytimg.com/vi/8IAYgfhGu_U/hqdefault.jpg",
        "durationSec": 104
      },
      {
        "youtubeVideoId": "qIMOGKsbrUg",
        "title": "What Really Happens After You Die | Fr. Mike Schmitz | SEEK26",
        "sourceChannelId": "UCmJTXhjB9h83BjuLjehW_Bw",
        "sourceChannelTitle": "FOCUS Catholic",
        "thumbnailUrl": "https://i.ytimg.com/vi/qIMOGKsbrUg/hqdefault.jpg",
        "durationSec": 2096
      },
      {
        "youtubeVideoId": "zNcwQS9P3nM",
        "title": "Thirty-second Sunday in Ordinary Time - Mass with Fr. Mike Schmitz",
        "sourceChannelId": "UCZpWMxP4e8sQLZjbYQmanIw",
        "sourceChannelTitle": "Sundays with Ascension",
        "thumbnailUrl": "https://i.ytimg.com/vi/zNcwQS9P3nM/hqdefault.jpg",
        "durationSec": 2887
      },
      {
        "youtubeVideoId": "iKcZ4BulxDM",
        "title": "A Minimal Phone to Help You Scroll Less and Read More",
        "sourceChannelId": "UCEp5Q6cb6GQr5XIZ_2blTjQ",
        "sourceChannelTitle": "Redeeming Productivity",
        "thumbnailUrl": "https://i.ytimg.com/vi/iKcZ4BulxDM/hqdefault.jpg",
        "durationSec": 907
      },
      {
        "youtubeVideoId": "W2Zne_paFZg",
        "title": "Top to bottom in Saariselka, Finland",
        "sourceChannelId": "UCw_FuPznUUVSLtPnSMQnZQw",
        "sourceChannelTitle": "Alexander Wilson",
        "thumbnailUrl": "https://i.ytimg.com/vi/W2Zne_paFZg/hqdefault.jpg",
        "durationSec": 101
      },
      {
        "youtubeVideoId": "P4yTBOZLmyM",
        "title": "Priest Explains How to Actually Apologize",
        "sourceChannelId": "UCVdGX3N-WIJ5nUvklBTNhAw",
        "sourceChannelTitle": "Ascension Presents",
        "thumbnailUrl": "https://i.ytimg.com/vi/P4yTBOZLmyM/hqdefault.jpg",
        "durationSec": 526
      },
      {
        "youtubeVideoId": "9RXyY3U471w",
        "title": "Litany of St. Jude — Patron of Hopeless Cases & Urgent Needs",
        "sourceChannelId": "UC27F-5DfIOEitDEazCwdHWw",
        "sourceChannelTitle": "The Catholic Crusade",
        "thumbnailUrl": "https://i.ytimg.com/vi/9RXyY3U471w/hqdefault.jpg",
        "durationSec": 322
      },
      {
        "youtubeVideoId": "hBrg0mjqXC8",
        "title": "The Miracle That Changed the Americas | Fr. Agustino Torres, CFR | SEEK26",
        "sourceChannelId": "UCmJTXhjB9h83BjuLjehW_Bw",
        "sourceChannelTitle": "FOCUS Catholic",
        "thumbnailUrl": "https://i.ytimg.com/vi/hBrg0mjqXC8/hqdefault.jpg",
        "durationSec": 2365
      },
      {
        "youtubeVideoId": "7IM78n9X9Rs",
        "title": "\"Where Are Your Heroes?\" | All Saints Day (Fr. Mike's Homily) #allsaintsday",
        "sourceChannelId": "UCZpWMxP4e8sQLZjbYQmanIw",
        "sourceChannelTitle": "Sundays with Ascension",
        "thumbnailUrl": "https://i.ytimg.com/vi/7IM78n9X9Rs/hqdefault.jpg",
        "durationSec": 1456
      },
      {
        "youtubeVideoId": "efsioQVByzw",
        "title": "5 things I wish I knew in my 20s (as a Christian man)",
        "sourceChannelId": "UCEp5Q6cb6GQr5XIZ_2blTjQ",
        "sourceChannelTitle": "Redeeming Productivity",
        "thumbnailUrl": "https://i.ytimg.com/vi/efsioQVByzw/hqdefault.jpg",
        "durationSec": 1099
      },
      {
        "youtubeVideoId": "NMAnye2eICk",
        "title": "Ceasars Camp VR",
        "sourceChannelId": "UCw_FuPznUUVSLtPnSMQnZQw",
        "sourceChannelTitle": "Alexander Wilson",
        "thumbnailUrl": "https://i.ytimg.com/vi/NMAnye2eICk/hqdefault.jpg",
        "durationSec": 205
      },
      {
        "youtubeVideoId": "f-1LiVaXfvU",
        "title": "The Difference Between Happiness and Joy Explained | Fr. Mike Schmitz and Bishop Barron",
        "sourceChannelId": "UCVdGX3N-WIJ5nUvklBTNhAw",
        "sourceChannelTitle": "Ascension Presents",
        "thumbnailUrl": "https://i.ytimg.com/vi/f-1LiVaXfvU/hqdefault.jpg",
        "durationSec": 2923
      }
    ]
  },
  "cars": {
    "categoryId": "cars",
    "categoryName": "Cars",
    "hue": 8,
    "builtAt": 1794338232065,
    "videos": [
      {
        "youtubeVideoId": "rCyPtYiL-jE",
        "title": "Volvo EX60 Review - Let Them Cook!",
        "sourceChannelId": "UC2J-0g_nxlwcD9JBK1eTleQ",
        "sourceChannelTitle": "Auto Focus",
        "thumbnailUrl": "https://i.ytimg.com/vi/rCyPtYiL-jE/hqdefault.jpg",
        "durationSec": 1101
      },
      {
        "youtubeVideoId": "sVkpkDVxGU8",
        "title": "The most powerful Lamborghini - Revuelto SV",
        "sourceChannelId": "UCKSVUHI9rbbkXhvAXK-2uxA",
        "sourceChannelTitle": "Supercar Blondie",
        "thumbnailUrl": "https://i.ytimg.com/vi/sVkpkDVxGU8/hqdefault.jpg",
        "durationSec": 419
      },
      {
        "youtubeVideoId": "lEkbQr0Wm-k",
        "title": "Porsche Raceborn Moments | The Prototype – RS Spyder",
        "sourceChannelId": "UC_BaxRhNREI_V0DVXjXDALA",
        "sourceChannelTitle": "Porsche",
        "thumbnailUrl": "https://i.ytimg.com/vi/lEkbQr0Wm-k/hqdefault.jpg",
        "durationSec": 1151
      },
      {
        "youtubeVideoId": "Wa-FclxjUS8",
        "title": "By Design: Formula 2030 - A first look at what comes next | Polestar",
        "sourceChannelId": "UC9ZqNBEjEU1NK475EvqmlLA",
        "sourceChannelTitle": "Polestar",
        "thumbnailUrl": "https://i.ytimg.com/vi/Wa-FclxjUS8/hqdefault.jpg",
        "durationSec": 147
      },
      {
        "youtubeVideoId": "YBTfuph1cdE",
        "title": "Audi A6 E-Tron - Boring EVs means we're Winning!",
        "sourceChannelId": "UC2J-0g_nxlwcD9JBK1eTleQ",
        "sourceChannelTitle": "Auto Focus",
        "thumbnailUrl": "https://i.ytimg.com/vi/YBTfuph1cdE/hqdefault.jpg",
        "durationSec": 801
      },
      {
        "youtubeVideoId": "3rKbngIkyrY",
        "title": "I Took a Chinese 4x4 Into the Brazilian Wilderness | Jetour T2",
        "sourceChannelId": "UCKSVUHI9rbbkXhvAXK-2uxA",
        "sourceChannelTitle": "Supercar Blondie",
        "thumbnailUrl": "https://i.ytimg.com/vi/3rKbngIkyrY/hqdefault.jpg",
        "durationSec": 560
      },
      {
        "youtubeVideoId": "ZVicFs5_WVw",
        "title": "How to use the digital key of the Porsche Cayenne Electric | Tutorial | Spot On",
        "sourceChannelId": "UC_BaxRhNREI_V0DVXjXDALA",
        "sourceChannelTitle": "Porsche",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZVicFs5_WVw/hqdefault.jpg",
        "durationSec": 191
      },
      {
        "youtubeVideoId": "o33vflOHPxk",
        "title": "By Design: Three ways we’re bringing performance into the cabin | Polestar",
        "sourceChannelId": "UC9ZqNBEjEU1NK475EvqmlLA",
        "sourceChannelTitle": "Polestar",
        "thumbnailUrl": "https://i.ytimg.com/vi/o33vflOHPxk/hqdefault.jpg",
        "durationSec": 136
      },
      {
        "youtubeVideoId": "zD0WRwU4AqE",
        "title": "Finally Driving the New 911 Turbo S",
        "sourceChannelId": "UC2J-0g_nxlwcD9JBK1eTleQ",
        "sourceChannelTitle": "Auto Focus",
        "thumbnailUrl": "https://i.ytimg.com/vi/zD0WRwU4AqE/hqdefault.jpg",
        "durationSec": 819
      },
      {
        "youtubeVideoId": "1NPt70dnO9Y",
        "title": "The Illegal Koenigsegg That Finally Got Built",
        "sourceChannelId": "UCKSVUHI9rbbkXhvAXK-2uxA",
        "sourceChannelTitle": "Supercar Blondie",
        "thumbnailUrl": "https://i.ytimg.com/vi/1NPt70dnO9Y/hqdefault.jpg",
        "durationSec": 630
      },
      {
        "youtubeVideoId": "jYOcIgHp5-s",
        "title": "World Record Speed on a Skateboard | Porsche x Red Bull",
        "sourceChannelId": "UC_BaxRhNREI_V0DVXjXDALA",
        "sourceChannelTitle": "Porsche",
        "thumbnailUrl": "https://i.ytimg.com/vi/jYOcIgHp5-s/hqdefault.jpg",
        "durationSec": 79
      },
      {
        "youtubeVideoId": "xsQXO6gM_S8",
        "title": "What did Oxford discover about the thrill of driving? | The anatomy of performance| Ep. 4 | Polestar",
        "sourceChannelId": "UC9ZqNBEjEU1NK475EvqmlLA",
        "sourceChannelTitle": "Polestar",
        "thumbnailUrl": "https://i.ytimg.com/vi/xsQXO6gM_S8/hqdefault.jpg",
        "durationSec": 292
      }
    ]
  },
  "business": {
    "categoryId": "business",
    "categoryName": "Business",
    "hue": 155,
    "builtAt": 1794338232065,
    "videos": [
      {
        "youtubeVideoId": "TGZTqbfDzcM",
        "title": "This Guy Makes $2300/Day with a Business No One Talks About!",
        "sourceChannelId": "UChFahjDeMBV67DSXiF5pwBA",
        "sourceChannelTitle": "UpFlip",
        "thumbnailUrl": "https://i.ytimg.com/vi/TGZTqbfDzcM/hqdefault.jpg",
        "durationSec": 2631
      },
      {
        "youtubeVideoId": "0HIiKwuVH34",
        "title": "The Real Reason America Keeps Going to War",
        "sourceChannelId": "UCUEmaeh13ai1ivT5wzz5Lhg",
        "sourceChannelTitle": "Maxinomics",
        "thumbnailUrl": "https://i.ytimg.com/vi/0HIiKwuVH34/hqdefault.jpg",
        "durationSec": 1885
      },
      {
        "youtubeVideoId": "-6PuYw92m1c",
        "title": "Katt Williams: They Tied Me To A Pole And Beat Me Bloody Every Week!",
        "sourceChannelId": "UCGq-a57w-aPwyi3pW7XLiHw",
        "sourceChannelTitle": "The Diary Of A CEO",
        "thumbnailUrl": "https://i.ytimg.com/vi/-6PuYw92m1c/hqdefault.jpg",
        "durationSec": 6591
      },
      {
        "youtubeVideoId": "qhDcwloHrj8",
        "title": "How a Blind Waiter Works",
        "sourceChannelId": "UCisy6taOAeLfyaCqcMQDfig",
        "sourceChannelTitle": "Max Klymenko",
        "thumbnailUrl": "https://i.ytimg.com/vi/qhDcwloHrj8/hqdefault.jpg",
        "durationSec": 589
      },
      {
        "youtubeVideoId": "jQmI6gFM268",
        "title": "15 Small Advantages That Put You Years Ahead",
        "sourceChannelId": "UCNjPtOCvMrKY5eLwr_-7eUg",
        "sourceChannelTitle": "Alux.com",
        "thumbnailUrl": "https://i.ytimg.com/vi/jQmI6gFM268/hqdefault.jpg",
        "durationSec": 934
      },
      {
        "youtubeVideoId": "RhmZig1Y7Nc",
        "title": "How I Built A $120,000,000 Energy Drink Brand",
        "sourceChannelId": "UCyRtUwLylsFqguBvV6Kwlfw",
        "sourceChannelTitle": "The Numbers Game",
        "thumbnailUrl": "https://i.ytimg.com/vi/RhmZig1Y7Nc/hqdefault.jpg",
        "durationSec": 1445
      },
      {
        "youtubeVideoId": "rjod1v4lY7U",
        "title": "He Started on YouTube Just to Get Free Stuff. Now $1.3M/Year.",
        "sourceChannelId": "UChFahjDeMBV67DSXiF5pwBA",
        "sourceChannelTitle": "UpFlip",
        "thumbnailUrl": "https://i.ytimg.com/vi/rjod1v4lY7U/hqdefault.jpg",
        "durationSec": 2750
      },
      {
        "youtubeVideoId": "1V_o8tfuGdw",
        "title": "What They're Not Telling You About Data Centers",
        "sourceChannelId": "UCUEmaeh13ai1ivT5wzz5Lhg",
        "sourceChannelTitle": "Maxinomics",
        "thumbnailUrl": "https://i.ytimg.com/vi/1V_o8tfuGdw/hqdefault.jpg",
        "durationSec": 2068
      },
      {
        "youtubeVideoId": "a1mI-ozLyYM",
        "title": "Iran War Expert: \"The 8 Weeks After Midterms Could Be The Most Dangerous!\" | Prof Robert Pape",
        "sourceChannelId": "UCGq-a57w-aPwyi3pW7XLiHw",
        "sourceChannelTitle": "The Diary Of A CEO",
        "thumbnailUrl": "https://i.ytimg.com/vi/a1mI-ozLyYM/hqdefault.jpg",
        "durationSec": 5361
      },
      {
        "youtubeVideoId": "A5GAzc3Tz1U",
        "title": "How the World's Only One-Handed Concert Pianist Works",
        "sourceChannelId": "UCisy6taOAeLfyaCqcMQDfig",
        "sourceChannelTitle": "Max Klymenko",
        "thumbnailUrl": "https://i.ytimg.com/vi/A5GAzc3Tz1U/hqdefault.jpg",
        "durationSec": 619
      },
      {
        "youtubeVideoId": "pR-82KDdtS4",
        "title": "5 Money Rules That Never Changed",
        "sourceChannelId": "UCNjPtOCvMrKY5eLwr_-7eUg",
        "sourceChannelTitle": "Alux.com",
        "thumbnailUrl": "https://i.ytimg.com/vi/pR-82KDdtS4/hqdefault.jpg",
        "durationSec": 4309
      },
      {
        "youtubeVideoId": "yEcSydPrX4I",
        "title": "Emma Grede Reveals How She Made Her First $1,000,000",
        "sourceChannelId": "UCyRtUwLylsFqguBvV6Kwlfw",
        "sourceChannelTitle": "The Numbers Game",
        "thumbnailUrl": "https://i.ytimg.com/vi/yEcSydPrX4I/hqdefault.jpg",
        "durationSec": 853
      },
      {
        "youtubeVideoId": "42VxVFmeQcs",
        "title": "Would YOU Quit a Pension Job to Sell Pizza? He Did…",
        "sourceChannelId": "UChFahjDeMBV67DSXiF5pwBA",
        "sourceChannelTitle": "UpFlip",
        "thumbnailUrl": "https://i.ytimg.com/vi/42VxVFmeQcs/hqdefault.jpg",
        "durationSec": 2295
      },
      {
        "youtubeVideoId": "aIK8f8nX8xs",
        "title": "Everyone is Suddenly Turning on Airbnb, Here's Why",
        "sourceChannelId": "UCUEmaeh13ai1ivT5wzz5Lhg",
        "sourceChannelTitle": "Maxinomics",
        "thumbnailUrl": "https://i.ytimg.com/vi/aIK8f8nX8xs/hqdefault.jpg",
        "durationSec": 1727
      },
      {
        "youtubeVideoId": "FpIN6tYC5XM",
        "title": "James Talarico: Here Is How They Designed The System To Keep You Poor!",
        "sourceChannelId": "UCGq-a57w-aPwyi3pW7XLiHw",
        "sourceChannelTitle": "The Diary Of A CEO",
        "thumbnailUrl": "https://i.ytimg.com/vi/FpIN6tYC5XM/hqdefault.jpg",
        "durationSec": 5807
      },
      {
        "youtubeVideoId": "UZV1X6W9TbQ",
        "title": "How a Disabled Ballerina Works",
        "sourceChannelId": "UCisy6taOAeLfyaCqcMQDfig",
        "sourceChannelTitle": "Max Klymenko",
        "thumbnailUrl": "https://i.ytimg.com/vi/UZV1X6W9TbQ/hqdefault.jpg",
        "durationSec": 741
      },
      {
        "youtubeVideoId": "_O2a0vPX2As",
        "title": "By the Time You Can Buy the Stock, Are You Already Too Late?",
        "sourceChannelId": "UCNjPtOCvMrKY5eLwr_-7eUg",
        "sourceChannelTitle": "Alux.com",
        "thumbnailUrl": "https://i.ytimg.com/vi/_O2a0vPX2As/hqdefault.jpg",
        "durationSec": 867
      },
      {
        "youtubeVideoId": "-Pq1qcCdRHQ",
        "title": "How JMX Quit YouTube And Built A $500M Business",
        "sourceChannelId": "UCyRtUwLylsFqguBvV6Kwlfw",
        "sourceChannelTitle": "The Numbers Game",
        "thumbnailUrl": "https://i.ytimg.com/vi/-Pq1qcCdRHQ/hqdefault.jpg",
        "durationSec": 1601
      }
    ]
  },
  "news": {
    "categoryId": "news",
    "categoryName": "News",
    "hue": 200,
    "builtAt": 1794338232065,
    "videos": [
      {
        "youtubeVideoId": "ZyQiOBS79UU",
        "title": "its been an insane week...",
        "sourceChannelId": "UCzPpbeK8ANcNKg5aoMB0miw",
        "sourceChannelTitle": "Dylan Page",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZyQiOBS79UU/hqdefault.jpg",
        "durationSec": 1403
      },
      {
        "youtubeVideoId": "AyRdDfuHTTk",
        "title": "This Morning’s Top Headlines – Nov. 11 | Morning News NOW",
        "sourceChannelId": "UCeY0bbntWzzVIaj2z3QigXg",
        "sourceChannelTitle": "NBC News",
        "thumbnailUrl": "https://i.ytimg.com/vi/AyRdDfuHTTk/hqdefault.jpg",
        "durationSec": 1494
      },
      {
        "youtubeVideoId": "61MTSbL6hOA",
        "title": "Everything is about to change…",
        "sourceChannelId": "UCzPpbeK8ANcNKg5aoMB0miw",
        "sourceChannelTitle": "Dylan Page",
        "thumbnailUrl": "https://i.ytimg.com/vi/61MTSbL6hOA/hqdefault.jpg",
        "durationSec": 1492
      },
      {
        "youtubeVideoId": "pbfskD7GRFk",
        "title": "Kornacki: How Republicans’ redistricting gamble ended up ‘firing up’ Democrats in North Carolina",
        "sourceChannelId": "UCeY0bbntWzzVIaj2z3QigXg",
        "sourceChannelTitle": "NBC News",
        "thumbnailUrl": "https://i.ytimg.com/vi/pbfskD7GRFk/hqdefault.jpg",
        "durationSec": 309
      },
      {
        "youtubeVideoId": "cw-X0DGpx-U",
        "title": "The World Just Got Alot More Dangerous...",
        "sourceChannelId": "UCzPpbeK8ANcNKg5aoMB0miw",
        "sourceChannelTitle": "Dylan Page",
        "thumbnailUrl": "https://i.ytimg.com/vi/cw-X0DGpx-U/hqdefault.jpg",
        "durationSec": 1400
      },
      {
        "youtubeVideoId": "OXsmwfMv8A0",
        "title": "NBC Nightly News with Tom Llamas Full Episode - Nov. 10",
        "sourceChannelId": "UCeY0bbntWzzVIaj2z3QigXg",
        "sourceChannelTitle": "NBC News",
        "thumbnailUrl": "https://i.ytimg.com/vi/OXsmwfMv8A0/hqdefault.jpg",
        "durationSec": 1124
      }
    ]
  },
  "entertainment": {
    "categoryId": "entertainment",
    "categoryName": "Entertainment",
    "hue": 320,
    "builtAt": 1794338232065,
    "videos": [
      {
        "youtubeVideoId": "_c2e1NcI3Sc",
        "title": "Beat Professional Athlete, Win $100,000",
        "sourceChannelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
        "sourceChannelTitle": "MrBeast",
        "thumbnailUrl": "https://i.ytimg.com/vi/_c2e1NcI3Sc/hqdefault.jpg",
        "durationSec": 1347
      },
      {
        "youtubeVideoId": "VmqwfEw4UoU",
        "title": "I Stayed in Waterpark Hotels",
        "sourceChannelId": "UCnmGIkw-KdI0W5siakKPKog",
        "sourceChannelTitle": "Ryan Trahan",
        "thumbnailUrl": "https://i.ytimg.com/vi/VmqwfEw4UoU/hqdefault.jpg",
        "durationSec": 1655
      },
      {
        "youtubeVideoId": "BAs4pPGB890",
        "title": "I Tried the World's Hardest Jobs",
        "sourceChannelId": "UCGmnsW623G1r-Chmo5RB4Yw",
        "sourceChannelTitle": "KSI",
        "thumbnailUrl": "https://i.ytimg.com/vi/BAs4pPGB890/hqdefault.jpg",
        "durationSec": 2729
      },
      {
        "youtubeVideoId": "RPCV1ssDWyw",
        "title": "WHY DID YOUR EX SAY THEY CHEATED?! | EP 651",
        "sourceChannelId": "UCzUjeR-Wgr0_iyL_brgx3Fw",
        "sourceChannelTitle": "ShxtsnGigs Podcast",
        "thumbnailUrl": "https://i.ytimg.com/vi/RPCV1ssDWyw/hqdefault.jpg",
        "durationSec": 5836
      },
      {
        "youtubeVideoId": "5xNog_tVYg0",
        "title": "BIGGEST REGRETS EVER! | Best Of ShxtsnGigs Reacts",
        "sourceChannelId": "UC4pFQ-V4RUtnWZ3ksRfRl-Q",
        "sourceChannelTitle": "ShxtsnGigs Reacts",
        "thumbnailUrl": "https://i.ytimg.com/vi/5xNog_tVYg0/hqdefault.jpg",
        "durationSec": 1551
      },
      {
        "youtubeVideoId": "TqRvTtPq_jc",
        "title": "1 Peter Obi Supporter confronts 20 Opposition!",
        "sourceChannelId": "UCOvGHa9GYZyyatJqsKTCWSA",
        "sourceChannelTitle": "Cruise",
        "thumbnailUrl": "https://i.ytimg.com/vi/TqRvTtPq_jc/hqdefault.jpg",
        "durationSec": 5526
      },
      {
        "youtubeVideoId": "LKZQXPdVFTU",
        "title": "Why not China? Why not Japan? : K-pop Documentary",
        "sourceChannelId": "UCADEYQiszEI_cMARTSi5GdQ",
        "sourceChannelTitle": "Papiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/LKZQXPdVFTU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "TVJHYEArEOE",
        "title": "Living alone in my LAGOS | Interviews, influencer events & friends!",
        "sourceChannelId": "UC1TyJa3QI9JzqCTcO_cfhmg",
        "sourceChannelTitle": "Idy Archibong",
        "thumbnailUrl": "https://i.ytimg.com/vi/TVJHYEArEOE/hqdefault.jpg",
        "durationSec": 1194
      },
      {
        "youtubeVideoId": "4mMFLbwR5Z0",
        "title": "Why People Hate Louis Theroux",
        "sourceChannelId": "UCxs87BsBSzw8FC7IlvfQ5kA",
        "sourceChannelTitle": "Asa Park",
        "thumbnailUrl": "https://i.ytimg.com/vi/4mMFLbwR5Z0/hqdefault.jpg",
        "durationSec": 1537
      },
      {
        "youtubeVideoId": "osLPD9SnBQ0",
        "title": "the page knows something you don't.",
        "sourceChannelId": "UCY0LR5f4leMPO-O9VP4NB_A",
        "sourceChannelTitle": "The Ash Files",
        "thumbnailUrl": "https://i.ytimg.com/vi/osLPD9SnBQ0/hqdefault.jpg",
        "durationSec": 483
      },
      {
        "youtubeVideoId": "D9R0qlX_Ebo",
        "title": "Arthur Spices Up The Doc With Manufactured Family Drama | The Fall and Rise of Reggie Dinkins",
        "sourceChannelId": "UCccjdJEay2hpb5scz61zY6Q",
        "sourceChannelTitle": "NBC",
        "thumbnailUrl": "https://i.ytimg.com/vi/D9R0qlX_Ebo/hqdefault.jpg",
        "durationSec": 290
      },
      {
        "youtubeVideoId": "RE3_PGwDwhw",
        "title": "Lose 150 Lbs Together, Win $250,000",
        "sourceChannelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
        "sourceChannelTitle": "MrBeast",
        "thumbnailUrl": "https://i.ytimg.com/vi/RE3_PGwDwhw/hqdefault.jpg",
        "durationSec": 2596
      },
      {
        "youtubeVideoId": "1w3XaMSIeR8",
        "title": "How Many Countries Can I Visit in 7 Days?",
        "sourceChannelId": "UCnmGIkw-KdI0W5siakKPKog",
        "sourceChannelTitle": "Ryan Trahan",
        "thumbnailUrl": "https://i.ytimg.com/vi/1w3XaMSIeR8/hqdefault.jpg",
        "durationSec": 2524
      },
      {
        "youtubeVideoId": "o_iq0VkGMQI",
        "title": "Make Me Laugh, Win $1,000 (Worldwide Edition)",
        "sourceChannelId": "UCGmnsW623G1r-Chmo5RB4Yw",
        "sourceChannelTitle": "KSI",
        "thumbnailUrl": "https://i.ytimg.com/vi/o_iq0VkGMQI/hqdefault.jpg",
        "durationSec": 1190
      },
      {
        "youtubeVideoId": "WVh5MKEytYc",
        "title": "WILDEST THINGS ONLY RICH PEOPLE DO... | EP 649",
        "sourceChannelId": "UCzUjeR-Wgr0_iyL_brgx3Fw",
        "sourceChannelTitle": "ShxtsnGigs Podcast",
        "thumbnailUrl": "https://i.ytimg.com/vi/WVh5MKEytYc/hqdefault.jpg",
        "durationSec": 5409
      },
      {
        "youtubeVideoId": "U9b6i_6sH7Y",
        "title": "FIREWORKS GONE WRONG! | ShxtsnGigs Reacts",
        "sourceChannelId": "UC4pFQ-V4RUtnWZ3ksRfRl-Q",
        "sourceChannelTitle": "ShxtsnGigs Reacts",
        "thumbnailUrl": "https://i.ytimg.com/vi/U9b6i_6sH7Y/hqdefault.jpg",
        "durationSec": 1083
      },
      {
        "youtubeVideoId": "vGg3kmJ6ZbU",
        "title": "If EX-BESTFRIENDS Were 100% Honest",
        "sourceChannelId": "UCOvGHa9GYZyyatJqsKTCWSA",
        "sourceChannelTitle": "Cruise",
        "thumbnailUrl": "https://i.ytimg.com/vi/vGg3kmJ6ZbU/hqdefault.jpg",
        "durationSec": 2908
      },
      {
        "youtubeVideoId": "uY64Bm4nRqk",
        "title": "As a South Korean, I Hate North Korea. This Is Why:",
        "sourceChannelId": "UCADEYQiszEI_cMARTSi5GdQ",
        "sourceChannelTitle": "Papiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/uY64Bm4nRqk/hqdefault.jpg",
        "durationSec": 946
      },
      {
        "youtubeVideoId": "3-eOUKE_oSc",
        "title": "Living alone in Lagos | HE'S JUST NOT THAT INTO YOU",
        "sourceChannelId": "UC1TyJa3QI9JzqCTcO_cfhmg",
        "sourceChannelTitle": "Idy Archibong",
        "thumbnailUrl": "https://i.ytimg.com/vi/3-eOUKE_oSc/hqdefault.jpg",
        "durationSec": 1067
      },
      {
        "youtubeVideoId": "4qrcdXangR0",
        "title": "Gambling Just Got Even Worse",
        "sourceChannelId": "UCxs87BsBSzw8FC7IlvfQ5kA",
        "sourceChannelTitle": "Asa Park",
        "thumbnailUrl": "https://i.ytimg.com/vi/4qrcdXangR0/hqdefault.jpg",
        "durationSec": 1630
      },
      {
        "youtubeVideoId": "D6toNc_UAsU",
        "title": "how to stop living for other people’s approval.",
        "sourceChannelId": "UCY0LR5f4leMPO-O9VP4NB_A",
        "sourceChannelTitle": "The Ash Files",
        "thumbnailUrl": "https://i.ytimg.com/vi/D6toNc_UAsU/hqdefault.jpg",
        "durationSec": 705
      },
      {
        "youtubeVideoId": "Bhs1i-KqJTw",
        "title": "The Traitors Throw Faithfuls Off Their Scent | The Traitors: New Blood",
        "sourceChannelId": "UCccjdJEay2hpb5scz61zY6Q",
        "sourceChannelTitle": "NBC",
        "thumbnailUrl": "https://i.ytimg.com/vi/Bhs1i-KqJTw/hqdefault.jpg",
        "durationSec": 442
      },
      {
        "youtubeVideoId": "plN7JMbadRg",
        "title": "Eat Everything In A Grocery Store, Win $1,000,000",
        "sourceChannelId": "UCX6OQ3DkcsbYNE6H8uQQuVA",
        "sourceChannelTitle": "MrBeast",
        "thumbnailUrl": "https://i.ytimg.com/vi/plN7JMbadRg/hqdefault.jpg",
        "durationSec": 3479
      },
      {
        "youtubeVideoId": "3x3BSLl94Yk",
        "title": "I Tried the \"Top 10 Things To Do\" in America",
        "sourceChannelId": "UCnmGIkw-KdI0W5siakKPKog",
        "sourceChannelTitle": "Ryan Trahan",
        "thumbnailUrl": "https://i.ytimg.com/vi/3x3BSLl94Yk/hqdefault.jpg",
        "durationSec": 4438
      },
      {
        "youtubeVideoId": "AGnfMkYuFkc",
        "title": "Best Celebrity Lookalike Wins $1,000 (Ft. Dwight Howard, Zias & Blou)",
        "sourceChannelId": "UCGmnsW623G1r-Chmo5RB4Yw",
        "sourceChannelTitle": "KSI",
        "thumbnailUrl": "https://i.ytimg.com/vi/AGnfMkYuFkc/hqdefault.jpg",
        "durationSec": 1869
      },
      {
        "youtubeVideoId": "sR7HbIk8czs",
        "title": "DESCRIBE YOUR MAN IN COOKING TERMS! | EP 647",
        "sourceChannelId": "UCzUjeR-Wgr0_iyL_brgx3Fw",
        "sourceChannelTitle": "ShxtsnGigs Podcast",
        "thumbnailUrl": "https://i.ytimg.com/vi/sR7HbIk8czs/hqdefault.jpg",
        "durationSec": 4536
      },
      {
        "youtubeVideoId": "lrVA-EZqLhE",
        "title": "ONLY IN AMERICA! | Best Of ShxtsnGigs Reacts",
        "sourceChannelId": "UC4pFQ-V4RUtnWZ3ksRfRl-Q",
        "sourceChannelTitle": "ShxtsnGigs Reacts",
        "thumbnailUrl": "https://i.ytimg.com/vi/lrVA-EZqLhE/hqdefault.jpg",
        "durationSec": 1546
      },
      {
        "youtubeVideoId": "Htm40v9uego",
        "title": "5 Non-Virgins Vs 2 secret Virgins",
        "sourceChannelId": "UCOvGHa9GYZyyatJqsKTCWSA",
        "sourceChannelTitle": "Cruise",
        "thumbnailUrl": "https://i.ytimg.com/vi/Htm40v9uego/hqdefault.jpg",
        "durationSec": 1803
      },
      {
        "youtubeVideoId": "eQgQFOyviY0",
        "title": "Why Korean Teenagers Study 14 Hours a Day",
        "sourceChannelId": "UCADEYQiszEI_cMARTSi5GdQ",
        "sourceChannelTitle": "Papiens",
        "thumbnailUrl": "https://i.ytimg.com/vi/eQgQFOyviY0/hqdefault.jpg",
        "durationSec": 885
      },
      {
        "youtubeVideoId": "A043NZTI44o",
        "title": "Living alone in LAGOS | AGBARA NLA screening, inter-house sports, vigils & a very eventful week!",
        "sourceChannelId": "UC1TyJa3QI9JzqCTcO_cfhmg",
        "sourceChannelTitle": "Idy Archibong",
        "thumbnailUrl": "https://i.ytimg.com/vi/A043NZTI44o/hqdefault.jpg",
        "durationSec": 1933
      },
      {
        "youtubeVideoId": "dhM5jAt_-T0",
        "title": "Why Hollywood Can’t Stop Paying Adam Sandler",
        "sourceChannelId": "UCxs87BsBSzw8FC7IlvfQ5kA",
        "sourceChannelTitle": "Asa Park",
        "thumbnailUrl": "https://i.ytimg.com/vi/dhM5jAt_-T0/hqdefault.jpg",
        "durationSec": 1422
      },
      {
        "youtubeVideoId": "UhaVDzeY6zY",
        "title": "you don't need to leave the internet to get your attention back.",
        "sourceChannelId": "UCY0LR5f4leMPO-O9VP4NB_A",
        "sourceChannelTitle": "The Ash Files",
        "thumbnailUrl": "https://i.ytimg.com/vi/UhaVDzeY6zY/hqdefault.jpg",
        "durationSec": 785
      },
      {
        "youtubeVideoId": "f2z1L2O2Gfw",
        "title": "Alex Needs Ron And Serena is Jealous of Matt | St. Denis Medical",
        "sourceChannelId": "UCccjdJEay2hpb5scz61zY6Q",
        "sourceChannelTitle": "NBC",
        "thumbnailUrl": "https://i.ytimg.com/vi/f2z1L2O2Gfw/hqdefault.jpg",
        "durationSec": 307
      }
    ]
  }
};
