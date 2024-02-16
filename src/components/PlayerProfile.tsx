import { Player } from 'types/types.ts'

type Props = {
  selectedPlayer: Player
  onClose: () => void
}

const PlayerProfile = (props: Props) => {
  return (
    <div className='flex flex-col items-center w-3/6 gap-2 m-4 mx-auto rounded-lg'>
      <img src={props.selectedPlayer.imageUrl} alt={props.selectedPlayer.name} className='w-[900px]' />
      <div className='flex flex-col items-start justify-around w-full gap-6 p-2 text-2xl text-left bg-gray-100 rounded-lg'>
        <h1>Name: {props.selectedPlayer.name}</h1>
        <p>Breed: {props.selectedPlayer.breed}</p>
        <button type='button' onClick={props.onClose} className='w-full p-4 bg-gray-300 rounded-lg'>
          Go Back to main menu
        </button>
      </div>
    </div>
  )
}

export default PlayerProfile
