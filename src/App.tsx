export * from '@/tokens/colors';
export * from '@/tokens/typography';
export * from '@/tokens/spacing';
export * from '@/tokens/elevation';
export * from '@/tokens/radii';
export * from '@/tokens/breakpoints';


import { ColorTokens } from '@/pages/ColorTokens'
import { CoreComponents } from '@/pages/CoreComponents'
function App() {
  return (
    <>
      <ColorTokens />
      <CoreComponents />.
    </>
  )
}

export default App
