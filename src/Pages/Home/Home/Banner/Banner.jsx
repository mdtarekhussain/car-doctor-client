import img1 from "../../../../assets/images/banner/1.jpg";
import img2 from "../../../../assets/images/banner/2.jpg";
import img3 from "../../../../assets/images/banner/3.jpg";
import img4 from "../../../../assets/images/banner/4.jpg";
import img5 from "../../../../assets/images/banner/5.jpg";
import img6 from "../../../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full mt-5 h-[570px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl bg-cover bg-no-repeat" />
        <div className="absolute h-full flex items-center top-0 left-0 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
          <div className="space-y-6 w-1/2 pl-12 ">
            <h2 className="text-6xl text-white font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[#FFFFFF]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-secondary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute  right-5 bottom-1 gap-5 flex -translate-y-1/2 transform justify-end items-end">
          <a href="#slide6" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center top-0 left-0 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
          <div className="space-y-6 w-1/2 pl-12 ">
            <h2 className="text-6xl text-white font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[#FFFFFF]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-secondary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute  right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end items-end">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center top-0 left-0 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
          <div className="space-y-6 w-1/2 pl-12 ">
            <h2 className="text-6xl text-white font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[#FFFFFF]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-secondary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute  right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end items-end">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center top-0 left-0 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
          <div className="space-y-6 w-1/2 pl-12 ">
            <h2 className="text-6xl text-white font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[#FFFFFF]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-secondary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute  right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end items-end">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center top-0 left-0 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
          <div className="space-y-6 w-1/2 pl-12 ">
            <h2 className="text-6xl text-white font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[#FFFFFF]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-secondary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute  right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end items-end">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center top-0 left-0 bg-linear-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
          <div className="space-y-6 w-1/2 pl-12 ">
            <h2 className="text-6xl text-white font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="text-[#FFFFFF]">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-5">
              <button className="btn btn-secondary">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute  right-5 bottom-0 gap-5 flex -translate-y-1/2 transform justify-end items-end">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
