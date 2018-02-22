$(() => {
    setToggleEvent();
    toggleAll();
});

const setToggleEvent = () => {
    $('.title').click(toggleDescription);
};

const toggleAll = () => {
    $('.all').click(toggleAllDescription);
}

function toggleDescription() {
    const titleIcon = $(this).find('.fas');
    const description = $(this).next('.description');

    if (description.hasClass('opened')) {
        description.removeClass('opened');
        description.toggle(1000);
        toggleElement(titleIcon);
        return;
    }

    const icon = $('.opened').prev('.title').find('.fas');
    toggleElement(icon);

    $('.opened').toggle(1000);
    $('.opened').removeClass('opened');

    description.addClass('opened');
    description.toggle(1000);
    toggleElement(titleIcon);
}

function toggleAllDescription() {

    if ($('.all').text() == 'Collapse all') {

        if ($('.opened').length == 0) {
            $('.all').text('Expand all');
            return;
        }

        $('.opened').each(function () {
            $(this).toggle(1000);
            $(this).removeClass('opened');
            toggleElement($(this).prev('.title').find('.fas'));
            $('.all').text('Expand all');
        });
        return;
    }

    $('.description').not('.opened').each(function () {
        $(this).addClass('opened');
        $(this).toggle(1000);
        toggleElement($(this).prev('.title').find('.fas'));
        $('.all').text('Collapse all');
    });

}

const toggleElement = element => {
    element.toggleClass('fa-chevron-down fa-chevron-up');
};