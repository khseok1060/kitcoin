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
