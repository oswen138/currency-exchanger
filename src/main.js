import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencySearch from './currencySearch.js';

function clearFields() {
  $('#currency-type').val("");
  $('.showErrors').text("");
  $('.showCurrency').text("");
  $('.showNotify').text("");
}
function getElements(response, country, input) {
  console.log(response, country);
  console.log(JSON.parse(response));
  response = JSON.parse(response);
  
    if(country === "AED") {
      $('.showCurrency').text(`The converted value from USD to AED is ${response.conversion_rates.AED*input}`);
    } else if (country === "ARS") {
      $('.showCurrency').text(`The converted value from USD to ARS is ${response.conversion_rates.ARS*input}`);
    } else if (country === "AUD") {
      $('.showCurrency').text(`The converted value from USD to AUD is ${response.conversion_rates.AUD*input}`);
    } else if (country === "BGN") {
      $('#showCurrency').text(`The converted value from USD to BGN is ${response.conversion_rates.BGN*input}`);
    } else if (country === "BRL") {
      $('.showCurrency').text(`The converted value from USD to BRL is ${response.conversion_rates.BRL*input}`);
    } else if (country === "BSD") {
      $('.showCurrency').text(`The converted value from USD to BSD is ${response.conversion_rates.BSD*input}`);
    } else if (country === "HJK") {
      $(".showNotify").text(`Alert: Currency not in database, go ask the Koalas`);
    } else {
      $(".showErrors").text(`Error Alert: ${response.result}`);
    }
  }

$(document).ready(function() {
  $('#conversionRate').click(function() {
    event.preventDefault();
    let country = $('#currency-type').val();
    let input = $('#currency-value').val();
    clearFields();
    let promise = CurrencySearch.getCurrency();
    promise.then(function(response) {
      getElements(response, country, input);
    });
  });
});
  