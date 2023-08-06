import React, { useState } from "react";
import {
  Box,
  Label,
  Input,
  Checkbox,
  Select,
  Textarea,
  Flex,
  Radio,
  Slider,
  Button,
} from "theme-ui";

export interface ContactFormProps {}

export default function ContactForm(props: any) {
  const [isWedding, setIsWedding] = useState(true);
  return (
    <div>
      <Box as="form" onSubmit={(e) => e.preventDefault()}>
        <Label htmlFor="name">Your Name</Label>
        <Input name="name" id="name" mb={3} />
        <>
          <Label htmlFor="nChildren">Number of Children</Label>
          <Select name="nChildren" id="nChildren" mb={3}>
            <option>Select number of children...</option>
            <option>1-4</option>
            <option>5-8</option>
            <option>8-12</option>
            <option>12+</option>
          </Select>
        </>
        <Flex mb={3} sx={{ width: 300 }}>
          <Label>
            <Radio
              name="letter"
              defaultChecked={true}
              onClick={() => {
                setIsWedding(true);
              }}
            />{" "}
            Wedding
          </Label>
          <Label>
            <Radio
              name="letter"
              onClick={() => {
                setIsWedding(false);
              }}
            />{" "}
            Other Event
          </Label>
        </Flex>
        {isWedding ? (
          <>
            <Label htmlFor="venue">Venue</Label>
            <Select name="venue" id="venue" mb={3}>
              <option>Select your venue...</option>
              <option>Frederick Meijer Gardens</option>
              <option>Leona Road</option>
              <option>Paddock Place</option>
              <option>Other</option>
            </Select>
          </>
        ) : (
          <>
            <Label htmlFor="eventDescription">Describe Your Event</Label>
            <Textarea
              name="eventDescription"
              id="eventDescription"
              rows={6}
              mb={3}
            />
          </>
        )}

        <Label htmlFor="details">Any Other Details</Label>
        <Textarea name="details" id="details" rows={6} mb={3} />

        <Button>Submit</Button>
      </Box>
    </div>
  );
}
