/** @jsxImportSource @emotion/react */
import { Text, Stack, Button } from '@mantine/core';
import NotFoundImage from '../../../assets/notfound.png';

export const NotFound = () => {
  const image1 = new Image();
  image1.src = NotFoundImage;
  console.log(image1.src);
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
