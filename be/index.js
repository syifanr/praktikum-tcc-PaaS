import express from "express";
import cors from "cors";
import NotesRoute from "./routes/NotesRoute.js";

const app = express();

app.use(cors());
app.use(cors({
  origin: 'https://fe-notessyifa-dot-fit-crow-450802-e0.uc.r.appspot.com'
}));
app.use(express.json());
app.use(NotesRoute);

app.listen(3000, () => console.log("server terhubung"));
