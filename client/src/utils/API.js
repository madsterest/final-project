export const getRecipes = () => {
  return fetch("/api/recipes", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUserRecipes = (token, id) => {
  return fetch(`/api/user/${id}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const newUser = (newUser) => {
  return fetch("/api/user/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
};

export const userLogin = (userData) => {
  return fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const addNewRecipe = (recipeData, token) => {
  var data = new FormData();
  for (const key in recipeData) {
    data.append(key, recipeData[key]);
  }

  return fetch("/api/recipes/new", {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: data,
  });
};

export const getIndividualRecipe = (recipeId) => {
  return fetch(`/api/recipes/${recipeId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
