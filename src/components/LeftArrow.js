import React, {Component} from 'react';

const LeftArrow = (props) =>{
	return (

		<div onClick={props.previousSlide} className="backArrow">
			<i className="fas fa-angle-left arrow-left fa-2x" aria-hidden="true"></i>
		</div>

	);
}
 export default LeftArrow;