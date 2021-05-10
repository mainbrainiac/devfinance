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
    },

    async deleteTransaction(req, res) {
        try {
            const id = req.params.id
            Transaction.deleteById(id)

            res.writeHead(200)
            res.end()
        } catch(err) {
            console.log(err)
        }
    } 

}