const Transaction = require("../model/Transaction")

module.exports = {
    
    async getTransactions(req, res) {
        try {
            const transactions =  await Transaction.getTransactions()

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(transactions))
        } catch(err) {
            console.log(err)
        }
    }

}