/*let a=parseInt(prompt("enter any number"));
let b=parseInt(prompt("enter another number"));
 if(a==1)
 {
    console.log(a)
 }
 else if(b==1)
 {
    console.log("sq of first number=",a*a)
 }
 else if(b==2)
 {
    console.log("cube of first num",a*a*a)
 }
 else
 {
    console.log("invalid input")
 }*/
/* let age=parseInt(prompt("enter your age"));
 if(age>=18)
 {
    console.log("you can vote")
    let n=parseInt(prompt("enter your nationality"));
    if(n=1){
        console.log("you can vote")
    }
    else{
        console.log("you cannot vote")
    }
 }*/
/* let a=parseInt(prompt("enter any number"));
 switch(a)
 {
    case 1:
          console.log("1")
          break;
   case 2:
      console.log("2")
      break;

   case 3:
      console.log("3")
      break;
   default:
      console.log("Invalid number");
 }*/
 
 /*let a;
 let c;
 let s;
 for(a=1;a<=5;a++)

 {
   
   for(c=1;c<=5;c++)
   {
      if(c==3||a==3)
      {
       document.write("*") 
       document.write("&nbsp") document.write("&nbsp")
   
      else
      {
         document.write("&nbsp")
      }
      
   }
   document.write("<br>")
   document.write("&nbsp")
 }*/
 let y=setInterval(demo,500);
 let inn=0;
 function demo(){
   if(inn==300){
      clearInterval(y);
   }
   else{
   inn=inn+20;
   let c=document.getElementById("main");
   c.style.marginLeft=inn+'px';
 }
}