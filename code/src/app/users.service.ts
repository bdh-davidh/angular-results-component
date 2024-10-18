import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  users = [
    {
      id: 1,
      results: [
        {
          category: 'reaction',
          score: 80,
          icon: './assets/images/icon-reaction.svg',
        },
        {
          category: 'memory',
          score: 92,
          icon: './assets/images/icon-memory.svg',
        },
        {
          category: 'verbal',
          score: 61,
          icon: './assets/images/icon-verbal.svg',
        },
        {
          category: 'visual',
          score: 72,
          icon: './assets/images/icon-visual.svg',
        },
      ],
    },
    {
      id: 2,
      results: [
        {
          category: 'reaction',
          score: 20,
          icon: './assets/images/icon-reaction.svg',
        },
        {
          category: 'memory',
          score: 32,
          icon: './assets/images/icon-memory.svg',
        },
        {
          category: 'verbal',
          score: 41,
          icon: './assets/images/icon-verbal.svg',
        },
        {
          category: 'visual',
          score: 12,
          icon: './assets/images/icon-visual.svg',
        },
      ],
    },
    {
      id: 3,
      results: [
        {
          category: 'reaction',
          score: 50,
          icon: './assets/images/icon-reaction.svg',
        },
        {
          category: 'memory',
          score: 42,
          icon: './assets/images/icon-memory.svg',
        },
        {
          category: 'verbal',
          score: 60,
          icon: './assets/images/icon-verbal.svg',
        },
        {
          category: 'visual',
          score: 74,
          icon: './assets/images/icon-visual.svg',
        },
      ],
    },
    {
      id: 3,
      results: [
        {
          category: 'reaction',
          score: 98,
          icon: './assets/images/icon-reaction.svg',
        },
        {
          category: 'memory',
          score: 87,
          icon: './assets/images/icon-memory.svg',
        },
        {
          category: 'verbal',
          score: 89,
          icon: './assets/images/icon-verbal.svg',
        },
        {
          category: 'visual',
          score: 92,
          icon: './assets/images/icon-visual.svg',
        },
      ],
    },
  ];

  getRandomUser() {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }
}
