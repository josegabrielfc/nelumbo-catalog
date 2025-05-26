import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Main } from '../views/mainView';
import { ProductView } from '../views/ProductView';

export const RoutesApp = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/product/:id" element={<ProductView />} />
    </RouterRoutes>
  );
};

export default RoutesApp;