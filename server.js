import express from "express";
import dotenv from "dotenv";
import movieRoutes from "./routes/movieRoutes.js";
import ticketRoutes from "./routes/ticketRoutes.js";

dotenv.config();
const app = express();

app.get("/",(req, res) => res.send("Movie Ticket API Sudah Berjalan!"));
app.use("/api/movies", movieRoutes);
app.use("/api/tickets", ticketRoutes);

const PORT = process.env.PORT || 1507;
app.listen(PORT, () => console.log(`Server Sudah Jalan Woi!`));