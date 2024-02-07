function compareNumbers(nilai1,nilai2){
    if (typeof nilai1 !== 'number' || typeof nilai2 !=='number') {
        console.log('invalid data');
    }
    else{
        if(nilai1 > nilai2){
            return false
        } 
        else{
            return true
        }
    }
}

console.log(compareNumbers(5,8));
console.log(compareNumbers(5,3));
console.log(compareNumbers(4,4));
console.log(compareNumbers(3,3));
console.log(compareNumbers(17,2));