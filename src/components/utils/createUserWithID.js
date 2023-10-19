import { v4 as uuidv4 } from 'uuid';

export const createUserWithID = (user) => {
	return ({
		...user,
		id: uuidv4(),
	})
}