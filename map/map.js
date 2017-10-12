const { videos } = require('./mapData');

const resultVideosAfterMap = video => ({id: video.id, title: video.title});

// Implementação nativa
const videosWithIdTitle = videos.map(resultVideosAfterMap);

// Implementação customizada
Array.prototype.myMap = function (modifierFunction) {
  let result = [];

  this.forEach(item => result.push(modifierFunction(item)));

  return result;
};

const videosWithIdTitleMyMap = videos.myMap(resultVideosAfterMap);

// Test
console.log(videosWithIdTitle);
console.log('=======');
console.log(videosWithIdTitleMyMap);
