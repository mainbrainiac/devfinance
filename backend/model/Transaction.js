const Database = require("../db/config")

class Transaction {
    constructor({date, description, value, id}) {
        this.id = id || null
        this.description = description
        this.date = date
        this.value = value
    }    
}

async function getTransactions() {
    const db = await Database()

    const transactionsDB = await db.all("SELECT * FROM transactions")
    const transactions = transactionsDB.map((transaction) => new Transaction(transaction))

    await db.close()

    return transactions
}

async function deleteById(id) {
    const db = await Database()

    db.exec(`DELETE FROM transactions WHERE id = ${id}`)

    await db.close()
}



module.exports = {
    getTransactions,
    deleteById
}


