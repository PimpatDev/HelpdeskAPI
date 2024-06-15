const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const ticketsRouter = require('./routes/tickets');
dotenv.config();

const { swaggerUi, swaggerSpec } = require("./swagger.js");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', ticketsRouter);


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/api-docs`);
});
