import data from "./src/data.json";
import currentDate from "./src/currentDate";

const index = (props) => {
  return props.dini || props.milli
    ? data["dini"][currentDate] != undefined
      ? data["dini"][currentDate]
      : data["milli"][currentDate] != undefined
      ? data["milli"][currentDate]
      : props.motivasyon
      ? data["motivasyon"][Math.floor(Math.random() * data.motivasyon.length)]
          .mesaj
      : null
    : null;
};

export default index;
