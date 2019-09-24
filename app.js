const express = require('express');
const app = express();

app.listen(8000, () => {
  console.log('listening');
});

//Drill 1 

// app.get('/sum', (req, res) => {
//   let a = req.query.a;
//   let b = req.query.b;

//   if (!a || !b) {
//     return res.status(400).send('Values a and b are required');
//   }

//   let aInt = parseInt(a);
//   let bInt = parseInt(b);
//   let c = aInt + bInt;

//   if (typeof aInt !== Number || typeof bInt !== Number) {
//     return res.status(400).send('Needs to be a number');
//   }

//   res.send(`The sum of ${aInt} and ${bInt} equals ${c}.`);
// });


//Drill 2 

// app.get('/cipher', (req,res) => {
//   let text = req.query.text;
//   let shift = req.query.shift;
//   let parseShift = parseInt(shift);
//   if (typeof parseShift !== 'number' || !parseShift) { return res.status(400).send('Shift must be a number'); }
//   else {
//     let charArray = text.split('');
//     charArray.forEach((letter,index) => {
//       console.log(charArray[index].charCodeAt(0));
//       if (charArray[index].charCodeAt(0) >= 65 && charArray[index].charCodeAt(0) <= 127 || charArray[index].charCodeAt(0) === 32) {
//         charArray[index] = String.fromCharCode(charArray[index].charCodeAt(0) + parseShift);
//       }
//       else {
//         return res.status(400).send('Must be a letter between character codes 65-127');
//       }
//     });
//     res.send(`${charArray}`);
//   }
// });
