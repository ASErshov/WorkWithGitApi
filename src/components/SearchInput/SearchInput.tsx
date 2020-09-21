import * as React from 'react'
import styles from './SearchInput.module.css'
import cn from 'clsx'
import { FormControl, OutlinedInput, InputAdornment, InputLabel, Button } from '@material-ui/core'

export type SearchInputProps = {
    handleSearch(text:string): void,
    lable?: string
    lableWidth?: number
    buttonText: string
    className?:string
}

const SearchInput: React.FC<SearchInputProps> = ({handleSearch, lable, lableWidth = 60, buttonText, className}): React.ReactElement =>{
    const [text, setText] = React.useState('');
    
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setText(event.target.value as string);
    }

    const handleSubmit = (text: string) =>{
        return ()=>{handleSearch(text)}
    }

    return(
        <div className={cn(styles.form, className)}>
        <FormControl fullWidth variant="outlined" size='small'>
        {lable && <InputLabel htmlFor="text">{lable}</InputLabel>}
        <OutlinedInput
            id="text"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            labelWidth={lableWidth}
            value = {text}
            onChange = {handleChange}
        />
        </FormControl>
        <Button variant="contained" type='submit' className={styles.submit} onClick={handleSubmit(text)}>
            {buttonText}
        </Button>
        </div>
    )
}

export default SearchInput