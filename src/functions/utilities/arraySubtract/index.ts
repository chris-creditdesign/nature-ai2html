const arraySubtract = (a: any[], b: any[]) => {
  var diff: any[] = [];

  for (let index_a = 0; index_a < a.length; index_a++) {
    const element_a = a[index_a];
    diff.push(element_a);

    for (let index_b = 0; index_b < b.length; index_b++) {
      const element_b = b[index_b];
      if (element_a === element_b) {
        diff.pop();
        break;
      }
    }
  }

  return diff;
};

export default arraySubtract;
