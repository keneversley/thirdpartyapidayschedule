//   Format Dates
var currentDay = moment().format("dddd, MMMM Do");  
console.log(currentDay)
$("#currentDay").text(currentDay); 

$(".saveBtn").on("click", function () {
    //get nearby values.
    console.log(this);
    var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

    //set items in local storage.
    localStorage.setItem(time, text);
})

$( ".row" ).each(function() {
    var currentHour = moment().hour();
    var rowHour = $( this ).attr("id");
    console.log(currentHour, rowHour)
// cheking to see if current hour is past, present, or future
    if(currentHour > rowHour){
        $( this ).children(".description").addClass( "past" );  
    } else if(currentHour < rowHour){
        $( this).children(".description").addClass("future"); 

    } else  (currentHour == rowHour)
        $( this).children(".description").addClass("presnt"); 
    
  });
  
   //set items in local storage.
//    localStorage.setItem(currentHour, rowHour);

  


