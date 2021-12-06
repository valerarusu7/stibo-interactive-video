import { Provider } from "react-redux";
import Video from "../components/Video";
import store from "../store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Video />
    </Provider>
  );
}
