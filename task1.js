// Задание 1: Музыкальная коллекция
const musicCollection = {
    albums: [
      { title: "Album 1", artist: "Artist 1", year: "2000" },
      { title: "Album 2", artist: "Artist 2", year: "2005" },
      { title: "Album 3", artist: "Artist 3", year: "2010" }
    ],
    [Symbol.iterator]: function() {
      let index = 0;
      const albums = this.albums;
      return {
        next: function() {
          return index < albums.length ?
            { value: albums[index++], done: false } :
            { done: true };
        }
      };
    }
  };
  
  // Пример использования итератора для музыкальной коллекции
  for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
  }
  