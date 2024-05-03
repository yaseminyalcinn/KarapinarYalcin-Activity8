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

