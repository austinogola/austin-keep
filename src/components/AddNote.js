import React,{useState,useEffect} from 'react'
import './styles/AddNote.css'
import {db} from '../Firebase'
import {BiPalette} from 'react-icons/bi'
import ColorPlate from './ColorPlate'

function AddNote(){
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const [displayPlate,setDisplayPlate]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(title,content);
        const textarea=document.querySelector('textarea')
        const input=document.querySelector('input')
        db.collection('notes').add({
            title:title,
            content:content,
            color:textarea.style.background
        })
        textarea.value=''
        input.value=''
        textarea.style.height='50px'

    }

    const handleTitleChange=(e)=>{
        e.preventDefault()
        setTitle(e.target.value)

    }
    const handleContentChange=(e)=>{
        e.preventDefault()
        setContent(e.target.value)
        const textarea=document.querySelector('textarea')
        textarea.style.height = "50px";
        textarea.style.height=`${20+textarea.scrollHeight}px`
    }

    const showPlate=()=>{
        setDisplayPlate(!displayPlate)
    }

    useEffect(()=>{
        const colors=document.querySelectorAll('.individualColor')
        const textarea=document.querySelector('textarea')
        const input=document.querySelector('input')

        colors.forEach(color=>{
            color.addEventListener('click',e=>{
                e.preventDefault()
                textarea.style.background=e.target.style.background
                input.style.background=e.target.style.background
            })
        })
    })

    return(
        <div className="AddNote container mt-5 mb-5">
            <form action="" className='row d-flex justify-content-center mx-1' onSubmit={handleSubmit}>
                <div className="form-group col-12 col-md-8 col-lg-7 shadow shadow-lg p-0">
                    <input type="text" className="form-control input" placeholder='Title' 
                    name='title' onChange={handleTitleChange} value={title}/>

                    <textarea name="content" cols="30" rows='4' className='form-control textarea'
                    placeholder='Take a note' onChange={handleContentChange} value={content}>
                    </textarea>
                    <button className='btn border form-control col-12' type='submit'><h3>+</h3></button>
                    <div className="col-1 colorPin"><BiPalette size="20px" onClick={showPlate}/></div>
                    {displayPlate?<ColorPlate/>:''}
                </div>
            </form>
        </div>
    )
}

export default AddNote