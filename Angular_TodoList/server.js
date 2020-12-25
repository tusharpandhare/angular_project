const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist/mytodolist'));
app.all('*', (req, res) => {
res.status(200).sendFile(__dirname + '/dist/mytodolist/index.html');
});
app.listen(process.env.PORT || 8080);