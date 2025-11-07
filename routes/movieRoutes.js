import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {

    db.query("SELECT * FROM movies", (err,results) => {

        if(err) return res.status(500).json({ error: err.message });
        res.json(results);

    });

});

router.get("/:id", (req, res) => {

    db.query("SELECT * FROM movies WHERE id = ?", [id] , (err,results) => {

        if(err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: "Movie Tidak DiTemukan" });
        res.json(results[0]);

    });

});



export default router;