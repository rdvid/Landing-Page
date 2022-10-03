
$(document).ready(function () {

    $(view).on("#quote", () => {
        alert('teste');
    });

    $('.infoSquare').on('click', function () {
        $('#exampleModal').modal();
    })

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('.navBar').css('background', 'red');
        } else {
            $('.navBar').css('background', 'transparent');
        }
    });



});