import { BaseEntity } from 'src/common/entities/base.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity('posts')
export class Post extends BaseEntity {
  @Column()
  title!: string;

  @Column({ type: 'text' })
  content!: string;

  // Muitos posts para um usuário
  @ManyToOne(() => User, (user) => user.posts)
  user!: User;

  @ManyToMany(() => Tag, (tag) => tag.posts)
  @JoinTable({ name: 'posts_tags' })
  tags!: Tag[]; // Cria uma tabela de junção para a relação muitos-para-muitos
}
