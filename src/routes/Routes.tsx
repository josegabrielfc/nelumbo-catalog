import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Main } from '../views/mainView';
import { ProductView } from '../views/ProductView';

export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Main />} />
      <Route path="/phone/:id" element={<ProductView />} />
    </RouterRoutes>
  );
};

export default Routes;