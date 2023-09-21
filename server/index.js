const express = require('express');
const connectDB = require("./db/mongodb");
const cors = require('cors');
const gameRoutes=require("./routes/gameRoutes")

const Port = 3000;
const app = express();
app.use(cors());
connectDB();


app.get('/', (req, res) => {
    res.send("Let's Play the Game Tic-tac-toe");
});

app.use('/api', gameRoutes);

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
