// what is the path to the JSON file?
const apiURL = "hoteldata.json";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((myList) => {
    //Once it comes back, display it to the console.
    console.log(myList);
    
    for (i = 0; i < myList.length; i++) {
    let myImageTag = document.createElement("img");
    myImageTag.src= myList[i].photo;
    //pic
    let myCaptionTag = document.createElement("figcaption");
    myCaptionTag.textContent = myList[i].name;
     //end caption
     
    let myFigureTag = document.createElement("figure");
    myFigureTag.appendChild(myImageTag);
    myFigureTag.appendChild(myCaptionTag);
    
      //pic and caption combo
    let myAddressTag = document.createElement("address");
    myAddressTag.textContent = myList[i].address;
    //myAddressTag.textContent = myList[i].address;
    //address
    let myPhoneTag = document.createElement("phone");
    myPhoneTag.textContent = myList[i].phone;
    // phone
    let iconCar = document.createElement("img");iconCar.src="images/car.png";iconCar.alt="car";
    let iconPhone = document.createElement("img");iconPhone.src="images/phone.png";iconPhone.alt="phone";
    let myInfoTag = document.createElement("p");
    myInfoTag.appendChild(iconCar);
    myInfoTag.appendChild(iconPhone);
    myInfoTag.appendChild(myAddressTag);
    myInfoTag.appendChild(myPhoneTag);
    
    /*let myCarTag = document.createElement('icon');
    myCarTag.setAttribute("class", "sourceText fa-solid fa-car");
    $(myCarTag.sourceText).append('<i class="fa-solid fa-car"></i>");*/
    
    //myFigureTag.className = "happyCamper";
    //theIconLeftTag.className = "icon ion-md-car";
    
    document.getElementById('myCards').appendChild(myFigureTag);
    document.getElementById('myCards').appendChild(myInfoTag);
    }
}); //end of "then" fat arrow function