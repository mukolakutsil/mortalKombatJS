
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');



const scorpion = {
    player: 2,
    name: 'SCORPION',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['claws', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};

const kitana = {
    player: 2,
    name: 'KITANA',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['rocket', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};

const liukang = {
    player: 1,
    name: 'LIUKANG',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['claws', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};

const sonya = {
    player: 1,
    name: 'SONYA',
    hp: 95,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['rocket', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};

const subzero = {
    player: 1,
    name: 'SUBZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['rocket', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};



const player1 = {
    player: 1,
    name: 'SUBZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['rocket', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};

const player2 = {
    player: 2,
    name: 'LIUKANG',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['claws', 'fire'],
    attack() {
        console.log(`${this.name} Fight...`);
    }
};

let createElement = (tag, className) => {
    const $tag = document.createElement(tag);

    if (className) {
        $tag.classList.add(className)
    };

    return $tag;
};

let createPlayer = (pers) => {

    const $player = createElement('div', `player${pers.player}`),
        $progressbar = createElement('div', 'progressbar'),
        $character = createElement('div', 'character'),
        $life = createElement('div', 'life'),
        $name = createElement('div', 'name'),
        $img = createElement('img');

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $life.style.width = `${pers.hp}%`;

    $name.innerText = pers.name;

    $img.src = pers.img;

    return $player;
};

const changeHP = (player) => {
    const $playerLife = document.querySelector(`.player${player.player} .life`);
    let randomHP = Math.ceil(Math.random() * 20);

    player.hp -= randomHP;
    $playerLife.style.width = `${player.hp}%`;

    if (player.hp <= 0) {
        $arenas.appendChild(playerWins(whoWins()));
        $playerLife.style.width = '0%';
    };

};

const whoWins = () => {

    if (player1.hp <= 0) {
        return player2.name;
    } else if (player2.hp <= 0) {
        return player1.name;
    };

};

const playerWins = (name) => {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = `${name} wins`;
    $randomButton.disabled = true;

    return $loseTitle;
}


$randomButton.addEventListener('click', () => {
    let randomPlayer = Math.ceil(Math.random() * 2);
    if (randomPlayer === 1) {
        changeHP(player1);
    } else if (randomPlayer === 2) {
        changeHP(player2);
    }
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));









