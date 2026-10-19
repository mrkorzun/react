import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css["page"]}>
      <CafeInfo />
      <VoteOptions />
      <VoteStats />
      <Notification />
    </div>
  );
};

export default App;
