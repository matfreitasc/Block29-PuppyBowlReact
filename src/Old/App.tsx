// import Field from '@components/Field'
// import { motion, AnimatePresence } from 'framer-motion'

// export default function App() {
// 	return (
// 		<div className='flex flex-row h-screen bg-red-800'>
// 			<div className='relative flex flex-col w-1/4 bg-green-900'>
// 				<h2 className='w-full p-2 text-3xl text-center bg-slate-100' id='teamA'>
// 					Team A
// 				</h2>
// 				<div className='bg-yellow-300 h-1/5'></div>
// 				<div className='bg-red-300 h-1/5'></div>
// 				<div className='bg-blue-300 h-1/5'></div>
// 				<div className='bg-gray-300 h-1/5'></div>
// 				<div className='bg-yellow-300 h-1/5'></div>
// 				<div className='bg-yellow-300 h-1/5'></div>
// 				<div className='bg-yellow-300 h-1/5'></div>
// 				<div className='bg-yellow-300 h-1/5'></div>
// 				<div className='bg-yellow-300 h-1/5'></div>
// 				<div className='bg-yellow-300 h-1/5'></div>
// 			</div>
// 			<div className='bg-[#008000] w-full flex items-center justify-center relative z-0'>
// 				<h1 className='absolute z-10 mx-auto text-3xl text-white top-4'>
// 					Puppy Bowl
// 				</h1>
// 				<Field />
// 			</div>
// 			<div className='relative flex flex-col w-1/4 overflow-hidden bg-amber-900'>
// 				<h2 className='w-full p-2 text-3xl text-center bg-slate-100' id='teamB'>
// 					Team B
// 				</h2>
// 				<AnimatePresence>
// 					<motion.div
// 						animate='visible'
// 						initial='hidden'
// 						className='flex flex-col h-full gap-4 overflow-y-auto'
// 						variants={{
// 							hidden: { opacity: 0 },
// 							visible: {
// 								opacity: 1,
// 								transition: {
// 									delay: 0.5,
// 									when: 'beforeChildren',
// 									staggerChildren: 0.2,
// 								},
// 							},
// 						}}>
// 						<motion.div
// 							variants={{
// 								hidden: { x: 100, opacity: 0 },
// 								visible: { x: 0, opacity: 1 },
// 							}}
// 							className='px-2 py-1 text-4xl text-red-900 bg-yellow-300'>
// 							<img src='' alt='' />
// 							Puppy 1
// 						</motion.div>
// 					</motion.div>
// 				</AnimatePresence>
// 			</div>
// 		</div>
// 	)
// }
