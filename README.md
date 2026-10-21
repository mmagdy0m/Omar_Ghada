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
- Four decorative gallery images (not photos of Omar or Ghada) that can be replaced, with a tap-to-enlarge lightbox.
- Venue information with a Google Maps directions button.
- Play/pause music button and a bundled original instrumental loop (`assets/wedding-melody.wav`).
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

## 3. Add the actual couple's photos

The four bundled pink/green floral SVG illustrations are **temporary placeholders**, not photos of the couple, because no photos were supplied. Before publishing to guests, you can replace them with real couple photos:

1. Save four photos into `assets` as `photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg`, `photo-4.jpg` (optimized to about 1200 px on the long side for a fast-loading mobile site).
2. Open `index.html` in a text editor.
3. Search for each `assets/gallery-1.svg`, `assets/gallery-2.svg`, etc. and replace with `assets/photo-1.jpg`, `assets/photo-2.jpg`, etc.
4. Change the gallery image `alt` descriptions to describe the photos.
5. Remove the line containing `<p class="gallery-note">` when you have added your photos.
6. Upload the updated files to the same GitHub repository to publish the changes.

You can keep the same image dimensions/crops: CSS uses `object-fit: cover`.

## 4. Replace the music

The music player is fully working. It starts only after the visitor taps the music button because most mobile browsers prohibit automatic audio playback.

The ZIP contains a simple **original instrumental loop** (`assets/wedding-melody.wav`), created for this invitation. You can instead use a song you have the rights to publish:

1. Place the audio file in the `assets` folder, for example `our-song.mp3`.
2. In `index.html`, locate `<audio id="weddingMusic" src="assets/wedding-melody.wav" loop preload="none"></audio>`.
3. Change `src` to `assets/our-song.mp3`.

## 5. Update wedding information

- **Names and displayed text:** edit `index.html` (search for `Omar`, `Ghada`).
- **Venue and Maps link:** edit `index.html` (search for `Our Wedding Venue` and the Google Maps URL).
- **Date and time:** edit `index.html`, and update the `weddingDate` value in `script.js`. This ZIP uses `2026-11-19T19:00:00+02:00`, since Egypt is UTC+02 on the wedding date.
- **Color palette:** edit the color variables at the top of `styles.css` (`--burgundy`, `--blush`, `--sage`, etc.).
- **Social sharing image:** `assets/share-card.svg` is included as a design asset. Some social apps require an absolute HTTPS URL to a PNG or JPEG, rather than an SVG, for their preview image. For dependable WhatsApp/Facebook previews, export `share-card.svg` as `share-card.jpg`, upload it, and replace `og:image` in `index.html` with the **full public image URL** after deployment.

## Troubleshooting

- **404 Not Found:** Confirm `index.html` is at the repository root, the Pages branch is `main`, and the folder is `/(root)`. Check repository deployment status and wait for the first publish.
- **No audio:** The visitor must tap the music button. Check that `assets/wedding-melody.wav` exists and the volume isn't muted.
- **Images don't show:** File paths are case-sensitive on GitHub Pages; use matching filenames and extensions.
- **Invitation already open on refresh:** The website remembers the envelope being opened *within that tab's current session*. Open a fresh private/incognito tab to test the animation from the beginning.
- **Countdown timezone:** It uses Egypt time for the wedding, not the guest's location.

Made for Omar & Ghada, 2026.
