function check(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] === "a" && num[i + 4] === "b") {
        return true;
      } else if (num[i] === "b" && num[i + 4] === "a") {
        return true;
      }
    }
    return false;
  }
  
  // TEST CASES
  console.log(check('lane borrowed')); // true
  console.log(check('i am sick')); // false
  console.log(check('you are boring')); // true
  console.log(check('barbarian')); // true
  console.log(check('bacon and meat')); // false