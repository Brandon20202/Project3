import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {Auth0Provider} from './react-auth0-spa';
// import config from './auth_config.json';
// import history from './utils/history';

// const onRedirectCallback = (appState) => {
// 	history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
// };

ReactDOM.render(
	// <Auth0Provider domain={config.domain} client_id={config.clientId} redirect_uri={window.location.origin} onRedirectCallBack={onRedirectCallback}>
	// 	<BrowserRouter>
	// 		<App />
	// 	</BrowserRouter>
	// </Auth0Provider>,

	<App />,

	document.getElementById('root')
);

serviceWorker.unregister();
