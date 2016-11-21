function isMerge(s, part1, part2) {
  return !s ? !(part1 || part2) :
    s[0] == part1[0] && isMerge(s.slice(1), part1.slice(1), part2) ||
    s[0] == part2[0] && isMerge(s.slice(1), part1, part2.slice(1));
}

console.log(isMerge("codewars", "code", "wars")); //t
console.log(isMerge("codewars", "cdw", "oears")); //t
console.log(isMerge("codewars", "cdw", "ears")); //f
console.log(isMerge("codewars", "code", "wasr")); //f
console.log(isMerge('codewars', 'codes', 'wars')); //f
console.log(isMerge('codewars', 'cwdr', 'oeas')); //f
