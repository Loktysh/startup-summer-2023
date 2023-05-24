import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { NotFoundPage, SearchPage, FavouritePage, VacancyPage } from './components/pages';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SearchPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="favourite" element={<FavouritePage />} />
          <Route path="vacancy" element={<VacancyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
