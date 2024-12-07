export const TextDateInputComponent= ({item, handleChange})=>{
    return           <div
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
      className="form-control"
      id={item.id}
      placeholder={item.placeholder}
      value={item.value}
      onChange={handleChange}
    />
  </div>
  }
  export const DropdownComponent= ({item, handleChange}) =>{
  
    return <>
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
                style={{marginLeft: 10}}
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
  </>
  }
  
  export const RadioInput = ({item, handleChange}) =>{
    return <>
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
  </>
  }
  
  export const CheckBox =({item, handleChangeCheckbox})=>{
    return <div
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
  }
  
  export const RangeInput = ({item, handleChange}) =>{
    return <div
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
  }
  
  export const FileInput = ({item}) =>{
    return <div
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
  }
  
  export const ImageInput = ({item}) =>{
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
  }