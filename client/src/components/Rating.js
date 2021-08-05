import React, {useState} from "react";

import {Box, Icon, Stack} from "@chakra-ui/react"}

export default function Rating(){
const [rating, setRating] = useState(0)

const onClick = idx => {
    setRating(idx);
}
}