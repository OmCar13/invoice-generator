import React from 'react'

function Dates({dueDate, invoiceDate, invoiceNumber}) {
  return (
    <>
        <article className="mt-10 mb-14 flex items-end justify-end">
          <ul>
            <li className='p-1'><spam className = "font-bold">Due Date: </spam> {dueDate}</li>
            <li className='bg-gray-100'><span className = "font-bold">Invoicer Number: </span>{invoiceNumber}</li>
            <li className='p-1'><span className = "font-bold">Invoice Date: </span>{invoiceDate}</li>
          </ul>
        </article>
    </>
  )
}

export default Dates
