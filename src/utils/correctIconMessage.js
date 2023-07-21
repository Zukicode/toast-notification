import successIcon from 'assets/success.svg';
import infoIcon from 'assets/info.svg';
import warningIcon from 'assets/warning.svg';
import errorIcon from 'assets/error.svg';

export const correctIconMessage = typeMessage => {
	switch (typeMessage) {
		case 'info':
			return infoIcon;
		case 'warning':
			return warningIcon;

		case 'error':
			return errorIcon;

		default:
			return successIcon;
	}
};
