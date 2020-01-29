$(".head i").click(function(){                  // to make input appear and disappear when it is clicked
    $(".form-control").slideToggle();
});
$("#adder").keypress(function(event){           // for adding the new li with user new to do on pressing enter
    var mytodo = $(this).val();
    if(event.which === 13 && mytodo !== ""){
        $(".mylist").append($("<li>").append(
            $("<span>",{ class: "del"}).append(
                $("<i>",{ class: "fas fa-minus"})
            ),
            $("<span>",{ class: "content"}).text(mytodo)
        ));
        $(".form-control").val("");
    }
    else if(mytodo === ""){
        alert("New To-Do can't be empty !!!")
    }
});
$("ul").on("click","span",function(){           // this will make a cut away effect when the user has clicked on the li
    $(this).toggleClass("line");
});
$("ul").on("mouseenter","li",function(){        // this will make x appear when mouse is over the li
   $(this).children(".del").fadeIn(200);
});
$("ul").on("mouseleave","li",function(){        // this is to fade out the x when user has moved his mouse away from the li
    $(this).children(".del").fadeOut(200);
});
$("ul").on("click",".del",function(){           // this function is for deleting the li when user clicks on x on left of it
    $(this).slideUp();
    $(this).next().slideUp();
    $(this).parent().remove("li");
});
// $("ul").on("dblclick","li",function(){       // made li disappear when double clicked
//     $(this).slideUp();
// })
//   $("ul").on("mouseenter","li",function(){
//       $(this).slideUp();
//   });

// $(".mylist").append($("<li><span></span></li>").text(mytodo));     main line*****************************

//   $("ul").on("mouseleave","li",function(){
//       $(this).slideDown();
//   });
// $(".mylist").append($("<li>").text($("#adder").val()));      // adds todo using plus button