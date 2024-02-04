import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {gStyle} from '../constants';

// components
import Cast from '../components/Cast';
import HeaderSearch from '../components/Header/HeaderSearch';
import SearchScrollView from '../components/SearchScrollView';
import {mockDataType} from '../mockData/type';
import {useAppSelector} from '../common/hooks/useStore';
import ShowDetailsModal from '../components/ShowDetailsModal';

function Search() {
  const [search, setSearch] = React.useState('');
  const [searchedDataList, setSearchedDataList] = useState(
    [] as mockDataType[],
  );
  const mockData = useAppSelector(state => state.content.dumpData);

  useEffect(() => {
    console.log(search);
    const filteredData = mockData.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase()),
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
      <ShowDetailsModal />
      <Cast />
    </>
  );
}

export default Search;
