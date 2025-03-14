"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var endereco_1 = require("./endereco");
var telefone_1 = require("./telefone");
var funcionario_1 = require("./funcionario");
var empresa_1 = require("./empresa");
var descritor_1 = require("./descritor");
var endereco = new endereco_1.Endereco(4321, "Av. Dos Bandeirantes", "Vista Verde", "São José Dos Campos");
var telefone = new telefone_1.Telefone("12", "955221144");
var funcionario = new funcionario_1.Funcionario("Luca Steger", "62541569874", "555.777.888-99", endereco, telefone);
var funcionarios = [funcionario];
var telefones = [telefone];
var empresa = new empresa_1.Empresa(funcionarios, endereco, "Caça Ratos", "Loja Física", "555-555-555-77", telefones);
var descritor = new descritor_1.Descritor();
descritor.descrever(empresa);
