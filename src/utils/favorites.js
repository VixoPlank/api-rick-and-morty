export const getLocalFavorites = () => localStorage.getItem("favorites");
export const setLocalFavorites = (value) =>
  localStorage.setItem("favorites", value);

export const isFavorite = (id) => {
  const favorites = getLocalFavorites();
  if (!favorites) return false;
  const isFavorite = JSON.parse(favorites).find((f) => f === id);
  if (isFavorite) return true;
  return false;
};

export const addFavorite = (id) => {
  const favorites = getLocalFavorites();
  let newFavorites;
  if (favorites) {
    newFavorites = [...JSON.parse(favorites), id];
  } else {
    newFavorites = [id];
  }
  setLocalFavorites(JSON.stringify(newFavorites));
};

export const removeFavorite = (id) => {
  // Remove is only called when there's a favorite
  const favorites = JSON.parse(getLocalFavorites());
  const newFavorites = JSON.stringify(favorites.filter((f) => f !== id));
  setLocalFavorites(newFavorites);
};
