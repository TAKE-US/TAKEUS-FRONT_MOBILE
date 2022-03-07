import { ReactElement } from 'react';
import { modalList } from '@components/Modals';
import Overlay from '@components/Common/Overlay';

import DeleteIcon from '@assets/DeleteIcon.svg';
import { dropdownPropType } from '@Customtypes/dropdown';
import { SelectorContainer } from './style';

const CountryDropdown = (props: dropdownPropType): ReactElement => {
  const {
    restProps: { countryList },
    onSubmit,
    onClose,
  } = props;

  const handleClose = () => {
    onClose(modalList.CountryDropdown);
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
                  <p className="city">{country}</p>
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
