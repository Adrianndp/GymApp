import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

const FirstForm = () => {
    const [value, setValue] = React.useState('female');
    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
      <FormControl>
        <TextField
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>
            }}
          required id="height" label="Height" variant="standard" 
       />
        <TextField style={{marginBottom: '30px'}}
          InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>
          }}
          required id="weight" label="Weight" variant="standard" 
        />
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <FormLabel id="demo-controlled-radio-buttons-group">Activity</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="sedentary" control={<Radio />} label="Sedentary: little or no exercise" />
          <FormControlLabel value="light" control={<Radio />} label="Light: exercise 1-3 times/week" />
          <FormControlLabel value="moderate" control={<Radio />} label="Moderate: exercise 4-5 times/week" />
          <FormControlLabel value="active" control={<Radio />} label="Active: daily exercise or intense exercise 3-4 times/week" />
          <FormControlLabel value="very_active" control={<Radio />} label="Very Active: intense exercise 6-7 times/week" />
          <FormControlLabel value="extra_active" control={<Radio />} label="Extra Active: very intense exercise daily, or physical job" />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}


export const StepperForms = (props) => {
  if (props.step === 1) {
    return( <FirstForm />);
  }
  else {
    return(<div></div>);
  }
}