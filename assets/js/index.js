const navbar = document.querySelector('.navbar');
        window.onscroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scroll');
            } else {
                navbar.classList.remove('navbar-scroll');
            }
        };