import { Router } from 'express';
const router = Router();

import { getAll } from '../controllers/events.js';

router.get('/', getAll);

export default router;