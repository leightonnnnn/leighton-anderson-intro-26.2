// Create and append a footer element to the body
const footer = document.createElement('footer');
let date = new Date();
let thisYear = date.getFullYear();
let copyright = document.createElement('p');
copyright.textContent = `Leighton Anderson ${thisYear} © `;
footer.appendChild(copyright);
document.body.appendChild(footer);
