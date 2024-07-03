import { useSelector } from "react-redux";
import { Register } from "../components/primary";


export default function Home() {
    const userId = useSelector((state) => state.userId)

    return (
        <div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color: 'white', margin: '50px' }}>
                
            </h1>
            {userId === 0 ? (<Register />) :
                (<p style={{ fontSize: '34px', textAlign: 'center', fontWeight: 'bold', color: 'green', padding: '50px' }}>
                    Close session to register a new User </p>
                )
            }
        </div>
    );
}

// navbar -> profile -> info eschedule history
//navbar - <seachbar -> contact us about us services