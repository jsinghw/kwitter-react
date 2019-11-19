import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Signup from "./Signup";
import KweetFeed from "./KweetFeed";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Signup: {path: "/signup", component: Signup},
  KweetFeed: {path: "/kweetfeed/:username", component: KweetFeed},
  NotFound: { path: "*", component: NotFound },
};
