import express from "express";
import cors from "cors";

import connection from "./database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post('/list', async (req,res) => {
    try {
        const { text } = req.body;
        await connection.query(`
            INSERT INTO items
            (text) VALUES ($1)
        `, [text]);
        res.sendStatus(201);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.get('/list', async (req,res) => {
    try {
        const request = await connection.query('SELECT * FROM items');
        const items = request.rows;
        res.send(items);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

export default app;
