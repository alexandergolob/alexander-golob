const remark = require('remark');
const remarkHTML = require('remark-html');

const transformMarkdownFields = obj => {
  const converter = remark().use(remarkHTML);

  if (Array.isArray(obj)) {
    return obj.map(elem => transformMarkdownFields(elem));
  } else {
    const transformedFields = {};

    Object.keys(obj).forEach(key => {
      const val = obj[key];
      const isObject = typeof val === 'object';
      const isArray = Array.isArray(val);

      if (isObject && !isArray) {
        const deepResult = transformMarkdownFields(val);

        if (Object.keys(deepResult).length > 0)
          return (transformedFields[key] = deepResult);
      }

      if (isArray) {
        const deepResult = transformMarkdownFields(val);

        if (deepResult.length > 0) {
          return (transformedFields[key] = deepResult);
        }
      }

      if ((!isObject || (isObject && isArray)) && /^md_.+$/.test(key)) {
        transformedFields[key.replace(/^md_/, '')] = isArray
          ? val.map(str => converter.processSync(str).toString())
          : converter.processSync(val).toString();
      }
    });

    return transformedFields;
  }
};

module.exports = transformMarkdownFields;
