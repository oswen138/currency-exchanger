import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencySearch from './currencySearch.js';


function currencyResult() {
  $('#currency-value').val("");
  $('#currency-type').val("");
  $('.showErrors').text("");
  $('.showResult').text("");
  $('.showNotify').text("");
}

$(document).ready(function() {
  $('#convert').click(function() {
    let currencyType = $('#conversion').val();
    clearFields();
    let promise = CurrencySearch.getCurrency(currencyType);
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showAmount').text(`The value of your currency is ${currencyType}`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});

