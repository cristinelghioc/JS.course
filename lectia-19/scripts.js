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
}

const moveDown = () => {
    let currentTop = parseInt($('.square').css('top'));
    let squareHeight = parseInt($('.square').css('height'));
    let displayHeight = (parseInt($('.display').css('height')) - 2);
    let heightLimit = displayHeight - step;
    let currentBottom = currentTop + squareHeight;

    if (currentBottom < heightLimit) {
        if ((displayHeight - currentBottom - step) < step) {
            let step = displayHeight - currentBottom;
            $('.square').css({
                top: currentTop + step + 'px'
            });
        }
        else {
            $('.square').css({
                top: currentTop + step + 'px'
            });
        }
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
    let squareWidth = parseInt($('.square').css('width'));
    let displayWidth = (parseInt($('.display').css('width')) - 2);
    let widthLimit = displayWidth - step;
    let currentBottom = currentLeft + squareWidth;

    if (currentBottom < widthLimit) {
        if ((displayWidth - currentBottom - step) < step) {
            let step = displayWidth - currentBottom;
            $('.square').css({
                left: currentLeft + step + 'px'
            });
        }
        else {
            $('.square').css({
                left: currentLeft + step + 'px'
            });
        }
    }

}