const { Router } = require("express")
const router = new Router()
const TransactionController = require("../backend/controllers/TransactionController")

router.get("/", (req, res) => {
    res.send("")
})

router.get("/transaction", (req, res) => {
    TransactionController.getTransactions(req, res)
})

router.delete("/transaction/:id", (req, res) => {
    TransactionController.deleteTransaction(req, res)
})


module.exports = router