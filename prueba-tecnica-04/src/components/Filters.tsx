import { useFilters } from '@/hooks/useFilters'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { useId } from 'react'

export function Filters() {
  const { filters, setFilters } = useFilters()
  const sliderID = useId()

  const handleChangeMinPrice = (value: number[]) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: value[0],
    }))
  }

  const handleChangeCategory = (value: string[]) => {
    setFilters(prevState => ({
      ...prevState,
      category: value[0],
    }))
  }

  return (
    <div className='text-white flex gap-5 flex-col'>
      <div>
        <Select
          onValueChange={value => handleChangeCategory([value])}
          defaultValue='all'
        >
          <SelectTrigger className='w-[180px]'>
            <SelectValue
              placeholder='Categories'
              className='placeholder:text-white'
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='all'>All Categories</SelectItem>
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
          value={[filters.minPrice]}
          id={sliderID}
          onValueChange={value => handleChangeMinPrice(value)}
        />{' '}
        <span>${filters.minPrice}</span>
      </div>
    </div>
  )
}
