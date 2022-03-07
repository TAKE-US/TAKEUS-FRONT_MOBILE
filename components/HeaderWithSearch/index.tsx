import { ReactElement } from 'react';
import Header from '@components/Header';
import SearchBarForm from '@components/SearchBarForm';

import { HandleSubmitType } from '@Customtypes/dog';
import StyledContainer from './style';

const HeaderWithSearch = ({ handleSubmit }: HandleSubmitType): ReactElement => {
  return (
    <StyledContainer>
      <Header />
      <p className="content">도움을 기다리는 입양견들을 만나보세요.</p>
      <SearchBarForm handleSubmit={handleSubmit} />
    </StyledContainer>
  );
};

export default HeaderWithSearch;
