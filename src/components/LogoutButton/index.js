import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useAuth0 } from "@auth0/auth0-react";



export default function LogoutButton( {setLog} ){
    const { logout } = useAuth0();

    return <Button className="secondary" onClick={ () => { logout({ returnTo: window.location.origin }); setLog() }}> Log out </Button>
}