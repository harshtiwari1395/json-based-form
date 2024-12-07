import React from "react";
import format from "./format.json";
import { useState, useEffect } from "react";
import "./index.css";
import {TextDateInputComponent, DropdownComponent, RadioInput, CheckBox, RangeInput, FileInput, ImageInput } from "./InputComponents";


export default function App() {
  let tempState = format.layout.reduce((acc, item) => {
    acc[item.id] = item.defaultValue;
    return acc;
  }, {});

  const [values, setValues] = useState(tempState);

  useEffect(() => {
    console.log(values);
  }, [values]);
  function renderFormFromJson() {

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
          <TextDateInputComponent item={item} handleChange={handleChange} />
        );
      } else if (item.elementType == "dropdown") {
        return (
          <DropdownComponent item={item} handleChange={handleChange}/>
        );
      } else if (item.elementType == "radio") {
        return (
          <RadioInput item={item} handleChange={handleChange}/>
        );
      } else if (item.elementType == "checkbox") {
        return (
          <CheckBox item={item} handleChangeCheckbox={handleChangeCheckbox}/>
        );
      } else if (item.elementType == "range") {
        return (
          <RangeInput item={item} handleChange={handleChange}/>
        );
      } else if (item.elementType == "file") {
        return (
          <FileInput item= {item} />
        );
      } else if (item.elementType == "image") {
        return (
          <ImageInput item={item}/>
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
        style={{ display: "flex", justifyContent:"space-around", fontSize: 30 , padding: 30}}
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
            {renderFormFromJson()}
            
          </form>
        </div>
      </div>
    </div>
  );
}

