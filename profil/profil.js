const userProfil = document.querySelector('.userprofil');
const img = document.querySelector('#photo');
const file = document.querySelector('#file');
const uploadBtn = document.querySelector('#upload');

// when my mouse is on or hoverthe profil div

/*userProfil.addEventListener('mouseenter', function(){
    uploadBtn.style.display = "block";
});
userProfil.addEventListener('mouseover', function(){
    uploadBtn.style.display = "none";
});*/

//show image and upload it
 file.addEventListener('change', function(){
     const choosedFile = this.files[0];

     if(choosedFile) {
         const reader = new FileReader();

         reader.addEventListener('load', function(){
            img.setAttribute('src', reader.result);
         });

         reader.readAsDataURL(choosedFile);
         //already set how to upload photo
     }
 })