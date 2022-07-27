import { TextField } from "@mui/material";
import { ChangeEventHandler } from "react";

type TextInputProps ={
    searchTerm: string;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    title: string
}

export default function TextInput(props: TextInputProps){
    return(
        <>
            <TextField 
                placeholder={props.title} 
                variant="standard" 
                sx={{marginY: '16px', background:'#fff', borderRadius:'6px'}} 
                onChange={props.handleChange}
                />
        </>
    )
}