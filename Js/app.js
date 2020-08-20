$(document).ready(function () {
    $(".heart").click(function () {
        $(".heart .content").slideToggle("fast");
    });
    $(".user").click(function () {
        $(".profile").slideToggle("fast");
    });
    $("#category").click(function () {
        $(".category").slideToggle("slow");
    });
    $("#subcategory").click(function () {
        $(".subcategory").slideToggle("slow");
    });
    $("#filter").click(function () {
        $(".filter >*").slideToggle("slow");
    });
    $(".home-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        autoHeight: true,
        dots: false,
        // nav:true
    });

    $(".home-product").owlCarousel({
        items: 5,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });
    $(".brand").owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 4,
            },
            600: {
                items: 6,
            },
            1000: {
                items: 10,
            }
        }
    });
});

(function Year() {
    let year = document.getElementById("year")
    let date = new Date()
    let newyear = date.getFullYear()
    year.innerHTML = newyear
}());

function card() {
    let basketproduct = document.querySelectorAll('.basket-product')[0]
    basketproduct.addEventListener('click', function (e) {
        if (e.target.className === "fa fa-times" && confirm("Silmək istədiyinizə əminsiniz?")) {
            e.target.parentElement.remove();
        }
    })
};
function registerpassShow() {
    let passicon = document.querySelector('#passicon')
    let repassicon = document.querySelector('#repassicon')
    passicon.addEventListener('click', function (e) {
        if (passicon.className === "fa fa-eye" && password.type === "password") {
            passicon.classList = "fa fa-eye-slash";
            password.type = "text";
        }
        else {
            passicon.classList = "fa fa-eye";
            password.type = "password";
        }
    })

}
function loginpassShow() {
    let passicon = document.querySelector('#login-passicon')
    passicon.addEventListener('click', function (e) {
        if (passicon.className === "fa fa-eye" && password.type === "password") {
            passicon.classList = "fa fa-eye-slash";
            password.type = "text";
        }
        else {
            passicon.classList = "fa fa-eye";
            password.type = "password";
        }
    })


}

function message(msg) {
    let formmessage = document.querySelector('.form-message');

    formmessage.innerText = msg
    formmessage.style.display = "block"
    setTimeout(() => {
        formmessage.style.display = 'none'
    }, 3000);
}


function login() {
    let login = document.querySelector('.login-btn');
    let number = document.querySelector('#number')
    let password = document.querySelector('#password')
    login.addEventListener('click', function (e) {
        var numbers = /[0-9]/g;
        var passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        if (number.value.match(numbers) && password.value.match(passwordexp)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        }
        else if (number.value == "") {
            number.classList.remove("invalid");
            number.classList.add("valid");
            message("Zəhmət olmasa telefon nömrəsini daxil edin.")
        }
        else if (!number.value.match(numbers)) {
            number.classList.remove("valid");
            number.classList.add("invalid");
            message("Telefon nömrəsi düzgün deyil.")
        }
        // Password
        else if (password.value == "") {
            password.classList.remove("invalid");
            password.classList.add("valid");
            message("Zəhmət olmasa şifrəni daxil edin.")
        }
        else if (!password.value.match(passwordexp)) {
            password.classList.remove("valid");
            password.classList.add("invalid");
            message("Şifrə böyük, kiçik hərflərdən və rəqəmlərdən ibarət olmaq şərti ilə min. 8 simvoldan ibarət olmalıdır.")
        }

    })
    loginpassShow()

}

function registration() {
    let registration = document.querySelector('.registration');
    let number = document.querySelector('#number')
    let password = document.querySelector('#password')
    let name = document.querySelector('#name')
    let firstname = document.querySelector('#firstname')
    let repassword = document.querySelector('#repassword')

    registration.addEventListener('click', function (e) {
        var numbers = /[0-9]/g;
        var fullname = /[A-Za-z]/g;
        var passwordexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        if (number.value.match(numbers) && password.value.match(passwordexp) && name.value.match(fullname) && firstname.value.match(fullname)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        }
        // Name
        else if (name.value == "") {
            name.classList.remove("invalid");
            name.classList.add("valid");
            message("Ad boş ola bilməz.")
        }
        else if (!name.value.match(fullname)) {
            name.classList.remove("valid");
            name.classList.add("invalid");
            message("Adınızda qadağan olunmuş simvol var.")
        }
        // First name
        else if (firstname.value == "") {
            firstname.classList.remove("invalid");
            firstname.classList.add("valid");
            message("Soyad boş ola bilməz.")
        }
        else if (!firstname.value.match(fullname)) {
            firstname.classList.remove("valid");
            firstname.classList.add("invalid");
            message("Soyadınızda qadağan olunmuş simvol var.")
        }

        // number
        else if (number.value == "") {
            number.classList.remove("invalid");
            number.classList.add("valid");
            message("Telefon nömrəsi boş ola bilməz.")
        }
        else if (!number.value.match(numbers) || number.value.length <= 8) {
            number.classList.remove("valid");
            number.classList.add("invalid");
            message("Telefon nömrəsi düzgün deyil.")
        }
        // Password

        else if (password.value == "") {
            password.classList.remove("invalid");
            password.classList.add("valid");
            message("Şifrə boş ola bilməz.")

        }
        else if (!password.value.match(passwordexp)) {
            password.classList.remove("valid");
            password.classList.add("invalid");
            message("Şifrə böyük, kiçik hərflərdən və rəqəmlərdən ibarət olmaq şərti ilə min. 8 simvoldan ibarət olmalıdır.")

        }
    })
    let check = document.querySelector('.check')
    let checkicon = document.querySelector('#check')

    check.addEventListener('click', function (e) {
        if (e.target.className === "fa fa-check") {
            checkicon.style.visibility = "hidden"
        }
        else {
            checkicon.style.visibility = "visible"
        }
    })
    registerpassShow()

}

