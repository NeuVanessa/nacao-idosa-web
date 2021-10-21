import React, { useState } from 'react';
import { data } from './mock/accordion';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

import {AccordionSection,Container,Wrap,Dropdown       } from './styles'
const Accordion = () => {
  const [clicked, setClicked] = useState<Boolean>(false);

  const toggle = (index:any) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>

        <Container>
          {data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.assunt}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.title}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;