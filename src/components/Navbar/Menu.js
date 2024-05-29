import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Menu = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Sidebar setModalOpen={setModalOpen} />
    </>
  );
};

export default Menu;
