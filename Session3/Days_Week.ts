const days : number = 4;

//control flow (Days of the week) with if/else

if(days==1){
    console.log("Saturday");
}
else if(days==2){
    console.log("Sunday");
}
else if(days==3){
    console.log("Monday");
}
else if(days==4){
    console.log("Tuesday");
}
else if(days==5){
    console.log("Wednesday");
}
else if(days==6){
    console.log("Thursday");
}
else if(days==7){
    console.log("Friday");
}else{
    console.log("Unfortunately, there is no such day");
}

//control flow (Days of the week) with switch/case:

switch(days)
{
    case 1:
            console.log("Saturday");
            break;
    case 2:
            console.log("Sunday");
            break;
    case 3:
            console.log("Monday");
            break;
    case 4:
            console.log("Tuesday");
            break;
    case 5:
            console.log("Wednesday");
            break;
    case 6:
            console.log("Thursday");
            break;
    case 7:
            console.log("Friday");
            break;
    default :
            console.log("Unfortunately, there is no such day");
            break;
}