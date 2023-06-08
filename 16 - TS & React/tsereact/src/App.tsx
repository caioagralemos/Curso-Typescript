import './App.css';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';

const items = [
  {id: 1, product: 'lemon', quantity: 3},
  {id: 2, product: 'chicken breast', quantity: 1}
]

function App() {
  return (
    <div className="App">
      <Greeter person="Caio"/>
      <ShoppingList items={items}/>
    </div>
  );
}

export default App;
