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
        $('.down').css({
            cursor: 'default'
        });
        $('.square').css({
            top: currentTop - step + 'px'
        });
        $('.up').css({
            cursor: 'pointer'
        });
    }
    else {
        $('.square').css({
            top: 0 + 'px'
        });
        $('.up').css({
            cursor: 'default'
        });
    }
}
const moveDown = () => {
    let currentTop = parseInt($('.square').css('top'));
    let squareHeight = parseInt($('.square').css('height'));
    let displayHeight = (parseInt($('.display').css('height')) - 2);
    let heightLimit = displayHeight - squareHeight;
    let newTop = currentTop + step;

    if (currentTop < heightLimit) {
        $('.up').css({
            cursor: 'default'
        });
        if ((displayHeight - newTop) < (squareHeight)) {
            $('.square').css({
                top: currentTop + (displayHeight - newTop - step) + 'px'
            });
            $('.down').css({
                cursor: 'default'
            });
        }
        else {
            $('.square').css({
                top: currentTop + step + 'px'
            });
            $('.down').css({
                cursor: 'pointer'
            });
        }
    }

}

const moveLeft = () => {
    let currentLeft = parseInt($('.square').css('left'));
    if (currentLeft > step) {
        $('.right').css({
            cursor: 'default'
        });
        $('.square').css({
            left: currentLeft - step + 'px'
        });
        $('.left').css({
            cursor: 'pointer'
        });
    }
    else {
        $('.square').css({
            left: 0 + 'px'
        });
        $('.left').css({
            cursor: 'default'
        });
    }
}
const moveRight = () => {
    let currentLeft = parseInt($('.square').css('left'));
    let squareWidth = parseInt($('.square').css('width'));
    let displayWidth = (parseInt($('.display').css('width')) - 2);
    let widthLimit = displayWidth - squareWidth;
    let newLeft = currentLeft + step;

    if (currentLeft < widthLimit) {
        $('.left').css({
            cursor: 'default'
        });
        if ((displayWidth - newLeft) < (squareWidth)) {
            $('.square').css({
                left: currentLeft + (displayWidth - newLeft - step) + 'px'
            });
            $('.right').css({
                cursor: 'default'
            });
        }
        else {
            $('.square').css({
                left: currentLeft + step + 'px'
            });
            $('.right').css({
                cursor: 'pointer'
            });
        }
    }

}