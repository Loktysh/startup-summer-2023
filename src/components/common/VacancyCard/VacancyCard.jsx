/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Card, Text, useMantineTheme, createStyles } from '@mantine/core';
import { ReactComponent as Star } from '../../../assets/star.svg';
import { css } from '@emotion/react';
import { getFavouriteVacancies, toggleFavourite } from '../../../utils/favourites';
import { useNavigate } from 'react-router-dom';

export const VacancyCard = ({
  id,
  profession,
  firm_name,
  town,
  type_of_work,
  payment_to,
  payment_from,
  currency,
}) => {
  const [isFavorite, setIsFavourite] = useState((() => getFavouriteVacancies().includes(id))());
  const navigate = useNavigate();
  const theme = useMantineTheme();
  console.log(getFavouriteVacancies().includes(id));
  const starStyles = css`
    ${isFavorite
      ? `stroke: ${theme.colors.blue[5]};fill:${theme.colors.blue[5]};`
      : `stroke: ${theme.colors.gray[5]};fill: none;
    color: none;`}
    &:hover {
      cursor: pointer;
      fill: ${isFavorite ? 'none' : theme.colors.blue[5]};
      stroke: ${theme.colors.blue[5]};fill:${theme.colors.blue[5]};
    }
  `;
  return (
    <Card
      onClick={() => navigate(`/vacancies/${id}`)}
      style={{
        cursor: 'pointer',
      }}
      data-elem={`vacancy-_vacancy_id_${id}`}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text size="lg" weight={700} style={{ marginBottom: '0.5rem' }}>
          {profession}
        </Text>
        <Star
          css={starStyles}
          onClick={e => {
            e.stopPropagation();
            setIsFavourite(!isFavorite);
            toggleFavourite(id);
          }}
          size={20}
        />
      </div>
      <Text size="sm" style={{ marginBottom: '0.5rem' }}>
        {firm_name}
      </Text>
      <Text size="sm" style={{ marginBottom: '0.5rem' }}>
        Город: {town.title}
      </Text>
      <Text size="sm" style={{ marginBottom: '0.5rem' }}>
        Тип занятости: {type_of_work.title}
      </Text>
      <Text size="sm">
        Оклад: {payment_from} - {payment_to} {currency}
      </Text>
    </Card>
  );
};
