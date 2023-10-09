import Banner from "./Banner";
import EvenetsCard from "./EvenetsCard";
import Info from "./Info";
import NewsLetter from "./NewsLetter";

const Home = () => {
    return (
        <div>
        <div data-aos="zoom-in"><Banner></Banner></div>
        <div className="max-w-[1440px] mx-auto">
        <div>
        <Info></Info>
        </div>
        <div data-aos="slide-up"><EvenetsCard></EvenetsCard></div>
        </div>
        <div data-aos="slide-down"><NewsLetter></NewsLetter></div>
        </div>
    );
};

export default Home;