//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.account = {
      isActive: false,
      balance: 0
    };
  }

  open() {
    if (this.account.isActive) throw new ValueError();
    this.account.isActive = true;
    this.account.balance = 0;
  }

  close() {
    if (!this.account.isActive) throw new ValueError();
    this.account.isActive = false;
    this.account.balance = 0;
  }

  deposit(amount) {
    if (!this.account.isActive) throw new ValueError();
    if (amount <= 0) throw new ValueError();
    this.account.balance += amount;
  }

  withdraw(amount) {
    if (!this.account.isActive) throw new ValueError();
    if (amount <= 0) throw new ValueError();
    if (this.account.balance < amount) throw new ValueError();
    this.account.balance -= amount;
  }

  get balance() {
    if (!this.account.isActive) throw new ValueError();
    return this.account.balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
