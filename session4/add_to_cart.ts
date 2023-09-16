
const  person_profile:string[] =[];


function add_to_cart(add:string)
{
  
    person_profile.push(add);

  if(person_profile==null)
  {
    console.log("Please Insert!");
  
  }else{
  return add;  
  }
}


let Insert_number= parseInt(""+prompt("Please enter the product number"));
if(Insert_number > 0)
{
  for(let i=0; i<Insert_number;i++)
  {
    const Insert_name = prompt("Please enter the product:");
    add_to_cart(""+Insert_name);
  }
  console.log(person_profile);
}else{
  console.log("Error, enter the number!!!")
}








