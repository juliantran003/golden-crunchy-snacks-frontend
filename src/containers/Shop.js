// Packages
import { useState } from "react";

// Components
import SearchBar from "../components/Utility/SearchBar";
import categories from "../assets/categories.json";
import ArticleList from "../components/Shop/ArticleList";
import temporaryCatalogue from "../assets/temporary-catalogue.json";
import ArticleModal from "../components/Shop/ArticleModal";

const Shop = ({ setBasket, userBasket, cookieBasket }) => {
  const temporaryData = temporaryCatalogue.catalogue;
  const [data, setData] = useState(temporaryData);
  // States
  const [searchValue, setSearchValue] = useState("");
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState([]);
  const [modalInfo, setModalInfo] = useState();

  // Category filter function
  const filterHandle = (e) => {
    const filterCategory = [...filter];

    if (filterCategory.indexOf(e.target.name) === -1) {
      filterCategory.push(e.target.name);
    } else {
      filterCategory.splice(filterCategory.indexOf(e.target.name), 1);
    }
    setFilter(filterCategory);
  };

  // Search Handle
  const searchHandle = (e) => {
    setSearchValue(e.target.value);
    setSearchVisibility(true);
    if (e.target.value === "") {
      setData(temporaryData);
    } else {
      const newData = [];
      for (let i = 0; i < data.length; i++) {
        if (
          data[i].title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
        ) {
          newData.push(data[i]);
        }
        setData(newData);
      }
      setData(newData);
    }
  };

  // Search Click Handle
  const searchClickHandle = (e) => {
    setSearchValue(e.target.innerText);
    setSearchVisibility(false);

    const newData = [];
    for (let i = 0; i < data.length; i++) {
      if (
        data[i].title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      ) {
        newData.push(data[i]);
      }
    }
    setData(newData);
  };

  // Modal Info Handle
  const modalHandle = (props) => {
    setModal(true);
    setModalInfo(props.article);
  };

  return (
    <div>
      <div className="shop-search-container">
        <h1>WHAT SNACK ARE YOU LOOKING FOR ?</h1>
        <SearchBar
          placeholder="Search for articles..."
          data={data}
          onChange={(e) => {
            searchHandle(e);
          }}
          value={searchValue}
          onClick={(e) => {
            searchClickHandle(e);
          }}
          searchVisibility={searchVisibility}
        />
      </div>
      <div className="shop-categories-container">
        <h1>CATEGORIES</h1>
        <form className="shop-categories">
          {categories.categories.map((category) => {
            return (
              <label key={category.title}>
                <input
                  type="checkbox"
                  name={category.title}
                  onClick={(e) => {
                    filterHandle(e);
                  }}
                />
                {category.title}
              </label>
            );
          })}
        </form>
      </div>
      <ArticleList
        data={data}
        filter={filter}
        modalHandle={modalHandle}
        setBasket={setBasket}
        userBasket={userBasket}
      />
      {modal && (
        <ArticleModal
          data={modalInfo}
          onX={() => setModal(false)}
          setBasket={setBasket}
          userBasket={userBasket}
        />
      )}
    </div>
  );
};

export default Shop;
