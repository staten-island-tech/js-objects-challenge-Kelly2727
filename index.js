
/*     const homer = {
        name: "Homer",
        age: 32,
        family: {
            wife: {
            name: "Marge",
            age: 32
        },
        son: {
            name: "Bart",
            age: 10
        }
    },
    pets: ["cat", "dog"]
};

    Homer.family.daughter = {
        name: "Lisa",
        age: 8
    }; */


 /*    const Kelly = {
        name: "Kelly",
        dob: 2002,
        graduated: false,
        age: function() {
            console.log(this);
            return 2020 - this.dob;
        }
        }; */

     /*    () => {};
        console.log(this); */

/* const { name, age } = Kelly;

const calc = {
    add: function() {
        return x + y;
    }
};
const { add, divided, cosine } = calc;
const { name, poster } = movie; */

//const Angel = Kelly; //this is not a COPY, its a reference to
//Angel.name = "Angel";

//const Angel = {};
//Angel.dob = Kelly. dob;

const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];
   
  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
   
  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement
   
  //3) return only the last three presidents
   
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
   
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"