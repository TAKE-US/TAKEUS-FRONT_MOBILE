import React, { useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import to from 'await-to-js';
import HeaderWithSearch from '@components/HeaderWithSearch';
import DogCard from '@components/DogCard';
import NoResult from '@components/Common/NoResult';
import Loading from '@components/Common/Loading';

import { reducer, State, Action } from '@utils/Component.reducer';
import useDeparture from '@hooks/useDeparture';
import { getDogByAirport } from '@service/dogs';
import { getDepartureList } from '@service/utils';
import { ERROR_TYPE } from '@service/index';
import { DogCardListType, DepartureListPropType } from '@Customtypes/dog';
import { DogPageContainer } from '@styles/DogPageStyle';

const DogsPage = ({ departureList }: DepartureListPropType) => {
  const router = useRouter();
  const { setDepartureList } = useDeparture();

  const [state, dispatch] = useReducer<
    React.Reducer<State<DogCardListType>, Action<DogCardListType>>
  >(reducer, {
    _TAG: 'IDLE',
  });

  const handleDogList = async (airport: string) => {
    dispatch({
      _TAG: 'FETCH',
    });

    const [error, response] = await to(getDogByAirport(airport));

    if (error) {
      return dispatch({
        _TAG: 'FAILED',
        error,
      });
    }
    if (response?.error !== ERROR_TYPE.NOT_ERROR) {
      return dispatch({
        _TAG: 'FAILED',
        error: response?.error,
      });
    }
    if (response?.error === ERROR_TYPE.NOT_ERROR && response.dogList) {
      return dispatch({ _TAG: 'SUCCESS', message: response.dogList });
    }
  };

  const handleSubmit = (airport: string) => {
    handleDogList(airport);
  };

  useEffect(() => {
    handleDogList(router.query.airport as string);
  }, [router.query.airport]);

  useEffect(() => {
    setDepartureList(departureList);
  }, [setDepartureList, departureList]);

  return (
    <DogPageContainer>
      <HeaderWithSearch handleSubmit={handleSubmit} />
      <div className="result">
        {(() => {
          switch (state._TAG) {
            case 'IDLE':
              return 'IDLE';
            case 'LOADING':
              return <Loading />;
            case 'ERROR':
              return 'ERROR';
            case 'OK':
              return state.message && state.message.length > 0 ? (
                state.message?.map((dog) => <DogCard dogCardInfo={dog} key={dog._id} />)
              ) : (
                <NoResult />
              );
          }
        })()}
      </div>
    </DogPageContainer>
  );
};

export async function getStaticProps() {
  const { departureList } = await getDepartureList();

  return {
    props: {
      departureList,
    },
  };
}

export default DogsPage;
