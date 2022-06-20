
function distance(x1,y1,x2,y2)
{
    const distan=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    console.log("The distance between the two points is :",distan.toFixed(4));
    return distan;
}

let x1=5;
var y1=6;
var x2=7;
var y2=3;
distance(x1,y1,x2,y2);