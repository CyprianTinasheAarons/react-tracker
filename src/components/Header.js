import Button from "./Button";

const Header = (props) => {
  return (
    <header className="container">
      <h1 style={headingStyle}>{props.title}</h1>
      <Button
        text={props.showAdd ? "Close" : "Add"}
        color={props.showAdd ? "red" : "green"}
        onClick={props.onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

const headingStyle = {
  color: "black",
};

export default Header;
