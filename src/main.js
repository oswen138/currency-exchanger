import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencySearch from './currencySearch.js';

function clearFields() {
  $('#currency-value').val("");
  $('#currency-type').text("");
  $('.showErrors').text("");
  $('.showCurrency').text("");
  $('.showNotify').text("");
}

function getCurrency(response) {
  if (response.main) {
    $('.showCurrency').text(`The converted value in ${response.main.currency} is:`);
    $('.showNotify').text(`The currency in ${response.main.notify} does not exist.`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(conversion_rates) {
  const response = await CurrencySearch.getCurrency(conversion_rates);
  getCurrency(response);
}

$(document).ready(function() {
  $('#conversion').click(function() {
    let conversion_rates = $('#conversion').val();
    clearFields();
    makeApiCall();
  });
});










function currencyResult() {
  $('#currency-value').val("");
  $('#currency-type').val("");
  $('.showErrors').text("");
  $('.showResult').text("");
  $('.showNotify').text("");
}


$(document).ready(function() {
  $('#conversion').onclick(function() {
    let currencyType = $('#currency-type').val();
    currencyResult();
    let promise = CurrencySearch.getCurrency(currencyType);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showResult').text(`Your currency converted is ${currency_Type} is ${body.main.result}%`);
      $('.showNotify').text(`Your chosen currency to convert is not included. ${body.main.notify}`);
    }, function(error) {
      $('.showErrors').text(`Your request is facing an error: ${error}`);
    });
  });
});




function showResult() 
{
 var type=document.getElementById("currency-type").value;

  if (type ==="AUD")
  {
    document.getElementById("result").innerHTML= $('#currency-value').val("") * 1.3749;
  }
  else if (type === "CAD")
  {
    document.getElementById("result").innerHTML= $('#currency-value').val("")* 1.3164;
  }
  else if (type === "HKD") 
  {
    document.getElementById("result").innerHTML= $('#currency-value').val("") * 6.2870;
  }
  else if (type === "GBP") 
  {
    document.getElementById("result").innerHTML= $('#currency-value').val("") * 0.7741;
  }
  else if (type === "THB") 
  {
    document.getElementById("result").innerHTML= $('#currency-value').val("") * 31.2781;
  }
  else 
  {
    alert('Your currency is not valid.');
  }
}
  return showResult()

