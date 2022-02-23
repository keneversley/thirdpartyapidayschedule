//   Format Dates
var currentDay = moment().format("dddd, MMMM Do");  
console.log(currentDay)
$("#currentDay").text(currentDay) 

$( ".row" ).each(function() {
    var currentHour = moment().hour();
    var rowHour = $( this ).attr("id");
    console.log(currentHour, rowHour)
// cheking to see if current hour is past, present, or future
    if(currentHour > rowHour){
        $( this ).children(".description").addClass( "past" );  
    } else if(currentHour < rowHour){
        $( this).children(".description").addClass("future"); 

    } else if (currentHour == rowHour){
        $( this).children(".description").addClass("presnt"); 
    }
  });

  


