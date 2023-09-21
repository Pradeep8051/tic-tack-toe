const express= require('express');
const playerSchema= require("../models/playerSchema")
const router=express.Router();

router.get('/games', async (req, res) => {
  try {
    const games = await playerSchema.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ err:error.message });
  }
});

router.post('/games', async (req,res) => {
  const { player1, player2, outcome } = req.body;

  try {
    const newGame = new playerSchema({
      player1,
      player2,
      outcome,
    });

    await newGame.save();
    res.json(newGame);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

module.exports=router