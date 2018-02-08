$(() => {
    createClickEvents();
});

var step = 50;

const createClickEvents = () => {
    $('.up, .left, .right, .down').click(function () {
        let direction = $(this).data('direction');
        moveSquare(direction);
    })
};

const moveSquare = direction => {
    // const functionName = direction.replace(/^[a-z]/, letter =>
    //     letter.toUpperCase()
    // );
    // new Function('return move' + functionName + '()')();

    switch (direction) {
        case 'up':
        moveUp();
        break;

        case 'left':
        moveLeft();
        break;

        case 'right':
        moveRight();
        break;

        case 'down':
        moveDown();
        break;

        default:
        break;
    }
};

const moveUp = () => {
    let currentTop = parseInt($('.square').css('top'));
    if (currentTop > step) {
        $('.square').css({
            top: currentTop - step + 'px'
        });
    }
    else {
        $('.square').css({
            top: 0 + 'px'
        });
    }
    console.log('up: ' + currentTop);
}

const moveDown = () => {
    let currentTop = parseInt($('.square').css('top'));
    let squareHeight = parseInt($('.square').css('height'));
    let displayHeight = (parseInt($('.display').css('height')) - 2);
    if ((displayHeight - currentTop - squareHeight) > step) {
        $('.square').css({
            top: currentTop + step + 'px'
        });
    }
    else {
        let step = displayHeight - currentTop - squareHeight;
        $('.square').css({
            top: currentTop + step + 'px'
        });
    }
}

const moveLeft = () => {
    let currentLeft = parseInt($('.square').css('left'));
    if (currentLeft > step) {
        $('.square').css({
            left: currentLeft - step + 'px'
        });
    }
    else {
        $('.square').css({
            left: 0 + 'px'
        });
    }
}

const moveRight = () => {
    let currentLeft = parseInt($('.square').css('left'));
    let squarewidth = parseInt($('.square').css('width'));
    let displaywidth = (parseInt($('.display').css('width')) - 2);
    if ((displaywidth - currentLeft - squarewidth) > step) {
        $('.square').css({
            left: currentLeft + step + 'px'
        });
    }
    else {
        let step = displaywidth - currentLeft - squarewidth;
        $('.square').css({
            left: currentLeft + step + 'px'
        });
    }
}