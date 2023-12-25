import * as usersServive from "../services/users.service.js";

export const get = (req, res) => {
  res.send(usersServive.getAll());
}

export const login = (req, res) => {
  const { email, password, fullName } = req.body;

  if (!email || !password || !fullName) {
    res.sendStatus(400);
  }

  const foundedUser = usersServive.getByEmail(email);

  if (!foundedUser) {
    usersServive.logout();

    const newUser = usersServive.createUser(fullName, email, password);

    res.statusCode = 201;
    res.send(newUser);
    return;
  }

  if (!!foundedUser && foundedUser.password !== password) {
    res.send('Incorrect email or password');
    return;
  }

  res.statusCode = 201;
  res.send(foundedUser);
}

export const logout = (req,res) => {
  usersServive.logout();
  res.sendStatus(200);
}

export const addResult = (req, res) => {
  const { userId, result } = req.body;

  usersServive.updateResults(userId, result);
  res.statusCode = 201;
  res.send(result);
}

export const init = (req, res) => {
  const foundedUser = usersServive.findActiveUser();

  res.send(foundedUser);
}
