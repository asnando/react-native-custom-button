import resolveIconVector from './resolveIconVector';

const resolveButtonIconSource = (source, buttonIconProps = {}) => {
  if (source === null || typeof source === 'undefined') {
    return null;
  }
  if (/^https?:\/\//.test(source)) {
    return { uri: source };
  }
  if (typeof source === 'string' && /^\w+\/\w+$/.test(source)) {
    return resolveIconVector(source, buttonIconProps);
  }
  return source;
};

export default resolveButtonIconSource;
