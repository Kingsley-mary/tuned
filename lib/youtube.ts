import { ChannelLineup, Video } from './types';
import { CATEGORIES, SEED_LINEUPS } from './seed-catalog';
import { getVideoDuration } from './broadcast-clock';
import { readCatalogSnapshot } from './catalog-storage';
import { isYouTubeShort, MAX_SHORT_DURATION_SEC } from './youtube-shorts';

// Comprehensive roster of verified top creators per television channel (11-16 creators per channel)
export const BROADCAST_CHANNELS_MAP: Record<string, { id: string; name: string }[]> = {
  "tech": [
    {
      "id": "UCUUNkL6Wke6i0P6funa7wdQ",
      "name": "AppleInsider"
    },
    {
      "id": "UCOmcA3f_RrH6b9NmcNa4tdg",
      "name": "CNET"
    },
    {
      "id": "UCgyqtNWZmIxTx3b6OxTSALw",
      "name": "Android Authority"
    },
    {
      "id": "UC-6OW5aJYBFM33zXQlBKPNA",
      "name": "Engadget"
    },
    {
      "id": "UCBJycsmduvYEL83R_U4JriQ",
      "name": "Marques Brownlee"
    },
    {
      "id": "UC2Xd-TjJByJyK2w1zNwY0zQ",
      "name": "Fireship"
    },
    {
      "id": "UCsBjURrPoezykLs9EqgamOA",
      "name": "Fireship Classic"
    },
    {
      "id": "UCdBK94H6oZT2Q7l0-b0xmMg",
      "name": "Linus Tech Tips"
    },
    {
      "id": "UCddiUEpeqJcYeBxX1IVBKvQ",
      "name": "The Verge"
    },
    {
      "id": "UCMiJRAwDNSNzuYeN2uWa0pA",
      "name": "Mrwhosetheboss"
    },
    {
      "id": "UCWFKCr40YwOZQx8FHU_ZqqQ",
      "name": "JerryRigEverything"
    },
    {
      "id": "UC1IQIspOkCeV3WnYm32SBFQ",
      "name": "Austin Evans"
    },
    {
      "id": "UCG7J20LhUeLl6y_Emi7OJrA",
      "name": "The Studio"
    },
    {
      "id": "UCXv-co3EYHF7aOH4A93qAHQ",
      "name": "Unbox Therapy"
    },
    {
      "id": "UC9fSZHEh6XsRpX-xJc6lT3A",
      "name": "UrAvgConsumer"
    },
    {
      "id": "UCC_NjLEb2Sley94py4vSYTA",
      "name": "Andres Vidoza"
    },
    {
      "id": "UCE_M8A5yxnLfW0KghEeajjw",
      "name": "Apple"
    },
    {
      "id": "UCBK_MzhanH8HamrFbABbe8Q",
      "name": "ASUS"
    },
    {
      "id": "UCHuiy8bXnmK5nisYHUd1J5g",
      "name": "NVIDIA"
    },
    {
      "id": "UCJSJ0xIWf4e3hNu7KgYqPxg",
      "name": "Hall Of Tech LLC"
    },
    {
      "id": "UC415bOPUcGSamy543abLmRA",
      "name": "Cleo Abram"
    },
    {
      "id": "UCuVQmkiETvqmLviDcBtQw4A",
      "name": "Nothing"
    },
    {
      "id": "UCWwgaK7x0_FR1goeSRazfsQ",
      "name": "Samsung"
    },
    {
      "id": "UCxDb8z2KsJTwDTRixbx-Ncg",
      "name": "Kagan"
    },
    {
      "id": "UCEeH57P89hPQ1Sp2TavfICA",
      "name": "Parker Burton"
    },
    {
      "id": "UCEli52HZqbog3LQr5sRzL1A",
      "name": "Shevon Salmon"
    },
    {
      "id": "UCQQBbC25U6zJtGhxUnaPOLg",
      "name": "Devyn Johnston"
    },
    {
      "id": "UCK8sQmJBp8GCxrOtXWBpyEA",
      "name": "Google"
    },
    {
      "id": "UCRsSVa7zu3l5e0CI3j14NrA",
      "name": "soiboi soft"
    },
    {
      "id": "UConJDkGk921yT9hISzFqpzw",
      "name": "Freethink"
    },
    {
      "id": "UCNl9pCCDFUWqWmvk4sI5WLA",
      "name": "Life Of Gaurz"
    },
    {
      "id": "UCnty0z0pNRDgnuoirYXnC5A",
      "name": "CodeTV"
    },
    {
      "id": "UCOQ6GGRyyu8S3jahnUz2zHw",
      "name": "Bad Decisions Studio "
    },
    {
      "id": "UC1W5EP62dPAx7nmyspMACkw",
      "name": "Helsing"
    },
    {
      "id": "UCDB_E_nUM5rLplQKgkibFNg",
      "name": "SECTOR 07"
    },
    {
      "id": "UCnv0gfLQFNGPJ5MHSGuIAkw",
      "name": "HACKADAY"
    }
  ],
  "games": [
    {
      "id": "UCMOBdfLjLT-PzrGzld8GjRw",
      "name": "Carbon"
    },
    {
      "id": "UCqJ-Xo29CKyLTjn6z2XwYAw",
      "name": "Game Maker's Toolkit"
    },
    {
      "id": "UC-lHJZR3Gqxm24_Vd_AJ5Yw",
      "name": "IGN"
    },
    {
      "id": "UCNvzD7Z-g64bPXxGzaQaa4g",
      "name": "gameranx"
    },
    {
      "id": "UCZ7AeeVbyslLM_8-nVy2B8Q",
      "name": "Skill Up"
    },
    {
      "id": "UCLdBr5f6RcP6l_TAP4GkhDQ",
      "name": "Digital Foundry"
    },
    {
      "id": "UC5CE6nbu1tjSGha-a_cHAFA",
      "name": "GameSpot"
    },
    {
      "id": "UCL7O6Onu0lBcwZ8t-YMgGcw",
      "name": "Easy Allies"
    },
    {
      "id": "UCYt9E2d_GCrPzquW-5MZwmQ",
      "name": "Modern Vintage Gamer"
    },
    {
      "id": "UCHDRlTIaDXGGYduDDNrBmTw",
      "name": "Arlo"
    },
    {
      "id": "UCDTV8DckMvn7mlgtdxTyR-g",
      "name": "Spawn Wave"
    },
    {
      "id": "UCsvn_Po0SmunchJYOWpOxMg",
      "name": "videogamedunkey"
    },
    {
      "id": "UC2eEGT06FrWFU6VBnPOR9lg",
      "name": "Girlfriend Reviews"
    },
    {
      "id": "UCKMkV9T20tUOBqwsi5xh7HA",
      "name": "Wholesome Games"
    },
    {
      "id": "UCIPPMRA040LQr5QPyJEbmXA",
      "name": "MrBeast Gaming"
    },
    {
      "id": "UC7Y7aX_EMsRwue_G_Vb7YDA",
      "name": "geminitay"
    },
    {
      "id": "UChFur_NwVSbUozOcF_F2kMg",
      "name": "Mumbo Jumbo"
    },
    {
      "id": "UCR9Gcq0CMm6YgTzsDxAxjOQ",
      "name": "Grian"
    },
    {
      "id": "UC6VcWc1rAoWdBCM0JxrRQ3A",
      "name": "Rockstar Games"
    },
    {
      "id": "UCuzWsvCIGy56ELIsKc4MOUQ",
      "name": "Flow State"
    },
    {
      "id": "UCO9mCmS86IbJM4BHTBYpotQ",
      "name": "Goated"
    },
    {
      "id": "UCoVnZiFHqOuIbYp7MFPU3FQ",
      "name": "Kindle Bubble Dump"
    },
    {
      "id": "UCjBp_7RuDBUYbd1LegWEJ8g",
      "name": "XBOX"
    },
    {
      "id": "UC-2Y8dQb0S6DtpxNgAKoJKA",
      "name": "PlayStation"
    },
    {
      "id": "UC1sELGmy5jp5fQUugmuYlXQ",
      "name": "Minecraft"
    },
    {
      "id": "UC-M2qLCBDD1vOvws_YKN55Q",
      "name": "redthreadgames"
    },
    {
      "id": "UCEW0O9GyXRw420kj4dL8CkQ",
      "name": "orkid pulse"
    },
    {
      "id": "UCmb9CzRZCd71cdcesqyzenA",
      "name": "Snarple"
    },
    {
      "id": "UChRxI4p6X8u7vCaRmpHK-rw",
      "name": "Riloe"
    },
    {
      "id": "UCpmThB2TR0XQ8Y8Zv4zgYyA",
      "name": "Hytale"
    },
    {
      "id": "UCvRu5NjRmXy4UbKNHBhmKYA",
      "name": "synn matthew"
    },
    {
      "id": "UCSLAT2AVACxik7Ez8f9nsRQ",
      "name": "shovel241"
    },
    {
      "id": "UCGwITW9jq4h_9osOC-jFnJw",
      "name": "ThaMango"
    },
    {
      "id": "UC8CX0LD98EDXl4UYX1MDCXg",
      "name": "VALORANT"
    },
    {
      "id": "UCqDS7KWjAPKv-7ZSlro9OiQ",
      "name": "thegameawards"
    },
    {
      "id": "UC4UNqGYuB2q49GzGD_CBIVQ",
      "name": "TrixyBlox"
    },
    {
      "id": "UCVb8JXAznL2asigbDnrP6jA",
      "name": "Sluda Builds"
    },
    {
      "id": "UCP4kPIzNhpTGrn75XeLVVXg",
      "name": "nounish"
    },
    {
      "id": "UC-dqqfoSrz8sAYzpJ2zdIIw",
      "name": "Laynce"
    },
    {
      "id": "UC1MaLhSumVa9tx_qL2BR-ug",
      "name": "ApolloTV"
    },
    {
      "id": "UCGIY_O-8vW4rfX98KlMkvRg",
      "name": "Nintendo of America"
    },
    {
      "id": "UC0fDG3byEcMtbOqPMymDNbw",
      "name": "Noclip"
    },
    {
      "id": "UCSHBlPhuCd1sDOdNANCwjrA",
      "name": "Noclip Podcast"
    },
    {
      "id": "UCBobmJyzsJ6Ll7UbfhI4iwQ",
      "name": "Unreal Engine"
    }
  ],
  "music": [
    {
      "id": "UC2pmfLm7iq6Ov1UwYrWYkZA",
      "name": "Vevo"
    },
    {
      "id": "UC4eYXhJI4-7wSWc8UNRwD4A",
      "name": "NPR Tiny Desk"
    },
    {
      "id": "UC2Qw1dzXDBAZPwS7zm37g8g",
      "name": "COLORS"
    },
    {
      "id": "UC7nrQB0dRxdQpH8-y8glEDw",
      "name": "NPR Music"
    },
    {
      "id": "UCyFZMEnm1il5Wv3a6tPscbA",
      "name": "Genius"
    },
    {
      "id": "UC3I2GFN_F8WudD_2jUZbojA",
      "name": "KEXP"
    },
    {
      "id": "UCsVcseUYbYjldc-XgcsiEbg",
      "name": "Billboard"
    },
    {
      "id": "UCG36u-k09zdIPQh5EEdVgTA",
      "name": "Mahogany Sessions"
    },
    {
      "id": "UC-JblcinswY50lrUdSaRNEg",
      "name": "Rolling Stone"
    },
    {
      "id": "UCCycRfTS7V9WOFfWfkNVCSg",
      "name": "Cercle"
    },
    {
      "id": "UCxAICW_LdkfFYwTqTHHE0vg",
      "name": "MTV"
    },
    {
      "id": "UCWjmAUHmajb1-eo5WKk_22A",
      "name": "Audiotree"
    },
    {
      "id": "UCSJ4gkVC6NrvII8umztf0Ow",
      "name": "Lofi Girl"
    },
    {
      "id": "UC-FQUIVQ-bZiefzBiQAa8Fw",
      "name": "BBC Radio 1"
    },
    {
      "id": "UCsN8M73DMWa8SPp5o_0IAQQ",
      "name": "Tomorrowland"
    },
    {
      "id": "UCGBpxWJr9FNOcFYA5GkKrMg",
      "name": "Boiler Room"
    },
    {
      "id": "UCpDJl2EmP7Oh90Vylx0dZtA",
      "name": "Spinnin' Records"
    },
    {
      "id": "UCRLZb8PpI9N7COmYqHiDH7A",
      "name": "Sofar Sounds"
    },
    {
      "id": "UCp8OOssjSjGZRVYK6zWbNLg",
      "name": "Monstercat"
    },
    {
      "id": "UCAKcSON6PSG_JkTbXh2WdIg",
      "name": "The Current"
    },
    {
      "id": "UC4rasfm9J-X4jNl9SvXp8xA",
      "name": "Ultra Music"
    },
    {
      "id": "UC_PscE_7n8SiMspieMGMK_A",
      "name": "Paste Magazine"
    },
    {
      "id": "UC54U5gpKkaa_BpXRVNip2Dw",
      "name": "KCRW"
    },
    {
      "id": "UC7kI8WjpCfFoMSNDuRh_4lA",
      "name": "Pitchfork"
    },
    {
      "id": "UC_m96wEUiEktKJ_0JoqqGfQ",
      "name": "ROTI"
    },
    {
      "id": "UC89IYKXyf15qNezA7IuFG1A",
      "name": "Little Simz"
    },
    {
      "id": "UCHzIX2frWnKAURPn3tK4wMA",
      "name": "Surreal Cat"
    },
    {
      "id": "UCn9Vf5gBcLMNGvAy37BPCaA",
      "name": "Alesa Mileto"
    },
    {
      "id": "UC_sOjEnngNB2y_AEaDd2cSA",
      "name": "Epidemic Sound"
    },
    {
      "id": "UC3lBXcrKFnFAFkfVk5WuKcQ",
      "name": "Kendrick Lamar"
    },
    {
      "id": "UCeJrRK_Pt1m23l5zgSytVUA",
      "name": "duplee"
    },
    {
      "id": "UC3JhfsgFPLSLNEROQCdj-GQ",
      "name": "Headspace"
    },
    {
      "id": "UCK7oVw_ftuBIwiipiBf7ogA",
      "name": "Ayra Starr"
    },
    {
      "id": "UCCQ1pIRRzHMigvFqnwQyqfw",
      "name": "GENER8ION"
    },
    {
      "id": "UCdI8MAC5HoPJSJ4zrgDDI-Q",
      "name": "Tame Impala"
    },
    {
      "id": "UCMrrA4mjaYpt2FH6QnEP8nw",
      "name": "JohnMichaelHowell"
    },
    {
      "id": "UCU9R50wyBPKpdbcIScAyZig",
      "name": "ASAKE"
    },
    {
      "id": "UCP55DP1xXupgE8nm2mZG6MQ",
      "name": "MarvelMusicVEVO"
    },
    {
      "id": "UCiGm_E4ZwYSHV3bcW1pnSeQ",
      "name": "Billie Eilish"
    },
    {
      "id": "UCRE-097LGtx_Zo7LrHvkycA",
      "name": "JISOO"
    },
    {
      "id": "UC0WP5P-ufpRfjbNrmOWwLBQ",
      "name": "The Weeknd"
    },
    {
      "id": "UC5-cg5RahETrjGu-r8zjYCQ",
      "name": "Santan Dave"
    },
    {
      "id": "UC5OrDvL9DscpcAstz7JnQGA",
      "name": "Michael Jackson"
    },
    {
      "id": "UC8HOgNWipVorrlBH8oN2R-A",
      "name": "Tyla"
    },
    {
      "id": "UC4YUMK5ygB3blN0161SHkkw",
      "name": "Violin Guy"
    },
    {
      "id": "UCzTdZz7z2sPRGCImodwOw0g",
      "name": "JT Music"
    },
    {
      "id": "UCWypM0ZUsWlg4Ey4_9s38-A",
      "name": "THEODORA"
    },
    {
      "id": "UCjNRJBlxvvS0UXAT2Ack-QQ",
      "name": "Zara Larsson"
    },
    {
      "id": "UCTI94gkv6LUW6Rc8YeoMEdw",
      "name": "Qing Madi"
    },
    {
      "id": "UCyp1dAHaDeDr_o_DKXIIxhA",
      "name": "AnthonyHamiltonVEVO"
    }
  ],
  "food": [
    {
      "id": "UCfFI8jIjvIApUACJ3qjax2w",
      "name": "Food52"
    },
    {
      "id": "UCJFp8uSYCjXOMnkUyb3CQ3Q",
      "name": "Tasty"
    },
    {
      "id": "UCJHA_jMfCvEnv-3kRjTCQXw",
      "name": "Binging with Babish"
    },
    {
      "id": "UCUAg71CJEvFdOnujmep1Svw",
      "name": "Joshua Weissman"
    },
    {
      "id": "UCIEv3lZ_tNXHzL3ox-_uUGQ",
      "name": "Gordon Ramsay"
    },
    {
      "id": "UCbpMy0Fg74eXXkvxJrtEn3w",
      "name": "Bon Appétit"
    },
    {
      "id": "UC4avs5jYd_FvzQ8f0XYziqw",
      "name": "Babish Eats"
    },
    {
      "id": "UCfyehHM_eo4g5JUyWmms2LA",
      "name": "Sorted Food"
    },
    {
      "id": "UCekQr9znsk2vWxBo3YiLq2w",
      "name": "You Suck at Cooking"
    },
    {
      "id": "UCbRj3Tcy1Zoz3rcf83nW5kw",
      "name": "Sam The Cooking Guy"
    },
    {
      "id": "UCcjhYlL1WRBjKaJsMH_h7Lg",
      "name": "Epicurious"
    },
    {
      "id": "UCpSgg_ECBj25s9moCDfSTsA",
      "name": "Jamie Oliver"
    },
    {
      "id": "UC8gFadPgK2r1ndqLI04Xvvw",
      "name": "Maangchi"
    },
    {
      "id": "UCXGR70CkW_pXb8n52LzCCRw",
      "name": "Mythical Kitchen"
    },
    {
      "id": "UC_pT_Iz6XjuM-eMTlXghdfw",
      "name": "Max the Meat Guy"
    },
    {
      "id": "UCfE5Cz44GlZVyoaYTHJbuZw",
      "name": "Guga Foods"
    },
    {
      "id": "UCMyOj6fhvKFMjxUCp3b_3gA",
      "name": "Nick DiGiovanni"
    },
    {
      "id": "UCDq5v10l4wkV5-ZBIJJFbzQ",
      "name": "Ethan Chlebowski"
    },
    {
      "id": "UCqqJQ_cXSat0KIAVfIfKkVA",
      "name": "J. Kenji López-Alt"
    },
    {
      "id": "UCn5fhcGRrCvrmFibPbT6q1A",
      "name": "Brian Lagerstrom"
    }
  ],
  "science": [
    {
      "id": "UCHnyfMqiRRG1u-2MsSQLbXA",
      "name": "Veritasium"
    },
    {
      "id": "UCsXVk37bltHxD1rDPwtNM8Q",
      "name": "Kurzgesagt – In a Nutshell"
    },
    {
      "id": "UC8VkNBOwvsTlFjoSnNSMmxw",
      "name": "SmarterEveryDay"
    },
    {
      "id": "UC513PdAP2-jWkJunTh5kXRw",
      "name": "Mark Rober"
    },
    {
      "id": "UC6nSFpj9HTCZ5t-N3Rm3-HA",
      "name": "Vsauce"
    },
    {
      "id": "UCUdettijNYvLAm4AixZv4RA",
      "name": "SciShow"
    },
    {
      "id": "UCeiYXex_fwgYDonaTcSIk6w",
      "name": "MinutePhysics"
    },
    {
      "id": "UC1UmujXTizWokDHojdEOdow",
      "name": "Veritasium Classics"
    },
    {
      "id": "UC7_gcs09iThXybpVgjHZ_7g",
      "name": "PBS Space Time"
    },
    {
      "id": "UCH4BNI0-FOK2dMXoFtViWHw",
      "name": "Be Smart"
    },
    {
      "id": "UCFhXFikryT4aFcLkLw2LBLA",
      "name": "NileRed"
    },
    {
      "id": "UC1VLQPn9cYSqx8plbk9RxxQ",
      "name": "The Action Lab"
    },
    {
      "id": "UC1yNl2E66ZzKApQdRuTQ4tw",
      "name": "Sabine Hossenfelder"
    },
    {
      "id": "UCzWQYUVCpZqtN93H8RR44Qw",
      "name": "Seeker"
    },
    {
      "id": "UClYDoTmBdnafBCHhnUCqvtw",
      "name": "Epic Spaceman"
    },
    {
      "id": "UCftwRNsjfRo08xYE31tkiyw",
      "name": "WIRED"
    },
    {
      "id": "UCgqt1RE0k0MIr0LoyJRy2lg",
      "name": "Rational Animations"
    },
    {
      "id": "UCEIwxahdLz7bap-VDs9h35A",
      "name": "Steve Mould"
    },
    {
      "id": "UC7DdEm33SyaTDtWYGO2CwdA",
      "name": "Physics Girl"
    },
    {
      "id": "UCSIvk78tK2TiviLQn4fSHaw",
      "name": "Up and Atom"
    },
    {
      "id": "UCGHZpIpAWJQ-Jy_CeCdXhMA",
      "name": "Cool Worlds"
    }
  ],
  "sports": [
    {
      "id": "UCRijo3ddMTht_IHyNSNXpNQ",
      "name": "Dude Perfect"
    },
    {
      "id": "UC8VddvuHJzIj__Ud0rY2_ww",
      "name": "Red Bull"
    },
    {
      "id": "UCcSrNe5CbXOmsF645RYDe5w",
      "name": "People Are Awesome"
    },
    {
      "id": "UCiio0ydw439X13KyZgMIcHw",
      "name": "ESPN"
    },
    {
      "id": "UC_kdjhHnkUbSImMrezjRyDQ",
      "name": "Olympics Gymnastics"
    },
    {
      "id": "UCJrWyyCRROi8NlQ6Xd9dx5Q",
      "name": "Dude Perfect Extra"
    },
    {
      "id": "UC9UGYdMSKasjY0mhU1lG4lQ",
      "name": "Nitro Circus"
    },
    {
      "id": "UCvgfXK4nTYKudb0rFR6noLA",
      "name": "UFC"
    },
    {
      "id": "UCWJ2lWNubArHWmf3FIHbfcQ",
      "name": "NBA"
    },
    {
      "id": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
      "name": "NFL"
    },
    {
      "id": "UCqQo7ewe87aYAe7ub5UqXMw",
      "name": "House of Highlights"
    },
    {
      "id": "UCqhnX4jA0A5paNd1v-zEysw",
      "name": "GoPro"
    },
    {
      "id": "UCw_LnTX4iYwMic7q20I4uRQ",
      "name": "Secret Base"
    },
    {
      "id": "UCB_qr75-ydFVKSF9Dmo6izg",
      "name": "Formula 1"
    },
    {
      "id": "UCZ7wY7MRDSygp63HIEfdQZA",
      "name": "Sky Sports Football"
    },
    {
      "id": "UCTl3QQTvqHFjurroKxexy2Q",
      "name": "Olympics"
    },
    {
      "id": "UCNtiHO5dvgowvZScesaKUqA",
      "name": "F1 Academy"
    },
    {
      "id": "UCQctwMz9ErTyK6ZpguWNH5Q",
      "name": "The Grid"
    },
    {
      "id": "UCl9E4Zxa8CVr2LBLD0_TaNg",
      "name": "Jomboy Media"
    },
    {
      "id": "UCbcxFkd6B9xUU54InHv4Tig",
      "name": "Tennis TV"
    },
    {
      "id": "UCQk7fWv15ChjMJLCRVmtApw",
      "name": "World Athletics"
    },
    {
      "id": "UCKwGZZMrhNYKzucCtTPY2Nw",
      "name": "PGA Tour"
    },
    {
      "id": "UCt2JXOLNxqry7B_4rRZME3Q",
      "name": "ICC"
    },
    {
      "id": "UCbzRzJNHx7ZLlJML9BjZQVQ",
      "name": "Top Rank Boxing"
    },
    {
      "id": "UCurvRE5fGcdUgCYWgh-BDsg",
      "name": "DAZN Boxing"
    },
    {
      "id": "UCE28rwYoaV7jvU6GVzdu_GQ",
      "name": "World Rugby"
    },
    {
      "id": "UC8pYaQzbBBXg9GIOHRvTmDQ",
      "name": "MotoGP"
    },
    {
      "id": "UCuTaETsuCOkJ0H_GAztWt0Q",
      "name": "Global Cycling Network"
    },
    {
      "id": "UChuLeaTGRcfzo0UjL-2qSbQ",
      "name": "World Surf League"
    },
    {
      "id": "UCG5qGWdu8nIRZqJ_GgDwQ-w",
      "name": "Premier League"
    },
    {
      "id": "UCyGa1YEx9ST66rYrJTGIKOw",
      "name": "UEFA"
    }
  ],
  "travel": [
    {
      "id": "UCneNuMawbfqgXCew2EdZMcQ",
      "name": "Kara and Nate"
    },
    {
      "id": "UCTd7KzdwnFE3lm6LCfYDmUQ",
      "name": "Yes Theory"
    },
    {
      "id": "UCi7KXaqqW_h6ifNVnudH0kQ",
      "name": "Lost LeBlanc"
    },
    {
      "id": "UCodVXWu3aFyE1hGmbJrJJLQ",
      "name": "Drew Binsky"
    },
    {
      "id": "UCkFli83zdGzt7s-IsiRijXA",
      "name": "Wolters World"
    },
    {
      "id": "UCxDZs_ltFFvn0FDHT6kmoXA",
      "name": "Bald and Bankrupt"
    },
    {
      "id": "UCJ7FVLKSOlpTNbuyvqOjPqw",
      "name": "Rick Steves"
    },
    {
      "id": "UCDTINI9skkeZNY2ZXnBqIkQ",
      "name": "Eva zu Beck"
    },
    {
      "id": "UCyEd6QBSgat5kkC6svyjudA",
      "name": "Mark Wiens"
    },
    {
      "id": "UC_DmOS_FBvO4H27U7X0OtRg",
      "name": "Fearless & Far"
    },
    {
      "id": "UCXulruMI7BHj3kGyosNa0jA",
      "name": "Indigo Traveller"
    },
    {
      "id": "UCD5v3wL-6NMG0SMMeR6TxsA",
      "name": "Chopstick Travel"
    },
    {
      "id": "UCiAq_SU0ED1C6vWFMnw8Ekg",
      "name": "The Food Ranger"
    },
    {
      "id": "UC8p_y3iHPe-n3zRfXK2czWA",
      "name": "Tayo Aina"
    },
    {
      "id": "UCf9YWhTNz6G2Sn1Rd7cwZNQ",
      "name": "Katie Roams"
    },
    {
      "id": "UCEIs9nkveW9WmYtsOcJBwTg",
      "name": "Itchy Boots"
    },
    {
      "id": "UCvjJzc-UcTv2P5LR6NGP2lg",
      "name": "DownieLive"
    },
    {
      "id": "UC3Vuq4Q1bKFtAiKYlwRv3oA",
      "name": "Peter Santenello"
    },
    {
      "id": "UCfYCRj25JJQ41JGPqiqXmJw",
      "name": "Sam Chui"
    },
    {
      "id": "UCxkM67T_Iele-mRVUiBkRqg",
      "name": "Jet Lag: The Game"
    },
    {
      "id": "UCHASrbCS-niYRn-Y3WX38pA",
      "name": "Small Brained American"
    },
    {
      "id": "UCbkrifxiaHa0nVwW2sDCVqw",
      "name": "Attaché"
    }
  ],
  "film": [
    {
      "id": "UC-hehDTvO4X8d9M7MVtpElg",
      "name": "Thomas Flight"
    },
    {
      "id": "UCDylnpLJWDj2gKWujjwap9w",
      "name": "StudioBinder"
    },
    {
      "id": "UCKy1dAqELo0zrOtPkf0eTMw",
      "name": "CineFix"
    },
    {
      "id": "UCErSSa3CaP_GJxmFpdjG9Jw",
      "name": "Lessons from the Screenplay"
    },
    {
      "id": "UCzjbia0NqUsSL1_-loJihMg",
      "name": "CinemaStix"
    },
    {
      "id": "UCuPgdqQKpq4T4zeqmTelnFg",
      "name": "kaptainkristian"
    },
    {
      "id": "UCWTFGPpNQ0Ms6afXhaWDiRw",
      "name": "Now You See It"
    },
    {
      "id": "UCJkMlOu7faDgqh4PfzbpLdg",
      "name": "Nerdwriter1"
    },
    {
      "id": "UCx0L2ZdYfiq-tsAXb8IXpQg",
      "name": "Just Write"
    },
    {
      "id": "UCSpFnDQr88xCZ80N-X7t0nQ",
      "name": "Corridor Crew"
    },
    {
      "id": "UCSFAYalJ2Q7Tm_WmLgetmeg",
      "name": "Filmmaker IQ"
    },
    {
      "id": "UCjFqcJQXGZ6T6sxyFB-5i6A",
      "name": "Every Frame a Painting"
    },
    {
      "id": "UCfjaAUlTZRHJapJmCT6eyIg",
      "name": "Spacedock"
    },
    {
      "id": "UCs7nPQIEba0T3tGOWWsZpJQ",
      "name": "Like Stories of Old"
    },
    {
      "id": "UCz97F7dMxBNOfGYu3rx8aCw",
      "name": "Sony Pictures Entertainment"
    },
    {
      "id": "UCvC4D8onUfXzvjTOM-dBfEA",
      "name": "Marvel Entertainment"
    },
    {
      "id": "UCQJWtTnAHhEG5w4uN0udnUQ",
      "name": "Prime Video"
    },
    {
      "id": "UC1Myj674wRVXB9I4c6Hm5zA",
      "name": "Apple TV"
    },
    {
      "id": "UCx-KWLTKlB83hDI6UKECtJQ",
      "name": "HBO Max"
    },
    {
      "id": "UCrRttZIypNTA1Mrfwo745Sg",
      "name": "Paramount Plus"
    },
    {
      "id": "UCVjS9AuBloqJJjhsy3vIfug",
      "name": "Sony"
    },
    {
      "id": "UCWOA1ZGywLbqmigxE4Qlvuw",
      "name": "Netflix"
    },
    {
      "id": "UCeMYsj4kULpER9OQpKn9HhQ",
      "name": "IMAX"
    },
    {
      "id": "UCVTQuK2CaWaTgSsoNkn5AiQ",
      "name": "HBO"
    },
    {
      "id": "UChPRO1CB_Hvd0TvKRU62iSQ",
      "name": "Harry Potter"
    },
    {
      "id": "UCAVadSTSh382kte-fQHqMNw",
      "name": "Legendary"
    },
    {
      "id": "UC7yRILFFJ2QZCykymr8LPwA",
      "name": "New Rockstars"
    },
    {
      "id": "UC9to9MJHFod_HCb5QVRN3uQ",
      "name": "Snarky Jay"
    },
    {
      "id": "UCN_u5w69V9wUZYG8WeJWuNg",
      "name": "Avatar Legends"
    },
    {
      "id": "UC71x8bBOwIEscxAltguHXMQ",
      "name": "Blake Ridder"
    },
    {
      "id": "UCAYsy_6_VBLiXkTGYIO2pdg",
      "name": "William H Baker"
    },
    {
      "id": "UC3sznuotAs2ohg_U__Jzj_Q",
      "name": "The Film Theorists"
    },
    {
      "id": "UCVun3IyFIh6AsEMV11zlVHg",
      "name": "Sticks"
    },
    {
      "id": "UCCwh1iC5ZJ7niFzqqVwAPTA",
      "name": "Moodymeria"
    },
    {
      "id": "UCWfi3ehtvILxj5zjxiVKDXQ",
      "name": "Ermia Ramez"
    },
    {
      "id": "UCpntEHiWoGKaJEosqaPlQhQ",
      "name": "sam boyette"
    },
    {
      "id": "UCKo61AAaRD00ibCWJZ321MQ",
      "name": "SoKrispyMedia"
    },
    {
      "id": "UCSBPzXzIiNrrQFJOdG9TVkA",
      "name": "Talkin&#39; Bout"
    },
    {
      "id": "UCiELs1dxyTThkxGFFo7M6vA",
      "name": "Luda"
    },
    {
      "id": "UCEmc2aF81xiI9JNDGTMOTCQ",
      "name": "Kemz Art"
    },
    {
      "id": "UCxAJ8G44RgNhDwXTJM8gkYw",
      "name": "taichibeni"
    },
    {
      "id": "UCp-R630BEr1UHsvh6HUh8fQ",
      "name": "Sleepy Charlie"
    },
    {
      "id": "UCN-DGJpb0iyPVdK_qto0qsw",
      "name": "Ryder the Omniscient"
    },
    {
      "id": "UCCA75dU6oaqia36HHrVveaQ",
      "name": "Scene It"
    },
    {
      "id": "UCeJWq9aFeZJlRjtLO4ttDAA",
      "name": "akthawicked"
    },
    {
      "id": "UC20Y7fiRyz8aCctBJa937IA",
      "name": "Teja Lisjak"
    },
    {
      "id": "UCcFoxUZrPn3qT0WGLDjqaxA",
      "name": "The Vandalist"
    },
    {
      "id": "UCz11O3R1rNe7rrZjBRSdkQA",
      "name": "Isaac Carlton"
    },
    {
      "id": "UCRZ1OquIwGiUjJS7SXW4Fdg",
      "name": "Life Of Riza"
    },
    {
      "id": "UC8ItWN2sAQFqMvfylrqbwWw",
      "name": "itsn3t"
    },
    {
      "id": "UCiblCUJwnzn77r9_VeCW6Wg",
      "name": "Megan Tan"
    },
    {
      "id": "UCV8Ml5naZgJ2gfH1_6-c8-w",
      "name": "ottilie wills"
    },
    {
      "id": "UCaWd5_7JhbQBe4dknZhsHJg",
      "name": "WatchMojo.com"
    },
    {
      "id": "UC2iUwfYi_1FCGGqhOUNx-iA",
      "name": "ScreenRant"
    },
    {
      "id": "UCuPivVjnfNo4mb3Oog_frZg",
      "name": "A24"
    },
    {
      "id": "UCwDxUt_GJc_dwn0xOp0zRBw",
      "name": "MTube"
    }
  ],
  "fitness": [
    {
      "id": "UCmCnayXABSyVjexptPEQxlA",
      "name": "Hybrid Calisthenics"
    },
    {
      "id": "UCe0TLA0EsQbE-MjuHXevj2A",
      "name": "ATHLEAN-X"
    },
    {
      "id": "UCZIIRX8rkNjVpP-oLMHpeDw",
      "name": "Calisthenicmovement"
    },
    {
      "id": "UCiP6wD_tYlYLYh3agzbByWQ",
      "name": "FitnessBlender"
    },
    {
      "id": "UCFKE7WVJfvaHW5q283SxchA",
      "name": "Yoga With Adriene"
    },
    {
      "id": "UCadiU6WTKl65HUwEih1XLYg",
      "name": "Picture Fit"
    },
    {
      "id": "UCKf0UqBiCQI4Ol0To9V0pKQ",
      "name": "Buff Dudes"
    },
    {
      "id": "UCM2ra7Od2jliHB9TLPKt76w",
      "name": "Movement by David"
    },
    {
      "id": "UCCgLoMYIyP0U56dEhEL1wXQ",
      "name": "Chloe Ting"
    },
    {
      "id": "UCpQ34afVgk8cRQBjSJ1xuJQ",
      "name": "MadFit"
    },
    {
      "id": "UChVRfsT_ASBZk10o0An7Ucg",
      "name": "Pamela Reif"
    },
    {
      "id": "UCgFItI58gEggW1-39DxjVbA",
      "name": "Calisthenics Family"
    },
    {
      "id": "UC68TLK0mAEzUyHx5x5k-S1Q",
      "name": "Jeff Nippard"
    },
    {
      "id": "UCfQgsKhHjSyRLOp9mnffqVg",
      "name": "Renaissance Periodization"
    },
    {
      "id": "UCB2wtYpfbCpYDc5TeTwuqFA",
      "name": "Will Tennyson"
    },
    {
      "id": "UCERm5yFZ1SptUEU4wZ2vJvw",
      "name": "Jeremy Ethier"
    },
    {
      "id": "UCyPYQTT20IgzVw92LDvtClw",
      "name": "Squat University"
    },
    {
      "id": "UCpis3RcTw6t47XO0R_KY4WQ",
      "name": "Caroline Girvan"
    },
    {
      "id": "UCZUUZFex6AaIU4QTopFudYA",
      "name": "growwithjo"
    },
    {
      "id": "UCbfPq-uRqonJQli41muSLeQ",
      "name": "Breathe and Flow"
    },
    {
      "id": "UC3nHsBfXNXSXRFWt_zt7l6A",
      "name": "SeanNalewanyj"
    }
  ],
  "art": [
    {
      "id": "UClM2LuQ1q5WEc23462tQzBg",
      "name": "Proko"
    },
    {
      "id": "UCoal_hpPIPAnWlG-kWHLheA",
      "name": "Drawfee Show"
    },
    {
      "id": "UCfvIqreCk628yB9mp3e_ABQ",
      "name": "Proko TV"
    },
    {
      "id": "UCh-ArhaGOqFsBPrR2yQd42w",
      "name": "Ten Hundred"
    },
    {
      "id": "UCvZe6ZCbF9xgbbbdkiodPKQ",
      "name": "Baumgartner Restoration"
    },
    {
      "id": "UCno-YPZ8BiLrN0Wbl8qICFA",
      "name": "Mark Crilley"
    },
    {
      "id": "UCx-mMlEegnZ-SjWPS73Tgvw",
      "name": "Baylee Jae"
    },
    {
      "id": "UCvcEBQ0K3UsQ8bzWKHKQmbw",
      "name": "Struthless"
    },
    {
      "id": "UCmRm1xtLIpBhuWjTyD411pA",
      "name": "Trent Kaniuga"
    },
    {
      "id": "UCLcxo0ysMP27XTiRKqrdASg",
      "name": "Minnie Small"
    },
    {
      "id": "UCSl51TSNCxLQJqLTQp0B6Cg",
      "name": "Kirsty Partridge Art"
    },
    {
      "id": "UChIHYCXYpUsHY6Wjk03C_uQ",
      "name": "Love2DrawManga"
    },
    {
      "id": "UCKtu_JtQCY0yryIy6zK4ZCg",
      "name": "Marc Brunet"
    },
    {
      "id": "UCM55RjebjSevVWPnj2LEymw",
      "name": "viyaura"
    },
    {
      "id": "UCHu2KNu6TtJ0p4hpSW7Yv7Q",
      "name": "Jazza"
    },
    {
      "id": "UCNNOvB507MRfny7Jcv8MmOw",
      "name": "SamDoesArts"
    },
    {
      "id": "UCpgi6wIZv7c6TlAY-d1PMuw",
      "name": "Chroma Moma"
    },
    {
      "id": "UC96DW3YAifjM7x3LYpPyI0A",
      "name": "Airi Pan"
    },
    {
      "id": "UCjGjl2fpyL5WQBCwy-M4lNw",
      "name": "Konariin"
    },
    {
      "id": "UCcwoY8oOA0DOW2H7OqmqNzw",
      "name": "Brooke Cormier"
    },
    {
      "id": "UCKrYd0tMaMSp16q4xCMiLDQ",
      "name": "Dayungnico"
    },
    {
      "id": "UCwcDy-AjZJ5T7DH9BWaOMZg",
      "name": "Kiptoe"
    },
    {
      "id": "UC1fctxjxOyjNyWYR1Q1j8-g",
      "name": "MEANDI DRAWS"
    },
    {
      "id": "UCFDxyA1H3VEN0VQwfMe2VMQ",
      "name": "Gawx Art"
    },
    {
      "id": "UCLMkh2PYXpQh52d3m2bzNNA",
      "name": "KeshArt"
    },
    {
      "id": "UCggHsHce2n3vvbJf_8YKrMA",
      "name": "Nerdforge"
    }
  ],
  "design": [
    {
      "id": "UC-b3c7kxa5vU-bnmaROgvog",
      "name": "The Futur"
    },
    {
      "id": "UCSb-xYOELhIqVr2n9s-b_4w",
      "name": "Linus Boman"
    },
    {
      "id": "UCw5pljbSyZMq-wjm_notQLQ",
      "name": "Two Times Elliott"
    },
    {
      "id": "UCwOFqUE6Er2hfCvtLGMTW6Q",
      "name": "RIGHT ALIGNED"
    },
    {
      "id": "UC98Glz-MWdnqeZDBxRPUUvQ",
      "name": "Design Docs"
    },
    {
      "id": "UCSIkG6wtvxDduCumCRAAO4A",
      "name": "Will Paterson"
    },
    {
      "id": "UCwADKD62xOgWPxoe68rzMVA",
      "name": "Shantanu Kumar"
    },
    {
      "id": "UC9x81wlmaOq8wykycn9-QiA",
      "name": "Brandon Shepherd"
    },
    {
      "id": "UCqausxjCnGsTl0rQgM7HZWQ",
      "name": "Designer In Japan"
    },
    {
      "id": "UC8ME0E1icwddCikdomxrIVw",
      "name": "Dena Nguyen"
    },
    {
      "id": "UCUn5JuT0zriA1nOJWoumSZw",
      "name": "Scene"
    },
    {
      "id": "UCcBZIvKbIgXGRjn9j2P6lOw",
      "name": "Arteri"
    },
    {
      "id": "UCdgUN8rX3SEb9L7FDub3I6A",
      "name": "Design Theory"
    },
    {
      "id": "UCSLeoz5odIGS2GdlbHbCAUg",
      "name": "Matthew Encina"
    },
    {
      "id": "UCa_aLyHBN8zuisUpHDjmBbw",
      "name": "elliotisacoolguy"
    },
    {
      "id": "UCa8W2_uf81Ew6gYuw0VPSeA",
      "name": "Juxtopposed"
    },
    {
      "id": "UCIn5gFPi5hSB1Gqpur33_3w",
      "name": "The Science of Products"
    },
    {
      "id": "UCS1gMhu2KgHqW4OunIAaKrA",
      "name": "P A N T E R"
    },
    {
      "id": "UCFsUH7Zyy0UXAfv6KQGq9eg",
      "name": "Noggi"
    },
    {
      "id": "UCWIfzAYHyNSyHmT2AO-54yg",
      "name": "pwnisher"
    },
    {
      "id": "UCMosQZ8k4dPITlPZ0Q6kpog",
      "name": "Kaizen"
    },
    {
      "id": "UC0G7e3uCtTyKQy2vZbRaKxg",
      "name": "Works By Design"
    },
    {
      "id": "UC1V-DYqsaj764uBis9-UDug",
      "name": "Foureyes Furniture"
    },
    {
      "id": "UCQJQB-ij7HNYKCyNdi0Y--Q",
      "name": "Make With Miles"
    },
    {
      "id": "UCbtEd1MuY6gd2RpdWqkzXFw",
      "name": "Morley Kert"
    },
    {
      "id": "UC5mKrz-oinuz9stgxYdznrg",
      "name": "makerunit"
    },
    {
      "id": "UCkcBDNWKUSczL9TIx-7h6Qw",
      "name": "David Fragomeni"
    },
    {
      "id": "UC2fWPPz3TVhVWcqWT-D6ufA",
      "name": "Hatch Conference"
    },
    {
      "id": "UCSMOQeBJ2RAnuFungnQOxLg",
      "name": "Blender"
    },
    {
      "id": "UCRnX4Yc585eRTj4UvNkBM8w",
      "name": "Autodesk"
    }
  ],
  "learning": [
    {
      "id": "UCLXo7UDZvByw2ixzpQCufnA",
      "name": "Vox"
    },
    {
      "id": "UCsooa4yRKGN_zEE8iknghZA",
      "name": "TED-Ed"
    },
    {
      "id": "UCAuUUnT6oDeKwE6v1NGQxug",
      "name": "TED-Ed Lessons"
    },
    {
      "id": "UC1_uAIS3r8Vu6JjXWvastJg",
      "name": "3Blue1Brown"
    },
    {
      "id": "UCTWKe1zATFV6d0o6oLS9sgw",
      "name": "Wendover Productions"
    },
    {
      "id": "UC176GAQozKKjhz62H8u9vQQ",
      "name": "Real Engineering"
    },
    {
      "id": "UCX6b17PVsYBQ0ip5gyeme-Q",
      "name": "CrashCourse"
    },
    {
      "id": "UCMOqf8ab-42UUQIdVoKwjlQ",
      "name": "Practical Engineering"
    },
    {
      "id": "UCuCkxoKLYO_EQ2GeFtbM_bw",
      "name": "Half as Interesting"
    },
    {
      "id": "UCoxcjq-8xIDTYp3uz647V5A",
      "name": "Numberphile"
    },
    {
      "id": "UC9-y-6csu5WGm29I7JiwpnA",
      "name": "Computerphile"
    },
    {
      "id": "UCBa659QWEk1AI4Tg--mrJ2A",
      "name": "Tom Scott"
    },
    {
      "id": "UCSju5G2aFaWMqn-_0YBtq5A",
      "name": "Stand-up Maths"
    },
    {
      "id": "UCNIuvl7V8zACPpTmmNIqP2A",
      "name": "OverSimplified"
    },
    {
      "id": "UCfdNM3NAhaBOXCafH7krzrA",
      "name": "The Infographics Show"
    },
    {
      "id": "UCdp4_l1vPmpN-gDbUwhaRUQ",
      "name": "Branch Education"
    },
    {
      "id": "UCZjMzdwVa4dRy_V5AQwEv8A",
      "name": "Historically"
    },
    {
      "id": "UCq8ZAAsI89IoJ-fn1gYpO3g",
      "name": "Nightshift – Kurzgesagt After Dark"
    },
    {
      "id": "UCFYOBrtrYKzdya20cFirkTA",
      "name": "Kieren Westwood"
    },
    {
      "id": "UC3g-w83Cb5pEAu5UmRrge-A",
      "name": "Brandon Sanderson"
    },
    {
      "id": "UCiflcKnh5cZiRWK7jlYKwxA",
      "name": "Elliot Brooks"
    },
    {
      "id": "UCoOae5nYA7VqaXzerajD0lg",
      "name": "Ali Abdaal"
    },
    {
      "id": "UCftSbpEaMtTWcaFnvjwCvXw",
      "name": "Rian Doris"
    },
    {
      "id": "UCtUId5WFnN82GdDy7DgaQ7w",
      "name": "Better Ideas"
    },
    {
      "id": "UC-dmJ79518WlKMbsu50eMTQ",
      "name": "Clark Kegley"
    },
    {
      "id": "UCuXCgyOCMXic7j0_wghXnRA",
      "name": "Mitsi Studio"
    },
    {
      "id": "UCy6v91210figZrnMvfnhZhw",
      "name": "Mysteries of Mythology"
    }
  ],
  "movies": [
    {
      "id": "UC8IHAQMuiJdY6ALuhG7iU8Q",
      "name": "FilmRise Movies"
    },
    {
      "id": "UCVFYikepF-avelvuIaQ_lHA",
      "name": "Popcornflix"
    },
    {
      "id": "UCpHaAKu74UHvcYCi2g_PvBQ",
      "name": "Shout! Studios"
    },
    {
      "id": "UC2u3R3pjOiPZu4LtTlKkxdw",
      "name": "Maverick Movies"
    },
    {
      "id": "UCTMt7iMWa7jy0fNXIktwyLA",
      "name": "Omeleto"
    },
    {
      "id": "UC7sDT8jZ76VLV1u__krUutA",
      "name": "DUST"
    },
    {
      "id": "UCMOB6uDg7e-h8OuCw8dK2_Q",
      "name": "ALTER"
    },
    {
      "id": "UCPPPrnT5080hPMxK1N4QSjA",
      "name": "V Movies"
    },
    {
      "id": "UC6A_LC-A5NVJ2vw9A0OjCug",
      "name": "The Midnight Screening"
    },
    {
      "id": "UCJuyiB0GT9-q92gC_M3XLpg",
      "name": "Indie Rights Movies For Free"
    },
    {
      "id": "UCoulHkEKWQ1t36oBheqEE_g",
      "name": "Gravitas Ventures"
    },
    {
      "id": "UCGBzBkV-MinlBvHBzZawfLQ",
      "name": "Movie Central"
    },
    {
      "id": "UC2iymls3S-p5rsTdCfRYaNw",
      "name": "SamuelGoldwynFilms"
    },
    {
      "id": "UC4ZqZ6V67OWNUxBHLLv7yAA",
      "name": "Watch Movies Now!"
    },
    {
      "id": "UCPHA7A4XYhyQR4ewsuFkKnw",
      "name": "Horror Central"
    },
    {
      "id": "UCX1nchEcBshItKBeJvH-YMw",
      "name": "FREE MOVIES"
    },
    {
      "id": "UCyp-EzJrdTOd9uNPvmdst-w",
      "name": "Short of the Week"
    },
    {
      "id": "UC-1rx8j9Ggp8mp4uD0ZdEIA",
      "name": "TheCGBros"
    },
    {
      "id": "UCZEQZQ8HhFbyFjXUT46XH8g",
      "name": "EncourageTV"
    },
    {
      "id": "UCNDsk0uhSlG1-br1Ex2Rgfg",
      "name": "Tubi"
    }
  ],
  "cartoons": [
    {
      "id": "UCn_FAXem2-e3HQvmK-mOH4g",
      "name": "GLITCH"
    },
    {
      "id": "UCzfyYtgvkx5mLy8nlLlayYg",
      "name": "SpindleHorse"
    },
    {
      "id": "UCbKWv2x9t6u8yZoB3KcPtnw",
      "name": "Alan Becker"
    },
    {
      "id": "UCxXu9tCU63mF1ntk89XPkzA",
      "name": "Worthikids"
    },
    {
      "id": "UCLFXk9J3O-hhOk0msOjKYdQ",
      "name": "TerminalMontage"
    },
    {
      "id": "UCMsgXPD3wzzt8RxHJmXH7hQ",
      "name": "CartoonNetwork"
    },
    {
      "id": "UCWXCrItCF6ZgXrdozUS-Idw",
      "name": "ExplosmEntertainment"
    },
    {
      "id": "UCCn62cYVpl0e_GN-yo1H9yQ",
      "name": "mashed"
    },
    {
      "id": "UC-vrN89jIox3XqAKbEMeFgQ",
      "name": "GOBELINS"
    },
    {
      "id": "UC_976xMxPgzIa290Hqtk-9g",
      "name": "Walt Disney Animation Studios"
    },
    {
      "id": "UCZzvDDvaYti8Dd8bLEiSoyQ",
      "name": "Beast Animations"
    },
    {
      "id": "UCsOav-uzO3ENpoft3VnDIeQ",
      "name": "SkyeWei"
    },
    {
      "id": "UC8hmxmZq7HwS_-tSkNi_n9A",
      "name": "WHAT HAD HAPPENED WAS "
    },
    {
      "id": "UCi7x2X0VSmEKtHPPXVBX_3w",
      "name": "Don&#39;t Walk Home Alone After Dark"
    },
    {
      "id": "UCAjgxh6TBT_mKBjKGDC6g_Q",
      "name": "Jaicemations"
    },
    {
      "id": "UC_m-6n6uGAM0K_qPRzGqDaw",
      "name": "NAITWAFREDDY "
    },
    {
      "id": "UCWifGU19tH1hkUiiVnWRAOA",
      "name": "AFarParadice"
    },
    {
      "id": "UCQF0f62JXnfFSxKDmN8SDUg",
      "name": "SolarBalls"
    },
    {
      "id": "UCpHWSOWGarUZIjTvTjbQkDA",
      "name": "OnzLemur"
    },
    {
      "id": "UCNSyOUwDIn_PUfXSQQKDhHQ",
      "name": "No Villains Are SAFE!"
    },
    {
      "id": "UC5GpNHRBAaYi-l1k2cXXNyQ",
      "name": "Scribbl"
    },
    {
      "id": "UCHjNlp7-558arbLBcYn0Prg",
      "name": "Dahboy!"
    },
    {
      "id": "UChdHQcTHJ8inhKivfdJsCAA",
      "name": "YAL00 at your service"
    }
  ],
  "industry": [
    {
      "id": "UChZgikssAJkmiQOv_sO-ngQ",
      "name": "ProcessX"
    },
    {
      "id": "UC-b5z1biw_Qra-eOfC4kuqQ",
      "name": "Miracle Process"
    },
    {
      "id": "UCNP1mwtQKwZ2At6QRkJk4tw",
      "name": "FACTORYmonster"
    },
    {
      "id": "UCSNIT8Z40XgB4RKk9Vhf1eA",
      "name": "All process of world"
    },
    {
      "id": "UCB9PwFQwTg9ig42xwKsfSEg",
      "name": "Awesome Process"
    },
    {
      "id": "UCbW5tOCMJcgGGK6YtVqCLuA",
      "name": "King Process"
    },
    {
      "id": "UCc2lUKVOTXKlQR7Fm7h1JfQ",
      "name": "TITANS of CNC MACHINING"
    },
    {
      "id": "UCj1VqrHhDte54oLgPG4xpuQ",
      "name": "Stuff Made Here"
    },
    {
      "id": "UC5NO8MgTQKHAWXp6z8Xl7yQ",
      "name": "This Old Tony"
    },
    {
      "id": "UCMrMVIBtqFW6O0-MWq26gqw",
      "name": "my mechanics"
    },
    {
      "id": "UCworsKCR-Sx6R6-BnIjS2MA",
      "name": "Clickspring"
    },
    {
      "id": "UCw3UZn1tcVe7pH3R6C3Gcng",
      "name": "Abom79"
    },
    {
      "id": "UC2wdo5vU7bPBNzyC2nnwmNQ",
      "name": "Cutting Edge Engineering"
    },
    {
      "id": "UCp68_FLety0O-n9QU6phsgw",
      "name": "colinfurze"
    },
    {
      "id": "UCivA7_KLKWo43tFcCkFvydw",
      "name": "Applied Science"
    },
    {
      "id": "UCcXhhVwCT6_WqjkEniejRJQ",
      "name": "Wintergatan"
    },
    {
      "id": "UCWizIdwZdmr43zfxlCktmNw",
      "name": "Alec Steele"
    },
    {
      "id": "UC6I0KzAD7uFTL1qzxyunkvA",
      "name": "Blacktail Studio"
    },
    {
      "id": "UCckETVOT59aYw80B36aP9vw",
      "name": "MatthiasWandel"
    },
    {
      "id": "UCFtc3XdXgLFwhlDajMGK69w",
      "name": "NightHawkInLight"
    }
  ],
  "architecture": [
    {
      "id": "UC_zQ777U6YTyatP3P1wi3xw",
      "name": "Never Too Small"
    },
    {
      "id": "UC0k238zFx-Z8xFH0sxCrPJg",
      "name": "Architectural Digest"
    },
    {
      "id": "UCgxg48_pay4R67s-7WOgWFA",
      "name": "The Local Project"
    },
    {
      "id": "UCDsElQQt_gCZ9LgnW-7v-cQ",
      "name": "Kirsten Dirksen"
    },
    {
      "id": "UCJ_2hNMxOzNjviJBiLWHMqg",
      "name": "Dami Lee"
    },
    {
      "id": "UCYAm24PkejQR2xMgJgn7xwg",
      "name": "Stewart Hicks"
    },
    {
      "id": "UCoNTMWgGuXtGPLv9UeJZwBw",
      "name": "Living Big In A Tiny House"
    },
    {
      "id": "UCsWG9ANbrmgR0z-eFk_A3YQ",
      "name": "Dezeen"
    },
    {
      "id": "UC3r_kdJocuqtDYb2GgM42Ng",
      "name": "ArchDaily"
    },
    {
      "id": "UCv6JHGYnS74viHnZ-6zR2Jg",
      "name": "designboom"
    },
    {
      "id": "UCLYrUmw0L_bjFeQCvWuiijg",
      "name": "The Luxury Home Show"
    },
    {
      "id": "UC6n8I1UDTKP1IWjQMg6_TwA",
      "name": "The B1M"
    },
    {
      "id": "UC4GYmnbkZranfQo2f3TJ3KA",
      "name": "COMPOUND"
    },
    {
      "id": "UCOn4OkRtzsN4EP8pWM-IYVw",
      "name": "Property London"
    },
    {
      "id": "UCMayaatitp-arhjI7azj9IA",
      "name": "Refined Living"
    },
    {
      "id": "UC6TY36Ys_J6UPKd75TpRuUw",
      "name": "MegaBuilds"
    },
    {
      "id": "UCcbZ6rsKJ7ie5EvFmqHqfZw",
      "name": "Spaces"
    },
    {
      "id": "UC4lH-odQ5ll-85fkpWxDYmA",
      "name": "Steven Ndukwu"
    },
    {
      "id": "UCza-OKitUR3TZZ_Xdq5w8GQ",
      "name": "Bespoke Careers"
    },
    {
      "id": "UC4UQOr_Cu9k2RRjhE0mUdpg",
      "name": "Design Anthology"
    }
  ],
  "documentaries": [
    {
      "id": "UCHyzc2Pp_fC5hfTLebF1ZiQ",
      "name": "@fern"
    },
    {
      "id": "UCWBtLCE-BnzZx3DneqDiXWQ",
      "name": "Astrum Earth"
    },
    {
      "id": "UCR9sFzaG9Ia_kXJhfxtFMBA",
      "name": "melodysheep"
    },
    {
      "id": "UClZbmi9JzfnB2CEb0fG8iew",
      "name": "Primal Space"
    },
    {
      "id": "UCWAqXzY2MLxYUf8qVFuJedg",
      "name": "Theniyifagbemi"
    },
    {
      "id": "UCijcd0GR0fkxCAZwkiuWqtQ",
      "name": "Free Documentary"
    },
    {
      "id": "UCBAeFXaLV1ZqKqc-Uf3pKaA",
      "name": "WELT Documentary"
    },
    {
      "id": "UCW39zufHfsuGgpLviKh297Q",
      "name": "DW Documentary"
    },
    {
      "id": "UCu4XcDBdnZkV6-5z2f16M0g",
      "name": "Real Stories"
    },
    {
      "id": "UCZwU2G-KVl-P-O-B35chZOQ",
      "name": "History Hit"
    },
    {
      "id": "UCuCuEKq1xuRA0dFQj1qg9-Q",
      "name": "Knowledgia"
    },
    {
      "id": "UCnZJt7yQw5IztVwe-Dscd-Q",
      "name": "The Operations Room"
    },
    {
      "id": "UC4QZ_LsYcvcq7qOsOhpAX4A",
      "name": "ColdFusion"
    },
    {
      "id": "UCG9E2kOVf3OPldZNV_1rPqQ",
      "name": "Mustard"
    },
    {
      "id": "UCmGSJVG3mCRXVOP4yZrU1Dw",
      "name": "Johnny Harris"
    },
    {
      "id": "UCRcgy6GzDeccI7dkbbBna3Q",
      "name": "LEMMiNO"
    },
    {
      "id": "UCP5tjEmvPItGyLhmjdwP7Ww",
      "name": "RealLifeLore"
    },
    {
      "id": "UCSPLhwvj0gBufjDRzSQb3GQ",
      "name": "BobbyBroccoli"
    },
    {
      "id": "UCtRFmSyL4fSLQkn-wMqlmdA",
      "name": "History of the Universe"
    },
    {
      "id": "UC_aOteuWIY8ITg7DQQspG1g",
      "name": "History of the Earth"
    },
    {
      "id": "UC9PIn6-XuRKZ5HmYeu46AIw",
      "name": "Barely Sociable"
    },
    {
      "id": "UCpFFItkfZz1qz5PpHpqzYBw",
      "name": "Nexpo"
    }
  ],
  "religion": [
    {
      "id": "UC27F-5DfIOEitDEazCwdHWw",
      "name": "The Catholic Crusade"
    },
    {
      "id": "UCw_FuPznUUVSLtPnSMQnZQw",
      "name": "Alexander Wilson"
    },
    {
      "id": "UCVdGX3N-WIJ5nUvklBTNhAw",
      "name": "Ascension Presents"
    },
    {
      "id": "UCmJTXhjB9h83BjuLjehW_Bw",
      "name": "FOCUS Catholic"
    },
    {
      "id": "UCZpWMxP4e8sQLZjbYQmanIw",
      "name": "Sundays with Ascension"
    },
    {
      "id": "UCEp5Q6cb6GQr5XIZ_2blTjQ",
      "name": "Redeeming Productivity"
    },
    {
      "id": "UCcMjLgeWNwqL2LBGS-iPb1A",
      "name": "Bishop Robert Barron"
    },
    {
      "id": "UCVfwlh9XpX2Y_tQfjeln9QA",
      "name": "BibleProject"
    },
    {
      "id": "UCDcdVPVsJRxAVKq4vY0NYeg",
      "name": "Breaking In The Habit"
    },
    {
      "id": "UClh4JeqYB1QN6f1h_bzmEng",
      "name": "Matt Fradd"
    },
    {
      "id": "UCnrFlpro0xfYjz6s5Xa8WWw",
      "name": "Desiring God"
    },
    {
      "id": "UCQMwm-DeHyFK5VPp6KySR5Q",
      "name": "The Gospel Coalition"
    },
    {
      "id": "UC5qDet6sa6rODi7t6wfpg8g",
      "name": "InspiringPhilosophy"
    },
    {
      "id": "UC7u2HaYBKDaLPcWmldxgGEA",
      "name": "Mike Winger"
    },
    {
      "id": "UCLrUV5FkWV8lm9omd5vQApQ",
      "name": "YaQeen Institute"
    },
    {
      "id": "UCNB_OaI4524fASt8h0IL8dw",
      "name": "Mufti Menk"
    },
    {
      "id": "UCzUZD3iCxkHmwYkCqYn8fBw",
      "name": "The Bible in a Year & More: Fr. Mike & Jeff Cavins"
    },
    {
      "id": "UCedYGs_lqq1uNet0u7qlSyQ",
      "name": "Cross Examined"
    },
    {
      "id": "UCaxAnjdU0EfausRUCG7iO0g",
      "name": "The Ten Minute Bible Hour Podcast"
    },
    {
      "id": "UCXHkMZGwB9g4rW4BV45ISbA",
      "name": "ReasonableFaithOrg"
    }
  ],
  "cars": [
    {
      "id": "UC_BaxRhNREI_V0DVXjXDALA",
      "name": "Porsche"
    },
    {
      "id": "UCKSVUHI9rbbkXhvAXK-2uxA",
      "name": "Supercar Blondie"
    },
    {
      "id": "UC9ZqNBEjEU1NK475EvqmlLA",
      "name": "Polestar"
    },
    {
      "id": "UC2J-0g_nxlwcD9JBK1eTleQ",
      "name": "Auto Focus"
    },
    {
      "id": "UCUhFaUpnq31m6TNX2VKVSVA",
      "name": "carwow"
    },
    {
      "id": "UCsqjHFMB_JYTaEnf_vmTNqg",
      "name": "Doug DeMuro"
    },
    {
      "id": "UCyXiDU5qjfOPxgOPeFWGwKw",
      "name": "Throttle House"
    },
    {
      "id": "UCL6JmiMXKoXS6bpP1D3bk8g",
      "name": "Donut"
    },
    {
      "id": "UCLgEVx4mzk3T3mzgbKG54Eg",
      "name": "Hagerty"
    },
    {
      "id": "UCjOl2AUblVmg2rA_cRgZkFg",
      "name": "Top Gear"
    },
    {
      "id": "UCgUvk6jVaf-1uKOqG8XNcaQ",
      "name": "savagegeese"
    },
    {
      "id": "UC86SBFIAgnYL3ll2ZDgmsuA",
      "name": "TheStraightPipes"
    },
    {
      "id": "UCvAhDxNNUDhi78tMXVGBUaQ",
      "name": "Tavarish"
    },
    {
      "id": "UCes1EvRjcKU4sY_UEavndBw",
      "name": "ChrisFix"
    },
    {
      "id": "UClqhvGmHcvWL9w3R48t9QXQ",
      "name": "Engineering Explained"
    },
    {
      "id": "UCIRgR4iANHI2taJdz8hjwLw",
      "name": "Shmee150"
    },
    {
      "id": "UC9DXAsBD4-ITVuvpd68401Q",
      "name": "AutoTopNL"
    },
    {
      "id": "UCwocwQcOwYxK2r53YTD0_IQ",
      "name": "redlinereviews"
    },
    {
      "id": "UCcLYOTz3ct6_lk9iLToxxAw",
      "name": "Mat Armstrong"
    },
    {
      "id": "UCqE3IQPWUDA9PZGaT6BDAKw",
      "name": "Gears and Gasoline"
    },
    {
      "id": "UCgeGealT0QYcrnoYRMltDZg",
      "name": "TheSmokingTire"
    },
    {
      "id": "UCOqhTsqySBCBTy571GArcXg",
      "name": "Car and Driver"
    },
    {
      "id": "UCzoKvjXr87KFhDw7sWLWelw",
      "name": "Restoration"
    },
    {
      "id": "UCLLpxcworT8275nBXODXyqw",
      "name": "M539 Restorations"
    },
    {
      "id": "UCT-2OPZT6P8j4nEKW3DXpOA",
      "name": "LegitStreetCars"
    },
    {
      "id": "UCsfu-jdkX2_v2t3_igVQebg",
      "name": "Vice Grip Garage"
    },
    {
      "id": "UCS87-wYrvmexsLkBj0jhrnQ",
      "name": "Junkyard Digs"
    },
    {
      "id": "UCwO_xoYm2vjhu4kZSxFO5mA",
      "name": "goonzquad"
    }
  ],
  "business": [
    {
      "id": "UChFahjDeMBV67DSXiF5pwBA",
      "name": "UpFlip"
    },
    {
      "id": "UCGq-a57w-aPwyi3pW7XLiHw",
      "name": "The Diary Of A CEO"
    },
    {
      "id": "UCUEmaeh13ai1ivT5wzz5Lhg",
      "name": "Maxinomics"
    },
    {
      "id": "UCegCVWcBFpbndzPJaC-DsMQ",
      "name": "theinvisiblehand"
    },
    {
      "id": "UCisy6taOAeLfyaCqcMQDfig",
      "name": "Max Klymenko"
    },
    {
      "id": "UCNjPtOCvMrKY5eLwr_-7eUg",
      "name": "Alux.com"
    },
    {
      "id": "UCyRtUwLylsFqguBvV6Kwlfw",
      "name": "The Numbers Game"
    },
    {
      "id": "UCcyq283he07B7_KUX07mmtA",
      "name": "Business Insider"
    },
    {
      "id": "UCE4Gn00XZbpWvGUfIslT-tA",
      "name": "MagnatesMedia"
    },
    {
      "id": "UCH5_L3ytGbBziX0CLuYdQ1Q",
      "name": "CNBC Make It"
    },
    {
      "id": "UCWo4IA01TXzBeGJJKWHOG9g",
      "name": "Harvard Business Review"
    },
    {
      "id": "UCoUxsWakJucWg46KW5RsvPw",
      "name": "Financial Times"
    },
    {
      "id": "UC0p5jTq6Xx_DosDFxVXnWaQ",
      "name": "The Economist"
    },
    {
      "id": "UC4bq21IPPbpu0Qrsl7LW0sw",
      "name": "Slidebean"
    },
    {
      "id": "UCb4xHi3i7upzKMaLrauVFtg",
      "name": "companyman"
    },
    {
      "id": "UCkCGANrihzExmu9QiqZpPlQ",
      "name": "How Money Works"
    },
    {
      "id": "UCZ4AMrDcNrfy3X6nsU8-rPg",
      "name": "Economics Explained"
    },
    {
      "id": "UCbzVRTkX3bzNZuBd9In4XyA",
      "name": "Modern MBA"
    },
    {
      "id": "UCcefcZRL2oaA_uBNeo5UOWg",
      "name": "Y Combinator"
    },
    {
      "id": "UCDgcdHwUMdDgEcNCfsouLgA",
      "name": "myfirstmillion"
    },
    {
      "id": "UCV6KDgJskWaEckne5aPA0aQ",
      "name": "Graham Stephan"
    }
  ],
  "news": [
    {
      "id": "UCeY0bbntWzzVIaj2z3QigXg",
      "name": "NBC News"
    },
    {
      "id": "UCzPpbeK8ANcNKg5aoMB0miw",
      "name": "Dylan Page"
    },
    {
      "id": "UC16niRr50-MSBwiO3YDb3RA",
      "name": "BBC News"
    },
    {
      "id": "UCIALMKvObZNtJ6AmdCLP7Lg",
      "name": "Bloomberg"
    },
    {
      "id": "UCBi2mrWuNuyYy4gbM6fU18Q",
      "name": "ABC News"
    },
    {
      "id": "UCupvZG-5ko_eiXAupbDfxWw",
      "name": "CNN"
    },
    {
      "id": "UC8p1vwvWtl6T73JiExfWs1g",
      "name": "CBS News"
    },
    {
      "id": "UCoMdktPbSTixAyNGwb-UYkQ",
      "name": "Sky News"
    },
    {
      "id": "UCNye-wNBqNL5ZzHSJj3l8Bg",
      "name": "Al Jazeera English"
    },
    {
      "id": "UCknLrEdhRCp1aegoMqRaCZg",
      "name": "DW News"
    },
    {
      "id": "UCQfwfsi5VrQ8yKZ-UWmAEFg",
      "name": "FRANCE 24 English"
    },
    {
      "id": "UChqUTb7kYRX8-EiaN3XFrSQ",
      "name": "Reuters"
    },
    {
      "id": "UC52X5wxOL_s5yw0dQk7NtgA",
      "name": "Associated Press"
    },
    {
      "id": "UCvJJ_dzjViJCoLf5uKUTwoA",
      "name": "CNBC"
    },
    {
      "id": "UCTrQ7HXWRRxr7OsOtodr2_w",
      "name": "Channel 4 News"
    },
    {
      "id": "UC6ZFN9Tx6xh-skXCuRHCDpQ",
      "name": "PBS NewsHour"
    },
    {
      "id": "UCHpw8xwDNhU9gdohEcJu4aA",
      "name": "The Guardian"
    },
    {
      "id": "UCK7tptUDHh-RYDsdxO1-5QQ",
      "name": "The Wall Street Journal"
    },
    {
      "id": "UC_gUM8rL-Lrg6O3adPW9K1g",
      "name": "WION"
    },
    {
      "id": "UCSrZ3UV4jOidv8ppoVuvW9Q",
      "name": "euronews"
    },
    {
      "id": "UChLtXXpo4Ge1ReTEboVvTDg",
      "name": "Global News"
    },
    {
      "id": "UCVgO39Bk5sMo66-6o6Spn6Q",
      "name": "ABC News (Australia)"
    }
  ],
  "entertainment": [
    {
      "id": "UCX6OQ3DkcsbYNE6H8uQQuVA",
      "name": "MrBeast"
    },
    {
      "id": "UCnmGIkw-KdI0W5siakKPKog",
      "name": "Ryan Trahan"
    },
    {
      "id": "UCGmnsW623G1r-Chmo5RB4Yw",
      "name": "KSI"
    },
    {
      "id": "UCzUjeR-Wgr0_iyL_brgx3Fw",
      "name": "ShxtsnGigs Podcast"
    },
    {
      "id": "UC4pFQ-V4RUtnWZ3ksRfRl-Q",
      "name": "ShxtsnGigs Reacts"
    },
    {
      "id": "UC1TyJa3QI9JzqCTcO_cfhmg",
      "name": "Idy Archibong"
    },
    {
      "id": "UCOvGHa9GYZyyatJqsKTCWSA",
      "name": "Cruise"
    },
    {
      "id": "UCADEYQiszEI_cMARTSi5GdQ",
      "name": "Papiens"
    },
    {
      "id": "UCxs87BsBSzw8FC7IlvfQ5kA",
      "name": "Asa Park"
    },
    {
      "id": "UCY0LR5f4leMPO-O9VP4NB_A",
      "name": "The Ash Files"
    },
    {
      "id": "UCccjdJEay2hpb5scz61zY6Q",
      "name": "NBC"
    },
    {
      "id": "UCUMZ7gohGI9HcU9VNsr2FJQ",
      "name": "Bloomberg Originals"
    },
    {
      "id": "UCGkesoYk3NROnpJyVVHURsQ",
      "name": "amahd"
    },
    {
      "id": "UCdqp0KK_Io7TwK5cJMBvB0Q",
      "name": "WhistlinDiesel"
    },
    {
      "id": "UCDogdKl7t7NHzQ95aEwkdMw",
      "name": "Sidemen"
    },
    {
      "id": "UCt3JiNkefsfbA2N4SgEkoiQ",
      "name": "Visual Venture"
    },
    {
      "id": "UCxOzbkk0bdVl6-tH1Fcajfg",
      "name": "Beta Squad"
    },
    {
      "id": "UCJjSDX-jUChzOEyok9XYRJQ",
      "name": "Jubilee"
    },
    {
      "id": "UCbaGn5VkOVlcRgIWAHcrJKA",
      "name": "Cut"
    },
    {
      "id": "UCMseH1ZPtQQu-u7EB4ehyyw",
      "name": "The Skin Deep"
    },
    {
      "id": "UCTFFhYhkLkxjhcCdwUKmQ5g",
      "name": "korty eo"
    }
  ]
};

// Build fast lookup map of verified video durations from SEED_LINEUPS
const SEED_DURATION_MAP = new Map<string, number>();
for (const lineup of Object.values(SEED_LINEUPS)) {
  for (const v of lineup.videos) {
    if (v.durationSec && v.durationSec > 60 && v.durationSec !== 600) {
      SEED_DURATION_MAP.set(v.youtubeVideoId, v.durationSec);
    }
  }
}

// In-memory cache with 15-minute revalidation
interface CachedPool {
  lineup: ChannelLineup;
  timestamp: number;
}
const MEMORY_CACHE = new Map<string, CachedPool>();
const CACHE_TTL_MS = 15 * 60 * 1000; // 15 minutes

// Fetch recent uploads from an official YouTube channel feed
export async function fetchChannelUploads(channelId: string, channelName: string): Promise<Video[]> {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`, {
      next: { revalidate: 900 },
      headers: { 'User-Agent': 'Tuned-Broadcaster/1.0' }
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const feedTitle = xml.match(/<feed[\s\S]*?<title>(.*?)<\/title>/)?.[1]?.trim() || channelName;
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)];
    const candidateVideos: { video: Video; needsShortCheck: boolean }[] = [];

    for (const entry of entries) {
      const entryText = entry[1];
      const vid = entryText.match(/<yt:videoId>(.*?)<\/yt:videoId>/)?.[1]?.trim();
      const rawTitle = entryText.match(/<title>(.*?)<\/title>/)?.[1]?.trim();
      const author = entryText.match(/<author>\s*<name>(.*?)<\/name>/)?.[1]?.trim() || feedTitle || channelName;

      if (!vid || !rawTitle) continue;

      // Filter out YouTube Shorts
      const link = entryText.match(/<link[^>]*href="([^"]+)"/)?.[1] || '';
      const desc = entryText.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] || '';

      if (link.includes('/shorts/') || entryText.includes('/shorts/')) {
        continue;
      }
      if (/#shorts?\b|[\(\[]shorts?[\)\]]|(\bshorts\b.*#)/i.test(rawTitle) ||
          rawTitle.toLowerCase().includes('#shorts') ||
          rawTitle.toLowerCase().includes('#short')) {
        continue;
      }
      if (/#shorts?\b|youtube\.com\/shorts/i.test(desc)) {
        continue;
      }

      // Clean HTML entities if any
      const cleanTitle = rawTitle
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');

      const knownDur = SEED_DURATION_MAP.get(vid);
      const tempVideo: Video = {
        youtubeVideoId: vid,
        title: cleanTitle,
        sourceChannelId: channelId,
        sourceChannelTitle: author,
        thumbnailUrl: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`,
        durationSec: knownDur || 0
      };
      tempVideo.durationSec = knownDur || getVideoDuration(tempVideo);

      candidateVideos.push({
        video: tempVideo,
        needsShortCheck: !knownDur || knownDur <= MAX_SHORT_DURATION_SEC,
      });
    }

    const shortFlags = await Promise.all(
      candidateVideos.map((c) => (c.needsShortCheck ? isYouTubeShort(c.video.youtubeVideoId) : false))
    );
    return candidateVideos.filter((_, i) => !shortFlags[i]).map((c) => c.video);
  } catch (err) {
    console.warn(`Failed to fetch channel feed for ${channelName} (${channelId}):`, err);
    return [];
  }
}

// Interleave multiple arrays round-robin so adjacent videos come from different creators
function roundRobinInterleave(lists: Video[][]): Video[] {
  const result: Video[] = [];
  const seenIds = new Set<string>();
  let hasMore = true;
  let round = 0;

  while (hasMore) {
    hasMore = false;
    for (const list of lists) {
      if (round < list.length) {
        const item = list[round];
        if (!seenIds.has(item.youtubeVideoId)) {
          seenIds.add(item.youtubeVideoId);
          result.push(item);
        }
        hasMore = true;
      }
    }
    round++;
  }

  return result;
}

// Master function: returns the deterministic verified broadcast lineup for built-in categories,
// or live-scours the creator feed for custom UC channel IDs
export async function getLineupForCategory(categoryId: string): Promise<ChannelLineup> {
  // Check cache first for instant sub-second response
  const cached = MEMORY_CACHE.get(categoryId);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return cached.lineup;
  }

  // Support custom YouTube channels directly (e.g. UC...)
  if (categoryId.startsWith('UC') && categoryId.length >= 20) {
    const uploads = await fetchChannelUploads(categoryId, 'Custom Channel');
    const channelTitle = uploads[0]?.sourceChannelTitle || 'Custom Channel';
    const hue = [...channelTitle].reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;
    const customLineup: ChannelLineup = {
      categoryId,
      categoryName: channelTitle,
      hue,
      builtAt: Date.now(),
      videos: uploads,
    };
    if (uploads.length > 0) {
      MEMORY_CACHE.set(categoryId, { lineup: customLineup, timestamp: Date.now() });
    }
    return customLineup;
  }

  // For built-in channels, read from the shared Vercel Blob catalog snapshot first (updated by daily cron),
  // falling back cleanly to SEED_LINEUPS so every browser worldwide stays 100% synchronized.
  const blobSnapshot = await readCatalogSnapshot();
  if (blobSnapshot?.[categoryId] && blobSnapshot[categoryId].videos.length > 0) {
    return blobSnapshot[categoryId];
  }

  if (SEED_LINEUPS[categoryId] && SEED_LINEUPS[categoryId].videos.length > 0) {
    return SEED_LINEUPS[categoryId];
  }

  const categoryMeta = CATEGORIES.find(c => c.id === categoryId);
  const categoryName = categoryMeta?.name || 'Channel';
  const categoryHue = categoryMeta?.hue || 200;

  const creators = BROADCAST_CHANNELS_MAP[categoryId] || [];

  try {
    // Scour all creators in parallel live from YouTube
    const channelLists = await Promise.all(
      creators.map(c => fetchChannelUploads(c.id, c.name))
    );

    const validLists = channelLists.filter(list => list.length > 0);

    if (validLists.length > 0) {
      // Interleave round-robin across creators
      const interleaved = roundRobinInterleave(validLists);

      const lineup: ChannelLineup = {
        categoryId,
        categoryName,
        hue: categoryHue,
        builtAt: Date.now(),
        videos: interleaved
      };

      MEMORY_CACHE.set(categoryId, { lineup, timestamp: Date.now() });
      return lineup;
    }
  } catch (err) {
    console.error(`Live scouring error for ${categoryId}:`, err);
  }

  // Stale cache fallback if available
  if (cached) return cached.lineup;

  // Empty fallback
  return {
    categoryId,
    categoryName,
    hue: categoryHue,
    builtAt: Date.now(),
    videos: []
  };
}

// Resolve YouTube channel handle or URL to { channelId, title }
export async function resolveHandleToChannelId(handle: string): Promise<{ channelId: string; title?: string } | null> {
  const clean = handle.replace(/^@/, '').trim();
  if (/^UC[\w-]{22}$/.test(clean)) {
    return { channelId: clean };
  }
  try {
    const res = await fetch(`https://www.youtube.com/@${clean}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cookie': 'SOCS=CAESEwgDEgk2MTQ1NzU1NDQaAmVuIAEaBgiA_LyaBg'
      }
    });
    const html = await res.text();
    const m = html.match(/<meta itemprop="identifier" content="(UC[\w-]{22})">/) ||
              html.match(/<meta itemprop="channelId" content="(UC[\w-]{22})">/) ||
              html.match(/"channelId":"(UC[\w-]{22})"/) ||
              html.match(/"externalId":"(UC[\w-]{22})"/);
    const titleMatch = html.match(/<meta property="og:title" content="([^"]+)">/);
    return m ? { channelId: m[1], title: titleMatch?.[1] } : null;
  } catch {
    return null;
  }
}

// Higher-level resolver for custom channel input
export async function resolveYouTubeChannel(
  query: string
): Promise<{ channelId: string; title: string; videos: Video[] } | { error: string }> {
  const clean = query.trim();
  if (!clean) return { error: 'Please enter a channel link or @handle.' };

  // Support direct UC channel URLs or @handles
  const ucMatch = clean.match(/(UC[\w-]{22})/);
  const handle = ucMatch
    ? ucMatch[1]
    : clean.replace(/^.*youtube\.com\/(?:c\/|user\/|@)?/, '').replace(/^@/, '').split(/[/?#]/)[0];

  const resolved = await resolveHandleToChannelId(handle);
  if (!resolved?.channelId) {
    return { error: 'Could not find a YouTube channel matching that input.' };
  }

  const uploads = await fetchChannelUploads(resolved.channelId, resolved.title || handle);
  if (uploads.length === 0) {
    return { error: 'Found channel, but it has no long-form broadcast videos available.' };
  }

  const realTitle = uploads[0]?.sourceChannelTitle || resolved.title || handle;
  const hue = [...realTitle].reduce((acc, char) => acc + char.charCodeAt(0), 0) % 360;

  // Cache immediately so subsequent /api/lineup calls are instant
  MEMORY_CACHE.set(resolved.channelId, {
    lineup: {
      categoryId: resolved.channelId,
      categoryName: realTitle,
      hue,
      builtAt: Date.now(),
      videos: uploads,
    },
    timestamp: Date.now(),
  });

  return {
    channelId: resolved.channelId,
    title: realTitle,
    videos: uploads,
  };
}
