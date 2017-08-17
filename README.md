# Consumindo Api Publica Dribbble

O objetivo deste projeto é a utilização da [Api publica](http://developer.dribbble.com/) disponibilizada pela [Dribbble](https://dribbble.com/) para contemplar os seguintes requisitos:

- Uma página com listagem de shots com a opção de poder mudar o tamanho das imagens;
- Busca por shots;
- Página de exibição do shot com as opções de like;

## Instruções Iniciais

Essas instruções irão permitir a execução do projeto em sua máquina local para fins de desenvolvimento e teste. Consulte as instruções de implantação sobre como implantar o projeto em produção.

### Pré-requisitos

Para a execução da aplicação em máquina local os seguintes programas devem estar devidamente instalados:

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)

> **Nota:** Pode-se seguir a instalação padrão para ambos

### Download dos Arquivos

Faça o download dos arquivos, se desejar, seguindo os passos abaixo

```
git clone https://github.com/FlavioMartinho/zup-consumindo-api-publica-dribbble.git
cd zup-consumindo-api-publica-dribbble
```

> **Nota:** Aplicável para Windows

### Instalação

Dentro do diretório da aplicação execute, caso não possua globalmente instalado o **Gulp** e **Bower**, os passos abaixo

```
npm install gulp -g
npm install bower -g
```

Após a conclusão, execute os comandos a seguir para baixar as dependências

```
npm install
bower install
```

> **Nota:** A conclusão do comando _npm install_ poderá demorar algum tempo

## Executando a aplicação

Para iniciar o servidor local utilize o seguinte comando

```
gulp serve
```

> **Nota:** Após modificar e salvar algum arquivo, o gulp idenficará a alteração e publicará novamente a aplicação

Ou, para execução minificada

```
gulp serve:dist
```
> **Nota:** Ao utilizar este comando será gerada uma pasta com o conteúdo minificado e **não** será realizado uma nova publicação após a alteração de algum arquivo.

## Acessando a aplicação

Após iniciar a aplicação pelos comandos _gulp serve_ ou _gulp serve:dist_, seu navegador iniciará automaticamente.
Caso não ocorra, o link da aplicação será

```
http://localhost:3010
```

## Executando os testes

> **Nota:** A execução dos testes gera o relatório de cobertura em target/coverage_report

### Execução Single-Run

A execução simples dos testes irá gerar um relatório contendo a cobertura dos testes. Pode ser iniciado pelo comando

```
gulp test
```

### Execução Watch

A execução continua dos testes **não** irá gerar um relatório contendo a cobertura dos testes e será executado novamente a cada vez que um arquivo for modificado e salvo. Pode ser iniciado pelo comando

```
gulp test:auto
```

## Versão de Produção

Para gerar as minificações a fim de publicação da aplicação, execute o seguinte comando

```
gulp build
```
Será criada uma pasta denominada **dist** na pasta raiz da aplicação, com todo o conteúdo minificado.

> **Nota:** Esta mesma pasta é criada ao executar o comando gulp serve:dist

## Detalhes da Aplicação

Para alterar o tamanho dos shots na página de pesquisa, basta escolher o tamanho desejado na opção ao lado esquerdo da lupa de pesquisa. São três opções de tamanho, pequeno, médio e grande.

Para realizar uma nova pesquisa, clique no icone seta para baixo para expandir as opções de filtro. Os filtros só serão aplicados após clicar no botão **Buscar** ou no icone da **lupa**, localizado ao lado direto em azul, da barra de pesquisa.

Clicando em algum card, será direcionado para _http://localhost:3010/shot_, onde serão exibidos mais detalhes sobre o shot, sendo então permitido o **like** do shot por meio do icone **S2**.

Ao tentar acessar diretamente _http://localhost:3010/shot_, será redirecionado automaticamente para _http://localhost:3010/shots_, com os filtros padrões ativos.

O campo de texto na barra de pesquisa exibe os filtros ativos, **não** os selecionados.

Durante a navegação entre as páginas, ao clicar sob um shot para mais detalhes, pode-se retornar ao mesmo local clicando no botão **<- Continuar procurando**. Ao clicar sob **Consumindo Api Publica Dribbble**, será redirecionado para a lista de shots com os filtros padrões.

## Frameworks e Ferramentas

* [AngularJs](https://angularjs.org/)
* [Bootstrap](http://getbootstrap.com/)
* [Bower](https://bower.io/)
* [Dribbble Api](http://developer.dribbble.com/)
* [Git](https://git-scm.com/downloads)
* [Gulp](https://gulpjs.com/)
* [Jasmine](https://jasmine.github.io/)
* [Karma](https://karma-runner.github.io/1.0/index.html)
* [Node.js](https://nodejs.org)
* [jQuery](https://jquery.com/)