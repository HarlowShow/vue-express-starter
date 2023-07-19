import { Entity, Fields, Validators } from "remult"

@Entity("tasks", {
  allowApiCrud: true
})
export class Task {
  @Fields.cuid()
  id = ""

  @Fields.string({
    validate: Validators.required
  })
  title = ""

  @Fields.string<Task>({
    validate: (task) => {
      if (task.title.length < 3) throw "Too Short"
    }
  })

  @Fields.boolean()
  completed = false

  @Fields.createdAt()
  createdAt?: Date
}

