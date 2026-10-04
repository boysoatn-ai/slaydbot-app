# AI Slayd Bot — Mini App

Telegram Mini App: taqdimot dizaynini tanlash (6 uslub × 10 rang + 16 yo'nalish bezagi).
Faqat statik fayllar (GitHub Pages). Kalitlar yo'q.

- `index.html` — ilova
- `data.json` — uslublar, palitralar, yo'nalishlar ro'yxati
- `img/themes/*.jpg` — 60 dizayn ko'rinishi, `img/subjects/*.jpg` — yo'nalish bezaklari

Rasmlar asosiy repo (`slaydbot`) dagi builder bilan yaratiladi.

## `/go/` — reklama landing sahifasi
Meta reklamasi shu sahifaga olib keladi: `https://<domen>/go/?campaign_id={{campaign.id}}&adset_id={{adset.id}}&ad_id={{ad.id}}&ad_name={{ad.name}}&placement={{placement}}`.
Sahifa Meta Pixel (`PageView`, `ClickToBot`) va bot API (`/api/t/view`, `/api/t/click`) orqali kuzatadi, so'ng
`https://t.me/slaydol_bot?start=m_<token>` ga yo'naltiradi. Sozlamalar: `go/config.js` (`pixelId`, `apiBase`).
