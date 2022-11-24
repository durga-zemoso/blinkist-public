import React from 'react';
import Banner from '../../components/molecules/Banner';
import BookCards from '../../components/organisms/BookCards';
import Header from '../../components/organisms/Header';
import BasicTemplate from '../../components/templates/BasicTemplate';

const TrendingBlinks: React.FC = (props) => {
  return (
    <BasicTemplate
      header={<Header></Header>}
      body={
        <div>
          <Banner></Banner>
          <BookCards />
        </div>
      }
      footer={<></>}
    ></BasicTemplate>
  );
};

export default TrendingBlinks;
