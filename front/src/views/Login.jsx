import { useSelector } from "react-redux";
import { Login, } from "../components/primary";


export default function Home() {
    const userId = useSelector((state) => state.userId)

    return (
        <div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', color: 'white', margin: '50px' }}>
                Login
            </h1>
            {userId === 0 ? (<Login />) :
                (<p style={{ fontSize: '34px', textAlign: 'center', fontWeight: 'bold', color: 'green', padding: '50px' }}>
                    Currently you are logged </p>
                )
            }
        </div>
    );
}

// navbar -> profile -> info eschedule history
//navbar - <seachbar -> contact us about us services