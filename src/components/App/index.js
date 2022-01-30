import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

import articles from "../../libs/articles";
import ArticleSection from "../Article";
import LogoutButton from '../LogoutButton';
import LoginPrompt from '../LogInPrompt';

function App() {

    const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
        <Auth0Provider 
        domain="dev-qpqkumcm.us.auth0.com"
        clientId="0jhMekkezTnzDN9Ai1EKp4WiHmLxpJ2F"
        redirectUri={window.location.origin}>
            <div>
            <LogoutButton />
            <ArticleSection articles={articles}/>
            </div>
        </Auth0Provider>)
    :
      (<Auth0Provider 
        domain="dev-qpqkumcm.us.auth0.com"
        clientId="0jhMekkezTnzDN9Ai1EKp4WiHmLxpJ2F"
        redirectUri={window.location.origin}>
            <LoginPrompt/>
        </Auth0Provider>)
}

export default App;
