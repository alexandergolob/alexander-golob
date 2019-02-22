import React from 'react';

import { IndexPageTemplate } from '../../pages/index';

// const fields = [
//   'logo',
//   'secondary-nav-logo',
//   'carousel-images',
//   'hero-statement',
//   'left-cta',
//   'right-cta'
// ];

// const getEntries = (entry, fields) => {
//   const obj = {};
//   fields.forEach(field => {
//     obj[field] = entry.getIn(['data', field]);
//   });
//   return obj;
// };

export default ({ entry, widgetFor }) => {
  // const entries = getEntries(entry, fields);

  // console.log(entries);

  // console.log(entry.getIn(['data', 'hero-statement']));

  // console.log(entry.getIn(['data', 'left-cta', 'path']));

  const entries = {
    logo: {
      image: entry.getIn(['data', 'logo', 'image']),
      text: entry.getIn(['data', 'logo', 'text'])
    },
    secondary_nav_logo: entry.getIn(['data', 'secondary-nav-logo']),
    carousel_images: entry.getIn(['data', 'carousel-images']).toJS(),
    hero_statement: entry.getIn(['data', 'hero-statement']),
    left_cta: {
      content: entry.getIn(['data', 'left-cta', 'content']),
      path: entry.getIn(['data', 'left-cta', 'path'])
    },
    right_cta: {
      content: entry.getIn(['data', 'right-cta', 'content']),
      path: entry.getIn(['data', 'right-cta', 'path'])
    }
    // secondary_nav_logo:,
    // carousel_images: ,
    // hero_statement: ,
    // left_cta: ,
    // right_cta: ,
  };

  console.log(entries);

  return <IndexPageTemplate {...entries} />;
  // return <div>hello</div>;
};
