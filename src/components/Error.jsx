import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectError } from '../redux/slices/errorSlice';
import 'react-toastify/dist/ReactToastify.css';

const Error = () => {
	const errorMessage = useSelector(selectError);

	useEffect(() => {
		if (errorMessage.errorMessage[0]) {
			toast.info(errorMessage.errorMessage[0]);
		}
	}, [errorMessage])

	return <ToastContainer position='top-right' autoClose={5000} />;
}

export default Error;