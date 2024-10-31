import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import { alert, error as notifyError, info as notifyInfo } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const input = document.getElementById('input');
const list = document.getElementById('elementId');
const country = document.getElementById('country');
console.log('cdcd');
input.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(e) {
  e.preventDefault();
  const inputValue = e.target.value.trim();
  //   if (input === '') {
  //     clearData();
  //     return;
  //   }
  //   fetchCountries()
  console.log(inputValue);
}

function clearData() {
  list.innerHTML = '';
  country.innerHTML = '';
}

function renderCountry(countryInfo) {
  country.insertAdjacentHTML('beforeend', countryInfo);
}

function renderCountry(countryList) {
  list.insertAdjacentHTML('beforeend', countryList);
}
