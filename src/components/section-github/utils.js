function checkCache(name) {
  const cacheItem = localStorage.getItem(name);

  return cacheItem;
};

function storeCache(name, value) {
  localStorage.setItem(name, value);
};

export {
  checkCache,
  storeCache
};