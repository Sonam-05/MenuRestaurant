import { useState } from 'react';
import './App.css';
import store from './store/configStore';
import Category from './components/Category';
import Header from './components/Header';
import Menu from './components/Menu';
import data from './Data'
import TypeCategories from './components/TypeCategories';
import { filterByCategory } from './store/menus';


function App() {
  const [arr, setArr] = useState(data.filter((sData) => sData.type=='Veg'));
  const [type, setType] = useState('Veg');
  const [catVal, setCatVal] = useState('All')
  console.log(arr);
  
  store.subscribe(() => {
    console.log(store.getState());
    setArr(store.getState());
  })

  const handleChange = (e) => {
    console.log(e.target.value);
    setType(e.target.value)
    filterByCategory(catVal, e.target.value)
  }
  
  return (
    <div className="App">
      <Header />
      <Category catVal={catVal} setCatVal={setCatVal} type={type}/>
      <TypeCategories handleChange={handleChange} />
      <Menu arr={arr}/>
    </div>
  );
}

export default App;
