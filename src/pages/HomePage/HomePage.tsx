import Banner from 'components/Banner/Banner';
import FeaturedHomeDesign from 'components/FeaturedHomeDesign/FeaturedHomeDesign';
import Product from './Product/Product';
import Expert from  './Expert/Expert';
import Services from './Services/Services';
import CalculateCost from './CalculateCost/CalculateCost';
import JoinMember from './JoinMember/JoinMember';
import CompleteProjects from './CompleteProjects/CompletedProjects';
import Achievements from './Achievements/Achievements';
import ClientFeedback from './ClientFeedback/ClientFeedback';
import NewsLetter from './NewsLetter/NewsLetter';

const HomePage = () => {
  return (
    <div className="home-page">
            <Banner />
            <FeaturedHomeDesign />
            <Product />
            <Expert />
            <Services />
           <CalculateCost />
           <JoinMember />
           <CompleteProjects />
           <Achievements />
            <ClientFeedback />
            <NewsLetter />
    </div>
  )
}

export default HomePage;