import { useSelector } from 'react-redux';
import { selectUsers } from '../redux/slices/usersSlice';
import styles from './UserList.module.scss';
import Container from './layout/Container';

const UserList = () => {
	const users = useSelector(selectUsers);

	return (
		<div className={styles.userList}>

			<Container>
				
				{!!users.length && (
					<span className={styles.usersQuantity}>
						{users.length} user(s)
					</span>
				)}

				{!!users.length && (
					users.map((user, index) => (
						<ul key={user.id}>

							<li className={styles.userInfo}>

								<div className={styles.userInfoGroup}>
									
									<div>{index + 1}. {user.firstName} {user.lastName}</div>
								</div>

							</li>
						</ul>
					)))
				}

			</Container>


		</div>
	)
}

export default UserList;