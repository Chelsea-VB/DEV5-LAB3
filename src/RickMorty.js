export default class RickMorty {
    constructor(temperature) {
        this.temperature = temperature;
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
        if (this.temperature < 0) {
            const character = characters[0];
            console.log(character);
            document.querySelector('.character__name').textContent = character.name;
            document.querySelector('.character__image').src = character.image;
        } else if (this.temperature < 10) {
            const character = characters[1];
            console.log(character);
            document.querySelector('.character__name').textContent = character.name;
            document.querySelector('.character__image').src = character.image;
        } else if (this.temperature < 20) {
            const character = characters[2];
            console.log(character);
            document.querySelector('.character__name').textContent = character.name;
            document.querySelector('.character__image').src = character.image;
        } else if (this.temperature < 30) {
            const character = characters[3];
            console.log(character);
            document.querySelector('.character__name').textContent = character.name;
            document.querySelector('.character__image').src = character.image;
        } else {
            const character = characters[4];
            console.log(character);
            document.querySelector('.character__name').textContent = character.name;
            document.querySelector('.character__image').src = character.image;
        }
    };
};
