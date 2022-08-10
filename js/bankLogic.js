class Account {
  constructor(account, pin, balance = 0) {
    this.account = account;
    this.balance = balance;
    this.pin = pin;
    this.isActive = true;
  }

  withdraw(amountToWithdraw, pin) {
    if (this.pin == pin && amountToWithdraw <= this.balance) {
      this.balance -= amountToWithdraw;
    }
    else if (this.pin != pin){
        console.log("Wrong PIN");
    }
    else if (amount > this.balance) {
        console.log("Account balance Insufficient");
    }
  }

  deposit(amountToDeposit) {
    this.balance += amountToDeposit;
  }
}

// Authenticate user and get account details
const form = document.querySelector('.form');
const acc = form[0].value;
const pin = form[1].value;
const loginBtn = document.querySelector('#btn');
var newAcc;

form.addEventListener('submit', (e) => {
  const acc = form[0].value;
  const pin = form[1].value;
  e.preventDefault();
  newAcc = validate(acc, pin)

  if (newAcc) {
    e.target.style.display = 'none';
  }
})

const validate = (acc, pin) => {
  if (acc == 34113497 && pin == 1234) {
    const newAccount = new Account(34113497, 1234, 20000);
    document.querySelector('.accountNo').innerHTML += newAccount.account;
    document.querySelector('.balance').innerHTML += newAccount.balance;
    return newAccount;
  }
}

console.log(newAcc);


const depButton = document.querySelector('.dep-btn');
const withdrawButton = document.querySelector('.withdraw-btn');

// account.withdraw(20000, 1234)
// console.log(account)

depButton.addEventListener('click', (e) => {
  e.target.parentNode.innerHTML += `<p>Enter amount to deposit</p>
  <input type="text" class="deposit" />
  <button class="add-close">Deposit</button>`;

  // Deposit and show balance
  // const bal = Number(document.querySelector('.balance').textContent);
  const amount = Number(document.querySelector('.deposit').value);
  console.log(amount)
  newAcc.withdraw(amount, 1234);
  document.querySelector('.balance').innerHTML = newAcc.balance;
  document.querySelector('.add-close').addEventListener('click', (e) => {
    e.target.parentNode.innerHTML = `<button class="dep-btn btn">Deposit</button>`
  })
})
console.log(newAcc);

withdrawButton.addEventListener('click', (e) => {
  e.target.parentNode.innerHTML += `
  <p>Enter amount to withdraw</p>
  <input type="text" class="withdraw" />
  <button class="withdraw-close">Withdraw</button>`;

  // Withdraw and show balance
  // const bal = Number(document.querySelector('.balance').textContent);
  const amount = Number(document.querySelector('.withdraw').value);
  console.log(amount);
  newAcc.withdraw(amount, 1234);
  document.querySelector('.balance').innerHTML = newAcc.balance;
  document.querySelector('.withdraw-close').addEventListener('click', (e) => {
    e.target.parentNode.innerHTML = `<button class="dep-btn btn">Withdraw</button>`
  })
})



