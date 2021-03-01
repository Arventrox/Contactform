import './InputForm.scss';
import { FormikData } from './components/FormikData';

function RegistrationScreen() {
  return (
    <div className="regScreen">
        <div className="container">
            <h1>Input Form</h1>
                <FormikData/>
        </div>
    </div>
  );
}

export default RegistrationScreen;
