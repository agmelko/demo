import './App.css';
import { Book } from './Book';
import { Preloader } from './Preloader';
const App = (props) => {
  return props.isLoading ? ( <Preloader /> ) : (
    <div >
    <Book name="JS for beginners" year="2018" price="1000">
      Text here
    </Book>
    <Book name="REACT for beginners" year="2019" price="1200"></Book>
    <Book name="Vue for beginners" year="2021" price="1500"></Book>
    </div>
  )
}

export default App;
