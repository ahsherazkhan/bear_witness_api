export const pricingTiers = {
  starter: {
    name: "Starter",
    description: "Perfect for individual creators",
    monthlyPrice: 29,
    yearlyPrice: 24,
    priceId: {
      month: "pri_01abc123...", // Replace with your actual Paddle price ID
      year: "pri_01abc124..."   // Replace with your actual Paddle price ID
    },
    features: [
      "1,000 posts per month",
      "Real-time detection",
      "Basic analytics",
      "Email support",
      "API access"
    ],
    popular: false
  },
  professional: {
    name: "Professional",
    description: "Ideal for growing brands",
    monthlyPrice: 99,
    yearlyPrice: 79,
    priceId: {
      month: "pri_01abc125...", // Replace with your actual Paddle price ID
      year: "pri_01abc126..."   // Replace with your actual Paddle price ID
    },
    features: [
      "10,000 posts per month",
      "Advanced detection",
      "Detailed analytics",
      "Priority support",
      "Team collaboration",
      "Custom integrations"
    ],
    popular: true
  },
  enterprise: {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    priceId: {
      month: "pri_01abc127...", // Replace with your actual Paddle price ID
      year: "pri_01abc128..."   // Replace with your actual Paddle price ID
    },
    features: [
      "Unlimited posts",
      "White-label solution",
      "Dedicated support",
      "Custom AI training",
      "SLA guarantee",
      "24/7 phone support"
    ],
    popular: false
  }
}; 