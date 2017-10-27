/* Javascript for MettlXBlock. */
function MettlXBlock(runtime, element) {
    $(function ($) {
        $('.student_records').paginate({
            'elemsPerPage': 5,
            'maxButtons': 6
        });
        
        var dots = window.setInterval( function() {
          var wait = document.getElementsByClassName('dots')[0];
          if ( wait.innerHTML.length > 4 )
              wait.innerHTML = "";
          else
              wait.innerHTML += ".";
        }, 1000);
        
    });
}
$(document).ajaxSend(function(event, xhr, settings){
  if(settings.url.indexOf('mettl+block') > 0 && settings.url.endsWith('save_studio_edits')){
        $('.loading_overlay').show();
  }
});

$( document ).ajaxComplete(function(event, xhr, settings) {
   if(settings.url.indexOf('mettl+block') > 0 && settings.url.indexOf('reorderable_container_child_preview') > 0){
        console.log("Loading Over");
        $('.loading_overlay').hide();
        $('.student_records').paginate({
            'elemsPerPage': 5,
            'maxButtons': 6
        });
   }
});

