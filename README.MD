<h1 align="center">
 Anniversary Calendar
</h1>

<p>
  
  <a href="https://github.com/LucasAugustoCastro" target="_blank">
    <img alt="Author" src="https://img.shields.io/badge/author-LucasAugustoCastro-CF0000?style=flat-square" />
  </a>
  <a href="#" target="_blank">
    <img alt="Author" src="https://img.shields.io/github/languages/count/LucasAugustoCastro/AnniversaryCalendar?color=%23D54F44&style=flat-square" />
  </a>

  <a href="https://github.com/LucasAugustoCastro/AnniversaryCalendar/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>
 
>Não esqueça mais os aniversarios de seus amigos, salve ele no Anniversary Calendar e consulte-os sempre que precisar
<p align="center">
  
  <img src=".github/AnniversaryCalendar.gif">
</p>


## 💻️ Techs
- [NodeJs](https://nodejs.org/en/)
- Typescript


## 🏗 Instalação
- Possuir [NodeJs](https://nodejs.org/en/) e [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/) instalado, clone o projeto com os seguintes comandos:
  ```sh
  git clone https://github.com/LucasAugustoCastro/AnniversaryCalendar.git
  ```
- Para que sua aplicação rode, lembre-se de possuir o [postgreSQL]() instalado

- Entre na pasta backend

  - Crie suas configurações do banco seguindo exemplo ormconfig.example.json
    ```sh
    cp ormconfig.example.json ormconfig.json
    ```
    Não se esqueca de colocar novos valores após copiar os exemplos. Verifique se as portas usadas pelos bancos são as mesmas que a do arquivo

  - Não esqueça de verificar se o postgreSQL estão realmente usando as portas especificadas
  - Crie suas variaveis ambiente seguindo o .env.examples
    ```sh
    cp .env.example .env
    ```
    Não se esqueça de colocar novos valores após copiar os exemplos
## 🚴‍♂️️ Iniciando o projeto
- Use o comando **yarn** dentro da pasta backend
- Ainda na pasta backend rode o seguinte comando no terminal:
    ```sh 
    yarn typeorm migration:run
    ```


## 👀️ Rodar o projeto
Na pasta backend rode

```sh
yarn dev:server
```

## Autor

👤 **Lucas Castro**

* Github: [LucasAugustoCastro](https://github.com/LucasAugustoCastro)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/lucasaugustocastro\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/lucasaugustocastro\/)

## Montre seu apoio

Dê uma ⭐️ se o projeto ajudou você!

## 📝 License

Copyright © 2020 [Lucas Castro](https://github.com/LucasAugustoCastro).<br />
This project is [MIT](https://github.com/LucasAugustoCastro/AnniversaryCalendar/blob/master/LICENSE) licensed.
