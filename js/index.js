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

//Form
let messageForm = document.querySelector('form[name="leave_message"]');
messageForm.addEventListener('submit', function(event){
    event.preventDefault();
    let usersName = event.target.usersName.value;
    let usersEmail = event.target.usersEmail.value;
    let usersMessage = event.target.usersMessage.value;
    console.log(`${usersName} ${usersEmail} ${usersMessage}`);
    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span>`;
    let removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    removeButton.type = 'button';
    removeButton.addEventListener('click', function(){
        let entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    event.target.reset();
});

// API
fetch('https://api.github.com/users/leightonnnnn/repos')
    .then(response => response.json())
    .then(repositories => { console.log(repositories); })
    .catch(error => console.error('Error fetching repositories:', error));