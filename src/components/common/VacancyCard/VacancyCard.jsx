/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Card, Text, useMantineTheme, createStyles } from '@mantine/core';
import { ReactComponent as Star } from '../../../assets/star.svg';
import { css } from '@emotion/react';

export const VacancyCard = ({
  id,
  profession,
  firm_name,
  town,
  type_of_work,
  payment_to,
  payment_from,
  currency
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useMantineTheme();
  const handleToggleFavorite = () => {
    setIsFavorite(prevIsFavorite => !prevIsFavorite);
  };

  const starStyles = css`
    stroke: ${theme.colors.gray[5]};
    color: ${isFavorite ? `${theme.colors.blue[5]}` : `${theme.colors.blue[5]}`};
    &:hover {
      cursor: pointer;
      stroke: ${theme.colors.blue[5]};
    }
  `;
  return (
    <Card
      onClick={() => console.log('123')}
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
          onClick={handleToggleFavorite}
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
