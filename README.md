# Omar & Ghada Wedding Website – Calendar + Private Guest Wishes

## Website details
- Omar & Ghada, November 19, 2026, 7:00 PM Egypt time
- The map link is included in the downloadable calendar event.
- The opening-envelope animation, music, countdown, couple photos and GitHub Pages support are preserved.

## 1. Publish on GitHub Pages
Upload the **contents** of this ZIP to the root of your existing repository, including `assets/`, `index.html`, `styles.css`, `script.js`, `config.js`, and `.nojekyll`. Keep the relative file paths. `index.html` must be at repository root. Commit. In Settings > Pages, deploy `main` / `(root)`.

## 2. Calendar button
The `Save to Calendar` button in the November calendar section downloads `assets/Omar-and-Ghada-Wedding.ics`. It imports into Google Calendar, Apple Calendar, or Outlook. Start: 19 Nov 2026 at 7 PM Egypt time (17:00 UTC); the end time is an **editable 1-hour placeholder**, NOT the actual wedding end time. Includes the supplied maps.app.goo.gl link as venue location.

## 3. Guest wishes — connect a private Google Sheet
GitHub Pages is static; it cannot save submitted messages by itself. This form sends to a Google Apps Script associated with a private Google Sheet. The Sheet is **not** made public. Until you connect it the submit button intentionally stays disabled (no messages are silently lost).

1. Create a Google Sheet named `Omar & Ghada – Wedding Wishes` in the Google account that should own the messages. Keep sharing restricted. You do not have to create columns; the script will create a `Wedding Wishes` tab with Received At, Guest Name, Message.
2. From the Google Sheet choose **Extensions → Apps Script**.
3. Replace its default code with the complete contents of `Google_Sheets_Guestbook_Code.gs` from the ZIP. Save.
4. Select **Deploy → New deployment → Web app**. Execute as **Me**. Who has access: **Anyone** (access to the submission endpoint, not the private Sheet). Authorize it, then Deploy. Copy the web app URL ending in `/exec`.
5. Edit `config.js` in your GitHub repo. Paste the URL between the quotes: `window.OMAR_GHADA_GUESTBOOK_ENDPOINT = 'https://script.google.com/macros/s/YOUR_ID/exec';`
6. Commit `config.js`. Reload the published website and send a test wish. Open the Google Sheet to confirm a new row was saved. If you modify Apps Script later, update the deployment via Manage deployments → Edit → New version.

**Privacy/security:** The Sheet stays private to its owner(s), but the publicly accessible web-app submission URL is embedded in the website's JS and could receive spam. The form includes basic length validation and a hidden spam field but is not a full anti-spam system. Never put API keys, passwords, or secrets in this repository. Treat guest names/messages as personal data. Messages will not be displayed on the public website.

**Submission note:** Google Apps Script redirects prevent a static site from reliably reading the response to a cross-origin POST. The UI confirms the request was sent for delivery, not that the Sheet definitely saved it. Always test with your actual deployment. For confirmed server-side responses and stronger spam prevention, use a dedicated form provider or backend.
