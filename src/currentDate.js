var today = new Date();
var dd = today.getDate() + 1;
var mm = today.getMonth() + 1;
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
export default dd + "-" + mm;
