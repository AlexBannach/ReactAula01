import styled from 'styled-components';

const StyledText = styled.div`
    color: blue;
    font-size: 50px;
    text-align: center;
    background: papayawhip;
    
`;

function Title(props){
    return(
        <>
            <StyledText>{props.text}</StyledText>
        </>
    );
}

export default Title;