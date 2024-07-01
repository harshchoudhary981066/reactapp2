import logo from './logo.svg';
import './App.css';
import { Hello } from './Hello';
import  Customer  from './Customer'
import Counter from './Counter'
import CustomerForm from './CustomerForm';
import { HooksCounter } from './Hooks_Counter';
import { HooksForm } from './HooksForm';
import { address } from './Address';
function App() {
  return (
    <div>
{/* <Hello /> */}
    {/* <Customer />
    <Counter /> */}
    {/* <CustomerForm /> */}
    {/* <HooksCounter /> */}
    <HooksForm addr={address} />
  </div>
  );
}

export default App;