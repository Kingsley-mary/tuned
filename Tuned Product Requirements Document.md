# Tuned: Product Requirements Document

By Kingsley · Draft v1 · November 10, 2026

## 1. Overview

Tuned is a web app that makes YouTube feel like TV. Instead of an algorithmic feed, the user picks interests. Each interest becomes a channel (CH 01, CH 02, and so on) that plays a continuous queue of videos from a curated set of YouTube channels. All videos, thumbnails, titles and metadata come from YouTube, and playback uses YouTube’s official embedded player. The interface is original.

Why it exists: search and scroll feeds demand constant decisions. TV is lean-back. You pick a channel, watch, and switch if bored.

This document is written to be handed to a coding agent. Requirements are numbered and testable. Where something is undecided, it is listed in section 14.

## 2. Goals and non-goals

**Goals**

- Let a first-time user go from opening the app to watching a video in under 30 seconds.
- Make channel surfing instant: switching channels starts a video within 2 seconds on a normal connection.
- Stay within the free YouTube Data API quota (10,000 units per day) for personal use by caching aggressively.
- Follow YouTube’s embedding rules so the app is allowed to exist.

**Non-goals for v1**

- No recommendation engine and no use of the user’s YouTube watch history.
- No Google sign-in and no accounts.
- No downloading, ad blocking, background audio, or any modification of the YouTube player.
- No comments, likes, uploads or playlists.
- No native mobile apps. Responsive web only.

## 3. Users

Primary user: Kingsley, using it personally. Secondary: friends opening the same site. Design for one person per device, with state stored on that device.

## 4. Core concepts

- **Category:** an interest such as Tech, Music or Food. Fixed list curated by the owner.
- **Source channel:** a real YouTube channel that belongs to a category.
- **Channel (TV channel):** a category the user has picked. It has a number (CH 01 to CH 08) and a queue.
- **Queue (lineup):** 10 to 20 videos for a channel, built from its source channels’ recent uploads, embeddable only.
- **Guide:** a timeline view of every channel and its queue.

## 5. User flow

First visit: Power on, then Pick interests, then Tuning, then Watch.

Returning visit: Power on, then Watch, resuming the last channel and video.

From Watch the user can open the Guide, open Manage, or land on Off air if a channel cannot play. Manage changes that add or remove channels trigger Tuning again.

## 6. Screen requirements

### 6.1 Power on

Purpose: capture one user tap so the browser allows autoplay, and set the mood.

- P-1: Show a single large power button, the app name and the line “Tap to turn on”.
- P-2: For a returning user, show “Resume · CH 03 music” and a small “Change channels” link that opens Manage.
- P-3: Space and Enter activate the button.
- P-4: Before the tap, load the cached lineup and create the YouTube player in a cued, not-playing state.
- P-5: On tap, call play on the existing player inside the tap handler. This is required for iOS Safari.
- P-6: Turn-on animation: the screen collapses to a line and opens into Watch. With reduced motion enabled, use a plain fade.
- P-7: If offline with no cache, go to Off air.

### 6.2 Pick interests

- K-1: Heading “What do you want to watch?” and the hint “Pick at least 3, up to 8. You can change these anytime.”
- K-2: Grid of 12 to 16 category tiles. Four columns on desktop, two on mobile.
- K-3: Tap toggles selection. Selected tiles show a tick and a clear outline.
- K-4: A counter reads “N of 3 picked” until three are chosen, then “N picked”. At 8 it reads “8 picked, that’s the max for now” and further selection is blocked.
- K-5: Continue is disabled until at least 3 are selected. The selection order becomes the channel order.
- K-6: Skip selects a default set of 4 categories and continues.
- K-7: Back returns to Power on and keeps the selection.
- K-8: On mobile, the counter and Continue are pinned to the bottom of the screen.
- K-9: Picking categories makes no API calls.

### 6.3 Tuning

- T-1: Show the channel numbers and names of the picked channels, lighting up one by one as each lineup is ready.
- T-2: Minimum display time is 2 seconds. Maximum is 8 seconds, after which Watch opens with the channels that are ready while the rest keep loading.
- T-3: A category with a failed fetch is skipped and flagged in Manage with a Retry action. A category with fewer than 5 usable videos is dropped and the user is told in one line.
- T-4: Returning users skip this screen. Their lineup refreshes in the background.
- T-5: If everything fails, fall back to the last cached lineup, otherwise go to Off air.

### 6.4 Watch

The main screen. Nothing is ever drawn on top of the video player.

- W-1: Desktop layout: main column with the player (16:9) and, directly beneath it, an info and controls block. Side column with the channel list and the Up next list. Top bar with the logo and the Guide, Manage and Power off buttons.
- W-2: Mobile layout, in order: player, info and controls, a horizontal swipeable channel strip, Up next list.
- W-3: The info block shows a channel badge (CH 03), the category name, “Video 4 of 14”, the video title, and the source channel name.
- W-4: Controls: play or pause, next, a progress bar and elapsed over total time. Turn off YouTube’s native controls and use these. They live below the player, never over it.
- W-5: Up next shows the next 3 videos in the queue with real thumbnails, titles, source channel and duration. Clicking one plays it.
- W-6: Channel list shows number, name and a small colour dot. The active channel is clearly highlighted. Clicking switches channel, which resumes at the first video of that queue.
- W-7: When a video ends, play the next one. At the end of the queue, loop to the start.
- W-8: If a video errors or cannot be embedded, skip it automatically and continue.
- W-9: Channel-switch feedback happens outside the player only: the channel badge flips, the active row highlights, and the frame around the player pulses once in the channel’s colour. No static, flicker or number appears over the video.
- W-10: Keyboard: Space plays or pauses, Right Arrow skips, Up and Down change channel.
- W-11: Ads play inside the player. The app must not hide, skip, shorten or obscure them.
- W-12: Show a small buffering indicator in the info block while the player reports buffering.

### 6.5 Guide

- G-1: A full screen with a Back to watching button and the heading “Guide”.
- G-2: A grid with one row per channel. Each row has a sticky label (number and name) and a block per video, with width proportional to video length (minimum width enforced so titles remain readable).
- G-3: The currently playing video is highlighted.
- G-4: Clicking a block returns to Watch and plays that video.
- G-5: The grid scrolls horizontally and vertically as needed. The sticky labels stay visible.

### 6.6 Manage

- M-1: List of current channels in order, each with Move up, Move down and Remove actions.
- M-2: The list must keep between 3 and 8 channels. Remove is disabled at 3. Adding is blocked at 8 with a clear message.
- M-3: “Add a channel” shows the categories not yet picked as chips. Clicking one adds it to the end.
- M-4: “Add your own” takes a YouTube channel link or @handle. Validate the format client-side, resolve it server-side to a channel ID and title, then add it as a channel. Show a specific error for an empty field, an unrecognised format, a channel that cannot be found, and the 8-channel limit.
- M-5: Done returns to Watch. If anything changed, go through Tuning first.
- M-6: Show a Retry action next to any channel that failed to load.

### 6.7 Off air

- O-1: Shown when no channel has a playable video, the API quota is exhausted with no cache, or the device is offline with no cache.
- O-2: Test-pattern style graphic, the heading “Off air”, a one-line reason and a Try again button.
- O-3: Try again re-runs the lineup load. If a cached lineup exists, offer to continue with it.

## 7. Layout and design requirements

- D-1: Nothing overlaps the YouTube player. This is also a YouTube policy requirement.
- D-2: Use an 8px spacing grid. Page padding 24px on desktop and 16px on mobile. 24px between the player and the info block, 16px between the title and the controls, 16px between the main column and the side column.
- D-3: Corner radii: 16px for the player and large cards, 12px for rows and small cards.
- D-4: Support light and dark mode using the system setting. Define all colours as design tokens in one theme file.
- D-5: Each channel has an accent hue derived from its category. It is used for the dot in the channel list and the frame pulse.
- D-6: Touch targets are at least 44px. Visible focus states on everything interactive.
- D-7: Respect the reduced-motion setting by replacing animations with fades or no motion.
- D-8: Visual style (typography, imagery, mood) is not defined in this version. See section 14. Build the structure and spacing above first, with every colour, font and radius coming from the theme file, so the visual design can be replaced without changing the layout.

## 8. Technical architecture

Suggested stack. A coding agent may substitute equivalents if it explains why.

- Next.js (App Router) with TypeScript, deployed to Vercel or similar.
- Server-side route handlers that call the YouTube Data API. The API key lives only in a server environment variable and is never sent to the browser.
- A cache: Redis or similar key-value store (or SQLite for local development) for lineups, with a 6-hour freshness window.
- Client state in local storage: picked channels in order, custom sources, last channel and video, autoplay setting.
- YouTube IFrame Player API for playback.

**Internal endpoints**

- GET /api/categories returns the category list with hues.
- GET /api/lineup?ids=a,b,c returns, per category, the ordered queue of videos.
- GET /api/resolve-channel?q=... resolves a YouTube link or @handle to a channel ID and title.
- A scheduled job refreshes lineups for categories in use about every 6 hours.

**Lineup build, per category**

1. For each source channel, read its uploads playlist ID (channels.list, 1 unit, cached permanently).
2. Fetch recent uploads (playlistItems.list, 1 unit per call).
3. Fetch video details in batches of 50 (videos.list, 1 unit per call) and keep only videos that are embeddable.
4. Choose the best 10 to 20, order them, and cache the result.

Do not use search.list to build lineups. It costs 100 units per call. Use it only for an optional owner-only tool that suggests new source channels.

**Quota guard.** Track units used per day. If usage passes 80 percent of the daily budget, stop all non-essential refreshes and serve from cache only. A full refresh of 12 categories with about 10 sources each should cost on the order of 150 units.

**Player handling.** Create the player when the page loads, cued and not playing. Use controls=0, playsinline=1, rel=0 and the origin parameter. Handle the ended event by moving to the next video. Handle error events (including embed-not-allowed and video-not-found) by skipping to the next video.

## 9. YouTube API and policy constraints

The agent must follow these. Check the current YouTube API Services Terms of Service and Developer Policies before launch, since they can change.

- Playback only through YouTube’s embedded player. No extracting stream URLs, no downloading, no separating audio from video.
- Never overlay, hide or obscure the player, its ads, or its branding.
- Do not modify the player’s behaviour beyond the official player parameters and API.
- Respect the daily quota. The default is 10,000 units. A quota increase requires an audit and application to Google.
- Quota resets at midnight Pacific time.
- Show YouTube content (titles, thumbnails, channel names) as provided and do not alter it.

## 10. Data model

**Category:** id, name, hue, sourceChannelIds (array of YouTube channel IDs).

**SourceChannel:** youtubeChannelId, title, uploadsPlaylistId.

**Video:** youtubeVideoId, title, sourceChannelId, sourceChannelTitle, thumbnailUrl, durationSec, publishedAt, embeddable, fetchedAt.

**Lineup:** categoryId, videoIds (ordered), builtAt.

**UserState (local storage):** pickedCategoryIds (ordered), customSources (array of channel ID and title), lastChannelIndex, lastVideoId, autoplay (boolean).

**Seed catalog (owner-provided JSON).** Each category lists 8 to 12 real YouTube channel IDs. This is manual curation work and must be done before the app has real content.

## 11. Non-functional requirements

- Performance: Watch becomes interactive in under 2 seconds on a cached lineup. Switching channel starts the next video within 2 seconds.
- Reliability: any single failed API call must degrade gracefully and never leave a blank screen.
- Accessibility: keyboard operable throughout, screen reader labels on all controls, sufficient colour contrast in both themes.
- Privacy: no accounts and no personal data collected. State stays on the device.
- Browsers: current Chrome, Safari (including iOS), Firefox and Edge.

## 12. Build plan

Build and verify in this order.

1. **Foundation:** project setup, theme file with design tokens, base layout, routing between screens.
2. **Data pipeline:** YouTube client, seed catalog, lineup builder, cache, quota guard, internal endpoints.
3. **Watch:** real YouTube player, controls, queue, channel list, Up next, error skipping.
4. **Entry flow:** Power on, Pick interests, Tuning, with first-visit and returning-visit paths.
5. **Guide.**
6. **Manage,** including custom source resolution and the change-then-Tuning behaviour.
7. **Off air, error states, accessibility pass, reduced motion, tests.**

## 13. Acceptance criteria

- A first-time user can reach a playing video in under 30 seconds with no sign-in.
- On iOS Safari, the first video starts playing from the Power on tap.
- No element is ever rendered on top of the player area.
- A video that cannot be embedded never appears in a queue. If one fails during playback, the next video starts automatically.
- Reloading the app returns a returning user to their last channel and video.
- Picking fewer than 3 categories keeps Continue disabled. Picking a 9th is blocked.
- Manage cannot reduce channels below 3 or increase them above 8.
- Pasting an invalid link in Manage shows a specific error and adds nothing.
- With the API unreachable and a cached lineup present, the app still plays.
- With the API unreachable and no cache, the Off air screen appears with a working Try again.
- A full lineup refresh stays within the quota budget in section 8.
- With reduced motion enabled, no animation other than fades occurs.

## 14. Risks and open questions

**Risks**

- iOS autoplay: if the player is created only after the tap, Safari can block playback. Mitigated by P-4 and P-5.
- Embed restrictions: some videos refuse embedding. Mitigated by filtering on the embeddable flag and by skip-on-error.
- Quota: caching and the no-search rule keep personal use well inside the limit, but opening the app to many users shares one 10,000 unit budget.
- Policy drift: YouTube’s terms may change. Re-check before launch.
- Content quality: channel lists are only as good as the curation.

**Open questions**

1. Visual design. The layout and flow are defined here, but the visual style is not. Provide reference images or a design file before the agent styles anything beyond the theme tokens.
2. Seed catalog. Which 8 to 12 source channels belong in each category?
3. Hosting and domain, and whether to restrict the API key by referrer or IP.
4. Whether to apply for a quota increase if usage grows.

## 15. Future ideas, not in v1

- Optional Google sign-in to add a “My subs” channel built from the user’s subscriptions.
- A shared schedule so everyone tuned to a channel at the same moment sees the same video at the same point.
- Saved and shareable lineups.
- A native mobile wrapper.
