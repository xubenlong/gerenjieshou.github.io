var DiceRollOne = Math.floor(Math.random() * 100) + 1;
var DiceRollTwo = Math.floor(Math.random() * 100) + 1;
alert('玩家1，想投色子，请点击确定.');
document.write('尊贵的玩家1投出了' + DiceRollOne + '点！' + '<br/>');
alert('玩家2，想投色子，请点击确定.');
document.write('尊贵的玩家2投出了' + DiceRollTwo + '点！')
if (DiceRollOne > DiceRollTwo) {
    document.write('<p>玩家1胜出</p>');
} else {
    document.write('<p>玩家2胜出</p>');
}