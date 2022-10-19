import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const galleryStyle ={
border: 'none',
margin: '60px 60px 0px 50px',
color: '#fff',
fontWeight: 'bold',
padding: '16px 20px',
position: 'absolute',
top: '35px',
right: '200px',
background: '#7bc74d',
borderRadius:'12px',
}
const postBtnStyle = {
border: 'none',
margin: 0,
color: '#fff',
fontWeight: 'bold',
padding: '16px 20px',
background: '#7D4C92 ',
width: '417px',
borderRadius:'12px',
}
const parentDiv = {
align: 'center',
margin: '0px auto auto auto',
textAlign: 'center',
color:"white"
}
const formStyle = {
width: '600px',
height:'200px',
border: '2px solid lightgrey',
margin: '10px auto 10px auto',
textAlign: 'center',
padding: '30px 40px 30px 40px',
borderRadius:'12px',
}
const inputFields = {
width: '100%',
height:'50px',
fontFamily: 'arial',
// padding: '6px',
textAlign:"center",
borderRadius:'10px',
border:'1.5px solid grey',
}
var get =localStorage.getItem(-1);
var arr=[];
var a=0;
if(get!=null){
  for(let i=0;i<=get;i++){
    arr[i]=i;
  }
  a=get;
  ++a;
}

class PostForm extends Component {
handleSubmit = (e) => {
	e.preventDefault();
	const image = this.getImage.value;
	localStorage.setItem(a, image);
	this.getImage.value = '';
  localStorage.setItem(-1,a);
  arr.push(a);
  ++a;
}
render() {
return (
	<div style={parentDiv}>
	<h1 style={{color:'#8A2482',margin:10}}>Pics
	<span style={{color:'#248A6E'}}>Art</span>
	</h1>
	
<p>One place stop for all kinds of images</p>

	<hr></hr>
	<h3>Create a new Post</h3>
	<form onSubmit={this.handleSubmit} style={formStyle}>
		<input style={inputFields} required type="text"
		placeholder="Paste your image url here"
		ref={(input) => this.getImage = input}
		/><br></br>
		<br></br>
		<button style={postBtnStyle}>Post</button>
	</form>
	<Link to='/post'>
		<button style={galleryStyle}>
		View Gallery
		</button>
	</Link>

	</div>
);
}
}
export {PostForm ,arr};
