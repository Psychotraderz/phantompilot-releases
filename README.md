# Phantom Pilot

Phantom Pilot is a Windows desktop trading app. This repository only hosts the
**installers and update files**. The source code is not published here.

## Download and install

1. Open the [latest release](../../releases/latest).
2. Download `PhantomPilot-Setup-<version>.exe`.
3. Run it. The installer is per-user, so it does not need administrator rights.

Windows SmartScreen may warn about a new download. Choose **More info → Run anyway**
only if you downloaded the file from this repository's Releases page.

## Trial and licence

- A new install runs as a **7-day trial** with every feature.
- After the trial, the app keeps working in **paper trading only** (no live orders)
  until a licence key is entered.
- Enter your key under **Settings → Licence & updates**. Each key is tied to a
  limited number of PCs.

## Updates

- The app checks this repository for new versions and shows them under
  **Settings → Licence & updates**.
- Every update is signed. The app checks the signature and the download before it
  installs anything, and refuses files that fail the check.
- The previous version is kept. If an update causes problems, run `rollback.cmd`
  from the install folder to go back.

## Trading risk

Trading, especially with leverage, can lose more than you expect. Use paper mode
or a testnet until you understand how the app behaves with your settings. You are
responsible for the orders placed on your accounts.

## Support

Report problems through this repository's [Issues](../../issues). Include the app
version and what you were doing. Do **not** post API keys, licence keys or log
files that contain them.
