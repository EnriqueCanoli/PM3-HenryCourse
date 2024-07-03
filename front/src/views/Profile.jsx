
import { useSelector } from "react-redux";
import { Profile as Prof } from "../components/primary";

export default function Profile() {
    const userId = useSelector((state) => state.userId)
    console.log(userId)

    return (

        <div>
            <br />
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                Profile
            </h1>
            {userId !== 0 ? (<Prof />) :
                (<p style={{ fontSize: '18px', textAlign: 'center', fontWeight: 'bold', color: 'red', padding: '50px' }}>
                    You must be logged
                    </p>
                )
            }
        </div>
    );
   
}
