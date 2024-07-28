const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const PORT = 5000; // Thay đổi cổng ở đây

app.post('/api/google-login', async (req, res) => {
    const { tokenId } = req.body;
    try {
        const response = await axios.post(`https://oauth2.googleapis.com/tokeninfo?id_token=${tokenId}`);
        res.json(response.data);
    } catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
