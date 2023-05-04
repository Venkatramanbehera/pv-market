import { useEffect, useState } from 'react';
import ClientListContext from '../contexts/clientListContext';

const ClientListProvider = ({ children }) => {
  const [clientList, setClientList] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('clientList');
    if (savedData) {
      setClientList(JSON.parse(savedData));
    }
  }, []);

  const setContextClientList = newData => {
    setClientList(newData);
    localStorage.setItem('clientList', JSON.stringify(newData));
  };

  return (
    <ClientListContext.Provider value={{ clientList, setContextClientList }}>
      {children}
    </ClientListContext.Provider>
  );
};

export default ClientListProvider;
