# YouTube Downloader (Browser Extension)

> Download supported YouTube videos as MP4 or WebM files from watch pages, Shorts, and embedded players.

YouTube Downloader is a browser extension built for users who need a cleaner way to save supported YouTube videos for offline access. It is designed for browser playback flows across watch pages, Shorts, and embedded players, and it helps you export usable files without relying on manual stream handling.

- Save supported YouTube videos from watch pages, Shorts, and embeds
- Export MP4 or WebM output depending on the source workflow
- Keep offline copies for research, editing, and review
- Use a browser-native download flow instead of manual extraction
- Preserve a cleaner workflow for long-form and short-form content

## Links

- :rocket: Get it here: [YouTube Downloader](https://serp.ly/youtube-downloader)
- :new: Latest release: [GitHub Releases](https://github.com/serpapps/youtube-downloader/releases/latest)
- :question: Help center: [SERP Help](https://help.serp.co/en/)
- :beetle: Report bugs: [GitHub Issues](https://github.com/serpapps/youtube-downloader/issues)
- :bulb: Request features: [Feature Requests](https://github.com/serpapps/youtube-downloader/issues)

## Preview

![YouTube Downloader workflow preview](assets/workflow-preview.webp)

## Table of Contents

- [Why YouTube Downloader](#why-youtube-downloader)
- [Features](#features)
- [How It Works](#how-it-works)
- [Step-by-Step Tutorial: How to Download Videos from YouTube](#step-by-step-tutorial-how-to-download-videos-from-youtube)
- [Supported Formats](#supported-formats)
- [Who It's For](#who-its-for)
- [Common Use Cases](#common-use-cases)
- [Troubleshooting](#troubleshooting)
- [Trial & Access](#trial--access)
- [Installation Instructions](#installation-instructions)
- [FAQ](#faq)
- [License](#license)
- [Notes](#notes)
- [About YouTube](#about-youtube)

## Why YouTube Downloader

YouTube uses adaptive streaming and multiple playback contexts, so the actual media source is not exposed as one obvious file. Watch pages, Shorts, and embedded players can all behave differently. That makes generic downloader behavior inconsistent and often harder than users expect.

YouTube Downloader is built to simplify that browser workflow. Open the page, let the extension detect the supported media source, choose the format or quality you want when options are available, and export a file you can keep offline.

## Features

- Detects supported YouTube media from watch pages, Shorts, and embeds
- Multi-client InnerTube API extraction covering all available qualities from 144p to 4K
- In-page download button built into the YouTube video player
- Automatic HLS-to-MP4 conversion and SABR/UMP streaming support as fallbacks
- Handles browser playback workflows more cleanly than manual extraction
- Exports usable MP4 or WebM output depending on the source
- Download queue with up to 3 concurrent downloads
- Detects YouTube embeds on third-party websites
- SPA-aware detection that works with YouTube navigation without page reloads
- Works on Chrome, Edge, Brave, Opera, Firefox, Whale, and Yandex

## How It Works

1. Install the extension from the latest release.
2. Open a YouTube video, Short, or embedded player and start playback.
3. Let the extension detect the active media source.
4. Open the popup or use the in-page download button on the player.
5. Review the available formats and quality options.
6. Select the quality you want from the available resolutions.
7. Start the download and save the file locally.

## Step-by-Step Tutorial: How to Download Videos from YouTube

1. Install YouTube Downloader in your browser.
2. Open the YouTube watch page, Short, or embedded player you want to save.
3. Start playback so the browser loads the active media source.
4. Click the in-page download button on the player, or open the extension popup.
5. Review the detected video options and available qualities.
6. Choose the format or quality you want if more than one option is listed.
7. Start the download and wait for the export to finish.
8. Open the saved file from your Downloads folder.
9. For advanced use, copy yt-dlp commands from the popup for Mac or Windows.

## Supported Formats

- Input: supported YouTube browser playback sources
- Output: MP4 or WebM, depending on the source workflow

Saved files typically use MP4 so they are easier to replay on standard media players, move between devices, or archive locally. When separate video and audio streams are downloaded, they are merged automatically.

## Who It's For

- Researchers saving reference videos for offline review
- Creators keeping working copies of their own content
- Students archiving educational or tutorial content
- Users who want a browser-based workflow for supported YouTube pages
- People who need offline access to videos they can already watch in the browser

## Common Use Cases

- Save a YouTube watch-page video for later
- Download Shorts for offline reference
- Export embedded-player content from supported sites
- Download YouTube videos embedded on third-party websites
- Keep local copies for review, research, or editing

## Troubleshooting

**The extension does not detect the video**  
Start playback first and wait for the page to initialize the active source.

**The page is a Short or embed**  
Open the popup again after playback starts so the extension can rescan the active page state.

**Only one format appears**
That means the current playback flow is exposing one usable source to the extension.

**The download failed partway through**
Check your connection and refresh the page before starting again. Try a different quality if one format fails.

**The page is age-restricted or region-locked**
The extension only works on media you can already open and play in your active browser session.

## Trial & Access

- Includes **3 free downloads** so you can test the workflow first
- Email sign-in uses secure one-time password verification
- No credit card required for the trial
- Unlimited downloads are available with a paid license

Start here: [https://serp.ly/youtube-downloader](https://serp.ly/youtube-downloader)

## Installation Instructions

1. Open the latest release page: [GitHub Releases](https://github.com/serpapps/youtube-downloader/releases/latest)
2. Download the correct build for your browser.
3. Install the extension.
4. Open a supported YouTube page and start playback.
5. Use the popup to detect and download the media.

## FAQ

**Can it work on Shorts and embeds?**  
Yes. It supports supported Shorts and embedded-player workflows in addition to watch pages.

**Does it always export MP4?**  
Not always. Output depends on the active source workflow and available media format.

**Do I need extra software?**
No. The workflow runs entirely inside the browser extension.

**Can I download YouTube videos embedded on other websites?**
Yes. The extension detects YouTube iframes and links on any website and shows download buttons next to them.

**What is the yt-dlp command feature?**
For advanced users, the popup includes buttons to copy yt-dlp commands for Mac and Windows, in case you prefer to download via the command line.

**Is my data safe?**
Yes. All video processing happens locally in your browser. Authentication uses secure OTP with no passwords stored.

## License

This repository is distributed under the proprietary SERP Apps license in the [LICENSE](LICENSE) file. Review that file before copying, modifying, or redistributing any part of this project.

## Notes

- Only download content you own or have explicit permission to save
- An internet connection is required for downloads
- Quality depends on the original upload resolution
- YouTube API changes may temporarily affect functionality
- Must press play before detection can begin

## About YouTube

YouTube is a large video platform with multiple playback contexts and adaptive streaming workflows. YouTube Downloader is built to make supported browser downloads easier for users who already have access to that media in the browser.
