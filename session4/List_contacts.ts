
interface List {
  name:string;
  family:string;
  mobile:number;
}
const arraye_list:List[]=[];



function add_list(name: string, family: string, mobile: number) {
  const list :List= {
    name:name,
    family:family,
    mobile: mobile,
}
    arraye_list.push(list);
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


