import React from "react"
import { useEffect, useState } from "react"
import {AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import {v4 as uuidv4} from "uuid"
export default function TableForm({description, setDescription, 
    quantity , setQuantity, 
    price, setPrice,
    amount, setAmount,
    list, setList,
    total, setTotal
}){
    const [isEditing, setIsEditing] = useState(false);
    // SUBMIT BUTTON  
    const handleSubmit=(e) =>{
        e.preventDefault()

        if (!description || !quantity || !price){
            alert("Please fill in all the input")
        }
        else{
            const newItems ={
                id: uuidv4(),
                description,
                quantity,
                price, 
                amount
            }
            setDescription("")
            setQuantity("")
            setPrice("")
            setAmount("")
            setList([...list, newItems])
            setIsEditing(false)
            console.log(list)
        }
        
    }
    // Calculate item amount 
    useEffect(()=>{
        const caculateAmount = (amount)=>{
            setAmount(quantity * price)
        }
        caculateAmount(amount)
    },[amount, price, quantity, setAmount])

    // Calculate Total amount of items function
   
    useEffect(()=>{
        let rows = document.querySelectorAll(".amount")
        let sum = 0;
    
        for(let i = 0; i<rows.length;i++){
            if(rows[i].className === "amount"){
                sum += isNaN(rows[i].innerHTML)? 0 : parseInt(rows[i].innerHTML)
                setTotal(sum)
            }
        }
    })
    // Edit button
    const editRow = (id) =>{
        const editingRow = list.find((row)=>row.id === id)
        setList(list.filter((row)=> row.id !==id))
        setIsEditing(true)
        setDescription(editingRow.description)
        setPrice(editingRow.price)
        setQuantity(editingRow.quantity)
    }
    // Delete button
    const deleteRow = (id)=>{
        setList(list.filter((row)=> row.id !==id))
    }
    
    return(
        
        <>
        <form  onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-16">
            <label htmlFor="description">Item Description</label>
            <input type = "text" 
            name="description"
            id = "description"
            placeholder="Item Description"
            value = {description}
            onChange={(e) =>setDescription(e.target.value)}></input>
        </div>
        <div className="md: grid grid-cols-3 gap-10">
        <div className="flex flex-col">
            <label htmlFor="quantity">Quantity </label>
            <input type = "number" 
            name="quantity"
            id = "quantity"
            placeholder="Quantity"
            value = {quantity}
            onChange={(e) =>setQuantity(e.target.value)}></input>
        </div>
        <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input type = "number" 
            name="price"
            id = "price"
            placeholder="Price"
            value = {price}
            onChange={(e) =>setPrice(e.target.value)}></input>
        </div>
        <div className="flex flex-col">
            <label htmlFor="amount">Amount </label>
            <p>{amount}</p>
        </div>
        </div>
        <button className='mb-5 bg-blue-500 text-white 
            font-bold py-2 px-8 rounded shadow 
            border-2 border-blue-500 
            hover:bg-transparent 
            hover:text-blue-500 
            transition-all duratiom-300' >
                {isEditing ? "Editing Row Item" : "Add New Item" }
            
            </button>
        </form>
        <table width='100%' className="mb-10">
        <thead>
          <tr className='bg-gray-100 p-1'>
            <td className='font-bold'>Description</td>
            <td className='font-bold'>Quantity</td>
            <td className='font-bold'>Price</td>
            <td className='font-bold'>Amount</td>
          </tr>

        </thead>
            {list.map(({id, description, quantity, price, amount})=>(
            <React.Fragment key={id}>
       
        <tbody>
          <tr>
            <td>{description}</td>
            <td>{quantity}</td>
            <td>{price}</td>
            <td className="amount">{amount}</td>
            <td><button onClick={()=>deleteRow(id)}><AiOutlineDelete className="text-red-500 font-bold text-xl"/></button></td>
            <td><button onClick={()=>editRow(id)}><AiOutlineEdit className="text-green-500 font-bold text-xl"/></button></td>


          </tr>
        </tbody>

            </React.Fragment>    
            ))}
        </table>
        <div >
            <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">Kshs.
            {total.toLocaleString()}</h2>
        </div>

        </>
    )
}
