import { Title } from '@mantine/core';

const Headline = (props) => {
    return (
        <Title className="o-headline" order={props.size}>{props.content}</Title>
    );
}
export default Headline;