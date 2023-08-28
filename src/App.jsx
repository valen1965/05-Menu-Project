import Title from './Title';
// import { FaBeer } from 'react-icons/fa';
import { useState } from 'react';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = [
  'all',
  ...new Set(
    menu.map((item) => {
      return item.category;
    })
  ),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategory] = useState(allCategories);
  const filterItems = (category) => {
    const newItems = menu.filter((item) => item.category === category);
    {
      category === 'all' ? setMenuItems(menu) : setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
