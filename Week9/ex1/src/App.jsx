
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  function getFormData(data) {
    console.log("form data", data);
  }

  return (
    <div>
      <h1>Alpaca Fan Club</h1>
      <form onSubmit={handleSubmit(getFormData)}>

        <fieldset>
          <legend>Personal Data</legend>
          <div className="form-group">
            <label htmlFor="firstNAme">First Name</label>
            <input type="text" id="firstName" {...register("firstName")}/>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input {...register("lastName")} />
          </div>
          <div className="form-group">
              <label htmlFor='address'>Street Address</label>
              <input type="text" id="address"{...register("address")}/>
            </div>
          <div className="form-group">
            <label htmlFor="state">State</label>
            <select id="state" {...register("state")}>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississppi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
          </select>
          </div>
          <div className="form-group">
              <label htmlFor='country'>Country</label>
              <input type="text" id="country"{...register("country")}/>
            </div>
            <div className="form-group">
              <label htmlFor='email'>E-Mail</label>
              <input type="text" id="email"{...register("email")}/>
            </div>
        </fieldset>

        <fieldset>
          <legend>Alpaca Preferences</legend>
          <div className="form-group">
            <p>Favorite Alpaca Color</p>
            <label>Tan<input type="checkbox" value="tan" {...register("favColor")} /></label>
            <label>Brown<input type="checkbox" value="brown" {...register("favColor")} /></label>
            <label>White<input type="checkbox" value="white" {...register("favColor")} /></label>
            <label>Black<input type="checkbox" value="black" {...register("favColor")} /></label>
            <label>Mixed<input type="checkbox" value="mixed" {...register("favColor")} /></label>
          </div>
          <div className="form-group">
            <label htmlFor="">What do you like about Alpacas?</label>
            <textarea rows="8" cols="50" {...register("alpacaEssay")}></textarea>
          </div>
        </fieldset>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
