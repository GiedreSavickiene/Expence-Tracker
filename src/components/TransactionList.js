import React from 'react'

const TransactionList = () => {
    return (
        <div>
            <h3>Istorija</h3>
            <ul className="list">
                <li className="minus">
                    Gryni pinigai <span>-$400</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}

export default TransactionList
