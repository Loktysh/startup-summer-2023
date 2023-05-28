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
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text size="lg" weight={600} color={titleColor}>
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
          data-elem={`vacancy-${id}-shortlist-button`}
        />
      </div>
      <Text size="sm">{firm_name}</Text>
      <Text size="sm" fw={600}>
        з/п от {payment_from}{payment_to && '-' + payment_to} {currency}
      </Text>
      <Text size="sm">{type_of_work.title}</Text>
      <Text size="sm">{town.title}</Text>
    </Card>
  );
};
