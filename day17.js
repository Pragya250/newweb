function valid()
{
    let a = document.getElementById('name').value;
    let b= document.getElementById('contact').value;
    let c= document.getElementById('pass').value;
    let d= document.getElementById('cpass').value;
    if(a=="" || b=="" || c=="" || d=="")
    {
        alert("please fill all fields");
        return false;
    }
    else if(b.length<10||b.length>10)
    {
        alert("10 digits")
        return false;
    }
    else if(c!=d)
    {
        alert("wrong password")
        return false;
    }
    else if(!(d.match(/[@#!&^]/)))
    {
        alert("wrong password")
        return false;

    }
    else if(isNaN(b))
    {
        alert("number allowed")
        return false;
    }
}