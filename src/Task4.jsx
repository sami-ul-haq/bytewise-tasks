// Passing event handlers as props
const AlertButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};


// Passing event handlers as props
const Button = ({children, onClick}) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

const PalyButton = ({movieName}) => {
  const handleClick = () =>{
    alert(`Playing... ${movieName}`);
  }

  return (
    <Button onClick={handleClick}>Click to Play Movie [Spider Man]</Button>
  )

}

const Task4 = () => {
  return (
    <div>
     
     <h3>Reading props in event handlers</h3>
      <AlertButton message={"Hi, I'm Passed through props"}>
        Click Me
      </AlertButton>

      <h3>Passing event handlers as props</h3>
       
      <PalyButton movieName="Spider Man"/>

    </div>
  );
};

export default Task4;
