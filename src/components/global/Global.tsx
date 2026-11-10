import type { ReactNode } from "react";
import type { PageInfo } from "./type";
import css from "./Global.module.css";

interface GlobalProps extends PageInfo {
  children?: ReactNode; // всё, что положим между <Global>…</Global>
}

const Global = ({ date, module, title, children }: GlobalProps) => {
  return (
    <div className={css.page}>
      <div className={css.info}>
        <p className={css.infoText}>
          Date: <span className={css.spanDate}>{date}</span>
        </p>
        <p className={css.infoText}>
          Module: <span className={css.spanModule}>{module}</span>
        </p>
      </div>
      <h1 className={css.title}>
        Working with: <span className={css["title-span"]}>{title}</span>
      </h1>

      {children}
    </div>
  );
};

export default Global;
