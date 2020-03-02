function checaIdade(idade) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (idade >= 18) {
        resolve();
      }
      else {
        reject();
      }
    }, 2000);
  });
}
var res = checaIdade(10)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });

console.log(res);