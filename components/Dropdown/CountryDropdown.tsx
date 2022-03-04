import { ReactElement } from 'react';
import useModals from '@hooks/useModals';
import { modalList } from '@components/Modals';
import Overlay from '@components/Overlay';

import { SelectorContainer } from './style';
import DeleteIcon from '@assets/DeleteIcon.svg';

const CountryDropdown = (props: any): ReactElement => {
  const { closeModal } = useModals();
  const {
    restProps: { countryList },
    onSubmit,
  } = props;

  const handleClose = () => {
    closeModal(modalList.CountryDropdown);
  };
  const handleClick = (e: React.MouseEvent) => {
    onSubmit(e.currentTarget.textContent);
  };

  return (
    <div className="country__container">
      <Overlay onClose={handleClose} />
      <SelectorContainer height={40} isBorder={false}>
        <section>
          <div className="XButton">
            <DeleteIcon onClick={handleClose} />
          </div>
          <ul className="list">
            {countryList.map((country: string) => {
              return (
                <li className="item" key={country} onClick={handleClick}>
                  <p className="city"> {country}</p>
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
