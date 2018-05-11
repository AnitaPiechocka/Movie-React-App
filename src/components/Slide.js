import React from 'react'

const Slide = ({ index,dot }) => {

    let images =['https://images.unsplash.com/photo-1484665754804-74b091211472?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0e05cafb9e011bc4592a9384f7d1763f&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1444681179373-730055ddc7b6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7a24833a440dd7e75878b699b2c9ac23&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1516726283839-a493d9f167aa?ixlib=rb-0.3.5&s=4b9053faad573653bf8c38dffb588891&auto=format&fit=crop&w=1050&q=80'
    ]
  
  return (
  	<div>
  	<img src={images[index]} className='pic' />
		
  	</div>
  	
  	)
}

export default Slide



