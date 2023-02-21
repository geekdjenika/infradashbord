import { Role } from "./role"
import { SessionJeu } from "./sessionjeu"

export interface Utilisateur {
    id?: number
    username?: string
    email?: string
    password?: string
    image?: string
    notifications?: any[]
    roles?: Role[]
    sessionJeux?: SessionJeu[]
}