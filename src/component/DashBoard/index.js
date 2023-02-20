import {useNavigate} from 'react-router-dom'


import './index.css'

const DashBoard =(props)=>{
    const navigate = useNavigate()

    const userDetails = localStorage.getItem('userDetails')
    console.log(userDetails)
    if(userDetails === null){
        console.log('hi')
        navigate('/')
    }

    const onClickLogout=()=>{
        localStorage.removeItem('userDetails')
        navigate('/')
    }



    return(
        <div>
            <h1>DashBoard</h1>
            <button onClick={onClickLogout}>Logout</button>
        </div>
    )

}

export default DashBoard