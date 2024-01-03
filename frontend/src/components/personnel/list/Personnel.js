import React, { useState } from "react";
import styles from "../../../css/personnel/list/Personnel_list.module.css";

const Personnel = (props) => {
  const { name, dateOfBirth, phone, address } = props.info;
  const isAdd = props.isAdd;

  return (
    <div className={isAdd ? styles.info_container_add : styles.info_container}>
      <img
        src="https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
        className={styles.profile_image}
      ></img>
      <div className={styles.text_container}>
        <div className={styles.text_name}>{name}</div>
        <div>{dateOfBirth}</div>
        <div>{phone}</div>
        <div>{address}</div>
      </div>
    </div>
  );
};

export default Personnel;