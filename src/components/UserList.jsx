import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin2Line} from 'react-icons/ri';
import { 
	selectUsers, 
	clearTheList, 
	deleteUser,
	sortAscending
} from '../redux/slices/usersSlice';
import { 
	selectFullNameFilter, 
	setFullNameFilter 
} from '../redux/slices/filterSlice';
import Input from '../ui/CustomInput';
import Button from '../ui/CustomButon';
import styles from './UserList.module.scss';
import Container from './layout/Container';

const UserList = () => {

	const [isAscending, setIsAscending] = useState(false);

	const dispatch = useDispatch();
	const users = useSelector(selectUsers);
	const fullNameFilter = useSelector(selectFullNameFilter);

	const deleteSpaces = (inputData) => {
		return String(inputData).replace(/\s/g, '');
	}

	const handleClearTheList = () => {
		dispatch(clearTheList());
	}

	const handleDeleteUser = (userID) => {
		dispatch(deleteUser(userID));
	}

	const handleSortAscending = () => {
		dispatch(sortAscending());
		setIsAscending(!isAscending);
	}

	const handleFullNameFulterChange = (e) => {
		dispatch(setFullNameFilter(e.target.value));
	}

	const filteredUsers = users.filter((user) => {
		const fullName = user.firstName + user.lastName;
		return fullName.toLowerCase().includes(fullNameFilter.toLowerCase());
	});

	return (
		<div className={styles.userList}>

			<Container>
				
				{!!users.length && (
					<div className={styles.userListActions}>
						<div className={styles.userListActionsButtons}>
							<Button onClick={handleClearTheList}>Clear the list</Button>
							<Button onClick={handleSortAscending}>Sort by alphabet</Button>
							<Input 
								type="text" 
								placeholder='Search by name...' 
								value={fullNameFilter}
								onChange={handleFullNameFulterChange}
							/>
						</div>
						<span className={styles.usersQuantity}>
							{filteredUsers.length} user(s)
						</span>
					</div>
				)}

				{!!users.length && (
					filteredUsers.map((user) => (
						<ul key={user.id}>

							<li className={styles.userInfo}>

								<div className={styles.userInfoGroup}>
									<div>{user.firstName} {user.lastName}</div>
									<div>{user.email}</div>
									<div>{deleteSpaces(user.phone)}</div>

									<div className={styles.userActions}>
										<span onClick={() => handleDeleteUser(user.id)}>
											<RiDeleteBin2Line className={styles.userActionsIcon} />
										</span>
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