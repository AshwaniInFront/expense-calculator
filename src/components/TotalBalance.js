import React from 'react'

const TotalBalance = () => {
  return (
    <div className='section-balance'>
        <div className='expense-heading'>
            <h2>Expense Tracker</h2>
        </div>
        <div className='total-heading'>
            <h4>your balance</h4>
            <h1>$10200</h1>  
        </div>
        <div className='income-expense-block'>
            <div className='income-section'>
                <h3>income</h3>
                <p>$0.00</p>
            </div>
            <div className='expense-section'>
                <h3>Expense</h3>
                <p>$0.00</p>
            </div>
        </div>
    </div>
  )
}

export default TotalBalance