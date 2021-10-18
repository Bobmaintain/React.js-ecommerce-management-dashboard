import {Container, Navbar, Nav, Button} from "react-bootstrap"

function logout(){
  localStorage.removeItem("user");
  window.location.href = "/login";
}

function NavbarComponent() {
  const isAuthenticated = localStorage.getItem("user") || false;
 
  if(isAuthenticated){

  return (
   <Navbar bg="dark" variant="dark" fixed="top">
    <Container>

     <Navbar.Brand href="/home">
      <i className='fas fa-home'></i>
     </Navbar.Brand>

     <Nav className="me-auto">
      <Nav.Link href="/create">New Product</Nav.Link>
     </Nav>

     <Nav className="me-auto">          
     </Nav>
        
     <Nav>
      <Button onClick={()=>{logout()}}>
       <i className='fas fa-sign-out-alt'></i>
      </Button>
     </Nav>

    </Container>
   </Navbar>
  )}

return (<div/>)
}
export default NavbarComponent;