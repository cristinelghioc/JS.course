$(() => {
    init();
});

const boardWidth = 4;
const boardHeight = 3;
const images = [
    'fab fa-android',
    'fab fab fa-app-store-ios',
    'fas fa-at',
    'fab fa-apple',
    'fas fa-ambulance',
    'fas fa-balance-scale',
    'fas fa-bell',
    'fas fa-bicycle',
    'fas fa-bomb',
    'fas fa-bus',
    'fas fa-chess',
    'fas fa-cut',
    'fab fa-earlybirds',
    'fab fa-empire',
    'fas fa-exclamation-triangle',
    'fas fa-fighter-jet',
    'fas fa-fire-extinguisher',
    'fas fa-football-ball',
    'fab fa-fort-awesome',
    'fas fa-gamepad',
    'fas fa-graduation-cap',
    'fas fa-headphones',
    'fas fa-heart',
    'fab fa-js-square',
    'fab fa-itunes-note',
    'fas fa-laptop',
    'fas fa-lightbulb',
    'fab fa-linux',
    'fas fa-location-arrow',
    'fas fa-mobile-alt',
    'fas fa-motorcycle',
    'fas fa-paw',
    'fas fa-plane',
    'fas fa-puzzle-piece',
    'fab fa-rebel',
    'fas fa-plus',
    'fab fa-react',
    'fas fa-smile',
    'far fa-snowflake',
    'fas fa-space-shuttle',
    'fas fa-star',
    'fas fa-taxi',
    'fas fa-subway',
    'far fa-thumbs-up'
];

const init = () => {
    $('.board-container').html('<section class="board"></section>');
    setBoardDimensions(boardWidth, boardHeight);

    for (let i = 0; i < boardWidth * boardHeight; i++) {
        $('.board').append('<div class="cards"></div>');
    }
};

const setBoardDimensions = (boardWidth, boardHeight) => {
    $('.board').css({
        gridTemplateColumns: `repeat(${boardWidth}, 1fr)`,
        gridTemplateRows: `repeat(${boardHeight}, 1fr)`
    })
}

const random = max => {
    return Math.floor(Math.random() * max);
}

const shuffleArray = (cards, length) => {
    let imgs = cards.slice(0);
    let noOfCards = imgs.length;
    let newImages = [];
    let idx;
    for (let i = 0; i < length; i++) {
        idx = random(noOfCards);
        newImages.push(imgs[idx]);
        imgs.splice(idx, 1);
        noOfCards--;
    }
    return newImages;
}