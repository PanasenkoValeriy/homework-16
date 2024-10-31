import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import { alert, error as notifyError, info as notifyInfo } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const input = document.getElementById('input');
const list = document.getElementById('list');
const country = document.getElementById('country');

input.addEventListener('input', debounce(onInputChange, 500));

function onInputChange(e) {
  e.preventDefault();
  const inputValue = e.target.value.trim();
  if (inputValue === '') {
    clearData();
    return;
  }

  fetchCountries(inputValue)
    .then(fetchResponse)
    .catch(error => {
      notifyError(`Something went wrong - ${error}`);
    });
}

function clearData() {
  list.innerHTML = '';
  country.innerHTML = '';
}

function renderCountry(countryInfo) {
  country.insertAdjacentHTML('beforeend', countryInfo);
}

function renderCountryList(countryList) {
  list.insertAdjacentHTML('beforeend', countryList);
}

function fetchResponse(countries) {
  clearData();
  if (countries.length > 1 && countries.length <= 10) {
    const countryList = countries
      .map(country => {
        console.log(country);
        return `
          <li class="country__item">
      <img class="country__item__img" src="${country.flags.svg}" alt="">
      <p class="country__item__text">${country.name.common}</p>
    </li> 
          `;
      })
      .join('');
    renderCountryList(countryList);
  }
}
