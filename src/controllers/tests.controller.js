import * as testsServive from "../services/tests.service.js";

export const get = (req, res) => {
  res.send(testsServive.getAll());
}

export const getOne = (req, res) => {
  const { testId } = req.params;
  const foundTest = testsServive.getById(+testId);

  if (!testId) {
    res.sendStatus(422);
    return;
  }

  if (!foundTest) {
    res.statusCode = 404;
    res.send(foundTest);
  }

  res.statusCode = 200;
  res.send(foundTest);
}
