const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
const All_Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const All_Capital_Alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const All_Small_Alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const All_Symbols = ["!", "@", "#", "$", "%", "&", "(", ")", "[", "]", ".", "<", ">", "?", ":"];
const COMPLEX_STCA_CASES = ["000", "001", "002", "003", "004", "005"];
const NF_SCBNAL_CASE_CODES = ["462"];

/* The number that will be randomly selected from this array will be called COMPLEX-STCA-CASE-CODE*/
 
/* SSGCA always generates passkeys of 12 characters */
/* However, the compound token is always of 36 characters */
/* Complex token is always of *84* characters
/* The algorithms used to generate the passkeys in SSGCA are highly secured algorithms [SSGCA-HSA] */

/* There are two primary types of generation algorithms in SSGCA. simple OTPS)
  (ii) Compound Algorithms (Generally used to generate compound token)
  (iii) Complex Algorithms (Generally used to generate complex tokens (they are very highly-secured tokens.)) They may be used for online transactions, banking activit
*/

/* The output of the simple algorithm is called 'Simple Token' */
/* The output of the compound algorithm is called 'Compound Token' */

/* In general, the algorithm of the compound token is more complex than that of the simple token*/


/* SSCGA's Simple Algorithm is based on 2 algorithms
  (i) (8a8B8c8D8e8F) This is named as Number first and number alphabet consecutiveness algorithm [NF-NACA] (12 digits)
  (ii) (a8B8c8D8e8F8) This is named as Alphabet first and number alphabet consecutiveness algorithm [AF-NACA] (12 digits)
*/

/* SSCGA's compound algorithm is classified into 2 types
  (i) (8a8B8c8D8e8F8a8B8c8D8e8F8a8B8c8D8e8F) This is named as Number first and number alphabet consecutiveness algorithm [NF-NACA] (36 digits)
  (ii) (a8B8c8D8e8F8a8B8c8D8e8F8a8B8c8D8e8F8) This is named as Alphabet first and number alphabet consecutiveness algorithm [AF-NACA] (36 digits)
*/

/* SSCGA's complex algorithm is classified into 2 types
  (i) This is named as Number first and number alphabet consecutiveness algorithm [NF-NACA] (84 digits)
  (ii) This is named as Alphabet first and number alphabet consecutiveness algorithm [AF-NACA] (84 digits)
*/


/* Every token in simple token is of 12 characters or 1 packet. Thus, a compound token is of 3 packets, and a complex token is of 7 packets */

/* Simple Token (1st level security)
   Compound Token (2nd level security)
   Complex Token (3rd level security)
*/

// The algorithms for Simple NF-NACA

const SIMPLE_NF_NACA = function SIMPLE_NF_NACA () {
   const n1_rand = Math.floor(Math.random() * 10);
   const a1_rand = Math.floor(Math.random() * 26);
   const n2_rand = Math.floor(Math.random() * 10);
   const A2_rand = Math.floor(Math.random() * 26);
   const n3_rand = Math.floor(Math.random() * 10);
   const a3_rand = Math.floor(Math.random() * 26);
   const n4_rand = Math.floor(Math.random() * 10);
   const A4_rand = Math.floor(Math.random() * 26);
   const n5_rand = Math.floor(Math.random() * 10);
   const a5_rand = Math.floor(Math.random() * 26);
   const n6_rand = Math.floor(Math.random() * 10);
   const A6_rand = Math.floor(Math.random() * 26);
   const n1 = All_Numbers[n1_rand];
   const a1 = All_Small_Alphabets[a1_rand];
   const n2 = All_Numbers[n2_rand];
   const A2 = All_Capital_Alphabets[A2_rand];
   const n3 = All_Numbers[n3_rand];
   const a3 = All_Small_Alphabets[a3_rand];
   const n4 = All_Numbers[n4_rand];
   const A4 = All_Capital_Alphabets[A4_rand];
   const n5 = All_Numbers[n5_rand];
   const a5 = All_Small_Alphabets[a5_rand];
   const n6 = All_Numbers[n6_rand];
   const A6 = All_Capital_Alphabets[A6_rand];
   return n1 + a1 + n2 + A2 + n3 + a3 + n4 + A4 + n5 + a5 + n6 + A6;
}


// The algorithms for compound NF_NACA
const COMPOUND_NF_NACA = function COMPOUND_NF_NACA() {
   const SIMPLE_NF_NACA1 = SIMPLE_NF_NACA();
   const SIMPLE_NF_NACA2 = SIMPLE_NF_NACA();
   const SIMPLE_NF_NACA3 = SIMPLE_NF_NACA();
   return SIMPLE_NF_NACA1 + SIMPLE_NF_NACA2 + SIMPLE_NF_NACA3;
}


// The algorithms for complex NF_NACA
const COMPLEX_NF_NACA = function COMPLEX_NF_NACA() {
   const SIMPLE_NF_NACA1 = SIMPLE_NF_NACA();
   const SIMPLE_NF_NACA2 = SIMPLE_NF_NACA();
   const SIMPLE_NF_NACA3 = SIMPLE_NF_NACA();
   const SIMPLE_NF_NACA4 = SIMPLE_NF_NACA();
   const SIMPLE_NF_NACA5 = SIMPLE_NF_NACA();
   const SIMPLE_NF_NACA6 = SIMPLE_NF_NACA();
   const SIMPLE_NF_NACA7 = SIMPLE_NF_NACA();
   return SIMPLE_NF_NACA1 + SIMPLE_NF_NACA2 + SIMPLE_NF_NACA3 + SIMPLE_NF_NACA4 + SIMPLE_NF_NACA5 + SIMPLE_NF_NACA6 + SIMPLE_NF_NACA7;
}


// The algorithms for complex STC (Special Token characters)
// COMPLEX_STCA is exceptional because it is the only complex token that generates 12 digits characters with symbols.
// The complex_stca is a very secured algorithm especially when generating passwords for  sensitive accounts


// COMPLEX STCA CASE CODES:-
/*    

  (i) 000 (NF-SCBNAL)
  If the case code is 0, this means the number and small alphabets will remain first then the special characters will remain in between and then the numbers and then (NF-SCBNAL) [Number first, special characters between and number alphabets last]

  (ii) 001 (NF-NABSCL)
  (Number First, Number Alphabets between and Special characters last)

  (iii) 002 (AF-SCBNAL)
  (Alphabet First, Special Characters between, Number Alphabets Last)

  (iv) 003 (AF-NABSCL)
  (Alphabet First, Number Alphabets between, Special Characters Last)

  (v) 004 (SCF-SCBNAL)
  (Special Characters First, Special Characters Between, Number Alphabets Last)

  (vi) 005 (SCF-NABSCL)
  (Special Characters First, Number Alphabets between, Special characters Last)
  */

 /* 
   Again, NF_SCBNAL has certain case codes. These are of three types:-
   
   (i) 462
   The complex token so obtained will have 4 number and alphabets at the first place, 6 special characters at the second place, 2 special characters at the third place
   (ii) 561
   The complex token so obtained will have 5 number and alphabets at the first place, 6 special tokens at the second place, and only 1 number at the third place
   (iii) 282
   The complex token so obtained will have 2 numbers and alphabets, 8 special characters and 2 numbers and alphabets at the third place
 */

const COMPLEX_STCA = function COMPLEX_STCA() {

         const n1 = All_Numbers[Math.floor(Math.random() * 10)];
         const a1 = All_Small_Alphabets[Math.floor(Math.random() * 26)];
         const n2 = All_Numbers[Math.floor(Math.random() * 10)];
         const A2 = All_Capital_Alphabets[Math.floor(Math.random() * 26)];
         const s1 = All_Symbols[Math.floor(Math.random() * 15)];
         const s2 = All_Symbols[Math.floor(Math.random() * 15)];
         const s3 = All_Symbols[Math.floor(Math.random() * 15)];
         const s4 = All_Symbols[Math.floor(Math.random() * 15)];
         const s5 = All_Symbols[Math.floor(Math.random() * 15)];
         const s6 = All_Symbols[Math.floor(Math.random() * 15)];
         const n3 = All_Numbers[Math.floor(Math.random() * 10)];
         const a3 = All_Small_Alphabets[Math.floor(Math.random() * 26)];
         return n1 + a1 + n2 + A2 + s1 + s2 + s3 + s4 + s5 + s6 + n3 + a3;
      }

app.get("/", (req, res) => {
  res.sendFile(__dirname  + "/index.html");
});

app.get("/namish/new_password", (req, res) => {
    let passwordo = String(COMPLEX_STCA());
    if(passwordo.length < 10) {
        passwordo = String(COMPLEX_STCA())
    }
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>SSCGA | The Special Secret Code Generation Algorithms</title>
  </head>
  <style>
      body {
          background-color: white;
          text-align: center;
          font-family: 'Fira Sans', sans-serif;
  font-family: 'Ubuntu', sans-serif;
          font-size:18px;
      }
  
      input {
           padding: 15px;
           font-size: 18.5px;
           width: 15em;
           font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
           border-radius: 360px;
           outline: none;
           border: none;
           border: black solid 1px;
      }
  
      button {
          background-color: black;
          color: white;
          padding: 15px;
          border: none;
          border-radius: 360px;
          outline: none;
          width: 12.5em;
          font-size: 17.5px;
          font-family: 'Fira Sans', sans-serif;
  font-family: 'Ubuntu', sans-serif;
      }
  </style>
  <body>
      <h1>SSCGA</h1>
      <p>The password generated is below:-</p>
      <p><b>${passwordo}</b></p>
      <p>This password is highly-secured and you may use it wherever you want to!</p>
      <button id="x">Re-generate</b>
      <script>
        const x = document.getElementById("x");
        x.onclick = function() {
            window.location.reload();
        }
      </script>
  </body>
  </html>
  `);
})
app.listen(process.env.PORT);
