import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { SetStateAction, useId, useState } from 'react'

function Filters() {
  const [minPrice, setMinPrice] = useState<number[]>([0])
  const sliderID = useId()

  const handleChange = (newValue: number[]) => {
    setMinPrice(newValue)
  }

  return (
    <div className='text-white flex gap-5 flex-col'>
      <div>
        <Select>
          <SelectTrigger className='w-[180px]'>
            <SelectValue
              placeholder='Categories'
              className='placeholder:text-white'
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='Computers & Accessories'>
              Computers & Accessories
            </SelectItem>
            <SelectItem value='Displays & Input'>Displays & Input</SelectItem>
            <SelectItem value='Peripherals'>Peripherals</SelectItem>
            <SelectItem value='Components & Network'>
              Components & Network
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className='w-[180px] flex items-center gap-2 justify-center text-center'>
        <label htmlFor={sliderID}>Price</label>
        <Slider
          min={0}
          max={1000}
          value={minPrice}
          id={sliderID}
          onValueChange={handleChange}
        />{' '}
        <span>${minPrice[0]}</span>
      </div>
    </div>
  )
}

export default Filters
