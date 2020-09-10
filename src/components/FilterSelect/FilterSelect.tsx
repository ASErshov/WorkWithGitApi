import * as React from 'react'
import { MenuItem, Select, InputLabel } from '@material-ui/core'

export type FilterSelectProps ={
    handleSelect(value:string|number): void,
    lable: string,
    selected?: string|number,
    items: Array<{
        name: string,
        key: string|number
    }>
}

const FilterSelect: React.FC<FilterSelectProps> = ({handleSelect, lable, items, selected}): React.ReactElement =>{

    const handleChange = (e:React.ChangeEvent<{ value: unknown }>)=>{
        handleSelect(e.target.value as string|number)
    }

    return (
        <div>
            <InputLabel id="label">{lable}</InputLabel>
            <Select
            labelId="label"
            id="demo-simple-select"
            value={selected}
            onChange={handleChange}
            style ={{width: '100%'}}
            >
                <MenuItem value={0}>
                    <em>None</em>
                </MenuItem>
                {items.map(item =>
                <MenuItem key={`${lable}_filter_${item.key}`} value={item.key}>{item.name}</MenuItem>
                )}

            </Select>
        </div>
    )
}

export default FilterSelect