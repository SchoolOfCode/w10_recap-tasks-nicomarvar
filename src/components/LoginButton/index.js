import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useAuth0 } from "@auth0/auth0-react";



export default function LoginButton(){
    const { loginWithRedirect } = useAuth0();

    return <Button type="primary" onClick={ () => { loginWithRedirect(); }}> Log in </Button>
}