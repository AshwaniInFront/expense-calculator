import React, { useState } from 'react'

const NewTransaction = () => {
    
  const[text,setText] = useState()
  const[amount,setAmount] = useState("")


  console.log(text,amount,'text','amount')

  const handleExpense = () => {
    
  }


  return (
    <div className='section-transaction'>
         <div className='expense-tracker-heading'>
            <h3>Add new transaction</h3> 
            <form className='transaction-form' onSubmit={handleExpense}>
                <div className='form-group'>
                    <label>text</label>
                    <input type='text' placeholder='Enter text...' 
                    value={text}
                    onChange={(e) => setText(e.target.value)}               
                    />
                </div>
                <div className='form-group'>
                    <label>Amount  negative - expense, positive - income </label>
                    <input type='number' placeholder='Enter amount...' 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <div className='btn btn-primary'>
                    Add transaction
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewTransaction