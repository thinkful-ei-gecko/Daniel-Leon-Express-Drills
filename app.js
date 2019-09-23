const express = require('express');
const app = express();

app.listen(8000, () => {
  console.log('listening');
});

//Drill 1 

app.get('/sum', (req, res) => {
  let a = req.query.a;
  let b = req.query.b;

  if (!a || !b) {
    return res.status(400).send('Values a and b are required');
  }

  let aInt = parseInt(a);
  let bInt = parseInt(b);
  let c = aInt + bInt;

  if (typeof aInt !== Number || typeof bInt !== Number) {
    return res.status(400).send('Needs to be a number');
  }

  res.send(`The sum of ${aInt} and ${bInt} equals ${c}.`);
});