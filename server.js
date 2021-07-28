const express = require("express");
const app = express();
const path = require("path");
const connectDB = require("./Config/db");
const PORT = 5000 || process.env.PORT;

connectDB();

app.use(express.json({ extended: false }));

app.use("/assignment", require("./routes/api/Assignment"));
app.use("/track", require("./routes/api/Track"));
app.use("/skillset", require("./routes/api/Skillset"));
app.use("/user", require("./routes/api/User"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
