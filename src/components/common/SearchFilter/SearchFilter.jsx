import React, { useEffect, useState } from 'react';
import { Select, NumberInput, Stack, Button, Text, Flex, Input } from '@mantine/core';
import { getCategoryList } from '../../../utils';

const SearchFilter = ({ handleChange, handleSearch, resetFilters }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCategoryList('https://api.example.com/data').then(res => setData(res));
  });
  return (
    <Stack
      align="flex-start"
      justify="flex-start"
      p="20px"
      spacing="20px"
      w="100%"
      maw="315px"
      h="fit-content"
      sx={theme => ({
        backgroundColor: theme.white,
        border: `1px solid ${theme.colors.gray[1]}`,
        borderRadius: theme.radius.sm,
      })}
    >
      <Flex justify="space-between" align="center" w="100%" mb="12px">
        <Text fz="lg" fw="600">
          Фильтры
        </Text>
        <Text
          sx={theme => ({
            cursor: 'pointer',
            color: theme.colors.gray[3],
          })}
          onClick={() => resetFilters()}
          fz="sm"
        >
          Сбросить все
        </Text>
      </Flex>
      <Select
        label="Отрасль"
        placeholder="Выберете отрасль "
        data={data.map(item => ({ value: item.key, label: item.title }))}
        w='100%'
        onChange={e => handleChange({ catalogues: e })}
        labelProps={{ mb: '8px', fw: '700' }}
      />
      <Input.Wrapper w='100%'>
        <NumberInput
          onChange={e => handleChange({ payment_from: e })}
          min={0}
          placeholder="От"
          label="Оклад"
          labelProps={{ mb: '8px', fw:'700' }}
          mb="8px"
          w="100%"
          data-elem="salary-from-input"
        />
        <NumberInput
          onChange={e => handleChange({ payment_to: e })}
          min={0}
          placeholder="До"
          labelProps={{ mb: '8px' }}
          w="100%"
          data-elem="salary-to-input"
        />
      </Input.Wrapper>
      <Button onClick={() => handleSearch()} data-elem="search-button" w={'100%'}>
        Применить
      </Button>
    </Stack>
  );
};

export default SearchFilter;
