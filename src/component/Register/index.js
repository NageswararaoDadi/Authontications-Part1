import {useState} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Reister = ()=>{

    const [userDetails,setUserDetails] = useState({name:'',passowrd:'',dob:''})

    const onClickRegister=(event)=>{
        event.preventDefault()
        let userData = JSON.stringify(userDetails)
        localStorage.setItem('userDetails',userData)
        console.log(userData)
        alert('Successfully Register User Details')
    }

    const onChangeName=(event)=>{
        setUserDetails({...userDetails,name:event.target.value})
    }

    const onChangePassword=(event)=>{
        setUserDetails({...userDetails,passowrd:event.target.value})
    }

    const onChangeDOB=(event)=>{
        setUserDetails({...userDetails,dob:event.target.value})
    }


    return(
        <div className="regisrter-container">
            <form className='register-form' onSubmit={onClickRegister}>
                <h2 className='form-head'>Registation Form</h2>
                <div>
                    <label htmlFor='userName'>User Name</label>
                    <br />
                    <input onChange={onChangeName} type='text' id='userName' placeholder='User Name' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <br />
                    <input onChange={onChangePassword} type='password' id='password' placeholder='Password' />
                </div>
                <div>
                    <label htmlFor='DOB'>DOB</label>
                    <br />
                    <input onChange={onChangeDOB} type='Date' id='DOB'  />
                </div>
                <button  className='btn-register'>Register</button>
                <Link className='btn-login' to='/login'>
                 Go Login
                </Link>
            </form>
        </div>
    )
}

export default Reister