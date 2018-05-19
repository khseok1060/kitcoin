const CryptoJS = require("crypto-js");

class TxOut {
  constructor(address, amount) {
    this.address = address;
    this.amount = amount;
  } 
};


class TxIn {
  // uTxOutID
  // uTXOutIndex
  // signature
}

class Transaction {
  //ID
  // TxIns[]
  // TxOut[]
}

class UTxOut {
  constructor(uTxOutId, uTxOutIndex, address, amount) {
    this.uTxOutId = uTxOutId;
    this.uTxOutIndex = uTxOutIndex;
    this.address = address;
    this.amount = amount;
  }
}

let uTxOuts = [];

const getTxId = tx => {
  const txInContent = tx.txIns
    .map(txIn => txIn.uTxOutId + txIn.uTxOutIndex)
    .reduce((a, b) => a + b, "");

  const txOutContent = tx.txOuts
    .map(txOut => txOut.address + txOut.amount)
    .reduce((a, b) => a + b, "");

  return CryptoJS.SHA256(txInContent + txOutContent).toString();
};
