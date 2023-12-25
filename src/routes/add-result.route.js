import express from "express";
import * as usersController from "../controllers/users.controller.js";

const router = express.Router();

router.post('/', usersController.addResult);

export { router };
