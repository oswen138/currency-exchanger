export default class CurrencySearch {
  static async getCurrency(conversion_rates) {
    try {
      const response = await fetch ('https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${conversion_rates}');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
