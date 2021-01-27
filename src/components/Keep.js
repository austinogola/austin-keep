import React from 'react';
import Header from './Header'
import AddNote from './AddNote'
import AllNotes from './AllNotes'


function Keep(){
    return(
        <div className="Keep">
            <Header/>
            <AddNote/>
            <AllNotes/>
        </div>
    )
}


export default Keep;