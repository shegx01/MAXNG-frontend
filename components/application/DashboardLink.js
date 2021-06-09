import styles from "./DashboardLink.module.css"
import DashboardIcon from "../icons/DashboardIcon"
import BuildingIcon from "../icons/BuldingIcon"
import ShoppingBasketIcon from "../icons/ShoppingBasketIcon";
import MenuIcon from "../icons/MenuIcon";
import propTypes from "prop-types";
import Link from "next/link";
import { HardDrive } from "react-feather"

const DashBoardLink = (props) => {
  const { link, iconColor } = props;
  return (
    <div className={styles.dashboard__links}>
      {link.name === "dashboard" ? (
        <DashboardIcon color={iconColor} width={20} height={20} />
      ) : link.name === "starships" ? (
        <BuildingIcon color={iconColor} width={20} height={20} />
      ) : link.name === "people" ? (
        <ShoppingBasketIcon color={iconColor} width={20} height={20} />
      ) :  link.name === "species" ? <MenuIcon color={iconColor} width={20} height={20} /> :  link.name === "vehicles" ? <HardDrive color={iconColor} /> : null}
      <Link href={link.path}>
        <a>{link.name}</a>
      </Link>
    </div>
  );
};


DashBoardLink.propTypes = {
  link: propTypes.object.isRequired,
  iconColor: propTypes.string.isRequired
}


export default DashBoardLink
