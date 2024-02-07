function reverseString(text) 
{
    var kata = text.split('').reduce((char,reserved) => reserved + char);
    return kata;
}

console.log(reverseString('Hello World and Coders'));
console.log(reverseString('John Doe'));
