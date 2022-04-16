import displayCash from 'libs/displayCash';

interface Iprops {
    time: string,
    price: number
}

function HistoryItem({ time, price }: Iprops) {
  return (
    <tr className={`table-${price < 0 ? 'danger' : 'success'}`}>
      <td>{time}</td>
      <td>{displayCash(price, true)}</td>
    </tr>
  );
}

export default HistoryItem;
