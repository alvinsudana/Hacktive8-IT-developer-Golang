var umur = [30, 32, 24, 26, 19, 17, 81];

function sort(umur) 
{
    var n = umur.length;
    for (i = 0; i < n; i++) 
    {
        for (j = 0; j < n; j++) 
        {
            if (umur[i] < umur[j]) 
            {
                let temp = umur[i];
                umur[i] = umur[j];
                umur[j] = temp;
            }
        }
    }
    return umur;
}
console.log(sort(umur));
