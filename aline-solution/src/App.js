import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: 'Initial value',
      inputData: '',
      thirdText:'',
      arrayOfCharacters:[],
      IsTrue : false,
      stringToRepalce :'',
      paragraphData :'Hi I am Indian....Myself Dnyanesh.I am living in Pune.',
      inputString:'',
      count :0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
  handleChange(e) {                                //this function to print input string as well as to replace third string(word)
    this.inputData = e.target.value;
    this.arrayOfCharacters = this.inputData.split(' ');
    if(this.arrayOfCharacters.length>3&& !this.IsTrue) {
      this.IsTrue = true;
      console.log('--->',this.arrayOfCharacters[2])
      this.stringToRepalce = this.arrayOfCharacters[2];
    }
    this.inputData = this.inputData.replace(this.stringToRepalce,"X"); //replcaing third character by 'X'
    this.setState({ data: this.inputData })
  }
  handleChange1(e){
      this.setState({inputString:e.target.value})

    }
    
  handleClick(){                      //this function to chek occrunces of string
      
var array1 = this.state.paragraphData.split(' ');
var count = 0;
var array2 = [];
var stringToReplace = ''
var indexOfSpecifiedElement = [];

for (var i = 0; i < array1.length; i++) {
    
    if (array1[i].includes('.')) {
        indexOfSpecifiedElement.push(i);
        array2.push(array1[i].split('.'));
    }
}




for(var i=0;i<array2.length;i++){
    stringToReplace = array2[i].join(".");
    for(j=0;j<array2[i].length;j++){
        for(var k=0;k<array1.length;k++){
            if(array1[k]===stringToReplace){
               array1.splice(k,1);
            }
        }
    }
}
for(var i=0;i<array2.length;i++){
    for(var j=0;j<array2[i].length;j++){
        array1.push(array2[i][j]);
    }
}
for(var i=0;i<array1.length;i++){
    if(array1[i]=== this.state.inputString){
        count++;
    } 
}
 this.setState({count:count});
}
  render() {
    return (
      <div>
      ******First Task******<br/>
        Please Insert Data Here :   <input type="text" value={this.state.data} onChange={this.handleChange} />
        
        <h3>{this.state.data}</h3>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        ******Second Task******
        <br/>
        <br/>
         
    <textarea>{this.state.paragraphData}</textarea>
    <br/>
    <br/>
    Enter A Word To Find Occrence <input type = 'text'onChange = {this.handleChange1} />  
    <br/>
    <input type = 'button'  value = "Submit" onClick = {this.handleClick}/>
    Count: {this.state.count}
    </div>
    );
  }
}

export default App;
