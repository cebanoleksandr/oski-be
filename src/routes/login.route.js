import express from "express";
import * as usersController from "../controllers/users.controller.js";

const router = express.Router();

router.post('/', usersController.login);
router.delete('/', usersController.logout);

export { router };
