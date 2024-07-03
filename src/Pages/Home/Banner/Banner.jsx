import img1 from "../../../assets/banner04.jpg";
import img2 from "../../../assets/banner03.jpg";
import img3 from "../../../assets/banner01.jpg";
import img4 from "../../../assets/banner05.jpg";
import img5 from "../../../assets/banner06.jpg";
import img6 from "../../../assets/banner02.jpg";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-12">
      <div className="carousel w-full h-[400px] md:h-[700px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl object-cover" />
          <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white pl-8 md:pl-16 space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Tech Gadgets
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white mr-5 border-none">
                  Explore More
                </button>
                <button className="btn btn-outline text-white hover:text-[#ff2a00] mb-4">
                Latest News
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-[#FF3811] hover:bg-[#ff2a00] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl object-cover" />
          <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white pl-8 md:pl-16 space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Tech Gadgets
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white mr-5 border-none">
                Explore More
                </button>
                <button className="btn btn-outline text-white hover:text-[#ff2a00] mb-4">
                Latest News
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-[#FF3811] hover:bg-[#ff2a00] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full rounded-xl object-cover" />
          <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white pl-8 md:pl-16 space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Tech Gadgets
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white mr-5 border-none">
                Explore More
                </button>
                <button className="btn btn-outline text-white hover:text-[#ff2a00] mb-4">
                  Latest News
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-[#FF3811] hover:bg-[#ff2a00] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl object-cover" />
          <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white pl-8 md:pl-16 space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Tech Gadgets
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white mr-5 border-none">
                Explore More
                </button>
                <button className="btn btn-outline text-white hover:text-[#ff2a00] mb-4">
                  Latest News
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle bg-[#FF3811] hover:bg-[#ff2a00] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full rounded-xl object-cover" />
          <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white pl-8 md:pl-16 space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Tech Gadgets
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white mr-5 border-none">
                Explore More
                </button>
                <button className="btn btn-outline text-white hover:text-[#ff2a00] mb-4">
                  Latest News
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle bg-[#FF3811] hover:bg-[#ff2a00] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full rounded-xl object-cover" />
          <div className="absolute flex rounded-xl items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className="text-white pl-8 md:pl-16 space-y-7 w-full md:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold">
                Affordable Price For Tech Gadgets
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="btn bg-[#FF3811] hover:bg-[#ff2a00] text-white mr-5 border-none">
                Explore More
                </button>
                <button className="btn btn-outline text-white hover:text-[#ff2a00] mb-4">
                  Latest News
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide5"
              className="btn btn-circle mr-5 bg-opacity-65 border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-[#FF3811] hover:bg-[#ff2a00] border-none text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
