import { el } from './lib/helpers.js';
import { fetchAndRenderCategory, createCategoryBackLink } from './lib/ui.js';
// TODO importa því sem nota þarf
const NEWS_API = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/';

/** Fjöldi frétta til að birta á forsíðu */
const CATEGORY_ITEMS_ON_FRONTPAGE = 5;

/** Vísun í <main> sem geymir allt efnið og við búum til element inn í */
const main = document.querySelector('main');

/**
 * Athugar útfrá url (`window.location`) hvað skal birta:
 * - `/` birtir yfirlit
 * - `/?category=X` birtir yfirlit fyrir flokk `X`
 */
async function route() {
  // Athugum hvort það sé verið að biðja um category í URL, t.d.
  // /?category=menning

  // Ef svo er, birtum fréttir fyrir þann flokk

  // Annars birtum við „forsíðu“
}

/**
 * Sér um að taka við `popstate` atburð sem gerist þegar ýtt er á back takka í
 * vafra. Sjáum þá um að birta réttan skjá.
 */
window.onpopstate = () => {
  // TODO útfæra
};

// Í fyrsta skipti sem vefur er opnaður birtum við það sem beðið er um út frá URL
//route();



var status = function (response) {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText))
  }
  return Promise.resolve(response)
}
var json = function (response) {
  return response.json()
}

fetch(NEWS_API)
  .then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log('data', data)
    let dataResault = [];
    for (const element of data) {
      const divNew = document.createElement('div');
      main.appendChild(divNew);
      const a = document.createElement('a');
      a.href = element.url;
      a.innerHTML = element.id;
      divNew.appendChild(a);
      //console.log(element.id)
      //console.log(element.url)
      //dataResault.push(fetchAndRenderCategory(element.id, main, element.url, CATEGORY_ITEMS_ON_FRONTPAGE))
    }
    data.forEach(element => {
      //console.log(element.url)
      //dataResault.push(fetchAndRenderCategory(element.id, main, element.url, CATEGORY_ITEMS_ON_FRONTPAGE))
    }
    
  );

    createCategoryBackLink(main, dataResault.length);
    return data;
  })
  .catch(function (error) {
    console.log('error', error)
  })

