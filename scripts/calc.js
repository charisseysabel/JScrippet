var keys = document.querySelectorAll("button");
var operators = ["+", "-", "*", "/"];
var decimal = false;

// add click events to all buttons
for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		// get value of button clicked
		var btnVal = this.getAttribute("data-value");
		var display = document.querySelector(".display");
		var displayVal = display.innerHTML;

		if(btnVal === "AC" || btnVal === "CE") {
			display.innerHTML = "";
			decimal = false;
		}
		else if(btnVal === "=") {
			var equation = displayVal;
			var lastChar = equation[equation.length - 1];
			
			// Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			// Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				display.innerHTML = eval(equation);
				
			decimal = false;
		}
		else if(operators.indexOf(btnVal) > -1) {
			// Operator is clicked
			// Get the last character from the equation
			var lastChar = displayVal[displayVal.length - 1];
			
			// Only add operator if input is not empty and there is no operator at the last
			if(displayVal != '' && operators.indexOf(lastChar) == -1) 
				display.innerHTML += btnVal;
			
			// Allow minus if the string is empty
			else if(displayVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && displayVal.length > 1) {
				// Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
				display.innerHTML = displayVal.replace(/.$/, btnVal);
			}
			
			decimal =false;
		}
		
		// Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
		else if(btnVal == '.') {
			if(!decimal) {
				display.innerHTML += btnVal;
				decimal = true;
			}
		}
		
		// if any other key is pressed, just append it
		else {
			display.innerHTML += btnVal;
		}
		
		// prevent page jumps
		e.preventDefault();

	}
}
