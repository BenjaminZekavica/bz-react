import { Stack, Title, Text} from '@mantine/core';

const Feature = (props) => {
    return (
        <>
            <Stack className="c-feature">
                <figure className="c-feature__icon">
                    test
                </figure>
                <Title className="c-feature__headline">
                    { props.headline }
                </Title>
                <Text className="c-feature__text">
                    { props.text }
                </Text>
            </Stack>
        </>
    );
}
export default Feature;