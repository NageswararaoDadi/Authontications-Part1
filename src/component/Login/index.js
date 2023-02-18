import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'


const Login =()=>{

    const [name, setName] = useState('')
    const [passowrd, setPassword] = useState('')

    const onSubmitLogin =(event)=>{
        event.preventDefault()
        const userData = localStorage.getItem('userDetails')
        const parsedUserData = JSON.parse(userData) 
        console.log(parsedUserData)
        if(name===parsedUserData.name && passowrd === parsedUserData.passowrd){
            alert('Login Success')
        }
    }

    const onChangeUserName=(event)=>{
        setName(event.target.value)
    }

    const onChangePassword=(event)=>{
        setPassword(event.target.value)
    }

    return(
        <div className="login-container">
            <form className='login-form' onSubmit={onSubmitLogin}>
                <h2 className='form-head'>Login Form</h2>
                <div>
                    <label htmlFor='userName'>User Name</label>
                    <br />
                    <input onChange={onChangeUserName} type='text' id='userName' placeholder='User Name' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <br />
                    <input onChange={onChangePassword} type='password' id='password' placeholder='Password' />
                </div>
                <button className='btn-login'>Login</button>
                <Link className='btn-register' to = '/register'>
                 Go Register
                </Link>
            </form>
        </div>
    )
}
export default Login