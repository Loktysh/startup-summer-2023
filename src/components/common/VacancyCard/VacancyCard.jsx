/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Card, Text, useMantineTheme, createStyles, Flex, Group, Stack } from '@mantine/core';
import { ReactComponent as Star } from '../../../assets/star.svg';
import { css } from '@emotion/react';
import { getFavouriteVacancies, toggleFavourite } from '../../../utils/favourites';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LocationIcon } from '../../../assets/location.svg';

export const VacancyCard = ({
  id,
  profession,
  firm_name,
  town,
  type_of_work,
  payment_to,
  payment_from,
  currency,
  titleColor,
}) => {
  const [isFavorite, setIsFavourite] = useState((() => getFavouriteVacancies().includes(id))());
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const starStyles = css`
    ${isFavorite
      ? `stroke: ${theme.colors.blue[5]};fill:${theme.colors.blue[5]};`
      : `stroke: ${theme.colors.gray[5]};fill: none;
    color: none;`}
    &:hover {
      cursor: pointer;
      fill: ${isFavorite ? 'none' : theme.colors.blue[5]};
      stroke: ${theme.colors.blue[5]};
      fill: ${theme.colors.blue[5]};
    }
  `;
  return (
    <Card
      onClick={() => navigate(`/vacancies/${id}`)}
      style={{
        cursor: 'pointer',
      }}
      data-elem={`vacancy-${id}`}
      w="100%"
    >
      <Stack spacing="sm">
        <Flex justify="space-between" align="center">
          <Text size="lg" weight={600} color={titleColor}>
            {profession}
          </Text>
          <Star
            mw={22}
            css={starStyles}
            onClick={e => {
              e.stopPropagation();
              setIsFavourite(!isFavorite);
              toggleFavourite(id);
            }}
            size={20}
            data-elem={`vacancy-${id}-shortlist-button`}
          />
        </Flex>
        <Group spacing="sm">
          <Text size="sm" fw={600}>
            з/п от {payment_from}
            {payment_to && '-' + payment_to} {currency}
          </Text>
          <Text size="sm" c={theme.colors.gray[5]}>
            •
          </Text>
          <Text size="sm">{type_of_work.title}</Text>
        </Group>
        <Group spacing="6px">
          <LocationIcon />
          <Text >{town.title}</Text>
        </Group>
      </Stack>
    </Card>
  );
};
