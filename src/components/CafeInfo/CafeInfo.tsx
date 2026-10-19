import css from "./CafeInfo.module.css";

const CafeInfo = () => {
  return (
    <div className={css["container"]}>
      <h1 className={css["title"]}>Sip Happens Cafe</h1>
      <p className={css["text"]}>
        Please rate our service by selecting one of options below.
      </p>
    </div>
  );
};

export default CafeInfo;
