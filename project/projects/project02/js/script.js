// =============================================
// ZERO1zx1 Portfolio
// Simple JavaScript - easy to understand
// =============================================

// ===== LANGUAGE DICTIONARY (EN / MN) =====
const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',
    hero_title: 'Web Developer',
    hero_desc: 'I create simple and useful websites using HTML, CSS and JavaScript.',
    hero_btn: 'View My Work',
    about_title: 'About Me',
    about_p1: "Hi! My name is ZERO1zx1. I've been learning to code for about 2 years. I enjoy building websites and learning new things every day.",
    about_p2: "Right now I'm focused on improving my skills in HTML, CSS and JavaScript. I want to create websites that are fast, clean and easy to use.",
    skills_title: 'My Skills',
    skills: [
      { name: 'HTML & CSS', icon: '📄' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'Python', icon: '🐍' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'Discord Bot', icon: '🤖' }
    ],
    projects_title: 'My Projects',
    projects: [
      { title: 'Portfolio Website', desc: 'This website - built with HTML, CSS and JS.', icon: '🌐' },
      { title: 'Discord Bot', desc: 'A music bot for Discord with many commands.', icon: '🎵' },
      { title: 'Weather App', desc: 'Shows weather using an API.', icon: '⛅' },
      { title: 'Todo App', desc: 'A simple app to manage tasks.', icon: '✅' }
    ],
    contact_title: 'Contact Me',
    contact_desc: 'If you have a question or just want to say hi, feel free to send me a message.',
    contact_btn: 'Send Email',
    footer_rights: 'All rights reserved.'
  },

  mn: {
    nav_home: 'Нүүр',
    nav_about: 'Миний тухай',
    nav_skills: 'Ур чадвар',
    nav_projects: 'Төслүүд',
    nav_contact: 'Холбоо',
    hero_title: 'Вэб Хөгжүүлэгч',
    hero_desc: 'Би HTML, CSS болон JavaScript ашиглан энгийн бөгөөд хэрэгцээтэй вэбсайтууд бүтээдэг.',
    hero_btn: 'Төслүүдээ Харах',
    about_title: 'Миний тухай',
    about_p1: 'Сайн уу! Намайг ZERO1zx1 гэдэг. Би код бичиж сураад 2 жил болж байна. Би вэбсайт бүтээх, өдөр бүр шинэ зүйл сурах дуртай.',
    about_p2: 'Одоо би HTML, CSS болон JavaScript-ийн чадвараа сайжруулахад анхаарч байна. Би хурдан, цэвэр, хэрэглэхэд хялбар вэбсайтууд бүтээхийг хүсдэг.',
    skills_title: 'Миний Ур Чадвар',
    skills: [
      { name: 'HTML & CSS', icon: '📄' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'Python', icon: '🐍' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'Discord Bot', icon: '🤖' }
    ],
    projects_title: 'Миний Төслүүд',
    projects: [
      { title: 'Портфолио Вэбсайт', desc: 'Энэ вэбсайт - HTML, CSS, JS ашиглан хийсэн.', icon: '🌐' },
      { title: 'Discord Bot', desc: 'Олон командтай Discord-ийн хөгжмийн бот.', icon: '🎵' },
      { title: 'Цаг Агаарын App', desc: 'API ашиглан цаг агаарыг харуулдаг.', icon: '⛅' },
      { title: 'Todo App', desc: 'Даалгавруудыг удирдах энгийн аппликейшн.', icon: '✅' }
    ],
    contact_title: 'Холбоо Барих',
    contact_desc: 'Хэрэв танд асуулт байвал эсвэл зүгээр л сайн уу гэж хэлэхийг хүсвэл надад мэссэж илгээгээрэй.',
    contact_btn: 'Имэйл Илгээх',
    footer_rights: 'Бүх эрх хуулиар хамгаалагдсан.'
  }
};

// ===== CURRENT LANGUAGE =====
let currentLang = 'en';

// ===== CHANGE LANGUAGE FUNCTION =====
function changeLanguage(lang) {
  currentLang = lang;

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update language buttons (active state)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render skills and projects (they have translated text)
  renderSkills();
  renderProjects();

  // Save language preference
  localStorage.setItem('lang', lang);
}

// ===== LANGUAGE BUTTONS =====
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    changeLanguage(btn.dataset.lang);
  });
});

// ===== MOBILE HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

// ===== RENDER SKILLS =====
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  const skills = translations[currentLang].skills;

  grid.innerHTML = '';

  skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `
      <span class="skill-icon">${skill.icon}</span>
      <h3>${skill.name}</h3>
    `;
    grid.appendChild(card);
  });
}

// ===== RENDER PROJECTS =====
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  const projects = translations[currentLang].projects;

  grid.innerHTML = '';

  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <span class="project-icon">${project.icon}</span>
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
    `;
    grid.appendChild(card);
  });
}

// ===== FOOTER YEAR =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== START: LOAD SAVED LANGUAGE OR DEFAULT =====
const savedLang = localStorage.getItem('lang');
if (savedLang && translations[savedLang]) {
  changeLanguage(savedLang);
} else {
  changeLanguage('en');
}