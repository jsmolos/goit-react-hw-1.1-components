import { FriendList } from "./FriendList/FriendList";
import friends from '../data/friends.json';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import items from '../data/transactions.json';


export const App = () => {
  return (
    <div>
      <FriendList friends={friends} />
      
      <TransactionHistory items={items} />

    </div>
  );
};
