// DESCRIBE = DESCRIPCION DEL DOCUMENTO TESTING
describe("TESTING CONCAT FUNCTION", function () {
  // TEST = TESTING A REALIZAR
  test("Concat con solo strings", function () {
    // AQUI EJECUTAMOS EL CÓDIGO A TESTEAR
    const string1 = "Hola";
    const string2 = "como están";
    const string3 = "los máquinas";

    // UTILIZAMOS NUESTRA FUNCION PARA CREAR UN RESULTADO, QUE ES LO QUE COMPROBAREMOS
    const result = concat(string1, ",", " ", string2, " ", string3);
    check(
      result.length,
      string1.length +
        ",".length +
        " ".length +
        string2.length +
        " ".length +
        string3.length
    );
    check(result, string1 + "," + " " + string2 + " " + string3);
    check(typeof result === "string", true);
    check(typeof result, "string");
  });
  test("Concat con true/false y numbers", function () {
    // AQUI EJECUTAMOS EL CÓDIGO A TESTEAR

    // UTILIZAMOS NUESTRA FUNCION PARA CREAR UN RESULTADO, QUE ES LO QUE COMPROBAREMOS
    const result = concat(true, false, 4, 5);
    check(
      result.length,
      "true".length + "false".length + "4".length + "5".length
    );
    check(result, "truefalse45");
    check(typeof result === "string", true);
    check(typeof result, "string");
  });
});
