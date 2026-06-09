// DogAPI
const API_KEY = 'live_i9gS6HJNoggLDLQg9saXVbttZOnkegOgwSDAvOWfqE5J5WZ8p5DP1Wc4qdI0O7iP';
const dogData = document.getElementById('dogData');
const randomDog = document.getElementById('randomDog');
const breedList = document.getElementById('breedList');

randomDog.addEventListener('click', function(){
    fetch('https://api.thedogapi.com/v1/images/search', {
        headers: {
            'x-api-key': API_KEY
        }
    })
        .then(response => response.json())
        .then(data => {
            dogData.innerHTML = '';
            const dogImage = document.createElement('img');
            dogImage.src = data[0].url;
            dogImage.alt = 'Random Dog';
            dogData.appendChild(dogImage);
        })
        .catch(error => {
            dogData.innerHTML = 'Error fetching dog image.';
            console.error('Error fetching dog image:', error);
        });
});

breedList.addEventListener('click', function(){
    fetch('https://api.thedogapi.com/v1/breeds', {
        headers: {
            'x-api-key': API_KEY
        }
    })
        .then(response => response.json())
        .then(breeds => {
            dogData.innerHTML = '';
            breeds.sort(() => Math.random() - 0.5);
            for (let i = 0; i < 10; i++){
                const breedItem = document.createElement('p');
                breedItem.textContent = breeds[i].name;
                dogData.appendChild(breedItem);
            }
        })
        .catch(error => {
            dogData.innerHTML = 'Error fetching breed information.';
            console.error('Error fetching breed information:', error);
        });
});