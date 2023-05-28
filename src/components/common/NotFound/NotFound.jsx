import { Text, Stack, Button } from '@mantine/core';
import NotFoundImage from '../../../assets/notfound.png';

export const NotFound = () => {
  return (
    <Stack spacing={32} pt={120} align='center'>
      <img style={{
          maxWidth: '240px',
          height: 'auto',
        }} mx="auto" src={NotFoundImage} alt="Not found vacancies" />
      <Text>Упс, здесь еще ничего нет!</Text>
      <Button variant="light">Поиск Вакансий</Button>
    </Stack>
  );
};
