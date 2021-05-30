import { useState, useEffect } from 'react';

const useFetch = (url, jwt) => {
	const [data, setData] = useState(null);
	const [isPending, setisPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url, {
			headers: {
				"Authorization": `Bearer ${jwt}`
			},
			credentials: 'include'
		})
			.then(res => {
				// Check for errors in response
				if (!res.ok) {
					throw Error('Could not fetch the data for that resource');
				}
				// Convert the response to JSON;
				return res.json();
			})
			.then(data => {
				setData(data);
				setisPending(false);
				setError(null);
			})
			.catch(err => {
				setError(err.message);
				setisPending(false);
			})
	}, [url, jwt]);

	return { data, isPending, error };

}

export default useFetch;