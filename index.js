require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./src/routes/user");

// configuracion del servidor
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use("/api", userRoute);

// rutas
app.get("/", (_req, res) => {
  res.send("Welcome to my API");
});

// conexion a mongodb atlas
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("se ha conectado a mongodb atlas"))
  .catch((error) => console.error(error));

// servidor escuchando
app.listen(port, () => console.log("servidor escuchando en el puerto:", port));
