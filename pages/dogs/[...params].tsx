import Header from '@components/Header';
import { getDogById, DogResponse } from '@service/dogs';
import DogDetail from '@components/DogDetail';

const DogDetailPage = ({ dog, error }: DogResponse) => {
  return (
    <div>
      <Header />
      {(() => {
        switch (error) {
          case 'NOT_ERROR':
            return <DogDetail dog={dog} />;
          case 'CLIENT_ERROR':
            return '클라이언트 에러입니다.';
          case 'SERVER_ERROR':
            return '서버 에러입니다.';
          default:
            return;
        }
      })()}
    </div>
  );
};

export async function getServerSideProps({ params: { params } }: { params: { params: string } }) {
  const { error, dog } = await getDogById(params);

  return {
    props: {
      dog,
      error,
    },
  };
}

export default DogDetailPage;
