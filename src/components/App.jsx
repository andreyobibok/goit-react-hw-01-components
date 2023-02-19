import userInfo from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json';

import { Container } from './Container/Container';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transaction } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <Container>
      <Profile 
        avatar={userInfo.avatar}
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        stats={userInfo.stats}
      />

      <Statistics
        title='Upload Stats'
        stats={data} />
      
      <FriendList
        friends={friends} />

      <Transaction
        items={transactions} />

    </Container>
  );
};
