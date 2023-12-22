import React, { useState } from "react";
import styled from "styled-components";
import * as Components from "../components/Components";

function App() {
  

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [signIn, toggle] = React.useState(true);
  return (
    <>
      <center>
        <Components.Container>
          <Components.SignUpContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Teacher</Components.Title>
              <Components.Input required type="email" placeholder="email" />
              <Components.Input required type="text" placeholder="Name" />
              <Components.Input type="password" placeholder="Password" />
              
              <br />

              <Components.Button style={{ cursor: "pointer" }}>
                Sigin Up
              </Components.Button>
            </Components.Form>
          </Components.SignUpContainer>

          <Components.SignInContainer signinIn={signIn}>
            <Components.Form>
              <Components.Title>Student</Components.Title>
              <Components.Input type="email" placeholder="email" />
              <Components.Input type="email" placeholder="Parent's Email" />
              <Components.Input
                type="tel"
                pattern="[0-9]{10}"
                placeholder="Phone"
                maxLength="10"
              />
              <Components.Input type="password" placeholder="Password" />
              <br />
              <a href="/">
                <Components.Button style={{ cursor: "pointer" }}>
                  Sigin Up
                </Components.Button>
              </a>
            </Components.Form>
          </Components.SignInContainer>

          <Components.OverlayContainer signinIn={signIn}>
            <Components.Overlay signinIn={signIn}>
              <Components.LeftOverlayPanel signinIn={signIn}>
                <Components.Title>For Students</Components.Title>
                <Components.Paragraph>
                  Students Sign Up here
                </Components.Paragraph>
                <Components.GhostButton
                  onClick={() => toggle(true)}
                  style={{ cursor: "pointer" }}
                >
                  Sign Up
                </Components.GhostButton>
              </Components.LeftOverlayPanel>

              <Components.RightOverlayPanel signinIn={signIn}>
                <Components.Title>For Teachers</Components.Title>
                <Components.Paragraph>
                  Teachers Sign up here
                </Components.Paragraph>
                <Components.GhostButton
                  onClick={() => toggle(false)}
                  style={{ cursor: "pointer" }}
                >
                  Sign Up
                </Components.GhostButton>
              </Components.RightOverlayPanel>
            </Components.Overlay>
          </Components.OverlayContainer>
        </Components.Container>
      </center>
    </>
  );
}

export default App;
