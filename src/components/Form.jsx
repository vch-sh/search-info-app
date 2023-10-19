import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/usersSlice';
import { createUserWithID } from './utils/createUserWithID';
import styles from './Form.module.scss';
import Container from './layout/Container';

const Form = () => {

	const [userData, setUserData] = useState({ firstName: '', lastName: '' });
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (userData.firstName && userData.lastName) {
			dispatch(addUser(createUserWithID(userData)));
			setUserData({ firstName: '', lastName: '' });
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData((prevData) => ({...prevData, [name]: value}));
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

						<button 
							className={styles.fromBtn} 
							type='submit' 
						>
							Add User
						</button>

					</div>
					


				</form>

			</Container>
		</div>
	)
};

export default Form;