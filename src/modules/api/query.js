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

export {
  QUERY
};