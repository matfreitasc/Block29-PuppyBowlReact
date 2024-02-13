import Field from '@components/Field'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
	return (
		<div className='bg-red-800 h-screen flex flex-row'>
			<div className='bg-green-900 w-1/4 relative flex flex-col'>
				<h2 className='text-3xl p-2 w-full bg-slate-100 text-center'>Team A</h2>
				<div className='bg-yellow-300 h-1/5'></div>
				<div className='bg-red-300 h-1/5'></div>
				<div className='bg-blue-300 h-1/5'></div>
				<div className='bg-gray-300 h-1/5'></div>
				<div className='bg-yellow-300 h-1/5'></div>
				<div className='bg-yellow-300 h-1/5'></div>
				<div className='bg-yellow-300 h-1/5'></div>
				<div className='bg-yellow-300 h-1/5'></div>
				<div className='bg-yellow-300 h-1/5'></div>
				<div className='bg-yellow-300 h-1/5'></div>
			</div>
			<div className='bg-[#008000] w-full flex items-center justify-center relative z-0'>
				<h1 className='absolute top-4 mx-auto z-10 text-3xl text-white'>
					Puppy Bowl
				</h1>
				<Field />
			</div>
			<div className='bg-amber-900 w-1/4 relative flex flex-col overflow-hidden'>
				<h2 className='text-3xl p-2 w-full bg-slate-100 text-center'>Team B</h2>
				<AnimatePresence>
					<motion.div
						animate='visible'
						initial='hidden'
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: {
									delay: 0.5,
									when: 'beforeChildren',
									staggerChildren: 0.2,
								},
							},
						}}>
						<motion.div
							variants={{
								hidden: { x: 100, opacity: 0 },
								visible: { x: 0, opacity: 1 },
							}}
							className='bg-yellow-300 px-2 py-1 text-red-900 text-2xl'>
							Puppy
						</motion.div>
						<motion.div
							variants={{
								hidden: { x: 100, opacity: 0 },
								visible: { x: 0, opacity: 1 },
							}}
							className='bg-yellow-300 px-2 py-1 text-red-900 text-2xl'>
							Puppy
						</motion.div>
						<motion.div
							variants={{
								hidden: { x: 100, opacity: 0 },
								visible: { x: 0, opacity: 1 },
							}}
							className='bg-yellow-300 px-2 py-1 text-red-900 text-2xl'>
							Puppy
						</motion.div>
						<motion.div
							variants={{
								hidden: { x: 100, opacity: 0 },
								visible: { x: 0, opacity: 1 },
							}}
							className='bg-yellow-300 px-2 py-1 text-red-900 text-2xl'>
							Puppy
						</motion.div>
						<motion.div
							variants={{
								hidden: { x: 100, opacity: 0 },
								visible: { x: 0, opacity: 1 },
							}}
							className='bg-yellow-300 px-2 py-1 text-red-900 text-2xl'>
							Puppy
						</motion.div>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	)
}
