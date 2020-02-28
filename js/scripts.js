$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault()
    var countBy = parseInt($("#countByNumber").val())
    var countTo = parseInt($("#countToNumber").val())
    // console.log(countBy, countTo)

    var total = 0
    for (var currentNumber = countBy; currentNumber <= countTo; currentNumber += countBy) {
      total += currentNumber
      $("#output").append(currentNumber + "<br>")
    };
  })
});