import React from "react";
import Button from "./Button";

const Header = (title) => {
  return (
    <header className="header">
      <h1>{title.title}</h1>
      <Button />
    </header>
  );
};

// function Header() {
//   return (
//     <header>
//       <h1>Header</h1>
//     </header>
//   );
// }

// class Header extends React.Component {
//   render() {
//     return <h1>Header</h1>;
//   }
// }
// const headerStyle = {
//   color: "red",
//   backgroundColor: "yellow",
//   padding: "10px",
// };

export default Header;
