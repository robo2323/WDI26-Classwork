require_relative '../bank'


describe Bank do
  let(:bank) { Bank.new 'TDD Bank' }

  describe '.new' do
    it 'create a new bank object' do
      expect(bank).to_not eq nil
    end

    it 'assigns bank a name' do
      expect(bank.name).to eq 'TDD Bank'
    end
  end

  describe '#create_account' do

    it 'should create account' do
      bank.create_account('Rob', 200)
      expect(bank.accounts['Rob']).to eq 200
    end

  end
  describe '#deposit' do
    it 'deposits amount to customer account' do
      bank.create_account 'rob', 200
      bank.deposit 'rob', 300
      expect(bank.accounts['rob']).to eq 200 + 300
    end
  end
end