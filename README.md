<!-- ABOUT THE PROJECT -->
## About The Project

this is a API made with the main purpose of understanding token based applications.I decided to use dependency injection, cause the facilities that bring  to the development environment.

### Built With

* [![Docker][Docker.com]][Docker-url]
* [![Prisma][prisma.io]][Prisma-url]
* [![TypeDI][https://docs.typestack.community/]][TypeDI-url]
* [![TypeScript][typescriptlang.org]][TypeScript-url]

<!-- GETTING STARTED -->
## Getting Started


### Prerequisites

you must have docker installed in your machine and nodejs.

* Docker
  ```sh
  docker compose up dev-db -d`
  ```

* npm
  ```sh
  npm install
  ```

### Installation

Clone the repo
   ```sh
   git clone https://github.com/Sniper30/dependencyInjection
   ```



<!-- USAGE EXAMPLES -->
## Usage

you can go and test the API 

important you gonna get a token when you login o register an user and you must send that token by the headers if you want to go to the dashboard route.

1.Register an user: `http://localhost:8000/log/register`
   ```sh
   {
      "firstName": string,
      "lastName": string,
      "email": string,
      "password": string,
      "repeat_password": string,
      "picture": string,
      "age": number
   }
   ```

2.login : `http://localhost:8000/log/login`
   ```sh
   {
      "email": string,
      "password": string
   }
   ```

3.now you can pass to the dashboard: `http://localhost:8000/dashboard`
and get <h5> hola dashboard </h5>



[Docker.com]: https://img.shields.io/badge/Docker-384d54?style=for-the-badge&logo=Docker&logoColor=0db7ed
[Docker-url]: https://Docker.com 
[prisma.io]: https://img.shields.io/badge/Prisma-425563?style=for-the-badge&logo=prisma&logoColor=00b388
[Prisma-url]: https://www.prisma.io
[https://docs.typestack.community/]: https://img.shields.io/badge/TypeDI-425563?style=for-the-badge&logo=typedi&logoColor=00b388
[TypeDI-url]:https://docs.typestack.community/
[typescriptlang.org]: https://img.shields.io/badge/Typescript-00273f?style=for-the-badge&logo=Typescript&logoColor=3178c6
[TypeScript-url]: https://www.typescriptlang.org/ 

