const express = require("express");
const noteRouter = require("./routes/noteRouter");

const app = express();
const PORT = 8000;

app.use(noteRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})