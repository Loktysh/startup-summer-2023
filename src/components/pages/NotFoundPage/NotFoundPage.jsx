import { Text, Stack, Button } from '@mantine/core';
import NotFoundImage from '../../../assets/notfound.png';
import { useNavigate } from 'react-router-dom';

export const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <Stack spacing={32} pt={120} align="center">
      <img
        style={{
          maxWidth: '240px',
          height: 'auto',
        }}
        mx="auto"
        src={NotFoundImage}
        alt="Not found vacancies"
      />
      <Text>Упс, здесь еще ничего нет!</Text>
      <Button
        variant="light"
        sx={theme => ({
          color: theme.colors.blue[6],
        })}
        onClick={()=>navigate("/search")}
      >
        Поиск Вакансий
      </Button>
    </Stack>
  );
};

export default NotFoundPage