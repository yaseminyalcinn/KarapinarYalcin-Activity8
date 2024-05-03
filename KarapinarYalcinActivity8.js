$(document).ready(function() {
    $("#birthday").datepicker(); 

    var programmingLanguages = [
        "ActionScript", 
        "AppleScript", 
        "Asp", 
        "JavaScript", 
        "Lisp", 
        "Perl", 
        "PHP", 
        "Python"
    ];

    $("#languages").autocomplete({
        source: programmingLanguages,
        minLength: 0, 
        select: function(event, ui) {
            $("#languages").val(ui.item.value); 
            return false;
        }
    }).focus(function() {
        $(this).autocomplete("search", "");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
            event.preventDefault(); 
        }
        form.classList.add('validated'); 
    });
});


var inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('invalid', function(event){
        event.preventDefault();
    });
});

