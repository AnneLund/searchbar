import Router from './Components/Router';
import Globals from './Styles/Global_style';
import Header from './Components/Header/Header';
import SearchBar from './Components/SearchBar';

export default function App() {

  return (
    <>
<Header/>
<SearchBar/>
<Router/>
<Globals/> 
    </>
  );
}
