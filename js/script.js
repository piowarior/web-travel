
let index = 0;
        const totalSlides = 7;
        const slidesToShow = 4;
        const slider = document.getElementById('slider');
        const slideWidth = 275; 

        function updateSlide() {
            slider.style.transform = `translateX(${-index * slideWidth}px)`;
        }

        function nextSlide() {
            if (index < totalSlides - slidesToShow) {
                index++;
            } else {
                index = 0;
            }
            updateSlide();
        }

        function prevSlide() {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - slidesToShow;
            }
            updateSlide();
        }

        setInterval(nextSlide, 6000); 

function validasi() {
    
    let nama = document.getElementById("text").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(nama == ""){
        document.getElementById("text_w").innerHTML="masukkan nama kamu !!"
    }
    else{
        document.getElementById("text_w").innerHTML=""
    }

    if(email == ""){
        document.getElementById("email_w").innerHTML="masukkan email kamu !!"
        
    } else{
        document.getElementById("email_w").innerHTML=""
    }

    if(password == ""){
        document.getElementById("password_w").innerHTML="masukkan password kamu !!"
        
    } else{
        document.getElementById("password_w").innerHTML=""
    }

    if(nama == "revoU" && email == "revoU@gmail.com" && password == "revoU123"){
        window.location.href = "index.html";
    }else{
        document.getElementById("password_w").innerHTML="Anda Salah Memasukkan inputan di Nama atau Email atau Password!!"
    }
}



document.getElementById("submit").addEventListener("click", function(){
    validasi();
    event.preventDefault();
})

