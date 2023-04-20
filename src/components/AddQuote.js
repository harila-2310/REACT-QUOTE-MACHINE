import React from 'react'

export default function AddQuote() {
  return (
    
    <div className='cont24' >
        <form className='app'>
            <h1>Add Quote</h1>
            <label>Title </label><br/>
            <input  required='required' style={{width:'20vw'}} placeholder='title of your quote' type='text'/><br/>
            <label>Enter Quote </label><br/>
             <textarea  required='required' style={{width:'20vw',height:'20vh'}} placeholder='enter your quote'></textarea><br/>
             <label>author Name(optional)</label><br/>
             <input style={{width:'20vw'}} placeholder='author name' type='text'/><br/><br/>
             <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
