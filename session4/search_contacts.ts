
interface Lists{
      name:string;
      family:string;
      mobile:number;
}
const arraye_lists:Lists[]=[{
      name:"farhad",
      family: "tayebipour",
      mobile: 250,
}];


function add_lists(name: string, family: string, mobile: number) {
   

    const lists :Lists= {
      name:name,
      family: family,
      mobile: mobile,
  }
  
    arraye_lists.push(lists);
  }
  

  function search_list(search_name)
  {
    arraye_lists.find((element) => element == search_name) ? console.log("found") : console.log("not found");
    // console.log(arraye_lists.includes(search_name));
    // arraye_lists.includes(search_name)==true ? console.log("found") : console.log("not found");
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

  }  
  else {
      console.log("Error, enter the number!!!")
  }

  }
  else if(what_do==2)
  {
    const Insert_search_name:Lists = {
      name:"farhad",
      family: "tayebipour",
      mobile: 250,
    };
    console.log(Insert_search_name);
    search_list(Insert_search_name.name);

  }

  