const now = new Date();
export function makeDate(givenDate) {
  var date = givenDate.getDate() + "";
  if (date.length < 2) date = "0" + date;
  var month = givenDate.getMonth() + 1 + "";
  if (month.length < 2) month = "0" + month;
  const fullDate = date + month + givenDate.getFullYear();
  return fullDate;
}
export function makeDate2(givenDate) {
  var date = givenDate.getDate() + "/";
  if (date.length < 2) date = "0" + date;
  var month = givenDate.getMonth() + 1 + "/";
  if (month.length < 2) month = "0" + month;
  const fullDate = date + month + givenDate.getFullYear();
  return fullDate;
}
export default makeDate(now);
