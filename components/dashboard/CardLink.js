import Link from "next/link"
import styles from "./CardLink.module.css"
import { Video,ArrowUp } from "react-feather";
import propType from "prop-types"
import IndicatorIcon from "./IndicatorIcon";
export default function CardLink({cardTitle} = props) {
  return (
    <Link href={`/${cardTitle}`}>
      <a className={styles.content_navigation_card}>
        <div className={styles.card_header}>
          <span>{cardTitle}</span>
          <IndicatorIcon bgColor="var(--color-green-lightest)">
            <Video color="var(--color-green-light)" size="20" />
          </IndicatorIcon>
        </div>
        <div className={styles.card_content}>
          <span>200</span>
          <div className={styles.card_content__bottom}>
            <span>
              <ArrowUp size="12" />
            </span>
            <span>20</span>
            <span>More than yesterday</span>
          </div>
        </div>
      </a>
    </Link>
  );
}

CardLink.prototype = {
  cardTitle: propType.string.isRequired
}
