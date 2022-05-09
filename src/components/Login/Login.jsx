import { Link } from 'react-router-dom';
import paths from '../../helpers/paths';
import s from './Login.module.css';

export default function Login() {
	return (
		<div className={s.container}>
			<h1 className={s.title}>Welcome to Dungeon of Rats!</h1>
			<form className={s.loginForm}>
				<label>Username:<input /></label>
				<label>Password:<input /></label>
				<button>Enter!</button>
			</form>
			<p>if you din't have an account yet, plese <Link to={paths.registration}>register</Link></p>
		</div>
	);
}
