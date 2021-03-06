/**
 * Validador de número de processos judiciais brasileiros com base no mode 97
 * Author: Nathan Feitoza <nathanfeitoza@outlook.com.br>
 * Year: 2021
 * @inspired: https://github.com/edipojuan/numero-unico-processo
 */
export declare class ValidadorNumeroProcesso {
    /**
     * Formata o Número
     * @param {(number|string)} numero - Número da numeração única do processo (NNNNNNN)
     * @return {string} Número do processo formatado
     */
    private static formatarNumero;
    /**
     * Formata o Ano
     * @param {(number|string)} ano - Ano da numeração única do processo (AAAA)
     * @return {string} Retorna o ano do processo formatado
     */
    private static formatarAno;
    /**
     * Formata a Vara
     * @param {(number|string)} vara - Vara da numeração única do processo (OOOO)
     * @return {string} Retorna a vara do processo formatado
     */
    private static formatarVara;
    /**
     * Formata o a união do órgão e tribunal (Identificação do órgão da justiça)
     * @param {(number|string)} orgaoTribunal - Identificação do órgão da justiça
     * @return {string} Retorna a união do órgão e tribunal do processo formatado
     */
    private static formatarOrgaoTribunal;
    /**
     * Formata o Dígito Verificador
     * @param {(number|string)} digitoVerificador - Digito Verificador da numeração única do processo (DD)
     * @return {string} Retorna o jtr do processo formatado
     */
    private static formatarDigitoVerificador;
    /**
      * Calcula o Módulo 97 Base 10 (Norma ISO 7064)
      * @param {(string)} numero - Número do processo
      * @return {string} Retorna a concatenação do valor calculado + vara + digitoVerificador
      */
    private static calcular;
    /**
     * Valida o digito verificador da numeração única do processo
     * @param {(string)} numeroProcesso - Número do processo
     * @return {boolean} Retorna um boleano indicando se o digito verificador está correto ou não.
     */
    static validar(numeroProcesso: string): boolean;
}
