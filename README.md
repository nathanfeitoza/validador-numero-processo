# Validador de números de processos judiciais


## Description

Este projeto visa facilitar a vida de desenvolvedores que precisem validar números de processos judiciais brasileiros que utilize o algoritmo de validação Módulo 97. Ele foi inspirado a partir do repositório abaixo:

* [numero-unico-processo](https://github.com/edipojuan/numero-unico-processo)

[Aqui](https://tdn.totvs.com/pages/releaseview.action?pageId=452719540) temos um link útil para entender como funciona a validação do número do processo.


### Example

```javascript
// Using ES6 import 

import { ValidadorNumeroProcesso } from 'validador-numero-processo';

console.log( ValidadorNumeroProcesso.validar(<numero_do_processo>) );
```

```javascript
// Using require 

const { ValidadorNumeroProcesso } = require('validador-numero-processo');

console.log( ValidadorNumeroProcesso.validar(<numero_do_processo>) );
```

## License
O projeto tem a licença MIT vinculada a ele e é livre para utilização e personalização. Consulte o arquivo [LICENSE](https://github.com/nathanfeitoza/validador-numero-processo/blob/main/LICENSE) para maiores esclarecimentos.
