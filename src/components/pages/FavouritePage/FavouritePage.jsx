import React, { useRef, useState, useEffect, useContext, createContext } from 'react';
import { TextInput, Button, Pagination, Stack, Loader } from '@mantine/core';
import SearchFilter from '../../common/SearchFilter/SearchFilter';
import { VacancyCard } from '../../common/VacancyCard/VacancyCard';
import { fetchVacancies } from '../../../utils';
import { getFavouriteVacancies } from '../../../utils/favourites';

const FavouritePage = () => {
  const [loading, setLoading] = useState(false);
  const [activePage, setPage] = useState(1);
  const [vacanciesData, setVacanciesData] = useState({});
  useEffect(() => {
    const ids = getFavouriteVacancies();
    console.log(ids);
    let params = {};
    ids.forEach((e, i) => (params[`ids[${i}]`] = e));
    params = {
      ...params,
      count: 4,
      page: activePage - 1,
    };
    async function fetchData() {
      setLoading(true);
      try {
        const data = await fetchVacancies(params);
        setVacanciesData(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [activePage]);
  return (
    <>
      {loading ? (
        <Loader variant="dots" />
      ) : (
        <>
          {vacanciesData.objects &&
            vacanciesData.objects.map((data, i) => <VacancyCard key={i} {...data} />)}
          {vacanciesData.total > 4 && (
            <Pagination
              value={activePage}
              onChange={e => setPage(e)}
              total={Math.round(vacanciesData.total / 4)}
            />
          )}
        </>
      )}
    </>
  );
};

export default FavouritePage;
