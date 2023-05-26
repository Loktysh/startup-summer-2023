import React, { useRef, useState, useEffect, useContext, createContext } from 'react';
import { TextInput, Button, Pagination, Stack, Loader } from '@mantine/core';
import SearchFilter from '../../common/SearchFilter/SearchFilter';
import { VacancyCard } from '../../common/VacancyCard/VacancyCard';
import { fetchVacancies } from '../../../utils';

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [vacanciesData, setVacanciesData] = useState({});
  const [activePage, setPage] = useState(0);
  const [searchParams, setSearchParams] = useState({
    published: 1,
    count: 4,
    sort_new: '',
    no_agreement: 1,
  });
  const searchInput = useRef(null);
  useEffect(() => {
    handleSearch();
  }, [activePage]);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await fetchVacancies({ ...searchParams, page: activePage});
      console.log(searchParams);
      setVacanciesData(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = param => {
    setSearchParams({ ...searchParams, ...param });
  };
  return (
    <>
      <SearchFilter handleChange={handleChange} handleSearch={handleSearch}></SearchFilter>
      <TextInput
        ref={searchInput}
        onChange={e => setSearchParams({ ...searchParams, keyword: e.target.value })}
        label="Your email"
        placeholder="Введите название вакансии"
        rightSectionWidth="fit-content"
        rightSection={
          <Button size="xs" onClick={handleSearch} data-elem="search-button">
            Поиск
          </Button>
        }
      />
      ;
      {JSON.stringify(searchParams, null, 2)}
      {loading ? (
        <Loader variant="dots" />
      ) : (
        <>
          {vacanciesData.objects &&
            vacanciesData.objects.map((data, i) => <VacancyCard key={i} {...data} />)}
          {vacanciesData.total > 4 && (
            <Pagination
              value={activePage + 1}
              onChange={e => setPage(e - 1)}
              total={Math.round(vacanciesData.total / 4)}
            />
          )}
        </>
      )}
    </>
  );
};

export default SearchPage;
