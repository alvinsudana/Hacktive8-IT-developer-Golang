var kata = "alvin";

function reverse(kata) 
{
    var n = kata.length;
    let newstring ='';
        for (j = n; j > 0; j--) 
        {
            newstring += kata[j-1];
        }
    return newstring;
}

console.log(reverse(kata));
