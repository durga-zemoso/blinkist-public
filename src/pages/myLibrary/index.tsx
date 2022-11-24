import React from 'react';
import BookCards from '../../components/organisms/BookCards';
import Header from '../../components/organisms/Header';
import BasicTemplate from '../../components/templates/BasicTemplate';

const MyLibrary: React.FC = (props) => {
  return (
    <BasicTemplate
      header={<Header></Header>}
      body={<BookCards />}
      footer={<></>}
    ></BasicTemplate>
  );
};

export default MyLibrary;
