import React, { useEffect, useState } from 'react';
import { Select, NumberInput, Stack, Button, Text } from '@mantine/core';
import { getCategoryList } from '../../../utils';

const SearchFilter = ({handleChange, handleSearch, resetFilters}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCategoryList('https://api.example.com/data')
      .then(res => setData(res))
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
      <Text style={{cursor: 'pointer'}} onClick={resetFilters} fz="sm">Сбросить все</Text>
      <Select
        label="Отрасль"
        placeholder="Выберете отрасль "
        data={data.map(item => ({ value: item.key, label: item.title }))}
        onChange={e => handleChange({catalogues: e})}
      />
      <NumberInput onChange={e => handleChange({payment_from: e})} min={0} placeholder="От" label="Оклад" data-elem='salary-from-input'/>
      <NumberInput onChange={e => handleChange({payment_to: e})} min={0} placeholder= "До" data-elem='salary-to-input'/>
      <Button onClick={handleSearch} data-elem='search-button'>Применить</Button>
    </Stack>

  );
};

export default SearchFilter;
