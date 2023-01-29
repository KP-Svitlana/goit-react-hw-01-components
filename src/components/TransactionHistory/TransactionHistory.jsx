import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr className={css.item}>
          <th className={css.cell}>Type</th>
          <th className={css.cell}>Amount</th>
          <th className={css.cell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el, index) => {
          return (
            <tr
              key={el.id}
              className={index % 2 === 0 ? css.itemLight : css.item}
            >
              <td className={css.cell}>{el.type}</td>
              <td className={css.cell}>{el.amount}</td>
              <td className={css.cell}>{el.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
