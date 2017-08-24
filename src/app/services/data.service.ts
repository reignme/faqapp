import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    this.questions = [
      {
        text: 'What is your name?',
        answer: 'My name is Woosuk',
        hide: true
      },
      {
        text: 'What is favorate color?',
        answer: 'My favorate color is red',
        hide: true
      },
      {
        text: 'What is favorate language?',
        answer: 'My favorate language is javascript',
        hide: true
      }
    ]
  }

  getQuestions() {
    return this.questions;
  }

  addQuestion(question:Question) {
    this.questions.unshift(question);
  }
}
