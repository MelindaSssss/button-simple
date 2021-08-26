import React, { useState, memo } from "react";
import "./ButtonSimple.css";
const ButtonSimple = () => {
  const [buttonText, setButtonText] = useState("login");
  return (
    <div className="button-container" onClick={() => setButtonText}>
      <span>{buttonText}</span>
    </div>
  );
};
export default memo(ButtonSimple);

// import React, { Component, memo } from "react";
// import "./ButtonSimple.css";

// class ButtonSimple extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       btnTxt: "Login",
//     };
//   }

//   render() {
//     const { btnTxt } = this.state;
//     return (
//       <div
//         className="button-container"
//         onClick={() => {
//           this.setState({ btnTxt: btnTxt === "Login" ? "Logout" : "Login" });
//         }}
//       >
//         <span>{btnTxt}</span>
//       </div>
//     );
//   }
// }

// export default memo(ButtonSimple);
