/* Javascript for MettlXBlock. */
function MettlXBlock(runtime, element) {

    var fetch_result_url = runtime.handlerUrl(element,'fetch_result');
    (function poll() {
        $.ajax({
            type: "POST",
            url: fetch_result_url,
            data: JSON.stringify({}),
            success: update_records,
            complete: setTimeout(function() {poll()}, 5000)
        })
    })();

    function update_records(result){
        Object.keys(result).forEach(function(key) {
            $(".result-card#"+key).find(".status").html(result[key]['status']).attr('title',result[key]['finish_mode']);
            if (result[key]['marks'] > 0) {
                $(".result-card#"+key).find(".marks").html("<b>Marks : </b>" + result[key]['marks'] + "/" + result[key]['max_marks'] + " , ");
            }else{  
                $(".result-card#"+key).find(".marks").html("<b>Marks : </b>" + result[key]['marks'] + " , ");
            }
            $(".result-card#"+key).find(".time_taken").html("<b>Time Taken : </b>" + result[key]['time_taken']);
            if (result[key]['last_response_time'] == "") {
                $(".result-card#"+key).find(".finish_time").html("<b>Finish Time : </b>" + result[key]['finish_time']);
            }else{
                $(".result-card#"+key).find(".finish_time").html("<b>Last Response Time : </b>" + result[key]['last_response_time']);
            }
            if (result[key]['status'] == "Completed") {
                $(".result-card#"+key).find(".status").addClass("completed");
                if (!$(".result-card#"+key).find(".resume-test").hasClass('btn-pink')) {
                    $(".result-card#"+key).find(".resume-test").removeClass("btn-blue test_button").addClass('btn-pink').html("Download Report").attr('href',result[key]['pdf_report']).removeAttr('disabled').removeAttr('target').removeAttr('onclick');
                }
            }
            else if (result[key]['status'] == "Archive") {
                if ($(".result-card#"+key).find(".resume-test").length) {
                    $(".result-card#"+key).find(".resume-test").remove();
                }
            }
            else if (result[key]['status'] == "ToBeTaken") {
                $(".result-card#"+key).find(".status").addClass("to-be-taken");
                if (result[key]['can_start_test']) {
                    $(".result-card#"+key).find(".resume-test").removeAttr('disabled').attr('href',result[key]['start_test']);
                }
                else{
                    $(".result-card#"+key).find(".resume-test").prop('disabled', true).attr('href',"#");
                }
            }
            else{
                $(".result-card#"+key).find(".status").addClass("in-progress");
                if($(".result-card#"+key).find(".resume-test").hasClass('test_button')) {
                    $(".result-card#"+key).find(".resume-test").removeClass('test_button').html("Resume Test").removeAttr('disabled');
                }
            }
        });
    }

    $(function ($) {
    });
}
function popup(url) {
    params  = 'width='+screen.width;
    params += ', height='+screen.height;
    params += ', top=0, left=0'
    params += ', fullscreen=yes';
    newwin=window.open(url,'windowname4', params);
    if (newwin){
        newwin.focus()
    }
    else{
        alert('Please Allow Popups to take the Test');
    }
    return false;
}
