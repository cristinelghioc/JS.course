$('.position').click(randomPosition);
$('.color').click(randomColor);
$('.size').click(randomSize);

const maxHeight = $('.display').height() - $('.far').height();
const maxWidth = $('.display').width() - $('.far').width();

function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

function randomPosition() {
    var min = getRandomNumber(0, maxHeight);
    var max = getRandomNumber(0, maxWidth);
    $('.far').css({ paddingTop: min + 'px', paddingLeft: max + 'px' });
}

function randomColor() {
    var red = getRandomNumber(0, 255);
    var green = getRandomNumber(0, 255);
    var blue = getRandomNumber(0, 255);
    $('.far').css({ color: `rgb(${red}, ${green}, ${blue})` });
}

function randomSize() {
    $('.far').css({ fontSize: getRandomNumber(10, 50) + 'px'});
}