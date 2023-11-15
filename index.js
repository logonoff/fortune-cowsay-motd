import cowsay from "cowsay";
import { readFileSync } from "fs";
import path from "path";
import express from "express";

const app = express();
const port = 8000;

/** @type {string[]} a list of fortunes from `fortunes.txt` with newlines at the start and end */
const fortunes = readFileSync(path.join(process.cwd(), "fortune.txt"), "utf8").split("%");

/** @returns {string} a fortune from fortunes global */
const fortune = () => { return fortunes[Math.floor(Math.random() * fortunes.length)].trim() };

app.use((_, res, next) => {
    // disable cors
    res.set("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // disable caching
    res.set("Cache-Control", "no-store, no-cache, must-revalidate, private");

    // send as plain text
    res.set("Content-Type", "text/plain");
    res.set("X-Content-Type-Options", "nosniff");

    // remove x-powered-by
    res.removeHeader("X-Powered-By");

    next();
});

app.get("/", (req, res) => {
    try {
        res.status(200).send(cowsay.say({
            f: req.query.cow,
            r: req.query.cow === "random",
            e: req.query.eyes,
            T: req.query.tongue,
            text: fortune()
        }))
    } catch (e) {
        res.status(500).send(cowsay.say({
            text : "I'm sorry, but I don't know what to say.",
        }));
    }
});

app.get("/fortune", (_, res) => {
    try {
        res.status(200).send(fortune());
    } catch (e) {
        res.status(500).send("I'm sorry, but I don't know what to say.");
    }
});

app.get("/cowsay", (req, res) => {
    try {
        res.status(200).send(cowsay.say({
            ...req.query,
        }))
    } catch (e) {
        res.status(500).send(cowsay.say({
            text : "I'm sorry, but I don't know what to say.",
        }));
    }
});

app.get("/cows", (_, res) => {
    cowsay.list((error, cow_names) => {
        if (error) {
            res.status(500).send("I'm sorry, but I don't know what to say.");
        } else if (cow_names) {
            res.status(200).send(cow_names.join("\n"));
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}. Access via http://localhost:${port}`);
});
