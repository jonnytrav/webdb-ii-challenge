const express = require("express");
const carsRouter = require("./cars/carsRouter");

const server = express();

server.use(express.json());

server.use("/api/cars", carsRouter);

const port = 4000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
