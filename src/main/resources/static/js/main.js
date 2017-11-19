(function($) {
    $(document).ready(function () {
        $('.btn.dec-btn').click(function(){
            var inputToDecrement = $(this).siblings("input[type=number]")[0];

            if(inputToDecrement.value > 0){
                inputToDecrement.value--;
            }
        });

        $(".percent.inc-btn").click(function () {
            var inputToIncrement = $(this).siblings("input[type=number]")[0];

            if(inputToIncrement.value < 100) {
                inputToIncrement.value++;
            }
        });

        $("#calories-inc-btn").click(function () {
            var inputToIncrement = $(this).siblings("input[type=number]")[0];

            inputToIncrement.value++;
        });

        $("input[type=number]").blur(function () {
            var inputQty = parseInt($(this).val());
            var max = parseInt($(this).attr("data-max"));

            if(isNaN(inputQty) || inputQty < 0) {
                $(this).val(0);
            }

            if(inputQty > max) {
                $(this).val(max);
            }
        });
    });
})(jQuery);