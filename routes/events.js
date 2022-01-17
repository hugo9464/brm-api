import { Router } from 'express';
const router = Router();

import { getAll, getAllBrevets } from '../controllers/events.js';

router.get('/', getAll);
router.get('/brevets', getAllBrevets);

export default router;