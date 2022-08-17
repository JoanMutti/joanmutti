import React from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import "../styles/StackList.css";

const StackList = () => {
  return (
    <div className="StackList">
      <ul>
        <li>
          <BsFillCaretRightFill fontSize={13} color="#64FFDA" />
          <p>Javascript (ES6+)</p>
        </li>
        <li>
          <BsFillCaretRightFill fontSize={13} color="#64FFDA" />
          <p>React Js</p>
        </li>
        <li>
          <BsFillCaretRightFill fontSize={13} color="#64FFDA" />
          <p>Node Js</p>
        </li>
        <li>
          <BsFillCaretRightFill fontSize={13} color="#64FFDA" />
          <p>Mongo DB</p>
        </li>
        <li>
          <BsFillCaretRightFill fontSize={13} color="#64FFDA" />
          <p>HTML</p>
        </li>
        <li>
          <BsFillCaretRightFill fontSize={13} color="#64FFDA" />
          <p>CSS</p>
        </li>
        <li>
          <BsFillCaretRightFill fontSize={13} color="#64FFDA" />
          <p>Firebase</p>
        </li>
        <li>
          <BsFillCaretRightFill fontSize={13} color="#64FFDA" />
          <p>SAP ERP</p>
        </li>
        <li>
          <BsFillCaretRightFill fontSize={13} color="#64FFDA" />
          <p>GRC AC</p>
        </li>
      </ul>
    </div>
  );
};

export default StackList;
