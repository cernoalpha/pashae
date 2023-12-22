import React from "react";
import * as Components from '../components/Componentst';

function App() {
    const [signIn, toggle] = React.useState(true);
     return(
      <>
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