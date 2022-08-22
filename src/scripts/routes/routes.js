import Detail from '../views/pages/detail-restaurants';
import RestaurantList from '../views/pages/restaurant-list';
import FavoriteRestaurants from '../views/pages/favorite-restaurants';

const routes = {
  '/': RestaurantList,
  '/restaurant-list': RestaurantList,
  '/restaurant-favorite': FavoriteRestaurants,
  '/detail/:id': Detail,
};

export default routes;
