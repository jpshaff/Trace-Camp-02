import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Techsupport from './components/Techsupport.js'
import Copyright from './components/Copyright.js'

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Techsupport/>
      </main>
      <Copyright/>
    </div>
  );
}

export default App;


//use className insead of class when using JS versus HTML
//React is building your own building blocks to reduce some redundancy in coding