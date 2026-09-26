import { useEffect } from 'react'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      setMeta('description', description)
      setMeta('og:description', description, 'property')
    }
    if (title) setMeta('og:title', title, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:site_name', 'BIG BLEX GADGET', 'property')
  }, [title, description])

  return null
}
