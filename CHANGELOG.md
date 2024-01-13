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
      * Retirar
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

## 0.7.1

> Problema com a propriedade window [#3](https://github.com/mateusaraujos/voce-mais-digital-technology/issues/3)

- Alterações

  - Alterar os estilos CSS do botão de rolar a página ao topo.

- Correções

  - Resolver o problema da propriedade `window of Window`

## 0.7.0

> Botão de voltar ao topo da página [#2](https://github.com/mateusaraujos/voce-mais-digital-technology/pull/2)

- Adições

  - Adicinoar a branch `scroll-to-top-button`.
  - Adicionar um botão para rolar a página ao topo.

- Remoções

  - Excluir a branch `scroll-to-top-button`.

- Outros

  - Definir `rootElement` para usar com a propriedade `scrollTo`.

## 0.6.0

>**** Botão de mudança de tema [#1](https://github.com/mateusaraujos/voce-mais-digital-technology/pull/1)

- Adições

  - Adicionar a branch `theme-switch-button`.
  - Adicionar themes.
  - Adicionar um botão para troca de temas manual.
  - Adicionar troca dinâmica de temas conforme preferências do dispositivo do usuário.

- Remoções

  - Remover a branch `theme-switch-button`.

## 0.5.0

- Adições

  - Adicionar o arquivo _`tsconfig.json`_.
  - Adicionar o arquivo _`tsconfig.node.json`_.
  - Adicionar o arquivo _`vite.config.ts`_.
  - Adicionar tipagem a todo código da aplicação.
  - Adicionar pastas `types/` e `constants/`.
  - Adicionar pasta `public/`.
  - Adicionar `CHANGELOG.md`.
  - Adicionar `MIT License`.

- Alterações

  - Alterar todo o projeto para um **Projeto ReactJS + TypeScript**, ainda com a **Ferramenta Vite**.
  - Alterar o arquivo `.eslintrc.cjs`.
  - Alterar todos os arquivos com `.js/.jsx` para `.ts/.tsx`.
  - Alterar nomes de estilos CSS para _padrão em English_.
  - Alterar a localização de várias imagens estáticas para a pasta `public/`.
  - Alterar nomes de componentes para _padrão em English_.
  - Alterar `MIT License`.

- Remoções

  - Retirar a pasta `data/`.
  - Retirar `arrows` do componente `Carrossel`.

## 0.4.1

- Adições

  - Adicionar o `theme-color` no **index.html** para navegadores de smartphones suportados.

- Estilos

  - Formatar o tamanho e qualidade das imagens para Web.

## 0.4.0

- Adições

  - Adicionar o componente `VenhaSerMais`.
  - Adicionar o componente `Form`.

- Alterações

  - Alterar nomes de alguns atributos de alguns componentes.
  - Alterar `margin` e `padding` de alguns componentes.

- Remoções

  - Retirar os `dots` do componente `Carrossel`.

- Estilos

  - Formatar os estilos CSS dos componentes `VenhaSerMais` e `Form`.

## 0.3.1

- Adições

  - Adicionar uma tela inicial com animação de logo pulsando.

- Alterações

  - Alterar o tempo de inicialização da tela inical.
  - Alterar as margens do componente `Carrossel`.

## 0.3.0

- Adições

  - Adicionar a pasta `routes/`.
  - Adicionar o componente `AppRouter`.
  - Adicionar a pasta `pages/`.
  - Adicionar a página `Home`.
  - Adicionar a página `NotFound`.
  - Adicionar um `Link` para o _Portal do Aluno_ no componente `Header`.
  - Adicionar um `Link` para o _Catálogo de Cursos_ no componente `EscolhaCurso`.

- Alterações

  - Alterar o componente `App` para incluir o `BrowserRouter` da biblioteca `react-router-dom`.
  - Alterar as margens do componente `Carrossel`.

## 0.2.2

- Adições

  - Adicionar o componente `ExemplosCursos`.
  - Adicionar o componente `EscolhaCurso`.

- Estilos

  - Estilos gerais sobre `user-select: none`.

## 0.2.1

- Alterações

  - Alterar o background do componente `Carrossel`, adicionando um blur.
  - Alterar vários estilos CSS.

## 0.2.0

- Adições

  - Adicionar o componente `SomosMais`.
  - Adicionar o componente `HeaderLink`.
  - Adicionar o componente `Links`.
  - Adicionar o componente `SocialLinks`.
  - Adicinoar a pasta `data/`.
  - Adicionar o componente `TextoMais`.
  - Adicionar o componente `Carrossel`.

- Correções

  - Resolver o erro no componente `Footer`: elemento `address` filho do elemento `p`.
  - Corrigir as `Settings` do componente `Carrossel`.
  - Resolver o problema do `Carrossel`: carrossel apresenta o `overflow-x`.

- Alterações

  - Atualizar os links do componente Header para _links com identificadores de fragmento_.

- Alterar os links com identificadores de fragmento dos componentes Header e Footer para _links dinâmicos_ com `.map` usando o componente `Links`.

  - Alterar o texto do componente `SomosMais` para um texto dinâmico e modular com o componente `TextoMais`.

- Estilos
  - Organizar os estilos CSS das `section` para estilos globais.
  - Estilos dos componente `Carrossel` definidos.

## 0.1.0

- Adições

  - Adicionar o componente `Header`.
  - Adicionar o componente `Footer`.
  - Adicionar o componente `MapaLocal`.
  - Incluir o componente `SeloCompromisso`.

- Alterações

  - Alterar o componente Header para o fluxo normal da página.

- Estilos

  - Formatar as unidades de medida para `rem` nos estilos CSS.

- Outros
  - Configurar um **Projeto ReactJS + JavaScript**, usando a **Ferramenta Vite**.
