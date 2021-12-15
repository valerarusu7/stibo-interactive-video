import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import ChoiceComponent from "./ChoiceComponent";
import Companies from "./Companies";
import { addAnswer } from "../store/reducers/interviewReducer";

function Choice({ question, onClick }) {
  const dispatch = useDispatch();
  const { videoSources } = useSelector((state) => state.interview);
  // const video1 = useRef();
  // useEffect(() => {
  //   var r = new XMLHttpRequest();
  //   r.onload = function () {
  //     video1.current.src = URL.createObjectURL(r.response);
  //     video1.current.load();
  //   };

  //   r.open("GET", "../assets/videos/loop1.mp4");

  //   r.responseType = "blob";
  //   r.send();
  // }, []);
  {
    console.log(videoSources);
  }

  function choose(choice) {
    dispatch(addAnswer(choice));
  }

  return (
    <div className="relative h-full ">
      {question === "q1" ? (
        <ChoiceComponent
          src={videoSources[0].src}
          choice1="Bachelor project"
          choice2="Master thesis"
          onClick1={() => choose({ 1: "Bachelor Project" })}
          onClick2={() => choose({ 1: "Master Thesis" })}
        />
      ) : null}
      {question === "q2" ? (
        <ChoiceComponent
          src={videoSources[1].src}
          choice1="Business potential"
          choice2="Tech and programming"
          onClick1={() => choose({ 2: "Business potential" })}
          onClick2={() => choose({ 2: "Tech and programming" })}
        />
      ) : null}
      {question === "q3" ? (
        <ChoiceComponent
          src={videoSources[2].src}
          choice1="HQ in Denmark"
          choice2="Atlanta/London"
          onClick1={() => choose({ 3: "HQ in Denmark" })}
          onClick2={() => choose({ 3: "Atlanta/London" })}
        />
      ) : null}
      {question === "q4" ? (
        <ChoiceComponent
          src={videoSources[3].src}
          choice1="That we provide you with a research problem"
          choice2="To work on your own idea"
          onClick1={() =>
            choose({ 4: "That we provide you with a research problem" })
          }
          onClick2={() => choose({ 4: "To work on your own idea" })}
        />
      ) : null}
      {question === "q5" ? (
        <ChoiceComponent
          src={videoSources[4].src}
          choice1="To work with something you already know"
          choice2="To investigate unknown teritorry"
          onClick1={() =>
            choose({ 5: "To work with something you already know" })
          }
          onClick2={() => choose({ 5: "To investigate unknown teritorry" })}
        />
      ) : null}
      {question === "q6" ? (
        <ChoiceComponent
          src={videoSources[5].src}
          choice1="Master data management"
          choice2="Software for storytelling"
          onClick1={() => choose({ 6: "Master data management" })}
          onClick2={() => choose({ 6: "Software for storytelling" })}
        />
      ) : null}
      {question === "q7" ? (
        <ChoiceComponent
          src={videoSources[6].src}
          choice1="By comparing different theories"
          choice2="Experimenting with real world cases"
          onClick1={() => choose({ 7: "By comparing different theories" })}
          onClick2={() => choose({ 7: "Experimenting with real world cases" })}
        />
      ) : null}
      {question === "q8" ? (
        <ChoiceComponent
          src={videoSources[7].src}
          choice1="An open environment with other people"
          choice2="My own quiet office space"
          onClick1={() =>
            choose({ 8: "An open environment with other people" })
          }
          onClick2={() => choose({ 8: "My own quiet office space" })}
        />
      ) : null}
      {question === "q9" ? (
        <ChoiceComponent
          src={videoSources[8].src}
          choice1="Yes"
          choice2="No"
          onClick1={() => choose({ 9: "Yes" })}
          onClick2={() => choose({ 9: "No" })}
        />
      ) : null}
      {question === "q10" ? (
        <ChoiceComponent
          src={videoSources[9].src}
          choice1="I'm joining an established company"
          choice2="I'm using my project to kickstart my own startup"
          onClick1={() => choose({ 10: "I'm joining an established company" })}
          onClick2={() =>
            choose({ 10: "I'm using my project to kickstart my own startup" })
          }
        />
      ) : null}

      {question === "q11" ? (
        <ChoiceComponent
          src={videoSources[10].src}
          choice1="Fronted/UX"
          choice2="Backend/Development"
          onClick1={() => choose({ 11: "Fronted/UX" })}
          onClick2={() => choose({ 11: "Backend/Development" })}
        />
      ) : null}

      {question === "q12" ? (
        <ChoiceComponent
          src={videoSources[11].src}
          choice1="Salad"
          choice2="Meat/fish"
          muted={true}
          onClick1={() => choose({ 12: "Salad" })}
          onClick2={() => choose({ 12: "Meat/fish" })}
        />
      ) : null}

      {question === "companies" ? (
        <Companies onClick={() => choose({ 0: "Stibo Accelerator" })} />
      ) : null}
    </div>
  );
}

export default Choice;
