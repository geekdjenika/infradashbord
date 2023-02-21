import { Utilisateur } from "./utilisateur"

export class Infraction {
    id!: number
    description!: string
    reference!: string
    vocals!: any[]
    utilisateur!: Utilisateur
}