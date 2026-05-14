import { BaseEntity } from 'src/common/entities/base.entity';
import { Post } from 'src/posts/entities/post.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity('users') // Table name
export class User extends BaseEntity {
  @Column()
  firstName!: string;

  @Column({ unique: true }) // Garante que o email seja único
  email!: string;

  @Column({ select: false }) // Não seleciona a senha por padrão
  password!: string;

  @Column({ default: true }) // Valor padrão
  isActive!: boolean;

  @OneToOne(() => Profile, (profile) => profile.user) // Estabelece um relacionamento um-para-um com a entidade Profile
  profile!: Profile;

  @OneToMany(() => Post, (post) => post.user)
  posts!: Post[];
}
