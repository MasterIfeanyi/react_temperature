import { useState } from "react"
// import { bootstrap } from "bootstrap"

const Content = ({onAdd}) => {

 const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }

    return (
      <section className="p-5">
        <div className="container" onSubmit={onSubmit}>
          <div className="input-group input-group-lg mb-3">
  
            <input
              className="form-control"
              type="number"
              placeholder="Enter Temperature"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div className="input-group mb-3">
              <label
                htmlFor=""
                className="input-group-text"
                for="inputGroupSelect01"
              >
                From
              </label>
              <select name="" className="form-select" id="inputGroupSelect01">
                <option value="" selected>
                  Choose
                </option>
                <option value="">Fahrenheit</option>
                <option value="">Celsius</option>
                <option value="">Kelvin</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <label
                htmlFor=""
                className="input-group-text"
                for="inputGroupSelect01"
              >
                To
              </label>
              <select name="" className="form-select" id="inputGroupSelect01">
                <option value="" selected>
                  Choose
                </option>
                <option value="">Fahrenheit</option>
                <option value="">Celsius</option>
                <option value="">Kelvin</option>
              </select>
            </div>
          </div>
        </div>

        <div className="input-group input-group-lg mb-3 me-auto">
  
          <input
            className="form-control"
            type="number"
            placeholder="Answer"
            value={text}
            readOnly
          />
        </div>

        <button type="submit" className="btn btn-danger">Submit</button>
      </section>
    );
}

export default Content
