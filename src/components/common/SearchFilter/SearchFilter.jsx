import React, { useEffect, useState, useRef } from 'react';
import { Select, NumberInput, Stack, Button, Text, Flex, Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { getCategoryList } from '../../../utils';

const SearchFilter = ({ handleChange, handleSearch, resetFilters }) => {
  const [data, setData] = useState([]);
  const [isDropdown, setIsDropdown] = useState(false);
  const [category, setCategory] = useState();
  const [valueFrom, setValueFrom] = useState();
  const [valueTo, setValueTo] = useState();
  const inputCategory = useRef(null);
  const inputFrom = useRef(null);
  const inputTo = useRef(null);
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
          onClick={() => {
            setCategory('')
            setValueFrom(0);
            setValueTo(0);
            resetFilters();
          }}
          fz="sm"
        >
          Сбросить все
        </Text>
      </Flex>
      <Select
        label="Отрасль"
        placeholder="Выберете отрасль "
        ref={inputCategory}
        value={category}
        data={data.map(item => ({ value: item.key, label: item.title }))}
        styles={theme => ({
          rightSection: {
            stroke: isDropdown ? theme.colors.blue[5] : theme.colors.gray[3],
            transform: isDropdown ? 'none' : 'rotate(180deg)',
          },
        })}
        onClick={() => setIsDropdown(!isDropdown)}
        rightSection={<IconChevronDown size={24} stroke={1.5} color={'inherit'} />}
        w="100%"
        onChange={e => {
          handleChange({ catalogues: e });
        }}
        labelProps={{ mb: '8px', fw: '700' }}
      />
      <Input.Wrapper w="100%">
        <NumberInput
          ref={inputFrom}
          onChange={e => {
            setValueFrom(e);
            handleChange({ payment_from: e });
          }}
          value={valueFrom}
          min={0}
          placeholder="От"
          label="Оклад"
          labelProps={{ mb: '8px', fw: '700' }}
          mb="8px"
          w="100%"
          data-elem="salary-from-input"
        />
        <NumberInput
          ref={inputTo}
          onChange={e => {
            setValueTo(e);
            handleChange({ payment_to: e });
          }}
          value={valueTo}
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
