import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {

    const query = `SELECT tickets.id, tickets.customer_name, tickets.seat_number, movies.title AS movie_title FROM tickets JOIN movies ON tickets.movie_id = movies.id`;

    db.query(query, (err,results) => {

        if(err) return res.status(500).json({ error: err.message });
        res.json(results);

    });

});


export default router;