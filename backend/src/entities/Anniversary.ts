import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';

@Entity('anniversaries')
class Anniversary {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  birthday_person: string;

  @Column()
  birthday_date: string;

  @Column()
  user_id: string;

  @ManyToOne(() => User)
  @JoinColumn({name: 'user_id'})
  user: User;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}

export default Anniversary;