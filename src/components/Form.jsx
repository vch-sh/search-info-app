import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/usersSlice';
import { createUserWithID } from './utils/createUserWithID';
import { randomUsers } from './data/users';
import Input from '../ui/CustomInput';
import Button from '../ui/CustomButon';
import styles from './Form.module.scss';
import Container from './layout/Container';

const Form = () => {

	const [userData, setUserData] = useState({ firstName: '', lastName: '', email: '', phone: '' });
	const dispatch = useDispatch();

	const completedUserData = 
		userData.firstName && 
		userData.lastName && 
		userData.email && 
		userData.phone;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (completedUserData) {
			dispatch(addUser(createUserWithID(userData)));
			setUserData({ firstName: '', lastName: '', email: '', phone: '' });
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData((prevData) => ({...prevData, [name]: value}));
	}

	const handleAddRandomUser = () => {
		if (randomUsers.length > 0) {
			const randomIndex = Math.floor(Math.random() * randomUsers.length);
			const randomUser = randomUsers.pop(randomUsers[randomIndex]);
			dispatch(addUser(randomUser));
		}
	}

	return (
		<div className={styles.form}>
			<Container>
				<form onSubmit={handleSubmit}>

					<div className={styles.inputGroup}>
						<div>
							<Input 
								type='text' 
								name='firstName'
								placeholder='Enter first name...' 
								value={userData.firstName}
								onChange={handleInputChange}
							/>
						</div>

						<div>
							<Input 
								type='text'
								name='lastName'
								placeholder='Enter last name...' 
								value={userData.lastName}
								onChange={handleInputChange}
							/>
						</div>

						<div>
							<Input 
								type='email'
								name='email'
								placeholder='Enter e-mail...' 
								value={userData.email}
								onChange={handleInputChange}
							/>
						</div>

						<div>
							<Input 
								type='tel'
								name='phone'
								placeholder='Enter a phone number...' 
								value={userData.phone}
								onChange={handleInputChange}
							/>
						</div>
					</div>

					<div className={styles.buttonGroup}>
						<Button 
							type='submit' 
						>
							Add User
						</Button>

						<Button 
							type='submit'
							onClick={handleAddRandomUser} 
						>
							Add Random User
						</Button>
					</div>
				
				</form>

			</Container>
		</div>
	)
};

export default Form;