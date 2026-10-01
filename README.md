# Production-Hardened Trading Bot

Audited & Remediated by AlphaAudit Studio.

## Security & Safeguards Applied:
- Automated hard stop-loss brackets on every order.
- Conservative 3x leverage ceiling with 3% portfolio daily circuit breaker.
- Client-side token-bucket rate limiting enabled to prevent HTTP 429 exchange bans.
- Safe linear order scaling with exchange lot step precision rounding.
- Encrypted environment variable ingestion for API credentials.

## Quick Start
```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Configure credentials in .env
cp .env.example .env
# Fill in EXCHANGE_API_KEY and EXCHANGE_API_SECRET

# 3. Launch bot
python bot.py
```
