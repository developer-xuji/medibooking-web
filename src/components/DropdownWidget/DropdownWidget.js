import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: relative;
`;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    background: white;
    border-radius: 5px;
    border: 1px solid rgba(41,43,50,0.1);
    min-width: 150px;
`;
const Item = styled.div`
    padding: 10px 20px;
    cursor:pointer;

    &~& {
        margin-top: 1px solid rgba(41,43,50,0.1);
    }
`;

class DropdownWidget extends React.Component {
    constructor(props) {
        super(props);
        
        const {items} = props;
        this.ITEMS = items;
        this.state = {
            ShowPatientLoginModal: false
        }
    }

    setShowPatientLoginModal(value) {

    }

    render() {
        const ITEMS = this.ITEMS
        return (
            <Box>
                <Layout>
                    {ITEMS.map( (i) => (<Item 
                                            key={i.key}
                                            
                                        >
                                            {i.contains}
                                        </Item>) )}
                </Layout>
                {this.props.PatientLoginModal}  
            </Box>
        );
    }
}

export default DropdownWidget;