import styles from './CustomInput.module.scss';

const Input = ({ ...props }) => {
	return (
		<input 
			{...props} 
			className={styles.input}
		/>
	)
}

export default Input;