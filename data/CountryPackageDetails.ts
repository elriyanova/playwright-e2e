export interface PackageDetails {
    TITLE: string;
    COVERAGE: string;
    DATA: string;
    VALIDITY: string;
    PRICE_USD: string;
    PRICE_EUR: string;
}

export const JapanPackageDetails: PackageDetails = {
    TITLE: 'Moshi Moshi',
    COVERAGE: 'Japan',
    DATA: '1 GB',
    VALIDITY: '7 Days',
    PRICE_USD: '$4.50 USD',
    PRICE_EUR: '4.50 €',
};

// More countries can be added in the future
// export const OtherCountryPackageDetails: PackageDetails = {
//   TITLE: 'Sample Package',
//   COVERAGE: 'USA',
//   DATA: '2 GB',
//   VALIDITY: '30 Days',
//   PRICE_USD: '$10.00',
//   PRICE_EUR: '€9.50',
// };
