  import React, { useEffect, useState } from 'react';
  import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
  import { gStyle } from '../constants';

  // components
  import Cast from '../components/Cast';
  import HeaderSearch from '../components/Header/HeaderSearch';
import SearchScrollView from '../components/SearchScrollView';
import data from '../mockData/data';

  function Search() {
    const [search, setSearch] = React.useState('');
    const [searchedDataList, setSearchedDataList] = useState([] as { id: number; title: string; image: string; }[]);
    const mockData = data.dumbData;

    useEffect(() => {
      console.log(search);
      const filteredData = mockData.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setSearchedDataList(filteredData);
      console.log(searchedDataList.length);
    }, [search]);
  
    return (
      <>
          <View style={gStyle.container}>
            <HeaderSearch setSearchText={setSearch} />
            <SearchScrollView dataList={searchedDataList} />
          </View>
        <Cast />
      </>
    );
  }

  export default Search;
