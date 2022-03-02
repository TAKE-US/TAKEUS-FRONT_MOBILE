import { ReactElement } from 'react';
import { SearchBarFormContainer } from './style';
import SearchBarDropdown from '@components/SearchBarDropdown';
import SeacrhBtn from '@assets/SearchBtn.svg';

const SearchBarForm = (): ReactElement => {
  return (
    <SearchBarFormContainer>
      <div className="dropdown__container">
        <SearchBarDropdown name={'국가'} />
        <div className="contour"></div>
        <SearchBarDropdown name={'도착 공항'} />
      </div>
      <SeacrhBtn />
    </SearchBarFormContainer>
  );
};

export default SearchBarForm;
