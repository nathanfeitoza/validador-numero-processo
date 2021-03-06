"use strict";
/**
 * Validador de número de processos judiciais brasileiros com base no mode 97
 * Author: Nathan Feitoza <nathanfeitoza@outlook.com.br>
 * Year: 2021
 * @inspired: https://github.com/edipojuan/numero-unico-processo
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ValidadorNumeroProcesso {
    /**
      * Calcula o Módulo 97 Base 10 (Norma ISO 7064)
      * @param {(string)} numero - Número do processo
      * @return {string} Retorna a concatenação do valor calculado + vara + digitoVerificador
      */
    static calcular(processo) {
        const validarNumero = processo.match(/[0-9]{7}-[0-9]{2}.[0-9]{4}.[0-9]{1}.[0-9]{2}.[0-9]{4}/);
        if (!validarNumero) {
            throw 'O número do processo enviado é inválido';
        }
        const processoFormatado = processo.replace('-', '.');
        let [numero, digitoVerificador, ano, orgao, tribunal, vara] = processoFormatado.split('.');
        let orgaoTribunal = orgao.toString() + tribunal;
        numero = this.formatarNumero(numero);
        ano = this.formatarAno(ano);
        vara = this.formatarVara(vara);
        orgaoTribunal = this.formatarOrgaoTribunal(orgaoTribunal);
        digitoVerificador = this.formatarDigitoVerificador(digitoVerificador);
        const restoDivisaoNumero = +numero % 97;
        const uniaoAnoJtr = `${restoDivisaoNumero}${ano}${orgaoTribunal}`;
        const novoResto = +uniaoAnoJtr % 97;
        const verificador = `${novoResto}${vara}${digitoVerificador}`;
        return verificador;
    }
    /**
     * Valida o digito verificador da numeração única do processo
     * @param {(string)} numeroProcesso - Número do processo
     * @return {boolean} Retorna um boleano indicando se o digito verificador está correto ou não.
     */
    static validar(numeroProcesso) {
        const numeroProcessoCalculado = this.calcular(numeroProcesso);
        return +numeroProcessoCalculado % 97 === 1;
    }
}
exports.default = ValidadorNumeroProcesso;
/**
 * Formata o Número
 * @param {(number|string)} numero - Número da numeração única do processo (NNNNNNN)
 * @return {string} Número do processo formatado
 */
ValidadorNumeroProcesso.formatarNumero = (numero) => (`${numero}`.padStart(7, '0'));
/**
 * Formata o Ano
 * @param {(number|string)} ano - Ano da numeração única do processo (AAAA)
 * @return {string} Retorna o ano do processo formatado
 */
ValidadorNumeroProcesso.formatarAno = (ano) => (`${ano}`.padStart(4, '0'));
/**
 * Formata a Vara
 * @param {(number|string)} vara - Vara da numeração única do processo (OOOO)
 * @return {string} Retorna a vara do processo formatado
 */
ValidadorNumeroProcesso.formatarVara = (vara) => (`${vara}`.padStart(4, '0'));
/**
 * Formata o a união do órgão e tribunal (Identificação do órgão da justiça)
 * @param {(number|string)} orgaoTribunal - Identificação do órgão da justiça
 * @return {string} Retorna a união do órgão e tribunal do processo formatado
 */
ValidadorNumeroProcesso.formatarOrgaoTribunal = (orgaoTribunal) => (`${orgaoTribunal}`.padStart(3, '0'));
/**
 * Formata o Dígito Verificador
 * @param {(number|string)} digitoVerificador - Digito Verificador da numeração única do processo (DD)
 * @return {string} Retorna o jtr do processo formatado
 */
ValidadorNumeroProcesso.formatarDigitoVerificador = (digitoVerificador) => (`${digitoVerificador}`.padStart(2, '0'));
