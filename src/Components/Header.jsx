/*   PARRENT TO CHILD DATA PASSING\

function Header({ message}) {
  return (
    <>
    <p>Message from parent: {message}</p>
    </>
  );
}
export default Header;

*/



           /* CHILD TO PARENT DATA PASSING

function Header({ getDataFromChild }) {
  let message = "Hi , How are you?";

  getDataFromChild(message);

  return (
    <>
      <h1>Hello World !</h1>
    </>
  );
}
export default Header;

*/
