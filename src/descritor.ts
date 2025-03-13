import { Empresa } from "./empresa";

export class Descritor {
    descrever(empresa: Empresa) {
        console.log(`Razão social: ${empresa.razaoSocial}`);
        console.log(`Nome fantasia: ${empresa.nomeFantasia}`);
        console.log(`CNPJ: ${empresa.cnpj}`);
        console.log(`Endereço:`);
        console.log(`Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} Número: ${empresa.endereco.numero}`);
        console.log(`Funcionários:`);
        empresa.funcionarios.forEach(funcionario => {
            console.log(`Nome: ${funcionario.nome}`);
            console.log(`Matrícula: ${funcionario.matricula}`);
            console.log(`CPF: ${funcionario.cpf}`);
            console.log(`Endereço: Rua: ${funcionario.endereco.rua} Bairro: ${funcionario.endereco.bairro} Cidade: ${funcionario.endereco.cidade} Número: ${funcionario.endereco.numero}`);
        });
    }
}