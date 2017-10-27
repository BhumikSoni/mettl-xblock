/* Javascript for MettlXBlock. */
function MettlXBlock(runtime, element) {
    "use strict";
    var save_studio_edits_url = runtime.handlerUrl(element, 'save_studio_edits');

    $('.save-button', element).bind('click', function(e) {
        e.preventDefault();
        var data = {
            display_name: $(element).find('input[name=display_name]').val(),
            assessment_id: $(element).find('select[name=assessment_id]').val(),
            weight: $(element).find('input[name=weight]').val(),
            attempts: $(element).find('input[name=attempts]').val(),
            test_button_label: $(element).find('input[name=test_button_label]').val(),
            test_button_color: $(element).find('input[name=test_button_color]').val(),
            test_button_back_color: $(element).find('input[name=test_button_back_color]').val(),
        };
        $.ajax({
            type: "POST",
            url: save_studio_edits_url,
            data: JSON.stringify(data),
            success: function(response) { 
                runtime.notify('save', {state: 'end'});
            },
        });
    });

    $(element).find('.cancel-button').bind('click', function(e) {
        e.preventDefault();
        runtime.notify('cancel', {});
    });
    
    $('.test_button').css('color',$('#test_button_color_input').val());
    $('.test_button').css('background-color',$('#test_button_back_color_input').val());
    $('.test_button').html($('#test_button_label_input').val());
    $('.test_button').css('height',$('#test_button_height_input').val()+"px");
    $('.test_button').css('font-size',$('#test_button_font_size_input').val()+"px");

    $('#test_button_label_input').on('keyup change',function(){
        $('.test_button').html($(this).val());
    });
    $('#test_button_color_input').on('change',function(){
        $('.test_button').css('color', $(this).val());
    });
    $('#test_button_back_color_input').on('change',function(){
        $('.test_button').css('background-color', $(this).val());
    });
    $('#test_button_height_input').on('keyup change',function(){
        $('.test_button').css('height',$(this).val() + 'px');
    });
    $('#test_button_font_size_input').on('keyup change',function(){
        $('.test_button').css('font-size',$(this).val() + 'px');
    });

}
