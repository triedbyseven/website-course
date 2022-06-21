import callGitHubRequest from "./utils.js";

let isInitialized = false;

function delayAnimation(node, className, delayTime, isScrolledTo) {
  setTimeout(() => {
    isScrolledTo ? node.classList.remove(className) : node.classList.add(className);
  }, delayTime);
};

function loadGithubAnimations(isScrolledTo) {
  const gitHubLeftColumnElement = document.getElementById('gitHubLeftColumn');
  const gitHubRightColumnElement = document.getElementById('gitHubRightColumn');

  delayAnimation(gitHubLeftColumnElement, 'animate-left', 0, isScrolledTo);
  delayAnimation(gitHubRightColumnElement, 'animate-right', 0, isScrolledTo);

  if (isScrolledTo) {
    if (isInitialized) return;

    callGitHubRequest();
    
    isInitialized = true
  }
};

export default loadGithubAnimations;