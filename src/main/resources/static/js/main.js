
(function($) {
(function($, m) {

    $(document).ready(function () {
        // navbar initializations
        $(".dropdown-button").dropdown();
        $(".button-collapse").sideNav();

        // Listener for diary date picker
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15, // Creates a dropdown of 15 years to control year,
            today: 'Today',
            clear: 'Clear',
            close: 'Ok',
            closeOnSelect: false // Close upon selecting a date,
        });

        // Click listener for logout "button"
        $("#full-logout-link, #mobile-logout-link").click(function (evt) {
            evt.preventDefault();
            $("#logout-form").submit();
        });
    });
})(jQuery);
        m.udpateTextFields();
    });

    $("#full-logout-link, #mobile-logout-link").click(function (evt) {
        evt.preventDefault();
        $("#logout-form").submit();
    });

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });

})(jQuery, Materialize);

