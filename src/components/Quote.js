import React, { useState, useEffect } from 'react';
import { Box, useColorModeValue } from "@chakra-ui/react";
import axios from 'axios';

const Quote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const quoteAPI = async () => {
        let arrayOfQuotes = [];
        try {
            const data = await axios.get("https://api.quotable.io/random");
            arrayOfQuotes = data.data
        } catch (e) {
            console.log(e);
        }

        try {
            setQuote(arrayOfQuotes.content);
            setAuthor(arrayOfQuotes.author);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        quoteAPI();
    }, []);
    return (
        <Box textAlign="center" noOfLines={9} color={useColorModeValue("blackAlpha", "coral")}>
            {quote}
            <br />
            <Box mt="2" color={useColorModeValue("coral", "cyan")}>
                 {author}
            </Box>
        </Box>
    )
}

export default Quote;
