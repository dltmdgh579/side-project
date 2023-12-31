import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/department/group/Group_info_list.module.css";

const GroupInfoList = (props) => {
  const { id, name } = props.info;
  const check = props.check;
  const checkAbsentee = props.checkFunction;

  const [absentee, setAbsentee] = useState([]);
  const [absentActive, setAbsentActive] = useState(false);

  const checkAbsent = () => {
    const isAbsent = !absentActive;
    setAbsentActive(isAbsent);
    checkAbsentee({ id, name, isAbsent });
  };

  return (
    <div className={styles.container}>
      {check ? (
        <div
          className={
            absentActive ? styles.info_container_active : styles.info_container
          }
          onClick={() => checkAbsent()}
        >
          <img
            src="https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
            className={styles.profile_image}
          ></img>
          <div className={styles.text_container}>
            <div className={styles.text_name}>{name}</div>
          </div>
          <hr />
        </div>
      ) : (
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
          </div>
        </Link>
      )}
    </div>
  );
};

export default GroupInfoList;
