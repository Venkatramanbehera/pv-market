import { useEffect, useState } from 'react';
import CompanyProfileContext from '../contexts/companyProfileContext';

const CompanyProfileProvider = ({ children }) => {
  const [companyProfile, setCompanyProfile] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('companyProfile');
    if (savedData) {
      setCompanyProfile(JSON.parse(savedData));
    }
  }, []);

  const setContextCompanyProfile = newData => {
    setCompanyProfile(newData);
    localStorage.setItem('companyProfile', JSON.stringify(newData));
  };

  return (
    <CompanyProfileContext.Provider value={{ companyProfile, setContextCompanyProfile }}>
      {children}
    </CompanyProfileContext.Provider>
  );
};

export default CompanyProfileProvider;
