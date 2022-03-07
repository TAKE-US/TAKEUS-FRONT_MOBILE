import { useRouter } from 'next/router';
import Header from '@components/Header';
import Footer from '@components/Common/Footer';

import Warning from '@assets/Warning.svg';
import Container from '@styles/page/information';

const InformationPage = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/dogs');
  };

  return (
    <div>
      <Header />
      <Container>
        <section className="definition">
          <h2>
            해외 이동 봉사가
            <br />
            무엇인가요?
          </h2>
          <p>
            운좋게 해외입양이 확정되어 안락사를 피하거나 보호소 생활에서 벗어난 아이들은 먼 바다를
            건너야 해요. <br />이 멀고도 긴 여정을 TAKEUS와 TAKERS가 함께합니다 : )
          </p>
        </section>
        <section className="question">
          <h3>QnA </h3>
          <article>
            <h2>
              이동봉사는 무엇이고 <br />왜 필요한가요 ?
            </h2>
            <p>
              해외입양이 확정된 대상견을 해외에 있는 입양자에게 인계해주는 활동을 해외 이동봉사라고
              합니다.
            </p>
            <p>
              일체의 비용 없이 약간의 시간을 들이는 것만으로도 입양견의 소중한 첫걸음을 도울 수
              있습니다.
            </p>
          </article>
          <article>
            <h2>
              어떤 절차로 이동봉사가 <br /> 이루어지나요 ?{' '}
            </h2>
            <p>
              해외 이동봉사는 비행기 탑승 예약, 출국서류 준비 및 검색, 인천공항 수속 및 출국, 입국
              수속 및 강아지 전달순으로 이루어집니다.
            </p>
          </article>
        </section>
        <section className="warning">
          <Warning />
          <h3>이동봉사 진행 전 주의하세요! </h3>
          <p>
            단체나 개인구조자가 아닌 개인이 찾는 대가성 이동봉사에 주의 하시고 봉사자님께 불이익이
            가지 않도록 Permit과 Entry Number, 검역 확인증, 이동봉사자임을 확인하는 레터 등의 서류를
            확인 하시기 바랍니다.
          </p>
        </section>
        <div className="button__container">
          <button onClick={onClick}>이동 봉사하러 가기</button>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default InformationPage;
