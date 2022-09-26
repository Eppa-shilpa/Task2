const myArray = [
    {
        "image":"profile.jpg",
      "firstName":"Anthony",
      "lastName":"Morris",
      "PreferredName" : "Anthony Morris",
      "email":"anthonymorris@gmail.com ",
      "jobTitle":"SharePoint practice head",
      "Office":"Saketha",
      "department":" IT Department",
      "PhoneNumber":"9562562567",
       "SkypeId":" "
    },
    { "image":"profile.jpg",
        "firstName":"Helen ",
        "lastName":"Zimmerman ",
        "PreferredName" : "Helen Zimmerman",
        "email":"helenzimmerma@gmail.com ",
        "jobTitle":"Operations manager",
        "Office":"Saketha",
        "department":" IT Department",
        "PhoneNumber":"9362565567",
         "SkypeId":" "
      }
      ,
          {
            "image":"profile.jpg",
            "firstName":"Jonathon",
            "lastName":"Smith",
            "PreferredName" : "Jonathon Smith",
            "email":"jonathonsmith@gmail.com ",
            "jobTitle":"Product manager",
            "Office":"Saketha",
            "department":" IT Department",
            "PhoneNumber":"8925555236",
             "SkypeId":" "
          }
];
var output="";
for(let i=0;i<myArray.length;i++)
{
    console.log(myArray[i].firstName);
    output=output.concat(`  
    <div class="results_box">
  
    <h3 class="prefname">${myArray[i].PreferredName}</h3>
    <p class="jobtitle">${myArray[i].jobTitle}</p>
    <p class="dept">${myArray[i].department}</p>
    </div>`);
    console.log(output);
   document.getElementsByClassName(".results_box").innerHTML=output;
}

