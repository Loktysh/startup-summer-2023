export const toggleFavourite = id => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const index = favorites.indexOf(id);
  if (index === -1) {
    favorites.push(id);
  } else {
    favorites.splice(index, 1);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export const getFavouriteVacancies = () => JSON.parse(localStorage.getItem('favorites')) || [];
