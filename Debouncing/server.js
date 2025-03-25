const express = require('express');
const cors = require('cors'); // Add this line
const app = express();

app.use(cors()); // Add this line

const port = 3000;

app.get('/sum', (req, res) => {
    const a = parseFloat(req.query.a) || 0;
    const b = parseFloat(req.query.b) || 0;
    const sum = a + b;
    console.log(sum);
    res.status(200).send(sum.toString());
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
