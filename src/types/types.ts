export interface Player {
  id?: number
  name: string
  breed?: string
  status?: string
  imageUrl?: string
  createdAt?: string
  updatedAt?: string
  teamId?: number
  cohortId?: number
}
export interface Team {
  id: number
  name: string
  score: number
  createdAt: string
  updatedAt: string
  cohortId: number
  players: Player[]
}

export interface NewPlayerRequest {
  request: Request
}

