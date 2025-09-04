import React, { useState, useEffect } from 'react';
import DbankABI from hardhat/dbank-hardhat/artifacts/contracts/DBank.sol/DBank.json;
import { ethers } from 'ethers';
import './App.css';

// Replace with your contract's deployed address
const contractAddress = 'YOUR_CONTRACT_ADDRESS_HERE';

// Replace with your contract's ABI from Remix
const contractABI = [
  // Only necessary parts of ABI
  "function deposit() external payable",
  "function withdraw(uint256 etherAmount) external",
  "function getBalance() external view returns (uint256)",
  "event Deposited(address indexed user, uint256 amount)",
  "event Withdrawn(address indexed user, uint256 amount, uint256 interest)"
];

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
      await tempProvider.send("eth_requestAccounts", []);
      const tempSigner = tempProvider.getSigner();
      const tempAccount = await tempSigner.getAddress();
      const tempContract = new ethers.Contract(contractAddress, contractABI, tempSigner);

      setProvider(tempProvider);
      setSigner(tempSigner);
      setAccount(tempAccount);
      setContract(tempContract);
    } else {
      alert("Please install MetaMask.");
    }
  };

  const fetchBalance = async () => {
    if (contract) {
      const bal = await contract.getBalance();
      setBalance(parseFloat(ethers.utils.formatEther(bal)));
    }
  };

  const handleDeposit = async () => {
    if (!depositAmount || isNaN(depositAmount)) return alert("Enter a valid amount");

    const tx = await contract.deposit({ value: ethers.utils.parseEther(depositAmount) });
    await tx.wait();
    fetchBalance();
    setDepositAmount('');
  };

  const handleWithdraw = async () => {
    if (!withdrawAmount || isNaN(withdrawAmount)) return alert("Enter a valid amount");

    const tx = await contract.withdraw(withdrawAmount);
    await tx.wait();
    fetchBalance();
    setWithdrawAmount('');
  };

  useEffect(() => {
    if (contract) {
      fetchBalance();
    }
  }, [contract]);

  return (
    <div className="App">
      <h1>DBank 💰</h1>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p>Connected: {account}</p>
          <p>Balance: {balance} ETH</p>

          <div>
            <input
              type="text"
              placeholder="Amount to deposit (ETH)"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
            <button onClick={handleDeposit}>Deposit</button>
          </div>

          <div>
            <input
              type="text"
              placeholder="Amount to withdraw (ETH)"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
            <button onClick={handleWithdraw}>Withdraw</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
