import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, Center, Stack, Container } from '@mantine/core';
import { fetchVacancies } from '../../../utils';
import { VacancyCard } from '../../common/VacancyCard/VacancyCard';
const VacancyPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await fetchVacancies({ 'ids[0]': id });
        setData(result);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    // The `dangerouslySetInnerHTML` prop must be removed from code due XSS
    <>
      {loading ? (
        <Loader variant="dots" />
      ) : (
        <>
          <Center pt="40px">
            {data?.objects && (
              <Stack spacing="20px" align="center" mw="773px">
                <VacancyCard {...data.objects[0]} titleColor={'black'} />
                <Container
                  w="100%"
                  sx={theme => ({
                    maxWidth: '773px',
                    backgroundColor: 'white',
                    padding: '24px',
                    borderRadius: theme.radius.ml,
                    border: `1px solid ${theme.colors.gray[1]}`,
                  })}
                >
                  <div dangerouslySetInnerHTML={{ __html: data?.objects[0].vacancyRichText }} />
                </Container>
              </Stack>
            )}
          </Center>
        </>
      )}
    </>
  );
};

export default VacancyPage;
