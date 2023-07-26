import React from "react";
import "./RegionInfo.css";
import Card from "antd/es/card/Card";
import { useSelector } from "react-redux";
const RegionInfo = () => {
  const { regionInfo } = useSelector((state) => state);
  return (
    <div className="region-info-root">
      <Card
        style={{ width: "100%" }}
        title="Country Insights"
        hoverable
        cover={
          <div className="card-img-container">
            <img src={regionInfo?.image} alt="card-img" className="card-img" />
          </div>
        }
      >
        <div className="currency-contain">
          <p>
            <b>Currency:</b> {regionInfo?.currency}
          </p>
          <img
            src={regionInfo.currencyicon}
            height={20}
            width={20}
            alt="icon"
          />
        </div>
        <p>
          <b>Speed Unit</b> {regionInfo?.unitSpeedLong}
        </p>
        <p>
          <b>Distance Unit</b> {regionInfo?.unitDistance}
        </p>
        <p>
          <b>Volume Unit</b> {regionInfo?.unitVolume}
        </p>
        <p>
          <b>Timezone</b> {regionInfo?.timeZone?.long}
        </p>
      </Card>
    </div>
  );
};

export default RegionInfo;
