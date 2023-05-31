import React, { useRef, useState, useEffect } from 'react';
import {
  TextInput,
  Button,
  Pagination,
  Stack,
  Loader,
  Flex,
  Container,
  Center,
} from '@mantine/core';
import SearchFilter from '../../common/SearchFilter/SearchFilter';
import { VacancyCard } from '../../common/VacancyCard/VacancyCard';
import { fetchVacancies } from '../../../utils';
import { defaultSearchParams } from '../../../constants';
import { ReactComponent as SearchIcon } from '../../../assets/search-icon.svg';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [vacanciesData, setVacanciesData] = useState({});
  const [activePage, setPage] = useState(0);
  const [searchParams, setSearchParams] = useState(defaultSearchParams);
  const [resetComponent, setResetComponent] = useState(false);
  const navigate = useNavigate();
  const searchInput = useRef(null);
  useEffect(() => {
    handleSearch();
  }, [activePage, resetComponent]);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await fetchVacancies({ ...searchParams, page: activePage });
      if (!data.objects.length) {
        navigate('/empty');
      }
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
    searchInput.current.value = '';
  };
  return (
    <Container size={'100%'} px={10}>
      <Flex maw={1116} gap={28} pt={40} mx={'auto'} justify={'space-between'} wrap={'wrap'}>
        <SearchFilter
          handleChange={handleChange}
          handleSearch={handleSearch}
          resetFilters={resetFilters}
          maw={315}
        />
        <Stack spacing={16} w={'100%'} maw={773}>
          <TextInput
            ref={searchInput}
            onChange={e => setSearchParams({ ...searchParams, keyword: e.target.value })}
            placeholder="Введите название вакансии"
            rightSectionWidth="fit-content"
            data-elem="search-input"
            icon={<SearchIcon />}
            rightSection={
              <Button size="sm" onClick={() => handleSearch()} mr="12px" data-elem="search-button">
                Поиск
              </Button>
            }
          />
          {loading ? (
            <Loader variant="dots" />
          ) : (
            <>
              {vacanciesData?.objects &&
                vacanciesData.objects.map((data, i) => (
                  <VacancyCard key={i} {...data} titleColor={'blue'} />
                ))}
              {vacanciesData?.total > 4 && (
                <Center>
                  <Pagination
                    value={activePage + 1}
                      onChange={e => setPage(e - 1)}
                      total={Math.round(vacanciesData.total / 4)}
                      boundaries={0}
                    pt={24}
                  />
                </Center>
              )}
            </>
          )}
        </Stack>
      </Flex>
    </Container>
  );
};

export default SearchPage;
