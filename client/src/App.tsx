import { Route, Routes } from 'react-router-dom';
import HomePage from './components/layout/HomePage';
import { Cart } from './components/layout/header/cart/Cart';
import { History } from './components/layout/header/history/History';
import { Coupons } from './components/layout/header/coupons/Coupons';
import { Header } from './components/layout/header/Header';
import { ShopService } from 'src/api/services/shopService';
import { GoodsService } from 'src/api/services/goodsService';
import { useActions } from 'src/hooks/useActions';
import { useFetch } from 'src/hooks/useFetch';

function App() {
	const { addShops, setLoadingShops } = useActions();
	const { addGoods, setLoadingGoods } = useActions();
	useFetch(GoodsService.getGoods, addGoods, setLoadingGoods);
	useFetch(ShopService.getShops, addShops, setLoadingShops);

	return (
		<div className='app'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/history' element={<History />} />
				<Route path='/coupons' element={<Coupons />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
