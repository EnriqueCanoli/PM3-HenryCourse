import { useEffect, useState } from "react"
import { getUserId } from "../../../helpers";
import { ProfileInfo} from "../../secundary";
import { useSelector } from "react-redux";

export default function Profile(){
    const userId = useSelector((state) => state.userId)

    const [user, setUser] = useState({});

    useEffect(()=>{
        //console.log("user.id ", localStorage.getItem("userId" ))
        getUserId(userId).then(res => {
            setUser(res)
        })
        .catch(error => console.error("there is an error" , error))
    },[])

    return(
        <div>
            {console.log(user)}
            <ProfileInfo name={user.name} email={user.email} dni_number={user.dni_number} birthdate={user.birthdate}/>
        </div>
    )
}