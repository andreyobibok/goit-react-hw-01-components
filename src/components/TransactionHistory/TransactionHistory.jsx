import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
    
export const Transaction = ({ items }) => {
    return <table className={css.transactions}>
        <thead className={css.table__header}>
            <tr>
                <th className={css.table__label}>Type</th>
                <th className={css.table__label}>Amount</th>
                <th className={css.table__label}>Currency</th>
                </tr>
        </thead>

        <tbody className={css.table__body}>
            {items.map(item => (
                <tr key={item.id} className={css.table__row}>
                    <td className={`${css.type} ${css.table__data}`}>{item.type}</td>
                    <td className={css.table__data}>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>                                                           
            ))}            
        </tbody>
        </table>
 }


Transaction.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
};