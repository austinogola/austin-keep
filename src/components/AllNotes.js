import React, { useEffect } from 'react'
import './styles/AllNotes.css'
import {db} from '../Firebase'

function AllNotes(){

    useEffect(()=>{
        const renderData=(data)=>{
            let newDiv=document.createElement('div')
            let innerDiv=document.createElement('div')
            let titleH=document.createElement('h5')
            let contentP=document.createElement('p')

            newDiv.setAttribute('key',data.id)
            newDiv.style.wordWrap='break-word'
            newDiv.className='p-2 col-12 col-md-4 col-lg-3'

            innerDiv.style.background=`${data.color}`
            innerDiv.className='p-3 shadow'
            innerDiv.style.borderRadius='5px'
            
            titleH.style.textAlign='left'
            contentP.style.textAlign='left'
            titleH.textContent=`${data.title}`
            contentP.textContent=`${data.content}`
    
            innerDiv.appendChild(titleH)
            innerDiv.appendChild(contentP)
            newDiv.appendChild(innerDiv)
            const All=document.querySelector('.allNotes-container')
            All.prepend(newDiv)
    
        }

        db.collection('notes').onSnapshot((snapshot)=>{
            let changes=snapshot.docChanges()
            changes.forEach(change=>{
                if(change.type==='added'){
                    renderData(change.doc.data())
                }
                
            })
        })
    })
    return(
        <div className="AllNotes container" style={{marginTop:'150px'}}>
            <div className="allNotes-container row" data-masonry='{"percentPosition": true }'>
            </div>
        </div>
    )
}

export default AllNotes