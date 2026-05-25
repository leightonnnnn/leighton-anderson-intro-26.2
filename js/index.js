// Create and append a footer element to the body
const footer = document.createElement('footer');
let date = new Date();
let thisYear = date.getFullYear();
let copyright = document.createElement('p');
copyright.textContent = `Leighton Anderson ${thisYear} © `;
footer.appendChild(copyright);
document.body.appendChild(footer);

//Add skills to skills section
let skills = ['HTML', 'CSS', 'JavaScript'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}