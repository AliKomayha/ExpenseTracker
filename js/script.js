
$(document).ready(function() {

    $("form").submit(function(event) {
      event.preventDefault(); // Prevent form submission
  
      const expenseName = $("#name-input").val();
      const expenseAmount = $("#amount-input").val();

      if (expenseName.trim() !== ""  && expenseAmount.trim() !== "") {
        const totalRow = $("#expenses tr:last");
        const newExpense = $("<tr><td></td><td></td></tr>");
        
        newExpense.find("td").eq(0).text(expenseName);
        newExpense.find("td").eq(1).text(expenseAmount);
        totalRow.before(newExpense);
        
        $("#name-input").val("");
        $("#amount-input").val("");
      }

    });
  
    $("#add-button").click(function() {
      $("form").submit(); // Trigger form submission when the button is clicked
    });
  });
  