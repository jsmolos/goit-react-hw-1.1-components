import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import profileData from '../data/profileData.json';
import statisticsData from '../data/statisticsData.json';
import friends from '../data/friends.json';
import items from '../data/transactions.json';




export const App = () => {
  return (
    <div>
      {profileData && (
        <Profile
        username={profileData.username}
        tag={profileData.tag}
        location={profileData.location}
        avatar={profileData.avatar}
        stats={profileData.stats}
        />
      )}

      {statisticsData && (
        <Statistics title="Statistics" stats={statisticsData} />
      )}
      <FriendList friends={friends} />
      <TransactionHistory items={items} />    
      
    </div>
  );
};
