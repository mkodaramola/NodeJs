document.addEventListener('DOMContentLoaded',()=>{

  document.querySelector('form').onsubmit = ()=> {

      let data = {
        RegNo: document.querySelector('#tbox').value
      };

      fetch('/login',{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type":"application/json;charset=UTF-8"
        }
      })
      .then (response => response.json())
      .then (json => console.log(json));



  }


});
