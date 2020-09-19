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
    clearFields();
    makeApiCall();
  });
});






