import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    return (
        <>
            <h3>Pridėti naują operaciją</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Tekstas</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Rašyti tekstą..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Suma <br />
                        (neigiamas - išlaidos, teigiamas - pajamos)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                        placeholder="Rašyti sumą..." />
                </div>
                <button className="btn">Pridėti operaciją</button>
            </form>
        </>

    )
}

export default AddTransaction
