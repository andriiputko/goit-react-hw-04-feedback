import cl from "./Statistics.module.css"

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={cl.list}>
            <li className={cl.li}>Good: {good}</li>
            <li className={cl.li}>Neutral: {neutral}</li>
            <li className={cl.li}>Bad: {bad}</li>
            <li className={cl.li}>Total: {total}</li>
            <li className={cl.li}>Positive feedback: {positivePercentage}%</li>
        </ul>

    )
}

export default Statistics;