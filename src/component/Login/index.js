import { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import './index.css'


const Login =(props)=>{

    const userDetails = localStorage.getItem('userDetails')
    console.log(userDetails)
    const navigate = useNavigate()


    if(userDetails === null || userDetails===""){
        console.log('hi')
         navigate('/')
    }
    const [name, setName] = useState('')
    const [passowrd, setPassword] = useState('')
    const [isCorrectUser, setIsCorrectUser] = useState(false)

    const onSubmitLogin =(event)=>{
        event.preventDefault()
        const parsedUserData = JSON.parse(userDetails) 
        console.log(parsedUserData)
        if(parsedUserData === null){
            setIsCorrectUser(true)
        }
        if(name===parsedUserData.name && passowrd === parsedUserData.passowrd){
            setIsCorrectUser(false)
            alert('Login Success')
            navigate("/dashboard")
        }else{
            setIsCorrectUser(true)
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
                {isCorrectUser && <p className='error-msg'>* Enter Valid UserName and Password</p>}
                <button className='btn-login'>Login</button>
                <Link className='btn-register' to = '/register'>
                 Go Register
                </Link>
            </form>
        </div>
    )
}
export default Login