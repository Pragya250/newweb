let b = document.getElementById('coun');
let c = 0;
function inc()
{
    c++;
    b.innerHTML=c;
}
function dec()
{

    if(c>0)
    {
       c--;
       b.innerHTML=c
    }
}

