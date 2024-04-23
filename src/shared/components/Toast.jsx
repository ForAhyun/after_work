import styled from 'styled-components';

const Toast = ({ message }) => {
    return (
        <Container>
            <Message>{message}</Message>
        </Container>
    );
};

export default Toast;

const Container = styled.div`
    position: fixed;
    bottom: 600px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
`;

const Message = styled.span``;