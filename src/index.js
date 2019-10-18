import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import congigureStore from './redux/configureStore'
import { Provider as ReduxProvaider } from 'react-redux'
const store = congigureStore()

render(
<ReduxProvaider store={store}>
	<Router>
		<App />
	</Router>
</ReduxProvaider>
, document.getElementById('app'));
