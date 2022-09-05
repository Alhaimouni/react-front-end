import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { wait } from "@testing-library/user-event/dist/utils";

test('Testing the text', async ()=>{

    render(<App/>);
    const name = await screen.findByTestId('name');
    expect(name).toHaveTextContent('Your Name');

})



test('Testing the name changing', async () => {

    render(<App />);
    const age = await screen.findByTestId('age');
    expect(age).toHaveTextContent('Your age after 5 years');
    // const inputFeild = await screen.findByTestId('ageField');
    // const submit = await screen.findByTestId('submit');
    // const form = await screen.findByTestId('form');
    // fireEvent.submit(inputFeild, { target: { id: {value : 25} } });
})



    // test('Testing the name changing',async ()=>{
    
    //     render(<App/>);
    //     const name = await screen.findByTestId('name');
    //     const inputFeild = await screen.findByTestId('input');
    //     fireEvent.change(inputFeild,{target:{value:'walla'}});
    //     expect(name).toHaveTextContent('My name is walla');
    
    // })