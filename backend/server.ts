import express from "express";

const app = express();
const port = 5700;

app.listen(port, () => {
  console.log("server is running", port);
});
