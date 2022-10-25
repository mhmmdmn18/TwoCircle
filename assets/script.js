// Header (ketika window sedikit di scroll ke bawah, ada efek bagian header mengecil)
const header = document.querySelector('header');

const headerScroll = function() {
	if(window.scrollY > 100) {
		header.classList.add('scrolled');
	}
  else {
		header.classList.remove('scrolled');
	}
}

document.addEventListener('scroll', headerScroll);

// Nav Menu
const burger = document.querySelector('.burger');
const navMobile = document.querySelector('.nav-mobile');
const links = navMobile.querySelectorAll('.anchor');
const items = document.querySelectorAll('.item-nav');
const sections = document.querySelectorAll('section');

// ketika burger diklik, burger berubah dan nav-mobile ditampilkan/ditutup
burger.addEventListener('click', () => {
	if(!burger.classList.contains('clicked')) {
		burger.classList.add('clicked');
		navMobile.classList.add('showed');
	} 
  else {
		burger.classList.remove('clicked');
		navMobile.classList.remove('showed');
	}
});

// nav active ketika window mengarah ke id section tertentu
window.onscroll = () => {
  var current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if(scrollY >= sectionTop - 60) {
      current = section.getAttribute('id'); 
    }
  });

  items.forEach((item) => {
    item.classList.remove('active');
    if(item.href.includes(current)) {
      item.classList.add('active');
    }
  });

  links.forEach((link) => {
    link.classList.remove('active');
    if(link.href.includes(current)) {
      link.classList.add('active');
      burger.classList.remove('clicked');
      navMobile.classList.remove('showed');
    }
  });
};