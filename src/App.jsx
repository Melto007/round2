import LeftPage from './pages/LeftPage'
import RightPage from './pages/RightPage'
import MiddlePage from './pages/MiddlePage'

function App() {
  return (
    <>
      <div className='flex m-auto p-auto max-w-[1240px]'>
          {/* Left Page */}
          <div className="px-4 py-8 hidden md:flex">
            <LeftPage />
          </div>
          {/* Middle Page */}
          <div className='w-full py-8'>
            <MiddlePage />
          </div>
          {/* Right Page */}
          <div className='bg-pink-600 px-4 py-8 hidden xl:flex'>
            <RightPage />
          </div>
      </div>
    </>
  )
}

export default App
