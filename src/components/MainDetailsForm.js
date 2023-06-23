import React from "react";

function MainDetailsForm({
    name, SetName, 
    address, SetAddress,
    email, SetEmail,
    website, SetWebsite,
    phone, SetPhone,
    bankAccount, SetBankAccount,
    bankName, SetBankName
    }){


    return(
        <>
            <article className='md:grid grid-cols-2 gap-10'  >
                <div className='flex flex-col' >
                <label htmlFor='name'>Enter your Name</label>
                <input type="text" 
                  name = "text" 
                  id = "name" 
                  placeholder = "Enter your name"
                  autoComplete='off'
                  value = {name}
                  onChange = {(e)=> SetName(e.target.value)}
                />
                </div>
                <div className='flex flex-col'>
                <label htmlFor='address'>Enter your Address</label>
                <input type="text" 
                  name = "address" 
                  id = "address" 
                  placeholder = "Enter your address"
                  autoComplete='off'
                  value = {address}
                  onChange = {(e)=> SetAddress(e.target.value)}
                />
                </div>
              </article>
              
              <article className='md:grid grid-cols-3 gap-10'>
                <div className='flex flex-col'>
                <label htmlFor='email'>Enter your Email</label>
                <input type="email" 
                  name = "email" 
                  id = "email" 
                  placeholder = "Enter your email"
                  autoComplete='off'
                  value = {email}
                  onChange = {(e)=> SetEmail(e.target.value)}
                />
                </div>
                <div className='flex flex-col'>
                <label htmlFor='website'>Enter your Website link</label>
                <input type="url" 
                  name = "website" 
                  id = "website" 
                  placeholder = "Enter your webiste link"
                  autoComplete='off'
                  value = {website}
                  onChange = {(e)=> SetWebsite(e.target.value)}
                />
                </div>
                <div className='flex flex-col'>
                <label htmlFor='phone'>Enter your Phone Number</label>
                <input type="number" 
                  name = "phone" 
                  id = "phone" 
                  placeholder = "Enter your Phone Number"
                  autoComplete='off'
                  value = {phone}
                  onChange = {(e)=> SetPhone(e.target.value)}
                />
                </div>
              </article >
              
              <article className='md:grid grid-cols-2 gap-10'>
                <div className='flex flex-col'>
                <label htmlFor='bankaccount'>Enter your Bank Account Number</label>
                <input type="text" 
                  name = "bankaccount" 
                  id = "bankaccount" 
                  placeholder = "Enter your Bank Account Number"
                  autoComplete='off'
                  value = {bankAccount}
                  onChange = {(e)=> SetBankAccount(e.target.value)}
                />
                </div>
                <div className='flex flex-col'>
                <label htmlFor='bankname'>Enter your Bank Account Name</label>
                <input type="text" 
                  name = "bankname" 
                  id = "bankname" 
                  placeholder = "Enter your Bank Name"
                  autoComplete='off'
                  value = {bankName}
                  onChange = {(e)=> SetBankName(e.target.value)}
                />
                </div>
              </article>
        </>
    );
};
export default MainDetailsForm;
