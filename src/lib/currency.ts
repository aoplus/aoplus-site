
type CurrencyDetails = {
  code: 'INR' | 'USD' | 'GBP' | 'AED';
  rate: number; // Conversion rate from INR
};

const currencyMap: Record<string, CurrencyDetails> = {
  IN: { code: 'INR', rate: 1 },
  US: { code: 'USD', rate: 1 / 83.5 },
  GB: { code: 'GBP', rate: 1 / 106 },
  AE: { code: 'AED', rate: 1 / 22.7 },
};

export function formatPrice(basePriceInr: number, countryCode: string | null): string {
  const country = countryCode && currencyMap[countryCode] ? countryCode : 'IN';
  const currency = currencyMap[country];
  
  if (basePriceInr === 0) {
      return 'Free';
  }

  const convertedPrice = basePriceInr * currency.rate;

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(convertedPrice));
}
