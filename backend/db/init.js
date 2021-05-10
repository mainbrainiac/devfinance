const Database = require("./config")

const init = {
    async init() {
        const db = await Database()

        db.exec(`CREATE TABLE transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT,
            value NUMBER,
            date STRING
        )`)

        await db.close()
    },
    
    async insert() {
        const db = await Database()

        await db.run(`INSERT INTO transactions (description, value, date) VALUES (
            'Conta de água',
            250,
            '09/05/2021'
        )`)

        await db.close()
    }

}


init.insert()