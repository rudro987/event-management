import Banner from "./Banner";
import EvenetsCard from "./EvenetsCard";
import Info from "./Info";
import NewsLetter from "./NewsLetter";

const Home = () => {
    return (
        <div>
        <Banner></Banner>
        <Info></Info>
        <EvenetsCard></EvenetsCard>
        <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;