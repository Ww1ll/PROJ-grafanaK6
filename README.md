# Projeto de Testes de Carga com k6

Este projeto utiliza o k6 para realizar testes de carga em APIs. Os testes estão organizados em cenários que incluem a listagem de todos os usuários e produtos. Os resultados dos testes são gerados em formato HTML para análise posterior. Para a execeução dos testes, foi utilizada a API ServeRest localmente.


## Requisitos

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [k6](https://k6.io/)
- [ServeRestApi](https://github.com/ServeRest/ServeRest?tab=readme-ov-file#localmente-com-docker)


## Instalação

### 1. Clonar o Repositório

```sh
git clone https://github.com/Ww1ll/PROJ-grafanaK6.git
```

## 2. Executando os Testes

### Localmente

Para executar os testes localmente, certifique-se de que o k6 está instalado em sua máquina. Execute o seguinte comando:

```sh
k6 run index.js
```

## Explicação dos Testes

### index.js

Este é o arquivo principal do projeto que organiza e executa os testes definidos nos cenários.

- **Cenários**:
  - `getAllUsers`: Realiza um GET na URL `http://localhost:3000/#/Usuários/get_usuarios` para listar todos os usuários.
  - `getAllProducts`: Realiza um GET na URL `http://localhost:3000/#/Produtos/get_produtos` para listar todos os produtos.

- **Configurações de Execução (options)**:
  - `stages`: Define os estágios do teste de carga, que incluem:
    - Aumentar a carga para 20 usuários virtuais em 30 segundos.
    - Manter a carga em 20 usuários virtuais por 1 minuto.
    - Reduzir a carga para 0 usuários virtuais em 10 segundos.

- **Relatório de Sumário (handleSummary)**:
  - Gera um relatório HTML após a execução dos testes, salvo como `summary.html`.

### Cenários

#### getAllUsers.js

Realiza um GET na URL `http://localhost:3000/#/Usuários/get_usuarios` e verifica se o status da resposta é 200. Caso contrário, registra uma falha.

#### getAllProducts.js

Realiza um GET na URL `http://localhost:3000/#/Produtos/get_produtos` e verifica se o status da resposta é 200. Caso contrário, registra uma falha.

## Métricas Geradas

Durante a execução dos testes, o k6 coleta várias métricas importantes:

- **http_reqs**: Número total de requisições HTTP feitas durante o teste.
- **http_req_duration**: Duração das requisições HTTP em milissegundos (ms), incluindo:
  - `avg`: Tempo médio de resposta.
  - `min`: Tempo mínimo de resposta.
  - `max`: Tempo máximo de resposta.
  - `p(90)`: Tempo de resposta no percentil 90.
  - `p(95)`: Tempo de resposta no percentil 95.
- **checks**: Número total de verificações executadas e a taxa de sucesso.
- **vus**: Número de usuários virtuais ativos em um determinado momento.
- **vus_max**: Número máximo de usuários virtuais simultâneos durante o teste.

## Analisando os Resultados

Os resultados dos testes são gerados em um arquivo HTML chamado `summary.html`, que pode ser aberto em qualquer navegador para análise detalhada. O relatório inclui gráficos e estatísticas que ajudam a entender o desempenho da aplicação sob carga.

