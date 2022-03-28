import React from 'react'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import insta from '../../assets/instagram.png'

function OathLogin() {
    return ( 
        <div className='text-center mt-2'>
            <a href="http://localhost:3001/authors/googleLogin">
            <img className='oath-img pointer' src={google} alt="google logo"/>
            </a>
            <a href="https://www.instagram.com">
            <img className='oath-img pointer' src={insta} alt="insta logo"/>
            </a>
            <a href="https://www.facebook.com/">
            <img className='oath-img pointer' src={facebook} alt="facebook logo"/>
            </a>
        </div>
     );
}

export default OathLogin;