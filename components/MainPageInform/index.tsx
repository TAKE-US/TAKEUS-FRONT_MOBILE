import { ReactElement } from 'react';
import Image from 'next/image';
import Footer from '@components/Common/Footer';
import { useRouter } from 'next/router';

import MainPageBeforeVolunteer from '@assets/MainPageBeforeVolunteer.png';
import ClockIcon from '@assets/ClockIcon.svg';
import FinderIcon from '@assets/FinderIcon.svg';
import HeartIcon from '@assets/HeartIcon.svg';
import { AboutContainer, InformContainer, BeforeVolunteerContainer } from './style';

const BeforeVolunteer = (): ReactElement => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/information');
  };
  return (
    <BeforeVolunteerContainer>
      <Image src={MainPageBeforeVolunteer} alt="Main BackGround Image" width={420} height={200} />
      <section>
        <h5>Q.이동봉사전, 알아두어야 할 것은 무엇인가요 ? </h5>
        <span>
          해외 이동 봉사, 처음이라 걱정 되신다구요? 걱정하지마세요! 해외이동봉사 정보와 주의사항,
          테이커스가 차근차근 알려드릴게요.
        </span>
        <button onClick={handleClick}>자세히 보기</button>
      </section>
    </BeforeVolunteerContainer>
  );
};

const About = (): ReactElement => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/about');
  };
  return (
    <AboutContainer>
      <h5>ABOUT TAKE US </h5>
      <p className="subtext">
        테이커스는 2021년부터 지금까지 유기견과 봉사자를 위한 서비스를 운영하고 있습니다. 테이커스는
        멋있고 어쩌고 저쩌고 그렇습니다. 테이커스와 함께해주세요!
      </p>
      <ClockIcon />
      <p className="icontext">
        TAKE US는 2021년부터 단체 및 개인구조자와 이동봉사자의 보다 원할한 봉사의 진행을 위해
        서비스를 운영하고 있습니다.
      </p>
      <FinderIcon />
      <p className="icontext">
        이동봉사자는 다양한 채널을 통해 대상견 정보를 탐색하는 대신 TAKEUS에서 쉽게 대상견 정보를
        탐색 할 수 있습니다.
      </p>
      <HeartIcon />
      <p className="icontext">
        단체/개인구조자는 TAKEUS를 통해 이동봉사자를 모집하는 과정에서 들이는 시간과 수고를 줄일 수
        있습니다.
      </p>
      <button onClick={handleClick}> 테이커스에 문의하기 </button>
    </AboutContainer>
  );
};

const MainPageInfrom = (): ReactElement => {
  return (
    <InformContainer>
      <BeforeVolunteer />
      <About />
      <Footer />
    </InformContainer>
  );
};

export default MainPageInfrom;
