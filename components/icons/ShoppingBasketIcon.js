import propTypes from "prop-types"
const ShoppingBasketIcon = (props) => {
  const {width, height, color} = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
    >
      <defs></defs>
      <path d="M19.65 6.86a1.569 1.569 0 00-1.17-.573h-1.219L12.556.353a.864.864 0 00-1.195-.175.911.911 0 00-.171 1.222c0 .025.024.025.024.05l3.876 4.837H4.657L8.509 1.45A.88.88 0 008.46.228a.834.834 0 00-1.195.05l-.073.075-4.705 5.959h-.975A1.537 1.537 0 000 7.858a1.241 1.241 0 00.024.3l1.95 10.048a2.184 2.184 0 002.145 1.8h11.752a2.184 2.184 0 002.145-1.8l1.95-10.048a1.571 1.571 0 00-.316-1.298zM7.46 15.013a.854.854 0 11-1.707 0v-3.54a.854.854 0 111.707 0zm3.389 0a.854.854 0 11-1.707 0v-3.54a.854.854 0 111.707 0zm3.364 0a.854.854 0 11-1.707 0v-3.54a.854.854 0 111.707 0z" />
    </svg>
  );
};


ShoppingBasketIcon.propTypes = {
  color: propTypes.string.isRequired,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
}
export default ShoppingBasketIcon
