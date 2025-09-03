// Product catalog for Unicorn Commander
export const products = [
  {
    id: 'uc1-base',
    name: 'Unicorn Commander UC-1',
    price: 1500,
    currency: 'USD',
    description: 'The ultimate AI command center with local LLMs',
    image: '/images/UC-1_Desktop.webp',
    stripeLink: 'https://buy.stripe.com/cNi5kDf0h0n45K2cHk18c00',
    features: [
      '24-core/32-thread AMD processor',
      '64GB DDR5 RAM',
      'NVIDIA RTX GPU',
      'Pre-installed AI stack',
      'Lifetime support'
    ],
    inStock: true
  },
  {
    id: 'uc1-pro',
    name: 'UC-1 Pro Edition',
    price: 2500,
    currency: 'USD',
    description: 'Enhanced UC-1 with double RAM and storage',
    image: '/images/UC-1_Desktop.webp',
    stripeLink: '', // Would need new Stripe product
    features: [
      'Everything in UC-1 Base',
      '128GB DDR5 RAM',
      '4TB NVMe storage',
      'Premium support',
      'Custom configurations'
    ],
    inStock: true
  },
  {
    id: 'ai-consultation',
    name: 'AI Implementation Consultation',
    price: 500,
    currency: 'USD',
    description: '2-hour consultation to optimize your AI workflow',
    stripeLink: '', // Would need new Stripe product
    features: [
      'Custom AI strategy',
      'Workflow optimization',
      'Tool recommendations',
      'Follow-up support'
    ],
    inStock: true
  }
];

// Helper functions
export const getProduct = (id) => products.find(p => p.id === id);
export const formatPrice = (price, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(price);
};