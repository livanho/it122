// Array of music albums
const albums = [
    {
      title: "Abbey Road",
      artist: "The Beatles",
      year: 1969,
      genre: "Rock"
    },
    {
      title: "Thriller",
      artist: "Michael Jackson",
      year: 1982,
      genre: "Pop"
    },
    {
      title: "Back in Black",
      artist: "AC/DC",
      year: 1980,
      genre: "Hard Rock"
    },
    {
      title: "Rumours",
      artist: "Fleetwood Mac",
      year: 1977,
      genre: "Soft Rock"
    },
    {
      title: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      year: 1973,
      genre: "Progressive Rock"
    }
  ];
  
const getAll = () => albums;
  
const getItem = (title) => albums.find(album => album.title === title);
  
export { getAll, getItem };