import { addinputbox, AddTodo, UpdateTodos } from "./actiontype"

const initstate = {
    todos: []
}

export const todosreducer = (state = initstate, { type, payload }) => {
    switch (type) {
        case UpdateTodos:
            return {
                todos: [...payload]
            }
        case addinputbox:

            return {
                todos: [
                    ...state.todos.map(m => {
                        if (m.date == payload) {
                            return {
                                ...m,
                                status: !m.status
                            }
                        }
                        return m
                    }

                    )
                ]
            }

        case AddTodo:
            return {
                todos: [
                    ...state.todos.map(
                        m => {
                            if (m.date == payload.date) {
                                return {
                                    ...m,
                                    task: [...m.task, payload.task]
                                }
                            }

                            return m
                        }
                    )
                ]
            }


        default: return state
    }
}