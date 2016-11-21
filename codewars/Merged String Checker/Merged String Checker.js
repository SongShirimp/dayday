const shead = s => s.substr(0,1);
const stail = s => s.substr(1);
const isEmpty = s => s === "";
const firstCharEqual = (x, y) => shead(x) === shead(y);

const isMerge = (s, a, b) => {
  if (isEmpty(s))
  {
    return isEmpty(a) && isEmpty(b);
  }
  if (firstCharEqual(s, a) && firstCharEqual(s, b))
  {
    return isMerge(stail(s), stail(a), b) || isMerge(stail(s), a, stail(b));
  }
  if (firstCharEqual(s, a))
  {
    return isMerge(stail(s), stail(a), b);
  }
  if (firstCharEqual(s, b))
  {
    return isMerge(stail(s), a, stail(b));
  }
  else
  {
    return false;
  }
};
