export const correctClassNameMessage = (typeMessage, styles) => {
	switch (typeMessage) {
		case 'info':
			return `${styles.message} ${styles.show} ${styles.info}`;
		case 'warning':
			return `${styles.message} ${styles.show} ${styles.warning}`;
		case 'error':
			return `${styles.message} ${styles.show} ${styles.error}`;

		default:
			return `${styles.message} ${styles.show} ${styles.success}`;
	}
};
