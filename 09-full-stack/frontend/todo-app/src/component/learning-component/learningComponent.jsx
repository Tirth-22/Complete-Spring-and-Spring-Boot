import FirstComponent from './FirstComponent';
import {ThirdComponent} from './FirstComponent';
import SecondComponent from './SecondComponent';
  
export default function learningComponent() {
    return(
        <div className="App">
            This is my App component!
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
    </div>
    )
}