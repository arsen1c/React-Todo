import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Redirect } from 'react-router-dom';
import { Spinner } from '../Animations';

const Me = () => {
	const { data, error, isPending } = useFetch('https://react-notes-api.vector2912.repl.co/api/me');
	
	return (
		<div>
			{ error && <Redirect to={{ pathname: '/login' }} /> }
			{isPending && <Spinner />}	
			{ data && (
					<div className="user-info">
						<header>
							<h1>{data.user.username}</h1>
							<p>{data.user.email}</p>
						</header>
						<p className="join-date">⦿ Joined {new Date(data.user.date).toLocaleString()}</p>	
					</div>
				) 
			}
		</div>
	)
}

export default Me;