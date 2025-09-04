# 💰 dBank dApp

A decentralized banking application (**dBank**) built using **React**, **Solidity**, **Ethereum**, and **MetaMask**.  
This project demonstrates how blockchain technology can be used to create a transparent and secure banking system with features like deposits, withdrawals, and interest earning.

---

## 🚀 Features
- 🔗 **Decentralized** – No central authority, powered by Ethereum blockchain.
- 👛 **MetaMask Integration** – Connect wallet for authentication and transactions.
- 💸 **Deposit & Withdraw** – Seamless ETH deposits and withdrawals.
- 📈 **Interest Mechanism** – Earn interest on your deposits.
- 🔒 **Smart Contracts** – Secure handling of funds using Solidity.

---

## 🛠 Tech Stack
- **Frontend**: [React]  
- **Blockchain**: [Ethereum]
- **Smart Contracts**: [Solidity]  
- **Wallet**: [MetaMask]
- **Web3 Integration**: [web3.js]

---


## ⚡ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/nihal-25/dBank.git
cd dBank
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Compile & migrate smart contracts
Make sure you have [Truffle](https://trufflesuite.com/) and [Ganache](https://trufflesuite.com/ganache/) installed.
```bash
truffle compile
truffle migrate --reset
```

### 4️⃣ Run the React frontend
```bash
npm start
```

---

## 🏦 How It Works
1. Connect your **MetaMask wallet**.  
2. Deposit ETH into the **dBank smart contract**.  
3. Earn interest over time.  
4. Withdraw ETH + earned interest back to your wallet.  

---

## 📸 Screenshots

<img width="300" height="400" alt="image" src="https://github.com/user-attachments/assets/59d6abdf-8906-48e4-8f6b-dafbafdbe186" />

---

## 📜 Smart Contract
Example snippet from `dBank.sol`:
```solidity
function deposit() public payable {
    // Deposit ETH and start earning interest
}

function withdraw() public {
    // Withdraw ETH + interest
}
```

---


## 👨‍💻 Author
**Nihal Manjunath**  
🔗 [GitHub](https://github.com/nihal-25)
