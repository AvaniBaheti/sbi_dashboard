const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const data = {
    Q1: {
        Revenue: "716.57 B",
        NetIncome: "154.77 B",
        NetProfit: "21.60%",
        OperatingIncome: "213.55 B",
    },
    Q2: {
        Revenue: "607.66 B",
        NetIncome: "180.94 B",
        NetProfit: "29.78%",
        OperatingIncome: "049.95 B",
    },
    Q3: {
        Revenue: "711.87 B",
        NetIncome: "185.37 B",
        NetProfit: "26.04%",
        OperatingIncome: "252.08 B",
    },
    Q4: {
        Revenue: "805.33 B",
        NetIncome: "161.00 B",
        NetProfit: "19.99%",
        OperatingIncome: "219.36 B",
    },
};

app.get("/api/stats/:quarter", (req, res) => {
    const quarter = req.params.quarter.toUpperCase();
    if (data[quarter]) {
        res.json(data[quarter]);
    } else {
        res.status(404).json({ error: "Quarter not found" });
    }
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});