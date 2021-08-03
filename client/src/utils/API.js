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
