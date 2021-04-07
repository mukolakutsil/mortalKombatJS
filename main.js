let scorpion = {
    name: 'SCORPION',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['claws', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
}

let kitana = {
    name: 'KITANA',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['rocket', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
}

let liukang = {
    name: 'LIUKANG',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['claws', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
}

let sonya = {
    name: 'SONYA',
    hp: 95,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['rocket', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
}

let subzero = {
    name: 'SUBZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['rocket', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
}

let createPlayer = (className, pers) => {

    let $player = document.createElement('div'),
        $progressbar = document.createElement('div'),
        $character = document.createElement('div'),
        $life = document.createElement('div'),
        $name = document.createElement('div'),
        $img = document.createElement('img'),
        $arenas = document.querySelector('.arenas');

    $player.classList.add(className);
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');


    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $life.style.width = `${pers.hp}%`;

    $name.innerText = pers.name;

    $img.src = pers.img;

    $arenas.appendChild($player);

}

createPlayer('player1', sonya);
createPlayer('player2', liukang);





