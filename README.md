# AURÉA HAUTE PARFUMERIE — Frontend Web Platform

Official, production-grade frontend implementation of the AURÉA luxury perfume e-commerce web platform, converted directly from the design system specification and 16 visual screen previews.

---

### Project Structure

```
aurea_website/
├── index.html          # Main HTML5 entry point & layout shell
├── styles.css          # Design system styles, typography & luxury animations
├── data.js             # Master catalog data, Egyptian localization & scent pyramids
├── app.js              # Full SPA router, cart state, quiz engine & checkout logic
├── bundle.js           # Standalone universal bundle (works via file:// and http://)
├── server.py           # Built-in lightweight local development HTTP server
├── package.json        # Project metadata & npm run scripts
├── README.md           # Documentation & instructions
└── assets/             # 21 high-resolution photography & sketch assets
    ├── golden_amber.png
    ├── rose_veil.png
    ├── midnight_oud.png
    ├── noir_musk.png
    ├── sandal_whisper.png
    ├── vanilla_bloom.png
    ├── golden_noir.png
    ├── hero_hand.png
    ├── mood_fresh.png
    ├── mood_romantic.png
    ├── mood_confident.png
    ├── mood_performance.png
    ├── flacon_sketch.png
    └── user_avatar.png
```

---

### How to Run the Website

#### Option 1: Direct Browser Open (Zero Configuration)
Simply double-click or open `index.html` in any web browser. Because the application utilizes `bundle.js`, it runs natively over `file:///` without CORS errors.

#### Option 2: Python Local Server
Run in this directory:
```bash
python server.py
# or
python -m http.server 5173
```
Then navigate to: `http://localhost:5173/`

#### Option 3: Node.js
```bash
npm run serve
```
Then navigate to: `http://localhost:5173/`

---

### Implemented Pages & Features

1. **Desktop / Tablet / Mobile Header**: Announcement bar with Cairo/Giza courier promo, logo, live note search, wishlist badge counter, profile, and bag counter.
2. **Desktop Homepage (Screen 01 & 17)**: Editorial split hero with authentic hand photography, 4 mood intention cards, and curated bestsellers.
3. **Explore & Olfactory Library (Screen 02 & 12)**: 260px faceted filter sidebar with family filters, note chip cloud, EGP price range slider, and 3-column product cards.
4. **Product Details Page (PDP) (Screen 03 & 15)**: Multi-angle bottle gallery, 3-Tier Olfactory Pyramid (Top, Heart, Base), size selector, ValU 3-month installment breakdown, and Bosta delivery guarantee.
5. **Quick View Modal (Screen 04)**: Centered 840×520px modal overlay for fast browsing and instant Add to Bag.
6. **Scent Discovery Quiz (Screen 05 & 19)**: 5-step diagnostic quiz with 6 tactile family cards, progress bar, note selection, and match calculation.
7. **Personalized Recommendations (Screen 06 & 22)**: "Made for Your Senses: Alexa's Signature Edit", 96% Match badge, narrative match rationale, and Bespoke Discovery Set banner.
8. **Shopping Cart (Screen 07 & 01)**: "Your Fragrance Edit", free courier meter (> EGP 4,500), discovery sample picker, promo code `SIGNATURE10`, and total calculation in EGP and USD.
9. **Localized Egyptian Checkout (Screen 08 & 02)**: +20 mobile number, Zamalek Cairo address, and explicit UI Concept selectors for COD, InstaPay, Mobile Wallets, and ValU.
10. **Order Confirmation & Tracking (Screen 09 & 06)**: Order `#AUR-89241`, live Bosta tracking `#BST-773910`, itemized receipt, and climate care guide.
11. **Wishlist ("Your Favorites") (Screen 10 & 03)**: Saved flacons with note affinity indicators and Move to Bag actions.
12. **Customer Profile & Scent DNA (Screen 12 & 07)**: Personal details and Olfactory DNA breakdown radar bars.
13. **Responsive Mobile Ergonomics (Screen 13 & 14)**: Mobile bottom navigation bar and sticky PDP purchase bar.
