import { ReactElement } from 'react';
import { modalList } from '@components/Modals';
import Overlay from '@components/Overlay';

import { SelectorContainer } from './style';
import DeleteIcon from '@assets/DeleteIcon.svg';
import { dropdownPropType } from '@Customtypes/dropdown';

const AirportDropdown = (props: dropdownPropType): ReactElement => {
  const {
    restProps: { cityList, airportList },
    onClose,
    onSubmit,
  } = props;

  const handleClose = () => {
    onClose(modalList.AirportDropdown);
  };
  const handleClick = (e: React.SyntheticEvent<HTMLLIElement>) => {
    onSubmit(e.currentTarget.dataset.airport);
  };

  const combinedList = airportList.map((airport: string, index: number) => [
    airport,
    cityList[index],
  ]);
  console.log(combinedList);
  return (
    <div className="airport__container">
      <Overlay height={40} onClose={handleClose} />
      <SelectorContainer height={60} isBorder={true}>
        <section>
          <div className="XButton">
            <DeleteIcon onClick={handleClose} />
          </div>
          <ul className="list">
            {combinedList.map(([airport, city]) => {
              return (
                <li className="item" data-airport={airport} key={airport} onClick={handleClick}>
                  <p className="city"> {city}</p>
                  <p className="airport"> {airport}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </SelectorContainer>
    </div>
  );
};

export default AirportDropdown;
