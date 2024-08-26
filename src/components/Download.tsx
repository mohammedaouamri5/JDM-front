import { sendDownload } from "../send/Download";
import { FILE } from "../interface";
import { useState } from "react";
import { FormLabel, Input } from "@mui/material";




export const Download = () => {
    const [file, setFile] = useState<FILE>({} as FILE);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile({
            ...file,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(file);
        sendDownload(file);
        // Add additional logic here for the form submission, like an API call
    };

    return (
        <>
            <form  
            onSubmit={handleSubmit}
            
            >
                <FormLabel htmlFor="url">URL</FormLabel>
                <Input
                    name="url"
                    type="url"
                    value={file.url}
                    onChange={handleChange}
                    required
                />
                <br />
                <FormLabel htmlFor="name">File Name</FormLabel>
                <Input
                    name="name"
                    type="text"
                    value={file.name}
                    onChange={handleChange}
                    required
                />
                <br />
                <Input type="submit" value="Submit" />
            </form>
        </>
    );
};