import { Article } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class ArticleEntity implements Article {
  constructor({ author, ...data }: Partial<ArticleEntity>) {
    Object.assign(this, data);
    if (author) {
      this.author = new UserEntity(author);
    }
  }

  id: number;

  title: string;

  description: string | null;

  body: string;

  published: boolean;

  createdAt: Date;

  updatedAt: Date;

  authorId: number | null;

  author: UserEntity;
}
