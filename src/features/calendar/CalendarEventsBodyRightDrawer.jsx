/* eslint-disable react/prop-types */
import moment from "moment";

export const THEME_BG = [
  {
    title: "Product call",
    theme: "GREEN",
    startTime: moment().add(-12, "d").startOf("day"),
    endTime: moment().add(-12, "d").endOf("day"),
  },
  {
    title: "Meeting with tech team",
    theme: "PINK",
    startTime: moment().add(-8, "d").startOf("day"),
    endTime: moment().add(-8, "d").endOf("day"),
  },
  {
    title: "Meeting with Cristina",
    theme: "PURPLE",
    startTime: moment().add(-2, "d").startOf("day"),
    endTime: moment().add(-2, "d").endOf("day"),
  },
  {
    title: "Meeting with Alex",
    theme: "BLUE",
    startTime: moment().startOf("day"),
    endTime: moment().endOf("day"),
  },
  {
    title: "Product Call",
    theme: "GREEN",
    startTime: moment().startOf("day"),
    endTime: moment().endOf("day"),
  },
  {
    title: "Client Meeting",
    theme: "PURPLE",
    startTime: moment().startOf("day"),
    endTime: moment().endOf("day"),
  },
  {
    title: "Client Meeting",
    theme: "ORANGE",
    startTime: moment().add(3, "d").startOf("day"),
    endTime: moment().add(3, "d").endOf("day"),
  },
  {
    title: "Product meeting",
    theme: "PINK",
    startTime: moment().add(5, "d").startOf("day"),
    endTime: moment().add(5, "d").endOf("day"),
  },
  {
    title: "Sales Meeting",
    theme: "GREEN",
    startTime: moment().add(8, "d").startOf("day"),
    endTime: moment().add(8, "d").endOf("day"),
  },
  {
    title: "Product Meeting",
    theme: "ORANGE",
    startTime: moment().add(8, "d").startOf("day"),
    endTime: moment().add(8, "d").endOf("day"),
  },
  {
    title: "Marketing Meeting",
    theme: "PINK",
    startTime: moment().add(8, "d").startOf("day"),
    endTime: moment().add(8, "d").endOf("day"),
  },
  {
    title: "Client Meeting",
    theme: "GREEN",
    startTime: moment().add(8, "d").startOf("day"),
    endTime: moment().add(8, "d").endOf("day"),
  },
  {
    title: "Sales meeting",
    theme: "BLUE",
    startTime: moment().add(12, "d").startOf("day"),
    endTime: moment().add(12, "d").endOf("day"),
  },
  {
    title: "Client meeting",
    theme: "PURPLE",
    startTime: moment().add(16, "d").startOf("day"),
    endTime: moment().add(16, "d").endOf("day"),
  },
];

function CalendarEventsBodyRightDrawer({ filteredEvents }) {
  return (
    <>
      {filteredEvents.map((e, k) => {
        return (
          <div
            key={k}
            className={`grid mt-3 card  rounded-box p-3 ${
              THEME_BG[e.theme] || ""
            }`}
          >
            {e.title}
          </div>
        );
      })}
    </>
  );
}

export default CalendarEventsBodyRightDrawer;
