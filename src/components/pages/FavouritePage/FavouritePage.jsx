import React, { useState, useEffect } from 'react';
import { Pagination, Loader, Stack } from '@mantine/core';
import { VacancyCard } from '../../common/VacancyCard/VacancyCard';
import { fetchVacancies } from '../../../utils';
import { getFavouriteVacancies } from '../../../utils/favourites';
import { useNavigate } from 'react-router-dom';

const FavouritePage = () => {
  const [loading, setLoading] = useState(false);
  const [activePage, setPage] = useState(1);
  const [vacanciesData, setVacanciesData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ids = getFavouriteVacancies();
    let params = {};
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
    if (ids.length) {
      console.log(ids);
      ids.forEach((e, i) => (params[`ids[${i}]`] = e));
      fetchData();
    } else {
      navigate('/empty');
    }
  }, [activePage]);
  if (vacanciesData?.objects) {
    return (
      <Stack spacing={32} pt={40} align="center">
        {loading ? (
          <Loader variant="dots" />
        ) : (
          <>
            {vacanciesData?.objects &&
              vacanciesData.objects.map((data, i) => <VacancyCard key={i} {...data} />)}
            {vacanciesData.total > 4 && (
              <Pagination
                value={activePage}
                onChange={e => setPage(e)}
                total={Math.round(vacanciesData.total / 4)}
                mt={50}
              />
            )}
          </>
        )}
      </Stack>
    );
  }
};

export default FavouritePage;
