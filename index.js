const express = require("express");
const Controller = require("./controller");
const app = express();
const port = 8000;

app.use(express.json());

app.post("/api", Controller.api);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
