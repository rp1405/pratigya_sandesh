const now = new Date();
var date = now.getDate() + "";
if (date.length < 2) date = "0" + date;
var month = now.getMonth() + "";
if (month.length < 2) month = "0" + month;
const fullDate = date + month + now.getFullYear();
export default fullDate;
