import DisplaySize from './DeviceWidth';

const determineDisplaySize = (width) => {
  if (width >= DisplaySize.mobile) {
    return DisplaySize.computer;
  }
  return DisplaySize.mobile;
};
export default determineDisplaySize;
