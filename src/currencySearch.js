export default class CurrencySearch {
  static async getCurrency() {
    try {
      const response = await fetch ('https://v6.exchangerate-api.com/v6/8a140450d8dad35f23a54bc1/latest/USD');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}
