import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalContext from "../../context/GlobalContext";
import { addNewProject, resetState } from "../../Redux/App_reducer/action";
import { getMonth } from "../../utils/utils";
import Month from "./Month";

const Calender = () => {
  let dispatch = useDispatch();
  const { email } = useSelector((state) => state.logger.isLogin.data.data);
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    try {
      dispatch(resetState());
      fetch(`https://coschedule-api.herokuapp.com/api/tasks/?email=${email}`)
        .then((res) => res.json())
        .then((res) => {
          res.map((element) => {
            const payload = {
              title: element.title,
              color: element.color,
              date: element.date,
              refNO: element.refNO,
            };
            dispatch(addNewProject(payload));
          });
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div>
      <Month month={currentMonth} />
    </div>
  );
};

export default Calender;
