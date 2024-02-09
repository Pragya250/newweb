/*let obj={
    fname:"cybrom",
    username:{
        nname:{
            name:"whatever"
        }
    }
}
document.write(obj.username.nname.name);
console.log(obj);*/
/*let ob1={
    1:'a',2:'b',3:'c'
}
let ob2={
    4:'d',5:'e',6:'f'
}
let ob3={ob1,ob2}
console.log(ob3);
let ob4=Object.assign(ob1,ob2);
console.log(ob4);
console.log(Object.keys(ob1))*/
/*let age=[12,4,5,6,43,7,8,2]
let y= age.map((h)=>{
    return h
})
document.write(y)*/
document.getElementById("demo").innerHTML="whatever"
document.getElementById("demo").style.backgroundColor="blue"
document.getElementById("demo").style.color="white"
function fun1()
{
    let a=parseInt(document.getElementById('num1').value);
    let b=parseInt(document.getElementById('num2').value);
    let c=parseInt(document.getElementById('num3').value);
    // document.write(a+b)
    /*if(num1>num2 && num1>num3)
    {
        document.write("num1 is greater")
    }
    else if(num2>num1 && num2>num3)
        {
        document.write("num2 is greatest")
    }
    else{
        document.write("num3 is greatest")
    }*/
    document.getElementById("answer").innerHTML=a+b;
}