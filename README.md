# Omar & Ghada — Wedding Invitation Website

A mobile-first, static wedding invitation website, restyled from the supplied Pinterest video in **blush pink, sage green, burgundy and ivory** with romantic layered paper stationery. Designed for free GitHub Pages hosting.

**Wedding:** Thursday, 19 November 2026 at 7:00 PM (Egypt local time)  
**Venue:** Google Maps location provided by the couple — https://maps.app.goo.gl/yUzcFts2Abqxatd29  
**Language:** English  
**RSVP:** Not included (as requested)

## What's included

- Animated **blush-pink lace envelope with burgundy wax seal**: guests tap to open the invitation.
- New Pinterest-inspired layered collage: blush envelope, sage save-the-date card, ivory date card, floral artwork and burgundy circular detail button.
- Personalized wedding invitation, date and time.
- Live countdown to 19 November 2026, 7:00 PM (Africa/Cairo).
- Custom November 2026 calendar with the 19th highlighted.
- Two real photos of Omar and Ghada, displayed as romantic Polaroid-style portraits; tap either to enlarge.
- Venue information with a Google Maps directions button.
- Your supplied MP3 plays automatically **when a guest taps to open the envelope**. Music can then be paused/resumed with the floating button. The song loops.
- Responsive mobile layout, scroll animation and reduced-motion support.
- No external JavaScript, image, hosting or music service required. The site uses **optional Google Fonts** for the elegant calligraphy; system fallback fonts are used without internet. All illustrations are bundled.

## 1. Publish using GitHub Pages (free)

1. Sign up for an account at https://github.com/ if you don't already have one.
2. Click **New repository**, enter a name such as `omar-ghada-wedding`, choose **Public**, then click **Create repository**.
3. In the new repository choose **Add file > Upload files**.
4. Unzip the downloaded website ZIP on your computer, then upload **the CONTENTS of the unzipped folder**. That means `index.html`, `styles.css`, `script.js`, `.nojekyll`, `README.md`, and the `assets` folder. **`index.html` must be in the repository's root directory**, not inside another folder. (The hidden `.nojekyll` file is optional.)
5. Commit the files (using the **Commit changes** button).
6. Go to **Settings > Pages > Build and deployment**.
7. Under **Source**, select **Deploy from a branch**. Select branch **main**, folder **/(root)**, then **Save**.
8. Your free website address will look like `https://YOUR-USERNAME.github.io/omar-ghada-wedding/`. Pages can take a few minutes to go live after the first deployment.

For GitHub's official setup guide, visit: https://docs.github.com/en/pages/quickstart

**Important:** GitHub Pages requires a public repository on GitHub Free. Anyone with the link can view the site. The QR code can point to the same URL.

## 2. Preview on your computer

For a quick preview, double-click `index.html` in a modern web browser. For full functionality when developing, run a local web server from the folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## 3. The two-photo gallery

The Gallery / Our Little Moments section now shows **exactly two photos** of Omar and Ghada. Both photos are bundled locally in the `assets/` directory as:

- `assets/omar-ghada-photo-1.jpg`
- `assets/omar-ghada-photo-2.jpg`

Their photos retain their portrait proportions, and tapping a picture opens a larger view. The old flower illustration placeholders have been removed.

To replace a photo later, simply use the same filename for the new JPEG and upload it. To update the captions, search for `Side by side` and `Our favorite moments` in `index.html`.

**Privacy:** The website and photographs will be publicly viewable by anyone with the GitHub Pages link and can potentially be indexed or saved by visitors. Only publish with the couple's permission.

## 4. Your song plays as the envelope opens

- Bundled song: `assets/omar-ghada-wedding-song.mp3` (the MP3 you uploaded).
- Clicking the pink envelope **or** the Open your invitation button starts the song immediately, synchronized to the start of the opening animation.
- The floating music button can pause or resume at any time.
- The song loops when it reaches the end.
- The envelope appears on every new page load, including refresh, so the browser receives a fresh tap gesture before starting audio. Modern browsers do not permit reliable sound playback before that tap. On a device that blocks playback, visitors can tap the music button manually.
- To change the track, replace `assets/omar-ghada-wedding-song.mp3` with a different MP3 under the same filename.
- **Copyright:** Only publish the uploaded recording on a public website if you have permission or a suitable license for public online use. GitHub Pages files are publicly retrievable.

## 5. Update wedding information

- **Names and displayed text:** edit `index.html` (search for `Omar`, `Ghada`).
- **Venue and Maps link:** edit `index.html` (search for `Our Wedding Venue` and the Google Maps URL).
- **Date and time:** edit `index.html`, and update the `weddingDate` value in `script.js`. This ZIP uses `2026-11-19T19:00:00+02:00`, since Egypt is UTC+02 on the wedding date.
- **Color palette:** edit the color variables at the top of `styles.css` (`--burgundy`, `--blush`, `--sage`, etc.).
- **Social sharing image:** `assets/share-card.svg` is included as a design asset. Some social apps require an absolute HTTPS URL to a PNG or JPEG, rather than an SVG, for their preview image. For dependable WhatsApp/Facebook previews, export `share-card.svg` as `share-card.jpg`, upload it, and replace `og:image` in `index.html` with the **full public image URL** after deployment.

## Troubleshooting

- **404 Not Found:** Confirm `index.html` is at the repository root, the Pages branch is `main`, and the folder is `/(root)`. Check repository deployment status and wait for the first publish.
- **No audio:** Visitors first tap the envelope or Open your invitation. If playback is blocked, tap MUSIC OFF / TAP TO PLAY. Confirm `assets/omar-ghada-wedding-song.mp3` exists and device sound is enabled.
- **Images don't show:** File paths are case-sensitive on GitHub Pages; use matching filenames and extensions.
- **Invitation opens on every refresh:** The envelope intentionally reappears, allowing the next tap to start music again in compliance with browser playback rules.
- **Countdown timezone:** It uses Egypt time for the wedding, not the guest's location.

Made for Omar & Ghada, 2026.
