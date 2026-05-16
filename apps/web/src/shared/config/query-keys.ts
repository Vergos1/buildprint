export const QUERY_KEYS = {
  auth: {
    root: ["auth"],
    session: ["auth", "session"],
    user: ["auth", "user"],
  },
  users: {
    root: ["users"],
    all: ["users", "list"],
    byId: (id: number) => ["users", id],
  },
} as const

export const MUTATION_KEYS = {
  auth: {
    login: ["auth", "login"],
    register: ["auth", "register"],
  },
  users: {
    create: ["users", "create"],
    update: (id: number) => ["users", id, "update"],
    delete: (id: number) => ["users", id, "delete"],
  },
} as const
