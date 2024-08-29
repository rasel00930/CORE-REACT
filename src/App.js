//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

const Product2=[
{Name:'Mouse',Price:'$200'},
{ Name: 'Monitor', Price: '$300'},
{ Name: 'Ram', Price: '$2000'}

]
  
  return (
    <div className="App">
      
        <Product product1={Product2[0]}></Product>
        <Product product1={Product2[1]} ></Product>
        <Product product1={Product2[2]}></Product>
        
        <Counter></Counter>
        <Count1></Count1>
      
    </div>
  );
}

//Props

function Product(props){
  const Structure={
       border:'2px solid orange ',
       borderRadius:'10px',
       margin:'10px',
       backgroundColor:'gray',
       height:'250px',
       width:'200px',
       float:'left'
       

  }
  

return(
  <div  style={Structure}>
    <h1>{props.product1.Name}</h1>
    <h3>{props.product1.Price}</h3>
    <button>Buy Now</button>

  </div>
);

}
//State
function Counter(){
  const[count,setCount]= useState(10)
  const handleIncrease=()=> {
    const newCount=count+1;
    setCount(newCount);
  }

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>increase</button>
    </div>
  );
}

//ApI Call

function Count1(){
  const[user,setUser]=useState([])
  
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUser(data))


})

return(
  <div>
    <h1>count:{user.length}</h1>
    <ul>
      {
      user.map(users => <li>{users.name}</li>)
      }
      
    </ul>
  </div>
)


}





export default App;
