import { useState } from 'react';
import isntance from '../axios/axios';

const useSendData = (url: string) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const sendData = async (data: any) => {
		setLoading(true);
		setError(null);

		try {
			const response = await isntance.post(url, data);
			return response;
		} catch (err) {
			if (err instanceof Error) {
				setError(err.message);
			} else {
				setError(String(err));
			}
			throw err;
		} finally {
			setLoading(false);
		}
	};

	return { sendData, loading, error };
};

export default useSendData;
