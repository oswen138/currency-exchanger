import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencySearch from './currencySearch.js';

function clearFields() {
  $('#currency-type').val("");
  $('.showErrors').text("");
  $('.showCurrency').text("");
}

function getElements(response) {
  if (response.main) {
    $('.showCurrency').text(`The currency exchange for ${response.USD} is ${response.conversion_rates[0]}.`);
  } else {
    $('.showErrors').text(`There was an error: ${response.message}`);
    $('.showNotify').text('not a valid currency');
  }
}

$(document).ready(function() {
  $('#conversionRate').click(function() {
    let type = $('#conversionRate').val();
    clearFields();
    CurrencySearch.getCurrency(type)
      .then(function(response) {
        getElements(response);
      });
  });
});


