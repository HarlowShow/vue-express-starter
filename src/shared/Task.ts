import { Entity, Fields, Validators, Allow } from "remult"

@Entity("tasks", {
    allowApiCrud: Allow.authenticated,
    allowApiInsert: "admin",
    allowApiDelete: "admin"
})
export class Task {
    @Fields.uuid()
    id!: string
  
    @Fields.string({
      validate: (task) => {
        if (task.title.length < 3) throw "Too Short"
      }
    })
    title = ""

  @Fields.boolean()
  completed = false

  @Fields.createdAt()
  createdAt?: Date
}

