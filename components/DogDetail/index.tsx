import Image from 'next/image';

import Report from '@assets/Report.svg';
import Departure from '@assets/Departure.svg';
import DogDetailImage from '@assets/DogDetailImage.png';
import { DogDetailContainer } from './style';
import { DogCardType } from '@Customtypes/dog';

const DogDetail = ({ dog }: { dog: DogCardType }): ReactElement => {
  const {
    photos,
    name,
    endingCountry,
    endingAirport,
    isInstitution,
    weight,
    health,
    age,
    neutralization,
    gender,
  } = dog;
  const RepImage = photos.find((v) => v.length > 0);

  return (
    <DogDetailContainer>
      <Image width= {550} height={400} src={RepImage ? RepImage : DogDetailImage} alt="TestImage" />
      <div className="title">
        <div className="info">
          <h3 className="name">{ name } < /h3>
          <p className="institution">{isInstitution ? '단체 |' : '개인 |'} {isInstitution ? '웰컴독 코리아' : '개인 구조자'}</p>
        </div>
        <div className="icon"><Report/></div>
      </div>
      <div className = "content" >
        <div className="departure" >
          <h5>출국정보 < /h5>
          <div className = "text" >
            <Departure />
            <p> {endingCountry} / {endingAirport} </p>
          </div>
        </div>
        <div className = "dog">
          <h5>대상견정보 < /h5>
          <ul>
            <li>성별 : {gender} </li>
            <li>나이 : {age} </li>
            <li>무게 : {weight} kg </li>
            <li>중성화 : {neutralization ?'유' : '무'}</li>
            <li>건강 상태 : {health}</li>
          </ul>
          <h5>상세정보 </h5>
          <div className="detail">
            멍멍이는 인천 남동구에서 구조된 멍멍이에요.멍멍이는 어쩌구 저쩌고 그런 강아진데요, 좋은 기회로 해외에 입양을 가게 되었답니다. 
            멍멍이가 좋은 가족을 만나서 행복한 삶을 살 수 있도록 도와주세요. 도움의 손길 어쩌구 저쩌구 저희도 어쩌구 저쩌구 멍멍이는 인천 남동구에서 구조된 멍멍이에요.     
          </div>    
        </div>
      </div>
    </DogDetailContainer>
  );
};

export default DogDetail;
