import { Profile } from 'src/profiles/entities/profile.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Table name
export class User {
  @PrimaryGeneratedColumn() // Primary key column, auto-incremented
  id!: number;

  @Column()
  firstName!: string;

  @Column({ unique: true }) // Garante que o email seja único
  email!: string;

  @Column({ default: true }) // Valor padrão
  isActive!: boolean;

  @OneToOne(() => Profile, (profile) => profile.user) // Estabelece um relacionamento um-para-um com a entidade Profile
  profile!: Profile;
}
