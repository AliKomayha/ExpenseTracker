
$(document).ready(function() {

    let totalAmount = 0; //
    $("form").submit(function(event) {
      event.preventDefault(); // Prevent form submission
  
      const expenseName = $("#name-input").val();
      const expenseAmount = parseFloat($("#amount-input").val());//

      if (expenseName.trim() !== ""  &&  !isNaN(expenseAmount)) {
        const totalRow = $("#expenses tr:last");
        const newExpense = $("<tr><td></td><td></td><td>$</td></tr>");
        
        newExpense.find("td").eq(0).text(expenseName);
        newExpense.find("td").eq(1).text(expenseAmount.toFixed(2));
        totalRow.before(newExpense);
        
        totalAmount += expenseAmount; // Update total amount
        $("#total").text(totalAmount.toFixed(2));

        $("#name-input").val("");
        $("#amount-input").val("");
      }

    });
  
    $("#add-button").click(function() {
      $("form").submit(); // Trigger form submission when the button is clicked
    });
  });
  