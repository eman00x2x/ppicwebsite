function calculatePayment() {   
    var price = parseFloat(document.getElementById('price').value);
    var term = parseFloat(document.getElementById('term').value);
    var dp = parseFloat(document.getElementById('dp').value);
    var rate = parseFloat(document.getElementById('rate').value);



    if (isNaN(price) || isNaN(term) || isNaN(dp) || isNaN(rate)) {
        document.getElementById('result').style.display = 'none';
        return; 
    } else {
        document.getElementById('result').style.display = 'block';
    }

    var principal = price - dp;

    var monthlyRate = rate / 12 / 100;

    var numberOfPayments = term * 12;

    var mortgagePayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    document.getElementById('monthly-payment').innerText = mortgagePayment.toFixed(2);
}

function updateResult() {
    calculatePayment(); 

}
document.getElementById('price').addEventListener('input', updateResult);
document.getElementById('term').addEventListener('input', updateResult);
document.getElementById('dp').addEventListener('input', updateResult);
document.getElementById('rate').addEventListener('input', updateResult);

calculatePayment();
