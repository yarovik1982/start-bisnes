/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Сайт для бизнеса',
  email: 'hello@example.com',
  phoneForTel: '999-999-9999',
  phoneFormatted: '(999) 999-9999',
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  // license: 'Lic# 123456',
  license: '',
  address: {
    // lineOne: '123 Main Street',
    // lineTwo: 'Suite 100',
    // city: 'Denver',
    // state: 'CO',
    // zip: '80206',
    // country: 'US',
    lineOne: 'ул. Александра Невского, д. 1',
    lineTwo: '',
    city: 'Симферополь',
    state: 'Респ. Крым',
    zip: '295000',
    country: 'РФ',
    mapLink: 'https://maps.app.goo.gl/example',
  },
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
    telegram: 'https://t.me/@yarovikof',
  },
  domain: 'https://my-domian.com',
} as const;

export type Client = typeof client;
