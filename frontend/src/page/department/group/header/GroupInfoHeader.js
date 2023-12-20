import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../../css/department/group/Group_info_list.module.css";

const GroupInfoHeader = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.filter}>장기 결석자</div>
      <div className={styles.post}>
        <Link
          to={`/${props.params[0]}/${props.params[1]}/absent`}
          className={styles.post_link}
        >
          결석인원
        </Link>
      </div>
    </div>
  );
};

export default GroupInfoHeader;