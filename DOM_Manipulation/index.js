// let red = document.getElementById('red');
// let green = document.getElementById('green');
// let yellow = document.getElementById('yellow');

// red.onclick = () => console.log('This is red');
// green.onclick= () => console.log('This is green');
// yellow.onclick = () => console.log('This is yellow');

const square = document.querySelectorAll('.colorSquare');
// console.log(square[2].value);
// square.forEach(sqare => console.log(square.values))
const countOfClicks = {'red':0 , 'yellow':0 , 'green':0}

square.forEach(square => {
    square.onclick = () => {
        countOfClicks[square.value] += 1;
        square.innerText  = countOfClicks[square.value];
    }

})

function clearScore() {
    countOfClicks.red = 0;
    countOfClicks.green = 0;
    countOfClicks.yellow = 0;
    square.forEach(square => {
        square.innerText =0
    });
}

const clearBtn = document.getElementById('clear-game');
clearBtn.onclick = () => clearScore();