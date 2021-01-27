import React, { useEffect } from 'react'
import './styles/AllNotes.css'

function AllNotes(){
    const dd=[
        'mp3tecahola m OBhvidkbvisdbv vbbvsiodbvd bvidbviosbv dvidbvsita vdsv SBSBB SDBDSBsB BSbsbsb sbsbswww.mp3teca.plus sdsadasdasdsa\tdwwwwwwwww\twdsASas',
        'scherhrhedndfnag',
        'dkvndksjdbvlksbod',
        'dknviowdvhdowviodnvwdbw0by9eihwiwndbid',
        'jdkbsvjbdbviodbvdsiovbdoivvhdioskvbsvbisobvidhihoooooovbbbbbbbbU8U0R8U084GBVJDBVBUDBVR',
        'DJVNJ',
        'qljbvqeivbepiqhv9qei'
    ]
    return(
        <div className="AllNotes container">
            <div className="allNotes-container row" data-masonry='{"percentPosition": true }'>
            {dd.map(d=>{
                return <div key={d} className='p-2 col-3 ' style={{wordWrap:'break-word'}}>
                    <div className='border p-1 shadow'><p style={{textAlign:'left'}}>{d}</p></div>
                </div>
            })}
            </div>
        </div>
    )
}

export default AllNotes