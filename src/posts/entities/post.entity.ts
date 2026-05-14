import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('posts')
export class Post extends BaseEntity {
  @Column()
  title!: string;

  @Column({ type: 'text' })
  content!: string;

  // Muitos posts para um usuário
  @ManyToOne(() => User, (user) => user.posts)
  user!: User;
}
