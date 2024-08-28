// appBackendStart.mjs
import express from "express";
import connectDB from "./connectDB.mjs";
import router from "./appRoutes.mjs";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

connectDB();

app.use("/api", router);

app.use(
  cors({
    origin: "http://127.0.0.1:5500/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
