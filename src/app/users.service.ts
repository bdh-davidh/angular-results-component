import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor() {}

  users = [
    {
      id: 1,
      results: [
        {
          category: "reaction",
          score: 80,
          icon: "./assets/images/icon-reaction.svg",
        },
        {
          category: "memory",
          score: 92,
          icon: "./assets/images/icon-memory.svg",
        },
        {
          category: "verbal",
          score: 61,
          icon: "./assets/images/icon-verbal.svg",
        },
        {
          category: "visual",
          score: 72,
          icon: "./assets/images/icon-visual.svg",
        },
      ],
    },
    {
      id: 2,
      results: [
        {
          category: "reaction",
          score: 20,
          icon: "./assets/images/icon-reaction.svg",
        },
        {
          category: "memory",
          score: 32,
          icon: "./assets/images/icon-memory.svg",
        },
        {
          category: "verbal",
          score: 41,
          icon: "./assets/images/icon-verbal.svg",
        },
        {
          category: "visual",
          score: 12,
          icon: "./assets/images/icon-visual.svg",
        },
      ],
    },
    {
      id: 3,
      results: [
        {
          category: "reaction",
          score: 50,
          icon: "./assets/images/icon-reaction.svg",
        },
        {
          category: "memory",
          score: 42,
          icon: "./assets/images/icon-memory.svg",
        },
        {
          category: "verbal",
          score: 60,
          icon: "./assets/images/icon-verbal.svg",
        },
        {
          category: "visual",
          score: 74,
          icon: "./assets/images/icon-visual.svg",
        },
      ],
    },
    {
      id: 4,
      results: [
        {
          category: "reaction",
          score: 58,
          icon: "./assets/images/icon-reaction.svg",
        },
        {
          category: "memory",
          score: 47,
          icon: "./assets/images/icon-memory.svg",
        },
        {
          category: "verbal",
          score: 63,
          icon: "./assets/images/icon-verbal.svg",
        },
        {
          category: "visual",
          score: 49,
          icon: "./assets/images/icon-visual.svg",
        },
      ],
    },
    {
      id: 5,
      results: [
        {
          category: "reaction",
          score: 57,
          icon: "./assets/images/icon-reaction.svg",
        },
        {
          category: "memory",
          score: 27,
          icon: "./assets/images/icon-memory.svg",
        },
        {
          category: "verbal",
          score: 89,
          icon: "./assets/images/icon-verbal.svg",
        },
        {
          category: "visual",
          score: 34,
          icon: "./assets/images/icon-visual.svg",
        },
      ],
    },
    {
      id: 6,
      results: [
        {
          category: "reaction",
          score: 34,
          icon: "./assets/images/icon-reaction.svg",
        },
        {
          category: "memory",
          score: 78,
          icon: "./assets/images/icon-memory.svg",
        },
        {
          category: "verbal",
          score: 26,
          icon: "./assets/images/icon-verbal.svg",
        },
        {
          category: "visual",
          score: 62,
          icon: "./assets/images/icon-visual.svg",
        },
      ],
    },
    {
      id: 7,
      results: [
        {
          category: "reaction",
          score: 72,
          icon: "./assets/images/icon-reaction.svg",
        },
        {
          category: "memory",
          score: 62,
          icon: "./assets/images/icon-memory.svg",
        },
        {
          category: "verbal",
          score: 34,
          icon: "./assets/images/icon-verbal.svg",
        },
        {
          category: "visual",
          score: 52,
          icon: "./assets/images/icon-visual.svg",
        },
      ],
    },
  ];

  calculateUserScore(user: User) {
    return Math.round(
      user.results.reduce((acc, cur) => {
        return (acc += cur.score);
      }, 0) / 4
    );
  }

  get randomUser() {
    return this.users[Math.floor(Math.random() * this.users.length)];
  }
}
