import React from "react";
import format from "./format.json";
import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  let tempState = format.layout.reduce((acc, item) => {
    acc[item.id] = item.defaultValue;
    return acc;
  }, {});

  const [values, setValues] = useState(tempState);

  useEffect(() => {
    console.log(values);
  }, [values]);
  function renderFormGroups() {

    const handleChange = (e) => {
      console.log({target: e.target});
      setValues((prevValues) => ({
        ...prevValues,
        [e.target.id]: e.target.value,
      }));
     
    };
    const handleChangeCheckbox = (e) => {
      const selectedValue = e.target.checked;
      setValues((prevValues) => ({
        ...prevValues,
        [e.target.id]: !selectedValue, // Store the entire choice object
      }));
    };

    return (format.layout.map((item) => 
    {
      if (
        item.elementType == "text" ||
        item.elementType == "number" ||
        item.elementType == "date" 
      ) {
        return (
          <div
            className="form-group"
            style={{
              position: "absolute",
              left: `${(item.x / 12) * 100}%`,
              top: `${(item.y / 10) * 100}%`,
              // height: `${(item.h / 10) * 100}%`,
              // width: (item.w / 12) * 100 + "%",
            }}
          >
            <label for={item.id}>{item.placeholder}</label>
            <input
              type={item.elementType}
              className="form-control"
              id={item.id}
              placeholder={item.placeholder}
              value={item.value}
              onChange={handleChange}
            />
          </div>
        );
      } else if (item.elementType == "dropdown") {
        return (
          <div
            className="form-group"
            style={{
              position: "absolute",
              left: `${(item.x / 12) * 100}%`,
              top: `${(item.y / 10) * 100}%`,
            }}
          >
            <label for={item.id}>{item.placeholder}</label>
            <select className="form-control" id={item.id}
              onChange={handleChange}
            >
              <option value={null}>Select</option>
              {item.choices.map((option) => {
                return (
                  <option value={option.value} key={option.key}>
                    {option.label}
                  </option>
                );
              })}
            </select>
          </div>
        );
      } else if (item.elementType == "radio") {
        return (
          <div
            style={{
              position: "absolute",
              left: `${(item.x / 12) * 100}%`,
              top: `${(item.y / 10) * 100}%`,
            }}
          >
            <div>
              <label for={item.id}>{item.label}</label>
            </div>
            {item.choices.map((option) => {
              return (
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    style={{marginLeft: 10}}
                    type="radio"
                    name="inlineRadioOptions"
                    id={item.id}
                    value={option.value}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" for="inlineRadio1">
                    {option.label}
                  </label>
                </div>
              );
            })}
          </div>
        );
      } else if (item.elementType == "checkbox") {
        return (
          <div
            style={{
              position: "absolute",
              left: `${(item.x / 12) * 100}%`,
              top: `${(item.y / 10) * 100}%`,
            }}
          >
            <div>
              <label for={item.id}>{item.label}</label>
            </div>
            <div className="form-check form-check-inline">
            <label for={item.id} style= {{marginTop: "auto", marginBottom:"auto"}}>{item.text}</label>
              <input
                className="form-check-input"
                type="checkbox"
                name="inlineRadioOptions"
                id={item.id}
                value= {item.checked}
                checked={item.checked}
                onChange={handleChangeCheckbox}
              />
            </div>
            
          </div>
        );
      } else if (item.elementType == "range") {
        return (
          <>
          <div
            className="form-group"
            style={{
              position: "absolute",
              left: `${(item.x / 12) * 100}%`,
              top: `${(item.y / 10) * 100}%`,
            }}
          >
            <label for={item.id}>{item.placeholder}</label>
            <input
              type={item.elementType}
              className="form-control-range"
              id={item.id}
              value={item.value}
              onChange={handleChange}
            />
          </div>
          <button style={{
                          position: "absolute",
                          top:  "80%"
          }} type="submit">Submit</button>

          </>
        );
      } else if (item.elementType == "file") {
        return (
          <div
            className="form-group"
            style={{
              position: "absolute",
              left: `${(item.x / 12) * 100}%`,
              top: `${(item.y / 10) * 100}%`,

            }}
          >
            <label for={item.id}>{item.placeholder}</label>
            <input
              type={item.elementType}
              className="form-control-file"
              id={item.id}
              value={item.value}
            />
          </div>
        );
      } else if (item.elementType == "image") {
        return (
          <div
            className="form-group"
            style={{
              position: "absolute",
              left: `${(item.x / 12) * 100}%`,
              top: `${(item.y / 10) * 100}%`,
            }}
          >
            <label for={item.id}>{item.placeholder}</label>
            <input
              type="file"
              accept="image/*"
              className="form-control-file"
              id={item.id}
              value={item.value}
            />
          </div>
        );
      }  else {
        return
      }
    }
    )
    );
  }



  return (
    <div className="container">
              <div 
        style={{ display: "flex", justifyContent:"space-around", fontSize: 30 }}
        >Dynamic Form using json data
        </div>
      <div
        className="panel panel-primary"
        style={{ position: "relative", height: "100vh" }}
      >

        <div
          className="panel-body"
          style={{ position: "relative", height: "100%", 
        margin :"auto",
        width: "50%"
        }}
        >
          <form className="dynamic-form"
           style={{ display: "flex",
           width: "40%",
           margin :"auto"
           }}
          >
            {renderFormGroups()}
            
          </form>
        </div>
      </div>
    </div>
  );
}

