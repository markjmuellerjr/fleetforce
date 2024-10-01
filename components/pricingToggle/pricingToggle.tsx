import React, { useState } from 'react';
import PricingCard from '../pricingCard/pricingCard';
import { Switch } from '../../components/ui/switch'; 

interface Price {
  id: string;
  unitAmount: number;
  interval: 'month' | 'year';
  trialPeriodDays?: number;
}

interface PricingPlan {
  name: string;
  monthlyPrice: Price | null;
  yearlyPrice: Price | null;
}

interface PricingToggleProps {
  pricingPlans: PricingPlan[];
}

const PricingToggle: React.FC<PricingToggleProps> = ({ pricingPlans }) => {
  const [billingInterval, setBillingInterval] = useState<'month' | 'year'>('month');

  const handleToggle = () => {
    setBillingInterval((prev) => (prev === 'month' ? 'year' : 'month'));
  };

  return (
    <section className="py-20 bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toggle Switch */}
        <div className="flex items-center justify-center mb-8">
          <span className="text-gray-300 mr-4">Monthly</span>
          <Switch
            checked={billingInterval === 'year'}
            onCheckedChange={handleToggle}
            className="bg-gray-200 checked:bg-yellow-500 focus:ring-yellow-500"
            aria-label="Toggle billing interval"
          />
          <span className="text-gray-300 ml-4">Yearly</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => {
            const selectedPrice =
              billingInterval === 'month'
                ? plan.monthlyPrice
                : plan.yearlyPrice;

            // Fallback to monthly if yearly price isn't available
            const displayPrice = selectedPrice
              ? (selectedPrice.unitAmount / 100).toFixed(2)
              : 'N/A';

            const displayInterval = selectedPrice?.interval || 'month';

            return (
              <PricingCard
                key={plan.name}
                name={plan.name}
                price={parseFloat(displayPrice)}
                interval={displayInterval}
                trialDays={selectedPrice?.trialPeriodDays || 14}
                features={
                  plan.name === 'Pro' || plan.name === 'Enterprise'
                    ? [
                        'Everything in Base, and:',
                        'Early Access to New Features',
                        '24/7 Support + Slack Access',
                      ]
                    : [
                        'Unlimited Usage',
                        'Unlimited Workspace Members',
                        'Email Support',
                      ]
                }
                priceId={selectedPrice?.id || ''}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingToggle;