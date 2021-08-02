export const getRecipes = () => {
  return fetch("/api/recipes", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
