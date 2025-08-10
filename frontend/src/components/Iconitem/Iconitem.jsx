import styles from './Iconitem.module.css'
import { MdAttachEmail } from "react-icons/md";

export default function Iconitem(props) {
  return (
    <>
        <div className={`col-lg-3 col-md-6 col-12 `}>
            <div className={`d-flex gap-3 justify-content-center align-items-center`}>
                <div className={styles.relativeicon}>
                    <MdAttachEmail className={styles.contacticon} />
                    <div className={styles.icon}></div>
                </div>
                <div>
                    <h4>{props.ele.text}</h4>
                    <p>{props.ele.para}</p>
                </div>
            </div>
        </div>
    </>
  )
}
// {props.ele.icon}