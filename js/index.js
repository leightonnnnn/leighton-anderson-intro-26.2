// Create and append a footer element to the body
const footer = document.createElement('footer');
//footer.textContent = '© 2026 Leighton Anderson';


let date = new Date();
let thisYear = date.getFullYear();
let copyright = document.createElement('p');
copyright.textContent = `Leighton Anderson ${thisYear} © `;
footer.appendChild(copyright);
document.body.appendChild(footer);
