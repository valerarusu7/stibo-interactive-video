import ChoiceComponent from "./ChoiceComponent";
import Companies from "./Companies";
import { addAnswer } from "../store/reducers/interviewReducer";
import { useDispatch } from "react-redux";

function Choice({ question, onClick }) {
  const dispatch = useDispatch();

  function choose(choice) {
    dispatch(addAnswer(choice));
  }

  return (
    <div className="relative h-full ">
      {question === "q1" ? (
        <ChoiceComponent
          src={require("../assets/videos/loop_q1.mp4")}
          choice1="Bachelor project"
          choice2="Master thesis"
          onClick1={() => choose({ 1: "Bachelor Project" })}
          onClick2={() => choose({ 1: "Master Thesis" })}
        />
      ) : null}
      {question === "q2" ? (
        <ChoiceComponent
          src={require("../assets/videos/loop_q2.mp4")}
          choice1="Business potential"
          choice2="Tech and programming"
          onClick1={() => choose({ 2: "Business potential" })}
          onClick2={() => choose({ 2: "Tech and programming" })}
        />
      ) : null}
      {question === "q3" ? (
        <ChoiceComponent
          src={require("../assets/videos/loop_q3.mp4")}
          choice1="HQ in Denmark"
          choice2="Atlanta/London"
          onClick1={() => choose({ 3: "HQ in Denmark" })}
          onClick2={() => choose({ 3: "Atlanta/London" })}
        />
      ) : null}
      {question === "q4" ? (
        <ChoiceComponent
          src={require("../assets/videos/loop_q4.mp4")}
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
          src={require("../assets/videos/loop_q5.mp4")}
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
          src={require("../assets/videos/loop_q6.mp4")}
          choice1="Master data management"
          choice2="Software for storytelling"
          onClick1={() => choose({ 6: "Master data management" })}
          onClick2={() => choose({ 6: "Software for storytelling" })}
        />
      ) : null}
      {question === "q7" ? (
        <ChoiceComponent
          src={require("../assets/videos/loop_q7.mp4")}
          choice1="By comparing different theories"
          choice2="Experimenting with real world cases"
          onClick1={() => choose({ 7: "By comparing different theories" })}
          onClick2={() => choose({ 7: "Experimenting with real world cases" })}
        />
      ) : null}
      {question === "q8" ? (
        <ChoiceComponent
          src={require("../assets/videos/loop_q8.mp4")}
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
          src={require("../assets/videos/loop_q9.mp4")}
          choice1="Yes"
          choice2="No"
          onClick1={() => choose({ 9: "Yes" })}
          onClick2={() => choose({ 9: "No" })}
        />
      ) : null}
      {question === "q10" ? (
        <ChoiceComponent
          src={require("../assets/videos/loop_q10.mp4")}
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
          src={require("../assets/videos/loop_q11.mp4")}
          choice1="Fronted/UX"
          choice2="Backend/Development"
          onClick1={() => choose({ 11: "Fronted/UX" })}
          onClick2={() => choose({ 11: "Backend/Development" })}
        />
      ) : null}

      {question === "q12" ? (
        <ChoiceComponent
          src={require("../assets/videos/loop_q12.mp4")}
          choice1="Meat/fish"
          choice2="Salad"
          muted={true}
          onClick1={() => choose({ 12: "Meat/fish" })}
          onClick2={() => choose({ 12: "Salad" })}
        />
      ) : null}

      {question === "companies" ? (
        <Companies onClick={() => choose({ 0: "Stibo Accelerator" })} />
      ) : null}
    </div>
  );
}

export default Choice;
