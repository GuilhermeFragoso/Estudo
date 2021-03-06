var promise = function (idade) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (idade >= 18) {
        resolve("Maior que 18.");
      } else {
        reject("Menor que 18.");
      }
    }, 2000);
  });
};

promise(20)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18.");
  });
