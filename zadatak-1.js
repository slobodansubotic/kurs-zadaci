const sortirajParneINeparne = (niz, daLiJeParanBroj) => {
  let parni = [];
  let neparni = [];

  niz.forEach((broj) => {
    daLiJeParanBroj(broj) ? parni.push(broj) : neparni.push(broj);
  });

  return { parni, neparni };
};

const sortirani = sortirajParneINeparne(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  (broj) => broj % 2 === 0
);

console.log(sortirani);
