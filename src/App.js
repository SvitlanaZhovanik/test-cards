import { CardList } from './components/CardList';
import users from './data/users.json';

function App() {
  return (
    <CardList data={users} />
  );
}

export default App;
