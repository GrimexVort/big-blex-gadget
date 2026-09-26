// ─────────────────────────────────────────────────────────
// BIG BLEX GADGET — single source of truth for brand + WhatsApp
// Edit the number here and it updates everywhere on the site.
// ─────────────────────────────────────────────────────────

export const BRAND_NAME = 'BIG BLEX GADGET'

export const WHATSAPP_NUMBER_LOCAL = '07054085623'
export const WHATSAPP_NUMBER_INTL = '2347054085623'

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello BIG BLEX GADGET, I'm interested in your gadgets."

/**
 * Build a wa.me link with a URL-encoded prefilled message.
 * @param {string} [message] - custom message, falls back to the default greeting
 */
export function getWhatsAppLink(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(message)}`
}

/** Build a category-specific interest message + link */
export function getCategoryWhatsAppLink(categoryName) {
  return getWhatsAppLink(
    `Hello BIG BLEX GADGET, I'm interested in the ${categoryName} category.`
  )
}

export const SOCIAL = {
  instagram: '',
  facebook: '',
}
