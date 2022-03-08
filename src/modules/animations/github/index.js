
const apiUrl = 'https://api.github.com/graphql';
const apiToken = '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';

let isInitialized = false;

function getAllRepositories(apiUrl, apiToken) {
  return new Promise(function (resolve, reject) {
    const HTTP = new XMLHttpRequest();

    HTTP.open('POST', apiUrl);
    HTTP.setRequestHeader('Authorization', 'Bearer ' + apiToken);
    HTTP.setRequestHeader('Content-Type', 'application/json');

    const QUERY = {
      query: `{
        viewer {
          anyPinnableItems
          bio
          followers(first: 1) {
            nodes {
              name
              email
            }
            totalCount
          }
          pinnedItems(first: 6) {
            nodes {
              ... on Repository {
                name
                description
                url
                openGraphImageUrl
                repositoryTopics(first: 6) {
                  nodes {
                    resourcePath
                    topic {
                      name
                    }
                    url
                  }
                }
              }
            }
            totalCount
          }
        }
      }`
    };

    HTTP.onload = function () {
      if (HTTP.status === 200) {
        const responseJSON = JSON.parse(HTTP.responseText);

        resolve(responseJSON);
      }
    };

    HTTP.onerror = function () {
      reject(new Error('GraphQL network error occured.'));
    };

    HTTP.send(JSON.stringify(QUERY));
  });
};

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

async function callGitHubRequest() {
  const response = await getAllRepositories(apiUrl, apiToken);

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

function loadGithubAnimations(isScrolledTo) {
  if (isScrolledTo) {
    if (isInitialized) return;

    callGitHubRequest();
    
    isInitialized = true
  }
};

export default loadGithubAnimations;