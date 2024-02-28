import TopAppBar from '../components/TopAppBar/TopAppBar';
import Users from '../components/Users/Users';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

function Home() {
  const items = useSelector((state) => state.users.items);
  const sort = useSelector((state) => state.filter.checkedSort);
  const search = useSelector((state) => state.filter.searchValue);

  const filterUser = useMemo(
    () =>
      items.filter((user) => {
        const query = search.toLowerCase();
        if (query === '') {
          return true;
        } else if (
          user.firstName.toLowerCase().includes(query) ||
          user.lastName.toLowerCase().includes(query) ||
          user.userTag.toLowerCase().includes(query)
        ) {
          return true;
        } else {
          return false;
        }
      }),
    [search, items],
  );

  //сортировка по алфавиту
  function sortByAlphabet(a, b) {
    return a.firstName.localeCompare(b.firstName);
  }

  //сортировка по дате рождения
  function sortByBirthDay(a, b) {
    let now = new Date(); //Текущя дата
    let user1 = new Date(a.birthday);
    let user2 = new Date(b.birthday);
    //добавляем текущий год
    let usernow1 = new Date(now.getFullYear(), user1.getMonth(), user1.getDate());
    let usernow2 = new Date(now.getFullYear(), user2.getMonth(), user2.getDate());

    if (usernow1 < now) {
      usernow1.setFullYear(usernow1.getFullYear() + 1);
    }
    if (usernow2 < now) {
      usernow2.setFullYear(usernow2.getFullYear() + 1);
    }
    return usernow1 - usernow2;
  }

  const sortFunk = sort === 'alphabet' ? sortByAlphabet : sortByBirthDay;

  return (
    <section className="main">
      <TopAppBar searchValue={search} />
      <Users items={filterUser.sort(sortFunk)} />
    </section>
  );
}

export default Home;
