import { Routes, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Registration from '../Registrtation/Registration';
import Battle from '../Battle/Battle';
import paths from '../../helpers/paths';

export default function Router() {
	return (
		<Routes>
			<Route path={paths.home} element={<Login />} />
			<Route path={paths.registration} element={<Registration />} />
			<Route path={paths.battle} element={<Battle />} />
		</Routes>
	);
}
