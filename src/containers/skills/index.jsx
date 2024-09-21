import { Animate } from "react-simple-animate";
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageheadercontent";
import { skillsData } from "./utils";
import './styles.scss';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="MY SKILLS"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__box-container">
                {item.data.map((skillItem, j) => (
                  <div className="skills__content-wrapper__inner-content__box" key={j}>
                    <p>{skillItem.skillName}</p>
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

