<p align="center">
    <img width="20%" src="https://avatars.githubusercontent.com/u/8750624?v=4"/>
</p>

<h3 align="center">Credit Analysis Service</h3>

[![Build Status](https://stonepagamentos.visualstudio.com/finprods-Credit/_apis/build/status%2Fstone-payments.credit-scoring-service?repoName=stone-payments%2Fcredit-scoring-service&branchName=main&stageName=Build)](https://stonepagamentos.visualstudio.com/finprods-Credit/_build/latest?definitionId=4968&repoName=stone-payments%2Fcredit-scoring-service&branchName=main)
[![Jira Current Sprint](https://img.shields.io/badge/CRRIAN-Sprint-blue?logo=jira)](https://mundipagg.atlassian.net/jira/software/c/projects/CRRIAN/boards/1144)
[![Jira Roadmap Sprint](https://img.shields.io/badge/CRRIAN-Roadmap-blue?logo=jira)](https://mundipagg.atlassian.net/jira/software/c/projects/CRRIAN/boards/1144/roadmap)
[![Slack Channel](https://img.shields.io/static/v1?label=Channel&message=credit-acquisition-analysis-team&color=blue&logo=slack)](https://stonepgto.slack.com/archives/C058PGEQ5T8)
[![Backstage](https://img.shields.io/badge/BACKSTAGE-CreditRiskAnalysisService-blue?logo=backstage)](https://backstage.stone.tech/catalog/credit/system/credit-analysis)

## Maturidade

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=stone-payments_credit-scoring-service&token=e208c0b0c45843184a19dcffb8d875cdf03b7a4e)](https://sonarcloud.io/summary/overall?id=stone-payments_credit-scoring-service)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=stone-payments_credit-scoring-service&metric=coverage&token=e208c0b0c45843184a19dcffb8d875cdf03b7a4e)](https://sonarcloud.io/summary/overall?id=stone-payments_credit-scoring-service)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=stone-payments_credit-scoring-service&metric=duplicated_lines_density&token=e208c0b0c45843184a19dcffb8d875cdf03b7a4e)](https://sonarcloud.io/summary/overall?id=stone-payments_credit-scoring-service)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=stone-payments_credit-scoring-service&metric=sqale_rating&token=e208c0b0c45843184a19dcffb8d875cdf03b7a4e)](https://sonarcloud.io/summary/overall?id=stone-payments_credit-scoring-service)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=stone-payments_credit-scoring-service&metric=reliability_rating&token=e208c0b0c45843184a19dcffb8d875cdf03b7a4e)](https://sonarcloud.io/summary/overall?id=stone-payments_credit-scoring-service)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=stone-payments_credit-scoring-service&metric=security_rating&token=e208c0b0c45843184a19dcffb8d875cdf03b7a4e)](https://sonarcloud.io/summary/overall?id=stone-payments_credit-scoring-service)

## Sobre o projeto

Dentro do contexto de risco de crédito, nosso time tem a responsabilidade de processar diferentes tipos de análises para concessão ou desembolso de crédito aos clientes Stone, tendo como base as políticas de crédito definidas pelo negócio.

Principais objetivos:

- Garantir as análises automatizadas do risco de crédito;
- Assegurar a confiabilidade dos processos de análise de risco de crédito.
- Garantir o registro dos logs de decisão do processo de análise.
- Garantir a escalabilidade do processo de análise.

Principais ações:

- Coletar informações do domínio credit data;
- Entender o fluxo de análise a ser aplicado ao processo;
- Executar políticas de crédito conforme o fluxo de análise e do processo;
- Armazenar os resultados das análises;
- Disponibilizar o resultado para tomada de decisões;

## Configurações para execução da aplicação

##### Pré-requisitos:

Antes de começar, certifique-se de ter os seguintes requisitos instalados em sua máquina:

- [Docker](https://stone.service-now.com/resolveaqui?id=sc_cat_item&table=sc_cat_item&sys_id=9183f4c81b77b0104dde87bfe54bcbad&searchTerm=instala%C3%A7%C3%A3o) instalado para execução de testes.
- [Git](https://git-scm.com/) para clonar o repositório.
- [Postman](https://www.postman.com/) instalado e configurado. [[Documentação](https://mundipagg.atlassian.net/wiki/spaces/CAPITAL/pages/6125183868/Acessos+Gerais#Postman)]
- [Azure Key Vault](https://portal.azure.com/#@stone.com.br/resource/subscriptions/3b7d0560-3be1-45d8-87f2-f3ec96f3d153/resourceGroups/Credit-EC2-STG/providers/Microsoft.KeyVault/vaults/credit-kv-eastus2-dev/overview) para acesso às chaves e segredos. [[Documentação](https://mundipagg.atlassian.net/wiki/spaces/CAPITAL/pages/6125183868/Acessos+Gerais#Azure-Key-Vault)]
- Para executar as aplicações, é necessário configurar um SQL Server em um contêiner Docker local para suportar a utilização do Hangfire. Através deste [link](https://medium.com/@eduardohenriquesartor/criando-um-sql-server-local-usando-docker-compose-1a53292bf764) é possivel acessar uma documentação de criação do SQL Server Local, e as configurações de usuário, senha e porta de acesso devem seguir a connection string que se encontra [aqui](https://portal.azure.com/#@stone.com.br/asset/Microsoft_Azure_KeyVault/Secret/https://credit-kv-eastus2-dev.vault.azure.net/secrets/credit-scoring--Hangfire-SQLServer-ConnectionString/03c1b00dd62f429381c457a76f5f4a54)

##### 1. Clonar o repositório
Clonar o projeto do repositório oficial usando o comando abaixo:

```bash
git clone https://github.com/stone-payments/credit-scoring-service.git
cd credit-scoring-service
```

##### 2. Instalar dependências
Após acessar o diretório do projeto, realize a compilação do projeto para baixar todas as dependências.

##### 3. Configurar variáveis de ambiente
Todas as variáveis de ambiente necessárias já estão configuradas no arquivo:
`CreditRiskAnalysisService.Api -> Properties -> launchSettings.json` e na Azure Key Vault.

##### 4. Executar os serviços
Inicie os seguintes serviços para rodar a aplicação:

- `CreditRiskAnalysisService.Api`
- `CreditRiskAnalysisService.Loader`
- `CreditRiskAnalysisService.Worker`

##### 5. Ignorar os serviços não utilizados
Os seguintes serviços **não precisam ser executados**, pois não são utilizados:

- `CreditRiskExecution.Api`
- `CreditRiskExecution.Worker`

## Azure DNS

| Ambiente   | Região     | Tipo    | Nome                                                                           |
| ---------- | ---------- | ------- | ------------------------------------------------------------------------------ |
| Staging    | East US 2  | Private | `credit-scoring-eastus2.stg.dca.financialproducts.stone.com.br`                |
| Staging    | East US 2  | Private | `credit-scoring-worker-eastus2.stg.dca.financialproducts.stone.com.br`         |
| Staging    | East US 2  | Private | `credit-scoring-loader-eastus2.stg.dca.financialproducts.stone.com.br`         |
| Sandbox    | East US 2  | Private | `credit-scoring-sandbox-eastus2.stg.dca.financialproducts.stone.com.br`        |
| Sandbox    | East US 2  | Private | `credit-scoring-worker-sandbox-eastus2.stg.dca.financialproducts.stone.com.br` |
| Sandbox    | East US 2  | Private | `credit-scoring-loader-sandbox-eastus2.stg.dca.financialproducts.stone.com.br` |
| Production | East US 2  | Private | `credit-scoring-eastus2.apps.stone.com.br`                                     |
| Production | East US 2  | Private | `credit-scoring-worker-eastus2.apps.stone.com.br`                              |
| Production | East US 2  | Private | `credit-scoring-loader-eastus2.apps.stone.com.br`                              |
| Production | Central US | Private | `credit-scoring-centralus.apps.stone.com.br`                                   |
| Production | Central US | Private | `credit-scoring-worker-centralus.apps.stone.com.br`                            |
| Production | Central US | Private | `credit-scoring-loader-centralus.apps.stone.com.br`                            |

## Contato

<table>
  <tr>
    <td align="center">
        <a href="https://github.com/SaboiaEric">
            <img src="https://ca.slack-edge.com/TB5G2HVQQ-U0684GM1VRS-9bbd613c054c-512" width="80px;" alt="" title="eric.saboia@stone.com.br"/>
            <br />
            <sub><b>Eric Saboia</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/ncfcj">
            <img src="https://ca.slack-edge.com/E07UHBYP7PW-U083P6Y22KZ-39b4e2cce336-512" width="80px;" alt="" title="nilton.costa@stone.com.br"/>
            <br />
            <sub><b>Nilton Cosme</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/thiagofer93">
            <img src="https://ca.slack-edge.com/TB5G2HVQQ-U03C2TU8BPD-5adcbce15193-512" width="80px;" alt="" title="tferreira@stone.com.br"/>
            <br />
            <sub><b>Thiago Ferreira</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/LucaxSebastian">
            <img src="https://ca.slack-edge.com/TB5G2HVQQ-U03JGG1V3F0-b3d0ca77d312-512" width="80px;" alt="" title="lucas.sebastian@stone.com.br"/>
            <br />
            <sub><b>Lucas Sebastian</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/diegocstone">
            <img src="https://ca.slack-edge.com/TB5G2HVQQ-U07F78UK4HJ-281271e5c574-512" width="80px;" alt="" title="diego.cordeiro@stone.com.br"/>
            <br />
            <sub><b>Diego Cordeiro</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/marttheus">
            <img src="https://ca.slack-edge.com/E07UHBYP7PW-U02JJB6BYQL-7c3e5983feb6-512" width="80px;" alt="" title="matheus.mcoelho@stone.com.br"/>
            <br />
            <sub><b>Matheus Felipe</b></sub>
        </a>
    </td>
    <td align="center">
        <a href="https://github.com/mauricioroge">
            <img src="https://ca.slack-edge.com/E07UHBYP7PW-U08UJDV5VH6-06e712e09e90-512" width="80px;" alt="" title="mauricio.araujo@stone.com.br"/>
            <br />
            <sub><b>Mauricio Araujo</b></sub>
        </a>
    </td>
        <td align="center">
        <a href="https://github.com/LuanSantos00">
            <img src="https://ca.slack-edge.com/E07UHBYP7PW-U091544E8F2-293b71c52d65-512" width="80px;" alt="" title="luan.cosme@stone.com.br"/>
            <br />
            <sub><b>Luan Santos</b></sub>
        </a>
    </td>
  </tr>
</table>