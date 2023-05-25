import React, { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { Loader } from '@mantine/core';
import { getVacancies } from '../../../utils';

const VacancyPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await getVacancies({ id: '123' });
        setData(result);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return <>{loading ? <Loader variant="dots" /> : <div>123</div>}</>;
};

export default VacancyPage;
