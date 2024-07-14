export default function orderByProps(obj, order) {
    const orderedProps = [];
    const unorderedProps = [];
  
    for (const key in obj) {
      if (order.includes(key)) {
        orderedProps.push({ key, value: obj[key] });
      } else {
        unorderedProps.push({ key, value: obj[key] });
      }
    }
  
    unorderedProps.sort((a, b) => (a.key > b.key ? 1 : -1));
  
    return [...orderedProps, ...unorderedProps];
  }
  