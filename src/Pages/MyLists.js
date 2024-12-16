import React, { useState } from 'react';
import classes from './MyLists.module.css';
import { List, ListAdd } from '../Components/List.js';

const MyLists = () => {

  const options = {
    privacy: ['Public', 'Private'],
    types: ['Travelling', 'Shopping', 'Gifts', 'Food', 'Books', 'Movies & TV Shows',
      'Home Decor', 'Gaming', 'Charity & Donations', 'Events & Tickets', 'Pets',
       'Outdoor Activities', 'Other'
    ],
  };
  
  const [showAllCategories, setShowAllCategories] = useState(false); // стан для відкриття/закриття

  const toggleShowAll = () => {
    setShowAllCategories((prev) => !prev); // перемикання стану
  };

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    progress: [],
    privacy: [],
  }); // стан для збереження вибраних фільтрів

  // Функція для скидання фільтрів
  const clearFilters = () => {
    setSelectedFilters({
      categories: [],
      progress: [],
      privacy: [],
    });

    // Скидання всіх чекбоксів
    const checkboxes = document.querySelectorAll(`.${classes.filters} input[type="checkbox"]`);
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  return (
    <div className={classes.contentMyList}>
      <h1>My Lists</h1>
      <section className={classes.mainContentMyList}>
        <div className={classes.filters}>
          <div className={classes.filtersTitle}>
            <h2>Filters</h2>
            <p onClick={clearFilters} className={classes.clearFilters}>
              Clear filters
            </p>
          </div>

          <div className={classes.categoriesFilters}>
            <h3>Categories</h3>
            <div className={classes.categoriesList}>
              {options.types.slice(0, 4).map((type) => (
                <div className={classes.filterLine} key={type}>
                  <input
                    type="checkbox"
                    id={type.toLowerCase().replace(/\s+/g, '_')}
                    name={type}
                    value={type}
                  />
                  <label htmlFor={type.toLowerCase().replace(/\s+/g, '_')}> {type}</label>
                </div>
              ))}

              {showAllCategories &&
                options.types.slice(4).map((type) => (
                  <div className={classes.filterLine} key={type}>
                    <input
                      type="checkbox"
                      id={type.toLowerCase().replace(/\s+/g, '_')}
                      name={type}
                      value={type}
                    />
                    <label htmlFor={type.toLowerCase().replace(/\s+/g, '_')}> {type}</label>
                  </div>
                ))}
            </div>

            <div className={classes.toggleButton} onClick={toggleShowAll}>
              <span>{showAllCategories ? 'Show Less ᐱ' : 'Show More ᐯ'}</span>
            </div>

            <h3>Progress</h3>
            {['In Progress', 'Done'].map((progress) => (
              <div className={classes.filterLine} key={progress}>
                <input
                  type="checkbox"
                  id={progress.toLowerCase().replace(/\s+/g, '_')}
                  name={progress}
                  value={progress}
                />
                <label htmlFor={progress.toLowerCase().replace(/\s+/g, '_')}> {progress}</label>
              </div>
            ))}

            <h3>Privacy</h3>
            {options.privacy.map((privacy) => (
              <div className={classes.filterLine} key={privacy}>
                <input
                  type="checkbox"
                  id={privacy.toLowerCase()}
                  name={privacy}
                  value={privacy}
                />
                <label htmlFor={privacy.toLowerCase()}> {privacy}</label>
              </div>
            ))}
          </div>

          <button className={classes.button}>Accept</button>
        </div>

        <div className={classes.listsDiv}>
          <List />
          <List />
          <List />
          <ListAdd />
        </div>
      </section>
    </div>
  );
};

export default MyLists;
