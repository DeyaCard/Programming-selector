$(document).ready(function() {

  $("form#questions").submit(function(event) {
    const age = $("select#age").val();
    const os = $("select#os").val();
    const eyeColor = $("select#eye-color").val();
    const iceCream = $("select#ice-cream").val();
    const car = $("select#car").val();


    if (age === "under-25" || iceCream === "Vanilla") {
      $("#result1").show();
      $("#result2").hide();
      $("#result3").hide(); 
    } else if (os === "PC" || car === "Ford") {
      $("#result1").hide();
      $("#result2").show();
      $("#result3").hide(); 
    } else if (eyeColor === "Blue" && car === "Lamborghini") {
      $("#result1").hide();
      $("#result2").hide();
      $("#result3").show(); 
    } else {
      $("#result1").hide();
      $("#result2").hide();
      $("#result3").show();
    }
   event.preventDefault();
  });
});

