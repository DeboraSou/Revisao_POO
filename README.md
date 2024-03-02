# Revisão de Programação Orientada a Objetos (POO)

Este repositório contém um exemplo prático de aplicação em JavaScript que simula uma plateia assistindo a diferentes tipos de comediantes. O projeto utiliza conceitos avançados de Programação Orientada a Objetos (POO), como classes, herança e instanciamento, para modelar os comediantes, suas piadas e a interação com a plateia.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- **index.html**: Arquivo HTML responsável pela estrutura da página da web.
- **script.js**: Arquivo JavaScript contendo a definição das classes e a lógica de interação entre a plateia e os comediantes.

## Funcionamento

Ao acessar a página HTML, o título principal é exibido, e o script JavaScript é carregado para inicializar a aplicação.

## Classes

O código JavaScript define as seguintes classes:

- **Piada**: Representa uma piada com seu texto associado. A classe possui um construtor para criar uma nova piada com o texto fornecido e um método para exibi-la de forma estilizada.
- **Comediante**: Classe abstrata que representa um comediante. Seu construtor recebe o nome do comediante e um array de strings contendo suas piadas. Esta classe contém o método para contar uma piada aleatória do repertório, que é implementado pelas subclasses.
- **StandUpComedian**: Subclasse de Comediante que representa um comediante de stand-up. Esta classe herda métodos e atributos da classe Comediante e implementa o método para contar piadas de forma específica para comediantes de stand-up.
- **ComedianteDePalco**: Subclasse de Comediante que representa um comediante de palco. Assim como StandUpComedian, herda métodos e atributos de Comediante e implementa a lógica para contar piadas típicas de comediantes de palco.
- **Plateia**: Representa a audiência que assiste aos comediantes. Seu construtor recebe uma instância de Comediante. Este método interage com o comediante fornecido, exibindo o nome do comediante e uma piada aleatória do seu repertório.

## Instâncias e Interação

São criadas instâncias de StandUpComedian e ComedianteDePalco, cada uma com seu próprio repertório de piadas. Em seguida, instâncias de Plateia são criadas para assistir aos comediantes. Cada instância de Plateia interage com seu comediante correspondente, exibindo seu nome e uma piada aleatória.

## Como Executar

Para executar o projeto, basta abrir o arquivo index.html em um navegador web compatível com JavaScript, clicar na tecla F12 para abrir o DevTools. Isso inicializará a aplicação e você poderá observar a interação entre a plateia e os comediantes.