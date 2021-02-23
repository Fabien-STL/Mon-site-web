//fichier de script pour faire apparaitre le menu de navigation

const liste = document.querySelector('.liste');
const btnResponsive = document.querySelector('.btn-respondive');

btnResponsive.addEventListener('click',() => {
    liste.classList.toggle('show');
})