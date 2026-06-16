const API_KEY = 'YOUR_API_KEY_HERE';
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
            const randomTenBreeds = breeds.slice(0, 10);
            randomTenBreeds.sort((a, b) => a.name.localeCompare(b.name));

            for (let i = 0; i < randomTenBreeds.length; i++) {
                const breedItem = document.createElement('p');
                breedItem.textContent = randomTenBreeds[i].name;
                dogData.appendChild(breedItem);
            }
        })
        .catch(error => {
            dogData.innerHTML = 'Error fetching breed information.';
            console.error('Error fetching breed information:', error);
        });
});