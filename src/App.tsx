import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import AppLayout from './components/layouts/AppLayout';
import Home from './pages/Home';

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
