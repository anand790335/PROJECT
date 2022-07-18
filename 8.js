const p1 = {
    score: 0,
    display: document.querySelector('#p1display'),
    button: document.querySelector('#p1button')
}
const p2 = {
    score: 0,
    display: document.querySelector('#p2display'),
    button: document.querySelector('#p2button')
}




// const p1display = document.querySelector('#p1display');

// const p2display = document.querySelector('#p2display');
// const p1button = document.querySelector('#p1button');
// const p2button = document.querySelector('#p2button');
// const reset = document.querySelector('#reset');
const winscoreselect = document.querySelector('#winscoreselect');

// let p1score = 0;
// let p2score = 0;
let winningScore = 5;
let gameover = false;

function update(player, opponent) {
    if (!gameover) {
        player.score += 1;
        if (player.score === winningScore) {
            gameover = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}
p1.button.addEventListener('click', function () {
    update(p1, p2);
})
p2.button.addEventListener('click', function () {
    update(p2, p1);
})
winscoreselect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetval();
})
reset.addEventListener('click', resetval);

function resetval() {
    gameover = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }

}
