document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("bt");
    const resultDisplay = document.getElementById("pay");
    const totalDisplay = document.getElementById("term");

    calculateButton.addEventListener("click", function () {
        console.log("Calculate button clicked"); 

        // Get input values
        const mortgageAmount = parseFloat(document.getElementById("floatingInputGroup1").value);
        const mortgageTerm = parseInt(document.getElementById("year").value);
        const interestRate = parseFloat(document.getElementById("percent").value);
        
        // Check for valid inputs
        if (isNaN(mortgageAmount) || isNaN(mortgageTerm) || isNaN(interestRate)) {
            resultDisplay.innerText = "Please enter valid numbers for all fields.";
            return;
        }

        // // Debug: Log the input values
        // console.log("Mortgage Amount:", mortgageAmount);
        // console.log("Mortgage Term:", mortgageTerm);
        // console.log("Interest Rate:", interestRate);
        
        // Calculate based on mortgage type
        const isRepayment = document.getElementById("flexRadioDefault1").checked;
        let monthlyPayment;
        let totalAmt;

        if (isRepayment) {
            // Repayment Mortgage Calculation
            const monthlyInterestRate = interestRate / 100 / 12;
            const numberOfPayments = mortgageTerm * 12;
            monthlyPayment = mortgageAmount * 
                (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
                (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
            totalAmt = monthlyPayment * numberOfPayments;
        } else {
            // Interest-Only Mortgage Calculation
            const monthlyInterestRate = interestRate / 100 / 12;
            monthlyPayment = mortgageAmount * monthlyInterestRate;
            totalAmt = monthlyPayment * (mortgageTerm * 12);
        }

        // Debug: Log the calculated results
        console.log("Monthly Payment:", monthlyPayment);
        console.log("Total Amount:", totalAmt);

        // Display the result
        resultDisplay.innerText = `£${monthlyPayment.toFixed(2)}`;
        totalDisplay.innerText = `£${totalAmt.toFixed(2)}`;

        // Toggle visibility
        document.getElementById("rightContent1").style.display = "none";
        document.getElementById("right2").style.display = "block";
    });
});
