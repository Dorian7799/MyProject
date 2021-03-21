import {Button} from 'reactstrap';
import Footer from './Footer';
import './App.css';




function App(){
    return(
      <div className = "App">
        <Button color = "primary">פקדון</Button>{' '}
        <Button color = "primary">תעסוקה</Button>{' '}
        <Button color = "primary">לימודים</Button>{' '}
        <Button color = "primary">הטיול שאחרי</Button>{' '}
        <Button color = "primary">התחברות</Button>{' '}
        <br></br>
        <hr/>
        <Footer/>
       
      </div>
    );
  }



export default App;
