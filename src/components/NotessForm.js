import React from "react";

function NotessForm({notes, SetNotes, setShowInvoice}){
    return(
        <>
            <label htmlFor='notes'>Enter your Notes</label>
            <textarea name='notes' id='notes' cols = "30" rows = "10" placeholder='Additional Notes'
            value={notes} onChange = {(e)=> SetNotes(e.target.value)}></textarea>
            <button onClick = {()=>setShowInvoice(true) }className='mt-5 bg-blue-500 text-white 
            font-bold py-2 px-8 rounded shadow 
            border-2 border-blue-500 
            hover:bg-transparent 
            hover:text-blue-500 
            transition-all duratiom-300' >Preview Invoice</button>
        </>
    );
};

export default NotessForm;
