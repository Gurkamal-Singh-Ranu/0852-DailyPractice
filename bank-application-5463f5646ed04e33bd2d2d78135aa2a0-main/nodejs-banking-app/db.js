const mysql = require('mysql2')

const client = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '1234',
    database: 'loginsystem',
})
const createNewAccount = ({ acId, acNm, balance }, onCreate = undefined) => {
    client.execute(`insert into account values (?,?,?)`, [acId, acNm, balance], (err, res) => {
        if (err) console.log(`\n ❌ Problem In Creating the Customer`)
        else {
            console.log(`\n ✅ New Customer Created Successfully`)
            if(onCreate) onCreate(`✅ New Customer Created Successfully`)
        }
    })
}

const withdraw = ({ acId, amount }, onWithdraw = undefined) => {
    client.execute(`select acbalance from account where ac_id = ?`, [acId], (err, res) => {
        if (err) {
            console.log(`\n ❌ Problem In Withdrawing`)
        } else {
            console.log(res);
            const balance = parseFloat(res[0].acbalance)
            const newBalance = balance - parseFloat(amount)

            client.execute(`update account set acbalance = ? where ac_id = ?`, [newBalance, acId], (err, res) => {
                if (err) console.log(`\n ❌ Problem In Withdrawing`)
                else {
                    console.log(`\n ✅ Amount ${amount} Withdrawal Successfully`)
                    if(onWithdraw) onWithdraw(`✅ Amount ${amount} Withdraw Successfully`)
                }
            })
        }
    })
}

const deposit = ({ acId, amount }, onDeposit = undefined) => {
    client.execute(`select acbalance from account where ac_id = ?`, [acId], (err, res) => {
        if (err) {
            console.log(`\n ❌ Problem In Deposit`)
            // console.log(res[0].acbalance);
        }
        else {
            // console.log(res[0].acbalance);
            const balance = parseFloat(res[0].acbalance)
            const newBalance = balance + parseFloat(amount)

            client.execute(`update account set acbalance = ? where ac_id = ?`, [newBalance, acId], (err, res) => {
                if (err) console.log(`\n ❌ Problem In Depositing`)
                else  {
                    console.log(`\n ✅ Amount ${amount} Deposited Successfully`)

                    if(onDeposit) onDeposit(`✅ Amount ${amount} Deposited Successfully`)
                }
            })
        }
    })
}

const transfer = ( {srcId, destId, amount }, onTransfer = undefined) => {
    withdraw({ acId : srcId, amount }, msgWd => {
        deposit({ acId : destId, amount }, msgDp => {
            if(onTransfer) onTransfer( `✅ Amount ${amount} Transferred Successfully` )
        })
    })
}

const balance  = (acId, onBalance = undefined) => {
    console.log(acId)
    client.execute(`select acbalance from account where ac_id = ?`, [acId], (err, res) => {
        if (err) {
            console.log(`\n ❌ Problem In Fetching the balance`)
            console.log(err)
        } else {
            const balance1 = parseFloat(res.rows[0].balance)
            console.log(`\n 💰 Your Account Balance Is : ${balance1}`)
            if(onBalance) onBalance(balance1)
        }
    })
}

module.exports = {
    createNewAccount, deposit, withdraw, transfer, balance
}





