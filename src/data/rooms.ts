export interface Room {
  name: string;
  slug: string;
  size: string;
  image: string;
  description: string;
  features: string[];
  amenities: string[];
}

export const rooms: Room[] = [
  {
    name: 'Superior Room',
    slug: 'superior-room',
    size: '23sqm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWYCCNps4N-hazXtnhUSyo92DjE-sYuooVLHaShthiCaPr-FoN-dixisql1VzVSaOYIQP2lAR0xvrJj40ON_TUO_B7snZzoQmh9F56eOzijhjLI5jU8xb3Wd-mxrrYSfPnYoS_NIq6PRYXMwHrBPMpz9lXM8ljx9PpbLnE11-wyUYQHXBlCXnx3f8rtLrWcRgyv18GDZp9x0phNKn5zOM3WOIGIJb2vOlQdFePNjfoarc3hp3krMWMeHU1sJjOK5gHNFswRmIiY9k',
    description: 'Experience effortless comfort with our Superior Room. Perfectly balanced between modern style and efficient design, this room provides the ideal urban sanctuary in the heart of Phnom Penh.',
    features: ['City View', 'King or Twin Bed', 'Fast Wi-Fi', 'Smart TV'],
    amenities: ['Coffee Maker', 'Premium Toiletries', '24/7 Room Service', 'Rain Shower']
  },
  {
    name: 'Deluxe Room',
    slug: 'deluxe-room',
    size: '29sqm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByIKIN7x9oVyw8D_qSRHYYUIZENAKSI_kma2V_hzltElfjP-m0flQkGiJX8oLm9pbz6H4Afrp07Kn1zyUJgW46PF7Dlgmq9I9xlOb6dxM74pCgN5r1qittv43NZGTfB_qpDjFEOpBCmtqulwLewAb53IQdYasKOAhpjvk9kSTvNVskrrkWNz4Ie1Nmv2jIIOkldpWvVzl9SKkhVqXhOkJdzNUNEK2vw7PB_QSUEXRvkqdRr3_7iFNxw8Sj61aztRm_1JHfd-JQWnY',
    description: 'Elevate your stay in our Deluxe Room. Offering more space and refined decor, this room category features floor-to-ceiling windows and a boutique cinematic aesthetic.',
    features: ['Panoramic View', 'King Bed', 'Nespresso Machine', 'Enhanced Layout'],
    amenities: ['Bathrobe & Slippers', 'Minibar', 'Evening Turndown', 'Bluetooth Speakers']
  },
  {
    name: 'Premier Deluxe',
    slug: 'premier-deluxe',
    size: '53sqm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDba9RvNrPQ7M7LzTr0RiUn8B-aqdwsiW5FiE4YKXDLEQIIsENfNLqwvue00-9kdm6PMl2viabwj9k8qYSetEPjkVjYtZ9wvVHaS05Sfr0z-B-0aM7M_oC9m29nBDNXRzzV1f4HH93Q_PVNEwtu72LPV3ZMuZ5FwHyAc3AY2InQ-DStySRmOVyuaZM3pJ8wv3ZF_Z7Tahekfg8l6_CYvr_BAYRkIOvI7jph5OYLJj6GfugVIeXfPl39GDLroA0LZm8MiPQk9yfgxE',
    description: 'The Premier Deluxe suite offers expansive luxury for the discerning traveler. Featuring a separate living area and a curated selection of cinematic memorabilia.',
    features: ['Separate Lounge', 'Luxury Bathroom', 'Dual Vanities', 'Walk-in Closet'],
    amenities: ['Butler Service (Optional)', 'Premium Minibar', 'Lounge Access', 'VIP Check-in']
  },
  {
    name: 'Executive',
    slug: 'executive',
    size: '60sqm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUO1a8zVs6GJ9RXxz_JzfA2hQW0srSczu8jHQVvOCBszaysifJ3kUvX7R51MjBSv_jexl4RCF1qs6c7p5W1rdYPv_FEshq-HpacDfeDeFNDIXJ4L-gIEFzNuWDwqlCp4H_6_EP9jxVKLReo9NR7Zb9f_BzAjhX7R2OGqXlg0TOfmadWT1xO3B3ZBW9WSI-9KFzbL2Ga8pQovlUKeSF1ShbQca4kdhG4wh8cdHy0eCzlK3Cjl2ENBOFsLnEtKmhJQGmBuwTnlZGRZQ',
    description: 'Designed for the leading actors of industry and art, our Executive suite combines a sophisticated workplace with a lavish resting area.',
    features: ['Skyline Views', 'Executive Deskb', 'Custom Lighting', 'Artisanal Decor'],
    amenities: ['Complimentary Cocktails', 'Private Meeting Room', 'Airport Transfer', 'Late Check-out']
  },
  {
    name: 'Premier Executive',
    slug: 'premier-executive',
    size: '65sqm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1JMw2EaaX_QNhUm4L35RXGwahs4QSlLamsZQJAitaMHUtH_bVhN0jhpawEn8zi47n01lMnXmeBxRFMjPk6GkKRKpVgILLDp27uRPkjxW7K1Qv888HCYDomF83GYDFWHyXK_JE1gCBDZJb9fbvi4rAWINe-_IcZ_tZlEI4Glff7KPGlV17kAF0GbPdEHxndKE2P3U1GlulEZOk29kE5zgAESXOuUrft5X6iLV0a_HrNrqEJg4jt8521UAmiQboc0SZnts6cWcNxbI',
    description: 'Our Premier Executive suites are the epitome of high-end living, offering the perfect backdrop for your stay with cinematic views of the Independence Monument.',
    features: ['Corner Suite', 'Premium Sound System', 'Custom Bar', 'Spa-style Bath'],
    amenities: ['Full Concierge Service', 'In-room Dining Menus', 'Wine Cellar Access', 'Private Terrace']
  },
  {
    name: 'Penthouse',
    slug: 'penthouse',
    size: '120sqm',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAcvxwYWsYlR5g3y1Qqi66AduVCmbJZ4Ay-qLEkTnUH1lXgJFIRiA9EoeSzgLzGKP-AERDX2yW1CwLF7-CZ1kcsgqNIvJuW5Ua7EYextA83xUKVVdK7IHh1wN50_k0w1DWu7J6_FyleJtPe2hJKYrpfTbjIYBXhMggnclkjqqhiWQn3RlreypHBp1VNyc10KrA-KkRoWxvCm2rQwAlberZexehUNVn_iU3nRuC2VqdLovCmLBQqc4BEnxWbmbEdKwrtMjpxwgAhwM',
    description: 'The ultimate spotlight awaits in the Planet Hollywood Penthouse. This sprawling 120sqm sanctuary is inspired by the legendary suites of Los Angeles.',
    features: ['Bespoke Design', 'Private Dining Room', 'Media Room', 'Floor-to-Ceiling Glass'],
    amenities: ['24/7 Personal Butler', 'Private Elevator Access', 'Champagne Welcome', 'Fully Stocked Bar']
  }
];
