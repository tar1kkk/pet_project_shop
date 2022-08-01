import React from 'react';
import './AddNewPurch.css'
import MyButton from './UI/button/MyButton';

function AddNewPurch({ purchase }) {
	return (
		<div>
			{purchase.map((item, index) => {
				return (
					<div className='container'>
						<div className='title_product'>{item.title}</div>
						<div>{item.price}</div>
						<MyButton>Удалить</MyButton>
					</div>
				)
			})}
		</div >
	);
}

export default AddNewPurch;