import Modal from '@components/Modal.tsx'
import { useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import { Player } from 'types/types.ts'
import { motion } from 'framer-motion'

const App = () => {
  const players = useLoaderData() as Player[]
  const [searchParams, setSearchParams] = useSearchParams()

  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(false)

  return (
    <div className='relative z-0 h-ful'>
      <nav className='sticky top-0 left-0 flex items-center w-full p-6 text-white bg-gray-900 min-h-14 '>
        <h1 className='text-4xl'>Puppy Bowl</h1>
        <div className='relative mx-auto overflow-hidden'>
          <input
            type='search'
            name=''
            id=''
            placeholder='search for a player...'
            onChange={(e) => {
              setSearchParams({ search: e.target.value.toLowerCase() })
            }}
            className='h-12 p-2 text-2xl text-black bg-gray-300 text-2 w-96 rounded-xl'
          />
          <button
            type='submit'
            className='absolute right-0 top-[50%] h-full translate-y-[-50%] rounded-br-xl rounded-tr-xl border-2 border-gray-600 bg-gray-600 px-4 font-sans'
          >
            Search
          </button>
        </div>

        <button
          type='button'
          className='p-4 ml-auto text-2xl bg-slate-700 rounded-xl'
          onClick={() => {
            setOpen(true)
          }}
        >
          New Player
        </button>
      </nav>
      <motion.div className='flex flex-wrap justify-center py-10 gap-x-8 gap-y-4'>
        {players
          .filter((player) => player.name.toLowerCase().includes(searchParams.get('search') || ''))
          .map((player) => (
            // we will display the players here
            <div
              key={player.id}
              className='flex flex-col flex-wrap items-center justify-center gap-4 p-2 bg-gray-200 rounded-lg cursor-pointer w-72 h-80'
              onClick={() => {
                setOpen(true)
              }}
            >
              <img src={player.imageUrl} alt={player.name} className='object-cover w-32 rounded-lg aspect-square' />
              <h1>Name: {player.name}</h1>
              <h1>Breed: {player.breed}</h1>
              <span className='px-10 py-1 text-white rounded-md bg-slate-700'> Click for more info</span>
            </div>
          ))}
      </motion.div>
      <Modal open={open} onClose={onClose} />
    </div>
  )
}

export default App
