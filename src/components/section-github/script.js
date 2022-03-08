import { checkCache, storeCache } from "./utils.js";
import { apiToken, apiUrl } from "./modules/api/credentials.js";
import { getViewerRepository } from "./modules/api/github.js";

document.getElementById('button').addEventListener('click', onClickHandler);

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

async function onClickHandler() {
  let gitHubCache = checkCache('@GitHub');
  gitHubCache = JSON.parse(gitHubCache);

  console.log('GitHubCache', gitHubCache);

  if (gitHubCache) {
    const githubCardNode = document.getElementById('github-card');
    const anchorNode = githubCardNode.children[0];
    const imageNode = githubCardNode.children[0].children[0].children[0];
    const titleNode = githubCardNode.children[0].children[1].children[0];
    const paragraphNode = githubCardNode.children[0].children[1].children[1];
    const topicsNode = githubCardNode.children[0].children[2];

    anchorNode.href = gitHubCache.url;
    imageNode.src = gitHubCache.openGraphImageUrl;
    titleNode.innerText = gitHubCache.name.replaceAll('-', ' ');
    paragraphNode.innerText = gitHubCache.description;

    renderTopics(gitHubCache.topics, topicsNode);

    return;
  };

  const response = await getViewerRepository(apiUrl, apiToken);

  const cachedObject = {
    url: response.data.viewer.pinnedItems.nodes[0].url,
    openGraphImageUrl: response.data.viewer.pinnedItems.nodes[0].openGraphImageUrl,
    name: response.data.viewer.pinnedItems.nodes[0].name,
    description: response.data.viewer.pinnedItems.nodes[0].description,
    topics: response.data.viewer.pinnedItems.nodes[0].repositoryTopics.nodes
  };

  storeCache('@GitHub', JSON.stringify(cachedObject));
  
  const githubCardNode = document.getElementById('github-card');
  const anchorNode = githubCardNode.children[0];
  const imageNode = githubCardNode.children[0].children[0].children[0];
  const titleNode = githubCardNode.children[0].children[1].children[0];
  const paragraphNode = githubCardNode.children[0].children[1].children[1];
  const topicsNode = githubCardNode.children[0].children[2];

  const repository = response.data.viewer.pinnedItems.nodes[0];
  
  anchorNode.href = repository.url;
  imageNode.src = repository.openGraphImageUrl;
  titleNode.innerText = repository.name.replaceAll('-', ' ');
  paragraphNode.innerText = repository.description;

  renderTopics(repository.repositoryTopics.nodes, topicsNode);

  console.log('GitHub response: ', response);
};