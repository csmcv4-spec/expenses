# Expenses App — v2 Update (Mileage + Project)

What's new:

- **Mileage category.** Pick "🛣️ Mileage" and the form swaps in *From / To / Miles / Rate*. Defaults to HMRC's 45p/mile. Total auto-calculates as you type. Stored as a normal expense with the breakdown captured in the note.
- **Project field.** Free-text on every expense. Autocompletes from projects you've used before. New filter on the History tab lets you slice by project.
- **Wider CSV export.** Now includes Project, Miles, Rate columns.
- **Sheet auto-migrates.** Your existing rows are kept exactly as they are; new columns get added on the right next time the script runs.

You need to update **two things**: the file on GitHub, and the script in Apps Script. Roughly 3 minutes total.

---

## Step 1 — Update `expenses.html` on GitHub

1. Go to your repo: `github.com/csmcv4-spec/expenses`
2. Click **`expenses.html`** in the file list.
3. Top-right of the file view, click the **trash can** (Delete file) → scroll down → green **Commit changes**. (This sidesteps GitHub's no-prompt overwrite issue from last time.)
4. Back on the repo root, click **Add file → Upload files**.
5. Drag the new `expenses.html` from `Bunker Projects Corporate / Expenses App` onto the upload zone.
6. Scroll down → green **Commit changes**.
7. Wait ~60 seconds for GitHub Pages to rebuild.

**Verify:** open your URL in Chrome/Firefox on phone or desktop. You should see "🛣️ Mileage" in the Category dropdown, and a "Project (optional)" field below the date.

You don't need to do anything on the phone — Firefox / your bookmark widget will load the new version automatically. If it still looks old, force-refresh: pull down to refresh, or hard-reload (browser settings → clear site cache for `csmcv4-spec.github.io`).

---

## Step 2 — Update `Code.gs` in Apps Script

1. Open your Google Sheet (the one with the *Expenses* tab).
2. **Extensions → Apps Script.**
3. In the editor, **select all** (Ctrl+A) → **delete**.
4. Open `Code.gs` from your `Expenses App` folder, copy *all* of it, paste into the editor.
5. Click **disk icon** (Save).
6. **This is the important bit — re-deploy a new version with the same URL:**
   - Click **Deploy → Manage deployments** (NOT "New deployment" — we want to update the existing one).
   - Find your existing deployment in the list.
   - Click the **pencil icon** next to it (Edit).
   - In the **Version** dropdown, choose **New version**.
   - Description: type `v2 — mileage + project`.
   - Click **Deploy**.
   - Wait for "Deployment successfully updated" — copy nothing, just close the dialog. **The /exec URL stays the same**, so the app on your phone keeps working.

If you accidentally do **New deployment** instead of editing the existing one, you'll get a new URL — easy fix: just paste the new URL into the app's Settings tab. But editing the existing one is cleaner because nothing changes for the app.

---

## Step 3 — Test it

1. Open the app on phone or desktop.
2. **Add tab.** Pick **🛣️ Mileage** category. Form swaps in From / To / Miles / Rate. Type 12 miles → it should show "£5.40 · 12 mi × £0.45". Add a project name like "Allsopp's site visit". Save.
3. **Google Sheet.** Open it — the *Expenses* tab now has columns *Project*, *Miles*, *Rate* on the right. The new row has all three populated.
4. **History tab.** Pick the new project from the project filter — should show only that entry.
5. **Receipts** still work the same as before for non-mileage entries.

---

## Migration safety

- Old rows in your Sheet keep their data exactly. The script just appends new columns to the right; existing data isn't touched.
- The app handles old rows gracefully — they just show no project tag and no mileage breakdown, which is correct.
- If you've manually added your own columns to the Sheet, the script respects their position when writing new rows. Don't rename the canonical headers (`ID`, `Date`, `Category`, `Amount`, `Note`, `ReceiptURL`, `CreatedAt`, `Project`, `Miles`, `Rate`) — the script identifies columns by name.

---

— Charlie · 2026-05-04 · Confidential, internal use only.
