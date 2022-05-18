const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express()
app.use(cors({
    origin: '*'
}));

app.get('/offers', async (req, res) => {
    try {
        const response = await axios.get('https://cdn.sixt.io/codingtask/offers.json')
        res.json(response.data)
    } catch(err) {
        res.status(err.code || 500).send('offer api failed')
    }
    
});


app.listen(process.env.PORT, () => {
    console.log("Connected to port process.env.PORT");
})