import propTypes from "prop-types"
const DashboardIcon = (props) => {
  const {width, height, color} = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
    >
      <defs></defs>
      <path
        d="M7.708 0h-6.25A1.46 1.46 0 000 1.458v3.75a1.46 1.46 0 001.458 1.459h6.25a1.46 1.46 0 001.459-1.459v-3.75A1.46 1.46 0 007.708 0zm0 0M7.708 8.333h-6.25A1.46 1.46 0 000 9.791v8.75a1.46 1.46 0 001.458 1.46h6.25a1.46 1.46 0 001.458-1.458v-8.75a1.46 1.46 0 00-1.458-1.46zm0 0M18.541 13.333h-6.25a1.46 1.46 0 00-1.458 1.458v3.75a1.46 1.46 0 001.458 1.46h6.25a1.46 1.46 0 001.458-1.458v-3.75a1.46 1.46 0 00-1.458-1.46zm0 0M18.541 0h-6.25a1.46 1.46 0 00-1.458 1.458v8.75a1.46 1.46 0 001.458 1.458h6.25a1.46 1.46 0 001.458-1.458v-8.75A1.46 1.46 0 0018.541 0zm0 0"
      />
    </svg>
  );
};


DashboardIcon.propTypes = {
  color: propTypes.string.isRequired,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
}
export default DashboardIcon
