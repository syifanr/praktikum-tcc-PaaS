import express from "express";
import cors from "cors";
import NotesRoute from "./routes/NotesRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(NotesRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
