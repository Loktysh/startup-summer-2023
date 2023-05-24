import React, { useEffect, useState } from 'react';
import { Select, NumberInput, Stack, Button } from '@mantine/core';
import styles from './SearchFilter.module.css';
import { getCategoryList } from '../../../utils';

const SearchFilter = ({handleChange, handleSearch}) => {
  const [data, setData] = useState([]);
  const [filterValues, setFilterValues] = useState([]);
  const [minSalary, setMinSalary] = useState(null);
  const [maxSalary, setMaxSalary] = useState(null);
  useEffect(() => {
    getCategoryList('https://api.example.com/data')
      .then(res => setData(res))
      .then(res => {
        // console.log(res && res[0]);
      });
  });
  return (
    <Stack
      align="flex-start"
      justify="flex-start"
      padding="20px"
      spacing='0px'
      maw='315px'
      h={300}
      sx={theme => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      })}
    >
      <Select
        label="Отрасль"
        placeholder="Выберете отрасль "
        data={data.map(item => ({ value: item.key, label: item.title }))}
      />
      <NumberInput onChange={e => handleChange({payment_from: e})} min={0} placeholder="От" label="Оклад" />
      <NumberInput onChange={e => handleChange({payment_to: e})} min={0} placeholder="До" />
      <Button onClick={handleSearch} data-elem='search-button'>Применить</Button>
    </Stack>

  );
};

export default SearchFilter;
