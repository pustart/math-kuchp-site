
import DisplaySize from "./DeviceWidth";
const determineDisplaySize = (width) => {
  if (width >= DisplaySize.mobile) {
    return DisplaySize.computer
  } else {
    return DisplaySize.mobile;
  }
}
export default determineDisplaySize;
