import { getStripePrices, getStripeProducts } from '@/lib/payments/stripe';
import PricingCard from '../../../components/pricingCard/pricingCard';
import StandardPricing from '../../../components/standardPricing/standardPricing';

// Prices are fresh for one hour max
export const revalidate = 3600;

export default async function PricingPage() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="mb-6 text-4xl font-bold text-gray-100 tracking-tight sm:text-5xl md:text-6xl">
              Pricing
            </h1>
      <div className="grid md:grid-cols-4 gap-3 max-w-xxl mx-auto">
        <StandardPricing />
        
      </div>
    </main>
  );
}