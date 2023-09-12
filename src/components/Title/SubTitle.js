import styled from 'styled-components';

const StyledDiv = styled.div`
    font-size: 15px;
    color: gray;
    margin: 0 0 20px 0;  
`;


function SubTitle(props){
    return(
        <>
            <StyledDiv>{props.text}</StyledDiv>
        </>
    );
}

export default SubTitle;