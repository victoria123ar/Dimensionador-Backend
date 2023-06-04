# Dimensionador de Placa de Orifício

Este projeto é um dimensionador de placa de orifício, uma ferramenta que auxilia no cálculo de vazão de fluido, diâmetro do orifício e diferença de pressão em sistemas que utilizam esse dispositivo de medição. O dimensionador permite escolher o tipo de tomada, a composição do fluido e a fase do mesmo, fornecendo resultados precisos para uma ampla gama de aplicações.

## Funcionalidades

O dimensionador de placa de orifício possui as seguintes funcionalidades:

1. *Cálculo de Vazão*: Com base nos parâmetros fornecidos, como diâmetro do orifício, diferença de pressão e propriedades do fluido, o dimensionador pode calcular a vazão do fluido em um sistema.

2. *Cálculo do Diâmetro do Orifício*: Se a vazão desejada é conhecida, o dimensionador permite calcular o diâmetro adequado do orifício necessário para atingir essa vazão.

3. *Cálculo da Diferença de Pressão*: Se a vazão e o diâmetro do orifício são conhecidos, o dimensionador pode determinar a diferença de pressão correspondente para esse sistema.

4. *Seleção do Tipo de Tomada*: O dimensionador oferece opções para selecionar o tipo de tomada da placa de orifício, como tomada flangeada, tomada de solda, entre outras.

5. *Composição do Fluido*: O dimensionador permite especificar a composição do fluido, incluindo sua densidade, viscosidade e outras propriedades relevantes para o cálculo.

6. *Fase do Fluido*: É possível escolher a fase do fluido, se é líquido, gás ou vapor, para ajustar os cálculos adequadamente.

## Como usar

1. *Acesse o Dimensionador*: Abra o aplicativo do dimensionador de placa de orifício.

2. *Forneça as Informações*: Insira os parâmetros necessários, como vazão desejada, tipo de tomada, composição do fluido e fase do mesmo.

3. *Calcule*: Selecione o cálculo desejado (vazão, diâmetro do orifício ou diferença de pressão) e clique no botão de calcular.

4. *Visualize os Resultados*: O dimensionador irá exibir os resultados do cálculo de acordo com as informações fornecidas.

5. *Ajuste os Parâmetros*: Se necessário, você pode ajustar os parâmetros e repetir o cálculo para obter diferentes resultados.

Esperamos que o dimensionador de placa de orifício seja útil e facilite o dimensionamento e cálculo necessário para suas aplicações.


## Como executar o projeto em ambiente de desenvolvimento

Siga as etapas abaixo para executar o projeto em seu ambiente de desenvolvimento:

1. **Clonar o repositório**: Faça uma cópia local deste repositório em seu computador.

2. **Instalar as dependências**: No diretório raiz do projeto, execute o seguinte comando no terminal para instalar todas as dependências necessárias:

```bash
npm i
```

3. **Criar uma base de dados PostgreSQL**: O banco de dados deve ser de acordo com o que colocar no arquivo .env

4. **Configurar os arquivos .env e .env.development**: Usando o arquivo .env.example preencha as variáveis de ambiente de acordo com as configurações do seu ambiente de desenvolvimento.

5. **Executar todas as migrações**

```bash
npm run dev:migration:run
```

6. **Base de dados seed**

```bash
npm run dev:seed
```

## Construção e Início para Produção

Para construir e iniciar o aplicativo em um ambiente de produção, execute os seguintes comandos:

1. **Iniciar o servidor**: Após a conclusão da etapa anterior, execute o seguinte comando para iniciar o servidor:

```bash
npm run dev
```

## Como executar testes

1. Siga os passos da última secção

2. Configure o arquivo `.env.test` usando o arquivo `.env.example`

3. Executar todas as migrações

```bash
npm run migration:run
```

4. Executar teste:
   (localmente)

```bash
npm run test
```

(docker)

```bash
npm run test:docker
```

## Executando a aplicação localmente ou dentro do docker

Os arquivos `.env.development` e `.env.test` devem ser alterados se você quiser executar a aplicação localmente ou dentro do docker. É possível preencher os arquivos com base no arquivo `.env.example`, mas é preciso considerar o seguinte:

- Executando a aplicação localmente (postgres e node):

Adicione suas credenciais do postgres e certifique-se de criar um banco de dados antes de executar o aplicativo.

- Executando a aplicação dentro do docker (postgres e node):

Defina `POSTGRES_HOST` como `drivent-postgres-development` para `.env.development` e `drivent-postgres-test` para o arquivo `.env.test`. É o nome do container postgres dentro do arquivo docker-compose. O Docker Compose iniciará o container postgres para você, criará o banco de dados e o alias de host para você.

- Executando o aplicativo localmente (node), mas o postgres está sendo executado dentro do docker:

Defina `POSTGRES_HOST` como `localhost` para o arquivo `.env.development` e `localhost` para o arquivo `.env.test`. O Docker compose está configurado para expor o contentor postgres ao seu localhost.
