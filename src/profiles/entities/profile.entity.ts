import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('profiles')
export class Profile extends BaseEntity {
  @Column({ nullable: true })
  bio!: string;

  @Column({ nullable: true })
  socialLink!: string;

  // Establish a one-to-one relationship with the User entity
  @OneToOne(() => User)
  @JoinColumn() // This decorator is used to specify that this side of the relationship owns the foreign key
  user!: User;
}
