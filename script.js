const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when the nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// Validasi Contact
document.getElementById('contact').addEventListener('submit', function(e) {
        e.preventDefault();
        // preventDefault = untuk menghentikan aksi bawaan browser, 
        // agar kamu bisa menentukan sendiri apa yang terjadi saat event terjadi.
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    // Validasi nama
    const namaPattern = /^[A-Za-z\s]+$/;
    // .test = untuk mengecek apakah sebuah string cocok dengan pola tertentu 
    // Pattern = aturan atau format yang harus dipenuhi oleh nilai dalam <input> HTML. 
    // Jika nilai tidak sesuai dengan pola, maka form tidak bisa disubmit dan 
    // bisa menampilkan pesan error.
    if (!namaPattern.test(nama)) {
        alert('Nama hanya boleh berisi huruf dan spasi!');
        return;
    }

    // Validasi Email
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    // 1. [^@\s] = Satu atau lebih karakter yang bukan @ dan bukan spasi termasuk username
    // 2. [^@\s] = Satu atau lebih karakter yang bukan @ dan spasi termasuk domain contoh(google.com, tokopedia.com, dll)
    // 3. [^@\s] = Satu atau lebih karakter setelah titik (misalnya .com, .id)
    if (!emailPattern.test(email)) {
        alert('Format email tidak valid!');
        return;
    }

    // Validasi Number
    const numberPattern = /^\d+$/;
    if (!numberPattern.test(number)) {
        alert('Nomor hanya boleh berisi angka!');
        return;
    }

    alert('Submit Telah Berhasil');
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
