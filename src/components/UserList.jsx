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
					<div className={styles.userListActions}>
						<div className={styles.userListActionsButtons}>
							<button disabled>Delete</button>
							<button disabled>Sort By Name</button>
						</div>
						<span className={styles.usersQuantity}>
							{users.length} user(s)
						</span>
					</div>
				)}

				{!!users.length && (
					users.map((user) => (
						<ul key={user.id}>

							<li className={styles.userInfo}>

								<div className={styles.userInfoGroup}>
									<input type="checkbox" />
									<div>{user.firstName} {user.lastName}</div>
									<div>{user.email}</div>
									<div>{user.tel}</div>

									<div>
										<span>0</span>
										<span>0</span>
										<span>0</span>
									</div>
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