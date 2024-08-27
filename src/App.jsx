import LeftPage from './pages/LeftPage'
import RightPage from './pages/RightPage'
import MiddlePage from './pages/MiddlePage'

function App() {
  return (
    <>
      <div className='m-auto p-auto max-w-[1240px]'>
          {/* Left Page */}
          <div className='w-full flex'>
            <div className="w-full sm:w-[20%] px-4 py-8 hidden md:flex">
              <LeftPage />
            </div>
            {/* Middle Page */}
            <div className='w-full sm:w-full sm:px-8 py-8 md:px-0'>
              <MiddlePage />
            </div>
            {/* Right Page */}
            <div className='2-full sm:w-[30%] bg-pink-600 px-4 py-8 hidden xl:flex'>
              <RightPage />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
