import Form from './Form';
import UserList from './UserList';
import styles from './Users.module.scss';

const Users = () => {
	return (
			<div className={styles.users}>
				<Form />
				<UserList />
			</div>
	)
}

export default Users;