const express = require('express');
const app = express();
const db = require('./db/prices');

app.get('/test', (req, res) => {
	res.status(200).json({ success: true });
});

app.get('/prices', async (req, res) => {
	const prices = await db.getAllPrices();
	res.status(200).json({ prices });
});

app.listen(1337, () => console.log('Server is running on port 1337'));
