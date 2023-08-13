import { Button } from '@mantine/core';

const Buttons = (props) => {
    let variant = props.variant;

    return (
        <>
            <a className="o-link" href={props.link} rel="noopener noreferrer">
                <Button 
                    className="c-button" 
                    variant={variant ? variant : 'default'}
                >
                    {props.text}
                </Button>
            </a>
        </>
    );
}
export default Buttons;