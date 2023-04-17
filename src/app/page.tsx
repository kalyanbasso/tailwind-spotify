import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, Laptop2, Volume, LayoutList, Maximize2 } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-4">
          <nav className='space-y-5'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100'>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100'>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100'>
              <Library />
              Your Library
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Hot Hits Brasil</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Road Playlist</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Top 50 - Mundo</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Quando eu falo Doka</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Potencia Sertaneja</a>
          </nav>
        </aside>
        <main className="flex-1 p-4">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>
          </div>
          <h1 className='font-semibold text-3xl mt-6'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='' className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.webp' alt={'Album image'} width={104} height={104} ></Image>
              <strong>Nunca Me Pegaram, Ok</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.webp' alt={'Album image'} width={104} height={104} ></Image>
              <strong>Nunca Me Pegaram, Ok</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.webp' alt={'Album image'} width={104} height={104} ></Image>
              <strong>Nunca Me Pegaram, Ok</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.webp' alt={'Album image'} width={104} height={104} ></Image>
              <strong>Nunca Me Pegaram, Ok</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.webp' alt={'Album image'} width={104} height={104} ></Image>
              <strong>Nunca Me Pegaram, Ok</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='' className='bg-white/5 rounded flex group items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src='/album.webp' alt={'Album image'} width={104} height={104} ></Image>
              <strong>Nunca Me Pegaram, Ok</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>
          <h2 className='font-semibold text-2xl mt-4'>Made for Kalyan Basso</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.webp' className='w-full' alt={'Album image'} width={104} height={104} ></Image>
              <strong className='font-semibold'>Meu Album</strong>
              <span className='text-sm text-zinc-400'>descricao do album</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.webp' className='w-full' alt={'Album image'} width={104} height={104} ></Image>
              <strong className='font-semibold'>Meu Album</strong>
              <span className='text-sm text-zinc-400'>descricao do album</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.webp' className='w-full' alt={'Album image'} width={104} height={104} ></Image>
              <strong className='font-semibold'>Meu Album</strong>
              <span className='text-sm text-zinc-400'>descricao do album</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.webp' className='w-full' alt={'Album image'} width={104} height={104} ></Image>
              <strong className='font-semibold'>Meu Album</strong>
              <span className='text-sm text-zinc-400'>descricao do album</span>
            </a>
            <a href='' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/album.webp' className='w-full' alt={'Album image'} width={104} height={104} ></Image>
              <strong className='font-semibold'>Meu Album</strong>
              <span className='text-sm text-zinc-400'>descricao do album</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-2 flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <Image src='/album.webp' alt={'Album image'} width={56} height={56} ></Image>
          <div className='flex flex-col'>
            <strong className='hover:underline font-normal cursor-pointer'>Nunca Me Pegaram Ok</strong>
            <span className='text-xs text-zinc-400 hover:underline cursor-pointer'>Sidoka</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-4'>
            <Shuffle size={20} className='text-zinc-200' />
            <SkipBack size={20} className='text-zinc-200' />
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
              <Play />
            </button>
            <SkipForward size={20} className='text-zinc-200' />
            <Repeat size={20} className='text-zinc-200' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-400 h-1 rounded-full w-32'></div>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume size={20} />
            <div className='h-1 rounded-full w-16 bg-zinc-600'>
              <div className='bg-zinc-400 h-1 rounded-full w-2'></div>
            </div>
          </div>
          <Maximize2 size={16} />
        </div>
      </footer>
    </div>
  )
}
