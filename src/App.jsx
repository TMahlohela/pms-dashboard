import './App.css';
// import './index.css';
// import './mystyle.css';

import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks} from './components';

const App = () => {
  
  return (
    <>      
      <BrowserRouter>
        <div className='relative top-20 z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar/>
          </div>
          <About/>
          <div className='relative z-0'>
            {/* <Contact/> */}
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
