import React from "react";

function ClientDetailsForm({
    clientName, SetClientName,
    clientAddress, SetClientAddress,
    invoiceNumber, SetInvoiceNumber,
    invoiceDate, SetInvoiceDate,
    dueDate, SetDueDate


    }){
    return (
        <>
            < article className = "md:grid grid-cols-2 gap-10 md:mt-16">
                <div className='flex flex-col'>
                  <label htmlFor='clientname'>Enter your Client's Name</label>
                  <input type="text" 
                    name = "clientname" 
                    id = "clientname" 
                    placeholder = "Enter your Client's name"
                    autoComplete='off'
                    value = {clientName}
                    onChange = {(e)=> SetClientName(e.target.value)}
                  />
                </div>

                < div className='flex flex-col'>
                  <label htmlFor='clientaddress'>Enter your Client's Address</label>
                  <input type="text" 
                    name = "clientaddress" 
                    id = "clientaddress" 
                    placeholder = "Enter your Client's Address"
                    autoComplete='off'
                    value = {clientAddress}
                    onChange = {(e)=> SetClientAddress(e.target.value)}
                />

                </div>
              </article>

              <article className = "md:grid grid-cols-3 gap-10">
                <div className='flex flex-col'>
                  <label htmlFor='invoicenumber'>Enter your Invoice Number</label>
                  <input type="number" 
                    name = "invoicenumber" 
                    id = "invoicenumber" 
                    placeholder = "Enter your Invoice Number"
                    autoComplete='off'
                    value = {invoiceNumber}
                    onChange = {(e)=> SetInvoiceNumber(e.target.value)}
                  />
                </div>
                < div className='flex flex-col'>
                  <label htmlFor='invoicedate'>Enter your Invoice Date</label>
                  <input type="date" 
                    name = "invoicedate" 
                    id = "invoicedate" 
                    placeholder = "Enter your Invoice Date"
                    autoComplete='off'
                    value = {invoiceDate}
                    onChange = {(e)=> SetInvoiceDate(e.target.value)}
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='duedate'>Enter your Due Date</label>
                  <input type="date" 
                    name = "duedate" 
                    id = "duedate" 
                    placeholder = "Enter your Due Date"
                    autoComplete='off'
                    value = {dueDate}
                    onChange = {(e)=> SetDueDate(e.target.value)}
                  />
                </div>
              </article>
        </>
    );
};
export default ClientDetailsForm;
