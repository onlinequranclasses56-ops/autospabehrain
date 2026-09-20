/**
 * IndexNow bulk submission — runs after `next build`
 *
 * Submits all static pages to IndexNow (Bing + API gateway shared with
 * Yandex, Seznam, Naver). Bing then signals Google via the IndexNow
 * consortium.  Also pings the Bing sitemap endpoint.
 *
 * Usage:  node scripts/submit-indexnow.mjs
 *         (or via npm postbuild hook)
 */

const SITE       = 'https://autospabahrainwll.com'
const INDEX_KEY  = 'a9f3c2e8b5d71650e2c4f8a3b7d9e1c4'
const ENDPOINT   = 'https://api.indexnow.org/indexnow'

/* ── Every URL we want indexed ───────────────────────────────────── */
const PATHS = [
  // Core
  '/',
  '/book',

  // Service pages (10)
  '/ceramic-coating-bahrain',
  '/paint-protection-film-bahrain',
  '/zymol-luxury-detailing-bahrain',
  '/interior-detailing-bahrain',
  '/full-showroom-detail-bahrain',
  '/paint-correction-bahrain',
  '/window-tinting-bahrain',
  '/professional-car-wash-bahrain',
  '/headlight-restoration-bahrain',
  '/vinyl-wrapping-bahrain',

  // Location pages (13)
  '/car-detailing-budaiya',
  '/car-detailing-saar',
  '/car-detailing-seef',
  '/car-detailing-riffa',
  '/car-detailing-manama',
  '/car-detailing-hamala',
  '/car-detailing-aali',
  '/car-detailing-sanad',
  '/car-detailing-sanabis',
  '/car-detailing-al-jasra',
  '/car-detailing-isa-town',
  '/car-detailing-muharraq',
  '/car-detailing-manama-center',

  // Location × service pages (18)
  '/ceramic-coating-budaiya',
  '/ceramic-coating-saar',
  '/ceramic-coating-seef',
  '/ceramic-coating-riffa',
  '/ceramic-coating-manama',
  '/ceramic-coating-hamala',
  '/paint-protection-film-budaiya',
  '/paint-protection-film-saar',
  '/paint-protection-film-seef',
  '/paint-protection-film-riffa',
  '/paint-protection-film-manama',
  '/paint-protection-film-hamala',
  '/window-tinting-budaiya',
  '/window-tinting-saar',
  '/window-tinting-seef',
  '/window-tinting-riffa',
  '/window-tinting-manama',
  '/window-tinting-hamala',
]

const URLS = PATHS.map((p) => `${SITE}${p}`)

/* ── Submit to IndexNow ─────────────────────────────────────────── */
async function submitIndexNow() {
  const payload = {
    host:        'autospabahrainwll.com',
    key:         INDEX_KEY,
    keyLocation: `${SITE}/${INDEX_KEY}.txt`,
    urlList:     URLS,
  }

  const res = await fetch(ENDPOINT, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body:    JSON.stringify(payload),
  })

  if (res.ok) {
    console.log(`✓ IndexNow: submitted ${URLS.length} URLs → HTTP ${res.status}`)
  } else {
    const body = await res.text().catch(() => '')
    console.warn(`⚠ IndexNow: HTTP ${res.status} — ${body}`)
  }
}

/* ── Ping Bing sitemap ──────────────────────────────────────────── */
async function pingSitemapBing() {
  const sitemap = encodeURIComponent(`${SITE}/sitemap.xml`)
  const res     = await fetch(`https://www.bing.com/ping?sitemap=${sitemap}`)
  console.log(`✓ Bing sitemap ping → HTTP ${res.status}`)
}

/* ── Ping Google sitemap (still processed even if "deprecated") ─── */
async function pingSitemapGoogle() {
  const sitemap = encodeURIComponent(`${SITE}/sitemap.xml`)
  const res     = await fetch(`https://www.google.com/ping?sitemap=${sitemap}`)
  console.log(`✓ Google sitemap ping → HTTP ${res.status}`)
}

/* ── Run all ────────────────────────────────────────────────────── */
console.log('\n🔍  AutoSpa Bahrain — fast-index submission\n')

Promise.all([
  submitIndexNow(),
  pingSitemapBing(),
  pingSitemapGoogle(),
])
  .then(() => console.log('\n✅  All submission requests sent.\n'))
  .catch((err) => {
    console.error('Submission error:', err.message)
    process.exit(1)
  })
