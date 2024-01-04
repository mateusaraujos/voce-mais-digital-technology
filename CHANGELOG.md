<!--
    ## 0.0.0 (Lançado em DD-MM-AAAA)

    ### 0.0.1
    * Alfa/Pré-lançamento.
    * Estado muito inicial de desenvolvimento.

    ### 0.1.0
    * Mais funcionalidades.
    * Nível de estabilidade um pouco maior.

    ### 1.0.0
    * Versão significativa do projeto, como o lançamento inicial.

    ## Notas da versão
    * Adições
      * Adicionar
      * Incluir
    * Correções
      * Corrigir
      * Resolver
    * Alterações
      * Alterar
      * Atualizar
    * Remoções
      * Remover
      * Desabilitar
    * Documentação
      * Documentar
      * Comentar
    * Testes
      * Testar
      * Adicionar teste
      * Corrigir teste
    * Estilos
      * Estilos
      * Formatar
      * Organizar
    * Outros
      * Build
      * Tarefa
      * Atividade
      * Configurar
      * Definir
      * Limpar
      * Script
      * Versão
-->

# Registro de Alterações

## 0.5.0

Adições:

- Adicionar o arquivo _tsconfig.json_.
- Adicionar o arquivo _tsconfig.node.json_.
- Adicionar o arquivo _vite.config.ts_.
- Adicionar tipagem a todo código da aplicação.
- Adicionar Types e Constants.
- Adicionar pasta _public_.
- Adicionar _CHANGELOG.md_.

Alterações:

- Alterar todo o projeto para um **Projeto ReactJS + TypeScript**, ainda com a **Ferramenta Vite**.
- Alterar o arquivo _.eslintrc.cjs_.
- Alterar todos os arquivo com _.js/.jsx_ para _.ts/.tsx_.
- Alterar nomes de estilos CSS para _padrão em English_.
- Alterar a localização de várias imagens estáticas para a pasta _public_.
- Alterar nomes de componentes para _padrão em English_.

Remoções:

- Retirar setas do Carrossel.

## 0.4.1

Adições:

- Adicionar o theme-color no **index.html** para navegadores de smartphones suportados.

Estilos:

- Formatar o tamanho e qualidade das imagens para Web.

## 0.4.0

Adições:

- Adicionar o componente VenhaSerMais.
- Adicionar o componente Form.

Alterações:

- Alterar nomes de alguns atributos de alguns componentes.
- Alterar margens e paddings de alguns componentes.

Remoções:

- Retirar os _dots_ do Carrossel.

Estilos:

- Formatar os estilos CSS do componente VenhaSerMais e Form.

## 0.3.1

Adições:

- Adicionar uma tela inicial com animação de logo pulsando.

Alterações:

- Alterar o tempo de inicialização da tela inical.
- Alterar as margens do Carrossel.

## 0.3.0

Adições:

- Adicionar as rotas da aplicação com o componente AppRouter.
- Adicionar a página Home.
- Adicionar a página NotFound.
- Adicionar um Link para o _Portal do Aluno_ no componente Header.
- Adicionar um Link para o _Catálogo de Cursos_ no componente EscolhaCurso.

Alterações:

- Alterar o componente App para incluir o BrowserRouter da biblioteca _react-router-dom_.
- Alterar as margens do Carrossel.

## 0.2.2

Adições:

- Adicionar o componente ExemplosCursos.
- Adicionar o componente EscolhaCurso.

Estilos:

- Estilos gerais sobre user-select: none.

## 0.2.1

Alterações:

- Alterar o background do componente Carrossel, adicionando um blur.
- Alterar vários estilos CSS.

## 0.2.0

Adições:

- Adicionar o componente SomosMais.
- Adicionar o componente HeaderLink.
- Adicionar o componente Links.
- Adicionar o componente SocialLinks.
- Adicinoar a pasta _data_.
- Adicionar o componente TextoMais.
- Adicionar o componente Carrossel.

Correções:

- Resolver o erro no componente Footer: elemento _address_ filho do elemento _p_.
- Corrigir as _Settings_ do componente Carrossel.
- Resolver o problema do Carrossel: carrossel apresenta o overflow-x.

Alterações:

- Atualizar os links do componente Header para _links com identificadores de fragmento_.
- Alterar os links com identificadores de fragmento dos componentes Header e Footer para _links dinâmicos_ com _.map_ usando o componente Links.
- Alterar o texto do componente SomosMais para um texto dinâmico e modular com o componente TextoMais.

Estilos:

- Organizar os estilos CSS das _section_ para estilos globais.
- Estilos dos componente Carrossel definidos.

## 0.1.0

Adições:

- Adicionar o componente Header.
- Adicionar o componente Footer.
- Adicionar o componente MapaLocal.
- Incluir o componente SeloCompromisso.

Alterações:

- Alterar o componente Header para o fluxo normal da página.

Estilos:

- Formatar as unidades de medida para _rem_ nos estilos CSS.

Outros:

- Configurar um **Projeto ReactJS + JavaScript**, usando a **Ferramenta Vite**.
