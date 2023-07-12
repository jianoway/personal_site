import { useTheme } from "@emotion/react";
import { useState } from "react";
import Typewriter from "typewriter-effect";

const HomeIntro = () => {
  const theme: any = useTheme();
  const [titleLoaded, setTitleLoaded] = useState(false);

  const makeBold = (text: string) => {
    return (
      <>
        &nbsp;
        <span className="bold_text" style={{ color: theme.primary }}>
          <code>{text}</code>
        </span>
        &nbsp;
      </>
    );
  };

  return (
    <div className="home-intro_container">
      <div className="intro-header">
        <div className="intro-header-title" style={{ color: theme.primary }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`<code>Jian Wei</code>`)
                .pauseFor(50)
                .callFunction(() => setTitleLoaded(true))
                .start();
            }}
          />
        </div>
        <div className="intro-header-subtitle">
          <p>Developer, Student</p>
        </div>
      </div>
      <div className="intro-body">
        <p>Hello, if you're reading this it means you've found me!</p>
        <p>
          I'm currently a final year{makeBold("Computer Science")}
          major at the National University of Singapore.
        </p>
        <p>
          My interests in the field include {makeBold("Software Engineering")},{" "}
          {makeBold("Cybersecurity")}
          and {makeBold("Machine Learning")}. Aside from that I love the
          outdoors and trying new food!
        </p>
      </div>
    </div>
  );
};

export default HomeIntro;
