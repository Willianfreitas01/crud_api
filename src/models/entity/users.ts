import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn 
} from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: "name", type: "varchar" })
  name: String

  @Column({ name: "email", type: "varchar" })
  email: String

  @Column({ name: "phone", type: "int" })
  phone: String

  @CreateDateColumn({
    name: "created_at",
    type: "timestamp",
    default: () => "current_timestamp(6)",
    onUpdate: "current_timestamp(6)",
  })
  createdAt: Date
  @UpdateDateColumn({
    name: "updated_at",
    type: "timestamp",
    default: () => "current_timestamp(6)",
    onUpdate: "current_timestamp(6)",
  })
  updated_at: Date
}



