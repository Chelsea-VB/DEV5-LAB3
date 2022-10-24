export default class RickMorty {
    constructor(api_key) {
        this.apiKey = api_key;
        this.getCharacters();
    };

    getCharacters() {
        const url = `https://rickandmortyapi.com/api/character/`;
        //console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.displayCharacters(data);
            });
    }

    displayCharacters(data) {
        const characters = data.results;
        console.log(characters);
        characters.forEach(character => {
            const characterName = character.name;
    
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('character');

            const characterNameDiv = document.createElement('div');
            characterNameDiv.classList.add('character__name');
            characterNameDiv.textContent = characterName;

            characterDiv.appendChild(characterNameDiv);
            document.querySelector('.rickmorty').appendChild(characterDiv);
        });
    };
};
