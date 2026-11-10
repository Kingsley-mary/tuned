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
    "builtAt": 1794329683515,
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
        "youtubeVideoId": "g6Die8gVFn0",
        "title": "OLED iPad Mini is The Most Apple Product They've Ever Appled",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/g6Die8gVFn0/hqdefault.jpg",
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
        "youtubeVideoId": "ai1gIWacf0I",
        "title": "This can SEE Sound!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/ai1gIWacf0I/hqdefault.jpg",
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
        "youtubeVideoId": "ESABTN4VtrA",
        "title": "iPhone Duo Review: First Generation Fun!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/ESABTN4VtrA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "scwlR0QHGOk",
        "title": "The NEW Tesla Roadster: My Honest Reaction",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/scwlR0QHGOk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "QVv3mQzlrN0",
        "title": "Apple Homeview Impressions: Not Convinced!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/QVv3mQzlrN0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "_0G4OG39XjI",
        "title": "WTF is a Googlebook?",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/_0G4OG39XjI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "3iRUwVzRDZQ",
        "title": "Xiaomi 18 Fold: How Does This Happen?",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/3iRUwVzRDZQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "e1q-TuHdc4Y",
        "title": "Dear YouTube!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/e1q-TuHdc4Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rayrrXot17M",
        "title": "Nothing Headphone 1 Pro: They Copied the Wrong Thing!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/rayrrXot17M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "DkUuOr21v4s",
        "title": "Xiaomi 18 Pro Max: They've Done It Again!",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/DkUuOr21v4s/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "pOX1l1edBME",
        "title": "The Apple Watch Has a Problem",
        "sourceChannelId": "UCBJycsmduvYEL83R_U4JriQ",
        "sourceChannelTitle": "Marques Brownlee",
        "thumbnailUrl": "https://i.ytimg.com/vi/pOX1l1edBME/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "games": {
    "categoryId": "games",
    "categoryName": "Games",
    "hue": 268,
    "builtAt": 1794329698136,
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
        "youtubeVideoId": "Dbgdi7BzMR0",
        "title": "The History of Every Video Game Genre",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/Dbgdi7BzMR0/hqdefault.jpg",
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
        "youtubeVideoId": "JFG0GMCMLgs",
        "title": "Word Play is now available on iOS!",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/JFG0GMCMLgs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "usF4cpcxbZc",
        "title": "100 Steam Games that started life during GMTK Game Jam",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/usF4cpcxbZc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "n1cd1FhVAWY",
        "title": "How I Coded the Perks in my Roguelike",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/n1cd1FhVAWY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NlAFWaa9UQo",
        "title": "The Secrets Behind THAT Cyberpunk 2077 Montage",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/NlAFWaa9UQo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "cIbCxbrBCys",
        "title": "How Rockstar fit an entire city into PlayStation 2 memory",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/cIbCxbrBCys/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "MILJzR0x3IY",
        "title": "Has Zelda Changed Forever?",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/MILJzR0x3IY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "l7xXW0EbK4g",
        "title": "The World Design of Hollow Knight: Silksong",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/l7xXW0EbK4g/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "8tHJgtbj6rs",
        "title": "What's the Point of Prototyping?",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/8tHJgtbj6rs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "JZ9GRFD-mSc",
        "title": "How Games Do Destruction",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/JZ9GRFD-mSc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Ip5pYl-MuYs",
        "title": "What's The Point Of Hard Games, Anyway?",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/Ip5pYl-MuYs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "kG3LWpuiLqg",
        "title": "My Favourite Games from GMTK Game Jam 2025",
        "sourceChannelId": "UCqJ-Xo29CKyLTjn6z2XwYAw",
        "sourceChannelTitle": "Game Maker's Toolkit",
        "thumbnailUrl": "https://i.ytimg.com/vi/kG3LWpuiLqg/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "music": {
    "categoryId": "music",
    "categoryName": "Music",
    "hue": 205,
    "builtAt": 1794329714779,
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
        "youtubeVideoId": "73wCQRQb7v0",
        "title": "Jungle: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/73wCQRQb7v0/hqdefault.jpg",
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
        "youtubeVideoId": "xPIMk4d4ulI",
        "title": "CMAT: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/xPIMk4d4ulI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "_Mp_bpIZKlI",
        "title": "Brìghde Chaimbeul: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/_Mp_bpIZKlI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "XTHhuhbbpcg",
        "title": "Why your spooky season playlist could use a refresh",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/XTHhuhbbpcg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "HYA9e0XOUGk",
        "title": "Cardi B: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/HYA9e0XOUGk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "QCEY9VEsdcA",
        "title": "Hello? It's some calls we CAN'T ignore. 👀☎️⁠",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/QCEY9VEsdcA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ZTcqu224vHw",
        "title": "Los Tigres del Norte: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZTcqu224vHw/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "MYdu77oejOs",
        "title": "Draco Rosa: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/MYdu77oejOs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "cysj4CNoIk4",
        "title": "Los Texmaniacs: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/cysj4CNoIk4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ey7ZHhcv1dE",
        "title": "Tim Bernardes: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/ey7ZHhcv1dE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "AvSxPx25oLc",
        "title": "Panteón Rococó: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/AvSxPx25oLc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "3EWLwZh4HjU",
        "title": "Melissa Aldana with Gonzalo Rubalcaba: Tiny Desk Concert",
        "sourceChannelId": "UC4eYXhJI4-7wSWc8UNRwD4A",
        "sourceChannelTitle": "NPR Music",
        "thumbnailUrl": "https://i.ytimg.com/vi/3EWLwZh4HjU/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "food": {
    "categoryId": "food",
    "categoryName": "Food",
    "hue": 22,
    "builtAt": 1794329728741,
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
        "youtubeVideoId": "COvngm7VbZs",
        "title": "I Tested Viral TikTok Recipes",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/COvngm7VbZs/hqdefault.jpg",
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
        "youtubeVideoId": "oWhnytD3QoA",
        "title": "10 Levels of Nachos | With Babish",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/oWhnytD3QoA/hqdefault.jpg",
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
        "youtubeVideoId": "xFG_hyO0yTY",
        "title": "Recreating The Foods From TONY | Binging with Babish",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/xFG_hyO0yTY/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "gfOwrH8n6Jc",
        "title": "How To Make The World's Best Chicken (5 Ways) | With Babish",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/gfOwrH8n6Jc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "w54YAycuPzI",
        "title": "Babish Meals: Behind the Scenes",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/w54YAycuPzI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "yjvqi-0slTA",
        "title": "Babish Meals: Behind The Scenes",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/yjvqi-0slTA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "84xHDfPe5kE",
        "title": "How to make the iconic \"looney cake\" from Succession",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/84xHDfPe5kE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "F5C6UcmyPxc",
        "title": "I made the \"mushroomiest\" pasta possible",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/F5C6UcmyPxc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "0lOY9GwjgRc",
        "title": "I Made EVERY Salsa",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/0lOY9GwjgRc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "zVorYnJjmrQ",
        "title": "Popcorn: reimagined",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/zVorYnJjmrQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "QAQA08ll34Q",
        "title": "The ultimate summer fruit salad!",
        "sourceChannelId": "UCJHA_jMfCvEnv-3kRjTCQXw",
        "sourceChannelTitle": "Binging with Babish",
        "thumbnailUrl": "https://i.ytimg.com/vi/QAQA08ll34Q/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "science": {
    "categoryId": "science",
    "categoryName": "Science",
    "hue": 170,
    "builtAt": 1794329739785,
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
        "youtubeVideoId": "KfODG5REyss",
        "title": "I finally saw quantum mechanics with my own eyes... (It's spookier than I expected)",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/KfODG5REyss/hqdefault.jpg",
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
        "youtubeVideoId": "zEmabFZvdqA",
        "title": "What happens if I lower this weight into the water?",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/zEmabFZvdqA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Kap7mRzr13w",
        "title": "Why doesn't your heart get tired like other muscles do?",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/Kap7mRzr13w/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "eyZEqSPeMwg",
        "title": "No device could prove Einstein wrong... until now",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/eyZEqSPeMwg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "wxLc-gFORPQ",
        "title": "Is there something faster than light?",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/wxLc-gFORPQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "6U6Z6pb6ewI",
        "title": "When you lose weight where does it go?",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/6U6Z6pb6ewI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NiCgcUTL9_Q",
        "title": "Fiber Optics are so much cooler than I thought",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/NiCgcUTL9_Q/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "j9p3Sn8ROL4",
        "title": "What is edge dislocation?",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/j9p3Sn8ROL4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "IHkp5Kq72ro",
        "title": "How Dangerous Are Non-Stick Pans?",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/IHkp5Kq72ro/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ONAuUyml0yI",
        "title": "We're trying something new...",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/ONAuUyml0yI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "VKlulHwMxgU",
        "title": "What happens to these balloons when you open the valve?",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/VKlulHwMxgU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "JsBZOcqZerk",
        "title": "The Insane Real Engineering of the Nazi Enigma Machine",
        "sourceChannelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
        "sourceChannelTitle": "Veritasium",
        "thumbnailUrl": "https://i.ytimg.com/vi/JsBZOcqZerk/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "sports": {
    "categoryId": "sports",
    "categoryName": "Sports",
    "hue": 140,
    "builtAt": 1794329749401,
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
        "youtubeVideoId": "xwtCdHd7H7w",
        "title": "Ball Touched The CLOUDS ☁️ (feat. iShowSpeed)",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/xwtCdHd7H7w/hqdefault.jpg",
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
        "youtubeVideoId": "PknrQZXny-8",
        "title": "This Trick Shot Took 10 HOURS 🤯",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/PknrQZXny-8/hqdefault.jpg",
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
        "youtubeVideoId": "LY-5ZVz85ak",
        "title": "He Was NOT Having It 🤣",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/LY-5ZVz85ak/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Y-TROjNLxnc",
        "title": "LEAST ATTEMPTS WINS!  🔨🫪",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/Y-TROjNLxnc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "65TPLr_V9kg",
        "title": "Different Baseball Bats",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/65TPLr_V9kg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "VxEBPX9q-94",
        "title": "Bro Is The GREATEST Athlete 🤯",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/VxEBPX9q-94/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "wbwASuinA80",
        "title": "The Most Unexpected Buzzer-Beater 🤯",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/wbwASuinA80/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "253eYPQMZ4U",
        "title": "The WORST Tan Lines Ever 🤣",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/253eYPQMZ4U/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "M0o51u1iEdI",
        "title": "Throwing A Perfect Football Spiral @zackdfilms",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/M0o51u1iEdI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "4MZHXB6UX-c",
        "title": "Overtime 52: PIRATE EDITION",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/4MZHXB6UX-c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "eqjf0RN6Pas",
        "title": "How WE Were Moving Using The Wii 🤣",
        "sourceChannelId": "UCRijo3ddMTht_IHyNSNXpNQ",
        "sourceChannelTitle": "Dude Perfect",
        "thumbnailUrl": "https://i.ytimg.com/vi/eqjf0RN6Pas/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "travel": {
    "categoryId": "travel",
    "categoryName": "Travel",
    "hue": 190,
    "builtAt": 1794329760549,
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
        "youtubeVideoId": "61XiQ9ahJjA",
        "title": "I Have 7 Chase Business Cards: This One’s the Best",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/61XiQ9ahJjA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "J60JYPH0nZc",
        "title": "One Airport Search Could Save TONS of Points ✈️ #shorts",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/J60JYPH0nZc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "smWyVThkB0U",
        "title": "Affordable Destinations That Feel Like Luxury 🌴 #shorts",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/smWyVThkB0U/hqdefault.jpg",
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
        "youtubeVideoId": "ZcuejFNXQ7Y",
        "title": "Why This $95 Card Earned a Spot in My Wallet 💳 #shorts",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZcuejFNXQ7Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "bTav1wv2xqY",
        "title": "Our Best Flight Redemptions Ever 🤯✈️ #shorts",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/bTav1wv2xqY/hqdefault.jpg",
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
        "youtubeVideoId": "jZb8qTrR5lk",
        "title": "Credit Card Stacking Explained: Save More, Earn More",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/jZb8qTrR5lk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ey7do6LYBfs",
        "title": "Don’t Transfer Points Until You Know This ⏳ #shorts",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/ey7do6LYBfs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "diKUDlmVG78",
        "title": "The Capital One Venture Review",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/diKUDlmVG78/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "VVZZ-n71YAk",
        "title": "5th Night Free: The Easiest Hotel Points Win 🏨 #shorts",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/VVZZ-n71YAk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1xQ_n2fe0LE",
        "title": "We Took a Cruise to the Top of the World 🧊 #shorts",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/1xQ_n2fe0LE/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ydnDb1h1evo",
        "title": "We Took a Cruise to the Top of the World | Arctic Expedition",
        "sourceChannelId": "UCneNuMawbfqgXCew2EdZMcQ",
        "sourceChannelTitle": "Daily Drop",
        "thumbnailUrl": "https://i.ytimg.com/vi/ydnDb1h1evo/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "film": {
    "categoryId": "film",
    "categoryName": "Film",
    "hue": 300,
    "builtAt": 1794329772102,
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
        "youtubeVideoId": "LdbmF1bzaUI",
        "title": "when you notice the sunlight streaming through the trees - 1 Hour Nature Ambience",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/LdbmF1bzaUI/hqdefault.jpg",
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
        "youtubeVideoId": "FX49j9ImvlU",
        "title": "My Favorite Pacino Performance #thomasflight #acting",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/FX49j9ImvlU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "WKGcyGf_cII",
        "title": "When You're A Bad Director on Purpose",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/WKGcyGf_cII/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hygub3ScCbQ",
        "title": "Furiosa - Thomas Flight Review",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/hygub3ScCbQ/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "U9gxcpj1pzs",
        "title": "Is Maverick Metamodern? The New Religious Myths of Science Fiction - A Chat with Damien Walter",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/U9gxcpj1pzs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "k7vOPqlW6R8",
        "title": "Is Succession a Good Critique of Capitalism? - Finale Discussion",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/k7vOPqlW6R8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "_fVTObVOPpo",
        "title": "Marking a Story Beat with A Pan in Parasite",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/_fVTObVOPpo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-xTCvRtv9qI",
        "title": "Coke's Failed Postmodernist Soda",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/-xTCvRtv9qI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "47oPXtw3lW4",
        "title": "Severance S1 Discussion - Stream Theory",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/47oPXtw3lW4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "lK7RscqBi4I",
        "title": "Succession S3 Finale Discussion w/ Thomas Flight and Skip Intro - Stream Theory",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/lK7RscqBi4I/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "-oQK4Hdrj7k",
        "title": "What is Succession Really About? - Stream Theory Podcast",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/-oQK4Hdrj7k/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "rWTekZJVWAA",
        "title": "The White Lotus Discussion - Stream Theory Podcast",
        "sourceChannelId": "UC-hehDTvO4X8d9M7MVtpElg",
        "sourceChannelTitle": "Seeing Through Our Screens - Thomas Flight",
        "thumbnailUrl": "https://i.ytimg.com/vi/rWTekZJVWAA/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "fitness": {
    "categoryId": "fitness",
    "categoryName": "Fitness",
    "hue": 100,
    "builtAt": 1794329782042,
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
        "youtubeVideoId": "CoWcu2b498g",
        "title": "How to find your purpose",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/CoWcu2b498g/hqdefault.jpg",
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
        "youtubeVideoId": "pcvzzVeE4c8",
        "title": "How to share your thoughts clearly",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/pcvzzVeE4c8/hqdefault.jpg",
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
        "youtubeVideoId": "RtLUWw0IViI",
        "title": "Patience can help you achieve your goals faster (if you understand it)",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/RtLUWw0IViI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "F5SB9FKJbsg",
        "title": "how to attract like-minded people",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/F5SB9FKJbsg/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "dMk4xLKL6lU",
        "title": "watch this if you're worried about growing up",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/dMk4xLKL6lU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "jT3h8Mu0l74",
        "title": "how to communicate so people actually listen",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/jT3h8Mu0l74/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KBB27UC4nRc",
        "title": "how to make friends (as an adult)",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/KBB27UC4nRc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "K8eTKeKj85Y",
        "title": "how to build confidence that doesn't feel \"fake\"",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/K8eTKeKj85Y/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "KyB6GACrOow",
        "title": "Simple method to make (almost) any decision better and faster",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/KyB6GACrOow/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "fjtsT8y0vlU",
        "title": "balancing hard work and mental health",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/fjtsT8y0vlU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "lfsS_a5n8JY",
        "title": "kombucha tier list (unsponsored review)",
        "sourceChannelId": "UCmCnayXABSyVjexptPEQxlA",
        "sourceChannelTitle": "Coffee With Hampton",
        "thumbnailUrl": "https://i.ytimg.com/vi/lfsS_a5n8JY/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "art": {
    "categoryId": "art",
    "categoryName": "Art",
    "hue": 330,
    "builtAt": 1794329792479,
    "videos": [
      {
        "youtubeVideoId": "sTuD_8UD7Kg",
        "title": "The Art School Advice I Wish I Had Before Going Into Debt",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/sTuD_8UD7Kg/hqdefault.jpg",
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
        "youtubeVideoId": "NIXL6uEMFJk",
        "title": "How to Shade Dark Skin, Highlights, and More Value Questions - Stanswers #5",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/NIXL6uEMFJk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "JuY-wMddxFs",
        "title": "King Kong's Dinosaur Designer Draws a Dinosaur LIVE - AMA with Greg Broadmore",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/JuY-wMddxFs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "ICcNV-lupqk",
        "title": "Turning a Pumpkin Monster into a Live-Action Horror Creature",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/ICcNV-lupqk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "EgLu0-wEF_U",
        "title": "Mindful Practice Transformed His Sketching",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/EgLu0-wEF_U/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "piUKhHLFOHo",
        "title": "October Proko Challenge Review with Michael Hampton - Costume Study",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/piUKhHLFOHo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "6uEdceB24-M",
        "title": "Stop Drawing Faces Without Personality",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/6uEdceB24-M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "cmw0zZGUy2M",
        "title": "Character Sketching and Inking with Enox",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/cmw0zZGUy2M/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hu5va2NvT94",
        "title": "How an Artist Thinks in Perspective",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/hu5va2NvT94/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "c7-2HQZkMI4",
        "title": "Manga Making Basics",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/c7-2HQZkMI4/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "hH6kxQBYIEU",
        "title": "How a Marvel Artist Paints a Comic Cover",
        "sourceChannelId": "UClM2LuQ1q5WEc23462tQzBg",
        "sourceChannelTitle": "Proko",
        "thumbnailUrl": "https://i.ytimg.com/vi/hH6kxQBYIEU/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "design": {
    "categoryId": "design",
    "categoryName": "Design",
    "hue": 45,
    "builtAt": 1794329802374,
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
        "youtubeVideoId": "5StC8a8Hyjo",
        "title": "Your Hallway Could Be Working Harder #nevertoosmall #mycitymybackyard",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/5StC8a8Hyjo/hqdefault.jpg",
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
        "youtubeVideoId": "cSn5B-pqlhc",
        "title": "Small Polish Apartment With Pink Kitchen And Clever Home Office 🩷💚 #nevertoosmall #shorts",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/cSn5B-pqlhc/hqdefault.jpg",
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
        "youtubeVideoId": "yUzgb0RYpfc",
        "title": "Small Apartment Transformed With Clever Storage and Colour, Poland 58sqm/624sqft",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/yUzgb0RYpfc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "QFdLuNiOfew",
        "title": "This Is Not A Bookstore. It's A 45sqm/484sqft Apartment.",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/QFdLuNiOfew/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "9keQHV4KA0c",
        "title": "Now You See A Kitchen. Now You Don’t.",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/9keQHV4KA0c/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NCfr4AlhFRc",
        "title": "Issue 9 Of Our Magazine Is Out Now!",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/NCfr4AlhFRc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "95vGq80ofvk",
        "title": "Sure, White Is Safe, But Colour Is Also Not The Enemy In Your Small Space.",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/95vGq80ofvk/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "mBN76li8MO0",
        "title": "Meet Illustrator Jay Cover Living In Hastings, UK #nevertoosmall #mycitymybackyard",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/mBN76li8MO0/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NTx_uOlJ4kU",
        "title": "Let's Talk About Cooking, Bathing… And Intimacy.",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/NTx_uOlJ4kU/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "Pr3I8Kvu124",
        "title": "Meet Your Tiny Guide To A Very Tasty Singapore…",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/Pr3I8Kvu124/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "oamtnfwZ3MQ",
        "title": "What’s It Like To Live In A Transformer?",
        "sourceChannelId": "UC_zQ777U6YTyatP3P1wi3xw",
        "sourceChannelTitle": "NEVER TOO SMALL",
        "thumbnailUrl": "https://i.ytimg.com/vi/oamtnfwZ3MQ/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  },
  "learning": {
    "categoryId": "learning",
    "categoryName": "Learning",
    "hue": 235,
    "builtAt": 1794329812681,
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
        "youtubeVideoId": "bw5tzcoEG88",
        "title": "How to effectively use visuals in your presentation",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/bw5tzcoEG88/hqdefault.jpg",
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
        "youtubeVideoId": "8RPK5KwYhgA",
        "title": "What if you didn’t brush your teeth for a year? - Justin Merritt",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/8RPK5KwYhgA/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "nXvKDYRvTno",
        "title": "Scary stories to watch in the dark (if you dare…)",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/nXvKDYRvTno/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "a_4eFB8pPwI",
        "title": "5 sneaky ways stores get you to spend more",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/a_4eFB8pPwI/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "NPJ9KZqrl50",
        "title": "Why does this animal never age? - Raymond Adkins",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/NPJ9KZqrl50/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "av3zdxYvCp8",
        "title": "3 things to never do with a credit card",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/av3zdxYvCp8/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "1uTRlM6MbMo",
        "title": "How to present your ideas effectively",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/1uTRlM6MbMo/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "h6CmKF-mN2U",
        "title": "Which is better: Buying or renting a home? - Ella Feldman",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/h6CmKF-mN2U/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "JjhrN0FcHpM",
        "title": "Why is Queen Victoria so controversial? - Carolyn Harris",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/JjhrN0FcHpM/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "G3hXvByzLHs",
        "title": "6 ways to be more persuasive",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/G3hXvByzLHs/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "z3Y-gsBKChc",
        "title": "Why are AI data centers using so much electricity? - Sajan Saini",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/z3Y-gsBKChc/hqdefault.jpg",
        "durationSec": 600
      },
      {
        "youtubeVideoId": "jG7ULeWUfDw",
        "title": "Do we actually know how magnets work? - Rachel Yang",
        "sourceChannelId": "UCsooa4yRKGN_zEE8iknghZA",
        "sourceChannelTitle": "TED-Ed",
        "thumbnailUrl": "https://i.ytimg.com/vi/jG7ULeWUfDw/hqdefault.jpg",
        "durationSec": 600
      }
    ]
  }
};
