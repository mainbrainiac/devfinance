const { Router } = require("express")
const router = new Router()
const TransactionController = require("../backend/controllers/TransactionController")

router.get("/", (req, res) => {
    res.send(
        "<h1>Oi</h1>"
    )
})

router.get("/transaction", (req, res) => {
    TransactionController.getTransactions(req, res)
})


module.exports = router