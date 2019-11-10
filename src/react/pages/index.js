import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  NotFound: { path: "*", component: NotFound }
};
