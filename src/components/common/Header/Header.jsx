import React from 'react';
import {
  Anchor,
  Container,
  Flex,
  Group,
  Title,
  Header as HeaderElement,
  useMantineTheme,
} from '@mantine/core';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

export const Header = () => {
  const isActive = href => {
    return window.location.pathname === href ? true : false;
  };
  const theme = useMantineTheme();
  return (
    <Container sx={{ background: 'white' }} size={'100%'} px={10}>
      <HeaderElement maw={1116} mx={'auto'}>
        <Group h={84}>
          <Flex align="center" gap={12}>
            <Logo />
            <Title order={1}>Jobored</Title>
          </Flex>
          <Group spacing={60} style={{ marginLeft: 'calc(100% / 2 - 140px - 275px / 2' }}>
            <Anchor
              href="search"
              color={(isActive('/search') || isActive('/')) && theme.colors.blue}
            >
              Поиск Вакансий
            </Anchor>
            <Anchor href="favourite" color={isActive('/favourite') && theme.colors.blue}>
              Избранное
            </Anchor>
          </Group>
        </Group>
      </HeaderElement>
    </Container>
  );
};
