class Bank
  attr_reader :name
  attr_reader :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end

  def create_account(name, amount)
    @accounts[name] = amount
  end

  def deposit(name, amount)
    @accounts[name] += amount
  end
end