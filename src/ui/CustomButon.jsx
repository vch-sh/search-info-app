import styles from './CustomButton.module.scss';

const CustomButon = ({ children, ...props }) => {
	return (
		<button 
			{...props}
			className={styles.button}
		>
			{children}
		</button>
	)
}

export default CustomButon;