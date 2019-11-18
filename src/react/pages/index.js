import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import Signup from "./Signup";
import MessageFeed from "./MessageFeed";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  Signup: {path: "/signup", component: Signup},
  MessageFeed: {path: "/messagefeed", component: MessageFeed},
  NotFound: { path: "*", component: NotFound },
};
