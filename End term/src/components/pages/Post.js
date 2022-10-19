import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {arr} from './PostForm';

const parentDiv = {
	align: 'center',
	margin: '0px auto auto auto',
	textAlign: 'center',
}

const heading={
	fontSize:"50px",
	margin:20,
	borderBottom:'2px solid lightgrey'
}

function Post() {
return (
	<>
	<div style={parentDiv}>
	<h1 style={heading}>All Posts</h1>
	<div
	style={{ width: '50%', margin: '0px auto' }}
	>
        <Link to='/picture'>Back</Link>
		<table>
			<tbody>
				{(arr.map((a)=>(
						<tr key={`${a}`}>
							<img src={localStorage.getItem(a)} width="250px" height="250px" />
						</tr>
				)))}
			</tbody>
		</table>
	</div>
	</div>
	</>
);

}
export default Post;
