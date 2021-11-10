import { useState } from "react"
// import { bootstrap } from "bootstrap"

const Content = () => {

      const [temperature, setTemperature] = useState(0)
      const [firstUnit, setFirstUnit] = useState('')
      const [secondUnit, setSecondUnit] = useState('')
      const [answer, setAnswer] = useState(0)


  const handleSubmit = (firstUnit, secondUnit) => {



    if (temperature !== "")
       

    if (firstUnit === "celsius" && secondUnit === "fahrenheit") {
      const value = celToFah()
      console.log(`value is: ${value}`);
      setAnswer(value)
      setFirstUnit("");
      setSecondUnit("");
      setTemperature("");
    } else if (firstUnit === "fahrenheit" && secondUnit === "celsius"){
      const value = fahToCel()
      console.log(`value is ${value}`);
      setAnswer(value)
      setFirstUnit("");
      setSecondUnit("");
      setTemperature("");
    } else if (firstUnit === "celsius" && secondUnit === "kelvin") {
      const value = celToKel();
      console.log(`value is ${value}`);
      setAnswer(value);
      setFirstUnit("");
      setSecondUnit("");
      setTemperature("");      
    } else if (firstUnit === "kelvin" && secondUnit === "celsius") {
      const value = kelToCel();
      console.log(`value is ${value}`);
      setAnswer(value);
      setFirstUnit("");
      setSecondUnit("");
      setTemperature("");       
    } else if (firstUnit === "fahrenheit" && secondUnit === "kelvin") {
      const value = fahToKel();
      console.log(`value is ${value}`);
      setAnswer(value);
      setFirstUnit("");
      setSecondUnit("");
      setTemperature("");       
    } else if (firstUnit === "kelvin" && secondUnit === "fahrenheit") {
      const value = kelToFah();
      console.log(`value is ${value}`);
      setAnswer(value);
      setFirstUnit("");
      setSecondUnit("");
      setTemperature("");       
    }
  }


  function celToFah() {
    const tempValue = parseInt(temperature);

    let answer;
    answer = Math.round((tempValue * 9 / 5 ) + 32);

    return answer 
  }

  function fahToCel() {
    const tempValue = parseInt(temperature);

    let answer;
    answer = Math.round((tempValue - 32) * 5/9);

    return answer 
  }

  function celToKel() {
     const tempValue = parseInt(temperature);

     let answer;
     answer = Math.round((tempValue + 273.15));

     return answer;    
  }


  function kelToCel() {
      const tempValue = parseInt(temperature);

      let answer;
      answer = Math.round(tempValue - 273.15);

      return answer;     
  }

  function fahToKel() {
      const tempValue = parseInt(temperature);

      let answer;
      answer = Math.round((tempValue - 32) * 5/9 + 273.15);

      return answer;     
  }

  function kelToFah() {
      const tempValue = parseInt(temperature);

      let answer;
      answer = Math.round((tempValue - 273.15) * 9/5 + 32);

      return answer;     
  }


  
    return (
      <section className="p-2">
        <div className="container">
          <div className="input-group input-group-lg mb-3">
  
            <input
              className="form-control"
              type="number"
              placeholder="Enter Temperature"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>

          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="input-group">
              <label
                htmlFor=""
                className="input-group-text"
              >
                From
              </label>
              <select onChange={(e) => setFirstUnit(e.target.value)}
                className="form-select" id="inputGroupSelect01">
                <option value="">
                  Choose
                </option>
                <option>fahrenheit</option>
                <option>celsius</option>
                <option>kelvin</option>
              </select>
            </div>

            <div className="input-group">
              <label
                htmlFor=""
                className="input-group-text"
              >
                To
              </label>
              <select onChange={(e) => setSecondUnit(e.target.value)} className="form-select" id="inputGroupSelect01">
                <option value="">
                  Choose
                </option>
                <option>fahrenheit</option>
                <option>celsius</option>
                <option>kelvin</option>
              </select>
            </div>
          </div>
        

        <div className="input-group input-group-lg mb-3 me-auto">
  
          <input
            className="form-control"
            type="number"
            placeholder="Answer"
            value={answer}
            readOnly
          />
        </div>
      </div>
        <button type="button" onClick={() => handleSubmit(firstUnit, secondUnit)} className="btn btn-danger">
          Submit
        </button>
      </section>
    );
}

export default Content
