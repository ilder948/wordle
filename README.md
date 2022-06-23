
# Bienvenido a WordLe
## Instalation

- Clonar repositorio de git
```bash
git clone https://github.com/ilder948/wordle.git
cd wordle
npm install
```

- Iniciar aplicación en desarrollo

```bash 
npm run dev
```

- Construir aplicación para producción

```bash
 npm run build
 ```

 - Iniciar aplicacion en Produccion

 ```bash
npm run start
 ```

## Jugar

>peticion POST
```
http://localhost:3000/word
```
>Body
```json
  {
	"word": "string"
}
```

> Respuesta
```json
{
  "message": "Intentos restantes 4",
  "response": [
    {
      "letter": "string",
      "value": number
    },
    {
      "letter": "string",
      "value": number
    },
    {
      "letter": "string",
      "value": number
    },
    {
      "letter": "string",
      "value": number
    },
    {
      "letter": "string",
      "value": number
    }
  ]
}
```
>Respuesta si se cumplieron todos los intentos 
```json
  {
  "message": "Intentos superados",
  "word": "La palabra era --->[[ STRING ]]<---",
  "all": [
    {
      "attempt": number,
      "wordUser": "string"
    },
    {
      "attempt": number,
      "wordUser": "string"
    },
    {
      "attempt": number,
      "wordUser": "string"
    },
    {
      "attempt": number,
      "wordUser": "string"
    },
    {
      "attempt": number,
      "wordUser": "string"
    }
  ]
}
```
> Respuesta si se envia una palabra menor o mayor a 5 caracteres
```json
{
  "message": "Palabra debe contener 5 caracteres"
}
```


## Tecnologias Usadas

![Image text](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Image text](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Image text](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Image text](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Image text](https://img.shields.io/badge/TypeOrm-316115?style=for-the-badge&logo=TypeOrm&logoColor=white)

