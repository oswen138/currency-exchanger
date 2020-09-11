export default class currencySearch {
  static getCurrency(currencyType) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/8a140450d8dad35f23a54bc1/latest/${currencyType}`;
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open('GET', url, true);
      request.send();

    });
  }
}

