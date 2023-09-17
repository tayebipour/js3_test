const lists = {
    name:"",
    family:"",
    mobile: "",
}
const arraye_lists:string[]=["farhad","taye", "250"];


function add_lists(name: string, family: string, mobile: number) {
    const persons=Object.create(lists)
    persons.name = name;
    persons.family = family;
    persons.mobile = mobile;
  
    arraye_lists.push(persons);
  }
  

  function search_list(search_name:string)
  {
  const fori=arraye_lists.length;
  for(let i=0; i<fori-1;i++ )
  { 
    if(arraye_lists[i]==search_name)
    { 
      console.log(arraye_lists[i]);
      break;
    }else{
      console.log("not found");

    }
  }
  }

  
   
  const what_do = parseInt(""+ prompt("what do you want? "+ "add contact (1) or search contact (2) :" ));
  if(what_do==1)
  {
    const number_persons = parseInt(""+ prompt("please enter number of persons"));
  

    if(number_persons > 0)
  {
      for(let i=0; i<number_persons;i++)
      {
        const Insert_name = prompt("Please enter name:");
        const Insert_family = prompt("Please enter family:");
        const Insert_number = parseInt(""+prompt("Please enter number:"));
        add_lists(""+Insert_name, ""+Insert_family, Insert_number);
      }
      console.log(arraye_lists);
  }  else {
      console.log("Error, enter the number!!!")
  }
  
  
  }
  else if(what_do==2)
  {
    const Insert_search_name = prompt("Please enter name:");
    search_list(""+ Insert_search_name);
  }
  