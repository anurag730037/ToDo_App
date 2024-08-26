import React from "react";
import notes from "../Images/notes.png";
import { useState } from "react";

function ToDo() {
  //  input ki value me inputData dal diya or onchahnge pe esla update wala funct me value dal di
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [buttonText, setButtonText] = useState("Check List");

  const addItems = () => {
    // jab kuch data Hoga tabhi add hoga
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const ItemDelete = (id) => {
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
      // only whi item return kro jo id se match nhi hota he
    });
    setItems(updateditems);
  };

  const Allclear = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div d-flex flex-column justify-content-center align-items-center col-10 col-md-3 col-lg-2 mx-auto">
          <div className="d-flex flex-column justify-content-center align-items-center mt-1 ">
            <img src={notes} alt="" className="title_img" />
            <p className="mt-2 fw-bold">Add Your List Here</p>
          </div>
          <div className="addItems">
            <input
              className="input col-8"
              type="text"
              placeholder="Add items..."
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i className="fa fa-solid fa-plus add-btn" onClick={addItems}></i>
          </div>

          <div className="showItem mt-3">
            {items.map((elem, ind) => {
              return (
                <div className="eachItems d-flex flex-row align-items-center mt-2 col-12 col-md-12 col-lg-12 justify-content-between">
                  <div className="itemname">
                    <h6>{elem}</h6>
                    {/* i have changed this  */}
                  </div>
                  <div>
                    <i
                      className="fa fa-solid fa-trash delete"
                      title="delete Items"
                      onClick={() => {
                        ItemDelete(ind);
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3">
            <button
              className="btn btn-primary clear-btn"
              onClick={Allclear}
              onMouseEnter={() => setButtonText("Remove All")}
              onMouseLeave={() => setButtonText("Check List")}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDo;
