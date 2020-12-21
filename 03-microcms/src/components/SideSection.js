import React from "react"
import styles from "./SideSection.module.css"

export const SideSection = props => {
  const { title, children } = props
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </section>
  )
}
