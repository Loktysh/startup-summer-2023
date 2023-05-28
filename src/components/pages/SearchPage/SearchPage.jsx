import React, { useRef, useState, useEffect, useContext, createContext } from 'react';
import { TextInput, Button, Pagination, Stack, Loader } from '@mantine/core';
import SearchFilter from '../../common/SearchFilter/SearchFilter';
import { VacancyCard } from '../../common/VacancyCard/VacancyCard';
import { fetchVacancies } from '../../../utils';
import { defaultSearchParams } from '../../../constants';

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [vacanciesData, setVacanciesData] = useState({});
  const [activePage, setPage] = useState(0);
  const [searchParams, setSearchParams] = useState(defaultSearchParams);
  const [resetComponent, setResetComponent] = useState(false);
  const searchInput = useRef(null);
  useEffect(() => {
    handleSearch();
  }, [activePage, resetComponent]);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await fetchVacancies({ ...searchParams, page: activePage });
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
  const resetFilters = () => {
    setResetComponent(e => !e);
    setSearchParams({ ...defaultSearchParams });
    setPage(0);
  };
  return (
    <>
      <SearchFilter
        handleChange={handleChange}
        handleSearch={handleSearch}
        resetFilters={resetFilters}
      />
      <Stack spacing={16}>
        <TextInput
          ref={searchInput}
          onChange={e => setSearchParams({ ...searchParams, keyword: e.target.value })}
          label="Your email"
          placeholder="Введите название вакансии"
          rightSectionWidth="fit-content"
          data-elem="search-input"
          rightSection={
            <Button size="xs" onClick={handleSearch} data-elem="search-button">
              Поиск
            </Button>
          }
        />
        {loading ? (
          <Loader variant="dots" />
        ) : (
          <>
            {vacanciesData.objects &&
                vacanciesData.objects.map((data, i) => <VacancyCard key={i} {...data} titleColor={'blue'} />)}
            {vacanciesData.total > 4 && (
              <Pagination
                value={activePage + 1}
                onChange={e => setPage(e - 1)}
                  total={Math.round(vacanciesData.total / 4)}
                  pt={24}
              />
            )}
          </>
        )}
      </Stack>
    </>
  );
};

export default SearchPage;
