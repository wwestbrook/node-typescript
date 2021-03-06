import express from 'express';
import path from 'path';
import rootDir from '../utils/path';

const router = express.Router();
router.get('/', (req, res) => {
	res.sendFile(path.join(rootDir, 'src', 'views', 'shop.html'));
});

export default router;
