import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    ChoiceDegree: '',
    Technology: '',
    gender: '',

  });

  const initialValues = { firstname: "", lastname: "", email: "" };
  const [formvalues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  // const { FNameErro } = this.formErrors;


  const [error, setError] = useState({
    fname: ''

  })



  const onChange = (e) => {
    // const { value, name, type, checked } = e.target;
    // const { firstname, lastname, email, password, ChoiceDegree, Technology, gender } = this;
    let formErrors = {};
    let formIsValid = true;
    // console.log(firstname);
    // if (!firstname) {
    //   formIsValid = false;
    //   formErrors["FNameErro"] = "First Name is required.";
    // }

  }




  const onSubmit = (e) => {
    if (form.fname.length < 5) {

      setError((state) => ({
        Fname: 'Too short'
      }));
      return;
    };

    if (form.lname.length < 8) {
      setError((state) => ({
        lname: 'Only Print A 8 Digits'
      }));

      return;
    };

    e.preventDefault();
  }

  return (
    <div className='App'>

      <header className="App-header">
        <form onSubmit={onSubmit}>
          <p>{formErrors.Firstname}</p>

          <label>
            FirstName:
            <input type="Text" onChange={onChange} autoComplete="off" name="name" placeholder='Enter  a FirstName' required />

          </label>


          <hr />

          <label>
            <p>{formErrors.Lastname}</p>

            LastName:
            <input type="Text" onChange={onChange} autoComplete="off" name="name" placeholder='Enter LastName' required />

          </label>


          <hr />
          

          <label>
            <p>{formErrors.Email}</p>

            Email:
            <input required type={'email'} onChange={onChange} autoComplete="off" name="email" placeholder='Enter your Email' />

          </label>

          <hr />

          <label>
            Password:
            <input type="password" onChange={onChange} autoComplete="off" name="password" placeholder='Enter Password' />

          </label>

          <hr />
          <label>
            Confirm Password:
            <input type="password" onChange={onChange} autoComplete="off" name="confpassword" placeholder='Enter Confirm Password' />

          </label>


          <hr />

          <label>
            Gender:
            <div>
              <input onChange={onChange} type="radio" value="Male" name="gender" checked={form.gender === 'Male'} />Male
              <input onChange={onChange} type="radio" value="Femail" name="gender" checked={form.gender === 'Femail'} />Femail
              <input onChange={onChange} type="radio" value="Other" name="gender" checked={form.gender === 'Other'} />Other


            </div>

          </label>

          <hr />

          <label>
            Choice Degree:
            <select onChange={onChange} value={form.ChoiceDegree} name="choice degree">
              <option value="10th">10th</option>
              <option value="Diploma">Diploma</option>
              <option value="12th">12th</option>
              <option value="Bachral">Bachral</option>
              <option value="Master">Master</option>

            </select>
          </label>
          <hr />

          Technology:
          <div>
            <input type="checkbox" value="React" name="language" />React
            <input type="checkbox" value="Php" name="language" />Php
            <input type="checkbox" value="Android" name="language" />Android
            <input type="checkbox" value=".Net" name="language" />.Net
            <input type="checkbox" value="Java" name="language" />java
          </div>
          <hr />
          <div>
            <input type="submit" value="Submit" />
          </div>

        </form>
      </header>
    </div>
  )
}

export default App;
