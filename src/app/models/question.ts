import { Utilisateur } from "./utilisateur"

export class Question {
  id!: number
  question!: string
  reponse!: string
  mauvaisesReponses!: any[]
  utilisateur!: Utilisateur
}
