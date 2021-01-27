import React from 'react';
import keepLogo from './imgs/google-keep-144.png'
import reactLogo from './imgs/react-200.png'
import firebaseLogo from './imgs/firebase-96.png'
import {FiPlus,FiArrowRight,FiMoon,FiSun,FiUser} from 'react-icons/fi'
import {BiUserCircle} from 'react-icons/bi'
import './styles/Header.css'


function Header(){
    return(
        <div className="Header d-flex justify-content-center">
            <div className="container row">
                <div className="col-12 d-flex justify-content-start align-items-center p-0">
                    <img src={keepLogo} alt="Keep" style={{width:'40px'}}/>
                    <h4 style={{color:'#757575'}}>Keep</h4>
                    <small style={{color:'#757575'}}><h6>Clone</h6></small>
                </div>
                <div class='col-12 mt-5'>
                    <img src={reactLogo} alt="" style={{width:'55px'}}/>
                    <FiPlus size='24px'/>
                    <img src={firebaseLogo} alt="" style={{width:'52px'}}/>
                    <FiArrowRight size='24px'/>
                    <img src={keepLogo} alt="" style={{width:'52px'}}/>
                </div>
            </div>
        </div>
    )
}


export default Header;