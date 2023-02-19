import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const getRandomColor = () => {
    const newColor = Math.floor(Math.random() * 16777215).toString(16);
    const whiteColor = 'FFFFFF';
    if (newColor.toUpperCase !== whiteColor) {
        return "#" + newColor;
    }
} 

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        {title && (<h2 className={css.header}>{title}</h2>)}
        <ul className={css.statistics__list}>
            {stats.map(data => (
                <li className={css.statistics__item} key={data.id} style={{backgroundColor: getRandomColor()}}>
                    <span className={css.statistics__label}>{data.label}: </span>
                    <span className={css.statistics__value}>{data.percentage}%</span>
                </li>
            ))}
        </ul>
   </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })
};