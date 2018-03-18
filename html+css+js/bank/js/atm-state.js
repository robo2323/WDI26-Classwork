// state
const bank = {
  chq: {
    balance: 0
  },
  sav: {
    balance: 0
  },
  // methods
  overDraft: function(currentAcount, amount) {
    const otherAccount = currentAcount === 'sav' ? 'chq' : 'sav';
    const remainder = amount - this[currentAcount].balance;
    this[currentAcount].balance = 0;
    this[otherAccount].balance -= remainder;
  },
  deposit: function(act, amount) {
    this[act].balance = this[act].balance + Number(amount);
  },
  withdraw: function(act, amount) {
    if (this[act].balance >= amount) {
      this[act].balance = this[act].balance - Number(amount);
    } else if (amount < this.chq.balance + this.sav.balance) {
      this.overDraft(act, amount);
    }
  }
};
