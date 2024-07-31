import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/ServicesInfo/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import Research from "./Components/ServiceDetails/Research";
import HumanResource from "./Components/ServiceDetails/HumanResource";
import InformationTechnology from "./Components/ServiceDetails/InformationTechnology";
import Architecture from "./Components/ServiceDetails/Architecture";
import Engineering from "./Components/ServiceDetails/Engineering";
import ProjectManagement from "./Components/ServiceDetails/ProjectManagement";
import QualitySurvey from "./Components/ServiceDetails/QualitySurvey";
import ScrollToTopButton from "./Components/ScrollToTop/ScrollToTop";
import Samburu from "./Components/Casestudy/Samburu";
import Kitui from "./Components/Casestudy/Kitui";
import Housing from "./Components/Casestudy/Housing";
import Ocheans from "./Components/Casestudy/Ocheans";

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/portfolio' element={<Portfolio />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/research' element={<Research />} />
				<Route path='/humanresource' element={<HumanResource />} />
				<Route
					path='/informationtechnology'
					element={<InformationTechnology />}
				/>
				<Route path='/architecture' element={<Architecture />} />
				<Route path='/engineering' element={<Engineering />} />
				<Route path='/projectmanagement' element={<ProjectManagement />} />
				<Route path='/qualitysurvey' element={<QualitySurvey />} />
				<Route path='/samburu' element={<Samburu />} />
				<Route path='/kitui' element={<Kitui />} />
				<Route path='/housing' element={<Housing />} />
				<Route path='/ocheanbays' element={<Ocheans />} />
			</Routes>
			<ScrollToTopButton />
			<Footer />
		</div>
	);
}

export default App;
