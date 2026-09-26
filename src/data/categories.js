// Central category list. Each category points to a local image folder —
// drop a real photo in as "cover.jpg" inside the matching folder and it
// will appear automatically (see /public/images/products/<slug>/).

export const CATEGORIES = [
  {
    slug: 'smartphones',
    name: 'Smartphones',
    description: 'Flagship and budget phones, unlocked and ready to go.',
    icon: 'Smartphone',
  },
  {
    slug: 'tablets',
    name: 'Tablets',
    description: 'Bigger screens for work, study and entertainment.',
    icon: 'Tablet',
  },
  {
    slug: 'earbuds',
    name: 'Earbuds',
    description: 'Wireless earbuds for calls, workouts and everyday use.',
    icon: 'Headphones',
  },
  {
    slug: 'headphones',
    name: 'Headphones',
    description: 'Over-ear and on-ear headphones built for sound quality.',
    icon: 'Headphones',
  },
  {
    slug: 'smartwatches',
    name: 'Smartwatches',
    description: 'Track fitness, calls and notifications on your wrist.',
    icon: 'Watch',
  },
  {
    slug: 'laptops',
    name: 'Laptops',
    description: 'Laptops for work, school, content creation and more.',
    icon: 'Laptop',
  },
  {
    slug: 'gaming',
    name: 'Gaming',
    description: 'Consoles, controllers and gaming accessories.',
    icon: 'Gamepad2',
  },
  {
    slug: 'chargers',
    name: 'Chargers & Cables',
    description: 'Fast chargers, cables and adapters that just work.',
    icon: 'Cable',
  },
  {
    slug: 'powerbanks',
    name: 'Power Banks',
    description: 'Stay charged on the go with reliable power banks.',
    icon: 'BatteryCharging',
  },
  {
    slug: 'storage',
    name: 'Storage',
    description: 'Memory cards, flash drives and external storage.',
    icon: 'HardDrive',
  },
  {
    slug: 'accessories',
    name: 'Phone Accessories',
    description: 'Cases, screen protectors and everyday essentials.',
    icon: 'ShieldCheck',
  },
  {
    slug: 'other',
    name: 'Other Gadgets',
    description: "Something else in mind? We probably have it — ask us.",
    icon: 'Sparkles',
  },
]

export function getCategoryImage(slug) {
  return `/images/products/${slug}/cover.jpg`
}
