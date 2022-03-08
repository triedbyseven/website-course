
document.getElementById('button').addEventListener('click', onClickHandler);

const apiUrl = 'https://api.pokemontcg.io/v2/cards/xy1-1';
const apiKey = '102da3ee-5e38-4cdc-a020-2e9cf9f07af4';
let data = undefined;
let isLoading = false;

function getAllPokemon(url, apiKey) {
  return new Promise(function (resolve, reject) {
    const HTTP = new XMLHttpRequest();

    HTTP.open('GET', url);
    HTTP.setRequestHeader('X-Api-Key', apiKey);

    HTTP.onload = function () {
      if (HTTP.status === 200) {
        const responseJSON = JSON.parse(HTTP.responseText);

        resolve(responseJSON);
      }
    };

    HTTP.onerror = function () {
      reject(new Error('Network error occured.'));
    };

    HTTP.send();
  });
};

function updateView(data) {
  let fragment = document.createDocumentFragment();
  const pokemon = data;
  
  const cardNode = document.getElementById('card');
  const loaderNode = document.getElementById('loader');
  const imageNode = document.getElementById('image');
  const contentNode = document.getElementById('content');

  const cardNodeClone = cardNode.cloneNode();
  const loaderNodeClone = loaderNode.cloneNode();
  const imageNodeClone = imageNode.cloneNode(true);
  const contentNodeClone = contentNode.cloneNode(true);

  imageNodeClone.children[0].src = pokemon.images.small;
  contentNodeClone.children[0].innerText = pokemon.name;
  contentNodeClone.children[1].children[0].innerText = pokemon.rarity;
  contentNodeClone.children[2].children[0].innerText = pokemon.hp;

  cardNodeClone.appendChild(loaderNodeClone);
  cardNodeClone.appendChild(imageNodeClone);
  cardNodeClone.appendChild(contentNodeClone);
  fragment.appendChild(cardNodeClone);

  cardNode.parentNode.replaceChildren(fragment);
};

function updateLoaderView(loading) {
  if (!loading) {
    let fragment = document.createDocumentFragment();
    const loaderNode = document.getElementById('loader');

    const loaderNodeClone = loaderNode.cloneNode();

    loaderNodeClone.classList.remove('pikatchu-spinner');

    fragment.appendChild(loaderNodeClone);

    loaderNode.replaceWith(fragment);

    return;
  };

  let fragment = document.createDocumentFragment();

  const loaderNode = document.getElementById('loader');
  const imageNode = document.createElement('img');

  const loaderNodeClone = loaderNode.cloneNode();

  loaderNodeClone.classList.add('pikatchu-spinner');

  imageNode.src = '../../../assets/images/loading-pikatchu.gif';
  imageNode.alt = 'pikatchu-running-loading-spinner';
  imageNode.classList.add('pikatchu');
  loaderNodeClone.appendChild(imageNode);

  fragment.appendChild(loaderNodeClone);

  loaderNode.replaceWith(fragment);
};

async function onClickHandler() {
  isLoading = true;
  updateLoaderView(isLoading);

  const response = await getAllPokemon(apiUrl, apiKey);

  updateView(response.data);

  isLoading = false;
  updateLoaderView(isLoading);
};













































// function loadHttpRequest() {
//   const http = new XMLHttpRequest();

//   http.open('GET', 'https://api.pokemontcg.io/v2/cards/xy1-1');
//   http.setRequestHeader('X-Api-Key', '102da3ee-5e38-4cdc-a020-2e9cf9f07af4');
  
//   http.onload = function () {
//     if (http.status === 200) {
//       const response = JSON.parse(http.responseText);

//       data = response;

//       console.log('Data from global memeory', data);
//     }
//   };

//   http.send();
// };