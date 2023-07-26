import React, { useEffect } from "react";
import { Select, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setRegion, setRegionInfo } from "../../actions";
import "./FormInput.css";
import { data } from "../../data";

const { Option } = Select;

const FormInput = () => {
  const dispatch = useDispatch();
  const { selectedRegion } = useSelector((state) => state);
  const handleRegionSelect = (region) => {
    dispatch(setRegion(region));
  };

  const handleLoadClick = () => {
    const selectedRegionData = data.find((item) => selectedRegion === item.id);
    dispatch(setRegionInfo(selectedRegionData));
  };

  useEffect(() => {
    handleLoadClick()
  }, []);


  return (
    <div className="form-input-root">
      <Select
        className="dropdown-root"
        style={{ width: 200 }}
        value={selectedRegion}
        onChange={handleRegionSelect}
      >
        <Option value="us">United States</Option>
        <Option value="in">India</Option>
        <Option value="uk">United Kingdom</Option>
      </Select>
      <Button className="btn-load" onClick={handleLoadClick}>
        Load
      </Button>
    </div>
  );
};

export default FormInput;
