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


function getValue(response)

function getElements(response) {
  $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
  $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
}
});
});

// https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${chooseValue}

