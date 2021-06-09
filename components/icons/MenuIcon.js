import propTypes from "prop-types"
const MenuIcon = (props) => {
  const {width, height, color} = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
    >
      <defs></defs>
      <path d="M2.857 14.286a2.857 2.857 0 102.857 2.857 2.86 2.86 0 00-2.857-2.857zM10 14.286a2.857 2.857 0 102.857 2.857A2.86 2.86 0 0010 14.286zM17.143 14.286A2.857 2.857 0 1020 17.143a2.86 2.86 0 00-2.857-2.857zM2.857 7.143A2.857 2.857 0 105.714 10a2.86 2.86 0 00-2.857-2.857zM10 7.143A2.857 2.857 0 1012.857 10 2.86 2.86 0 0010 7.143zM17.143 7.143A2.857 2.857 0 1020 10a2.86 2.86 0 00-2.857-2.857zM2.857 0a2.857 2.857 0 102.857 2.857A2.86 2.86 0 002.857 0zM10 0a2.857 2.857 0 102.857 2.857A2.86 2.86 0 0010 0zM17.143 5.714a2.857 2.857 0 10-2.857-2.857 2.86 2.86 0 002.857 2.857z" />
    </svg>
  );
};


MenuIcon.propTypes = {
  color: propTypes.string.isRequired,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
}
export default MenuIcon
