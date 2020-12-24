import moment from 'moment';

const DateFormatter = (date, perc, tbd, net) => {
  let resultDate;

  if(tbd){
    resultDate = "To be determined";
  }
  if(net){
    resultDate = `No earlier than ${moment(date).format("MMMM YYYY")}`;
  }
  
  switch (perc) {
    case "hour":
      resultDate = moment(date).format("MMMM Do YYYY, h:mm a");
      break;
    case "day":
      resultDate = moment(date).format("MMMM Do YYYY");
      break;
    case "month":
      resultDate = moment(date).format("MMMM YYYY");
      break;
    case "quarter":
      resultDate = "Q" + moment(date).utc().quarter();
      break;
    case "half":
      resultDate = moment(date).utc().quarter() <= 2 ? "H1" : "H2";
      break;
    default:
      break;
  }

  return resultDate;
}

export default DateFormatter;