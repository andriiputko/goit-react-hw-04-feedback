import cl from "./Notification.module.css"

const Notification = ({message}) => {
    return (
        <p className={cl.message}>{message}</p>
    )
}

export default Notification;