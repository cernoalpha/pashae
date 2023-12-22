import React from "react";
import * as Components from '../components/Componentst';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
    const [signIn, toggle] = React.useState(true);
     return(
      <>
      <Navbar bg="dark" variant="dark" expand="lg">
  <Navbar.Brand as={Link} to="/"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-start">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

      <center>
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                 <Components.Title>Teacher</Components.Title>
                      <Components.Input type='email' placeholder='email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sigin In</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Student</Components.Title>
                      <Components.Input type='email' placeholder='email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sigin In</Components.Button>
                      
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>For Students</Components.Title>
                     <Components.Paragraph>
                         Students login here
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>For Teachers</Components.Title>
                       <Components.Paragraph>
                           Teachers login here
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                              Sign In
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
         </center>
         </>
     )
}

export default App;