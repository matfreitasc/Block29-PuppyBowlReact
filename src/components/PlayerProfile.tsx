import { deletePlayer } from '@api/api.ts'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Player } from 'types/types.ts'

type Props = {
  selectedPlayer: Player
  onClose: () => void
}

const PlayerProfile = (props: Props) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [deleteting, setDeleteting] = useState(false)

  const handleDelete = async () => {
    setDeleteting(true)
    await deletePlayer(props.selectedPlayer.id as number)
      .then(() => {
        setDeleteting(false)
        props.onClose()
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        navigate('/')
      })
  }

  return (
    <div className='relative flex flex-col items-center w-3/6 m-4 mx-auto rounded-lg'>
      {deleteting ? (
        <div className='absolute z-50 w-full h-full bg-white/60'>
          <div className='flex items-center justify-center w-full h-full'>
            <h1 className='text-3xl text-black/80'>Deleting Player ... </h1>
          </div>
        </div>
      ) : null}
      <div className='relative'>
        <img
          src={props.selectedPlayer.imageUrl}
          alt={props.selectedPlayer.name}
          className='w-[900px] h-[700px] object-cover rounded-t-lg'
        />
        {!open ? (
          <button
            type='button'
            onClick={() => {
              setOpen(!open)
            }}
            className='absolute top-0 right-0 p-2 text-2xl text-white rounded-tr-lg rounded-bl-sm bg-white/10'
            title='Menu'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z'
              />
            </svg>
          </button>
        ) : (
          <button
            type='button'
            onClick={handleDelete}
            className='absolute top-0 right-0 p-2 text-2xl text-red-600 rounded-tr-lg rounded-bl-sm bg-white/10'
            title='Menu'
          >
            Delete Player
          </button>
        )}
      </div>
      <div className='flex flex-col items-start justify-around w-full gap-6 p-2 text-2xl text-left bg-gray-100 rounded-b-lg'>
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
