import React from 'react';
import { SubmitButton } from '../pricingCard/submit-button';
import { checkoutAction } from '@/lib/payments/actions';

interface PricingCardProps {
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  priceId: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
}) => {
  const handleChoosePlan = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create checkout session.');
    }
  };

  const formatPrice = (amount: number): string => {
    // Format to x,xxx.xx and remove trailing .00
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };


  return (
    <div className="glass p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-semibold text-gray-300">{name}</h3>
      <p className="mt-4 text-4xl font-bold text-gray-100">
        ${formatPrice(price)}/{interval}
      </p>
      <p className="mt-2 text-sm text-gray-400">
        {trialDays} day free trial
      </p>
      <ul className="mt-6 mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-100">
            <svg
              className="h-5 w-5 text-yellow-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <form action={checkoutAction}>
        <input type="hidden" name="priceId" value={priceId} className="mt-2"/>
        <SubmitButton />
      </form>
    </div>
  );
};

export default PricingCard;