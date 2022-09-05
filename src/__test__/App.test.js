import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('Testing the text', async ()=>{

    render(<App/>);
    const name = await screen.findByTestId('name');
    expect(name).toHaveTextContent('My name is meow');

})


// test('Testing the name changing',async ()=>{

//     render(<App/>);
//     const name = await screen.findByTestId('name');
//     const inputFeild = await screen.findByTestId('input');
//     fireEvent.change(inputFeild,{target:{value:'walla'}});
//     expect(name).toHaveTextContent('My name is walla');

// })

// test('Testing the submit', async ()=>{
//     render(<App/>);
//     const name = await screen.findByTestId('name');
//     const submitField = await screen.findByTestId('submit');
//     fireEvent.submit(submitField,{trager:{value:'Hello'}});
//     expect(name).toHaveTextContent('My name is Hello');
// })