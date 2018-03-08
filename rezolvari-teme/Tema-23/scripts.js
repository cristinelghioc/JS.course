$('.value').keypress(validate);
$('.apply').click(randomize);

const maxHeight = $('.display').height() - 50;
const maxWidth = $('.display').width() - 50;

function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min));
}

function randomPosition(i) {
    var min = getRandomNumber(0, maxHeight);
    var max = getRandomNumber(0, maxWidth);
    $(`.index${i}`).css({ top: min + 'px', left: max + 'px' });
}

function randomColor(i) {
    var red = getRandomNumber(0, 255);
    var green = getRandomNumber(0, 255);
    var blue = getRandomNumber(0, 255);
    $(`.index${i}`).css({ color: `rgb(${red}, ${green}, ${blue})` });
}

function randomSize(i) {
    $(`.index${i}`).css({ fontSize: getRandomNumber(10, 50) + 'px'});
}

function randomize() {
    $('.display').children('span').remove();
    const value = $(this).prev().val();
    for (let i = 1; i <= value; i++) {
        $('.display').append(`<span class="index${i}">${i}</span>`);
        randomPosition(i);
        randomColor(i);
        randomSize(i);
    }
}

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
}