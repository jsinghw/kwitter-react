import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Signup from "../components/SignupForm/SignupForm";
import KweetFeed from "./KweetFeed";
import Users from "./Users";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Signup: { path: "/signup", component: Signup },
  KweetFeed: { path: "/kweetfeed/:username", component: KweetFeed },
  Users: { path: "/users", component: Users },
  NotFound: { path: "*", component: NotFound }
};
