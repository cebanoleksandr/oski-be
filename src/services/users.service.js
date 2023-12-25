let users = [];

export const getAll = () => {
  return users;
}

export const getByEmail = (email) => {
  return users.find(user => user.email === email) || null;
}

export const createUser = (fullName, email, password) => {
  const newUser = {
    userId: +new Date(),
    fullName,
    email,
    password,
    isAuth: true,
    testsResults: [],
  }

  users.push(newUser);

  return newUser;
}

export const logout = () => {
  users = users.map(u => ({ ...u, isAuth: false}));
}

export const updateResults = (userId, result) => {
  users = users.map(u => {
    if (u.userId === +userId) {
      return {
        ...u,
        testsResults: [...u.testsResults, result],
      }
    }

    return u;
  });
}

export const findActiveUser = () => {
  return users.find(user => user.isAuth === true) || null;
}
