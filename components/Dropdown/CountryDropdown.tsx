import { ReactElement } from 'react';
import useModals from '@hooks/useModals';
import { modalList } from '@components/Modals';
import Overlay from '@components/Overlay';

import { SelectorContainer } from './style';
import DeleteIcon from '@assets/DeleteIcon.svg';

const CountryDropdown = (props: any): ReactElement => {
  const {
    restProps: { countryList },
  } = props;

  const { closeModal } = useModals();
  const handleClose = () => {
    closeModal(modalList.CountryDropdown);
  };

  return (
    <div className="country__container">
      <Overlay height={40} onClose={handleClose} />
      <SelectorContainer>
        <section>
          <div className="XButton">
            <DeleteIcon onClick={handleClose} />
          </div>
          <ul className="list">
            {countryList.map((country: string) => {
              return (
                <li className="item" key={country}>
                  <p className="city"> {country}</p>
                  <p className="airport">덜레스 국제공항</p>
                </li>
              );
            })}
          </ul>
        </section>
      </SelectorContainer>
    </div>
  );
};

export default CountryDropdown;
