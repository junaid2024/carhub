function addCar(){
    const car={
        key:ckey.value,
        brand:cbrand.value,
        namee:cname.value
        

    }
    if(car.key in localStorage){
        alert("alredy added")
        document.getElementById("myForm").reset();

    }
    else{
        localStorage.setItem(car.key,JSON.stringify(car));
        console.log(car);
        alert('added succeesfully')
    }
}


function retriveCar(){
    skey=retrivekey.value
    if(skey in localStorage){
       car=JSON.parse(localStorage.getItem(skey))
       console.log(car);
       card.innerHTML=`<div class="card" style="width: 18rem;">
       <ul class="list-group list-group-flush">
         <li class="list-group-item">${car.brand}</li>
         <li class="list-group-item">${car.namee}</li>
         <li class="list-group-item">${car.key}</li>
       </ul>
     </div>`

    }
    else{
        alert('item not foundedd')

    }
}


function removeCar() {
    rkey=rmovekey.value
    if(rkey in localStorage)
    {
        localStorage.removeItem(rkey)
        // alert('removed successfully')
        result.innerHTML=`<h4 style="color:red;">key ${car.key} removed!!</h4>`
    }
    else{
        alert('item not foundedd')
    }
}

function clearAll() {
    localStorage.clear()
    alert('clear all your data')
}