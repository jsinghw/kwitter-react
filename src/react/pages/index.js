import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import KweetFeed from "./KweetFeed";
import MessageFeed from "./MessageFeed"


export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  KweetFeed: {path: "/kweetfeed/:username", component: KweetFeed},
  MessageFeed: {path:"/messages", component:MessageFeed},
  NotFound: { path: "*", component: NotFound },
};
