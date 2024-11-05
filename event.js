let profileName= document.getElementById("name");
let profileBio= document.getElementById("bio");
let nameInput =document.getElementById("nameInput");
let bioInput =document.getElementById("bioInput");
let updateButton =document.getElementById("updateButton");


updateButton.addEventListener("click",function(){
    let newName = nameInput.ariaValueMax;
    let newBio = bioInput.value;

console.log(newname)
console.log(newBio)

})
