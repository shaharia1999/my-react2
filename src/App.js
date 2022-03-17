import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const products=[
    {name:'laptop',price:70000},
    {name:"mobile",price:30000},
    {name:'tab',price:10000},
    {name:'charger',price:500}

  ]
  
  return (
    <div className="App">
      {
        products.map(product=><Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="laptop" price="40000"></Product>
      <Product name="Mobile" price="2000"></Product> */}

      <Counter></Counter>
      <External></External>
    </div>
  );
}
function Product(props){

  return(
    <div className='product'>
      <h3>Name :{props.name}</h3>
      <h3>Price :{props.price}</h3>
    </div>
  )
}
function Counter(){
  // const [count,setCount] = useState(55);
  const [count,setCount]=useState(33);
  const increasecount=()=>{
         const newC=count+1;
         setCount(newC)
  }
  const decreasecount=()=>{
         const newC=count-1;
         setCount(newC)
  }
  return(
    <div>
      <h1>Countter : {count}</h1>
      <button onClick={increasecount}>increase :</button>
      <button onClick={decreasecount}>decrice :</button>
    </div>
  )
}
function External(){
    const[users, setUsers]=useState([]);
   
  return(
    <div>
      <h1>External User :</h1>
    </div>
  )
}

export default App;
