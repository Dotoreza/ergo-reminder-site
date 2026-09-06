# Ergo Reminder Site

Static marketing and support site for Ergo Reminder.

Production domain: `https://protectyourneck.us`

## Pages

- `index.html` - Long-scroll homepage with Features, How it works, Why Ergo, FAQ, and Download sections
- `features.html` - MVP feature overview
- `privacy.html` - Privacy policy
- `support.html` - Support and known limitations
- `faq.html` - Frequently asked questions
- `contact.html` - Contact page
- `release-notes.html` - Public release notes
- `404.html` - Not found page

## Stack

- Plain HTML
- Plain CSS
- Plain JavaScript

## Local Preview

Open any page directly in a browser, or serve the folder with a simple static server.

## Homepage design and content

`assets/landing.css` styles the homepage; `assets/styles.css` continues to serve the existing support and policy pages. The pinned homepage header links to sections, keeps Download visible on mobile, and highlights the section in view. Smooth scrolling respects reduced-motion preferences.

The hero phone and reminder are CSS illustrations, labeled as illustrative. The walkthrough uses the actual overlay screenshot in `assets/reminder-overlay.png`, copied from `C:\dev\Neck_Protect\PlayScreenshots\Screenshots\Screenshot_20260803-170521.png`. The Android overlay itself is generated at runtime by `android/app/src/main/java/com/dotoreza/ergoreminder/overlay/OverlayController.kt` in the app repository.

### Download destination

No verified download URL was supplied. Header and hero CTAs currently scroll to `#download`, which explains availability and links to the existing support email. When the store listing is ready, replace that section's availability note and email CTA with the verified store link. The top CTA can continue linking to this section or link directly to the listing.

### Adding real reviews

- `#store-rating` is hidden beneath the hero actions. Add the actual store score, rating count, and listing link, then remove `hidden` once verified. Do not display an empty star row.
- `#testimonials` is hidden after the walkthrough. Add approved quotes inside `.testimonial-grid` as `figure` elements containing a `blockquote` and an attributed `figcaption`, then remove `hidden`. The responsive card styles are already included.
- Until real reviews arrive, product details and the privacy section supply useful context without empty review panels or invented endorsements.

## Deployment Notes

- Hosted on Cloudflare Pages
- No build step required
- `robots.txt` and `sitemap.xml` are committed directly for the production domain

