import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import KindergartenInfo from "../page/personnel-info/KindergartenInfo";
import HolyKidsInfo from "../page/personnel-info/HolyKidsInfo";
import PaulCommunityInfo from "../page/personnel-info/PaulCommunityInfo";
import JoshuaInfo from "../page/personnel-info/JoshuaInfo";
import Kindergarten from "../page/small-group/Kindergarten";
import HolyKids from "../page/small-group/HolyKids";
import PaulCommunity from "../page/small-group/PaulCommunity";
import Joshua from "../page/small-group/Joshua";

export default () => (
  <BrowserRouter>
    <Routes>
      {/* 부서 별 인원 리스트 페이지 */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/kindergarten" element={<Kindergarten />}></Route>
      <Route path="/holykids" element={<HolyKids />}></Route>
      <Route path="/paul-community" element={<PaulCommunity />}></Route>
      <Route path="/joshua" element={<Joshua />}></Route>

      {/* 부서 별 상세 페이지 */}
      <Route path="/kindergarten/info" element={<KindergartenInfo />}></Route>
      <Route path="/holykids/info" element={<HolyKidsInfo />}></Route>
      <Route
        path="/paul-community/info"
        element={<PaulCommunityInfo />}
      ></Route>
      <Route path="/joshua/info" element={<JoshuaInfo />}></Route>
    </Routes>
  </BrowserRouter>
);