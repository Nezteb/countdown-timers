import './App.css'
import Countdown from './Countdown'

function App() {
  return (
    <div className="inline-flex flex-wrap">
      <Countdown text="MWF2 Launch" targetDate={new Date("Oct 28, 2022 00:00:00 GMT-0000")}/>
      <Countdown text="Games Agnostic Goal" targetDate={new Date("Nov 1, 2022 00:00:00 GMT-0000")}/>
      <Countdown text="WZ2 Launch" targetDate={new Date("Nov 16, 2022 00:00:00 GMT-0000")}/>
    </div>
  )
}

export default App
