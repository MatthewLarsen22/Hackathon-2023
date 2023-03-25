function AABBIntersectionTest(r1, r2) {
    let theyDo = !(
      r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top
    );

    return theyDo;
}