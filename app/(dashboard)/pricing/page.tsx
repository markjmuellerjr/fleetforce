import { checkoutAction } from '@/lib/payments/actions';
import { Check } from 'lucide-react';
import { getStripePrices, getStripeProducts } from '@/lib/payments/stripe';
import { SubmitButton } from './submit-button';

// Prices are fresh for one hour max
export const revalidate = 3600;

export default async function PricingPage() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const basicPlan = products.find((product) => product.name === 'Basic');
  const standardPlan = products.find((product) => product.name === 'Standard');
  const proPlan = products.find((product) => product.name === 'Pro');
  const enterprisePlan = products.find((product) => product.name === 'Enterprise');

  const basicPrice = prices.find((price) => price.productId === basicPlan?.id);
  const standardPrice = prices.find((price) => price.productId === standardPlan?.id);
  const proPrice = prices.find((price) => price.productId === proPlan?.id);
  const enterprisePrice = prices.find((price) => price.productId === enterprisePlan?.id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
        <PricingCard
          name={basicPlan?.name || 'Basic'}
          price={basicPrice?.unitAmount || 12500}
          interval={basicPrice?.interval || 'month'}
          trialDays={basicPrice?.trialPeriodDays || 14}
          features={[
            'Unlimited Usage',
            'Unlimited Workspace Members',
            'Email Support',
          ]}
          priceId={basicPrice?.id}
        />
        <PricingCard
          name={standardPlan?.name || 'Standard'}
          price={standardPrice?.unitAmount || 45000}
          interval={standardPrice?.interval || 'month'}
          trialDays={standardPrice?.trialPeriodDays || 14}
          features={[
            'Unlimited Usage',
            'Unlimited Workspace Members',
            'Email Support',
          ]}
          priceId={standardPlan?.id}
        />
        <PricingCard
          name={proPlan?.name || 'Pro'}
          price={proPrice?.unitAmount || 60000}
          interval={proPrice?.interval || 'month'}
          trialDays={proPrice?.trialPeriodDays || 14}
          features={[
            'Everything in Base, and:',
            'Early Access to New Features',
            '24/7 Support + Slack Access',
          ]}
          priceId={proPlan?.id}
        />
        <PricingCard
          name={enterprisePlan?.name || 'Enterprise'}
          price={enterprisePrice?.unitAmount || 125000}
          interval={enterprisePrice?.interval || 'month'}
          trialDays={enterprisePrice?.trialPeriodDays || 14}
          features={[
            'Everything in Base, and:',
            'Early Access to New Features',
            '24/7 Support + Slack Access',
          ]}
          priceId={enterprisePrice?.id}
        />
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
}: {
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  priceId?: string;
}) {
  return (
    <div className="pt-6 px-6 py-6 border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-2xl font-medium text-white mb-2">{name}</h2>
      <p className="text-sm text-gray-400 mb-4">
        with {trialDays} day free trial
      </p>
      <p className="text-4xl font-medium text-gray-100 mb-6">
        ${price / 100}{' '}
        <span className="text-xl font-normal text-gray-400">
         / {interval}
        </span>
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <form action={checkoutAction}>
        <input type="hidden" name="priceId" value={priceId} />
        <SubmitButton />
      </form>
    </div>
  );
}
