import React from 'react'

const IncomeExpences = () => {
    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Pajamos</h4>
                    <p className="money plus">+$0.00</p>
                </div>
                <div>
                    <h4>Išlaidos</h4>
                    <p className="money minus">-$0.00</p>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpences
