import styled from 'styled-components';
import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {Container, Typography} from "@mui/material";
import {Link, useNavigate} from 'react-router-dom'


function Search() {
    const [input,setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/'+input);
    }

    return (
        <Container maxWidth='md'>
            <Wraper>
                <Text >
                    Search for the perfect recipe
                </Text>
                <FormStyle onSubmit={submitHandler}>
                    <FaSearch/>
                    <input onChange={(e)=>setInput(e.target.value)} type='text' value={input}/>
                </FormStyle>

            </Wraper>



        </Container>
    );
}
const Wraper = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const Text = styled.div`
  font-family: 'Grape Nuts', cursive;
  font-size: 2.5rem;
  margin-top: 2rem;
`


const FormStyle = styled.form`
margin: 2rem 10rem;
  position: relative;
  
  input {
    border: none;
    background: rgb(150 150 150);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    max-width: 100%;
    //margin: 2rem;
  }
  svg {
    position: absolute; 
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`

export default Search;