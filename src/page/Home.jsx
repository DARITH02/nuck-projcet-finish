import { Outlet, Link } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";

import React, { useRef, useState } from "react";
import SlideHome from "../SlideHome";

// Import Swiper styles

const Home = () => {
  return (
    <>
      <SlideHome />
      <span className="welcome-to">
        <h1>សូមស្វាគម៍មកកាន់គេហ៍ទំព័រ</h1>
        <h2>សាកលវិទ្យាល័យជាតិ ជាស៊ីមកំចាយមារ</h2>
      </span>
      <div className="container-width home-page">
        <section className="message-rector">
          <h3>MESSAGE FROM RECTOR</h3>
          <div className="item-message-rector home-message-rector">
            <img
              src="https://nuck.edu.kh/wp-content/uploads/2023/12/Rector_01-2.jpg"
              alt=""
            />
            <p className="txt-home-message">
              Welcome to the National University of CheaSim Kamchaymear (NUCK)!
              A warm and cordial welcome! We are a well-known public university
              ideally located in the historic and beautiful city of Kamchaymear.
              It was initiated and founded by Mr Abc Def Ghij in 2002 and is
              under the jurisdiction of Ministry of Education, Youth and Sport.
              Our institution focuses on quality of education, giving its
              students real knowledge and ability in a number of fields through
              a balance of theory and practice and the combination of real world
              experiences into their education in order to prepare our students
              for a life time of learning. We offer​​​​​​ courses that are
              interesting and relevant to the current labor market to our
              students. With its enthusiastic and experienced staff and
              lectures, NUCK is widely considered to be an educational
              establishment of the highest caliber,...
              <Link to={"aboutus/message"} className="btn btn-read-more">
                Read More
              </Link>
            </p>
          </div>
        </section>
      </div>
      <div className="container-width home-page">
        <h2 className="heading-even-home">NEW&EVENS</h2>
        <div className="even-new-home">
          <div className="items-even-new-home">
            <img
              src="https://nuck.edu.kh/wp-content/uploads/2023/12/Rector_01-2.jpg"
              alt=""
            />
            <span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium, sint facere. Facere fugit libero natus ex impedit
                perspiciatis reprehenderit. Deserunt cumque ab omnis! Maiores
                sunt illum illo provident consectetur eius repellendus ad
                mollitia totam sequi esse, architecto eos consequatur iure
                reprehenderit harum. Aspernatur temporibus dolorum repellendus
                blanditiis iste culpa alias magni natus nemo perspiciatis
                assumenda adipisci et labore nesciunt atque, ex aliquid,
                inventore reiciendis porro nulla! Molestias eligendi laborum ad.
                Labore quisquam atque tenetur necessitatibus velit eum deleniti
                sit, praesentium quibusdam aliquam porro consequatur impedit
                laborum perspiciatis non ducimus fuga explicabo! Voluptate iusto
                eligendi sint odio quo, delectus natus. Nam.
              </p>
            </span>
          </div>
          <div className="items-even-new-home">
            <img
              src="https://nuck.edu.kh/wp-content/uploads/2023/12/Rector_01-2.jpg"
              alt=""
            />
            <span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium, sint facere. Facere fugit libero natus ex impedit
                perspiciatis reprehenderit. Deserunt cumque ab omnis! Maiores
                sunt illum illo provident consectetur eius repellendus ad
                mollitia totam sequi esse, architecto eos consequatur iure
                reprehenderit harum. Aspernatur temporibus dolorum repellendus
                blanditiis iste culpa alias magni natus nemo perspiciatis
                assumenda adipisci et labore nesciunt atque, ex aliquid,
                inventore reiciendis porro nulla! Molestias eligendi laborum ad.
                Labore quisquam atque tenetur necessitatibus velit eum deleniti
                sit, praesentium quibusdam aliquam porro consequatur impedit
                laborum perspiciatis non ducimus fuga explicabo! Voluptate iusto
                eligendi sint odio quo, delectus natus. Nam.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="container-width home-page">
        <div className="grid-1x3">
          <div className="items-home">
            <img
              src="https://nuck.edu.kh/wp-content/uploads/2023/12/Rector_01-2.jpg"
              alt=""
            />
            <h3>WELCOME TO NUCK</h3>
            <span className="item-home-txt">
              <p>
                Throughout the course of 30 years, the National University of
                CheaSim Kamchaymear has been developing progressively in terms
                of capacity, diversity, and quality education, based on our core
                values of research, entrepreneurship, and innovation, which take
                our students and alumni to brighter future.
              </p>
            </span>
          </div>
          <div className="items-home">
            <img
              src="https://nuck.edu.kh/wp-content/uploads/2023/12/Rector_01-2.jpg"
              alt=""
            />
            <h3>OUR MISSION</h3>
            <span className="item-home-txt">
              <p>
                National University of CheaSim Kamchaymear is firmly committed
                to the development of competent and socially responsible human
                resources with high intellectual knowledge, skills, and ethics
                in order to be able to make more productive contribution to the
                socio-economic development of the country.
              </p>
            </span>
          </div>
          <div className="items-home">
            <img
              src="https://nuck.edu.kh/wp-content/uploads/2023/12/Rector_01-2.jpg"
              alt=""
            />
            <h3>OUR VISSION</h3>
            <span className="item-home-txt">
              <p>
                Throughout the course of 30 years, the National University of
                CheaSim Kamchaymear has been developing progressively in terms
                of capacity, diversity, and quality education, based on our core
                values of research, entrepreneurship, and innovation, which take
                our students and alumni to brighter future.
              </p>
            </span>
          </div>
          <div className="items-home">
            <img
              src="https://nuck.edu.kh/wp-content/uploads/2023/12/Rector_01-2.jpg"
              alt=""
            />
            <h3>MANAGEMENT</h3>
            <span className="item-home-txt">
              <p>
                Throughout the course of 30 years, the National University of
                CheaSim Kamchaymear has been developing progressively in terms
                of capacity, diversity, and quality education, based on our core
                values of research, entrepreneurship, and innovation, which take
                our students and alumni to brighter future.
              </p>
            </span>
          </div>
          <div className="items-home">
            <img
              src="https://nuck.edu.kh/wp-content/uploads/2023/12/Rector_01-2.jpg"
              alt=""
            />
            <h3>AGRICULTURAL SCIENCE</h3>
            <span className="item-home-txt">
              <p>
                The mission of the faculty is to provide quality education in
                agronomy, which is deemed to play an important role in
                agriculture of Cambodia. It prepares students to serve client
                needs and demands of the nation, and to be well trained in their
                areas of interest. Its research mission is to conduct basic and
                apply research on the production and protection of agricultural
                crops and on improvements of soil in order to provide support
                for the community, agricultural industries, and relevant
                institutions..
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
