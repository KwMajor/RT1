"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Descritor = void 0;
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (empresa) {
        console.log("Raz\u00E3o social: ".concat(empresa.razaoSocial));
        console.log("Nome fantasia: ".concat(empresa.nomeFantasia));
        console.log("CNPJ: ".concat(empresa.cnpj));
        console.log("Endere\u00E7o:");
        console.log("Rua: ".concat(empresa.endereco.rua, " Bairro: ").concat(empresa.endereco.bairro, " Cidade: ").concat(empresa.endereco.cidade, " N\u00FAmero: ").concat(empresa.endereco.numero));
        console.log("Funcion\u00E1rios:");
        empresa.funcionarios.forEach(function (funcionario) {
            console.log("Nome: ".concat(funcionario.nome));
            console.log("Matr\u00EDcula: ".concat(funcionario.matricula));
            console.log("CPF: ".concat(funcionario.cpf));
            console.log("Endere\u00E7o: Rua: ".concat(funcionario.endereco.rua, " Bairro: ").concat(funcionario.endereco.bairro, " Cidade: ").concat(funcionario.endereco.cidade, " N\u00FAmero: ").concat(funcionario.endereco.numero));
        });
    };
    return Descritor;
}());
exports.Descritor = Descritor;
