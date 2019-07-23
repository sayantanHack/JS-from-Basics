class BankAccount {
  
  // this is constructor for defining
  constructor (owner, balance){
    this.owner = owner;
    this.balance = balance;
  }
  // These are the fuctions
  showBalance(){
    console.log("Balance is : "+ this.balance+ ' EUR');
  }
  
  deposit(amount){
    console.log("Depositing "+ amount+ " EUR");
    this.balance += amount;
    this.showBalance();
  }
  withdraw(amount){
    if(amount> this.balance){
      console.log("Withdrawl Deniedd!! ");
    }
    else{
      console.log('Withdrawing '+ amount+ " EUR");
      this.balance -= amount;
      this.showBalance();
    }
  }
}

const newAccount = new BankAccount("will namesron", 500);

newAccount.withdraw(405);
