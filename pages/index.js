import { Provider } from "react-redux";
import Video from "../components/Video";
import store from "../store/store";

export default function Home() {
  return (
    <Provider store={store}>
{/*      <link
        rel="preload"
        as="video"
        type="video/mp4"
        href="https://m202.syncusercontent1.com/mfs-60:30ce871c8ca5ff6e06bfdc09c1c18b5a=============================/p/stibo_main.mp4?allowdd=0&datakey=FVeulc/AHkFfZD3s6iRGZdZ7YbqdertKdoI3jj7RNU0dvqyowIWfOftGjISstnkzH1/57GRp0TLWNvCpByCEXAjarPZRezBO/1HyEBJNLwk73TszOVnWtNIMquHcLDH9PYgwi/aDS+fLAQQdm0zwjMzNTGujkM1h/5TY3tEHagbiUYzSwZ3nxks2+evPiW9pXj/6O9bZJ3cJxlGVEi47Ou2Qfw3MdLc2ygpgzYVofoSp105OLxHB/E/stQm780Q8a6KXlqVoY4SiE5dV+hHsCOaLcaxxtsMxaRWhnVEcZiLNiiQ6bLWE2wviDBqv1ClGJqU0hC54llo9bLkpz9YdEA&engine=ln-1.11.7&errurl=Wn+r89Nujwqdzvqw6Sl3jprfbduxTbX26pXoVhHyg76mxux0nJMGGcUaW6D15dnfLSj2ddXsZdPYpuLbmjPm/CAVBBQ4KdGPehTbWj2QXHSSYSlMyOuk0Jm1knKMhhC+eFwOpXvM8OLmlMPxb9g/lwfTeaEGGv+YeG8Wa39wi1TSYP+HUr8yEJjCUjFwJTwtPGJEEIaJ2v/MDYYYzh52Mz58EJqKCKTOoBl2Zm62ulc6XFRqyWkIii1VnqPVgShIMSTPRZdy9dtcBnHn9YQMQienur4kGWQF2IynVdUv4KWF2+jB2oeFUjnPCDqdZouo11c53/lKtH9rqwd8iizFcQ==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0ic3RpYm9fbWFpbi5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnc3RpYm9fbWFpbi5tcDQ7&ipaddress=3642533107&linkcachekey=770774fc0&linkoid=1252370013&mode=101&sharelink_id=7016352250013&timestamp=1639131159558&uagent=b274bf3fe732d1c6ef10617981b01b2389f6a386&signature=feba784da50cf58018e6539022de7aef2288bc8c&cachekey=60:30ce871c8ca5ff6e06bfdc09c1c18b5a============================="
      />
*/}
      <Video />
    </Provider>
  );
}
