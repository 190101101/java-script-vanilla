const paymentElement = document.getElementById('payment');
const debtElement = document.getElementById('debt');
const additionElement = document.getElementById('addition');

const calculateLoan = () => {
	const loanAmountValue = document.getElementById('loan-amount').value;
	const interestRateValue = document.getElementById('interest-rate').value;
	const monthsToPayValue = document.getElementById('months-to-pay').value;

	const interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
	const monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);

	const debt = (monthlyPayment * monthsToPayValue).toFixed(2);
	const addition = (debt - loanAmountValue).toFixed(2);

	console.log(debt);
	console.log(addition);

	paymentElement.innerHTML = `Monthly Payment: ${monthlyPayment}$`;
	debtElement.innerHTML = `Total Debt: ${debt}$`;
	additionElement.innerHTML = `Percentage: ${addition}$`;
}