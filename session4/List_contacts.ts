const list = {
    name:"",
    family:"",
    mobile: "",
}
const arraye_list:string[]=[];


function add_list(name: string, family: string, mobile: number) {
    const person=Object.create(list)
    person.name = name;
    person.family = family;
    person.mobile = mobile;
  
    arraye_list.push(person);
  }

  const number_person = parseInt(""+ prompt("please enter number of persons"));

  if(number_person > 0)
{
    for(let i=0; i<number_person;i++)
    {
      const Insert_name = prompt("Please enter name:");
      const Insert_family = prompt("Please enter family:");
      const Insert_number = parseInt(""+prompt("Please enter number:"));
      add_list(""+Insert_name, ""+Insert_family, Insert_number);
    }
    console.log(arraye_list);
}  else {
    console.log("Error, enter the number!!!")
}


