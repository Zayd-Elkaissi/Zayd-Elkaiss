const api = "https://www.breakingbadapi.com/api/characters";

async function get(){
    
    const response = await fetch(api)
    const data = await response.json();
    printData(data) }
function printData(data){   
        const header = document.querySelector("#header")
        const content = document.querySelector("#content")
         header.innerHTML += ` <select class ="form-control m-2" onchange="getCh(this.value)" >
         <option> Please Select </option>
         ${data.map(actor => `<option>${actor.name}</option>`)}</select>`
     //console.log(header);
    }

     async function getCh(name){
         const response = await fetch(`${api}?name=${name}`)
         const data = await response.json()
   //console.log(data[0].img)
   
         content.innerHTML = `<h6> <span class="text-success fs-5">Name & Nickname</span> : ${data[0].name} (${data[0].nickname}) </h->
         <h6> <span class="text-success fs-5">Portrayed</span> : ${data[0].portrayed} </h6>
         <h6> <span class="text-success fs-5">Birthday</span> : ${data[0].birthday} </h6>
         <h6> <span class="text-success fs-5">Occupation</span> : ${data[0].occupation} </h6>
         <h6> <span class="text-success fs-5">Status</span> : ${data[0].status} </h6>
         <h6> <span class="text-success fs-5">Category</span> : ${data[0].category} </h6>
         <h6> <span class="text-success fs-5">Season</span>: ${data[0].season} </h6>
         <h6> <span class="text-success fs-5">Episode</span> : ${data[0].episode} </h5>
         <img src = ${data[0].img} class=" rounded mx-auto d-block w-90 h-100 p-5" >
         `       
    
     }

get()





