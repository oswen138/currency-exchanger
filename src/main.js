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
function getElements(response) {
  console.log(response);
  let selection = country;
    if(selection === "AED") {
      $('#showCurrency').text('selection * `${response.conversion_rates.AED}`');
    } else if (selection === "ARS") {
      $('#showCurrency').text('selection * `${response.conversion_rates.ARS}`');
    } else if (selection === "AUD") {
      $('#showCurrency').text('selection * `${response.conversion_rates.AUD}`');
    } else if (selection === "BGN") {
      $('#showCurrency').text('selection * `${response.conversion_rates.BGN}`');
    } else if (selection === "BRL") {
      $('#showCurrency').text('selection * `${response.conversion_rates.BRL}`');
    } else if (selection === "BSD") {
      $('#showCurrency').text('selection * `${response.conversion_rates.BSD}`');
    } else if (selection === "HJK") {
      $(".showNotify").text(`Alert: Currency not in database`);
    } else {
      $(".showErrors").text(`Error Alert: ${response.message}`);
    }
  }

$(document).ready(function() {
  $('#conversionRate').click(function() {
    event.preventDefault();
    let country = $('#currency-type').val();
    clearFields();
    let promise = CurrencySearch.getCurrency(country);
    promise.then(function(response) {
      getElements(response);
    });
  });
});
  