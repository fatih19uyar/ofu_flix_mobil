import React from 'react';
import styled from 'styled-components/native';
import { colors, gStyle } from '../../constants';

// components
import Header from '../../components/Header/Header';
import ContentScrollView from '../../components/ContentScrollView';

import { useAppSelector } from '../../common/hooks/useStore';

const Container = styled.View`
  ${gStyle.container}
`;

const MoreMyList: React.FC = () => {
  const myList = useAppSelector((state) => state.content.myList);

  return (
    <Container>
      <Header bg={colors.headerBarBg} showBack title="My List" />
      <ContentScrollView dataList={myList} />
    </Container>
  );
};

export default MoreMyList;
