import { HTag } from './components/HTag'
import { Menu } from './components/Menu'
import { Typography } from './components/Typography'

export const App = () => {
  return (
    <div className='App'>
      <main>
        <HTag tag='h1'>HTag</HTag>
        <HTag tag='h2'>HTag</HTag>
        <HTag tag='h3'>HTag</HTag>
        <HTag tag='h4'>HTag</HTag>
        <HTag tag='h5'>HTag</HTag>
        <HTag tag='h6'>HTag</HTag>
        <Typography>Typography</Typography>
      </main>
      <Menu />
    </div>
  )
}

