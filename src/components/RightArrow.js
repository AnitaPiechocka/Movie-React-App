import React, {Component} from 'react';

const RightArrow = (props) =>{
	return (

		<div onClick={props.nextSlide} className="nextArrow">
			<i className="fas fa-angle-right arrow-right fa-2x" aria-hidden="true"></i>
		</div>

	);
}
 export default RightArrow;