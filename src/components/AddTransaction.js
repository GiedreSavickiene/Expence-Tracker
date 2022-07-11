import React, { useState } from 'react'

const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    return (
        <div>
            <h3>Pridėti naują operaciją</h3>
            <form >
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
        </div>

    )
}

export default AddTransaction
