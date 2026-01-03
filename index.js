const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const analyze = require('./analyzer');

app.post('/capture', (req, res) => {
    const issues = analyze(req.body);

    if (issues.length > 0) {
        const logs = JSON.parse(fs.readFileSync('logs.json', 'utf8'));
        logs.push({
            event: req.body,
            issues,
            timestamp: Date.now()
        });
        fs.writeFileSync('logs.json', JSON.stringify(logs, null, 2));
    }

    res.json({ status: "ok" });
});

app.get('/logs', (req, res) => {
    const logs = JSON.parse(fs.readFileSync('logs.json', 'utf8'));
    res.json(logs);
});

app.listen(3000, () => {
    console.log("SFDS backend activo en puerto 3000");
});
