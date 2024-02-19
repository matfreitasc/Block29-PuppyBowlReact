import type { NewPlayerRequest, Player } from '../types/types.ts'

const url = 'https://fsa-puppy-bowl.herokuapp.com/api/2308-ac-pt-web-pt-a/'

export async function getTeams(): Promise<Player[]> {
  const response = await fetch(`${url}/players`)
  const { data, error } = await response.json()
  const { players } = data

  if (error) {
    throw new Error(error)
  }

  return players
}

export async function addPlayers({ request }: NewPlayerRequest) {
  const formData = await request.formData()
  const player = Object.fromEntries(formData)

  console.log(player)
  const response = await fetch(`${url}/players`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(player),
  })
  const { data, error } = await response.json()

  console.log(data, error)
  if (error) {
    throw new Error(error)
  }
  const teamData = await getTeams() // get updated teams
  return teamData
}

export async function deletePlayer(id: number) {
  const response = await fetch(`${url}/players/${id}`, {
    method: 'DELETE',
  })
  const { error } = await response.json()

  if (error) {
    throw new Error(error)
  }
  return true
}
