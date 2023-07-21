import React, { useEffect, useState } from 'react';

import styles from './App.module.scss';

import { Message } from 'components/Message/Message';

export const App = () => {
	const [isVisibleMessage, setVisibleMessage] = useState(false);
	const [activeMessage, setActiveMessage] = useState();

	const handleChooseMessage = typeMessage => {
		setActiveMessage(typeMessage);
		setVisibleMessage(true);
	};

	const closeMessage = () => setVisibleMessage(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setVisibleMessage(false);
		}, 5000);

		return () => clearTimeout(timeout);
	}, [isVisibleMessage]);

	return (
		<div className={styles.application}>
			<button
				onClick={() => handleChooseMessage('success')}
				className={styles.success}
			>
				Success
			</button>
			<button
				onClick={() => handleChooseMessage('info')}
				className={styles.info}
			>
				Info
			</button>
			<button
				onClick={() => handleChooseMessage('warning')}
				className={styles.warning}
			>
				Warning
			</button>
			<button
				onClick={() => handleChooseMessage('error')}
				className={styles.error}
			>
				Error
			</button>

			<Message
				isVisibleMessage={isVisibleMessage}
				activeMessage={activeMessage}
				closeMessage={closeMessage}
			/>
		</div>
	);
};
