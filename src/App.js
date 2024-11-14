import './App.css';
import Comments from './sections/Comments';
import Description from './sections/Description';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Main from './sections/Main';


function App() {
  return (
    <div className="bg-black text-white">
     <div >
        <Header />
        <Main />
        <Description />
        <Comments />
        <Footer />                
    </div>
    </div>
  );
}

export default App;
