import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
