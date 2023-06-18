import React from 'react'
import NewTransaction from './NewTransaction'

const History = ({expense}) => {
  
  console.log(expense,'expense')

  return (
    <div className='history-section'>
      {expense.map((item) => {
        return(
          <>
            <div className='expense-tracker-heading'>
              <h3>History</h3>  
            </div>
            <div className='history-money-track'>
              <p>{item.text}</p>
              <span>{item.amount}</span>
            </div>
          </>
        )
      })}
      <NewTransaction 
        // text={text}
        // amount={amount}
      />
    </div>
  )
}

export default History