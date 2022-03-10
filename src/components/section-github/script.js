import { checkCache, storeCache } from "./utils.js";
import { apiToken, apiUrl } from "./modules/api/credentials.js";
import { getViewerRepository } from "./modules/api/github.js";

document.getElementById('button').addEventListener('click', onClickHandler);
const githubCardNode = document.getElementById('github-card');
const anchorNode = githubCardNode.children[0];
const imageNode = githubCardNode.children[0].children[0].children[0];
const titleNode = githubCardNode.children[0].children[1].children[0];
const paragraphNode = githubCardNode.children[0].children[1].children[1];
const topicsNode = githubCardNode.children[0].children[2];

function renderTopics(topics, node) {
  let fragment = document.createDocumentFragment();


  topics.forEach((topic) => {
    const topicDiv = document.createElement('div');
    topicDiv.className = 'topic';
    topicDiv.innerText = topic.topic.name;

    fragment.appendChild(topicDiv);
  });

  node.replaceChildren(fragment);
};

function renderCardData(repository) {
  anchorNode.href = repository.url;
  imageNode.src = repository.openGraphImageUrl;
  titleNode.innerText = repository.name.replaceAll('-', ' ');
  paragraphNode.innerText = repository.description;
  renderTopics(repository.repositoryTopics.nodes, topicsNode);
};

function renderCachedCardData(gitHubCache) {
  anchorNode.href = gitHubCache.url;
  imageNode.src = gitHubCache.openGraphImageUrl;
  titleNode.innerText = gitHubCache.name.replaceAll('-', ' ');
  paragraphNode.innerText = gitHubCache.description;

  renderTopics(gitHubCache.topics, topicsNode);
};

function createCachedObject(repository) {
  return {
    url: repository.url,
    openGraphImageUrl: repository.openGraphImageUrl,
    name: repository.name,
    description: repository.description,
    topics: repository.repositoryTopics.nodes
  }
};

async function onClickHandler() {
  let gitHubCache = checkCache('@GitHub');
  gitHubCache = JSON.parse(gitHubCache);

  if (gitHubCache) return renderCachedCardData(gitHubCache);

  const response = await getViewerRepository(apiUrl, apiToken);
  const repository = response.data.viewer.pinnedItems.nodes[0];

  const cachedObject = createCachedObject(repository);
  storeCache('@GitHub', JSON.stringify(cachedObject));
  
  renderCardData(repository); 
};