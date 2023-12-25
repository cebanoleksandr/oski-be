import express from "express";
import * as testsController from "../controllers/tests.controller.js";

const router = express.Router();

router.get('/', testsController.get);
router.get('/:testId', testsController.getOne);

export { router };
