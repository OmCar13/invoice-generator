
import { useState , useRef} from 'react';
import Footer from './components/Footer';
import Notes from './components/Notes';
import Table from './components/Table';
import Dates from './components/Dates';
import Header from'./components/header';
import MainDetails from './components/MainDetails';
import MainDetailsForm from './components/MainDetailsForm';
import ClientDetails from './components/ClientDetails';
import ClientDetailsForm from './components/ClientDetailsForm';
import  TableForm  from './components/TableForm';
import ReactToPrint from 'react-to-print';
import NotessForm from './components/NotessForm';
function App() {
  const [showInvoice, setShowInvoice] = useState(true);
  const [name, SetName] = useState("Akhila Anilkumar");
  const [address, SetAddress] = useState("Ostwal, Nalasopara");
  const [email, SetEmail] = useState("anilkumarakhil80@gmail.com");
  const [phone, SetPhone] = useState("8010896671");
  const [bankName, SetBankName] = useState("State Bank of India");
  const [bankAccount, SetBankAccount] = useState("21423636743");
  const [website, SetWebsite] = useState("www.akhila.com");
  const [clientName, SetClientName] = useState("Atharva Sankhe");
  const [clientAddress, SetClientAddress] = useState("Mumbai, Maharashtra");
  const [invoiceNumber, SetInvoiceNumber] = useState("54");
  const [invoiceDate, SetInvoiceDate] = useState("12/02/2003");
  const [dueDate, SetDueDate] = useState("12/04/2003");
  const [notes, SetNotes] = useState("hello, hiii");
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
// THe section below contains the second page i.e the invoice bill view where the bill generation 
// and downloading is possible (Print / Download )
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


{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
{/* THE SECTION BELOW INVOLVES THE FORM VIEW WHICH IS THE FIRST PAGE THAT
 GETS RENDERED INTO THE WEBSITE */}

          {/* THE FOLLOWING ARE THE INPUTS THAT HAS TO BE TAKEN FROM THE USER */}
          {/* name, address, email, phone, bank name, bank account number,
          back account holder's name , website, client name, client address,
          invoice number, invoice date, due date, notes,  */}
            <div className='flex flex-col justify-center'>
              <MainDetailsForm 
              name = {name} SetName = {SetName}  
              address= {address} SetAddress={SetAddress}
              email={email} SetEmail = {SetEmail}
              website = {website} SetWebsite={SetWebsite}
              phone = {phone} SetPhone = {SetPhone}
              bankAccount = {bankAccount} SetBankAccount = {SetBankAccount}
              bankName = {bankName} SetBankName = {SetBankName}
              />
              
              <ClientDetailsForm 
              clientName = {clientName} SetClientName = {SetClientName}
              clientAddress = {clientAddress} SetClientAddress = {SetClientAddress}
              invoiceNumber = {invoiceNumber} SetInvoiceNumber = {SetInvoiceNumber}
              invoiceDate = {invoiceDate} SetInvoiceDate = {SetInvoiceDate}
              dueDate = {dueDate} SetDueDate = {SetDueDate}
              />

              <article >
                <TableForm description = {description} setDescription = {setDescription} 
                  quantity={quantity} setQuantity={setQuantity}
                  price={price} setPrice={setPrice}
                  amount={amount} setAmount={setAmount}
                  list = {list} setList={setList}
                  total = {total} setTotal={setTotal}
                />
              </article>
              
              
              <NotessForm notes = {notes} SetNotes = {SetNotes} setShowInvoice = {setShowInvoice}/>
              
            
            </div>
          </>
            

          )}
        
      </main>

    </>
  );
}

export default App;
