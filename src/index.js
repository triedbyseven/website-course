import loadHamburgerMenu from './modules/navigation/hamburger';
import loadHeroAnimations from './modules/animations/hero';
import mountScrollOnRevealEventListener from './modules/global/scroll';

mountScrollOnRevealEventListener();
loadHamburgerMenu();


const timer = (Math.random() * 10).toFixed() * 1000;

function getAllGames(inStock) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!inStock) reject(new Error('No games are in stock, oh shit were all out!'));

      resolve([{ id: 1, name: 'Fortnite' }, { id: 2, name: 'Halo' }]);
    }, timer);
  });
};

// async & await
// try catch blocks

let instagramPostsData = undefined;

async function returnAllGames() {
  try {
    const allGames = await getAllGames(true);

    instagramPostsData = allGames;

    console.log(instagramPostsData);
  } catch (error) {
    console.error(error);
  };
};

async function App() {
  // Running our async code;
  await returnAllGames();
  console.log('instagramPostsData', instagramPostsData);
};


App();