//set an image profil
const loadFile = function(event){
    let image = document.getElementById('upload');
    image.src = URL.createObjectURL(event.target.files[0]);
};

let Contact = function (photo, name, email, phone, adress) {
    this.photo = photo;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.adress = adress;
}

let contacts = [];
contacts.push(new Contact("<img src=\"image/photoDeMoi.jpg\">","Kandy", "kandypeter03@gmail.com", "201-292-7211", "kicyukiro KG-770"));
    contacts.push(new Contact("<img src=\"image/user2.jpg\">","Yannick", "yannickz@gmail.com", "787-123-452", "Gisozi KG-779"));
    contacts.push(new Contact("<img src=\"image/photoDeMoi.jpg\">","Roland", "rolandmanf@gmail.com", "201-292-7211", "Kicyukiro KG-330"));
    contacts.push(new Contact("<img src=\"image/user3.jpg\">","Astrid", "micieloast@gmail.com", "201-292-7211", "gisozi KG-770"));

let listContacts = function () {
    document.getElementById('displayContacts').innerHTML = " ";
    for (let i = 0; i < contacts.length; i++) {
        document.getElementById('displayContacts').innerHTML += '<div id="card" class="card"><ul><div class="photoContact"><li id="photo '+ i +'">' + contacts[i].photo + 
                                                                '</li></div><div class="head-name"><li id="name '+ i +'">' + contacts[i].name + 
                                                                '</li></div><div class="middle"><li id="email '+ i +'">' + contacts[i].email + 
                                                                '</li><li id="phone '+ i +'">' + contacts[i].phone + 
                                                                '</li><li id="adress '+ i +'">' + contacts[i].adress + 
                                                                '</li></div><div class="buttons"><li><button class="btn btn-warning" onclick=updateContact(' + i + ')><i class="fas fa-edit"></i></button><button class="btn btn-danger" onclick=deleteContact(' + i + ')><i class="fas fa-trash"></i></button><button id="fav-contact" class="btn btn-fav" /*onclick=favoriteContact(' + i + ')><i class="fas fa-star"></i></button></li></div></ul></div>'
                                                                
    }
}

let favoriteContact = function() {
    favoriteContact.addEventListenner('click', changeColor);
    
    function changeColor(){
        this.style.color = "yellow";
    }
    listContacts();
}
let addNewContact = function () {
    let photo = document.getElementById('inputFile').value;
    let name = document.getElementById('inputName').value;
    let email = document.getElementById('inputEmail').value;
    let phone = document.getElementById('inputPhone').value;
    let adress = document.getElementById('inputAdress').value;
    let contact = new Contact(photo, name, email, phone, adress);
    contacts.push(contact);
    listContacts();
}

let deleteContact = function (i) {
    contacts.splice(i, 1);
    listContacts();
}



let updateContact = function (i) {
    contactId = i;
    document.getElementById('inputFile').value = contacts[i].photo;
    document.getElementById("inputName").value = contacts[i].name;
    document.getElementById("inputEmail").value = contacts[i].email;
    document.getElementById("inputPhone").value = contacts[i].phone;
    document.getElementById('inputAdress').value = contacts[i].adress;
    document.getElementById("submitButtons").innerHTML = '<button id="updateButton" class="btn btn-warning" onclick=submitUpdatedContact(contactId)>Submit</button>';
   
}

let submitUpdatedContact = function (i) {
    contacts[i].photo = document.getElementById("inputFile").value;
    contacts[i].name = document.getElementById("inputName").value;
    contacts[i].email = document.getElementById("inputEmail").value;
    contacts[i].phone = document.getElementById("inputPhone").value;
    contacts[i].adress = document.getElementById("inputAdress").value;

    document.getElementById("inputFile").value = "";
    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhone").value = "";
    document.getElementById("inputAdress").value = "";

    listContacts();
}


listContacts();