const expenseBtn = document.getElementById('expense-btn');
const typeInput = document.getElementById('type-input');
const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const amountInput = document.getElementById('amount-input');

const tbodyInherit = document.querySelector('.inherit');

expenseBtn.addEventListener('click', e => {
    e.preventDefault();

    let newTr = document.createElement('tr');
    newTr.classList.add('table-row-header');
    tbodyInherit.append(newTr);

    let newDataType = document.createElement('td');
    let newDataName = document.createElement('td');
    let newDataDate = document.createElement('td');
    let newDataAmount = document.createElement('td');

    newDataType.textContent = typeInput.value;
    newDataName.textContent = nameInput.value;
    newDataDate.textContent = dateInput.value;
    newDataAmount.textContent = '$' + amountInput.value;

    newTr.append(newDataType);
    newTr.append(newDataName);
    newTr.append(newDataDate);
    newTr.append(newDataAmount);
});