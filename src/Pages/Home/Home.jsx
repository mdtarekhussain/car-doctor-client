import About from "./About/About";
import Browse from "./Browse/Browse";
import Choose from "./Choose/Choose";
import Customer from "./Customer/Customer";
import Banner from "./Home/Banner/Banner";
import Number from "./Numbers/Numbers";
import Services from "./Services/Services";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Number></Number>
      <Browse></Browse>
      <Team></Team>
      <Choose></Choose>
      <Customer></Customer>
    </div>
  );
};

export default Home;
