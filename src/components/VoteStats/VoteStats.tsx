import css from "./VoteStats.module.css";

const VoteStats = () => {
  return (
    <div className={css["container"]}>
      <p className={css["stat"]}>
        Good: <strong>0</strong>
      </p>
      <p className={css["stat"]}>
        Neutral: <strong>0</strong>
      </p>
      <p className={css["stat"]}>
        Bad: <strong>0</strong>
      </p>
      <p className={css["stat"]}>
        Total: <strong>0</strong>
      </p>
      <p className={css["stat"]}>
        Positive: <strong>0%</strong>
      </p>
    </div>
  );
};

export default VoteStats;
