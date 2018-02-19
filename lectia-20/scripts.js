$(() => {
    $('#search').keyup(function() {
        filterPhrases($(this).val());
    });

    $('#search').focus();
});

const filterPhrases = word => {
    $('.list-container ul li').map((index, element) => {
        const liHtml = $(element).text().toLowerCase();

        if (liHtml.includes(word.toLowerCase())) {
            const pattern = new RegExp(`(${word})`, 'ig');
            const newHtml = $(element).text().replace(pattern, `<span class="hl">$1</span>`);
            $(element).html(newHtml);
            $(element).show();
        } else {
            $(element).hide();
        }
    })
};

const phrases = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Suspendisse suscipit mi ut enim mattis ornare.',
    'Sed at dui nec tellus feugiat facilisis.',
    'Sed vulputate urna luctus, pellentesque felis eget, faucibus ante.',
    'Morbi venenatis risus vitae ligula ultricies egestas.',
    'Curabitur sed elit et mi pharetra tristique vitae sed nunc.',
    'Proin consequat libero non pulvinar rhoncus.',
    'Nullam et massa at eros luctus pretium ut a est.'
];

phrases.map(phrase => {
    const liHtml = `<li>${phrase}</li>`;
    $('.list-container ul').append(liHtml);
})
