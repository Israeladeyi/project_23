import React, { useState } from 'react';
import './styles.css';
import { data } from './data.js';
function App() {
	const [birthday, setBirthday] = useState(data);
	return (
		<>
			{birthday.map((day) => {
				const { id, name, year } = day;
				return (
					<div key={id} className="container">
						<div className="main">
							<div className="text">
								<h2>{name}</h2>
								<h4>{year}</h4>
							</div>
							<button>remove</button>
						</div>
					</div>
				);
			})}
			<button
				onClick={() => {
					setBirthday([]);
				}}
				className="btn">
				Clear
			</button>
		</>
	);
}

export default App;
