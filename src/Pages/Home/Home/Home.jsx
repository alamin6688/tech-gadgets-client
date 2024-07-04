import HowItWorks from "../../HowItWorks/HowItWorks";
import Banner from "../Banner/Banner";
import NewsLetter from "../NewsLetter/NewsLetter";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-382px)]">
            <Banner></Banner>
            <HowItWorks></HowItWorks>
            <NewsLetter></NewsLetter>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;