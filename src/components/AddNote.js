import React from 'react'
import './styles/AddNote.css'

function AddNote(){
    const submitHandler=(e)=>{
        e.preventDefault()
    }
    return(
        <div className="AddNote container mt-5 mb-5">
            <form action="" className='row d-flex justify-content-center mx-1' onSubmit={submitHandler}>
                <div className="form-group col-12 col-md-8 col-lg-7 shadow shadow-lg p-0">
                    <input type="text" className="form-control input" placeholder='Title'/>
                    <textarea name="" id="" cols="30" rows="3" className='form-control textarea' placeholder='Take a note'>
                    </textarea>
                    <button className='btn border form-control col-12' type='submit'><h3>+</h3></button>
                </div>
            </form>
            <div className="border"></div>
        </div>
    )
}

export default AddNote