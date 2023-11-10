import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const FirstDepartment = () => {
  // navigate
  const navigate = useNavigate();

  // 부서 별 상세 Page
  const navigateToKindergarten = () => {
    navigate("/kindergarten");
  };
  const navigateToHolykids = () => {
    navigate("/holykids");
  };
  const navigateToPaulCommunity = () => {
    navigate("/paul-community");
  };
  const navigateToJoshua = () => {
    navigate("/joshua");
  };

  // 전체 인원 리스트 Page
  const navigateToKindergartenInfo = () => {
    navigate("/kindergarten/info");
  };
  const navigateToHolykidsInfo = () => {
    navigate("/holykids/info");
  };
  const navigateToPaulCommunityInfo = () => {
    navigate("/paul-community/info");
  };
  const navigateToJoshuaInfo = () => {
    navigate("/joshua/info");
  };

  return (
    <div>
      <div>
        <button onClick={navigateToKindergarten}>영유치부</button>
        <button onClick={navigateToHolykids}>홀리키즈</button>
        <button onClick={navigateToPaulCommunity}>바울공동체</button>
        <button onClick={navigateToJoshua}>여호수아 청년부</button>
      </div>
      <div>
        <button onClick={navigateToKindergartenInfo}>info</button>
        <button onClick={navigateToHolykidsInfo}>info</button>
        <button onClick={navigateToPaulCommunityInfo}>info</button>
        <button onClick={navigateToJoshuaInfo}>info</button>
      </div>
    </div>
  );
};

export default FirstDepartment;