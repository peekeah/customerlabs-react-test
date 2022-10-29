import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  styled,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import axios from "axios";
import DisplayFields from "./DisplayFields";
import SelectComponent from "./SelectComponent";
function DrawerComponent({ setOpen }) {
  const [segmentName, setSegmentName] = useState("");
  const [selectValue, setSelectValue] = useState("");
  
  const [availableFields, setAvailableFields] = useState([
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ]);

  const [selectedFields, setSelectedFields] = useState([
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
  ]);

  const StyledBox = styled(Box)({
    display: "flex",
    minHeight: "100vh",
    maxWidth: 550,
    flexDirection: "column",
    justifyContent: "space-between",
  });

  const addField = () => {
    let temp = availableFields.filter((s) => s.value === selectValue)[0];
    setSelectedFields((prev) => [...prev, temp]);
    let availabelFieldsCopy = availableFields.filter(
      (s) => s.value !== selectValue
    );
    setAvailableFields(availabelFieldsCopy);
    setSelectValue("");
  };

  const removeField = (value) => {
    let temp = selectedFields.filter((s) => s.value === value)[0];
    setAvailableFields((prev) => [...prev, temp]);
    let selectedFieldsCopy = selectedFields.filter((s) => s.value !== value);
    setSelectedFields(selectedFieldsCopy);
    setSelectValue("");
  };

  const disableButton = () => {
    if (segmentName.length < 1 || selectedFields.length < 1) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "https://webhook.site/0728d710-5dd2-4954-b27f-76a3fe34c4ea";
    const schema = selectedFields.map((s) => {
      let obj = {};
      obj[s.value] = s.label;
      return obj;
    });

    // Api Call
    const data = { segmentName, schema };

    try {
      await axios.post(URL, data);
    } catch (err) {
      console.log(err);
    }
    setOpen(false);
  };

  return (
    <Drawer anchor="right" open={true} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit}>
        <StyledBox>
          <div className="container flex-col justify-between">
            <div
              className="text-white text-xl p-5"
              style={{ backgroundColor: "#39aebc" }}
            >
              <IconButton onClick={() => setOpen(false)}>
                <ArrowBackIosIcon style={{ color: "white" }} />
              </IconButton>
              Saving Segment
            </div>
            <div className="p-5 space-y-5">
              <div className="segment-input my-5">
                <label className="my-3 font-semibold text-xl" htmlFor="segment">
                  Enter the name of Segment
                </label>
                <input
                  autoFocus="autofocus"
                  type="text"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 my-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(e) => setSegmentName(e.target.value)}
                  value={segmentName}
                />
              </div>
              <div className="font-semibold text-xl">
                To save your segment, you need to add the schemas to build the
                query
              </div>
              <div className="flex gap-5 justify-end">
                <div className="flex gap-1 justify-center items-center my-3">
                  <div className="h-3 w-3 bg-green-700 rounded-full"></div>
                  <div className="">-User Traits</div>
                </div>
                <div className="flex gap-1 justify-center items-center my-3">
                  <div className="h-3 w-3 bg-red-700 rounded-full"></div>
                  <div className="">-Group Traits</div>
                </div>
              </div>

              {/* // Mapping selected fields */}
              {selectedFields.length > 0 && (
                <DisplayFields
                  fields={selectedFields}
                  removeField={removeField}
                />
              )}
              <SelectComponent
                fields={availableFields}
                selectValue={selectValue}
                setSelectValue={setSelectValue}
              />
              <button
                className="focus:outline-none disabled:opacity-25"
                disabled={selectValue !== "" ? false : true}
              >
                <div
                  className="text-green-500 font-semibold cursor-pointer"
                  onClick={addField}
                >
                  +
                  <span
                    className="border-b-2 border-green-500"
                    style={{ paddingBottem: "1.3px" }}
                  >
                    Add new schema
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="bg-slate-100 h-30 p-8">
            <button
              className="bg-green-500 p-3 rounded-md text-white font-semibold disabled:opacity-25"
              type="submit"
              disabled={disableButton()}
            >
              Save the Segment
            </button>
            <button
              className="bg-white p-3 mx-5 rounded-md text-red-600 font-semibold"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </StyledBox>
      </form>
    </Drawer>
  );
}

export default DrawerComponent;
