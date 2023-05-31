import React from 'react';
import {
  Anchor,
  Container,
  Flex,
  Group,
  Title,
  Header as HeaderElement,
  useMantineTheme,
  createStyles,
  getBreakpointValue,
  em,
  px
} from '@mantine/core';

const useStyles = createStyles(theme => ({
  logo: {
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`]: {
      width: '100%',
    },
  },
  navigation: {
    marginLeft: 'calc(100% / 2 - 140px - 275px / 2)',
    [`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.sm) - 1)})`]: {
      marginLeft: 'unset',
      gap: '20px',
    },
  },
}));

import { ReactComponent as Logo } from '../../../assets/logo.svg';

export const Header = () => {
  const { classes } = useStyles();
  const isActive = href => {
    return window.location.pathname === href ? true : false;
  };
  const theme = useMantineTheme();
  return (
    <Container sx={{ background: 'white' }} size={'100%'} px={10}>
      <HeaderElement maw={1116} mx={'auto'} >
        <Group h={84}>
          <Flex align="center" gap={12} className={classes.logo}>
            <Logo />
            <Title order={1}>Jobored</Title>
          </Flex>
          <Group spacing={60} className={classes.navigation}>
            <Anchor
              href="/search"
              color={(isActive('/search') || isActive('/')) && theme.colors.blue}
            >
              Поиск Вакансий
            </Anchor>
            <Anchor href="/favourite" color={isActive('/favourite') && theme.colors.blue}>
              Избранное
            </Anchor>
          </Group>
        </Group>
      </HeaderElement>
    </Container>
  );
};
