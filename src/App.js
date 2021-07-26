import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import SideNavbar from './navbar/SideNavbar';
import Dashboard from './pages/Dashboard';
import Journal from './pages/Journal';
import Gallery from './pages/Gallery';
import Settings from './pages/Settings';

function App() {
	return (
		<Fragment>
			<SideNavbar />
			<Switch>
				<Route path='/' exact>
					<Redirect to='/dashboard' />
				</Route>
				<Route path='/dashboard'>
					<Dashboard />
				</Route>
				<Route path='/new-entry'>
					<Journal />
				</Route>
				<Route path='/gallery'>
					<Gallery />
				</Route>
				<Route path='/settings'>
					<Settings />
				</Route>
			</Switch>
		</Fragment>
	);
}

export default App;
