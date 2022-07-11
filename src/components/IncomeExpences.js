import React from 'react'

const IncomeExpences = () => {
    return (
        <div>
            <div class="inc-exp-container">
                <div>
                    <h4>Pajamos</h4>
                    <p id="money-plus" class="money plus">+$0.00</p>
                </div>
                <div>
                    <h4>Išlaidos</h4>
                    <p id="money-minus" class="money minus">-$0.00</p>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpences
