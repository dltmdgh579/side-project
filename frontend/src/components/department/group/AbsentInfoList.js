import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/department/group/Group_absent_info_list.module.css";

const GroupAbsentInfoList = (props) => {
  const { id, name, phone } = props.info;

  return (
    <div className={styles.container}>
      <Link to={"/detail/" + id} className={styles.link}>
        <div className={styles.info_container}>
          <img
            src="https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
            className={styles.profile_image}
          ></img>
          <div className={styles.text_container}>
            <div className={styles.text_name}>{name}</div>
          </div>
          <hr />
          <div>
            <div className={styles.text_phone}>{phone}</div>
          </div>
          <hr />
        </div>
      </Link>
    </div>
  );
};

export default GroupAbsentInfoList;
