import React from "react";
import PageHeaderContent from "../../components/pageheadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/images444.png";
import ImageFive from "../../images/image55.jpg";
import ImageSix from "../../images/image66.jpg";
import ImageSeven from "../../images/images77.png";
import ImageEight from "../../images/images8.jpg";
import ImageNine from "../../images/images9.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Courier Management System",
    image: ImageOne,
    link: "https://github.com/titaniumvinay/DBMS-PROJECT-USING-PHP",
  },
  {
    id: 2,
    name: "AI Image generator",
    link: "https://github.com/titaniumvinay/ai-image-generator",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Handwriting Detection",
    image: ImageThree,
    link: "https://github.com/titaniumvinay/Handwriting-Recognition-using-ML",
  },
  {
    id: 2,
    name: "Online Train Reservation System",
    image: ImageFour,
    link: "https://github.com/titaniumvinay/Online-Train-Reservation-System-Using-JAVA",
  },
  {
    id: 2,
    name: "Messaging App ",
    image: ImageFive,
    link: "https://github.com/titaniumvinay/Chat-Application-using-Apache-Pulsar",
  },
  {
    id: 2,
    name: "College ERP",
    image: ImageSix,
    link: "https://github.com/titaniumvinay/College-ERP-using-Django",
  },
  {
    id: 3,
    name: "SQL(Intermediate) Certification",
    image: ImageSeven,
    link: "https://www.hackerrank.com/certificates/4db2aec1e569",
  },
  {
    id: 3,
    name: "SQL(Basic) Certification",
    image: ImageSeven,
    link: "https://www.hackerrank.com/certificates/6a580fa7f98c",
  },
  {
    id: 3,
    name: "Machine Learning",
    image: ImageEight,
    link: "https://www.linkedin.com/posts/vinay-nayak-b5804325b_successfully-completed-internship-with-codsoft-activity-7133719927466672128-02jD?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 3,
    name: "Android App Development",
    image: ImageNine,
    link: "https://www.linkedin.com/posts/vinay-nayak-b5804325b_verzeo-internship-activity-7123885208621178880-_IWV?utm_source=share&utm_medium=member_desktop",
  },
  
  
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Certification ",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link || "#"} target="_blank" rel="noopener noreferrer">
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    {/* Add link to visit button */}
                    <a href={item.link || "#"} target="_blank" rel="noopener noreferrer">
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
