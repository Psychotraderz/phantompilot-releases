# Changelog

## 1.30.0

First public installer. Covers everything since 1.22.

### Install, licence and updates
- New Windows installer (`PhantomPilot-Setup-1.30.0.exe`), per-user, no admin rights needed.
- 7-day trial, then paper trading only until a licence key is entered.
- New **Settings → Licence & updates** card: enter your key, check for updates.
- Signed updates: the app verifies each download before installing, keeps the
  previous version, and can roll back with `rollback.cmd`.

### Monitoring
- **Execution health** page: order delay, slippage and failures per venue.
- **Drift monitor**: compares live results with what each strategy's backtest expects,
  and flags strategies that are drifting.

### Trades and journal
- The trade journal fills itself in, including a market snapshot at entry.

### Charts and data
- Grid Bot chart.
- Combined data view across venues.
- New phone tabs: **Chart** and **Scalp**.
