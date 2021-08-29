import { Button, TextField } from '@material-ui/core'
import React from 'react'

export default function Movie() {
    return (
        <div>
            <br></br><br></br>
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Movie name"
            />
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Actor"
            />
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Actress"
            />
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Producer"
            />
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Director"
            />
            <br></br><br></br>
            <TextField
            type="text"
            variant="outlined"
            label="Camera"
            />
            <br></br><br></br>
            <Button
            color="primary"
            variant="contained"
            >SUBMIT</Button>
        </div>
    )
}
