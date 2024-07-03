import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div className="min-h-[calc(100vh-382px)]">
            <Banner></Banner>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;