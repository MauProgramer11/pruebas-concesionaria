import { Router } from "express";
import { home } from "../controlers/views.controller.js";

const router = new Router();

router.get('/', home);

export default router