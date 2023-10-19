import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/usersSlice';
import { createUserWithID } from './utils/createUserWithID';
import { randomUsers } from './data/users';
import styles from './Form.module.scss';
import Container from './layout/Container';

const Form = () => {

	const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '', tel: '' });
	const dispatch = useDispatch();

	const completedUserData = 
		userData.firstName && 
		userData.lastName && 
		userData.email && 
		userData.tel;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (completedUserData) {
			dispatch(addUser(createUserWithID(userData)));
			setUserData({ firstName: '', lastName: '', email: '', tel: '' });
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData((prevData) => ({...prevData, [name]: value}));
	}

	const handleAddRandomUser = () => {
		const randomIndex = Math.floor(Math.random() * randomUsers.length);
		const randomUser = randomUsers[randomIndex];
		dispatch(addUser(randomUser));
	}

	return (
		<div className={styles.form}>
			<Container>
				<form onSubmit={handleSubmit}>

					<div className={styles.formGroups}>
						<div className={styles.formGroup}>
							<input 
								type='text' 
								name='firstName'
								placeholder='Enter first name...' 
								value={userData.firstName}
								onChange={handleInputChange}
							/>
						</div>

						<div className={styles.formGroup}>
							<input 
								type='text'
								name='lastName'
								placeholder='Enter last name...' 
								value={userData.lastName}
								onChange={handleInputChange}
							/>
						</div>

						<div className={styles.formGroup}>
							<input 
								type='email'
								name='email'
								placeholder='Enter e-mail...' 
								value={userData.email}
								onChange={handleInputChange}
							/>
						</div>

						<div className={styles.formGroup}>
							<input 
								type='tel'
								name='tel'
								placeholder='Enter a phone number...' 
								value={userData.tel}
								onChange={handleInputChange}
							/>
						</div>

						<button 
							className={styles.fromBtn} 
							type='submit' 
						>
							Add User
						</button>

						<button 
							className={styles.fromBtn}
							onClick={handleAddRandomUser} 
						>
							Add Random User
						</button>

					</div>
					


				</form>

			</Container>
		</div>
	)
};

export default Form;