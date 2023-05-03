import { Router } from "express";

import * as PageController from '../controllers/PageController';
import { search } from "../controllers/SearchController";

const router = Router();

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

router.get('/search', search )

export default router;