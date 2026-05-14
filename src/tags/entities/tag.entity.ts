import { BaseEntity } from 'src/common/entities/base.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity('tags')
export class Tag extends BaseEntity {
  @Column({ unique: true })
  name!: string;

  @ManyToMany(() => Post, (post) => post.tags)
  posts!: Post[];
}
