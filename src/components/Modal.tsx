import { Form } from 'react-router-dom'

interface Props {
  onClose: () => void
  open: boolean
}
export default function Modal(props: Props) {
  const { open, onClose } = props
  if (!open) {
    return <></>
  }
  return (
    <div className='fixed inset-0 z-50 flex overflow-auto bg-smoke-light'>
      <div className='relative flex flex-col w-full max-w-md p-8 m-auto bg-white rounded-lg'>
        <div className='flex flex-col'>
          <h1 className='text-3xl font-semibold'>Add a new player</h1>
          <Form method='post' id='add-player-form'>
            <div className='flex flex-col mt-4'>
              <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>
                Name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  required
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-sm leading-6'
                />
              </div>
              <label htmlFor='breed' className='block text-sm font-medium leading-6 text-gray-900'>
                Breed
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='breed'
                  id='breed'
                  required
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-sm leading-6'
                />
              </div>
              <label htmlFor='imageUrl' className='block text-sm font-medium leading-6 text-gray-900'>
                Image URL
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='imageUrl'
                  id='imageUrl'
                  required
                  className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-sm leading-6'
                />
              </div>
              <label htmlFor='location' className='block text-sm font-medium leading-6 text-gray-900'>
                Location
              </label>
              <select
                id='location'
                name='location'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 text-sm leading-6'
                defaultValue='Bench'
              >
                <option>Bench</option>
                <option>Field</option>
              </select>
              <label htmlFor='team' className='block text-sm font-medium leading-6 text-gray-900'>
                Team
              </label>
              <select
                id='team'
                name='team'
                className='mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 text-sm leading-6'
                defaultValue=''
              >
                <option value={428}>Ruff</option>
                <option value={429}>Fluff</option>
              </select>
              <button
                type='submit'
                onSubmit={() => {
                  onClose()
                }}
                className='flex w-full bg-gray-700 mt-4 justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Add Player
              </button>
            </div>
          </Form>
        </div>
        <span className='absolute top-0 right-0 p-4'>
          <button type='button' onClick={() => onClose()} className='text-3xl text-red-900 hover:text-red-700'>
            &times;
          </button>
        </span>
      </div>
    </div>
  )
}
