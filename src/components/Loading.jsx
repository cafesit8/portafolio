import loadingGif from '../img/loading.gif'

export default function Loading() {
  return (
    <main className='w-full h-screen grid place-content-center bg-transparent'>
        <img src={loadingGif} alt="gif de loading" />
    </main>
  )
}
