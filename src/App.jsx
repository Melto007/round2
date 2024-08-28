import LeftPage from './pages/LeftPage'
import RightPage from './pages/RightPage'
import MiddlePage from './pages/MiddlePage'

function App() {
  return (
    <>
      <div className='m-auto p-auto max-w-[1240px] box-border'>
          {/* Left Page */}
          <div className='md:flex'>
            <div className="hidden md:block px-2 py-2">
              <LeftPage />
            </div>
            {/* Middle Page */}
            <div className='px-2 py-2 md:w-full'>
              <MiddlePage />
            </div>
            {/* Right Page */}
            <div className='hidden px-2 py-2 xl:block'>
              <RightPage />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
