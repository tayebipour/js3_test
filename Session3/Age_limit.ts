const age :number= 36;
const age_limit:number=20;

//control flow (age limit) with if/else

if(age> age_limit)
{
    console.log("accepted");
} else{
    console.log("not accepted");
}

//control flow (age limit) with ternary operators

const age_limit_ternary =20 < age ? console.log("accepted") : console.log("not accepted");
