import { Request, Response } from 'express';
import { GeneratedWords } from '../../entities/GeneratedWords';
import { Attempts } from '../../entities/Attempts';
import fs from 'fs';
import path from 'path';


export const selectWord = async () => {
  try {
    const dirPath: string = path.join(__dirname, '../../../assets');
    fs.readFile(
      path.join(dirPath, 'words.txt'),
      'utf-8',
      (err: any, data: any) => {
        if (err) {
          console.log(err);
        } else {
          let dataArray: any = data.split('\n');
          const wordsFiveLetters = dataArray.filter((word: string) => word.length == 5);
          const numberRandom = generateRandom(wordsFiveLetters.length);
          const wordRandom = wordsFiveLetters.slice(
            numberRandom,
            numberRandom + 1
          );
          saveWord(wordRandom[0]);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const saveWord = async (wordRandom: string) => {
  try {
    const wordGenerated = new GeneratedWords();
    wordGenerated.word = wordRandom;
    await wordGenerated.save();
    return
  } catch (error) {
    console.log(error)
    return
  }
};


export const receiveWord = async (req: Request, res: Response) => {
  try {
    let validate: any;
    let wordUser: string = req.body.word.trim().toLowerCase()
    if (wordUser.length == 5) {
      const wordGenerated: any = await GeneratedWords.find({
        order: {createdAt: 'DESC'},
        take: 1
      })
      validate = await validateWords(wordGenerated, req.body.word, );      
    } else {
      validate = {message: 'Palabra debe contener 5 caracteres'};
    }
    res.json(validate);    
  } catch (error) {
    console.log(error)
    res.json(error)
  }
};




const validateWords = async (keywordRandom: any, wordUser: string) => {
  let repetitions: number = 0
  let result: any = {}
  let data: any 
  try {
    data = await Attempts.find({
      where: {
        word: {
          id: keywordRandom[0].id
        }
      },
      relations: {
        word: true
      },
      order: { createdAt: 'DESC'},
      take: 1
    })
    if (data.length == 0) {
      repetitions =+ 1
      result.message = `Intentos restantes ${5 -repetitions}`
    } else {
      repetitions = data[0].attempt + 1
      result.message = `Intentos restantes ${5 -repetitions}`
    }

    if (repetitions > 5) {
      const all = await Attempts.find({
        select: ['attempt', 'wordUser'],
        where: {
          word: {
            id: keywordRandom[0].id
          }
        }
      })
      result = {
        message: 'Intentos superados',
        word: `La palabra era --->[[ ${keywordRandom[0].word.toUpperCase()} ]]<---`,
        all,
      }
    } else {
      const attempt: any = new Attempts()
      attempt.attempt = repetitions
      attempt.wordUser = wordUser
      attempt.word = [keywordRandom[0]]
      await attempt.save()
     
      const sepWordRandom: any = keywordRandom[0].word.split('');
      const sepWordUser: any = wordUser.split('');
      let response: any = [];
      for (let i = 0; i < sepWordUser.length; i++) {
        let points = {
          letter: sepWordUser[i],
          value: 3,
        };
        if (sepWordRandom.includes(sepWordUser[i])) {
          points.value = 2;
        }
        if (sepWordUser[i] === sepWordRandom[i]) {
          points.value = 1;
        }
        response = response.concat(points);
      }
      result.response  =  response
    }

    return result;
    
  } catch (error) {
    console.log(error)
    return 'error'
  }
};

const generateRandom = (max: number) => {
  return Math.floor(Math.random() * max);
};


