
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Account {
  id?: number;
  owner: string;
  balance: number;
}

const AccountDashboard: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [newAccount, setNewAccount] = useState<Account>({ owner: '', balance: 0 });

  const fetchAccounts = async () => {
    const response = await axios.get('http://localhost:8081/api/accounts');
    setAccounts(response.data);
  };

  const createAccount = async () => {
    if (!newAccount.owner || newAccount.balance <= 0) return;
    await axios.post('http://localhost:8081/api/accounts', newAccount);
    setNewAccount({ owner: '', balance: 0 });
    fetchAccounts();
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded">
      <h2 className="text-2xl font-bold mb-4">Bank Accounts</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Owner Name"
          className="border p-2 mr-2"
          value={newAccount.owner}
          onChange={(e) => setNewAccount({ ...newAccount, owner: e.target.value })}
        />
        <input
          type="number"
          placeholder="Balance"
          className="border p-2 mr-2"
          value={newAccount.balance}
          onChange={(e) => setNewAccount({ ...newAccount, balance: parseFloat(e.target.value) })}
        />
        <button
          onClick={createAccount}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Account
        </button>
      </div>
      <ul>
        {accounts.map((account) => (
          <li key={account.id} className="border-b py-2">
            <strong>{account.owner}</strong> — ${account.balance.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountDashboard;
