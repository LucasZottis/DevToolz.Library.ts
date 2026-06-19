// export const decimalNumber = "^(\d+(\.)?)+(\,{1}\d{2}){1}$";
// export const decimalNumberWithSign = "(^R\$ )?(\d+(\.)?)+(\,{1}\d{2}){1}$";
// export const emailDomain = "@[a-z0-9]+\.?-?[a-z0-9]+?(\.[a-z0-9]{2,3})+$";
// export const email = "^(\w+\.?|-?\w+?)+@[a-z0-9]+\.?-?[a-z0-9]+?(\.[a-z0-9]{2,3})+$";
export const cnpjPattern = /^(\d{2})\.?(\d{3})\.?(\d{3})\/?([0-9]{4})\-?(\d{2})$/;
/** Alphanumeric CNPJ (IN RFB nº 2.229/2024): first 12 positions are [A-Z0-9], last 2 are always digits. */
export const cnpjAlphanumericPattern = /^([A-Z0-9]{2})\.?([A-Z0-9]{3})\.?([A-Z0-9]{3})\/?([A-Z0-9]{4})\-?(\d{2})$/i;
export const cpfPattern = /^(\d{3})\.?(\d{3})\.?(\d{3})\-?(\d{2}$)$/;