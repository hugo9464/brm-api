import express, { urlencoded, json } from "express";
// const mongoose = require("mongoose");

import eventRoutes from './routes/events.js';

const app = express();

// mongoose
//   .connect(
//     "mongodb+srv://mobile-app:bRwMWIaVKfWly7pl@cluster0.06mg0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//     { useNewUrlParser: true, useUnifiedTopology: true }
//   )
//   .then(() => console.log("Connexion à MongoDB réussie !"))
//   .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(urlencoded({ extended: true }));
app.use(json());

// app.use('/api/weighing', weighingRoutes);
app.use('/api/events', eventRoutes);

export default app;
