

 let timeout;



 let password = document.getElementById('PassEntry')
 let gucGoster = document.getElementById('gucGoster')

 

 let gucluSifre = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
 let ortaSifre = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
 
 function control(PasswordParameter){
     

     if(gucluSifre.test(PasswordParameter)) {
         gucGoster.style.backgroundColor = "green"
         gucGoster.textContent = 'Güçlü'
     } else if(ortaSifre.test(PasswordParameter)){
         gucGoster.style.backgroundColor = 'blue'
         gucGoster.textContent = 'Orta'
     } else{
         gucGoster.style.backgroundColor = 'red'
         gucGoster.textContent = 'Zayıf'
     }
 }

 

 password.addEventListener("input", () => {


     gucGoster.style.display= 'block'
     clearTimeout(timeout);

    

     timeout = setTimeout(() => control(password.value), 500);


     if(password.value.length !== 0){
         gucGoster.style.display != 'block'
     } else{
         gucGoster.style.display = 'none'
     }
 });