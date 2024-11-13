

//Smart Truncate
export function truncate(text?: string, maxLength: number = 100): string {
  if (text && text.length > maxLength) {
    const sliceEnd = text.lastIndexOf(' ', maxLength);
    const truncatePoint = sliceEnd === -1 || maxLength - sliceEnd > 10 ? maxLength : sliceEnd;
    return `${text.slice(0, truncatePoint)}...`;
  }
  return text || '';
}


// NOT USING API BECAUSE OF IT'S JUST A SMALL PROJECT WITH NO REAL NEED FOR IT
export type Currency = "USD" | "EUR" | "JPY" | "GBP" | "AUD" | "CAD" | "CHF" | "CNY" | "SEK" | "NZD" | "BRL";
const exchangeRates: Record<Currency, number> = {
  USD: 1.0,      //USD BASE
  EUR: 0.89,
  JPY: 135.02,
  GBP: 0.76,
  AUD: 1.57,
  CAD: 1.34,
  CHF: 0.92,
  CNY: 7.06,
  SEK: 10.36,
  NZD: 1.66,
  BRL: 5.25,     
};

export function convertPrice(
  amount: number,
  fromCurrency: Currency,
  toCurrency: Currency
): number {
  if (fromCurrency === toCurrency) return amount;

  const fromRate = exchangeRates[fromCurrency];
  const toRate = exchangeRates[toCurrency];
  const convertedAmount = (amount / fromRate) * toRate;

  console.log(fromCurrency,exchangeRates[fromCurrency]);
  return parseFloat(convertedAmount.toFixed(2));
}

