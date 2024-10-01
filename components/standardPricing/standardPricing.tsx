import React from 'react';
import { getStripePrices, getStripeProducts } from '../../lib/payments/stripe';
import PricingCard from '../pricingCard/pricingCard';

// Prices are fresh for one hour max
export const revalidate = 3600;

interface Price {
    id: string;
    unitAmount: number;
    interval: 'month' | 'year';
    trialPeriodDays?: number;
  }
  
  interface Product {
    id: string;
    name: string;
  }
  
  interface PricingPlan {
    name: string;
    monthlyPrice: Price | null;
    yearlyPrice: Price | null;
  }

export default async function StandardPricing() {
  const [prices, products] = await Promise.all([
    getStripePrices(),
    getStripeProducts(),
  ]);

  const formatPrice = (unitAmount: number | null | undefined): string => {
    if (unitAmount === null || unitAmount === undefined) {
      return '0';
    }
    const dollars = unitAmount / 100;
    const formatted = dollars.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatted.endsWith('.00') ? formatted.slice(0, -3) : formatted;
  };

  const basicPlan = products.find((product) => product.name === 'Basic');
  const standardPlan = products.find((product) => product.name === 'Standard');
  const proPlan = products.find((product) => product.name === 'Pro');
  const enterprisePlan = products.find((product) => product.name === 'Enterprise');

  const basicPrice = prices.find((price) => price.productId === basicPlan?.id);
  const standardPrice = prices.find((price) => price.productId === standardPlan?.id);
  const proPrice = prices.find((price) => price.productId === proPlan?.id);
  const enterprisePrice = prices.find((price) => price.productId === enterprisePlan?.id);
  
    return (
        <>
        <PricingCard
        name={basicPlan?.name || 'Basic'}
        price={formatPrice(basicPrice?.unitAmount) || 12500}
        interval={basicPrice?.interval || 'month'}
        trialDays={basicPrice?.trialPeriodDays || 14}
        features={[
          '25 Users',
          '50 Clients',
          'API Access to all Major Brands',
          'Service Monitoring',
          'Automatated Service Recommendations',
          'Dedicated Machine & Service Truck Tracking',
          'Discord Community Support',
        ]}
        priceId={basicPrice?.id || ''}
      />
      <PricingCard
        name={standardPlan?.name || 'Standard'}
        price={formatPrice(standardPrice?.unitAmount || 45000)}
        interval={standardPrice?.interval || 'month'}
        trialDays={standardPrice?.trialPeriodDays || 14}
        features={[
          '50 Users',
          '125 Clients',
          'API Access to all Major Brands',
          'Service Monitoring',
          'Automatated Service Recommendations',
          'Dedicated Machine & Service Truck Tracking',
          'Discord  Community Support',
        ]}
        priceId={standardPrice?.id || ''}
      />
      <PricingCard
        name={proPlan?.name || 'Pro'}
        price={formatPrice(proPrice?.unitAmount || 60000)}
        interval={proPrice?.interval || 'month'}
        trialDays={proPrice?.trialPeriodDays || 14}
        features={[
          '150 Users',
          'Unlimited Clients',
          'API Access to all Major Brands',
          'Service Monitoring',
          'Automatated Service Recommendations',
          'Dedicated Machine & Service Truck Tracking',
          'Access to Discord Server',
          'Early Access to New Features',
          'Discord Community Support + Slack Access',
        ]}
        priceId={proPrice?.id || ''}
      />
      <PricingCard
        name={enterprisePlan?.name || 'Enterprise'}
        price={formatPrice(enterprisePrice?.unitAmount || 125000)}
        interval={enterprisePrice?.interval || 'month'}
        trialDays={enterprisePrice?.trialPeriodDays || 14}
        features={[
          'Unlimited Users',
          'Unlimited Clients',
          'API Access to all Major Brands',
          'Custom API Integrations',
          'Service Monitoring',
          'Automatated Service Recommendations',
          'Dedicated Machine & Service Truck Tracking',
          'Access to Discord Server',
          'Early Access to New Features',
          'Custom Support + Discord Community Support + Slack Access',
        ]}
        priceId={enterprisePrice?.id || ''}
      />
      </>
    )
}