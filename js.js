// Hiệu ứng fade-in khi cuộn xuống
document.addEventListener("scroll", function () {
    const fadeSections = document.querySelectorAll('.fade-section');
    fadeSections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (sectionPosition < screenPosition) {
            section.classList.add('show');
        }
    });
});


const backToTopBtn = document.getElementById("backToTopBtn");

// Khi người dùng cuộn trang, kiểm tra vị trí để hiện/ẩn nút
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
};

// Khi nhấn vào nút, đưa người dùng về đầu trang
backToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Cuộn mượt mà lên đầu trang
    });
};


document.querySelector('.btn-banner').addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

document.querySelector('.custom-toggler').addEventListener('click', function () {
    this.classList.toggle('active');
});

document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});