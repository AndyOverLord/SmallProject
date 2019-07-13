//check off specific Todos by Clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on the trashbin to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
});

// add eventListener when user enter input 
$("input[type='text']").keypress(function(event){
    if (event.which === 13){
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + $(this).val() + '</li>')
        $(this).val("");
    }
});


// Toggle the form input
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});