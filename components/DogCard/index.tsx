import { ReactElement } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { DogCardType } from '@Customtypes/dog';
import TestImage from '@assets/TestImage.png';
import Location from '@assets/Location.svg';
import { DogCardWrapper } from './style';

const DogCard = ({ dogCardInfo }: { dogCardInfo: DogCardType }): ReactElement => {
  const router = useRouter();
  const { name, endingAirport, isInstitution, photos, _id } = dogCardInfo;
  const RepImage = photos.find((v) => v.length > 0);
  const handleClick = (id: string) => {
    router.push(`/dogs/${id}`);
  };

  return (
    <DogCardWrapper onClick={() => handleClick(_id)}>
      <Image src={RepImage ? RepImage : TestImage} width={150} height={150} alt="TestImage" />
      <div className="info__dog">
        <p className="name"> {name.slice(0, 4) + '..'} </p>
        <p className="airport">
          <Location />
          {endingAirport.slice(0, 7)}
        </p>
      </div>
      <div className="info__person">
        <p>{isInstitution ? '단체 |' : '개인 |'}</p>
        <p>{isInstitution ? '웰컴독 코리아' : '개인 구조자'}</p>
      </div>
    </DogCardWrapper>
  );
};

export default DogCard;
