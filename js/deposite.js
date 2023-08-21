


document.getElementById('btn-deposite').addEventListener('click', function(){
    const newDepositeAmount = getInputValueById('deposite-field');
    const previousDepositeAmount = getElementValueById('deposite-total');
    const currentDepositeAmount = previousDepositeAmount + newDepositeAmount;
    setTextElementById('deposite-total', currentDepositeAmount);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    setTextElementById('balance-total', newBalanceTotal);
})