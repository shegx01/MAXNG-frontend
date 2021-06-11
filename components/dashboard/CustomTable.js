import Table from "rc-table"
import propTypes from "prop-types"
import styles from "./CustomTable.module.css"
export default function CustomTable({ columns, data, title } = props) {

  return (
    <div>
      <div className={styles.table_title}>{title}</div>
      <div className={styles.table_container}>
      <Table columns={columns} data={data} />
      </div>
    </div>
  )
}

Table.propTypes = {
  columns: propTypes.array.isRequired,
  title: propTypes.string,
  data: propTypes.array.isRequired
}
