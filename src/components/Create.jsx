import React, { useState } from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { createUser } from '../app/Features/userDetailsSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const handleGenderChange = (value) => {
        if (value === gender) {
            setGender("");
        } else {
            setGender(value);
        }
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formData = {
        name,
        email,
        age,
        gender,
    };
    // console.log(formData)

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(createUser(formData));
            navigate("/read");
        } catch (error) {
            // Handle any errors here (optional)
            console.log("Error occurred:", error);
        }
    }



    return (
        <Card className='flex mt-20 items-center' color="transparent" shadow={false}>
            <Typography className="text-[32px]">Fill the data</Typography>
            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-6">
                    <Input value={name} onChange={(e) => setName(e.target.value)} size="lg" label="Name" />
                    <Input value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        size="lg"
                        label="Email"
                    />
                    <Input value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number" size="lg" label="Age"
                    />
                </div>

                <div className='flex gap-6'>
                    <Checkbox
                        checked={gender === "Male"}
                        onChange={() => handleGenderChange("Male")}
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                Male
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Checkbox
                        checked={gender === "Female"}
                        onChange={() => handleGenderChange("Female")}
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                Female
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                </div>

                <Button className="mt-6" fullWidth>
                    Submit
                </Button>

            </form>
        </Card>
    );
}

export default Create