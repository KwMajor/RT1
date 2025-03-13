import { Endereco } from "./endereco";
import { Telefone } from "./telefone";
import { Funcionario } from "./funcionario";
import { Empresa } from "./empresa";
import { Descritor } from "./descritor";

let endereco = new Endereco(4321, "Av. Dos Bandeirantes", "Vista Verde", "São José Dos Campos");
let telefone = new Telefone("12", "955221144");
let funcionario = new Funcionario("Luca Steger", "62541569874", "555.777.888-99", endereco, telefone);
let funcionarios = [funcionario];
let telefones = [telefone];
let empresa = new Empresa(funcionarios, endereco, "Detetizadora ME/LTDA", "Caçadora e eliminadora de ratos", "555-555-555-77", telefones);

let descritor = new Descritor();
descritor.descrever(empresa);