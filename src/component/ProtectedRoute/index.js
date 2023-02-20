import { useNavigate } from "react-router-dom"

const PathRouteProps=()=>{
    const navigate = useNavigate()
    const userDetails = localStorage.getItem('userDetails')
    if(userDetails === null || userDetails===""){
        console.log('hi')
         navigate('/')
    }
}
export default PathRouteProps