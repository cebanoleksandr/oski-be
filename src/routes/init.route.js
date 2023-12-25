import express from "express";
import * as usersController from "../controllers/users.controller.js";

const router = express.Router();

router.get('/', usersController.init);

export { router };
