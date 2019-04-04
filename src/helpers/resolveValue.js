export default function resolveValue(name, props = {}, dflt = {}) {
  return (props.style && props.style[name]) || dflt[name];
}