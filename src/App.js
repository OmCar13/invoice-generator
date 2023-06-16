
import { useState , useRef} from 'react';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Table from './components/Table';
import Dates from './components/Dates';
import Header from'./components/header';
import MainDetails from './components/MainDetails';
import ClientDetails from './components/ClientDetails';
import  TableForm  from './components/TableForm';
import ReactToPrint from 'react-to-print';
function App() {
  const [showInvoice, setShowInvoice] = useState(true);
  const [name, SetName] = useState("");
  const [address, SetAddress] = useState("");
  const [email, SetEmail] = useState("");
  const [phone, SetPhone] = useState("");
  const [bankName, SetBankName] = useState("");
  const [bankAccount, SetBankAccount] = useState("");
  const [website, SetWebsite] = useState("");
  const [clientName, SetClientName] = useState("");
  const [clientAddress, SetClientAddress] = useState("");
  const [invoiceNumber, SetInvoiceNumber] = useState("");
  const [invoiceDate, SetInvoiceDate] = useState("");
  const [dueDate, SetDueDate] = useState("");
  const [notes, SetNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price,setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef()

  const handlePrint = () => {
    window.print();
  }
  return (
    <>
      <main className="m-5 p-5 md: max-w-xl mb-5 md:max-auto lg:max-w-2xl xl:max-w-4xl xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        
        { showInvoice ?(

          <>
            <ReactToPrint trigger = {()=> <button className="bg-blue-500 text-white 
              font-bold py-2 px-8 rounded shadow 
              border-2 border-blue-500 ml-5
              hover:bg-transparent 
              hover:text-blue-500 
              transition-all duratiom-300">Print / Download</button>}
             content = {()=> componentRef.current}
            />

            <div ref = {componentRef} className='p-5'>
              <Header handlePrint = {handlePrint}/>
              <MainDetails name = {name} address = {address} />
              <ClientDetails clientName = {clientName} clientAddress = {clientAddress}/>
              <Dates dueDate = {dueDate} invoiceDate = {invoiceDate} invoiceNumber = {invoiceNumber}/>
              <Table list = {list} total = {total} setTotal = {setTotal}/>
              <Notes notes = {notes}/>
              <Footer name = {name} address= {address} email = {email} website = {website} phone = {phone} bankAccount = {bankAccount} bankName = {bankName}/>
            
            </div>
            <button  onClick = {()=>setShowInvoice(false) }className='mt-5 bg-blue-500 text-white 
              font-bold py-2 px-8 rounded shadow 
              border-2 border-blue-500 
              hover:bg-transparent 
              hover:text-blue-500 
              transition-all duratiom-300' >Edit Information
            </button>
          </>
      ): (<>
          {/* name, address, email, phone, bank name, bank account number,
          back account holder's name , website, client name, client address,
          invoice number, invoice date, due date, notes,  */}
            <div className='flex flex-col justify-center'>
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

              <article >
                <TableForm description = {description} setDescription = {setDescription} 
                  quantity={quantity} setQuantity={setQuantity}
                  price={price} setPrice={setPrice}
                  amount={amount} setAmount={setAmount}
                  list = {list} setList={setList}
                  total = {total} setTotal={setTotal}
                />
              </article>
              
              
              
              
              
              <label htmlFor='notes'>Enter your Notes</label>
              <textarea name='notes' id='notes' cols = "30" rows = "10" placeholder='Additional Notes'
              value={notes} onChange = {(e)=> SetNotes(e.target.value)}></textarea>
            <button onClick = {()=>setShowInvoice(true) }className='mt-5 bg-blue-500 text-white 
            font-bold py-2 px-8 rounded shadow 
            border-2 border-blue-500 
            hover:bg-transparent 
            hover:text-blue-500 
            transition-all duratiom-300' >Preview Invoice</button>
            </div>
          </>
            

          )}
        
      </main>

    </>
  );
}

export default App;
