import React from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Center, Container, Flex, Group, Title, Header as HeaderElement } from '@mantine/core';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

export const Header = () => {
  return (
    <Container sx={{background: 'white'}} px={0}>
      <HeaderElement maw={1116} h={84}>
        <Group security="280">
          <Flex align="center" gap={12}>
            <Logo />
            <Title order={1}>Jobored</Title>
          </Flex>
          <Group spacing={60} style={
            {marginLeft:'calc(100% / 2 - 140px - 275px / 2'}
          }>
            <Anchor href="search">Поиск Вакансий</Anchor>
            <Anchor href="favourite">Избранно</Anchor>
          </Group>
        </Group>
      </HeaderElement>
    </Container>
  );
};
