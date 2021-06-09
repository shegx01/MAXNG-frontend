import styles from "./CustomSelect.module.css"
import { useState, useEffect} from "react"
import propType from "prop-types"
export default function CustomSelect(props) {
  const {defaultValue, selectionOptions, onClickFn} = props

  return (
    <div>
      <label htmlFor="select"></label>
      <select value={defaultValue} name="select" className={styles.wrapper} onChange={onClickFn}>
        {selectionOptions.map((option, idx) => (
          <option key={idx} value={option.value}>{ option.text}</option>
        ))}
      </select>
    </div>
  );
}

CustomSelect.propType = {
  defaultValue: propType.string.isRequired,
  selectionOptions: propType.object.isRequired,
  onClickFn: propType.func.isRequired
}
