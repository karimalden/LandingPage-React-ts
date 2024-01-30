import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.

At its core, mindfulness is the practice of bringing focused attention to the present moment with an attitude of openness, curiosity, and non-judgment. It involves cultivating awareness of our thoughts, emotions, and the surrounding environment without getting caught up in them.

Through mindfulness, we develop the ability to observe our thoughts, feelings, and sensations as they arise and pass away. This heightened awareness allows us to respond to life's challenges with clarity and compassion, rather than reacting impulsively.

Mindfulness nurtures deeper connections with ourselves and others, fostering empathy and compassion. It can also reduce stress, anxiety, and depression, enhance focus and concentration, improve emotional regulation, and promote a greater sense of overall contentment.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is the  Questions 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is the  Questions 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is the  Questions 3',
    children: <p>{text}</p>,
  },
  
  {
    key: '4',
    label: 'This is the  Questions 4',
    children: <p>{text}</p>,
  },
  
  {
    key: '5',
    label: 'This is the  Questions 5',
    children: <p>{text}</p>,
  },
];

const Questions: React.FC = () => {
    return(
        <div className='Questions' id='questions'>
            <h1>Frequently Asked Questions</h1>
            <Collapse  accordion items={items} />
        </div>
    )
}

export default Questions;