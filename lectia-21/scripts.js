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

    if ($('.description').hasClass('all-opened')) {
        $('.all-opened').toggle(1000);
        $('.all-opened').removeClass('all-opened');
        $(this).text('Open all');
        return;
    }

    $('.opened').toggle(1000);
    $('.opened').removeClass('opened');
    $('.description').addClass('all-opened');
    $('.description').toggle(1000);
    $(this).text('Close all');
    return;
}

const toggleElement = element => {
    element.toggleClass('fa-chevron-down fa-chevron-up');
};