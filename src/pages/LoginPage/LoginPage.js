import React from 'react';
import styled, {css} from 'styled-components';
import TextInput from './components/TextInput';
import FormItem from './components/FormItem';

const Layout = styled.div`
    width: 300px;
`;

const SubmitButton = styled.button `
    border: 1px solid red;
    cursor: pointer;
    background: green;

    ${(props) => props.block && css`
        display: block;
        width: 100%;
        height: 60px;
    `}
`;

const LoginPage = ({
    onLogin
}) => {
    const textInput = () => (<TextInput />);
    return (
        <Layout>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    console.log('Submit');
                }}
            >
                <FormItem title='Username' children={textInput}/>
                <FormItem title='Password' children={textInput}/>
                <SubmitButton block type='submit'>Submit</SubmitButton>
            </form>
        </Layout>
        
    )
}

export default LoginPage;
