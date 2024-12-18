document.addEventListener('DOMContentLoaded',()=>{

document.querySelector('#rform').onsubmit = ()=>{

    let data = {
      surname: document.querySelector('#isname').value,
      firstname: document.querySelector('#ifname').value,
      age: document.querySelector('#iage').value,
      email: document.querySelector('#iemail').value,
      tel: document.querySelector('#itel').value,
      dob: document.querySelector('#idob').value,
      location: document.querySelector('#isc').value

    };



     fetch('http://localhost:3000/reg2', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type":"application/json;charset=UTF-8"
      }
    })
    .then (response => response.json())
    .then(response.end(myjson))
    .catch(err => console.log(err));

  }




  document.querySelector('#lgform').onsubmit = ()=>{

      let data = {
        username:document.querySelector('#usern').value,
        passw:document.querySelector("#passw").value,


      };

      fetch('http://localhost:3000/login', {
       method: "POST",
       body: JSON.stringify(data),
       headers: {
         "Content-type":"application/json;charset=UTF-8"
       }
     })
     .then (response => response.json())
     .then(response.end(myjson))
     .catch(err => console.log(err));

   }


   document.querySelector('#adform').onsubmit = ()=>{

     let passw = document.querySelector('#password').value;
     let cnpassw = document.querySelector('#Cpassword').value;
     let sel = document.querySelector('select');
     let selVal = sel.options[sel.selectedIndex].text;

    if(passw != cnpassw) console.log("Password Not equal");
    else{

      fetch('http://localhost:3000/addmember', {
       method: "POST",
       body: JSON.stringify(data),
       headers: {
         "Content-type":"application/json;charset=UTF-8"
       }
     })
     .then (response => response.json())
     .then(response.end(myjson))
     .catch(err => console.log(err));

   }//else

   }

   document.querySelectorAll('input').forEach((button, ind) => {

     button.onsubmit = ()=>{
       fetch('http://localhost:3000/deletemember', {
        method: "POST",
        body: JSON.stringify({index:ind}),
        headers: {
          "Content-type":"application/json;charset=UTF-8"
        }
      })
      .then (response => response.json())
      .then(response.end(myjson))
      .catch(err => console.log(err));
     }

   });





});
