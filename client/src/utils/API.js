export const getRecipes = () => {
  return fetch("/api/recipes", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUserRecipes = () => {
  return fetch("/api/user", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
