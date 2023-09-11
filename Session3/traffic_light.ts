const light:string="green";

//control flow (traffic light) with if/else

if (light==="red")
{
    console.log("green");
}
else if(light==="yellow")
{
    console.log("red");
}
else 
{
    console.log("yellow");
}


//control flow (traffic light) with switch/case:

switch(light)
{
    case "red":
        console.log("green");
        break;
    case "yellow":
        console.log("red");
        break;  
    default:
        console.log("yellow");
        break;
}