



document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    setTextElementById('withdraw-total', currentWithdrawAmount);

    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementById('balance-total', newBalanceTotal);
})