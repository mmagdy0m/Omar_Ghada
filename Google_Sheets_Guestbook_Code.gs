/** Omar & Ghada – private wedding wishes. Deploy as a Web app. */
const SHEET_NAME = 'Wedding Wishes';

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || '{}');
    if (data.website) return textResponse('ok'); // bot honeypot
    const name = String(data.name || '').trim().slice(0, 65);
    const message = String(data.message || '').trim().slice(0, 800);
    if (!name || message.length < 5) return textResponse('invalid');
    if (!lock.tryLock(10000)) return textResponse('busy');
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) sheet.appendRow(['Received At', 'Guest Name', 'Message']);
    // Avoid spreadsheet formula injection from a guest's text.
    const safeText = (value) => /^[=+@-]/.test(value) ? "'" + value : value;
    sheet.appendRow([new Date(), safeText(name), safeText(message)]);
    return textResponse('ok');
  } catch (error) {
    console.error(error);
    return textResponse('error');
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}
function textResponse(message) {
  return ContentService.createTextOutput(message).setMimeType(ContentService.MimeType.TEXT);
}
