const path = require('path');
const express = require('express');

let app = express();
const port = process.env.PORT || 3000;
const publidDir = path.join(__dirname, '../public');
app.use(express.static(publidDir));

app.listen(port, () => {
    console.log(`server is running on ${port}...`);
})

