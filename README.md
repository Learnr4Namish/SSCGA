SSGCA always generates passkeys of 12 characters */
However, the compound token is always of 36 characters */
Complex token is always of *84* characters
The algorithms used to generate the passkeys in SSGCA are highly secured algorithms [SSGCA-HSA] */

There are two primary types of generation algorithms in SSGCA. simple OTPS
  (ii) Compound Algorithms (Generally used to generate compound token)
  (iii) Complex Algorithms (Generally used to generate complex tokens (they are very highly-secured tokens.)) They may be used for online transactions, banking activit


The output of the simple algorithm is called 'Simple Token' */
The output of the compound algorithm is called 'Compound Token' */

In general, the algorithm of the compound token is more complex than that of the simple token*/


SSCGA's Simple Algorithm is based on 2 algorithms
  (i) (8a8B8c8D8e8F) This is named as Number first and number alphabet consecutiveness algorithm [NF-NACA] (12 digits)
  (ii) (a8B8c8D8e8F8) This is named as Alphabet first and number alphabet consecutiveness algorithm [AF-NACA] (12 digits)


SSCGA's compound algorithm is classified into 2 types
  (i) (8a8B8c8D8e8F8a8B8c8D8e8F8a8B8c8D8e8F) This is named as Number first and number alphabet consecutiveness algorithm [NF-NACA] (36 digits)
  (ii) (a8B8c8D8e8F8a8B8c8D8e8F8a8B8c8D8e8F8) This is named as Alphabet first and number alphabet consecutiveness algorithm [AF-NACA] (36 digits)


SSCGA's complex algorithm is classified into 2 types
  (i) This is named as Number first and number alphabet consecutiveness algorithm [NF-NACA] (84 digits)
  (ii) This is named as Alphabet first and number alphabet consecutiveness algorithm [AF-NACA] (84 digits)



Every token in simple token is of 12 characters or 1 packet. Thus, a compound token is of 3 packets, and a complex token is of 7 packets

Simple Token (1st level security)
   Compound Token (2nd level security)
   Complex Token (3rd level security)


COMPLEX_STCA is exceptional because it is the only complex token that generates 12 digits characters with symbols
The complex_stca is a very secured algorithm especially when generating passwords for  sensitive accounts

COMPLEX STCA CASE CODES:-


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


 
   Again, NF_SCBNAL has certain case codes. These are of three types:-
   
   (i) 462
   The complex token so obtained will have 4 number and alphabets at the first place, 6 special characters at the second place, 2 special characters at the third place
   (ii) 561
   The complex token so obtained will have 5 number and alphabets at the first place, 6 special tokens at the second place, and only 1 number at the third place
   (iii) 282
   The complex token so obtained will have 2 numbers and alphabets, 8 special characters and 2 numbers and alphabets at the third place

Thank you.